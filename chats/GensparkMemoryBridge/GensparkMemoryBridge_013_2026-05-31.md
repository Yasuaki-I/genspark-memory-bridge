---
chat_title: "GensparkMemoryBridge_013"
saved_at: "2026-05-31T16:59:05+09:00"
message_count: 38
id_range: "0-41"
project: "GensparkMemoryBridge"
source_url: "https://www.genspark.ai/agents?id=22621177-bc55-4875-98c8-91dfe417d2be"
---
## User [id:0]

やり取りの冒頭に必ず
〇往復目／25往復
と明記してください

本日　5/30（土）午後から警備の仕事が入ってしまったのですが
対応を要するタスクはありますか？

# GensparkMemoryBridge 引き継ぎドキュメント

**最終更新**: 2026-05-29（木）臨時稼働（KADOKAWA最小稼働対応の空き時間活用）
**更新者**: Claude-Chat（W5 5/29 稼働分）

---

## プロジェクト概要

Chrome 拡張で Genspark チャット全文を Markdown 化し GitHub に保存、次回チャット開始時に自動検知して復元（MVP: クリップボードへコピー）。Obsidian と GitHub 同期。

## ゴール

1. **保存フロー**: チャット終了 → 拡張ボタン → Markdown 化 → GitHub commit
2. **復元フロー**: 新チャット開始 → 拡張がチャット名パターン検知 → GitHub からログ＋引き継ぎドキュメント取得 → クリップボードへコピー → 手動 Ctrl+V ペースト（MVP）
3. **ドキュメント統合**: Obsidian ↔ GitHub 同期

## チャット構成表

| チャット | プラットフォーム | 役割 |
|---|---|---|
| ヴァイオレット（Violet） | Open Claw | OpenClaw 配信基盤の運用・スケジュール管理 |
| Claude-Chat | Genspark | 全体マネジメント・キャリア支援 |
| KADOKAWA-Chat | Genspark | KADOKAWA 案件管理 |
| GMB-Chat | Genspark | GensparkMemoryBridge 開発主担当（設計・ドキュメント） |
| GensparkMemoryBridge検証 | Claude Projects | T-VAL-1〜3 の検証対象（部分採用後はペルソナ運用枠へ転用予定） |

## 用語集

