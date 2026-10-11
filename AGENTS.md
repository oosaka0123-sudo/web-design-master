# Web Design Master — Agent Rules

このRepositoryは複数Webサイト向けデザイン部品の正本。運用・セキュリティの上位ルールは [ai-master](https://github.com/oosaka0123-sudo/ai-master) の AGENTS.md / docs/standards/WEB_DEVELOPMENT.md に従う。

## 必須
- 対象サイトの既存デザイン・動作・ギミックを調査し、指定された場合は見た目だけでなく挙動も再現する。
- 共通部品はフルオーバーレイ、透過ヘッダー、Hero Motion、H2 Reveal、Image Reveal、マーキー、スクロール演出。
- このRepositoryへ写真・動画およびそれらのバイナリ素材を追加しない。共有ボタンの実装も追加しない。
- 既存サイトのメディア素材はサイト自身のRepository/CDNが管理する。デモは文字・CSS背景で表現する。
- RSS7 HOUSEは読み取り専用。その他の既存本番サイトもユーザーの明示依頼なしに変更しない。
- コード変更は小さなbranch→PR→review→testで行う。サイトへの組み込みは別Projectで明示承認を得て行う。
- 外部依存は極小化し、キーボード操作、focus、スクロール復帰、prefers-reduced-motion、モバイルに対応する。
- 第三者AIによる実レビュー、CI実行、デプロイの実施有無を偽らない。未実施は未実施と書く。
- デザイン部品の適用時、必ず元サイトの既存HTML/CSS/JSとの競合を確認する。無条件にファイルを上書きしない。

## Rego（レビュー判断基準）
Regoはユーザーから明示された場合のみ採用する評価ラベル。現時点では公式定義の確認が取れていないので、未確認の点数・審査・合格を創作しない。
実用判定には再利用性・保守性・既存サイト安全性・速度・アクセシビリティ・AI再現性を採用する。
