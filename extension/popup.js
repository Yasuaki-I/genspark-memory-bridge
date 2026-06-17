// ============================================
// Genspark Memory Bridge - Popup Script
// ポップアップ画面のUI操作を処理する
// T1-6: チャット保存セクションをsaveCurrentChat方式にリニューアル
// T1-11 fix: クリップボードコピー時の空コンテキストガード追加（2026-05-29）
// T2-3: 復元提案バナー＋一括復元ボタン追加（2026-05-31）
// P3-2-2: 接続テストボタン追加（2026-06-07）
// T1-13 fix: 保存成功時にloadFileNameへフルパス自動反映（2026-06-17）
// ============================================

// --------------------------------------------
// 既存ステータス（GitHub設定・コンテキスト復元用）
// --------------------------------------------
function showStatus(message, type) {
  const statusEl = document.getElementById("status");
  statusEl.textContent = message;
  statusEl.className = type; // "success", "error", "info"

  // 5秒後に自動で消える
  setTimeout(() => {
    statusEl.className = "";
    statusEl.style.display = "none";
  }, 5000);
}

// --------------------------------------------
// 専用結果エリア（チャット保存用・消えずに残る）
// --------------------------------------------
function showSaveResult(html, type) {
  const el = document.getElementById("saveResult");
  el.innerHTML = html;
  el.className = type; // "success" or "error"
}

function clearSaveResult() {
  const el = document.getElementById("saveResult");
  el.innerHTML = "";
  el.className = "";
}

// --------------------------------------------
// HTMLエスケープ（filePath等を安全に表示するため）
// --------------------------------------------
function escapeHtml(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// --------------------------------------------
// ボタンの状態切替（処理中スピナー表示）
// --------------------------------------------
function setSaveButtonBusy(busy) {
  const btn = document.getElementById("btnSaveChat");
  if (busy) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>保存中...';
  } else {
    btn.disabled = false;
    btn.textContent = "現在のチャットをGitHubに保存";
  }
}

function setRestoreButtonBusy(busy) {
  const btn = document.getElementById("btnRestore");
  if (busy) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>復元中...';
  } else {
    btn.disabled = false;
    btn.textContent = "復元する（読み込み＋コピー）";
  }
}

// --------------------------------------------
// アクティブタブの取得（contentScript通信用）
// --------------------------------------------
async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

// --------------------------------------------
// ページ読み込み時：保存済みの設定を復元 + ファイル名プレビュー取得 + 復元提案チェック
// --------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  // 設定復元
  chrome.storage.local.get(
    ["githubToken", "githubRepo", "githubUser"],
    (result) => {
      if (result.githubUser) {
        document.getElementById("githubUser").value = result.githubUser;
      }
      if (result.githubRepo) {
        document.getElementById("githubRepo").value = result.githubRepo;
      }
      if (result.githubToken) {
        document.getElementById("githubToken").value = result.githubToken;
      }
    }
  );

  // ファイル名プレビュー取得（content_scriptに問い合わせ）
  try {
    const tab = await getActiveTab();
    if (!tab || !tab.id) return;

    chrome.tabs.sendMessage(tab.id, { action: "previewFilename" }, (response) => {
      if (chrome.runtime.lastError) {
        return;
      }
      if (response && response.ok && response.filename) {
        const input = document.getElementById("saveFileName");
        input.value = response.filename;
        const hintEl = document.querySelector(".section .hint");
        if (hintEl && response.messageCount != null) {
          hintEl.textContent = `${response.messageCount}件のメッセージ・空欄保存で自動生成名を使用`;
        }
      }
    });
  } catch (e) {
    console.warn("[MemoryBridge] previewFilename 失敗:", e);
  }

  // T2-3: 復元提案チェック（backgroundに問い合わせ）
  try {
    chrome.runtime.sendMessage({ type: 'GMB_GET_RESTORE_SUGGESTION' }, (response) => {
      if (chrome.runtime.lastError) {
        return;
      }
      if (response && response.suggestion) {
        const banner = document.getElementById("restoreBanner");
        banner.classList.add("active");
      }
    });
  } catch (e) {
    console.warn("[MemoryBridge] 復元提案チェック失敗:", e);
  }

  // T1-13 fix: 前回保存パスをストレージから復元してloadFileNameに反映
  chrome.storage.local.get(["lastSavedChatPath"], (result) => {
    if (result.lastSavedChatPath) {
      const loadFileInput = document.getElementById("loadFileName");
      if (!loadFileInput.value) {
        loadFileInput.value = result.lastSavedChatPath;
      }
    }
  });
});