- **OpenClaw**: Fly.io 上の AI 自動配信基盤（9 ジョブの日次配信管理）
- **ヴァイオレット（Violet）**: OpenClaw 側チャット、配信実行・スケジュール管理
- **Claude-Chat**: Genspark チャット、全体マネジメント・キャリア支援
- **GensparkMemoryBridge（GMB）**: Chrome 拡張でチャット記憶永続化、Phase 2 実装中
- **KADOKAWA-Chat**: KADOKAWA 案件管理チャット
- **引き継ぎドキュメント**: 新チャット開始時に全文貼り付けて状態継承する文書（本ドキュメント）
- **3 原則**: ①「なぜ」を残す、②失敗を構造化、③状態と方針を分離
- **C&R 社**: クリーク・アンド・リバー社（エージェント）
- **★キャリア/**: Obsidian 内新設フォルダ、収益多角化・面談準備等格納
- **MCP**: Model Context Protocol、Claude Desktop 等が外部ツールに接続する仕組み
- **PAT**: Personal Access Token、GitHub API 認証用

## 技術スタック

- Chrome 拡張（Manifest V3）
- GitHub API
- Obsidian + Obsidian-Git
- turndown v7.2.0（lib/turndown.js）
- Docker Desktop（T-VAL-2 で導入）
- GitHub MCP Server（T-VAL-2 で接続検証済み）

## 現在ステータス

- **フェーズ**: Phase 2 本格実装着手可能
- **方針**: T-VAL-4 正式化済み（2026-05-29）— (a) Genspark で Phase 2 続行を主軸に、(c) ハイブリッド運用要素を部分採用。(b) 完全移管は正式除外
- **前提条件**: T1-11 修正完了（2026-05-29）。Phase 2 本格実装の阻害要因なし
- **次アクション**: T2-1（復元トリガー設計）着手

## 5/29 完了事項

- T1-11（復元クリップボードコピー不具合）修正完了
  - background.js: 空コンテキストガード追加
  - popup.js: コピー時空チェック追加
  - GitHub に `docs/引き継ぎドキュメント.md` 配置
- T-VAL-3 系統A 再実施・成功
  - 保存フロー: 24件メッセージ保存成功
  - 復元フロー: 引き継ぎドキュメント全文コピー成功
  - 応答品質: Level 1〜3 全て満点
- T-VAL-3 評価シート完成（evaluations/t-val-3-comparison.md）
- T-VAL-4 正式化（暫定判断→正式化、判断変更なし）
- 使い分けマトリクス正式版確定

## 5/24-25 完了事項

- T-VAL-3 系統A 着手（バグ発覚により中断）
- Phase 1 復元機能の重大バグ（T1-11）発見・タスク化
- Phase 2 タスク定義 (c) 部分採用反映（tasks/phase2-tasks.md 更新）
- T1-11、T1-12 候補の新規追加（tasks/phase2-tasks.md）
- 評価シート系統A 欄追記（evaluations/t-val-3-comparison.md）
- weekly-W4.md 5/23 終業時まとめ・5/24 終業時まとめ記入
- 引き継ぎドキュメント 5/25 終業時版作成
- Obsidian-Git で本日分一括 commit & push

## 5/23 完了事項

- T-VAL-1（Claude Projects セットアップ）完了
- T-VAL-2（GitHub MCP 接続検証）完了
- T-VAL-4 暫定判断確定: (a) 軸 + (c) 部分採用
- evaluations/t-val-3-comparison.md 作成
- tasks/t-val-3/手順書.md 作成
- progress/weekly-W4.md 新規作成

## 5/17 完了事項

- note 記事第3弾 遡及記録第1段階
- T1-6 UI 実装、T1-7 PAT 保存、T1-8 エラーハンドリング
- tasks/phase2-tasks.md 作成

## 最重要発見（T-VAL-2 で判明・2026-05-23）

**Claude Projects と GitHub MCP は同時に使用できない**

- Claude Projects 内チャット: ナレッジ参照可・MCP 不可
- Claude Desktop 通常チャット: MCP 可・ナレッジ参照不可
- T-VAL-4 で (b) 完全移管を除外した決定的根拠

## T1-11 バグと解決（2026-05-24 発見 → 2026-05-29 修正）

**Phase 1 復元機能の重大バグ → 修正完了**

- 症状: GitHub取得成功表示 → クリップボードコピーで0文字
- 根本原因: ①リポジトリに `docs/引き継ぎドキュメント.md` が未配置 ②全ファイル未取得時に success:true を返すロジック不備
- 修正: background.js にガード追加 + popup.js にガード追加 + ファイル配置
- 教訓: Phase 1 完了宣言時の実環境テスト不足が原因。T-VAL-3 検証で顕在化

## T-VAL-2 補足情報（2026-05-25 調査結果）

Windows 版 Claude Desktop + GitHub MCP Server の既知問題:

- GitHub MCP Server Issue #727: 初期化タイムアウト（Windows環境）
- GitHub MCP Server Issue #799: OAuth黒画面停止（Windows環境）
- docker/mcp-gateway Issue #424: Microsoft Store版制約、環境変数問題

(b) 除外理由の二重化: ①Projects+MCP同時利用不可 ②Windows環境でのMCP不安定性

## 使い分けマトリクス（正式版・2026-05-29 確定）

| 用途 | 使用環境 | 理由 |
|---|---|---|
| GMB プロジェクト本体開発（Phase 2以降） | Genspark + GMB | 主軸。保存・復元の一体運用 |
| ペルソナ運用・キャラクター性重視のチャット | Claude Projects | ナレッジ自動参照+カスタムインストラクションの利便性 |
| GitHub リポジトリの状態確認・軽微な修正 | Claude Desktop + MCP | 用途限定・不安定化時はGMB側にフォールバック |
| 全体マネジメント・キャリア支援 | Claude-Chat（Genspark） | 現状維持 |
| OpenClaw 配信基盤運用 | ヴァイオレット（OpenClaw） | 現状維持 |

## 次回稼働日の手順

1. 本ドキュメント確認
2. tasks/phase2-tasks.md 確認
3. **T2-1（復元トリガー設計）着手**
4. T2-1 完了後、T2-2（復元トリガー実装）に進む
5. progress/weekly-W5.md 作成・記入

## 未解決事項

- T2-1 復元トリガー設計（次回最優先）
- T1-12 の扱い（T1-11 修正完了済みのため再評価必要）
- note 記事第 3 弾の章構成詳細（T-VAL-3 完遂済み、第 10 章構成最終確定可能）
- プロジェクト名改名（「Claude ペルソナ運用」への改名、T-VAL-3 完遂済みのため実施可能）

## 稼働条件

- 原則: 土日祝のみ・1 日 3 時間
- 例外: 5/29（木）KADOKAWA最小稼働対応の空き時間で臨時稼働

## スケジュール

| 週 | 日付 | フェーズ | 状態 |
|---|---|---|---|
| W1〜W3 | 4/29〜5/17 | Phase 1 完成 | 完了 |
| W4 | 5/23〜5/25 | T-VAL 検証 + 部分実装 | 完了 |
| W5 | 5/29（臨時）+ 5/30〜5/31 | T1-11修正、T-VAL-3完了、T-VAL-4正式化、T2-1着手 | 進行中 |
| W6 | 6/6〜6/7 想定 | Phase 2 本格実装 T2-2〜T2-5 | 未着手 |
| 予備 | 6/13〜 | バッファ | 未着手 |

## 重要ファイルパス

- tasks/phase2-tasks.md
- tasks/t-val-3/手順書.md
- progress/weekly-W4.md
- evaluations/t-val-3-comparison.md
- docs/引き継ぎドキュメント.md（GitHub配置済み）
- reference/Genspark-DOM 解析.md

## 設計判断の履歴（5/9, 5/10, 5/16, 5/29）

- ファイル名プレビュー B 案、extractChat 保存、#saveResult エリア新設
- background.js エラーマッピング、403/404 判別ロジック
- customFilename 処理、ネットワーク切断時手動リトライ
- T1-11: 空コンテキストガード追加（background.js + popup.js）

## GMB-Chat への申し送り（5/29）

- T1-11 修正完了。根本原因は「ファイル未配置 + ロジック不備」の二重問題
- T-VAL-3 系統A 再実施成功、評価シート完成
- T-VAL-4 正式化完了（暫定→正式、判断変更なし）
- 使い分けマトリクス正式版確定
- 次回は T2-1（復元トリガー設計）から着手可能

## Assistant [id:1]

〇1往復目／25往復

引き継ぎドキュメントを確認しました。

**結論：本日5/30（土）午後に対応必須のタスクはありません。安心して警備のお仕事に行ってください。**

理由を整理すると：

**GMBプロジェクト側**は、5/29（木）の臨時稼働でT1-11修正・T-VAL-3完了・T-VAL-4正式化まで片付いており、次アクションの「T2-1（復元トリガー設計）」は設計タスクなので緊急性はありません。W5のスケジュール上は5/30〜5/31が稼働枠ですが、明日5/31（日）に回しても全く問題ない進捗状況です。

**OpenClaw（ヴァイオレット）側**やKADOKAW案件について本ドキュメントには今日期限のタスクは記載されていません。

もし明日5/31に時間が取れるなら、そこでT2-1着手＋weekly-W5.md作成をまとめてやるのが効率的だと思います。

## User [id:2]

お待たせしました
本日、5/31（日）進めましょう

## Assistant [id:3]

〇2往復目／25往復

了解です。本日5/31（日）、進めていきましょう。

引き継ぎドキュメントに基づくと、本日の作業は：

**最優先：T2-1（復元トリガー設計）着手**

これに取りかかるにあたって、まず確認したいのですが：

tasks/phase2-tasks.md の内容（T2-1の詳細定義）は手元にありますか？貼っていただければ、設計の議論をすぐ始められます。

また、本日の稼働時間の目安（3時間フル or 短縮など）があれば教えてください。それに合わせて作業の区切りを意識しながら進めます。

## User [id:4]

# Phase 2 タスク定義（コンテキスト復元機能 + 並行検証）

## Phase 2 運用方針（T-VAL-4 暫定判断 2026-05-23 確定）

- **基本方針**: (a) Genspark で Phase 2 続行（自動注入機能実装）を軸とする
- **部分採用**: (c) ハイブリッド運用の要素を必要箇所に組込
- **除外**: (b) Claude Projects + MCP 完全移管は Projects と MCP の同時利用不可制約により採用しない
- **使い分けマトリクス（暫定・Phase 2 完了時に正式化）**:
  - GMB プロジェクト本体開発（Phase 2 以降）: Genspark + GMB
  - ペルソナ運用・キャラクター性重視のチャット: Claude Projects
  - GitHub リポジトリの状態確認・軽微な修正: Claude Desktop + MCP
  - 全体マネジメント・キャリア支援: Claude-Chat（現状維持）
  - OpenClaw 配信基盤運用: ヴァイオレット（現状維持）
- **正式化のタイミング**: Phase 2 完了時に使い分けマトリクスを正式版として確定し、引き継ぎドキュメントに恒久セクションとして組込

## Phase 2 着手前の最優先タスク

T-VAL-3 系統A 実施（2026-05-24）で Phase 1 復元機能のバグが顕在化したため、Phase 2 本格実装に着手する前に Phase 1 のクローズ作業を実施する。

### T1-11: 復元クリップボードコピー不具合修正（最優先）

- **背景**: T-VAL-3 系統A 実施時（2026-05-24）に発覚。Phase 1 完了宣言時点では実環境テストが不十分だった
- **現象**:
  - 「コンテキストを読み込み」ボタン押下時は GitHub 取得成功表示（「読み込み完了」）
  - 続く「クリップボードにコピー」ボタン押下時、「クリップボードにコピーしました（0文字）」表示
  - 取得したコンテキストがコピー処理時に空になっている
- **推定原因**:
  - 「コンテキストを読み込み」で取得した内容を保持する変数がコピー処理時に参照できていない
  - ボタン間でのスコープ分離・ポップアップ閉鎖時の状態リセット等が候補
- **作業内容**:
  1. popup.js / popup.html で復元データの保持変数を確認
  2. 「コンテキストを読み込み」と「クリップボードにコピー」のイベントハンドラ間で変数共有を検証
  3. 必要に応じて chrome.storage.local 経由で状態保持に変更
  4. 単体動作確認（読み込み → コピー → 貼り付けで内容が一致）
  5. 既存の保存機能にデグレが発生していないことを確認
- **受け入れ基準**:
  - 「コンテキストを読み込み」 → 「クリップボードにコピー」 → Genspark チャットに Ctrl+V で貼り付けて引き継ぎ全文が貼り付けられる
  - エラーログに新規エラーが出ない
- **所要時間見積もり**: 60〜90分
- **依存関係**: なし
- **優先度**: 最優先（Phase 2 本格実装 T2-1 着手前に必須）

### T1-12（候補）: 新規チャット画面での保存ボタン誤押下時のエラーハンドリング改善

- **背景**: T-VAL-3 系統A 実施中に観測
- **現象**: 新規チャット画面（/agents?type=ai_chat）で `.conversation-content` 要素が存在しない場合、`[MemoryBridge] .conversation-content が見つかりません` エラーが extractMessages から発生
- **判断**: 本来想定外の操作（保存対象なしで保存ボタン押下）で発生するため、T1-11 修正後に再評価して優先度判定
- **優先度**: 低（T1-11 修正後に再評価）

## Phase 2 のゴール

新チャット開始時に、Chrome 拡張がチャット名パターン（OpenClaw_00x 等）を検知し、GitHub から前回ログ + 引き継ぎドキュメントを取得してクリップボードにコピーする。ユーザーは手動で Ctrl+V ペーストして復元する（MVP）。自動注入は Phase 4 後回し。

## 期間

W4（5/23, 5/24）+ 必要に応じて W5 冒頭

## タスク構成

### 検証フェーズ（W4 完了）

Phase 2 着手判断のため、Claude Projects + MCP との比較検証を先行実施。検証結果次第で Phase 2 の方針が変わるため、本格実装の前段階として独立フェーズで扱う。

#### T-VAL-1: Claude Projects セットアップ（30分）

- 受け入れ基準: Claude Projects に「GensparkMemoryBridge検証」プロジェクトを作成。カスタムインストラクション（システムプロンプト）に簡易ペルソナ設定を投入。ナレッジに既存の引き継ぎドキュメントと memory.md 相当のサマリファイルをアップロード。新規チャットを開いて「前回までの記憶を覚えているか」を確認できている状態
- **実施結果（2026-05-23 完了）**: Claude Projects「GensparkMemoryBridge検証」作成、カスタムインストラクション・memory.md・引き継ぎドキュメント投入完了。検証質問 Level 1 全問正答、Level 2 大筋合致（3/3）、Level 3 平均 4.67/5。記憶継続性の基本要件達成

#### T-VAL-2: GitHub MCP 接続検証（45分）

- 受け入れ基準: Claude Desktop に GitHub MCP サーバーを接続。GensparkMemoryBridge リポジトリへの読み書きが Claude から直接できる。memory.md を Claude が自動更新できることを実機確認
- **実施結果（2026-05-23 完了）**: Docker Desktop インストール、GitHub MCP Server 接続、Read/Write/Delete テスト全成功（Write SHA a7656d72、Delete SHA b0f2f1f4）。Docker 絶対パス指定で接続成功
- **重要発見**: Claude Projects と GitHub MCP は同時に使えない。Projects 内チャットは MCP 不可、Desktop 通常チャットはナレッジ参照不可。両機能を 1 チャットで完結させるにはチャット切替＋手動貼り付けが必要

#### T-VAL-3: 比較運用（実運用ベース・2チャット分）

- 受け入れ基準: 同じテーマで「Genspark + GensparkMemoryBridge」「Claude Projects + MCP」の2系統で並行運用。評価項目を優先度別に取得し、評価シートにまとめて Obsidian Vault に保存している状態
- 評価項目の優先度設計:
  - **5/23 必須取得**: 記憶の継続性（新チャット起動時に過去文脈を保持できるか）、操作の手間（拡張ボタン押下回数 vs プロジェクト切り替え回数）
  - **5/23 取得推奨**: コスト感の数値見積もり（Claude Projects + MCP 移管時の1チャットあたり推定トークン消費・ナレッジ常時読み込み分を含む・OpenClaw 側 Anthropic API 月間使用量への影響予測を含む）
  - **5/24 持ち越し許容**: 応答品質（同じテーマで2系統比較・主観評価）、エラー頻度（実運用2チャット分の累積エラー記録）
- スケジュールリスク対応: Claude Projects + MCP の新規セットアップ習熟に時間を取られた場合、5/24 持ち越し許容項目を後回しにして 5/23 必須取得項目の精度を優先する
- **実施状況（2026-05-24）**: 系統A 実施中に Phase 1 復元機能のバグが発覚し中断。系統B は本格実施未着手
- **持ち越し**: T1-11 修正後に系統A を再実施。系統B 実施も次回稼働日に持ち越し
- **詳細**: evaluations/t-val-3-comparison.md 参照

#### T-VAL-4: Phase 2 方針決定（30分）

- 受け入れ基準: 比較結果をもとに以下のいずれかを選択している状態。なお、Phase 1 保存基盤は「過去ログのアーカイブ用途」として全選択肢で維持する前提とする
  - (a) **継続実装**: Phase 2 自動注入機能を Genspark で完成させる。Genspark を主軸、Claude は補助
  - (b) **段階移管**: Phase 2 を Genspark で完成させず、Claude Projects + MCP に主軸を移す。Genspark は保存アーカイブ専用
  - (c) **並行運用**: Genspark と Claude Projects を用途別に使い分ける。Genspark = ブレスト・ログ保存、Claude = ペルソナ運用・重要判断
- 選択結果を引き継ぎドキュメントに記録し、note記事第3弾の素材としても活用
- 章構成影響の事前予測:
  - (a) 選択時: 章構成は現状維持。第9章「完成後の連携」と第10章「振り返り・学び」に T-VAL 検証プロセスを「より良い実現手段を検討した結果、現方式が最適と判断した経緯」として追記
  - (b) 選択時: 第5章「Phase 分割と MVP の切り方」と第9章「完成後の連携」の大幅書き直しが必要。「Phase 2 を Genspark で完成させず、Claude Projects + MCP に主軸を移した判断」を中心エピソードに据える。第10章のタイトルを「振り返り・学びと方針転換」に変える価値あり
  - (c) 選択時: 第9章「完成後の連携」のみ大幅書き直し。Genspark と Claude Projects の使い分けマトリクスを記事中に組み込む構成。第5章の Phase 分割の判断は現状維持で問題なし
- 5/24 終業時に OpenClaw 側と章構成影響について再協議する流れを確定済み
- **実施結果（2026-05-23 完了・暫定判断）**: (a) 継続実装を軸に (c) 並行運用要素を部分採用。(b) 段階移管は Projects と MCP 同時不可制約により除外
- **章構成への影響**: 第10章に「Projects + MCP 制約と (a)+(c) ハイブリッド選択経緯」を追記、第9章に Claude Projects ペルソナ運用枠を追記、第5章は現状維持
- **正式化のタイミング**: T-VAL-3 完遂後（次回稼働日以降）に最終確定

### 本格実装フェーズ（T-VAL-4 で (a)+(c) 採用確定・T1-11 修正後に着手）

T-VAL-4 暫定判断により本フェーズの実施が確定。ただし T1-11（復元クリップボードコピー不具合修正）が前提条件のため、T1-11 完了後に T2-1 着手。

#### T2-1: 復元トリガー設計（45分）

- 受け入れ基準: チャット名パターン（OpenClaw_00x / GensparkMemoryBridge_00x 等）を検知するロジックの設計が完了している。検知タイミング（content_script 注入時 / popup 起動時 / 手動ボタン）の選択も決定している

#### T2-2: GitHub からの読み込み実装（60分）

- 受け入れ基準: chats/{プロジェクト名}/ 配下の最新ファイルを取得する関数を background.js に実装。前回チャットログ（連番 -1）と引き継ぎドキュメントを取得できる

#### T2-3: クリップボードコピー実装（30分）

- 受け入れ基準: 取得したログとドキュメントをクリップボードに整形してコピー。popup から「コンテキストを復元」ボタン押下で実行できる

#### T2-4: 統合テスト（45分）

- 受け入れ基準: 実際の新チャット開始 → 復元ボタン押下 → Ctrl+V ペースト → 文脈が引き継がれていることを実機確認

#### T2-5: Phase 2 完了判定（30分）

- 受け入れ基準: T2-1〜T2-4 すべて完了。bak_phase2_final 作成。note記事メモ第2段階の遡及記録着手

### 想定スケジュール（2026-05-24 時点・実績反映）

| 日 | タスク | 所要 | 状態 |
|---|---|---|---|
| 5/23 | T-VAL-1, T-VAL-2 | 1.5時間 | 完了 |
| 5/23 | T-VAL-3 着手準備、T-VAL-4 暫定判断 | 1.5時間 | 完了 |
| 5/24 | T-VAL-3 系統A 実施（バグ発覚で中断）、Phase 2 タスク定義 (c) 反映修正 | 3時間 | 一部完了 |
| 次回稼働日（W5 想定） | T1-11 修正、T-VAL-3 再実施（系統A + 系統B） | 3時間 | 未着手 |
| W5 以降 | T2-1, T2-2 着手 | 1.5時間〜 | 未着手 |
| W5〜W6 | T2-3, T2-4, T2-5 | バッファ | 未着手 |

## 残課題と未確定事項

- **T1-11 修正**: Phase 2 T2-1 着手前の最優先課題
- **T-VAL-3 再実施**: T1-11 修正後に系統A・系統B を独立実施し、評価シートを完成させる
- **使い分けマトリクスの正式化**: Phase 2 完了時に確定
- **note 記事第3弾の章構成詳細**: T-VAL-3 完遂後に第10章の構成を最終確定
- **T1-12 の扱い**: T1-11 修正後に優先度を再評価

本日、３時間フルで対応可能です

## Assistant [id:5]

〇3往復目／25往復

了解です。3時間フル稼働、ありがたいです。

引き継ぎドキュメントとphase2-tasks.mdを照合すると、状況は明確です：

**T1-11：修正完了済み（5/29）** **T-VAL-3：系統A再実施・成功済み（5/29）** **T-VAL-4：正式化済み（5/29）**

つまり、本日はいよいよ **T2-1（復元トリガー設計）** から着手できます。

* * *

**本日の作業プラン（3時間）**

T2-1（復元トリガー設計）→ 45分目標で完了させ、余裕があればT2-2（GitHub読み込み実装）まで進む。最後にweekly-W5.md記入と引き継ぎドキュメント更新で締める、という流れでいかがでしょうか。

* * *

では早速T2-1に入ります。受け入れ基準は2点です：

1.  チャット名パターン検知ロジックの設計完了
2.  検知タイミングの選択決定

**設計に必要な確認事項：**

現在のGensparkのチャットURLまたはDOM上で、チャット名がどのように表示・取得可能か、という点です。reference/Genspark-DOM解析.md に記載があると思いますが、手元にありますか？もしあれば貼っていただけると、検知方式の選択肢を具体的に提案できます。

また、現時点で復元対象にしたいチャット名パターンは以下の認識で合っていますか：

-   `OpenClaw_001`, `OpenClaw_002`… のような連番形式
-   `GensparkMemoryBridge_001`… のような連番形式
-   その他のプロジェクト名＋連番

## User [id:6]

副全トリガー設定って
ひょっとして
t2-1-restore-trigger-design.md
のことでしょうか？

5/29（金）に作成したものを添付しますね

# T2-1 復元トリガー設計

**作成日**: 2026-05-29
**ステータス**: 設計確定・実装待ち
**方式**: C（ハイブリッド型）

---

## 概要

新しい Genspark チャットを開いた際に、復元対象であることを自動検知し、ワンクリックで前回コンテキストを復元できるようにする。

## 現状（Phase 1 MVP）

1. ユーザーが手動で拡張ポップアップを開く
2. 「コンテキストを読み込み」ボタンを押す
3. 「クリップボードにコピー」ボタンを押す
4. チャット欄に Ctrl+V

合計4ステップ。復元可能であることに気づかない場合もある。

## 目標（T2-1 実装後）

1. 新しい Genspark チャットを開く
2. 拡張アイコンにバッジ「!」が表示される（自動検知）
3. アイコンをクリック → 「前回コンテキストを復元しますか？」表示
4. 「復元」ボタン1つで読み込み+コピーが一括実行
5. Ctrl+V で貼り付け

4ステップ → 3ステップに短縮。かつ「復元可能」の通知により見落とし防止。

## トリガー条件

1. Genspark ページで URL が変わった（新チャット開始の第一トリガー）
2. チャットタイトルが登録済みプロジェクト名パターンにマッチ

## プロジェクト名パターン（初期登録）

- GensparkMemoryBridge
- OpenClaw
- KADOKAWA
- Claude-Chat
- GMB

（パターンは設定画面から追加・編集可能にする。Phase 2 後半タスク）

## 技術設計

### 検知メカニズム

- content_script 内で `navigation` イベント（またはURL変更の polling）を監視
- URL 変更検知時に `getChatTitle()` でタイトル取得
- タイトルがパターンマッチしたら `chrome.runtime.sendMessage` で background に通知
- background が `chrome.action.setBadgeText({ text: "!" })` でバッジ表示

### ポップアップUI変更

- ポップアップ起動時に background から「復元提案あり」フラグを取得
- フラグが立っていれば「コンテキスト復元」セクションの上部に提案バナーを表示:
  - 「GensparkMemoryBridge の前回コンテキストを復元しますか？」
  - 「復元する」ボタン（1クリックで loadContext + copyToClipboard を一括実行）
- 復元実行後、バッジをクリア

### 一括実行フロー（「復元する」ボタン）

1. background に `loadContext` 送信
2. レスポンスの context を受け取る
3. 即座に `navigator.clipboard.writeText()` 実行
4. 「コピーしました（○○文字）。Ctrl+V で貼り付けてください」表示
5. バッジクリア

### 影響範囲

- content_script.js: URL変更検知 + タイトルマッチ判定 + background通知 追加
- background.js: バッジ制御 + 復元提案フラグ管理 追加
- popup.js: 提案バナーUI + 一括復元ボタン 追加
- popup.html: 提案バナー用HTML追加

## 完全自動ペーストを採用しない理由

- Chrome 拡張のセキュリティモデル上、ユーザー操作なしでのテキスト入力欄への自動挿入は制限が厳しい
- Genspark のチャット入力欄は contentEditable 要素であり、プログラム的な値設定が安定しない可能性
- Ctrl+V（ユーザーのアクション）を残すことで、意図しない貼り付けを防止
- Phase 2 後半で content_script からの直接挿入を検討する余地は残す（T2-5 候補）

## 実装見積もり

- T2-1 設計: 完了（本ドキュメント）
- T2-2 実装（検知+バッジ）: 60〜90分
- T2-3 実装（ポップアップUI+一括復元）: 60〜90分
- T2-4 結合テスト: 30〜60分
- T2-5 検討（自動挿入の可否調査）: 次フェーズ送り可

## 依存関係

- T1-11 修正完了（済）が前提
- `docs/引き継ぎドキュメント.md` がリポジトリに存在すること（済）
- loadContext の動作が正常であること（T-VAL-3 系統A で確認済み）

## 次回稼働時のアクション

1. 本ドキュメントを確認
2. content_script.js にURL変更検知コードを追加
3. background.js にバッジ制御を追加
4. popup.html / popup.js に提案バナーと一括復元ボタンを追加
5. 動作確認（Gensparkで新チャット開始→バッジ表示→復元実行）

## Assistant [id:7]

〇3往復目／25往復

なるほど、T2-1はすでに5/29に設計完了していたんですね。引き継ぎドキュメントの「次アクション: T2-1着手」という記載から未着手だと思っていましたが、設計ドキュメントとして確定済みということは、**T2-1は完了扱い**ですね。

つまり本日は **T2-2（検知＋バッジ実装）** から着手できます。

設計ドキュメントの内容は明確で、実装に必要な情報が揃っています。本日の作業プランを修正します：

**本日の作業プラン（3時間）**

1.  **T2-2 実装（検知＋バッジ）** — 60〜90分
2.  **T2-3 実装（ポップアップUI＋一括復元）** — 60〜90分
3.  **T2-4 結合テスト** — 残り時間で可能な範囲
4.  締め：weekly-W5.md記入＋引き継ぎドキュメント更新

うまくいけば本日でPhase 2の実装部分が一気に片付く可能性があります。

* * *

T2-2に着手するにあたり、現在のcontent\_script.jsの内容を確認したいです。既存のcontent\_scriptがどこまで実装されているか（保存フロー用のDOM解析のみか、すでにURL監視の雛形があるか等）を把握して、URL変更検知コードの追加箇所を特定します。

現在のcontent\_script.jsを貼っていただけますか？

## User [id:8]

// ============================================
// Genspark Memory Bridge - Content Script
// Genspark のチャット画面からメッセージを抽出し、
// Markdown化してbackground.jsへ受け渡す
// ============================================

(() => {
  'use strict';

  // turndown サービスは初期化時に1度だけ生成
  let turndownService = null;

  // --------------------------------------------
  // turndown の初期化
  // --------------------------------------------
  function initTurndown() {
    if (typeof TurndownService === 'undefined') {
      console.error('[MemoryBridge] turndown.js が読み込まれていません');
      return null;
    }

    const td = new TurndownService({
      headingStyle: 'atx',          // # 形式
      bulletListMarker: '-',
      codeBlockStyle: 'fenced',     // ```で囲む
      fence: '```',
      emDelimiter: '*',
      strongDelimiter: '**',
      linkStyle: 'inlined'
    });

    // GFM拡張があれば追加（テーブル・取り消し線対応）
    if (typeof turndownPluginGfm !== 'undefined' && turndownPluginGfm.gfm) {
      td.use(turndownPluginGfm.gfm);
    }

    return td;
  }

  // --------------------------------------------
  // AI応答ノードの前処理
  // Genspark UIの「Copy」ボタン等のノイズを除去
  // --------------------------------------------
  function sanitizeAssistantNode(node) {
    const clone = node.cloneNode(true);

    // コードブロックのコピー用UIを削除
    // パターン1: pre 内の button, .copy-btn 等
    clone.querySelectorAll('button, .copy-btn, [class*="copy"]').forEach(el => {
      el.remove();
    });

    // パターン2: コードブロック直下に「Copy」テキストノードがある場合
    clone.querySelectorAll('pre').forEach(pre => {
      // 子要素から「Copy」のみを含むspan/divを除去
      pre.querySelectorAll('span, div').forEach(el => {
        const txt = (el.textContent || '').trim();
        if (txt === 'Copy' || txt === 'コピー') {
          el.remove();
        }
      });
    });

    return clone;
  }

  // --------------------------------------------
  // メッセージの抽出
  // --------------------------------------------
  function extractMessages() {
    const root = document.querySelector('.conversation-content');
    if (!root) {
      console.warn('[MemoryBridge] .conversation-content が見つかりません');
      return [];
    }

    const statements = root.querySelectorAll(
      '.conversation-statement.user, .conversation-statement.assistant'
    );

    const messages = [];

    statements.forEach(stmt => {
      const isUser = stmt.classList.contains('user');
      const role = isUser ? 'user' : 'assistant';

      // bubble要素から message-content-id を取得（順序保証用）
      const bubble = stmt.querySelector('.bubble[message-content-id]');
      const idAttr = bubble ? bubble.getAttribute('message-content-id') : null;
      const id = idAttr !== null ? parseInt(idAttr, 10) : null;

      let contentMarkdown = '';

      if (isUser) {
        // ユーザー発話: pre code の textContent をプレーン取得
        const codeEl = stmt.querySelector('pre code');
        if (codeEl) {
          contentMarkdown = codeEl.textContent || '';
        } else {
          // フォールバック: bubble 直下のテキスト
          contentMarkdown = (bubble ? bubble.textContent : stmt.textContent) || '';
        }
      } else {
        // AI応答: .markdown-viewer の innerHTML を turndown で逆変換
        const viewer = stmt.querySelector('.markdown-viewer');
        if (viewer && turndownService) {
          const sanitized = sanitizeAssistantNode(viewer);
          contentMarkdown = turndownService.turndown(sanitized.innerHTML || '');
        } else if (viewer) {
          contentMarkdown = viewer.textContent || '';
        }
      }

      if (id === null) {
        console.debug("[MemoryBridge] message-content-id が取得できないメッセージをスキップ");
        return;
      }

      messages.push({
        id,
        role,
        content: contentMarkdown.trim()
      });
    });

    // id 昇順で並び替え（DOM順と一致するはずだが念のため）
    messages.sort((a, b) => a.id - b.id);

    return messages;
  }

  // --------------------------------------------
  // 日時フォーマット（JST ISO8601）
  // --------------------------------------------
  function formatDateTimeJST(date) {
    const pad = (n) => String(n).padStart(2, '0');
    const y = date.getFullYear();
    const mo = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    const h = pad(date.getHours());
    const mi = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${y}-${mo}-${d}T${h}:${mi}:${s}+09:00`;
  }

  // --------------------------------------------
  // フォールバック日時（YYYYMMDD-HHmmss）
  // --------------------------------------------
  function formatDateTimeCompact(date) {
    const pad = (n) => String(n).padStart(2, '0');
    return (
      date.getFullYear() +
      pad(date.getMonth() + 1) +
      pad(date.getDate()) +
      '-' +
      pad(date.getHours()) +
      pad(date.getMinutes()) +
      pad(date.getSeconds())
    );
  }

  // --------------------------------------------
  // ファイル名サニタイズ
  // Windows禁止文字 / 制御文字 / 連続スペース等を除去
  // --------------------------------------------
  function sanitizeFilename(name) {
    if (!name) return '';
    let s = String(name);
    s = s.replace(/[\\/:*?"<>|]/g, '_');     // Windows禁止文字
    s = s.replace(/[\u0000-\u001F\u007F]/g, ''); // 制御文字
    s = s.replace(/\s+/g, '_');               // 空白→アンダースコア
    s = s.replace(/_+/g, '_');                // 連続アンダースコア圧縮
    s = s.replace(/^[._]+|[._]+$/g, '');      // 先頭末尾のドット/アンダースコア除去
    return s.slice(0, 100);                   // 100文字までで打ち切り
  }

  // --------------------------------------------
  // ファイルパス組み立て
  // chats/{project}/{filename}.md
  // --------------------------------------------
  function buildFilePath(rawTitle, date) {
    const datePart = (() => {
      const pad = (n) => String(n).padStart(2, '0');
      return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
    })();

    let titleForFile = '';
    let project = 'misc';

    if (rawTitle && rawTitle.trim()) {
      titleForFile = sanitizeFilename(rawTitle);
      // タイトルが OpenClaw_005 や GensparkMemoryBridge_005 のような
      // 「{Project}_{連番}」形式ならプロジェクト名を抽出
      const m = titleForFile.match(/^([A-Za-z][A-Za-z0-9]*)_\d+/);
      if (m) {
        project = m[1];
      }
    } else {
      titleForFile = 'untitled-' + formatDateTimeCompact(date);
    }

    const filename = `${titleForFile}_${datePart}.md`;
    const filePath = `chats/${project}/${filename}`;

    return { filename, filePath, project };
  }

  // --------------------------------------------
  // チャットタイトルの取得
  // --------------------------------------------
  function getChatTitle() {
    // パターン1: <title>タグ
    const t = document.title;
    if (t && t.trim() && !/^Genspark$/i.test(t.trim())) {
      // 「Genspark - {タイトル}」のような形式から切り出す
      const m = t.match(/[-—|｜]\s*(.+?)\s*$/);
      if (m && m[1]) return m[1].trim();
      return t.trim();
    }
    return '';
  }

  // --------------------------------------------
  // Markdown整形（フロントマター + 本文）
  // --------------------------------------------
  function buildMarkdown() {
    const messages = extractMessages();
    const now = new Date();
    const rawTitle = getChatTitle();
    const pathInfo = buildFilePath(rawTitle, now);

    const chatTitle = rawTitle && rawTitle.trim()
      ? rawTitle.trim()
      : pathInfo.filename.replace(/\.md$/, '');

    const ids = messages.map(m => m.id);
    const idMin = ids.length ? Math.min(...ids) : 0;
    const idMax = ids.length ? Math.max(...ids) : 0;

    const meta = {
      chat_title: chatTitle,
      saved_at: formatDateTimeJST(now),
      message_count: messages.length,
      id_range: `${idMin}-${idMax}`,
      project: pathInfo.project,
      source_url: location.href,
      filename: pathInfo.filename,
      file_path: pathInfo.filePath
    };

    const fmLines = [
      '---',
      `chat_title: "${chatTitle.replace(/"/g, '\\"')}"`,
      `saved_at: "${meta.saved_at}"`,
      `message_count: ${meta.message_count}`,
      `id_range: "${meta.id_range}"`,
      `project: "${meta.project}"`,
      `source_url: "${meta.source_url}"`,
      '---',
      ''
    ];

    const bodyLines = [];
    messages.forEach(m => {
      const heading = m.role === 'user'
        ? `## User [id:${m.id}]`
        : `## Assistant [id:${m.id}]`;
      bodyLines.push(heading);
      bodyLines.push('');
      bodyLines.push(m.content);
      bodyLines.push('');
    });

    const markdown = fmLines.join('\n') + bodyLines.join('\n');

    return { markdown, meta };
  }

  // DevToolsからの動作確認用に window へ公開
  window.__GMB_extract = extractMessages;
  window.__GMB_buildMarkdown = buildMarkdown;

  // --------------------------------------------
  // メッセージリスナー（popup / background からの依頼を処理）
  // --------------------------------------------
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    // --------------------------------------------
    // extractChat: チャット内容の抽出（旧API・互換維持）
    // --------------------------------------------
    if (request.action === "extractChat") {
      try {
        const result = buildMarkdown();
        sendResponse({
          success: true,
          markdown: result.markdown,
          messageCount: result.meta.message_count,
          meta: result.meta
        });
      } catch (e) {
        console.error("[MemoryBridge] extractChat エラー:", e);
        sendResponse({ success: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // previewFilename: 保存先ファイル名のプレビュー（T1-6新設）
    // popup起動時にUI表示用のファイル名・件数を取得する
    // --------------------------------------------
    if (request.action === "previewFilename") {
      try {
        const result = buildMarkdown();
        sendResponse({
          ok: true,
          filename: result.meta.filename,
          filePath: result.meta.file_path,
          chatTitle: result.meta.chat_title,
          messageCount: result.meta.message_count
        });
      } catch (e) {
        console.error("[MemoryBridge] previewFilename エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // buildMarkdown: background からの中継要求（saveCurrentChat 用）
    // --------------------------------------------
    if (request.action === "buildMarkdown") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] buildMarkdown エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // GMB_BUILD_MARKDOWN: background.js (T1-5) との互換エイリアス
    // background は { type: "GMB_BUILD_MARKDOWN" } で問い合わせる
    // --------------------------------------------
    if (request.type === "GMB_BUILD_MARKDOWN") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] GMB_BUILD_MARKDOWN エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }
  });

  // --------------------------------------------
  // 初期化
  // --------------------------------------------
  turndownService = initTurndown();
  console.log('[MemoryBridge] DOM監視を開始しました');
  console.log('[MemoryBridge] 現在のURL:', location.href);

})();

## Assistant [id:9]

〇4往復目／25往復

ありがとうございます。content\_script.jsの全容を把握しました。

現在はメッセージ抽出・保存フロー専用で、URL変更検知のコードはまだありません。`getChatTitle()` と `buildFilePath()` 内のプロジェクト名パターンマッチ（`/^([A-Za-z][A-Za-z0-9]*)_\d+/`）は既に存在しているので、これを復元トリガーの検知にも流用できます。

* * *

**T2-2 実装方針の確認**

t2-1-restore-trigger-design.md に基づき、content\_script.js に追加する内容は：

1.  **URL変更検知** — `navigation` イベント or URL polling で新チャット遷移を検知
2.  **タイトルマッチ判定** — 登録済みプロジェクト名パターンとの照合
3.  **background通知** — マッチしたら `chrome.runtime.sendMessage` でbackgroundに通知

background.js側には：

1.  **バッジ制御** — 通知受信時に `chrome.action.setBadgeText({ text: "!" })` を設定
2.  **復元提案フラグ管理** — popup起動時に参照できるフラグを保持

* * *

**技術的な検討ポイント**

GensparkはSPA（Single Page Application）なので、ページ遷移しても従来のページロードが発生しません。URL変更検知のアプローチとして：

-   **案A**: `Navigation API`（`navigation.addEventListener('navigate', ...)`） — モダンだがChrome 102+限定、SPAに最適
-   **案B**: `setInterval` でURL polling（500ms〜1000ms間隔） — 確実だがやや冗長
-   **案C**: `MutationObserver` でtitle要素の変更を監視 — 軽量だがタイトル更新タイミングに依存

設計書には「`navigation` イベント（またはURL変更のpolling）」とありますが、Genspark上での安定性を考えると、**案B（URL polling）をベースに、タイトル確定を待つ遅延チェック付き**が最も確実だと考えます。理由は：

-   GensparkのSPA遷移でNavigation APIが確実に発火するか未検証
-   新チャット開始直後はタイトルが確定していない可能性がある（最初のメッセージ送信後にタイトルが付く）

ただし1点重要な確認があります。**Gensparkで新チャットを開始した時点でのURL形式とタイトルの挙動**について：

-   新チャット開始時のURLは `/agents?type=ai_chat` のまま？それとも `/agents/chat/{id}` のような形式に変わる？
-   タイトルが付くタイミングは最初のメッセージ送信後？それとも最初の応答後？

この挙動によって、検知タイミングの設計が変わります。実際の挙動をご存知であれば教えてください。もし不明であれば、先に実機で確認する手順を挟みましょう。

## User [id:10]

１．新チャット開始時のURL
https://www.genspark.ai/agents?type=ai_chat

２．タイトルが付くタイミング
→最初の応答中に付与されるようです
　で、URLも
　例：https://www.genspark.ai/agents?id=be3fc9e8-3193-4324-b486-c3009a616507
　のように変更となるようです

## Assistant [id:11]

〇5往復目／25往復

重要な情報ありがとうございます。これで検知フローが明確になりました。

**整理すると：**

-   新チャット開始時: `/agents?type=ai_chat`（タイトルなし）
-   最初の応答中: URL が `/agents?id={uuid}` に変わり、タイトルが付与される

つまり、**復元トリガーの検知タイミングは「URLが `/agents?id=xxx` に変わった瞬間＋タイトル確定後」** になります。

* * *

**T2-2 実装設計（確定版）**

```
検知フロー:
1. setInterval(1000ms) で location.href を監視
2. URL が /agents?type=ai_chat → /agents?id=xxx に変わったことを検出
3. URL変更検出後、getChatTitle() を 1秒おきにリトライ（最大10回）
4. タイトル取得成功 → プロジェクト名パターンマッチ
5. マッチしたら chrome.runtime.sendMessage({ type: "GMB_RESTORE_SUGGEST", project: "xxx" })
6. background が setBadgeText("!") + フラグ保持
```

**パターンマッチのロジック：**

設計書に記載の初期登録パターン（GensparkMemoryBridge, OpenClaw, KADOKAWA, Claude-Chat, GMB）を使いますが、既存の `buildFilePath` 内の正規表現 `/^([A-Za-z][A-Za-z0-9]*)_\d+/` とは少し異なります。チャットタイトルが必ずしも `Project_001` 形式とは限らないケースもあるので、以下の2段階マッチにします：

1.  タイトルが登録プロジェクト名で**始まる**かどうか（前方一致）
2.  マッチしたプロジェクト名を復元対象として通知

* * *

では実装コードを書いていきます。まず **content\_script.js に追加する部分** です：

```javascript
// ============================================
// 復元トリガー検知（T2-2）
// URL変更を監視し、登録プロジェクト名にマッチしたら
// background に復元提案を通知
// ============================================

// 登録プロジェクト名パターン（初期値）
// TODO: Phase 2 後半で設定画面から編集可能にする
const RESTORE_PATTERNS = [
  'GensparkMemoryBridge',
  'OpenClaw',
  'KADOKAWA',
  'Claude-Chat',
  'GMB'
];

let lastUrl = location.href;
let restoreCheckInProgress = false;

/**
 * タイトルがプロジェクト名パターンにマッチするか判定
 * @param {string} title - チャットタイトル
 * @returns {string|null} マッチしたプロジェクト名 or null
 */
