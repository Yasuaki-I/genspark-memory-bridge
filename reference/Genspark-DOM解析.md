# Genspark DOM 解析結果

- 調査日: 2026-05-02
- 調査者: ユーザー本人
- 対象URL: https://www.genspark.ai/agents?id=9aae0b58-6191-42aa-8891-10d3b17cc8a0
- 対象チャット名: GensparkMemoryBridge_001
- ブラウザ: Chrome（バージョン未記録）
- 使用エージェント: Claude Opus 4.7

## 結論
- [x] **Go**
- 採用方針: クラス名ベースのセレクタで抽出。AI応答は HTML→Markdown 逆変換が必要。
- 理由（3行以内）:
  1. `conversation-content` / `conversation-statement` 等、意味のある安定クラス名が階層的に揃っている
  2. ユーザー/AI の判別が `.user` / `.assistant` クラスで明確
  3. AI応答には `markdown-viewer` ラッパーと `data-source-line` 属性が付与され、構造復元が可能

## A. セレクタ安定性
| 対象 | セレクタ | 安定性評価 | 備考 |
|---|---|---|---|
| ルートコンテナ | `.conversation-content` | ◎ | Vue.js Scoped CSS識別子 `data-v-b1405ed7` で固定 |
| メッセージブロック | `.conversation-statement` | ◎ | 全25メッセージで一貫 |
| ユーザー発話判別 | `.conversation-statement.user` | ◎ | クラスで直接判別可能 |
| AI応答判別 | `.conversation-statement.assistant` | ◎ | クラスで直接判別可能 |
| ユーザー本文 | `.conversation-statement.user pre code` | ◎ | textContent取得で完結 |
| AI応答本文 | `.conversation-statement.assistant .markdown-viewer` | ◎ | innerHTMLをturndownで変換 |
| メッセージID | `.bubble[message-content-id]` | ◎ | 0始まりの連番、順序保証用 |
| チャットタイトル | `document.title` | ○ | URL末尾のid と併用推奨 |

## B. メッセージ構造

### ユーザー発話
入力テキストはMarkdown記号も含めてプレーンテキストのまま `<pre><code>` に格納される。HTML変換は行われない。

階層:
- `.conversation-statement.user`
  - `.conversation-item-desc.user`
    - `.bubble[message-content-id="N"]`
      - `.desc`
        - `.content`
          - `pre`
            - `code`（テキストそのまま）
  - `.message-actions-user`（コピー等のボタン群、抽出対象外）

### AI応答
Markdown が完全にHTML化されて表示される。`markdown-viewer` ラッパー内に標準的なHTMLタグで構造化。

階層:
- `.conversation-statement.assistant`
  - `.conversation-item-desc.assistant`
    - `.bubble[message-content-id="N"]`
      - `.desc`
        - `.content`
          - `.markdown-viewer`
            - `p` / `h2` / `h3` / `hr` / `pre>code` / `strong` / `ul>li` 等
            - 各要素に `data-source-line="行番号-行番号"` 属性付与

### 確認できたタグ（25メッセージ集計）
- 見出し: h2 (10), h3 (11), h1 (0)
- リスト: ul (6), li (12), ol (0)
- 強調: strong (38)
- コード: pre (21), code (43)
- 区切り線: hr 多数
- リンク: a (0) ※今チャット内で未使用のため未確認
- 表: table (0) ※今チャット内で未使用のため未確認

## C. 動的挙動
- ストリーミング: 本調査では未確認（生成完了後のみ調査）
- 完了判定: 未確認
- 仮想スクロール: **無し**（25メッセージ全件がDOMに常駐していることを確認）

## D. ネットワーク層（参考調査）
- 未調査（A・Bが良好なため代替案準備不要と判断）

## E. チャット識別
- タイトル取得方法: `document.title`（例: "GensparkMemoryBridge_001"）
- チャットID: URL クエリパラメータ `id=` の値（UUID形式）
- OpenClaw_00x 検知方法: `document.title` に対する正規表現マッチで実装可能

## 技術スタック判定
- フレームワーク: Vue.js + Nuxt（`__nuxt` div、`data-v-*` Scoped CSS識別子から判明）
- レンダリング: SSR + ハイドレーション（コンソールに `Hydration completed` ログあり）

## 重要な発見

### 発見1: ユーザー発話とAI応答でHTML構造が異なる
ユーザー側はプレーンテキスト保持、AI側はHTML変換済み。**抽出ロジックを2系統に分ける必要がある**。

### 発見2: data-source-line 属性
AI応答の各要素に元Markdownの行番号情報が残されている。Markdown逆変換時の順序保証・デバッグに活用可能。

### 発見3: message-content-id
各 `.bubble` に連番が振られている。メッセージ順序の確実な保証に使える。

## 次のアクション
- Phase 1 タスクリスト（tasks/phase1-tasks.md）に従って実装着手
- T1-1 で turndown ライブラリの動作確認を最優先

## 参考: 抽出コードの雛形

```javascript
// チャット全体の抽出
const root = document.querySelector('.conversation-content');
const messages = [...root.querySelectorAll('.conversation-statement')];

const extracted = messages.map(msg => {
  const role = msg.classList.contains('user') ? 'user' : 'assistant';
  const bubble = msg.querySelector('.bubble');
  const id = bubble?.getAttribute('message-content-id');
  
  let content;
  if (role === 'user') {
    content = bubble.querySelector('pre code')?.textContent || '';
  } else {
    const viewer = bubble.querySelector('.markdown-viewer');
    content = viewer?.innerHTML || ''; // turndown で Markdown 化
  }
  
  return { id: parseInt(id), role, content };
}).sort((a, b) => a.id - b.id);
```
