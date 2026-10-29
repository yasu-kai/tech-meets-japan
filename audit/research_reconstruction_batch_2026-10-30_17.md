# Research independent second-pass editorial audit — batch 17 (2026-10-30)

## Scope and method
Canonical tracker had **21/47 PASS** before this batch. Six previously PENDING articles were independently re-read, checked against vendor first-party documentation/announcements, and revised for product-specific mechanism, concrete input/output, non-equivalent comparisons, Japan implications, limitations, and natural Japanese. No already-PASS articles were rewritten. These are editorial verdicts, not a claim of manual visual inspection. Article content commit: `4feaa6ae7e2c0f5ea3a302a8a303bb7ee6db7892`.

## coding-agents
- **verdict:** PASS
- **score:** 92/100
- **body characters:** 3562 (without headings)
- **focus:** Replit Agent 4／Agent Checkpoints、Cursor Cloud Agents、Devin
- **blocking_findings:** [] (resolved before PASS)
- **warnings:** Cursorの企業向けデータ保持・地域・BYOKの適用範囲、各製品の日本語サポート・料金は契約ごとに要確認。
- **generic_text:** [] (generic claims replaced with mechanisms and operational examples)
- **unsupported_claims:** [] remaining as asserted facts; unverified market, pricing and outcomes are labeled conditional/vendor-reported
- **comparison_failures:** [] remaining. Replit=企画・デザインから稼働まで、Cursor=既存GitリポジトリのPR、Devin=再現可能な開発環境を前提に委任。機能は重複し優劣順位を付けない。
- **required_fixes:** Replit Checkpointsはコードだけでなく会話文脈・Replit管理下のDB状態も保存する点へ訂正。外部決済や送信済みメールは別扱い。CursorのVM分離を補足し、3製品の同条件テスト設計を追加。 **Resolved in main.**
- **first-party evidence:** `https://replit.com/blog/introducing-agent-4-built-for-creativity` ; `https://docs.replit.com/replit-workspace/workspace-features/version-control` ; `https://cursor.com/docs/cloud-agent/security` ; `https://docs.devin.ai/onboard-devin/environment`

## ai-sales
- **verdict:** PASS
- **score:** 93/100
- **body characters:** 3808 (without headings)
- **focus:** Clay Waterfalls/Sequencer、11x Alice、Artisan Ava 2.0
- **blocking_findings:** [] (resolved before PASS)
- **warnings:** 各社の『自律』や成果数値は提供会社の説明。日本市場のデータ網羅性・法的な送信条件・契約価格は未実証。
- **generic_text:** [] (generic claims replaced with mechanisms and operational examples)
- **unsupported_claims:** [] remaining as asserted facts; unverified market, pricing and outcomes are labeled conditional/vendor-reported
- **comparison_failures:** [] remaining. Clay=データ構築とメール連携、11x=複数チャネルのAI営業開拓、Artisan=返信・予約・人間の電話引継ぎ。商談設定数はチャネル別に比較。
- **required_fixes:** ArtisanのCRM配信禁止リスト、項目単位の同期制御、内蔵ダイヤラーを公式発表に基づき具体化。Clayのメール中心機能と11x/Artisanのマルチチャネルを区別。母数変更とAI効果の混同を避ける検証設計を追加。 **Resolved in main.**
- **first-party evidence:** `https://www.clay.com/blog/clay-email-sequencer` ; `https://docs.11x.ai/alice/overview` ; `https://www.artisan.co/blog/artisan-launches-ava-2-0-first-autonomous-ai-bdr`

## ai-recruiting
- **verdict:** PASS
- **score:** 92/100
- **body characters:** 3508 (without headings)
- **focus:** Paradox Olivia、Eightfold Talent Acquisition、Hirevue AI Interviewer
- **blocking_findings:** [] (resolved before PASS)
- **warnings:** Hirevueの妥当性・公平性は同社の主張を含む。日本語面接の妥当性、アクセシビリティ、個人情報処理・候補者異議対応は個別検証。
- **generic_text:** [] (generic claims replaced with mechanisms and operational examples)
- **unsupported_claims:** [] remaining as asserted facts; unverified market, pricing and outcomes are labeled conditional/vendor-reported
- **comparison_failures:** [] remaining. 応募離脱ならParadox、候補者発掘・スキルならEightfold、評価設計ならHirevueが入口。ただし選考機能は重複する。
- **required_fixes:** EightfoldにもAI Interviewerと360 Interviewがあることを明示。Paradox=日程調整のみ、Eightfold=検索のみ、Hirevue=面接のみという誤った排他比較を修正。模擬候補者・合理的配慮を含む評価検証を追加。 **Resolved in main.**
- **first-party evidence:** `https://www.paradox.ai/products/screening` ; `https://eightfold.ai/products/talent-acquisition/` ; `https://www.hirevue.com/press-release/hirevue-launches-ai-interviewer`