function matchProjectPattern(title) {
  if (!title) return null;
  for (const pattern of RESTORE_PATTERNS) {
    if (title.startsWith(pattern)) {
      return pattern;
    }
  }
  return null;
}

/**
 * タイトル確定を待ってパターンマッチを実行
 * URL変更検出後に呼ばれる
 */
function waitForTitleAndCheck(retryCount = 0) {
  const MAX_RETRIES = 10;
  const RETRY_INTERVAL = 1000; // 1秒

  if (retryCount >= MAX_RETRIES) {
    console.log('[MemoryBridge] タイトル取得タイムアウト（復元トリガー検知終了）');
    restoreCheckInProgress = false;
    return;
  }

  const title = getChatTitle();
  const project = matchProjectPattern(title);

  if (project) {
    console.log(`[MemoryBridge] 復元対象検知: project="${project}", title="${title}"`);
    chrome.runtime.sendMessage({
      type: 'GMB_RESTORE_SUGGEST',
      project: project,
      title: title,
      url: location.href
    });
    restoreCheckInProgress = false;
    return;
  }

  // タイトルが取得できたがマッチしない場合は終了
  if (title && title.trim()) {
    console.log(`[MemoryBridge] タイトル取得済みだがパターン不一致: "${title}"`);
    restoreCheckInProgress = false;
    return;
  }

  // タイトル未確定 → リトライ
  setTimeout(() => waitForTitleAndCheck(retryCount + 1), RETRY_INTERVAL);
}

/**
 * URL変更を監視（1秒間隔ポーリング）
 */
function startUrlWatcher() {
  setInterval(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      const prevUrl = lastUrl;
      lastUrl = currentUrl;

      console.log(`[MemoryBridge] URL変更検知: ${prevUrl} → ${currentUrl}`);

      // /agents?id=xxx 形式への遷移を検出
      if (currentUrl.includes('/agents?id=') && !restoreCheckInProgress) {
        restoreCheckInProgress = true;
        // 少し待ってからタイトルチェック開始（DOM更新待ち）
        setTimeout(() => waitForTitleAndCheck(0), 500);
      }
    }
  }, 1000);
}
```

そして初期化セクション（ファイル末尾）に `startUrlWatcher()` の呼び出しを追加します。

* * *

**background.js に追加する部分：**

```javascript
// ============================================
// 復元提案フラグ管理（T2-2）
// ============================================

let restoreSuggestion = null; // { project, title, url, tabId }