// --------------------------------------------
// 設定を保存ボタン（既存・変更なし）
// --------------------------------------------
document.getElementById("btnSaveSettings").addEventListener("click", () => {
  const user = document.getElementById("githubUser").value.trim();
  const repo = document.getElementById("githubRepo").value.trim();
  const token = document.getElementById("githubToken").value.trim();

  if (!user || !repo || !token) {
    showStatus("すべての項目を入力してください", "error");
    return;
  }

  chrome.storage.local.set(
    { githubUser: user, githubRepo: repo, githubToken: token },
    () => {
      showStatus("設定を保存しました", "success");
    }
  );
});

// --------------------------------------------
// P3-2-2: 接続テストボタン
// --------------------------------------------
document.getElementById("btnTestConnection").addEventListener("click", () => {
  const btn = document.getElementById("btnTestConnection");
  const resultEl = document.getElementById("testResult");

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>テスト中...';
  resultEl.style.display = "none";

  chrome.runtime.sendMessage({ action: "testConnection" }, (res) => {
    btn.disabled = false;
    btn.textContent = "接続テスト";

    if (chrome.runtime.lastError) {
      resultEl.textContent = `✗ ${chrome.runtime.lastError.message}`;
      resultEl.style.display = "block";
      resultEl.style.background = "#f8d7da";
      resultEl.style.color = "#721c24";
      resultEl.style.border = "1px solid #f5c6cb";
      return;
    }

    if (res && res.success) {
      const visibility = res.private ? "プライベート" : "パブリック";
      resultEl.textContent = `✓ 接続成功 — ${res.repoFullName}（${visibility}）`;
      resultEl.style.display = "block";
      resultEl.style.background = "#d4edda";
      resultEl.style.color = "#155724";
      resultEl.style.border = "1px solid #c3e6cb";
    } else {
      const errMsg = res && res.error ? res.error : "不明なエラー";
      resultEl.textContent = `✗ ${errMsg}`;
      resultEl.style.display = "block";
      resultEl.style.background = "#f8d7da";
      resultEl.style.color = "#721c24";
      resultEl.style.border = "1px solid #f5c6cb";
    }
  });
});

