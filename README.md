# Web Design Master

ChatGPT・Claude・Geminiから再利用する、軽量なWebデザイン・アニメーション部品の正本です。

**[動作デモ（GitHub Pages未設定・ソース表示）](demo/index.html)**

## 標準制作フロー

新規Webサイトや重要なデザイン刷新は、[3-AI独立制作・選抜統合フロー](WORKFLOW_3AI.md) を基準に進めます。ChatGPT（構成・UX・品質）、Claude（ビジュアル・モーション）、Gemini（独創性・別視点）が同一ブリーフから独立案を制作し、デザイン・操作性・速度・スマホ対応を比較。3案の平均・多数決ではなく優れた要素を選抜して最終案1つに統合します。小規模修正はリスクに応じて簡略化します。

制作時の品質確認は [ディレクション・リリース検品プロトコル](DIRECTION_QA.md) に従い、確認結果の証拠を案件Repository側に残します。

CONTENTS・DESIGNテンプレートおよびユーザー提供の検品Excelから採用した実務基準は [CONTENT_DESIGN_TEMPLATE_GUIDE.md](CONTENT_DESIGN_TEMPLATE_GUIDE.md) を参照してください。

Claude制作では [必須3スキルの起動・適用ルール](CLAUDE_REQUIRED_SKILLS.md) を確認します。

## 公開必須のブランド素材

新規サイトの制作時には、[ファビコン・背景透過PNGロゴの必須標準](BRAND_ASSETS_STANDARD.md) を適用します。設定と本番確認が済まない限り公開完了扱いにしません。素材の実体は各サイト側で管理し、本Masterに画像ファイルを置きません。

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