// content_script からの復元提案通知を受信
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GMB_RESTORE_SUGGEST') {
    restoreSuggestion = {
      project: message.project,
      title: message.title,
      url: message.url,
      tabId: sender.tab ? sender.tab.id : null
    };

    // バッジ表示
    const tabId = sender.tab ? sender.tab.id : undefined;
    chrome.action.setBadgeText({ text: '!', tabId });
    chrome.action.setBadgeBackgroundColor({ color: '#FF6B35', tabId });

    console.log(`[MemoryBridge] 復元提案セット: ${message.project} (tab: ${tabId})`);
    sendResponse({ ok: true });
    return true;
  }

  // popup から復元提案フラグの問い合わせ
  if (message.type === 'GMB_GET_RESTORE_SUGGESTION') {
    sendResponse({ suggestion: restoreSuggestion });
    return true;
  }

  // 復元完了後のバッジクリア
  if (message.type === 'GMB_CLEAR_RESTORE_SUGGESTION') {
    const tabId = restoreSuggestion ? restoreSuggestion.tabId : undefined;
    restoreSuggestion = null;
    chrome.action.setBadgeText({ text: '', tabId });
    sendResponse({ ok: true });
    return true;
  }
});
```

* * *

ここまでがT2-2の核心部分です。確認したい点が1つあります：

**現在のbackground.jsに既存の `chrome.runtime.onMessage.addListener` がありますか？** ある場合、リスナーの追加方法（既存リスナー内にcase追加 vs 新規リスナー追加）を合わせる必要があります。background.jsの現在の構成を教えていただけますか？

## User [id:12]

まず content_script.js に追加する部分について
詳細をご教示いただくか
できれば、ミスを防止するために
全文出力いただけると嬉しいです

background.jsの現在の構成については
以下となります

// ============================================
// Genspark Memory Bridge - Background Script (Service Worker)
// GitHub APIとの通信、データの中継を行う
// T1-8: エラーハンドリング整備版（2026-05-10）
// T1-9 fix: customFilename 反映対応（2026-05-16）
// T1-11 fix: loadContext 空コンテキストガード追加（2026-05-29）
// ============================================

// ============================================
// エラーハンドリング用ヘルパー
// ============================================

// GitHub APIのHTTPステータスを日本語メッセージに変換
// response: fetch のレスポンスオブジェクト
// errorBody: response.json() の結果（取得失敗時は {} を渡す）
function mapGitHubError(response, errorBody) {
  const status = response.status;
  const original = (errorBody && errorBody.message) ? errorBody.message : "";

  if (status === 401) {
    return "PAT（Personal Access Token）が無効か期限切れです。GitHubで新しいPATを発行し、設定を更新してください。";
  }

  if (status === 403) {
    // rate limit と権限不足を判別
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
// throwされたerrorオブジェクトを引数に取る
function mapNetworkError(error) {
  // fetchが投げるTypeErrorはネットワーク到達不能を示すことが多い
  if (error instanceof TypeError) {
    return "ネットワーク接続を確認してください。GitHubサーバーに到達できませんでした。";
  }
  // 既にmapGitHubErrorで日本語化されたメッセージの場合はそのまま返す
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
// GitHub API 呼び出し関数群
// ============================================

// --- GitHub APIへファイルを保存する関数 ---
async function saveToGitHub(token, repo, path, content, commitMessage) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  // まず既存ファイルがあるか確認（更新にはSHAが必要）
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
    // 404はファイル未存在として正常扱い、それ以外の非OKは黙って続行
    // （新規作成PUTで再度エラーになるので、ここでは止めない）
  } catch (e) {
    // ネットワークエラー等。新規作成PUT側で再度エラーが出るのでここでは続行
  }

  // ファイルを保存（Base64エンコードが必要）
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
      return null; // ファイルが存在しない（呼び出し側で正常系として扱う）
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
      return []; // ディレクトリが存在しない（初回保存時）
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
// 設定が不完全な場合にユーザー向けメッセージを返す。完全なら null を返す。
function checkSettings(settings) {
  const missing = [];
  if (!settings.user) missing.push("GitHubユーザー名");
  if (!settings.repo) missing.push("リポジトリ名");
  if (!settings.token) missing.push("Personal Access Token");
  if (missing.length === 0) return null;
  return `GitHub設定が未完了です。以下を入力して『設定を保存』を押してください: ${missing.join(", ")}`;
}

// --- customFilename サニタイズ（T1-9 fix 追加・2026-05-16） ---
// popup から渡された customFilename を安全なファイル名に整える
// - パス区切り文字・Windows禁止文字をアンダースコアに置換
// - .md 拡張子が無ければ補う
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
        // アクティブタブを取得
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

        // content_script に Markdown 生成を依頼
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

        // 設定確認（PAT未設定ガード）
        const settings = await getSettings();
        const settingsError = checkSettings(settings);
        if (settingsError) {
          sendResponse({ success: false, error: settingsError });
          return;
        }

        // --- T1-9 fix: customFilename 反映ロジック（2026-05-16） ---
        // ディレクトリは meta.file_path から流用、ファイル名のみ差し替える
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

        // 同名チャットの古いファイル削除
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

        // 新ファイル保存
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
});

console.log("[MemoryBridge] Background script が起動しました");

## Assistant [id:13]

〇6往復目／25往復

ありがとうございます。background.jsの構成も把握しました。既存の `chrome.runtime.onMessage.addListener` が1つあり、その中でif文で分岐する構造ですね。T2-2の追加分もこの中に組み込みます。

では、まず **content\_script.js の全文** を出力します。既存コードに復元トリガー検知部分を追加した完全版です。

```javascript
// ============================================
// Genspark Memory Bridge - Content Script
// Genspark のチャット画面からメッセージを抽出し、
// Markdown化してbackground.jsへ受け渡す
// T2-2: 復元トリガー検知（URL変更監視+バッジ通知）追加
// ============================================

(() => {
  'use strict';

  // turndown サービスは初期化時に1度だけ生成
  let turndownService = null;

  // --------------------------------------------
  // 復元トリガー検知用の状態変数（T2-2）
  // --------------------------------------------
  const RESTORE_PATTERNS = [
    'GensparkMemoryBridge',
    'OpenClaw',
    'KADOKAWA',
    'Claude-Chat',
    'GMB'
  ];

  let lastUrl = location.href;
  let restoreCheckInProgress = false;

  // --------------------------------------------
  // turndown の初期化
  // --------------------------------------------
  function initTurndown() {
    if (typeof TurndownService === 'undefined') {
      console.error('[MemoryBridge] turndown.js が読み込まれていません');
      return null;
    }

    const td = new TurndownService({
      headingStyle: 'atx',          // # 形式
      bulletListMarker: '-',
      codeBlockStyle: 'fenced',     // ```で囲む
      fence: '```',
      emDelimiter: '*',
      strongDelimiter: '**',
      linkStyle: 'inlined'
    });

    // GFM拡張があれば追加（テーブル・取り消し線対応）
    if (typeof turndownPluginGfm !== 'undefined' && turndownPluginGfm.gfm) {
      td.use(turndownPluginGfm.gfm);
    }

    return td;
  }

  // --------------------------------------------
  // AI応答ノードの前処理
  // Genspark UIの「Copy」ボタン等のノイズを除去
  // --------------------------------------------
  function sanitizeAssistantNode(node) {
    const clone = node.cloneNode(true);

    // コードブロックのコピー用UIを削除
    // パターン1: pre 内の button, .copy-btn 等
    clone.querySelectorAll('button, .copy-btn, [class*="copy"]').forEach(el => {
      el.remove();
    });

    // パターン2: コードブロック直下に「Copy」テキストノードがある場合
    clone.querySelectorAll('pre').forEach(pre => {
      // 子要素から「Copy」のみを含むspan/divを除去
      pre.querySelectorAll('span, div').forEach(el => {
        const txt = (el.textContent || '').trim();
        if (txt === 'Copy' || txt === 'コピー') {
          el.remove();
        }
      });
    });

    return clone;
  }

  // --------------------------------------------
  // メッセージの抽出
  // --------------------------------------------
  function extractMessages() {
    const root = document.querySelector('.conversation-content');
    if (!root) {
      console.warn('[MemoryBridge] .conversation-content が見つかりません');
      return [];
    }

    const statements = root.querySelectorAll(
      '.conversation-statement.user, .conversation-statement.assistant'
    );

    const messages = [];

    statements.forEach(stmt => {
      const isUser = stmt.classList.contains('user');
      const role = isUser ? 'user' : 'assistant';

      // bubble要素から message-content-id を取得（順序保証用）
      const bubble = stmt.querySelector('.bubble[message-content-id]');
      const idAttr = bubble ? bubble.getAttribute('message-content-id') : null;
      const id = idAttr !== null ? parseInt(idAttr, 10) : null;

      let contentMarkdown = '';

      if (isUser) {
        // ユーザー発話: pre code の textContent をプレーン取得
        const codeEl = stmt.querySelector('pre code');
        if (codeEl) {
          contentMarkdown = codeEl.textContent || '';
        } else {
          // フォールバック: bubble 直下のテキスト
          contentMarkdown = (bubble ? bubble.textContent : stmt.textContent) || '';
        }
      } else {
        // AI応答: .markdown-viewer の innerHTML を turndown で逆変換
        const viewer = stmt.querySelector('.markdown-viewer');
        if (viewer && turndownService) {
          const sanitized = sanitizeAssistantNode(viewer);
          contentMarkdown = turndownService.turndown(sanitized.innerHTML || '');
        } else if (viewer) {
          contentMarkdown = viewer.textContent || '';
        }
      }

      if (id === null) {
        console.debug("[MemoryBridge] message-content-id が取得できないメッセージをスキップ");
        return;
      }

      messages.push({
        id,
        role,
        content: contentMarkdown.trim()
      });
    });

    // id 昇順で並び替え（DOM順と一致するはずだが念のため）
    messages.sort((a, b) => a.id - b.id);

    return messages;
  }

  // --------------------------------------------
  // 日時フォーマット（JST ISO8601）
  // --------------------------------------------
  function formatDateTimeJST(date) {
    const pad = (n) => String(n).padStart(2, '0');
    const y = date.getFullYear();
    const mo = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    const h = pad(date.getHours());
    const mi = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${y}-${mo}-${d}T${h}:${mi}:${s}+09:00`;
  }

  // --------------------------------------------
  // フォールバック日時（YYYYMMDD-HHmmss）
  // --------------------------------------------
  function formatDateTimeCompact(date) {
    const pad = (n) => String(n).padStart(2, '0');
    return (
      date.getFullYear() +
      pad(date.getMonth() + 1) +
      pad(date.getDate()) +
      '-' +
      pad(date.getHours()) +
      pad(date.getMinutes()) +
      pad(date.getSeconds())
    );
  }

  // --------------------------------------------
  // ファイル名サニタイズ
  // Windows禁止文字 / 制御文字 / 連続スペース等を除去
  // --------------------------------------------
  function sanitizeFilename(name) {
    if (!name) return '';
    let s = String(name);
    s = s.replace(/[\\/:*?"<>|]/g, '_');     // Windows禁止文字
    s = s.replace(/[\u0000-\u001F\u007F]/g, ''); // 制御文字
    s = s.replace(/\s+/g, '_');               // 空白→アンダースコア
    s = s.replace(/_+/g, '_');                // 連続アンダースコア圧縮
    s = s.replace(/^[._]+|[._]+$/g, '');      // 先頭末尾のドット/アンダースコア除去
    return s.slice(0, 100);                   // 100文字までで打ち切り
  }

  // --------------------------------------------
  // ファイルパス組み立て
  // chats/{project}/{filename}.md
  // --------------------------------------------
  function buildFilePath(rawTitle, date) {
    const datePart = (() => {
      const pad = (n) => String(n).padStart(2, '0');
      return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
    })();

    let titleForFile = '';
    let project = 'misc';

    if (rawTitle && rawTitle.trim()) {
      titleForFile = sanitizeFilename(rawTitle);
      // タイトルが OpenClaw_005 や GensparkMemoryBridge_005 のような
      // 「{Project}_{連番}」形式ならプロジェクト名を抽出
      const m = titleForFile.match(/^([A-Za-z][A-Za-z0-9]*)_\d+/);
      if (m) {
        project = m[1];
      }
    } else {
      titleForFile = 'untitled-' + formatDateTimeCompact(date);
    }

    const filename = `${titleForFile}_${datePart}.md`;
    const filePath = `chats/${project}/${filename}`;

    return { filename, filePath, project };
  }

  // --------------------------------------------
  // チャットタイトルの取得
  // --------------------------------------------
  function getChatTitle() {
    // パターン1: <title>タグ
    const t = document.title;
    if (t && t.trim() && !/^Genspark$/i.test(t.trim())) {
      // 「Genspark - {タイトル}」のような形式から切り出す
      const m = t.match(/[-—|｜]\s*(.+?)\s*$/);
      if (m && m[1]) return m[1].trim();
      return t.trim();
    }
    return '';
  }

  // --------------------------------------------
  // Markdown整形（フロントマター + 本文）
  // --------------------------------------------
  function buildMarkdown() {
    const messages = extractMessages();
    const now = new Date();
    const rawTitle = getChatTitle();
    const pathInfo = buildFilePath(rawTitle, now);

    const chatTitle = rawTitle && rawTitle.trim()
      ? rawTitle.trim()
      : pathInfo.filename.replace(/\.md$/, '');

    const ids = messages.map(m => m.id);
    const idMin = ids.length ? Math.min(...ids) : 0;
    const idMax = ids.length ? Math.max(...ids) : 0;

    const meta = {
      chat_title: chatTitle,
      saved_at: formatDateTimeJST(now),
      message_count: messages.length,
      id_range: `${idMin}-${idMax}`,
      project: pathInfo.project,
      source_url: location.href,
      filename: pathInfo.filename,
      file_path: pathInfo.filePath
    };

    const fmLines = [
      '---',
      `chat_title: "${chatTitle.replace(/"/g, '\\"')}"`,
      `saved_at: "${meta.saved_at}"`,
      `message_count: ${meta.message_count}`,
      `id_range: "${meta.id_range}"`,
      `project: "${meta.project}"`,
      `source_url: "${meta.source_url}"`,
      '---',
      ''
    ];

    const bodyLines = [];
    messages.forEach(m => {
      const heading = m.role === 'user'
        ? `## User [id:${m.id}]`
        : `## Assistant [id:${m.id}]`;
      bodyLines.push(heading);
      bodyLines.push('');
      bodyLines.push(m.content);
      bodyLines.push('');
    });

    const markdown = fmLines.join('\n') + bodyLines.join('\n');

    return { markdown, meta };
  }

  // ============================================
  // 復元トリガー検知（T2-2）
  // URL変更を監視し、登録プロジェクト名にマッチしたら
  // background に復元提案を通知
  // ============================================

  /**
   * タイトルがプロジェクト名パターンにマッチするか判定
   * @param {string} title - チャットタイトル
   * @returns {string|null} マッチしたプロジェクト名 or null
   */
  function matchProjectPattern(title) {
    if (!title) return null;
    for (const pattern of RESTORE_PATTERNS) {
      if (title.startsWith(pattern)) {
        return pattern;
      }
    }
    return null;
  }

  /**
   * タイトル確定を待ってパターンマッチを実行
   * URL変更検出後に呼ばれる
   */
  function waitForTitleAndCheck(retryCount = 0) {
    const MAX_RETRIES = 10;
    const RETRY_INTERVAL = 1000; // 1秒

    if (retryCount >= MAX_RETRIES) {
      console.log('[MemoryBridge] タイトル取得タイムアウト（復元トリガー検知終了）');
      restoreCheckInProgress = false;
      return;
    }

    const title = getChatTitle();
    const project = matchProjectPattern(title);

    if (project) {
      console.log(`[MemoryBridge] 復元対象検知: project="${project}", title="${title}"`);
      chrome.runtime.sendMessage({
        type: 'GMB_RESTORE_SUGGEST',
        project: project,
        title: title,
        url: location.href
      });
      restoreCheckInProgress = false;
      return;
    }

    // タイトルが取得できたがマッチしない場合は終了
    if (title && title.trim()) {
      console.log(`[MemoryBridge] タイトル取得済みだがパターン不一致: "${title}"`);
      restoreCheckInProgress = false;
      return;
    }

    // タイトル未確定 → リトライ
    setTimeout(() => waitForTitleAndCheck(retryCount + 1), RETRY_INTERVAL);
  }

  /**
   * URL変更を監視（1秒間隔ポーリング）
   */
  function startUrlWatcher() {
    setInterval(() => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        const prevUrl = lastUrl;
        lastUrl = currentUrl;

        console.log(`[MemoryBridge] URL変更検知: ${prevUrl} → ${currentUrl}`);

        // /agents?id=xxx 形式への遷移を検出
        if (currentUrl.includes('/agents?id=') && !restoreCheckInProgress) {
          restoreCheckInProgress = true;
          // 少し待ってからタイトルチェック開始（DOM更新待ち）
          setTimeout(() => waitForTitleAndCheck(0), 500);
        }
      }
    }, 1000);
  }

  // DevToolsからの動作確認用に window へ公開
  window.__GMB_extract = extractMessages;
  window.__GMB_buildMarkdown = buildMarkdown;

  // --------------------------------------------
  // メッセージリスナー（popup / background からの依頼を処理）
  // --------------------------------------------
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    // --------------------------------------------
    // extractChat: チャット内容の抽出（旧API・互換維持）
    // --------------------------------------------
    if (request.action === "extractChat") {
      try {
        const result = buildMarkdown();
        sendResponse({
          success: true,
          markdown: result.markdown,
          messageCount: result.meta.message_count,
          meta: result.meta
        });
      } catch (e) {
        console.error("[MemoryBridge] extractChat エラー:", e);
        sendResponse({ success: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // previewFilename: 保存先ファイル名のプレビュー（T1-6新設）
    // popup起動時にUI表示用のファイル名・件数を取得する
    // --------------------------------------------
    if (request.action === "previewFilename") {
      try {
        const result = buildMarkdown();
        sendResponse({
          ok: true,
          filename: result.meta.filename,
          filePath: result.meta.file_path,
          chatTitle: result.meta.chat_title,
          messageCount: result.meta.message_count
        });
      } catch (e) {
        console.error("[MemoryBridge] previewFilename エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // buildMarkdown: background からの中継要求（saveCurrentChat 用）
    // --------------------------------------------
    if (request.action === "buildMarkdown") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] buildMarkdown エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // GMB_BUILD_MARKDOWN: background.js (T1-5) との互換エイリアス
    // background は { type: "GMB_BUILD_MARKDOWN" } で問い合わせる
    // --------------------------------------------
    if (request.type === "GMB_BUILD_MARKDOWN") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] GMB_BUILD_MARKDOWN エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }
  });

  // --------------------------------------------
  // 初期化
  // --------------------------------------------
  turndownService = initTurndown();
  startUrlWatcher(); // T2-2: URL変更監視を開始
  console.log('[MemoryBridge] DOM監視を開始しました');
  console.log('[MemoryBridge] 現在のURL:', location.href);
  console.log('[MemoryBridge] 復元トリガー監視を開始しました'); // T2-2

})();
```

* * *

次に **background.js の全文** も出力しますか？それとも、background.jsは追加箇所のみの指示で問題ないですか？

追加箇所は既存の `chrome.runtime.onMessage.addListener` 内の末尾（最後のif文の後）に3つのif文ブロックを追加する形になります。

## User [id:14]

こちらもミス防止の観点より
全文でお願いします

## Assistant [id:15]

〇7往復目／25往復

了解です。background.js の全文を出力します。既存コードに T2-2 の復元提案フラグ管理（3つのメッセージハンドラ）を追加した完全版です。

```javascript
// ============================================
// Genspark Memory Bridge - Background Script (Service Worker)
// GitHub APIとの通信、データの中継を行う
// T1-8: エラーハンドリング整備版（2026-05-10）
// T1-9 fix: customFilename 反映対応（2026-05-16）
// T1-11 fix: loadContext 空コンテキストガード追加（2026-05-29）
// T2-2: 復元提案フラグ管理・バッジ制御追加（2026-05-31）
// ============================================

// ============================================
// エラーハンドリング用ヘルパー
// ============================================

