// ============================================
// Genspark Memory Bridge - Background Script (Service Worker)
// GitHub APIとの通信、データの中継を行う
// T1-8: エラーハンドリング整備版（2026-05-10）
// T1-9 fix: customFilename 反映対応（2026-05-16）
// T1-11 fix: loadContext 空コンテキストガード追加（2026-05-29）
// T2-2: 復元提案フラグ管理・バッジ制御追加（2026-05-31）
// P3-3-1: [FUTURE-PAID] マーキング追加（2026-06-06）
// P3-2-2: 接続テストハンドラ追加（2026-06-07）
// ============================================

// ============================================
// エラーハンドリング用ヘルパー
// ============================================

// GitHub APIのHTTPステータスを日本語メッセージに変換
function mapGitHubError(response, errorBody) {
  const status = response.status;
  const original = (errorBody && errorBody.message) ? errorBody.message : "";

  if (status === 401) {
    return "PAT（Personal Access Token）が無効か期限切れです。GitHubで新しいPATを発行し、設定を更新してください。";
  }

  if (status === 403) {
    const remaining = response.headers.get("X-RateLimit-Remaining");
    if (remaining === "0") {
      return "GitHub APIのレート制限に達しました。しばらく待ってから再試行してください（通常1時間で復旧）。";
    }
    return "PATにリポジトリへの書き込み権限がありません。GitHub設定でPATの 'repo' スコープを有効にしてください。";
  }

  if (status === 404) {
    return "リポジトリが見つかりません。ユーザー名・リポジトリ名の綴りと、PATがそのリポジトリにアクセス可能か確認してください。";
  }

  if (status === 422) {
    return `リクエスト内容に問題があります。ブランチ名やファイルパスを確認してください。（詳細: ${original}）`;
  }

  if (status >= 500 && status < 600) {
    return "GitHub側で一時的な障害が発生しています。数分後に再試行してください。";
  }

  return `予期しないエラー（HTTP ${status}）: ${original}`;
}

// fetchエラー（ネットワーク切断等）を識別して日本語メッセージに変換
function mapNetworkError(error) {
  if (error instanceof TypeError) {
    return "ネットワーク接続を確認してください。GitHubサーバーに到達できませんでした。";
  }
  return error.message || "予期しないエラーが発生しました。";
}

// レスポンスのbodyを安全にJSONとして取得（取得失敗時は空オブジェクト）
async function safeJson(response) {
  try {
    return await response.json();
  } catch (e) {
    return {};
  }
}

// ============================================
// 復元提案フラグ管理（T2-2 方針D）
// ============================================

let restoreSuggestion = null; // { project, title, url, tabId }

// ============================================
// GitHub API 呼び出し関数群
// ============================================

// --- GitHub APIへファイルを保存する関数 ---
async function saveToGitHub(token, repo, path, content, commitMessage) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  let sha = null;
  try {
    const checkResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    if (checkResponse.ok) {
      const existing = await checkResponse.json();
      sha = existing.sha;
    }
  } catch (e) {
    // ネットワークエラー等。新規作成PUT側で再度エラーが出るのでここでは続行
  }

  const body = {
    message: commitMessage,
    content: btoa(unescape(encodeURIComponent(content))),
  };
  if (sha) {
    body.sha = sha;
  }

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorBody = await safeJson(response);
    throw new Error(mapGitHubError(response, errorBody));
  }

  return await response.json();
}

// --- GitHubからファイルを読み込む関数 ---
async function readFromGitHub(token, repo, path) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    const errorBody = await safeJson(response);
    throw new Error(mapGitHubError(response, errorBody));
  }

  const data = await response.json();
  const content = decodeURIComponent(escape(atob(data.content)));
  return content;
}

// --- GitHubのフォルダ内のファイル一覧を取得する関数（簡易版） ---
async function listFiles(token, repo, path) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  if (!Array.isArray(data)) return [];

  return data.map((item) => item.name);
}

// --- GitHubのフォルダ内のファイル一覧をsha付きで取得する関数 ---
async function listFilesWithSha(token, repo, path) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      return [];
    }
    const errorBody = await safeJson(response);
    throw new Error(mapGitHubError(response, errorBody));
  }

  const data = await response.json();
  if (!Array.isArray(data)) return [];

  return data.map((item) => ({
    name: item.name,
    path: item.path,
    sha: item.sha,
    type: item.type,
  }));
}