## ai-video
- **verdict:** PASS
- **score:** 90/100
- **body characters:** 3412 (without headings)
- **focus:** Runway Aleph 2.0 Edit Studio、HeyGen Avatar V/HyperFrames、Synthesia Enterprise
- **blocking_findings:** [] (resolved before PASS)
- **warnings:** 動画生成の人物・ロゴ・同意・多言語翻訳の品質は用途別の実測が必要。各社の課金単位と企業向け機能はプランで異なる。
- **generic_text:** [] (generic claims replaced with mechanisms and operational examples)
- **unsupported_claims:** [] remaining as asserted facts; unverified market, pricing and outcomes are labeled conditional/vendor-reported
- **comparison_failures:** [] remaining. Runway=既存映像の局所編集、HeyGen=アバター/HTMLベースの多版生成、Synthesia=企業内の研修動画の管理と更新。全ての動画制作を同一条件で比較しない。
- **required_fixes:** Aleph 2.0の2〜30秒・最大1080p・部分編集と28クレジット/秒を明示。HeyGenのAvatar VとHTML動画のHyperFramesを別機能として整理。Synthesiaは動画管理・更新工程を評価対象に追加。旧AIレベル数値メタデータを説明文に変更。 **Resolved in main.**
- **first-party evidence:** `https://help.runwayml.com/hc/en-us/articles/51683104370451-Creating-with-Edit-Studio` ; `https://www.heygen.com/blog/heygen-april-2026-release` ; `https://www.heygen.com/blog/heygen-may-2026-release` ; `https://www.synthesia.io/enterprise`

## runway-production
- **verdict:** PASS
- **score:** 92/100
- **body characters:** 3348 (without headings)
- **focus:** Runway Edit Studio/Aleph 2.0、Act-Two、日本進出、MIXI
- **blocking_findings:** [] (resolved before PASS)
- **warnings:** MIXIの制作期間短縮数値は発表当事者の事例であり一般化不可。日本拠点の設置と国内全機能/日本語サポートの保証を混同しない。
- **generic_text:** [] (generic claims replaced with mechanisms and operational examples)
- **unsupported_claims:** [] remaining as asserted facts; unverified market, pricing and outcomes are labeled conditional/vendor-reported
- **comparison_failures:** [] remaining. Aleph=既存映像を修正、Act-Two=演技の転写。映像生成全般や制作管理OS完成とは区別する。
- **required_fixes:** Aleph 2.0の範囲指定課金、Act-Twoの入力とキャラクター画像/動画の動作差、ProRes/PNG連番のプラン・追加クレジット条件を追記。旧AIレベル数値メタデータを削除。 **Resolved in main.**
- **first-party evidence:** `https://help.runwayml.com/hc/en-us/articles/51683104370451-Creating-with-Edit-Studio` ; `https://help.runwayml.com/hc/en-us/articles/42311337895827-Performance-Capture-with-Act-Two` ; `https://runway.com/news/runway-is-coming-to-japan` ; `https://runway.com/news/runway-and-mixi-announce-strategic-partnership`

## manufacturing-ai
- **verdict:** PASS
- **score:** 90/100
- **body characters:** 3191 (without headings)
- **focus:** Siemens Insights Hub、Production Copilot/Copilot Studio、Digital Twin Composer、NVIDIA協業
- **blocking_findings:** [] (resolved before PASS)
- **warnings:** Siemens Insights Hubの製品ページは自動取得時にタイムアウト。CES公式発表とSiemens公式ブログは確認。顧客成果・機能提供範囲・OT接続は導入環境で再検証。
- **generic_text:** [] (generic claims replaced with mechanisms and operational examples)
- **unsupported_claims:** [] remaining as asserted facts; unverified market, pricing and outcomes are labeled conditional/vendor-reported
- **comparison_failures:** [] remaining. 現場の時系列データから異常を探るCopilotと、将来の設備変更を試すDigital Twin Composerは代替関係ではなく補完関係。
- **required_fixes:** Production Copilotの原因候補提示と設備制御の権限を区別。Digital Twin Composerは改修案のシミュレーションであり、現場異常対応とは別の入出力だと明示。包装ラインの原因分析を例示。旧AIレベル数値メタデータを説明文へ変更。 **Resolved in main.**
- **first-party evidence:** `https://www.siemens.com/ja-jp/products/insights-hub` ; `https://blogs.sw.siemens.com/insights-hub/2026/06/19/siemens-presently-named-company-to-beat-in-manufacturing-ai-by-gartner/` ; `https://press.siemens.com/jp/ja/pressrelease/pr-20260106-1`

## Deployment and independent smoke QA
- Vercel Production deployment `dpl_Bom3Fo5MSA7C8P1Z1d4HV7TH3Dvj` for content commit `4feaa6ae7e2c0f5ea3a302a8a303bb7ee6db7892` reached **READY**.
- Independent remote VPS HTTP check of six `/research/{category}/{slug}` routes: **6/6 HTTP 200**, revised text marker present in all six. Six adopted `/editorial/generated/{slug}.webp` assets: **6/6 HTTP 200**, `image/webp`, RIFF magic. No slug/category/hero binary or mapping changed.
- Fresh post-content GitHub Actions rerun `40907522742`, job `123710330187`, **SUCCESS**: deterministic editorial gate PASS; Playwright **94/94 desktop/mobile views, 0 failures**; screenshot artifact `12930811029` uploaded. This is automated image/layout QA, not a claim of human pixel-by-pixel inspection.
- Siemens Insights Hub direct page timed out in automated retrieval; do not treat that alone as broken. Other cited first-party material was inspected for the material claims.

## Completion gate
**27/47 editorial PASS, 20/47 PENDING** once the canonical tracker is updated. The global completion gate remains OPEN. No completion notification.