// GitHub APIのHTTPステータスを日本語メッセージに変換
// response: fetch のレスポンスオブジェクト
// errorBody: response.json() の結果（取得失敗時は {} を渡す）
function mapGitHubError(response, errorBody) {
  const status = response.status;
  const original = (errorBody && errorBody.message) ? errorBody.message : "";

  if (status === 401) {
    return "PAT（Personal Access Token）が無効か期限切れです。GitHubで新しいPATを発行し、設定を更新してください。";
  }

  if (status === 403) {
    // rate limit と権限不足を判別
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
// throwされたerrorオブジェクトを引数に取る
function mapNetworkError(error) {
  // fetchが投げるTypeErrorはネットワーク到達不能を示すことが多い
  if (error instanceof TypeError) {
    return "ネットワーク接続を確認してください。GitHubサーバーに到達できませんでした。";
  }
  // 既にmapGitHubErrorで日本語化されたメッセージの場合はそのまま返す
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
// 復元提案フラグ管理（T2-2）
// ============================================

let restoreSuggestion = null; // { project, title, url, tabId }

// ============================================
// GitHub API 呼び出し関数群
// ============================================

// --- GitHub APIへファイルを保存する関数 ---
async function saveToGitHub(token, repo, path, content, commitMessage) {
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  // まず既存ファイルがあるか確認（更新にはSHAが必要）
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
    // 404はファイル未存在として正常扱い、それ以外の非OKは黙って続行
    // （新規作成PUTで再度エラーになるので、ここでは止めない）
  } catch (e) {
    // ネットワークエラー等。新規作成PUT側で再度エラーが出るのでここでは続行
  }

  // ファイルを保存（Base64エンコードが必要）
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
      return null; // ファイルが存在しない（呼び出し側で正常系として扱う）
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
      return []; // ディレクトリが存在しない（初回保存時）
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
// 設定が不完全な場合にユーザー向けメッセージを返す。完全なら null を返す。
function checkSettings(settings) {
  const missing = [];
  if (!settings.user) missing.push("GitHubユーザー名");
  if (!settings.repo) missing.push("リポジトリ名");
  if (!settings.token) missing.push("Personal Access Token");
  if (missing.length === 0) return null;
  return `GitHub設定が未完了です。以下を入力して『設定を保存』を押してください: ${missing.join(", ")}`;
}

// --- customFilename サニタイズ（T1-9 fix 追加・2026-05-16） ---
// popup から渡された customFilename を安全なファイル名に整える
// - パス区切り文字・Windows禁止文字をアンダースコアに置換
// - .md 拡張子が無ければ補う
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
    restoreSuggestion = {
      project: request.project,
      title: request.title,
      url: request.url,
      tabId: sender.tab ? sender.tab.id : null
    };

    // バッジ表示
    const tabId = sender.tab ? sender.tab.id : undefined;
    chrome.action.setBadgeText({ text: '!', tabId });
    chrome.action.setBadgeBackgroundColor({ color: '#FF6B35', tabId });

    console.log(`[MemoryBridge] 復元提案セット: ${request.project} (tab: ${tabId})`);
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
        // アクティブタブを取得
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

        // content_script に Markdown 生成を依頼
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

        // 設定確認（PAT未設定ガード）
        const settings = await getSettings();
        const settingsError = checkSettings(settings);
        if (settingsError) {
          sendResponse({ success: false, error: settingsError });
          return;
        }

        // --- T1-9 fix: customFilename 反映ロジック（2026-05-16） ---
        // ディレクトリは meta.file_path から流用、ファイル名のみ差し替える
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

        // 同名チャットの古いファイル削除
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

        // 新ファイル保存
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
});

console.log("[MemoryBridge] Background script が起動しました");
```

* * *

これで T2-2 の核心部分（content\_script.js + background.js）が揃いました。

次のステップとして、**T2-3（ポップアップUI＋一括復元ボタン）** に進みます。popup.html と popup.js に「復元提案バナー」と「復元する」ボタンを追加する必要があります。

現在の popup.html と popup.js を貼っていただけますか？

## User [id:16]

popup.html 
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 380px;
      font-family: "Segoe UI", "Meiryo", sans-serif;
      font-size: 13px;
      color: #333;
      padding: 16px;
      background: #fafafa;
    }

    h1 {
      font-size: 15px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid #4a90d9;
      color: #2c3e50;
    }

    .section {
      margin-bottom: 16px;
      padding: 12px;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
    }

    .section h2 {
      font-size: 13px;
      margin-bottom: 8px;
      color: #555;
    }

    label {
      display: block;
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
      margin-top: 8px;
    }

    .hint {
      font-size: 11px;
      color: #888;
      margin-top: 2px;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 12px;
    }

    button {
      display: block;
      width: 100%;
      padding: 8px;
      margin-top: 8px;
      border: none;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
      color: white;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-save-settings {
      background: #6c757d;
    }

    .btn-save-chat {
      background: #4a90d9;
    }

    .btn-load-context {
      background: #28a745;
    }

    .btn-copy-context {
      background: #17a2b8;
    }

    button:hover:not(:disabled) {
      opacity: 0.9;
    }

    /* スピナー */
    .spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 6px;
      vertical-align: middle;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* 専用結果エリア（消えずに残る） */
    #saveResult {
      margin-top: 10px;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      display: none;
      word-break: break-all;
    }

    #saveResult.success {
      display: block;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    #saveResult.error {
      display: block;
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    #saveResult a {
      color: #155724;
      font-weight: bold;
      text-decoration: underline;
    }

    #saveResult .label {
      font-weight: bold;
      display: block;
      margin-bottom: 2px;
    }

    #saveResult .path {
      font-family: Consolas, "Courier New", monospace;
      font-size: 11px;
      margin-bottom: 6px;
    }

    /* 既存ステータス（GitHub設定・コンテキスト復元用） */
    #status {
      margin-top: 12px;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      display: none;
    }

    #status.success {
      display: block;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    #status.error {
      display: block;
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    #status.info {
      display: block;
      background: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }
  </style>
</head>
<body>

  <h1>Genspark Memory Bridge</h1>

  <!-- GitHub設定セクション -->
  <div class="section">
    <h2>GitHub設定</h2>

    <label>GitHubユーザー名</label>
    <input type="text" id="githubUser" placeholder="例: yasuaki">

    <label>リポジトリ名</label>
    <input type="text" id="githubRepo" value="genspark-memory-bridge">

    <label>Personal Access Token</label>
    <input type="password" id="githubToken" placeholder="github_pat_...">

    <button class="btn-save-settings" id="btnSaveSettings">設定を保存</button>
  </div>

  <!-- チャット保存セクション（T1-6リニューアル） -->
  <div class="section">
    <h2>チャット保存</h2>

    <label>保存ファイル名（プレビュー・編集可）</label>
    <input type="text" id="saveFileName" placeholder="Gensparkチャット画面で開いてください">
    <div class="hint">空欄のまま保存すると自動生成名で保存されます</div>

    <button class="btn-save-chat" id="btnSaveChat">現在のチャットをGitHubに保存</button>

    <div id="saveResult"></div>
  </div>

  <!-- コンテキスト復元セクション（Phase 2で改修予定） -->
  <div class="section">
    <h2>コンテキスト復元</h2>

    <label>読み込む前回チャットファイル名</label>
    <input type="text" id="loadFileName" placeholder="例: OpenClaw_001.md">

    <button class="btn-load-context" id="btnLoadContext">コンテキストを読み込み</button>
    <button class="btn-copy-context" id="btnCopyContext">クリップボードにコピー</button>
  </div>

  <!-- ステータス表示（GitHub設定・コンテキスト復元用） -->
  <div id="status"></div>

  <script src="popup.js"></script>
</body>
</html>


popup.js 
// ============================================
// Genspark Memory Bridge - Popup Script
// ポップアップ画面のUI操作を処理する
// T1-6: チャット保存セクションをsaveCurrentChat方式にリニューアル
// T1-11 fix: クリップボードコピー時の空コンテキストガード追加（2026-05-29）
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

// --------------------------------------------
// アクティブタブの取得（contentScript通信用）
// --------------------------------------------
async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

// --------------------------------------------
// ページ読み込み時：保存済みの設定を復元 + ファイル名プレビュー取得
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
      // Genspark以外のページでは lastError が出るが無視（プレースホルダーのまま）
      if (chrome.runtime.lastError) {
        return;
      }
      if (response && response.ok && response.filename) {
        const input = document.getElementById("saveFileName");
        input.value = response.filename;
        // ヒント文言にプロジェクト・件数情報を補足表示
        const hintEl = document.querySelector(".section .hint");
        if (hintEl && response.messageCount != null) {
          hintEl.textContent = `${response.messageCount}件のメッセージ・空欄保存で自動生成名を使用`;
        }
      }
    });
  } catch (e) {
    // 静かに無視（プレースホルダーのまま）
    console.warn("[MemoryBridge] previewFilename 失敗:", e);
  }
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
// チャットをGitHubに保存ボタン（T1-6リニューアル）
// saveCurrentChat 1コールで完結する設計
// 入力欄が空欄なら background.js 側の自動生成名を使用
// 入力欄に値があれば、それをファイル名として使用（拡張機能側でサニタイズ）
// --------------------------------------------
document.getElementById("btnSaveChat").addEventListener("click", async () => {
  clearSaveResult();
  setSaveButtonBusy(true);

  const customName = document.getElementById("saveFileName").value.trim();

  // メッセージペイロード組み立て
  // customNameが空ならbackground側で自動生成、値があればそれを使う
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
// コンテキスト復元（既存・Phase 2で改修予定）
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

  // T1-11 fix: 内容が全て空の場合のガード
  if (!loadedContext.handoverDoc && !loadedContext.summary && !loadedContext.previousChat) {
    showStatus("コンテキストの内容が空です。GitHubリポジトリにファイルが正しく配置されているか確認してください", "error");
    return;
  }

  let fullContext = "";

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

  if (loadedContext.previousChat) {
    fullContext += "=== 前回チャットログ ===\n\n";
    fullContext += loadedContext.previousChat;
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

## Assistant [id:17]

〇8往復目／25往復

ありがとうございます。popup.html と popup.js の全容を把握しました。

では T2-3（ポップアップUI＋一括復元ボタン）を実装します。設計書に基づき、以下を追加します：

-   popup起動時に background から「復元提案あり」フラグを取得
-   フラグが立っていれば「コンテキスト復元」セクションの上部に提案バナーを表示
-   「復元する」ボタン1クリックで loadContext + copyToClipboard を一括実行
-   実行後バッジクリア

* * *

**popup.html 全文：**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 380px;
      font-family: "Segoe UI", "Meiryo", sans-serif;
      font-size: 13px;
      color: #333;
      padding: 16px;
      background: #fafafa;
    }

    h1 {
      font-size: 15px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid #4a90d9;
      color: #2c3e50;
    }

    .section {
      margin-bottom: 16px;
      padding: 12px;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
    }

    .section h2 {
      font-size: 13px;
      margin-bottom: 8px;
      color: #555;
    }

    label {
      display: block;
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
      margin-top: 8px;
    }

    .hint {
      font-size: 11px;
      color: #888;
      margin-top: 2px;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 12px;
    }

    button {
      display: block;
      width: 100%;
      padding: 8px;
      margin-top: 8px;
      border: none;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
      color: white;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-save-settings {
      background: #6c757d;
    }

    .btn-save-chat {
      background: #4a90d9;
    }

    .btn-load-context {
      background: #28a745;
    }

    .btn-copy-context {
      background: #17a2b8;
    }

    .btn-restore {
      background: #e65100;
      font-weight: bold;
    }

    button:hover:not(:disabled) {
      opacity: 0.9;
    }

    /* スピナー */
    .spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 6px;
      vertical-align: middle;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* 復元提案バナー（T2-3） */
    #restoreBanner {
      display: none;
      margin-bottom: 16px;
      padding: 12px;
      background: #fff3e0;
      border: 2px solid #e65100;
      border-radius: 6px;
    }

    #restoreBanner.active {
      display: block;
    }

    #restoreBanner .banner-title {
      font-size: 13px;
      font-weight: bold;
      color: #e65100;
      margin-bottom: 6px;
    }

    #restoreBanner .banner-desc {
      font-size: 12px;
      color: #555;
      margin-bottom: 8px;
    }

    #restoreBanner .banner-project {
      font-family: Consolas, "Courier New", monospace;
      font-size: 12px;
      color: #e65100;
      font-weight: bold;
    }

    /* 専用結果エリア（消えずに残る） */
    #saveResult {
      margin-top: 10px;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      display: none;
      word-break: break-all;
    }

    #saveResult.success {
      display: block;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    #saveResult.error {
      display: block;
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    #saveResult a {
      color: #155724;
      font-weight: bold;
      text-decoration: underline;
    }

    #saveResult .label {
      font-weight: bold;
      display: block;
      margin-bottom: 2px;
    }

    #saveResult .path {
      font-family: Consolas, "Courier New", monospace;
      font-size: 11px;
      margin-bottom: 6px;
    }

    /* 既存ステータス（GitHub設定・コンテキスト復元用） */
    #status {
      margin-top: 12px;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      display: none;
    }

    #status.success {
      display: block;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    #status.error {
      display: block;
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    #status.info {
      display: block;
      background: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }
  </style>
</head>
<body>

  <h1>Genspark Memory Bridge</h1>

  <!-- 復元提案バナー（T2-3） -->
  <div id="restoreBanner">
    <div class="banner-title">前回コンテキストを復元できます</div>
    <div class="banner-desc">
      <span class="banner-project" id="restoreProjectName"></span> の前回コンテキストが見つかりました。
    </div>
    <button class="btn-restore" id="btnRestore">復元する（読み込み＋コピー）</button>
  </div>

  <!-- GitHub設定セクション -->
  <div class="section">
    <h2>GitHub設定</h2>

    <label>GitHubユーザー名</label>
    <input type="text" id="githubUser" placeholder="例: yasuaki">

    <label>リポジトリ名</label>
    <input type="text" id="githubRepo" value="genspark-memory-bridge">

    <label>Personal Access Token</label>
    <input type="password" id="githubToken" placeholder="github_pat_...">

    <button class="btn-save-settings" id="btnSaveSettings">設定を保存</button>
  </div>

  <!-- チャット保存セクション（T1-6リニューアル） -->
  <div class="section">
    <h2>チャット保存</h2>

    <label>保存ファイル名（プレビュー・編集可）</label>
    <input type="text" id="saveFileName" placeholder="Gensparkチャット画面で開いてください">
    <div class="hint">空欄のまま保存すると自動生成名で保存されます</div>

    <button class="btn-save-chat" id="btnSaveChat">現在のチャットをGitHubに保存</button>

    <div id="saveResult"></div>
  </div>

  <!-- コンテキスト復元セクション（Phase 2で改修予定） -->
  <div class="section">
    <h2>コンテキスト復元</h2>

    <label>読み込む前回チャットファイル名</label>
    <input type="text" id="loadFileName" placeholder="例: OpenClaw_001.md">

    <button class="btn-load-context" id="btnLoadContext">コンテキストを読み込み</button>
    <button class="btn-copy-context" id="btnCopyContext">クリップボードにコピー</button>
  </div>

  <!-- ステータス表示（GitHub設定・コンテキスト復元用） -->
  <div id="status"></div>

  <script src="popup.js"></script>
</body>
</html>
```

* * *

**popup.js 全文：**

```javascript
// ============================================
// Genspark Memory Bridge - Popup Script
// ポップアップ画面のUI操作を処理する
// T1-6: チャット保存セクションをsaveCurrentChat方式にリニューアル
// T1-11 fix: クリップボードコピー時の空コンテキストガード追加（2026-05-29）
// T2-3: 復元提案バナー＋一括復元ボタン追加（2026-05-31）
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
      // Genspark以外のページでは lastError が出るが無視（プレースホルダーのまま）
      if (chrome.runtime.lastError) {
        return;
      }
      if (response && response.ok && response.filename) {
        const input = document.getElementById("saveFileName");
        input.value = response.filename;
        // ヒント文言にプロジェクト・件数情報を補足表示
        const hintEl = document.querySelector(".section .hint");
        if (hintEl && response.messageCount != null) {
          hintEl.textContent = `${response.messageCount}件のメッセージ・空欄保存で自動生成名を使用`;
        }
      }
    });
  } catch (e) {
    // 静かに無視（プレースホルダーのまま）
    console.warn("[MemoryBridge] previewFilename 失敗:", e);
  }

  // T2-3: 復元提案チェック（backgroundに問い合わせ）
  try {
    chrome.runtime.sendMessage({ type: 'GMB_GET_RESTORE_SUGGESTION' }, (response) => {
      if (chrome.runtime.lastError) {
        return;
      }
      if (response && response.suggestion) {
        const suggestion = response.suggestion;
        const banner = document.getElementById("restoreBanner");
        const projectNameEl = document.getElementById("restoreProjectName");
        projectNameEl.textContent = suggestion.title || suggestion.project;
        banner.classList.add("active");
      }
    });
  } catch (e) {
    console.warn("[MemoryBridge] 復元提案チェック失敗:", e);
  }
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
// チャットをGitHubに保存ボタン（T1-6リニューアル）
// saveCurrentChat 1コールで完結する設計
// 入力欄が空欄なら background.js 側の自動生成名を使用
// 入力欄に値があれば、それをファイル名として使用（拡張機能側でサニタイズ）
// --------------------------------------------
document.getElementById("btnSaveChat").addEventListener("click", async () => {
  clearSaveResult();
  setSaveButtonBusy(true);

  const customName = document.getElementById("saveFileName").value.trim();

  // メッセージペイロード組み立て
  // customNameが空ならbackground側で自動生成、値があればそれを使う
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
// T2-3: 一括復元ボタン（復元提案バナー内）
// loadContext + clipboard copy を1クリックで実行
// --------------------------------------------
document.getElementById("btnRestore").addEventListener("click", async () => {
  setRestoreButtonBusy(true);

  // backgroundにloadContextを送信
  chrome.runtime.sendMessage(
    {
      action: "loadContext",
      previousChatFile: null, // 引き継ぎドキュメント + サマリーを取得
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

      // コンテキストが空の場合のガード
      if (!context.handoverDoc && !context.summary && !context.previousChat) {
        setRestoreButtonBusy(false);
        showStatus("コンテキストの内容が空です。リポジトリにファイルが正しく配置されているか確認してください", "error");
        return;
      }

      // テキスト整形
      let fullContext = "";

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

      if (context.previousChat) {
        fullContext += "=== 前回チャットログ ===\n\n";
        fullContext += context.previousChat;
        fullContext += "\n\n";
      }

      // クリップボードにコピー
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

  // T1-11 fix: 内容が全て空の場合のガード
  if (!loadedContext.handoverDoc && !loadedContext.summary && !loadedContext.previousChat) {
    showStatus("コンテキストの内容が空です。GitHubリポジトリにファイルが正しく配置されているか確認してください", "error");
    return;
  }

  let fullContext = "";

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

  if (loadedContext.previousChat) {
    fullContext += "=== 前回チャットログ ===\n\n";
    fullContext += loadedContext.previousChat;
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
```

* * *

これで T2-2 + T2-3 の実装コードが揃いました。4ファイルの変更まとめ：

-   **content\_script.js**: 復元トリガー検知（URL監視＋パターンマッチ＋background通知）追加
-   **background.js**: 復元提案フラグ管理（3つのメッセージハンドラ）追加
-   **popup.html**: 復元提案バナーHTML＋CSS追加
-   **popup.js**: 復元提案チェック＋一括復元ボタン＋スピナー制御追加

次のステップとして、これらを実際にGensparkで動作確認（T2-4 結合テスト）に進めますか？manifest.json の permissions 等に追加が必要な項目がないか確認したいので、現在の manifest.json も見せていただけると安心です。

## User [id:18]

manifest.json

{
  "manifest_version": 3,
  "name": "Genspark Memory Bridge",
  "version": "0.1.0",
  "description": "Gensparkチャットの保存・復元を行うメモリブリッジ",

  "permissions": [
    "storage",
    "clipboardWrite",
    "activeTab"
  ],

  "host_permissions": [
    "https://www.genspark.ai/*",
    "https://api.github.com/*"
  ],

  "background": {
    "service_worker": "background.js"
  },

  "content_scripts": [
    {
      "matches": ["https://www.genspark.ai/*"],
      "js": ["lib/turndown.js", "content_script.js"],
      "run_at": "document_idle"
    }
  ],

  "action": {
    "default_popup": "popup.html",
    "default_title": "Genspark Memory Bridge"
  }
}

## Assistant [id:19]

〇9往復目／25往復

manifest.json を確認しました。

**結論：manifest.json の変更は不要です。** 理由は以下の通りです：

-   `storage`: 既にあり（設定保存用）
-   `clipboardWrite`: 既にあり（コピー機能用）
-   `activeTab`: 既にあり（タブ通信用）
-   `chrome.action.setBadgeText`: `action` セクションが既に定義されている → 追加権限不要（バッジAPIは action が定義されていれば使用可能）
-   `host_permissions`: `https://www.genspark.ai/*` が既にあり → content\_script のURL監視に追加制約なし
-   content\_scripts の `run_at: "document_idle"`: SPA内でのURL pollingに問題なし（初回ロード後にsetIntervalが走り続ける）

* * *

**T2-4 結合テスト** に進みましょう。

テスト手順は以下の通りです：

**準備**

1.  4ファイル（content\_script.js, background.js, popup.html, popup.js）を更新
2.  Chrome の `chrome://extensions/` で拡張機能をリロード（更新ボタン）
3.  Genspark のページをリロード（content\_script の再注入）

**テスト1：URL変更検知＋バッジ表示**

1.  Genspark で新しいチャットを開始（`/agents?type=ai_chat`）
2.  チャット名をプロジェクト名パターンで始まるものにする（例：最初のメッセージに「GensparkMemoryBridge\_007 として会話を開始」等を入力）
3.  AI が応答を返しURL が `/agents?id=xxx` に変わる
4.  拡張アイコンに「!」バッジが表示されることを確認
5.  DevTools Console で `[MemoryBridge] 復元対象検知:` ログが出ていることを確認

**テスト2：一括復元ボタン**

1.  バッジ「!」が表示された状態で拡張アイコンをクリック
2.  ポップアップ上部にオレンジ色の復元提案バナーが表示されることを確認
3.  「復元する（読み込み＋コピー）」ボタンをクリック
4.  「✓ コピーしました（○○文字）」と表示されることを確認
5.  メモ帳等に Ctrl+V して引き継ぎドキュメントの内容が貼り付けられることを確認
6.  バッジ「!」が消えていることを確認

**テスト3：既存機能デグレ確認**

1.  通常のチャット保存が正常に動作すること
2.  既存の「コンテキストを読み込み」→「クリップボードにコピー」が正常に動作すること

* * *

1点補足です。テスト1について、**Gensparkでチャットタイトルがどう決まるか**が重要です。ユーザーが明示的にタイトルを指定する仕組みがない場合（AIが最初のメッセージから自動生成する場合）、テスト時にプロジェクト名パターンで始まるタイトルにならない可能性があります。

実運用では、チャットの最初のメッセージに「GMB\_007」のようなタイトルを含める運用をされていますか？それとも別の方法でタイトルを設定していますか？

## User [id:20]

テストを実施する前に
ご質問内容について回答したほうがよさそうなので

自身が新たにチャットを作成する際には
最初のメッセージに明示的に
GensparkMemoryBridge
といったプロジェクト名を付与することはあまりなく
パターンとしては、現状新たなチャットを開始するタイミングで
全てのプロジェクトにおいて
引継ぎドキュメントを読み込むといった運用なので
おそらくは引継ぎドキュメント冒頭に記載されている
プロジェクト名＋引継ぎドキュメント
というタイトルがデフォルトで付与されていると考えています

## Assistant [id:21]

〇10往復目／25往復

なるほど、重要な情報です。つまり実際の運用では：

1.  新チャットを開始
2.  最初のメッセージとして引き継ぎドキュメントを貼り付ける
3.  Gensparkが応答を返す際に、引き継ぎドキュメントの冒頭から自動的にタイトルを生成

ということは、**タイトルが付くのは「引き継ぎドキュメントを貼り付けた後」** ですね。

これは復元トリガーの設計に根本的な矛盾があります：

**矛盾点：** 復元トリガーは「新チャット開始時に復元対象であることを検知して、引き継ぎドキュメントの読み込みを提案する」ための機能ですが、実運用ではタイトルが付くのは引き継ぎドキュメントを貼り付けた**後**。つまりタイトルベースの検知では、復元が必要なタイミングに間に合わない。

* * *

**考えられる対処方針：**

**方針A：トリガー条件を変更**

-   タイトルパターンマッチを廃止し、「Gensparkの新チャットページ（`/agents?type=ai_chat`）を開いたら常に復元提案バナーを表示する」に変更
-   シンプルで確実。ただし全ての新チャットで提案が出る（不要なケースもある）

**方針B：2段階運用**

-   1回目：手動で引き継ぎドキュメントを貼り付けてチャット開始（現状通り）
-   2回目以降（同じプロジェクトでチャットを新規作成するとき）：タイトルパターンマッチで検知
-   ただしこれだと「初回の手間を減らす」という目的に合わない

**方針C：URL遷移後にバッジ表示 + ポップアップで手動選択**

-   `/agents?type=ai_chat` を開いた時点でバッジ「!」を表示
-   ポップアップを開くと「どのプロジェクトのコンテキストを復元しますか？」とプロジェクト一覧を表示
-   ユーザーが選択して復元実行

* * *

どの方針が実際の運用にフィットしそうですか？個人的には**方針A**（新チャット = 常に提案）が最もシンプルで、「復元可能であることへの気づき」という設計書の目的にも合致すると考えますが、いかがでしょうか。

## User [id:22]

基本的に
本機能（ツール）が完成した暁には
引継ぎドキュメントを冒頭で貼り付けるという現状の運用は不要になる（なってほしい）という要請があります

なので
方針Bは不可ですね

方針Aもちょっとうるさいですし

となると方針Cでしょうか？
君の見解も聞かせてください

## Assistant [id:23]

〇11往復目／25往復

おっしゃる通り、本来の目的は「引き継ぎドキュメントを手動で貼り付ける運用を自動化する」ことなので、方針Bは本末転倒ですね。

方針Cについて、自分の見解を述べます。

**方針Cが最も適切だと考えます。** ただし少し改良を加えたいです。

**改良版 方針C'：**

-   `/agents?type=ai_chat`（新チャットページ）を開いた時点でバッジ「!」を表示
-   ポップアップを開くと、登録プロジェクト一覧から選択できる
-   選択 → 読み込み＋コピー → Ctrl+V

**方針Aとの差分は「プロジェクト選択」の1ステップのみ**です。これなら「うるさい」問題は起きません。バッジは新チャットページにいる間だけ表示され、既に会話が始まっているページ（`/agents?id=xxx`）では表示されないからです。

**さらに考えると、プロジェクト選択すら不要にできる可能性があります：**

**方針D（提案）：**

-   `/agents?type=ai_chat` を開いた時点でバッジ「!」表示
-   ポップアップを開くと「コンテキストを復元」ボタンが表示される（プロジェクト選択なし）
-   ボタン押下で `docs/引き継ぎドキュメント.md` + `summaries/rolling_summary.md` を読み込み＋コピー
-   引き継ぎドキュメントはプロジェクト横断の「全体状態」を含んでいるので、どのプロジェクトの新チャットでも同じものを貼れば良い

これは現在の運用（全てのプロジェクトで引き継ぎドキュメントを読み込む）とも整合します。プロジェクト別の前回チャットログが必要な場合は、既存の「コンテキスト復元」セクション（ファイル名手入力）をそのまま使えます。

* * *

**まとめると：**

-   方針D = 新チャトページでバッジ表示 → ワンクリック復元（プロジェクト選択不要）
-   方針C' = 新チャットページでバッジ表示 → プロジェクト選択 → 復元

現状の「全プロジェクト共通で引き継ぎドキュメントを貼る」運用であれば、方針Dで十分かつ最小ステップだと思います。将来プロジェクト別に異なるドキュメントを用意する段階になったら、方針C'に拡張すればよいので。

いかがですか？

## User [id:24]

そうですね
方針Dで進めましょうか

ただ
本機能完成の暁には
note有料記事あるいはBrainでの公開・販売も視野に入れているので
購入者にとっての活用しやすさももちろん視野に入れておきたいです

## Assistant [id:25]

〇12往復目／25往復

了解です。方針Dで進めます。

販売・公開を視野に入れた点について、重要な観点ですね。購入者目線で考えると：

**方針Dのままで販売にも対応できる設計にする方法：**

現在の方針Dは「`docs/引き継ぎドキュメント.md` を固定で読み込む」ですが、これを少しだけ一般化して：

-   **読み込み対象のファイルパスを設定画面で変更可能にする**（デフォルト: `docs/引き継ぎドキュメント.md`）
-   購入者は自分のリポジトリ構成に合わせてパスを変更できる

ただしこれはPhase 2後半の拡張として扱い、**今日の実装では「デフォルトパス固定」で動くものを完成させる**のが妥当です。設定UIの拡張は販売準備段階でやれば十分です。

* * *

**では、実装の修正方針を確定します。**

現在のT2-2コード（content\_script.js）から変更する点：

-   **トリガー条件の変更**: 「URL が `/agents?id=xxx` に変わった＋タイトルマッチ」→「URL が `/agents?type=ai_chat` であることを検知」
-   **タイトルマッチ不要**: `RESTORE_PATTERNS` の配列、`matchProjectPattern()` 関数、`waitForTitleAndCheck()` 関数は削除
-   **検知タイミング**: ページロード時（`document_idle`）に現在のURLをチェック ＋ URL変更監視で `/agents?type=ai_chat` への遷移を検知

content\_script.js の復元トリガー部分がかなりシンプルになります：

```javascript
// ============================================
// 復元トリガー検知（T2-2 方針D）
// 新チャートページ（/agents?type=ai_chat）検知時に
// background へ復元提案を通知
// ============================================

let lastUrl = location.href;
let restoreSuggested = false; // 同一ページで二重通知防止

/**
 * 現在のURLが新チャットページかどうか判定し、
 * 該当すればbackgroundに復元提案を通知
 */
function checkNewChatPage() {
  const url = location.href;
  if (url.includes('/agents?type=ai_chat') && !restoreSuggested) {
    restoreSuggested = true;
    console.log('[MemoryBridge] 新チャットページ検知 → 復元提案通知');
    chrome.runtime.sendMessage({
      type: 'GMB_RESTORE_SUGGEST',
      project: null,
      title: null,
      url: url
    });
  } else if (!url.includes('/agents?type=ai_chat')) {
    // 新チャットページから離れた場合はフラグリセット
    restoreSuggested = false;
  }
}

/**
 * URL変更を監視（1秒間隔ポーリング）
 */
function startUrlWatcher() {
  setInterval(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
      lastUrl = currentUrl;
      console.log(`[MemoryBridge] URL変更検知: → ${currentUrl}`);
      checkNewChatPage();
    }
  }, 1000);
}
```

初期化時に `checkNewChatPage()` も呼ぶことで、最初から新チャットページにいる場合にも対応します。

* * *

background.js と popup 側は大きな変更なし（提案通知を受けてバッジ表示、ポップアップでワンクリック復元）。popup のバナー表示テキストだけ少し調整して、プロジェクト名表示を汎用的なメッセージに変えます。

この方針で content\_script.js の全文を再出力しますか？それとも差分の説明で十分ですか？

## User [id:26]

念のため
全文出力してください

## Assistant [id:27]

〇13往復目／25往復

了解です。方針Dに基づいた content\_script.js 全文を出力します。

```javascript
// ============================================
// Genspark Memory Bridge - Content Script
// Genspark のチャット画面からメッセージを抽出し、
// Markdown化してbackground.jsへ受け渡す
// T2-2: 復元トリガー検知（方針D: 新チャットページ検知）追加
// ============================================

(() => {
  'use strict';

  // turndown サービスは初期化時に1度だけ生成
  let turndownService = null;

  // --------------------------------------------
  // 復元トリガー検知用の状態変数（T2-2 方針D）
  // --------------------------------------------
  let lastUrl = location.href;
  let restoreSuggested = false; // 同一ページで二重通知防止

  // --------------------------------------------
  // turndown の初期化
  // --------------------------------------------
  function initTurndown() {
    if (typeof TurndownService === 'undefined') {
      console.error('[MemoryBridge] turndown.js が読み込まれていません');
      return null;
    }

    const td = new TurndownService({
      headingStyle: 'atx',          // # 形式
      bulletListMarker: '-',
      codeBlockStyle: 'fenced',     // ```で囲む
      fence: '```',
      emDelimiter: '*',
      strongDelimiter: '**',
      linkStyle: 'inlined'
    });

    // GFM拡張があれば追加（テーブル・取り消し線対応）
    if (typeof turndownPluginGfm !== 'undefined' && turndownPluginGfm.gfm) {
      td.use(turndownPluginGfm.gfm);
    }

    return td;
  }

  // --------------------------------------------
  // AI応答ノードの前処理
  // Genspark UIの「Copy」ボタン等のノイズを除去
  // --------------------------------------------
  function sanitizeAssistantNode(node) {
    const clone = node.cloneNode(true);

    // コードブロックのコピー用UIを削除
    // パターン1: pre 内の button, .copy-btn 等
    clone.querySelectorAll('button, .copy-btn, [class*="copy"]').forEach(el => {
      el.remove();
    });

    // パターン2: コードブロック直下に「Copy」テキストノードがある場合
    clone.querySelectorAll('pre').forEach(pre => {
      // 子要素から「Copy」のみを含むspan/divを除去
      pre.querySelectorAll('span, div').forEach(el => {
        const txt = (el.textContent || '').trim();
        if (txt === 'Copy' || txt === 'コピー') {
          el.remove();
        }
      });
    });

    return clone;
  }

  // --------------------------------------------
  // メッセージの抽出
  // --------------------------------------------
  function extractMessages() {
    const root = document.querySelector('.conversation-content');
    if (!root) {
      console.warn('[MemoryBridge] .conversation-content が見つかりません');
      return [];
    }

    const statements = root.querySelectorAll(
      '.conversation-statement.user, .conversation-statement.assistant'
    );

    const messages = [];

    statements.forEach(stmt => {
      const isUser = stmt.classList.contains('user');
      const role = isUser ? 'user' : 'assistant';

      // bubble要素から message-content-id を取得（順序保証用）
      const bubble = stmt.querySelector('.bubble[message-content-id]');
      const idAttr = bubble ? bubble.getAttribute('message-content-id') : null;
      const id = idAttr !== null ? parseInt(idAttr, 10) : null;

      let contentMarkdown = '';

      if (isUser) {
        // ユーザー発話: pre code の textContent をプレーン取得
        const codeEl = stmt.querySelector('pre code');
        if (codeEl) {
          contentMarkdown = codeEl.textContent || '';
        } else {
          // フォールバック: bubble 直下のテキスト
          contentMarkdown = (bubble ? bubble.textContent : stmt.textContent) || '';
        }
      } else {
        // AI応答: .markdown-viewer の innerHTML を turndown で逆変換
        const viewer = stmt.querySelector('.markdown-viewer');
        if (viewer && turndownService) {
          const sanitized = sanitizeAssistantNode(viewer);
          contentMarkdown = turndownService.turndown(sanitized.innerHTML || '');
        } else if (viewer) {
          contentMarkdown = viewer.textContent || '';
        }
      }

      if (id === null) {
        console.debug("[MemoryBridge] message-content-id が取得できないメッセージをスキップ");
        return;
      }

      messages.push({
        id,
        role,
        content: contentMarkdown.trim()
      });
    });

    // id 昇順で並び替え（DOM順と一致するはずだが念のため）
    messages.sort((a, b) => a.id - b.id);

    return messages;
  }

  // --------------------------------------------
  // 日時フォーマット（JST ISO8601）
  // --------------------------------------------
  function formatDateTimeJST(date) {
    const pad = (n) => String(n).padStart(2, '0');
    const y = date.getFullYear();
    const mo = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    const h = pad(date.getHours());
    const mi = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${y}-${mo}-${d}T${h}:${mi}:${s}+09:00`;
  }

  // --------------------------------------------
  // フォールバック日時（YYYYMMDD-HHmmss）
  // --------------------------------------------
  function formatDateTimeCompact(date) {
    const pad = (n) => String(n).padStart(2, '0');
    return (
      date.getFullYear() +
      pad(date.getMonth() + 1) +
      pad(date.getDate()) +
      '-' +
      pad(date.getHours()) +
      pad(date.getMinutes()) +
      pad(date.getSeconds())
    );
  }

  // --------------------------------------------
  // ファイル名サニタイズ
  // Windows禁止文字 / 制御文字 / 連続スペース等を除去
  // --------------------------------------------
  function sanitizeFilename(name) {
    if (!name) return '';
    let s = String(name);
    s = s.replace(/[\\/:*?"<>|]/g, '_');     // Windows禁止文字
    s = s.replace(/[\u0000-\u001F\u007F]/g, ''); // 制御文字
    s = s.replace(/\s+/g, '_');               // 空白→アンダースコア
    s = s.replace(/_+/g, '_');                // 連続アンダースコア圧縮
    s = s.replace(/^[._]+|[._]+$/g, '');      // 先頭末尾のドット/アンダースコア除去
    return s.slice(0, 100);                   // 100文字までで打ち切り
  }

  // --------------------------------------------
  // ファイルパス組み立て
  // chats/{project}/{filename}.md
  // --------------------------------------------
  function buildFilePath(rawTitle, date) {
    const datePart = (() => {
      const pad = (n) => String(n).padStart(2, '0');
      return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
    })();

    let titleForFile = '';
    let project = 'misc';

    if (rawTitle && rawTitle.trim()) {
      titleForFile = sanitizeFilename(rawTitle);
      // タイトルが OpenClaw_005 や GensparkMemoryBridge_005 のような
      // 「{Project}_{連番}」形式ならプロジェクト名を抽出
      const m = titleForFile.match(/^([A-Za-z][A-Za-z0-9]*)_\d+/);
      if (m) {
        project = m[1];
      }
    } else {
      titleForFile = 'untitled-' + formatDateTimeCompact(date);
    }

    const filename = `${titleForFile}_${datePart}.md`;
    const filePath = `chats/${project}/${filename}`;

    return { filename, filePath, project };
  }

  // --------------------------------------------
  // チャットタイトルの取得
  // --------------------------------------------
  function getChatTitle() {
    // パターン1: <title>タグ
    const t = document.title;
    if (t && t.trim() && !/^Genspark$/i.test(t.trim())) {
      // 「Genspark - {タイトル}」のような形式から切り出す
      const m = t.match(/[-—|｜]\s*(.+?)\s*$/);
      if (m && m[1]) return m[1].trim();
      return t.trim();
    }
    return '';
  }

  // --------------------------------------------
  // Markdown整形（フロントマター + 本文）
  // --------------------------------------------
  function buildMarkdown() {
    const messages = extractMessages();
    const now = new Date();
    const rawTitle = getChatTitle();
    const pathInfo = buildFilePath(rawTitle, now);

    const chatTitle = rawTitle && rawTitle.trim()
      ? rawTitle.trim()
      : pathInfo.filename.replace(/\.md$/, '');

    const ids = messages.map(m => m.id);
    const idMin = ids.length ? Math.min(...ids) : 0;
    const idMax = ids.length ? Math.max(...ids) : 0;

    const meta = {
      chat_title: chatTitle,
      saved_at: formatDateTimeJST(now),
      message_count: messages.length,
      id_range: `${idMin}-${idMax}`,
      project: pathInfo.project,
      source_url: location.href,
      filename: pathInfo.filename,
      file_path: pathInfo.filePath
    };

    const fmLines = [
      '---',
      `chat_title: "${chatTitle.replace(/"/g, '\\"')}"`,
      `saved_at: "${meta.saved_at}"`,
      `message_count: ${meta.message_count}`,
      `id_range: "${meta.id_range}"`,
      `project: "${meta.project}"`,
      `source_url: "${meta.source_url}"`,
      '---',
      ''
    ];

    const bodyLines = [];
    messages.forEach(m => {
      const heading = m.role === 'user'
        ? `## User [id:${m.id}]`
        : `## Assistant [id:${m.id}]`;
      bodyLines.push(heading);
      bodyLines.push('');
      bodyLines.push(m.content);
      bodyLines.push('');
    });

    const markdown = fmLines.join('\n') + bodyLines.join('\n');

    return { markdown, meta };
  }

  // ============================================
  // 復元トリガー検知（T2-2 方針D）
  // 新チャットページ（/agents?type=ai_chat）検知時に
  // background へ復元提案を通知
  // ============================================

  /**
   * 現在のURLが新チャットページかどうか判定し、
   * 該当すればbackgroundに復元提案を通知
   */
  function checkNewChatPage() {
    const url = location.href;
    if (url.includes('/agents?type=ai_chat') && !restoreSuggested) {
      restoreSuggested = true;
      console.log('[MemoryBridge] 新チャットページ検知 → 復元提案通知');
      chrome.runtime.sendMessage({
        type: 'GMB_RESTORE_SUGGEST',
        project: null,
        title: null,
        url: url
      });
    } else if (!url.includes('/agents?type=ai_chat')) {
      // 新チャットページから離れた場合はフラグリセット
      restoreSuggested = false;
    }
  }

  /**
   * URL変更を監視（1秒間隔ポーリング）
   */
  function startUrlWatcher() {
    setInterval(() => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        console.log(`[MemoryBridge] URL変更検知: → ${currentUrl}`);
        checkNewChatPage();
      }
    }, 1000);
  }

  // DevToolsからの動作確認用に window へ公開
  window.__GMB_extract = extractMessages;
  window.__GMB_buildMarkdown = buildMarkdown;

  // --------------------------------------------
  // メッセージリスナー（popup / background からの依頼を処理）
  // --------------------------------------------
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    // --------------------------------------------
    // extractChat: チャット内容の抽出（旧API・互換維持）
    // --------------------------------------------
    if (request.action === "extractChat") {
      try {
        const result = buildMarkdown();
        sendResponse({
          success: true,
          markdown: result.markdown,
          messageCount: result.meta.message_count,
          meta: result.meta
        });
      } catch (e) {
        console.error("[MemoryBridge] extractChat エラー:", e);
        sendResponse({ success: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // previewFilename: 保存先ファイル名のプレビュー（T1-6新設）
    // popup起動時にUI表示用のファイル名・件数を取得する
    // --------------------------------------------
    if (request.action === "previewFilename") {
      try {
        const result = buildMarkdown();
        sendResponse({
          ok: true,
          filename: result.meta.filename,
          filePath: result.meta.file_path,
          chatTitle: result.meta.chat_title,
          messageCount: result.meta.message_count
        });
      } catch (e) {
        console.error("[MemoryBridge] previewFilename エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // buildMarkdown: background からの中継要求（saveCurrentChat 用）
    // --------------------------------------------
    if (request.action === "buildMarkdown") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] buildMarkdown エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // GMB_BUILD_MARKDOWN: background.js (T1-5) との互換エイリアス
    // background は { type: "GMB_BUILD_MARKDOWN" } で問い合わせる
    // --------------------------------------------
    if (request.type === "GMB_BUILD_MARKDOWN") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] GMB_BUILD_MARKDOWN エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }
  });

  // --------------------------------------------
  // 初期化
  // --------------------------------------------
  turndownService = initTurndown();
  startUrlWatcher(); // T2-2: URL変更監視を開始
  checkNewChatPage(); // T2-2: 初回ロード時にも新チャットページ判定
  console.log('[MemoryBridge] DOM監視を開始しました');
  console.log('[MemoryBridge] 現在のURL:', location.href);
  console.log('[MemoryBridge] 復元トリガー監視を開始しました（方針D）');

})();
```

* * *

続いて background.js も方針Dに合わせた微修正が必要です。変更点は `GMB_RESTORE_SUGGEST` を受信した際に `project` が null でも正常に処理できるようにするだけで、先ほど出力した版でそのまま動きます（`project: request.project` で null が入るだけ）。

popup.html と popup.js についても、バナーのプロジェクト名表示部分を汎用メッセージに変更する必要があります。全文再出力しますか？それとも差分の指示で十分ですか？

## User [id:28]

全て全文でお願いします

## Assistant [id:29]

〇14往復目／25往復

了解です。全4ファイルの全文を出力します。

* * *

**content\_script.js（前回出力と同一・変更なし）：**

```javascript
// ============================================
// Genspark Memory Bridge - Content Script
// Genspark のチャット画面からメッセージを抽出し、
// Markdown化してbackground.jsへ受け渡す
// T2-2: 復元トリガー検知（方針D: 新チャットページ検知）追加
// ============================================