// --- GitHubからファイルを削除する関数 ---
async function deleteFromGitHub(token, repo, path, sha, commitMessage) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: commitMessage,
      sha: sha,
    }),
  });

  if (!response.ok) {
    const errorBody = await safeJson(response);
    throw new Error(mapGitHubError(response, errorBody));
  }

  return await response.json();
}

// --- 設定を読み込む関数 ---
async function getSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      ["githubToken", "githubRepo", "githubUser"],
      (result) => {
        resolve({
          token: result.githubToken || "",
          repo: result.githubRepo || "",
          user: result.githubUser || "",
        });
      }
    );
  });
}

// --- PAT未設定ガード共通関数（T1-8追加） ---
function checkSettings(settings) {
  const missing = [];
  if (!settings.user) missing.push("GitHubユーザー名");
  if (!settings.repo) missing.push("リポジトリ名");
  if (!settings.token) missing.push("Personal Access Token");
  if (missing.length === 0) return null;
  return `GitHub設定が未完了です。以下を入力して『設定を保存』を押してください: ${missing.join(", ")}`;
}

// --- customFilename サニタイズ（T1-9 fix 追加・2026-05-16） ---
function sanitizeCustomFilename(raw) {
  let cf = String(raw).trim();
  cf = cf.replace(/[\/\\:*?"<>|]/g, "_");
  if (!/\.md$/i.test(cf)) cf += ".md";
  return cf;
}

// ============================================
// メッセージリスナー
// ============================================

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  // --------------------------------------------
  // T2-2: content_script からの復元提案通知を受信
  // --------------------------------------------
  if (request.type === 'GMB_RESTORE_SUGGEST') {
    // [FUTURE-PAID] 復元トリガー検知: 有料化時はここでライセンス検証を挿入
    restoreSuggestion = {
      project: request.project || null,
      title: request.title || null,
      url: request.url,
      tabId: sender.tab ? sender.tab.id : null
    };

    // バッジ表示
    const tabId = sender.tab ? sender.tab.id : undefined;
    chrome.action.setBadgeText({ text: '!', tabId });
    chrome.action.setBadgeBackgroundColor({ color: '#FF6B35', tabId });

    console.log(`[MemoryBridge] 復元提案セット: 新チャットページ検知 (tab: ${tabId})`);
    sendResponse({ ok: true });
    return true;
  }

  // --------------------------------------------
  // T2-2: popup から復元提案フラグの問い合わせ
  // --------------------------------------------
  if (request.type === 'GMB_GET_RESTORE_SUGGESTION') {
    sendResponse({ suggestion: restoreSuggestion });
    return true;
  }

  // --------------------------------------------
  // T2-2: 復元完了後のバッジクリア
  // --------------------------------------------
  if (request.type === 'GMB_CLEAR_RESTORE_SUGGESTION') {
    const tabId = restoreSuggestion ? restoreSuggestion.tabId : undefined;
    restoreSuggestion = null;
    chrome.action.setBadgeText({ text: '', tabId });
    sendResponse({ ok: true });
    return true;
  }

  // --------------------------------------------
  // saveChat: 旧経路（DevTools手動テスト用に残置）
  // --------------------------------------------
  if (request.action === "saveChat") {
    (async () => {
      try {
        const settings = await getSettings();
        const settingsError = checkSettings(settings);
        if (settingsError) {
          sendResponse({ success: false, error: settingsError });
          return;
        }
        if (!request.filePath || !request.content) {
          sendResponse({ success: false, error: "filePath または content が空です" });
          return;
        }

        const fullRepo = `${settings.user}/${settings.repo}`;
        const filePath = request.filePath;
        const parts = filePath.split("/");
        const filenameOnly = parts[parts.length - 1];
        const dirPath = parts.slice(0, -1).join("/");
        const prefixMatch = filenameOnly.match(/^(.+?)_\d{4}-\d{2}-\d{2}\.md$/);
        const chatPrefix = prefixMatch ? prefixMatch[1] + "_" : null;

        if (chatPrefix) {
          try {
            const existingFiles = await listFilesWithSha(settings.token, fullRepo, dirPath);
            const targets = existingFiles.filter(f =>
              f.type === "file" &&
              f.name.startsWith(chatPrefix) &&
              f.name.endsWith(".md") &&
              f.path !== filePath
            );
            for (const t of targets) {
              await deleteFromGitHub(
                settings.token,
                fullRepo,
                t.path,
                t.sha,
                `古いスナップショット削除: ${t.name}`
              );
              console.log(`[MemoryBridge] 古いファイル削除: ${t.path}`);
            }
          } catch (e) {
            console.warn(`[MemoryBridge] 既存ファイル検索スキップ: ${e.message}`);
          }
        }

        const result = await saveToGitHub(
          settings.token,
          fullRepo,
          filePath,
          request.content,
          `チャット保存: ${filenameOnly}`
        );

        sendResponse({
          success: true,
          result: result,
          filePath: filePath,
          commitUrl: result && result.commit ? result.commit.html_url : null,
        });
      } catch (error) {
        console.error("[MemoryBridge] saveChat エラー:", error);
        sendResponse({ success: false, error: mapNetworkError(error) });
      }
    })();
    return true;
  }

  // --------------------------------------------
  // loadContext: 前回チャットとドキュメントをGitHubから読み込む
  // T1-11 fix: 全ファイル未取得時のガード追加（2026-05-29）
  // --------------------------------------------
  if (request.action === "loadContext") {
    (async () => {
      try {
        // [FUTURE-PAID] コンテキスト復元: 有料化時はここでライセンス検証を挿入
        const settings = await getSettings();
        const settingsError = checkSettings(settings);
        if (settingsError) {
          sendResponse({ success: false, error: settingsError });
          return;
        }

        const fullRepo = `${settings.user}/${settings.repo}`;
        const context = {};

        if (request.previousChatFile) {
          context.previousChat = await readFromGitHub(
            settings.token,
            fullRepo,
            `chats/${request.previousChatFile}`
          );
        }

        context.handoverDoc = await readFromGitHub(
          settings.token,
          fullRepo,
          "docs/引き継ぎドキュメント.md"
        );

        context.summary = await readFromGitHub(
          settings.token,
          fullRepo,
          "summaries/rolling_summary.md"
        );

        // T1-11 fix: 全ファイルが取得できなかった場合のガード
        const hasContent = context.handoverDoc || context.summary || context.previousChat;
        if (!hasContent) {
          sendResponse({
            success: false,
            error: "読み込み可能なファイルが見つかりませんでした。リポジトリに docs/引き継ぎドキュメント.md または summaries/rolling_summary.md を配置してください。"
          });
          return;
        }

        sendResponse({ success: true, context: context });
      } catch (error) {
        console.error("[MemoryBridge] loadContext エラー:", error);
        sendResponse({ success: false, error: mapNetworkError(error) });
      }
    })();
    return true;
  }

  // --------------------------------------------
  // listChats: 保存済みチャット一覧
  // --------------------------------------------
  if (request.action === "listChats") {
    (async () => {
      try {
        const settings = await getSettings();
        const settingsError = checkSettings(settings);
        if (settingsError) {
          sendResponse({ success: false, error: settingsError });
          return;
        }
        const fullRepo = `${settings.user}/${settings.repo}`;
        const files = await listFiles(settings.token, fullRepo, "chats");
        sendResponse({ success: true, files: files });
      } catch (error) {
        console.error("[MemoryBridge] listChats エラー:", error);
        sendResponse({ success: false, error: mapNetworkError(error) });
      }
    })();
    return true;
  }

  // --------------------------------------------
  // saveCurrentChat: popupから呼ばれるメイン経路
  // T1-9 fix: customFilename が指定されていればファイル名部分を差し替える
  // --------------------------------------------
  if (request.action === "saveCurrentChat") {
    (async () => {
      try {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tabs || tabs.length === 0) {
          sendResponse({ success: false, error: "アクティブタブが取得できませんでした。Gensparkのタブを選択してから保存してください。" });
          return;
        }
        const tabId = tabs[0].id;
        const tabUrl = tabs[0].url || "";
        if (!tabUrl.startsWith("https://www.genspark.ai/")) {
          sendResponse({ success: false, error: "Gensparkのページではありません。Gensparkのチャットページを開いてから保存してください。" });
          return;
        }

        let built;
        try {
          built = await chrome.tabs.sendMessage(tabId, { type: "GMB_BUILD_MARKDOWN" });
        } catch (e) {
          sendResponse({ success: false, error: "ページとの通信に失敗しました。Gensparkのページをリロードしてから再度お試しください。" });
          return;
        }

        if (!built || !built.ok || !built.data) {
          sendResponse({ success: false, error: "Markdown生成に失敗しました（content_scriptが応答せず）。Gensparkのページをリロードしてから再度お試しください。" });
          return;
        }
        const { markdown, meta } = built.data;
        if (!markdown || !meta || !meta.file_path) {
          sendResponse({ success: false, error: "生成結果に file_path が含まれていません。チャットが空である可能性があります。" });
          return;
        }

        const settings = await getSettings();
        const settingsError = checkSettings(settings);
        if (settingsError) {
          sendResponse({ success: false, error: settingsError });
          return;
        }

        // --- T1-9 fix: customFilename 反映ロジック（2026-05-16） ---
        const fullRepo = `${settings.user}/${settings.repo}`;
        const originalFilePath = meta.file_path;
        const originalParts = originalFilePath.split("/");
        const dirPath = originalParts.slice(0, -1).join("/");
        let filenameOnly = originalParts[originalParts.length - 1];
        if (request.customFilename) {
          filenameOnly = sanitizeCustomFilename(request.customFilename);
        }
        const filePath = dirPath ? `${dirPath}/${filenameOnly}` : filenameOnly;
        // --- T1-9 fix ここまで ---

        const prefixMatch = filenameOnly.match(/^(.+?)_\d{4}-\d{2}-\d{2}\.md$/);
        const chatPrefix = prefixMatch ? prefixMatch[1] + "_" : null;

        if (chatPrefix) {
          try {
            const existingFiles = await listFilesWithSha(settings.token, fullRepo, dirPath);
            const targets = existingFiles.filter(f =>
              f.type === "file" &&
              f.name.startsWith(chatPrefix) &&
              f.name.endsWith(".md") &&
              f.path !== filePath
            );
            for (const t of targets) {
              await deleteFromGitHub(
                settings.token,
                fullRepo,
                t.path,
                t.sha,
                `古いスナップショット削除: ${t.name}`
              );
              console.log(`[MemoryBridge] 古いファイル削除: ${t.path}`);
            }
          } catch (e) {
            console.warn(`[MemoryBridge] 既存ファイル検索スキップ: ${e.message}`);
          }
        }

        const result = await saveToGitHub(
          settings.token,
          fullRepo,
          filePath,
          markdown,
          `チャット保存: ${filenameOnly}`
        );

        sendResponse({
          success: true,
          filePath: filePath,
          commitUrl: result && result.commit ? result.commit.html_url : null,
          meta: meta,
        });
      } catch (error) {
        console.error("[MemoryBridge] saveCurrentChat エラー:", error);
        sendResponse({ success: false, error: mapNetworkError(error) });
      }
    })();
    return true;
  }

  // --------------------------------------------
  // P3-2-2: 接続テスト（設定の疎通確認）
  // --------------------------------------------
  if (request.action === "testConnection") {
    (async () => {
      try {
        const settings = await getSettings();
        const settingsError = checkSettings(settings);
        if (settingsError) {
          sendResponse({ success: false, error: settingsError });
          return;
        }

        const fullRepo = `${settings.user}/${settings.repo}`;
        const url = `https://api.github.com/repos/${fullRepo}`;

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${settings.token}`,
            Accept: "application/vnd.github.v3+json",
          },
        });

        if (!response.ok) {
          const errorBody = await safeJson(response);
          sendResponse({ success: false, error: mapGitHubError(response, errorBody) });
          return;
        }

        const repoData = await response.json();
        sendResponse({
          success: true,
          repoFullName: repoData.full_name,
          private: repoData.private,
        });
      } catch (error) {
        console.error("[MemoryBridge] testConnection エラー:", error);
        sendResponse({ success: false, error: mapNetworkError(error) });
      }
    })();
    return true;
  }
});

console.log("[MemoryBridge] Background script が起動しました");
