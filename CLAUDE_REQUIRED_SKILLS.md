# Claude制作必須スキル（PC03）

## 適用範囲と必須条件
このRepositoryの標準フローに従って**Claude CodeでWebサイト・LP・デザイン刷新を制作する場合**、次の3スキルを毎回有効にして使用する。独立したChatGPT・Geminiの案を制作する段階にClaude専用スキルを強制しない（3案の独立性を守る）。

| スキル | 形式 | 制作時の必須用途 |
| --- | --- | --- |
| `frontend-design` | Anthropic公式プラグイン `frontend-design@anthropic-plugin-directory` | 品質あるビジュアル、文字組み、UI実装 |
| `rss7-wireframe` | RSS7ローカル独自スキル（公式ではない） | ユーザー導線、ワイヤーフレーム、CTA配置、モバイルの構成 |
| `rss7-interactive-prototype` | RSS7ローカル独自スキル（公式ではない） | 動作プロトタイプ、モーション、キーボード・タップ・reduced-motionの確認 |

## 制作開始ゲート：ON確認

1. `claude plugin list` で `frontend-design@anthropic-plugin-directory` が `enabled` か検査する。無ければ、公式ディレクトリの提供状況・信頼性を確認してから導入する。
2. PC03では `%USERPROFILE%\.claude\skills\rss7-wireframe\SKILL.md` と `%USERPROFILE%\.claude\skills\rss7-interactive-prototype\SKILL.md` の存在・frontmatter（name/description）を確認し、Claude Codeから**実際に認識・呼び出せるか**テストする。単なるファイル存在では「ON」とみなさない。
3. 作業開始時に3スキルを有効化/呼び出し、共通ブリーフ → wireframe → frontend-design → interactive-prototype の順に使う。必要なスキルを実行できないときは**未実行と明記**し、使用したことにしない。
4. 3スキルの実行記録（バージョン、認識/呼び出し、成果物、日時）を**案件Repository**に残す。上位ガバナンス、秘密情報の保護、権限、テスト、PR/CIを維持する。
5. このゲートが未達なら「3スキル適用済みの正式デザイン」として完成扱いにしない。未達を明示し、接続復旧または実行可能な環境へ切り替える。利用不能を隠して生成した試作は正式案と分ける。

## Claude Design画面での扱い
ClaudeのWeb/Design UIでローカルClaude Codeのプラグインや独自スキルが**自動的にONになるとは限らない**。Web UIから呼べる機能を実機確認し、呼べない場合はClaude Code側で3スキルを使用して実装・QAする。未確認の自動連携を前提にしない。

## クラウド（Claude Code on the web / PC04）での状態（2026-10-15 確認）

| スキル | クラウドでの状態 | 根拠 |
| --- | --- | --- |
| `frontend-design` | **使用可** | `claude plugin install frontend-design@anthropic-plugin-directory --scope project` 成功、`claude plugin list` で `enabled`。各案件Repoの `.claude/settings.json` の `enabledPlugins` で宣言 |
| `rss7-wireframe` | **未配置（使用不可）** | 原本はPC03の `%USERPROFILE%\.claude\skills\` のみ。GitHub上の4 Repo（ai-master / web-design-master / ks01 / chat-homepage）に原本なし。PC03停止中のため取得不可 |
| `rss7-interactive-prototype` | **未配置（使用不可）** | 同上 |

- 独自2スキルは、PC03復旧時（またはPC03のバックアップから）原本の `SKILL.md` 一式を取り出し、内容をレビューして各案件Repoの `.claude/skills/<name>/` へPRで追加する。**同名の互換品を新規作成しない。**
- 配置されるまでは「3スキル適用済みの正式デザイン」として完成扱いにしない。

## 再利用と制約
- 独自スキルの実体がPC03のローカルだけにある場合、他PC・クラウドへ自動同期済みと扱わない。再現性確保には**内容をレビューして専用の安全なソース管理先へ配置**する。
- プラグインの追加導入やアップグレードは出所・必要性・権限を確認。既存の制作環境や本番サイトへ勝手に変更を加えない。
- 写真・動画・共有ボタンはWeb Design Masterへ追加しない。