(() => {
  'use strict';

  // turndown サービスは初期化時に1度だけ生成
  let turndownService = null;

  // --------------------------------------------
  // 復元トリガー検知用の状態変数（T2-2 方針D）
  // --------------------------------------------
  let lastUrl = location.href;
  let restoreSuggested = false; // 同一ページで二重通知防止

  // --------------------------------------------
  // turndown の初期化
  // --------------------------------------------
  function initTurndown() {
    if (typeof TurndownService === 'undefined') {
      console.error('[MemoryBridge] turndown.js が読み込まれていません');
      return null;
    }

    const td = new TurndownService({
      headingStyle: 'atx',          // # 形式
      bulletListMarker: '-',
      codeBlockStyle: 'fenced',     // ```で囲む
      fence: '```',
      emDelimiter: '*',
      strongDelimiter: '**',
      linkStyle: 'inlined'
    });

    // GFM拡張があれば追加（テーブル・取り消し線対応）
    if (typeof turndownPluginGfm !== 'undefined' && turndownPluginGfm.gfm) {
      td.use(turndownPluginGfm.gfm);
    }

    return td;
  }

  // --------------------------------------------
  // AI応答ノードの前処理
  // Genspark UIの「Copy」ボタン等のノイズを除去
  // --------------------------------------------
  function sanitizeAssistantNode(node) {
    const clone = node.cloneNode(true);

    // コードブロックのコピー用UIを削除
    // パターン1: pre 内の button, .copy-btn 等
    clone.querySelectorAll('button, .copy-btn, [class*="copy"]').forEach(el => {
      el.remove();
    });

    // パターン2: コードブロック直下に「Copy」テキストノードがある場合
    clone.querySelectorAll('pre').forEach(pre => {
      // 子要素から「Copy」のみを含むspan/divを除去
      pre.querySelectorAll('span, div').forEach(el => {
        const txt = (el.textContent || '').trim();
        if (txt === 'Copy' || txt === 'コピー') {
          el.remove();
        }
      });
    });

    return clone;
  }

  // --------------------------------------------
  // メッセージの抽出
  // --------------------------------------------
  function extractMessages() {
    const root = document.querySelector('.conversation-content');
    if (!root) {
      console.warn('[MemoryBridge] .conversation-content が見つかりません');
      return [];
    }

    const statements = root.querySelectorAll(
      '.conversation-statement.user, .conversation-statement.assistant'
    );

    const messages = [];

    statements.forEach(stmt => {
      const isUser = stmt.classList.contains('user');
      const role = isUser ? 'user' : 'assistant';

      // bubble要素から message-content-id を取得（順序保証用）
      const bubble = stmt.querySelector('.bubble[message-content-id]');
      const idAttr = bubble ? bubble.getAttribute('message-content-id') : null;
      const id = idAttr !== null ? parseInt(idAttr, 10) : null;

      let contentMarkdown = '';

      if (isUser) {
        // ユーザー発話: pre code の textContent をプレーン取得
        const codeEl = stmt.querySelector('pre code');
        if (codeEl) {
          contentMarkdown = codeEl.textContent || '';
        } else {
          // フォールバック: bubble 直下のテキスト
          contentMarkdown = (bubble ? bubble.textContent : stmt.textContent) || '';
        }
      } else {
        // AI応答: .markdown-viewer の innerHTML を turndown で逆変換
        const viewer = stmt.querySelector('.markdown-viewer');
        if (viewer && turndownService) {
          const sanitized = sanitizeAssistantNode(viewer);
          contentMarkdown = turndownService.turndown(sanitized.innerHTML || '');
        } else if (viewer) {
          contentMarkdown = viewer.textContent || '';
        }
      }

      if (id === null) {
        console.debug("[MemoryBridge] message-content-id が取得できないメッセージをスキップ");
        return;
      }

      messages.push({
        id,
        role,
        content: contentMarkdown.trim()
      });
    });

    // id 昇順で並び替え（DOM順と一致するはずだが念のため）
    messages.sort((a, b) => a.id - b.id);

    return messages;
  }

  // --------------------------------------------
  // 日時フォーマット（JST ISO8601）
  // --------------------------------------------
  function formatDateTimeJST(date) {
    const pad = (n) => String(n).padStart(2, '0');
    const y = date.getFullYear();
    const mo = pad(date.getMonth() + 1);
    const d = pad(date.getDate());
    const h = pad(date.getHours());
    const mi = pad(date.getMinutes());
    const s = pad(date.getSeconds());
    return `${y}-${mo}-${d}T${h}:${mi}:${s}+09:00`;
  }

  // --------------------------------------------
  // フォールバック日時（YYYYMMDD-HHmmss）
  // --------------------------------------------
  function formatDateTimeCompact(date) {
    const pad = (n) => String(n).padStart(2, '0');
    return (
      date.getFullYear() +
      pad(date.getMonth() + 1) +
      pad(date.getDate()) +
      '-' +
      pad(date.getHours()) +
      pad(date.getMinutes()) +
      pad(date.getSeconds())
    );
  }

  // --------------------------------------------
  // ファイル名サニタイズ
  // Windows禁止文字 / 制御文字 / 連続スペース等を除去
  // --------------------------------------------
  function sanitizeFilename(name) {
    if (!name) return '';
    let s = String(name);
    s = s.replace(/[\\/:*?"<>|]/g, '_');     // Windows禁止文字
    s = s.replace(/[\u0000-\u001F\u007F]/g, ''); // 制御文字
    s = s.replace(/\s+/g, '_');               // 空白→アンダースコア
    s = s.replace(/_+/g, '_');                // 連続アンダースコア圧縮
    s = s.replace(/^[._]+|[._]+$/g, '');      // 先頭末尾のドット/アンダースコア除去
    return s.slice(0, 100);                   // 100文字までで打ち切り
  }

  // --------------------------------------------
  // ファイルパス組み立て
  // chats/{project}/{filename}.md
  // --------------------------------------------
  function buildFilePath(rawTitle, date) {
    const datePart = (() => {
      const pad = (n) => String(n).padStart(2, '0');
      return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
    })();

    let titleForFile = '';
    let project = 'misc';

    if (rawTitle && rawTitle.trim()) {
      titleForFile = sanitizeFilename(rawTitle);
      // タイトルが OpenClaw_005 や GensparkMemoryBridge_005 のような
      // 「{Project}_{連番}」形式ならプロジェクト名を抽出
      const m = titleForFile.match(/^([A-Za-z][A-Za-z0-9]*)_\d+/);
      if (m) {
        project = m[1];
      }
    } else {
      titleForFile = 'untitled-' + formatDateTimeCompact(date);
    }

    const filename = `${titleForFile}_${datePart}.md`;
    const filePath = `chats/${project}/${filename}`;

    return { filename, filePath, project };
  }

  // --------------------------------------------
  // チャットタイトルの取得
  // --------------------------------------------
  function getChatTitle() {
    // パターン1: <title>タグ
    const t = document.title;
    if (t && t.trim() && !/^Genspark$/i.test(t.trim())) {
      // 「Genspark - {タイトル}」のような形式から切り出す
      const m = t.match(/[-—|｜]\s*(.+?)\s*$/);
      if (m && m[1]) return m[1].trim();
      return t.trim();
    }
    return '';
  }

  // --------------------------------------------
  // Markdown整形（フロントマター + 本文）
  // --------------------------------------------
  function buildMarkdown() {
    const messages = extractMessages();
    const now = new Date();
    const rawTitle = getChatTitle();
    const pathInfo = buildFilePath(rawTitle, now);

    const chatTitle = rawTitle && rawTitle.trim()
      ? rawTitle.trim()
      : pathInfo.filename.replace(/\.md$/, '');

    const ids = messages.map(m => m.id);
    const idMin = ids.length ? Math.min(...ids) : 0;
    const idMax = ids.length ? Math.max(...ids) : 0;

    const meta = {
      chat_title: chatTitle,
      saved_at: formatDateTimeJST(now),
      message_count: messages.length,
      id_range: `${idMin}-${idMax}`,
      project: pathInfo.project,
      source_url: location.href,
      filename: pathInfo.filename,
      file_path: pathInfo.filePath
    };

    const fmLines = [
      '---',
      `chat_title: "${chatTitle.replace(/"/g, '\\"')}"`,
      `saved_at: "${meta.saved_at}"`,
      `message_count: ${meta.message_count}`,
      `id_range: "${meta.id_range}"`,
      `project: "${meta.project}"`,
      `source_url: "${meta.source_url}"`,
      '---',
      ''
    ];

    const bodyLines = [];
    messages.forEach(m => {
      const heading = m.role === 'user'
        ? `## User [id:${m.id}]`
        : `## Assistant [id:${m.id}]`;
      bodyLines.push(heading);
      bodyLines.push('');
      bodyLines.push(m.content);
      bodyLines.push('');
    });

    const markdown = fmLines.join('\n') + bodyLines.join('\n');

    return { markdown, meta };
  }

  // ============================================
  // 復元トリガー検知（T2-2 方針D）
  // 新チャットページ（/agents?type=ai_chat）検知時に
  // background へ復元提案を通知
  // ============================================

  /**
   * 現在のURLが新チャットページかどうか判定し、
   * 該当すればbackgroundに復元提案を通知
   */
  function checkNewChatPage() {
    const url = location.href;
    if (url.includes('/agents?type=ai_chat') && !restoreSuggested) {
      restoreSuggested = true;
      console.log('[MemoryBridge] 新チャットページ検知 → 復元提案通知');
      chrome.runtime.sendMessage({
        type: 'GMB_RESTORE_SUGGEST',
        project: null,
        title: null,
        url: url
      });
    } else if (!url.includes('/agents?type=ai_chat')) {
      // 新チャットページから離れた場合はフラグリセット
      restoreSuggested = false;
    }
  }

  /**
   * URL変更を監視（1秒間隔ポーリング）
   */
  function startUrlWatcher() {
    setInterval(() => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        console.log(`[MemoryBridge] URL変更検知: → ${currentUrl}`);
        checkNewChatPage();
      }
    }, 1000);
  }

  // DevToolsからの動作確認用に window へ公開
  window.__GMB_extract = extractMessages;
  window.__GMB_buildMarkdown = buildMarkdown;

  // --------------------------------------------
  // メッセージリスナー（popup / background からの依頼を処理）
  // --------------------------------------------
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    // --------------------------------------------
    // extractChat: チャット内容の抽出（旧API・互換維持）
    // --------------------------------------------
    if (request.action === "extractChat") {
      try {
        const result = buildMarkdown();
        sendResponse({
          success: true,
          markdown: result.markdown,
          messageCount: result.meta.message_count,
          meta: result.meta
        });
      } catch (e) {
        console.error("[MemoryBridge] extractChat エラー:", e);
        sendResponse({ success: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // previewFilename: 保存先ファイル名のプレビュー（T1-6新設）
    // popup起動時にUI表示用のファイル名・件数を取得する
    // --------------------------------------------
    if (request.action === "previewFilename") {
      try {
        const result = buildMarkdown();
        sendResponse({
          ok: true,
          filename: result.meta.filename,
          filePath: result.meta.file_path,
          chatTitle: result.meta.chat_title,
          messageCount: result.meta.message_count
        });
      } catch (e) {
        console.error("[MemoryBridge] previewFilename エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // buildMarkdown: background からの中継要求（saveCurrentChat 用）
    // --------------------------------------------
    if (request.action === "buildMarkdown") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] buildMarkdown エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }

    // --------------------------------------------
    // GMB_BUILD_MARKDOWN: background.js (T1-5) との互換エイリアス
    // background は { type: "GMB_BUILD_MARKDOWN" } で問い合わせる
    // --------------------------------------------
    if (request.type === "GMB_BUILD_MARKDOWN") {
      try {
        sendResponse({ ok: true, data: buildMarkdown() });
      } catch (e) {
        console.error("[MemoryBridge] GMB_BUILD_MARKDOWN エラー:", e);
        sendResponse({ ok: false, error: e.message });
      }
      return true;
    }
  });

  // --------------------------------------------
  // 初期化
  // --------------------------------------------
  turndownService = initTurndown();
  startUrlWatcher(); // T2-2: URL変更監視を開始
  checkNewChatPage(); // T2-2: 初回ロード時にも新チャットページ判定
  console.log('[MemoryBridge] DOM監視を開始しました');
  console.log('[MemoryBridge] 現在のURL:', location.href);
  console.log('[MemoryBridge] 復元トリガー監視を開始しました（方針D）');

})();
```

* * *

**background.js：**

```javascript
// ============================================
// Genspark Memory Bridge - Background Script (Service Worker)
// GitHub APIとの通信、データの中継を行う
// T1-8: エラーハンドリング整備版（2026-05-10）
// T1-9 fix: customFilename 反映対応（2026-05-16）
// T1-11 fix: loadContext 空コンテキストガード追加（2026-05-29）
// T2-2: 復元提案フラグ管理・バッジ制御追加（2026-05-31）
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
});

console.log("[MemoryBridge] Background script が起動しました");
```

* * *

**popup.html：**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 380px;
      font-family: "Segoe UI", "Meiryo", sans-serif;
      font-size: 13px;
      color: #333;
      padding: 16px;
      background: #fafafa;
    }

    h1 {
      font-size: 15px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid #4a90d9;
      color: #2c3e50;
    }

    .section {
      margin-bottom: 16px;
      padding: 12px;
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
    }

    .section h2 {
      font-size: 13px;
      margin-bottom: 8px;
      color: #555;
    }

    label {
      display: block;
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
      margin-top: 8px;
    }

    .hint {
      font-size: 11px;
      color: #888;
      margin-top: 2px;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 12px;
    }

    button {
      display: block;
      width: 100%;
      padding: 8px;
      margin-top: 8px;
      border: none;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
      color: white;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-save-settings {
      background: #6c757d;
    }

    .btn-save-chat {
      background: #4a90d9;
    }

    .btn-load-context {
      background: #28a745;
    }

    .btn-copy-context {
      background: #17a2b8;
    }

    .btn-restore {
      background: #e65100;
      font-weight: bold;
    }

    button:hover:not(:disabled) {
      opacity: 0.9;
    }

    /* スピナー */
    .spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      margin-right: 6px;
      vertical-align: middle;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* 復元提案バナー（T2-3 方針D） */
    #restoreBanner {
      display: none;
      margin-bottom: 16px;
      padding: 12px;
      background: #fff3e0;
      border: 2px solid #e65100;
      border-radius: 6px;
    }

    #restoreBanner.active {
      display: block;
    }

    #restoreBanner .banner-title {
      font-size: 13px;
      font-weight: bold;
      color: #e65100;
      margin-bottom: 6px;
    }

    #restoreBanner .banner-desc {
      font-size: 12px;
      color: #555;
      margin-bottom: 8px;
    }

    /* 専用結果エリア（消えずに残る） */
    #saveResult {
      margin-top: 10px;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      display: none;
      word-break: break-all;
    }

    #saveResult.success {
      display: block;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    #saveResult.error {
      display: block;
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    #saveResult a {
      color: #155724;
      font-weight: bold;
      text-decoration: underline;
    }

    #saveResult .label {
      font-weight: bold;
      display: block;
      margin-bottom: 2px;
    }

    #saveResult .path {
      font-family: Consolas, "Courier New", monospace;
      font-size: 11px;
      margin-bottom: 6px;
    }

    /* 既存ステータス（GitHub設定・コンテキスト復元用） */
    #status {
      margin-top: 12px;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      display: none;
    }

    #status.success {
      display: block;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    #status.error {
      display: block;
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    #status.info {
      display: block;
      background: #d1ecf1;
      color: #0c5460;
      border: 1px solid #bee5eb;
    }
  </style>
</head>
<body>

  <h1>Genspark Memory Bridge</h1>

  <!-- 復元提案バナー（T2-3 方針D） -->
  <div id="restoreBanner">
    <div class="banner-title">前回コンテキストを復元できます</div>
    <div class="banner-desc">
      新しいチャットを検知しました。ワンクリックで引き継ぎドキュメントをクリップボードにコピーします。
    </div>
    <button class="btn-restore" id="btnRestore">復元する（読み込み＋コピー）</button>
  </div>

  <!-- GitHub設定セクション -->
  <div class="section">
    <h2>GitHub設定</h2>

    <label>GitHubユーザー名</label>
    <input type="text" id="githubUser" placeholder="例: yasuaki">

    <label>リポジトリ名</label>
    <input type="text" id="githubRepo" value="genspark-memory-bridge">

    <label>Personal Access Token</label>
    <input type="password" id="githubToken" placeholder="github_pat_...">

    <button class="btn-save-settings" id="btnSaveSettings">設定を保存</button>
  </div>

  <!-- チャット保存セクション（T1-6リニューアル） -->
  <div class="section">
    <h2>チャット保存</h2>

    <label>保存ファイル名（プレビュー・編集可）</label>
    <input type="text" id="saveFileName" placeholder="Gensparkチャット画面で開いてください">
    <div class="hint">空欄のまま保存すると自動生成名で保存されます</div>

    <button class="btn-save-chat" id="btnSaveChat">現在のチャットをGitHubに保存</button>

    <div id="saveResult"></div>
  </div>

  <!-- コンテキスト復元セクション（Phase 1互換として維持） -->
  <div class="section">
    <h2>コンテキスト復元（手動）</h2>

    <label>読み込む前回チャットファイル名</label>
    <input type="text" id="loadFileName" placeholder="例: OpenClaw_001.md">

    <button class="btn-load-context" id="btnLoadContext">コンテキストを読み込み</button>
    <button class="btn-copy-context" id="btnCopyContext">クリップボードにコピー</button>
  </div>

  <!-- ステータス表示（GitHub設定・コンテキスト復元用） -->
  <div id="status"></div>

  <script src="popup.js"></script>
</body>
</html>
```

* * *

**popup.js：**

```javascript
// ============================================
// Genspark Memory Bridge - Popup Script
// ポップアップ画面のUI操作を処理する
// T1-6: チャット保存セクションをsaveCurrentChat方式にリニューアル
// T1-11 fix: クリップボードコピー時の空コンテキストガード追加（2026-05-29）
// T2-3: 復元提案バナー＋一括復元ボタン追加（2026-05-31）
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
// --------------------------------------------
document.getElementById("btnRestore").addEventListener("click", async () => {
  setRestoreButtonBusy(true);

  chrome.runtime.sendMessage(
    {
      action: "loadContext",
      previousChatFile: null,
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

      if (context.previousChat) {
        fullContext += "=== 前回チャットログ ===\n\n";
        fullContext += context.previousChat;
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

  if (loadedContext.previousChat) {
    fullContext += "=== 前回チャットログ ===\n\n";
    fullContext += loadedContext.previousChat;
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
```

* * *

以上、4ファイル全文の出力完了です。manifest.json は変更不要なのでそのままで大丈夫です。

ファイルを更新したら、テスト手順に進みましょうか？

## User [id:30]

全て更新しました
次タスクに進みましょう

## Assistant [id:31]

〇15往復目／25往復

了解です。ではT2-4（結合テスト）に進みます。

**テスト手順：**

**準備**

1.  Chrome の `chrome://extensions/` で Genspark Memory Bridge の更新ボタン（リロード）をクリック
2.  Genspark のタブがあればリロード（content\_script を再注入させる）

**テスト1：新チャットページ検知＋バッジ表示**

1.  Genspark で新しいチャットを開く（`/agents?type=ai_chat` のURL）
2.  拡張アイコンに「!」バッジ（オレンジ色）が表示されるか確認
3.  DevTools の Console に `[MemoryBridge] 新チャットページ検知 → 復元提案通知` が出ているか確認

**テスト2：一括復元ボタン**

1.  バッジ「!」が出た状態で拡張アイコンをクリック
2.  ポップアップ上部にオレンジ枠の復元提案バナーが表示されるか確認
3.  「復元する（読み込み＋コピー）」ボタンをクリック
4.  「✓ コピーしました（○○文字）」と緑色で表示されるか確認
5.  メモ帳等に Ctrl+V で引き継ぎドキュメントの内容が貼り付けられるか確認
6.  バッジ「!」が消えているか確認

**テスト3：既存機能デグレ確認**

1.  既存のチャットページ（`/agents?id=xxx`）で拡張アイコンをクリック → バナーが表示されない（正常）
2.  「現在のチャットをGitHubに保存」が正常に動作するか確認

* * *

テスト1から順に試していただいて、結果を教えてください。

## Assistant [id:33]

〇16往復目／25往復

スクリーンショットありがとうございます。状況を確認します。

**テスト1の結果：**

-   URL は `genspark.ai/agents?type=ai_chat` で正しく新チャットページにいる
-   しかし、拡張アイコンに「!」バッジが表示されていない
-   ポップアップにも復元提案バナーが表示されていない

**原因の切り分けをしたいです。**

DevTools の Console（F12 → Console タブ）を開いて、以下のログが出ているか確認していただけますか？

1.  `[MemoryBridge] 復元トリガー監視を開始しました（方針D）` — content\_script が正しく読み込まれたか
2.  `[MemoryBridge] 新チャットページ検知 → 復元提案通知` — 検知が発火したか
3.  何かエラー（赤文字）が出ていないか

「MemoryBridge」でフィルターすると見つけやすいです。

## Assistant [id:35]

〇17往復目／25往復

テスト1は成功ですね。バッジ「!」がオレンジ色で表示されています。

テスト2について、バナーが表示されない問題を切り分けます。

**考えられる原因：** ポップアップを開いた時に `GMB_GET_RESTORE_SUGGESTION` を background に問い合わせていますが、タイミングの問題で応答が返っていない可能性があります。

もう一つの可能性として、**最初のスクリーンショット（バナーなし）の時点ではまだ拡張をリロードした直後で、バッジが表示される前にポップアップを開いていた**のかもしれません。

確認させてください：

1.  現在（2枚目のスクリーンショットの状態で）、一度ポップアップを閉じて（ページの別の場所をクリック）、もう一度拡張アイコンをクリックしてポップアップを開き直してみてください。バナーが表示されますか？
    
2.  もし表示されない場合、DevTools Console（F12）で以下を実行してみてください：
    

```
chrome.runtime.sendMessage({ type: 'GMB_GET_RESTORE_SUGGESTION' }, (res) => console.log(res));
```

これで `{ suggestion: { ... } }` が返ってくるか、`{ suggestion: null }` が返ってくるかを確認したいです。

## Assistant [id:37]

〇18往復目／25往復

テスト2も成功ですね。バナーが正しく表示されています。

先ほどバナーが出なかったのは、拡張リロード直後のタイミング問題だったようです（background.js のService Workerが再起動した直後にcontent\_scriptからの通知を受け取る前にポップアップを開いた）。ページリロード後は正常に動作しているので問題ありません。

では続けてテスト2の残りを実施してください：

1.  **「復元する（読み込み＋コピー）」ボタンをクリック**
2.  「✓ コピーしました（○○文字）」と緑色で表示されるか確認
3.  メモ帳等に Ctrl+V で引き継ぎドキュメントの内容が貼り付けられるか確認
4.  バッジ「!」が消えているか確認

## Assistant [id:39]

〇19往復目／25往復

完璧です。テスト2の全項目が成功しています：

-   「✓ コピーしました（5167文字）」が緑色で表示 ✓
-   Ctrl+V で引き継ぎドキュメント全文が正しく貼り付けられた ✓
-   バッジ「!」が消えている（スクショ右上のアイコンがバッジなしの「G」に戻っている） ✓

**テスト3（既存機能デグレ確認）** も実施しますか？具体的には：

1.  既存のチャットページ（`/agents?id=xxx` — 会話が既に存在するページ）に移動して、拡張アイコンをクリック → バナーが表示されないこと
2.  そのページで「現在のチャットをGitHubに保存」が正常動作すること

もし時間を優先して先に進みたい場合、テスト3はスキップしてT2-4完了→T2-5（Phase 2完了判定）に進むこともできます。どちらにしますか？

## User [id:40]

テスト3に進みましょう

## Assistant [id:41]

〇20往復目／25往復

了解です。テスト3を実施してください。

**テスト3：既存機能デグレ確認**

1.  Genspark で既存のチャット（会話が1件以上ある状態）を開く（URLが `/agents?id=xxx` の形式になっているページ）
2.  拡張アイコンをクリック → 復元提案バナー（オレンジ枠）が**表示されない**ことを確認
3.  「現在のチャットをGitHubに保存」ボタンをクリック → 正常に保存完了（緑色の「✓ 保存完了」表示＋ファイルパス＋GitHubで開くリンク）が出ることを確認
