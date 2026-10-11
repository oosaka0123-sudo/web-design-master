# KS Web Design System v0.1

## 役割
このRepositoryはデザインと動作の共通部品を持ち、個別サイトの内容・ブランド・メディアは持たない。

## 実装仕様
| 機能 | 規約 |
| --- | --- |
| Full Overlay | 全画面ナビ。開閉・ESC・背景スクロール制御・focus復帰 |
| Transparent Header | 初期透過、スクロールで不透明化。data属性で切替 |
| Hero Motion | 要素の段階的登場。動きは控えめ |
| H2 Reveal | 見出しがviewportに入ったら登場 |
| Image Reveal | サイト側で提供されるメディアのラッパーだけを演出。素材は保持しない |
| Marquee | CSSテキストマーキー。reduced-motion時停止 |
| Scroll Reveal | IntersectionObserverで一度だけ演出 |

## 組込みAPI
- CSS: `src/ks-design.css`
- JS: `src/ks-motion.js` の `initKSDesign(document)`
- CSS prefix: `ks-`; custom propertiesは `--ks-*`
- `[data-ks-header]`、`[data-ks-overlay]`、`[data-ks-overlay-open]`、`[data-ks-overlay-close]`
- `[data-ks-hero]`、`[data-ks-h2]`、`[data-ks-image]`、`[data-ks-reveal]`
- `.ks-marquee`の内部に `.ks-marquee__track`

## 導入手順
1. 対象サイトの現行挙動をPC/モバイルで調査
2. 本Repositoryの該当バージョン・ファイルを参照して対象Projectの開発branchへ導入
3. 対象サイト固有のタイミング・デザインは変数と局所CSSで調整
4. keyboard/モバイル/Reduced Motion/Scroll/既存機能をチェック
5. PRレビュー後にのみ個別サイトのデプロイへ進む

## 禁止
写真・動画ファイル、共有ボタン、実サイトのコンテンツ、実サイト用Secret、既存本番サイトへの無承認デプロイ。
