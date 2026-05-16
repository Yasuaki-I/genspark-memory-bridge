# GensparkMemoryBridge — Obsidian運用ガイド

## Vaultパス

`C:\Users\yasua\Documents\Obsidian Vault\★GensparkMemoryBridge\`

## ディレクトリ構成

★GensparkMemoryBridge/
├── 引き継ぎドキュメント.md        ← チャット冒頭に全文貼り付けする本体
├── progress/                      ← 日次・週次の作業ログ
│   ├── 2026-04-29.md
│   ├── 2026-05-02.md
│   └── weekly-W1.md
├── reference/                     ← 設計資料・調査メモ（変更頻度低）
│   ├── Obsidian運用ガイド.md（本ファイル）
│   ├── DOM解析結果.md
│   ├── selectors-json仕様.md
│   └── Chrome拡張_Manifest_V3メモ.md
└── decisions/                     ← 設計判断の記録
    └── 001_リポジトリ構成.md


## 運用ルール

### 引き継ぎドキュメント

新チャット開始時に全文貼り付けで引き継ぐ。以下のタイミングで更新する。

- 状態変更時
- 作業の区切り
- チャット終了時
- スクリプト実行前

### 日次ログ（progress/YYYY-MM-DD.md）

作業終了時に保存。以下の3点を必ず含める。

- やったこと
- 判明したこと
- 次回やること

### 週次ログ（progress/weekly-W*.md）

各週最終日に作成。ゴール達成状況と翌週ゴール設定を記載する。

### 設計判断（decisions/）

「何を・なぜ・代替案は何だったか」を記録する。DOM構造のようにGensparkの仕様変更で再検討が必要になるものは特に重要。

### referenceフォルダ

DOM解析結果やAPI仕様など、チャット本文に貼ると長すぎるが参照頻度が高い情報を置く。チャットでは「reference/DOM解析結果.md 参照」と記載すれば十分。

## バックアップ

Obsidian Gitプラグインにより5分間隔で自動バックアップ（GitHub Private repo）。既存のVault全体設定が適用されるため、追加設定は不要。

## チャットでのトークン節約

長文のDOM構造やコード全文はObsidianに保存し、チャットには差分・要点のみ共有する。

## 命名規則

- ファイル名は日本語OK（Obsidian内検索のしやすさ優先）
- 日次ログはISO日付（YYYY-MM-DD.md）