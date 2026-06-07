# Genspark Memory Bridge

Genspark のチャット記憶を永続化する Chrome 拡張機能です。

チャットの保存・復元を GitHub 経由で一体化し、新しいチャットを開いても前回の文脈を引き継げます。

---

## 特徴

**チャット保存（GitHub連携）**

Genspark のチャットを Markdown 形式で GitHub リポジトリに自動保存します。ファイル名の自動生成・編集、古いスナップショットの自動削除に対応しています。

**コンテキスト復元**

新しいチャットページを検知するとバッジで通知。ワンクリックで引き継ぎドキュメントをクリップボードにコピーし、前回の文脈を即座に復元できます。

**GitHub による版管理**

保存のたびに Git コミットが作成されるため、チャットの変更履歴を追跡できます。Obsidian-Git 連動でローカルのナレッジベースとも同期可能です。

---

## 動作の流れ

    Genspark チャット
        ↓ 保存ボタン
    GitHub リポジトリ（Markdown）
        ↓ 新チャット検知
    バッジ通知 → ワンクリック復元 → 貼り付け

---

## インストール・セットアップ

1. Chrome Web Store から「Genspark Memory Bridge」をインストール
2. GitHub で Personal Access Token を発行
3. 拡張のポップアップで設定を入力し、接続テストを実行

詳細な手順は **[初期セットアップガイド](docs/setup-guide.md)** を参照してください。

---

## 必要な環境

- Google Chrome（バージョン 116 以降）
- GitHub アカウント（無料プランで利用可能）
- Genspark アカウント

---

## リポジトリ構成

    genspark-memory-bridge/
    ├── manifest.json          # Chrome 拡張マニフェスト
    ├── background.js          # Service Worker（GitHub API通信）
    ├── content_script.js      # Genspark ページ操作
    ├── popup.html             # ポップアップ UI
    ├── popup.js               # ポップアップ ロジック
    ├── icons/                 # 拡張アイコン（128/48/16）
    ├── docs/
    │   ├── setup-guide.md     # 初期セットアップガイド
    │   ├── privacy-policy.md  # プライバシーポリシー
    │   └── store-listing.md   # ストア説明文
    ├── chats/                 # 保存されたチャット（自動生成）
    ├── summaries/             # ローリングサマリー
    └── images/                # ドキュメント用画像

---

## プライバシー

- すべてのデータはユーザー自身の GitHub リポジトリにのみ保存されます
- 外部サーバーへのデータ送信は一切行いません
- 詳細は [プライバシーポリシー](docs/privacy-policy.md) を参照してください

---

## 対応プラットフォーム

現在は **Genspark**（https://www.genspark.ai/）専用です。

他の AI プラットフォーム（Claude.ai、ChatGPT 等）への対応は、利用者の要望に応じて検討します。

---

## フィードバック・不具合報告

ご意見・不具合報告は以下で受け付けています:

- GitHub Issues（このリポジトリ）
- Chrome Web Store のレビュー欄

---

## ライセンス

MIT License

---

## 開発者

Yasuaki-I

---

*最終更新: 2026-06-07*