// --------------------------------------------
// チャットをGitHubに保存ボタン（T1-6リニューアル）
// --------------------------------------------
document.getElementById("btnSaveChat").addEventListener("click", async () => {
  clearSaveResult();
  setSaveButtonBusy(true);

  const customName = document.getElementById("saveFileName").value.trim();

  const payload = { action: "saveCurrentChat" };
  if (customName) {
    payload.customFilename = customName;
  }

  chrome.runtime.sendMessage(payload, (res) => {
    setSaveButtonBusy(false);

    if (chrome.runtime.lastError) {
      showSaveResult(
        `<span class="label">保存失敗</span>${escapeHtml(chrome.runtime.lastError.message)}`,
        "error"
      );
      return;
    }

    if (res && res.success) {
      const filePath = res.filePath || "";
      const commitUrl = res.commitUrl || "";
      const meta = res.meta || {};

      let html = '<span class="label">✓ 保存完了</span>';
      html += `<div class="path">${escapeHtml(filePath)}</div>`;
      if (meta.message_count != null) {
        html += `<div>${escapeHtml(String(meta.message_count))}件のメッセージ`;
        if (meta.id_range) {
          html += `（id: ${escapeHtml(meta.id_range)}）`;
        }
        html += '</div>';
      }
      if (commitUrl) {
        html += `<div style="margin-top:4px;"><a href="${escapeHtml(commitUrl)}" target="_blank" rel="noopener">GitHubで開く →</a></div>`;
      }
      showSaveResult(html, "success");

      // T1-13 fix: 保存成功時にloadFileNameへフルパスを自動反映
      if (filePath && filePath.startsWith("chats/")) {
        const relativePath = filePath.replace(/^chats\//, "");
        const loadFileInput = document.getElementById("loadFileName");
        loadFileInput.value = relativePath;
        // 次回ポップアップ起動時にも反映されるようストレージに保存
        chrome.storage.local.set({ lastSavedChatPath: relativePath });
      }
    } else {
      const errMsg = res && res.error ? res.error : "不明なエラー";
      showSaveResult(
        `<span class="label">✗ 保存失敗</span>${escapeHtml(errMsg)}`,
        "error"
      );
    }
  });
});

// --------------------------------------------
// T2-3: 一括復元ボタン（復元提案バナー内・方針D）
// loadContext + clipboard copy を1クリックで実行
// T1-13 fix: lastSavedChatPathを自動適用（2026-06-17）
// --------------------------------------------
document.getElementById("btnRestore").addEventListener("click", async () => {
  setRestoreButtonBusy(true);

  // T1-13 fix: ストレージから前回保存パスを取得して自動適用
  const stored = await new Promise((resolve) => {
    chrome.storage.local.get(["lastSavedChatPath"], (result) => {
      resolve(result.lastSavedChatPath || null);
    });
  });

  chrome.runtime.sendMessage(
    {
      action: "loadContext",
      previousChatFile: stored,
    },
    async (response) => {
      if (chrome.runtime.lastError) {
        setRestoreButtonBusy(false);
        showStatus(`復元失敗: ${chrome.runtime.lastError.message}`, "error");
        return;
      }

      if (!response || !response.success) {
        setRestoreButtonBusy(false);
        const errMsg = response && response.error ? response.error : "不明なエラー";
        showStatus(`復元失敗: ${errMsg}`, "error");
        return;
      }

      const context = response.context;

      if (!context.handoverDoc && !context.summary && !context.previousChat) {
        setRestoreButtonBusy(false);
        showStatus("コンテキストの内容が空です。リポジトリにファイルが正しく配置されているか確認してください", "error");
        return;
      }

      let fullContext = "";

      if (context.previousChat) {
        fullContext += "=== 前回チャットログ ===\n\n";
        fullContext += context.previousChat;
        fullContext += "\n\n";
      }

      if (context.handoverDoc) {
        fullContext += "=== 引き継ぎドキュメント ===\n\n";
        fullContext += context.handoverDoc;
        fullContext += "\n\n";
      }

      if (context.summary) {
        fullContext += "=== ローリングサマリー ===\n\n";
        fullContext += context.summary;
        fullContext += "\n\n";
      }

      try {
        await navigator.clipboard.writeText(fullContext);
        setRestoreButtonBusy(false);

        // バッジクリア
        chrome.runtime.sendMessage({ type: 'GMB_CLEAR_RESTORE_SUGGESTION' });

        // バナーを成功表示に変更
        const banner = document.getElementById("restoreBanner");
        banner.innerHTML = `
          <div class="banner-title" style="color: #28a745;">✓ コピーしました（${fullContext.length}文字）</div>
          <div class="banner-desc">Ctrl+V でチャット欄に貼り付けてください</div>
        `;

      } catch (err) {
        setRestoreButtonBusy(false);
        showStatus("クリップボードへのコピーに失敗しました", "error");
      }
    }
  );
});

// --------------------------------------------
// コンテキスト復元（既存・Phase 1互換として維持）
// T1-11 fix: クリップボードコピー時の空コンテキストガード追加（2026-05-29）
// --------------------------------------------
let loadedContext = null;

document.getElementById("btnLoadContext").addEventListener("click", () => {
  const fileName = document.getElementById("loadFileName").value.trim();

  showStatus("コンテキストを読み込み中...", "info");

  chrome.runtime.sendMessage(
    {
      action: "loadContext",
      previousChatFile: fileName || null,
    },
    (response) => {
      if (response && response.success) {
        loadedContext = response.context;

        const parts = [];
        if (loadedContext.handoverDoc) parts.push("引き継ぎドキュメント");
        if (loadedContext.summary) parts.push("サマリー");
        if (loadedContext.previousChat) parts.push("前回チャット");

        showStatus(
          `読み込み完了: ${parts.join(", ")}（「クリップボードにコピー」を押してください）`,
          "success"
        );
      } else {
        showStatus(
          `読み込み失敗: ${response ? response.error : "不明なエラー"}`,
          "error"
        );
      }
    }
  );
});

document.getElementById("btnCopyContext").addEventListener("click", async () => {
  if (!loadedContext) {
    showStatus("先に「コンテキストを読み込み」を実行してください", "error");
    return;
  }

  if (!loadedContext.handoverDoc && !loadedContext.summary && !loadedContext.previousChat) {
    showStatus("コンテキストの内容が空です。GitHubリポジトリにファイルが正しく配置されているか確認してください", "error");
    return;
  }

  let fullContext = "";

  if (loadedContext.previousChat) {
    fullContext += "=== 前回チャットログ ===\n\n";
    fullContext += loadedContext.previousChat;
    fullContext += "\n\n";
  }

  if (loadedContext.handoverDoc) {
    fullContext += "=== 引き継ぎドキュメント ===\n\n";
    fullContext += loadedContext.handoverDoc;
    fullContext += "\n\n";
  }

  if (loadedContext.summary) {
    fullContext += "=== ローリングサマリー ===\n\n";
    fullContext += loadedContext.summary;
    fullContext += "\n\n";
  }

  try {
    await navigator.clipboard.writeText(fullContext);
    showStatus(
      `クリップボードにコピーしました（${fullContext.length}文字）。Gensparkのチャット欄にCtrl+Vで貼り付けてください`,
      "success"
    );
  } catch (err) {
    showStatus("クリップボードへのコピーに失敗しました", "error");
  }
});
