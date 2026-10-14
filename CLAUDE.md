# CLAUDE.md — Web Design Master（KSデザインマスター）

このRepositoryは RSS7 Web制作の **KSデザインマスター（デザイン部品と制作標準の正本）**。
Claude Code はセッション開始時にこのファイルを読み、詳細は下記リンク先の正本に従う。

## 0. セッション開始時（毎回）

1. GitHubの最新 `main` を確認する（`git fetch origin main`）。古いローカル・過去チャットを正本にしない。
2. 上位ルールを読む：[ai-master/AGENTS.md](https://github.com/oosaka0123-sudo/ai-master/blob/main/AGENTS.md) → [docs/standards/WEB_DEVELOPMENT.md](https://github.com/oosaka0123-sudo/ai-master/blob/main/docs/standards/WEB_DEVELOPMENT.md)
   - クラウド環境では Public Repository として `git clone --depth 1 https://github.com/oosaka0123-sudo/ai-master` で読み取り可能（2026-10-15 実確認）。
3. 優先順位：**ai-master → web-design-master（本Repo）→ 各サイト固有ルール**。

## 1. 制作の必須ルール（要約。詳細はリンク先）

- KSデザインマスターを適用：[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) / [AGENTS.md](AGENTS.md)
- 既存デザイン・コンテンツ・機能を維持（無断で上書き・削除しない）
- スマホファースト（320 / 390px と PC で確認）
- ファビコン必須・サイト固有の背景透過PNGロゴ必須：[BRAND_ASSETS_STANDARD.md](BRAND_ASSETS_STANDARD.md)
- 共有ボタン・統一フッター・`powered by RSS7.ai Works` 表記必須：[SITE_SHELL_STANDARD.md](SITE_SHELL_STANDARD.md)
- 3AI制作・検品：[WORKFLOW_3AI.md](WORKFLOW_3AI.md) / [DIRECTION_QA.md](DIRECTION_QA.md) / [CLAUDE_DIRECTION.md](CLAUDE_DIRECTION.md)
- 必須3スキル：[CLAUDE_REQUIRED_SKILLS.md](CLAUDE_REQUIRED_SKILLS.md)

## 2. 作業手順

- **ブランチ → PR → テスト → レビュー**。`main` へ直接pushしない。公開サイトへ無断デプロイしない。
- 実施していないレビュー・テスト・AI接続を「完了」と報告しない。未実施は未実施と書く。
- このRepoに写真・動画・共有ボタン実装・サイト固有素材を追加しない。`rss7-house` は読み取り専用。
