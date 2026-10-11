# Web Design Master

ChatGPT・Claude・Geminiから再利用する、軽量なWebデザイン・アニメーション部品の正本です。

**[動作デモ（GitHub Pages未設定・ソース表示）](demo/index.html)**

## 収録内容
- Full Overlay（開閉 / ESC / フォーカス制御 / 背景スクロール制御）
- Transparent Header（スクロール時の状態切替）
- Hero Motion / H2 Reveal / Image Reveal / Scroll Reveal
- Text Marquee
- reduced-motion対応 / 外部JavaScript依存なし

## 導入
1. [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) と [AGENTS.md](AGENTS.md) を読む
2. `src/ks-design.css` と `src/ks-motion.js` を対象Projectの開発branchへ導入
3. `initKSDesign(document)` をDOMContentLoaded後、またはmodule scriptで呼び出す
4. [demo/index.html](demo/index.html) を参考にHTMLのdata属性を設定
5. 既存サイトと比較検証し、PRレビュー完了後にのみ公開

## マスター境界
- AI共通の運用ルール: [ai-master](https://github.com/oosaka0123-sudo/ai-master)
- デザイン仕様と共通部品: 本Repository
- 本番の内容・素材・配備: 各WebサイトのRepository

**禁止:** 写真、動画、共有ボタンの保管・実装。RSS7 HOUSEへの変更。既存サイトへの無断更新。

## 検証
現時点でコードはコミット済み。独立したClaude・Geminiレビュー、ブラウザ実機テスト、CIテストは未実施であり、合格を意味しません。まずデモと実機確認を行ってから各サイトへ適用してください。
