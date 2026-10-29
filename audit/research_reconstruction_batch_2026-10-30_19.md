# Batch 19 — 2026-10-30 — six source-bound independent second-pass editorial audits

## Scope
Reopened current vendor primary documents and independently reviewed six previously PENDING stories for product-specific mechanisms, INPUT/OUTPUT/REPLACES, comparison, limits, Japan deployment, Japanese naturalness and narrative value. No new numerical ranking or unsupported performance claim. The six editorial verdicts are independent of the final global production/visual-QA gate. Existing URLs, categories and hero WebP mappings are unchanged. Legacy 43-row first-pass tracker remains untouched.

## Incident and recovery
A first GitHub object-splice attempt produced a malformed Research TypeScript data file; Vercel deployment `dec7b58deaff80cb8f1c39e8a03e2b08a2a47ef3` failed. The exact original file was restored at commit `da0487c3f709a1e02a4245541d88e900fcd70f84` (Vercel READY). A corrected brace-balanced object replacement, full JavaScript parse, 47-unique-slug assertion and 41-untouched-story equality check were applied before content commits `1da8b7a0310454525092162191bf97f364f11c7e` and `429f3ab0126d518f63d0c07ae996a314f477e60e`. This failure is recorded rather than concealed. The final content build and sitewide QA are separately tracked below.

## ai-soc
- verdict: **PASS** (editorial second pass; sitewide publication gate separate)
- score: **90/100**
- substantive Japanese body characters: 2429 → 3041
- blocking_findings: **[]** (draft gaps corrected before acceptance)
- warnings: 
  - Microsoftの拡張アラートは一部プレビュー。対象通知・ライセンス・SCU消費は環境依存。
- generic_text: **[]** (new paragraphs refer to concrete named mechanisms and tests)
- unsupported_claims: **[]** (roadmap, pricing, marketing metrics and deployment are qualified)
- comparison_failures: **[]** (SOARの固定フローとSecurity Copilotの文脈依存トリアージを分離。Phishing TriageとSecurity Alert Triageは同一エージェントの拡張関係。)
- required_fixes: **[]** (applied: 別製品と誤読しやすい構成を修正。フィードバックの監査保存と明示的な学習を分離し、SCUと封じ込め権限の違いを追記。)
- independently opened primary sources:
  - https://learn.microsoft.com/en-us/defender-xdr/phishing-triage-agent
  - https://learn.microsoft.com/en-us/copilot/security/agents-overview
  - https://learn.microsoft.com/en-us/defender-xdr/security-alert-triage-agent

## identity-agents
- verdict: **PASS** (editorial second pass; sitewide publication gate separate)
- score: **90/100**
- substantive Japanese body characters: 2352 → 3188
- blocking_findings: **[]** (draft gaps corrected before acceptance)
- warnings: 
  - Oktaの2026-09-22ロードマップは提供保証ではない。国内提供、対象プラン、実行時失効の範囲は契約と実機で要確認。
- generic_text: **[]** (new paragraphs refer to concrete named mechanisms and tests)
- unsupported_claims: **[]** (roadmap, pricing, marketing metrics and deployment are qualified)
- comparison_failures: **[]** (従来IAM/サービスアカウントの固定権限と、Agent SSO・Agent-to-Agent委任・Gateway構想の実行時統制を分ける。)
- required_fixes: **[]** (applied: Agent SSO/Agent-to-Agent/Access CertificationsのGAとGateway/拡張Kill Switchの予定を区別。停止後の既存セッション、委任ログを実験可能な条件へ具体化。)
- independently opened primary sources:
  - https://www.okta.com/newsroom/press-releases/ai-innovations-oktane-2026/
  - https://www.okta.com/newsroom/press-releases/showcase-2026/

## ai-fraud
- verdict: **PASS** (editorial second pass; sitewide publication gate separate)
- score: **88/100**
- substantive Japanese body characters: 2046 → 2899
- blocking_findings: **[]** (draft gaps corrected before acceptance)
- warnings: 
  - Radar料金は日本向け公式表示の時点情報。Lite同梱やプラットフォーム向け料金は別条件。Featurespaceの動的ページは本文抽出が限定的で、精度の断定を避けた。
- generic_text: **[]** (new paragraphs refer to concrete named mechanisms and tests)
- unsupported_claims: **[]** (roadmap, pricing, marketing metrics and deployment are qualified)
- comparison_failures: **[]** (Stripe Radarの決済/アカウント不正とFeedzaiの金融犯罪横断・Featurespaceの行動分析は入力と対象業務が異なる。検知率単独で順位付けしない。)
- required_fixes: **[]** (applied: 日本向けRadarの8/11/14円/審査対象取引という料金例、追加認証と拒否の違い、正解ラベルの遅延・誤拒否を追加。)
- independently opened primary sources:
  - https://stripe.com/jp/radar
  - https://stripe.com/jp/radar/pricing
  - https://stripe.com/jp/payments/authentication
  - https://www.feedzai.com/riskops/
  - https://www.featurespace.com/solutions/automated-deep-behavioral-networks

## continuous-validation
- verdict: **PASS** (editorial second pass; sitewide publication gate separate)
- score: **89/100**
- substantive Japanese body characters: 2211 → 2954
- blocking_findings: **[]** (draft gaps corrected before acceptance)
- warnings: 
  - ベンダーの安全性・発見率は自社環境での保証ではない。重要システムへのテストには明示的な許可と停止条件が必要。
- generic_text: **[]** (new paragraphs refer to concrete named mechanisms and tests)
- unsupported_claims: **[]** (roadmap, pricing, marketing metrics and deployment are qualified)
- comparison_failures: **[]** (Pentera Core/Surface/Cloud、NodeZeroの内部/外部/クラウド/AD、XBOWのWebアプリ/APIを対象範囲で区分。手動診断との補完関係も維持。)
- required_fixes: **[]** (applied: 各製品が攻撃する資産の違いと、再現手順・修正後再テストの成果物、検証頻度を変更イベントに結び付ける設計を追記。)
- independently opened primary sources:
  - https://pentera.io/ai-powered-exposure-validation/
  - https://pentera.io/pentera-surface/
  - https://horizon3.ai/
  - https://xbow.com/

## ai-voice
- verdict: **PASS** (editorial second pass; sitewide publication gate separate)
- score: **90/100**
- substantive Japanese body characters: 2141 → 2971
- blocking_findings: **[]** (draft gaps corrected before acceptance)
- warnings: 
  - 日本語音声品質、電話番号転送、プラン、通話データ保持条件は実環境確認が必要。
- generic_text: **[]** (new paragraphs refer to concrete named mechanisms and tests)
- unsupported_claims: **[]** (roadmap, pricing, marketing metrics and deployment are qualified)
- comparison_failures: **[]** (ElevenCreativeの音声コンテンツ制作とElevenAgentsの実際の会話・ツール実行を分け、AI同士の転送と人間への電話転送も区別。)
- required_fixes: **[]** (applied: Agent Transferの履歴引継ぎとツール/プロンプト非継承、Transfer to Number、通話完了をCRM/受注システムで照合する評価法を追加。)
- independently opened primary sources:
  - https://elevenlabs.io/blog/voice-agent-capabilities
  - https://elevenlabs.io/docs/eleven-agents/customization/tools/system-tools/agent-transfer
  - https://elevenlabs.io/docs/eleven-agents/customization/tools/system-tools

## synthetic-media
- verdict: **PASS** (editorial second pass; sitewide publication gate separate)
- score: **89/100**
- substantive Japanese body characters: 2171 → 2912
- blocking_findings: **[]** (draft gaps corrected before acceptance)
- warnings: 
  - Adobeの3DワークフローにはUSDZとEnterprise条件が必要。商用権利、素材出所、生成物の正確性は契約と個別素材で確認。
- generic_text: **[]** (new paragraphs refer to concrete named mechanisms and tests)
- unsupported_claims: **[]** (roadmap, pricing, marketing metrics and deployment are qualified)
- comparison_failures: **[]** (単発の画像/動画生成と、承認済み素材を媒体ごとに派生展開する企業制作フローを区別。3D商品データの有無が導入条件。)
- required_fixes: **[]** (applied: USDZ入力、3D商品カット/360度動画/合成の三テンプレート、最大5秒の回転動画仕様、商品マスターと承認履歴の運用提案を追記。)
- independently opened primary sources:
  - https://business.adobe.com/products/firefly-business/firefly-creative-production/production-workflows.html
  - https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/use-3d-digital-twin-workflows.html

## Publication gate
- Latest content commit: `429f3ab0126d518f63d0c07ae996a314f477e60e`.
- Vercel READY, six live HTML/hero HTTP checks and fresh 47-page/94-view Playwright QA: **PENDING VERIFICATION**. Do not count the whole project as complete until these are confirmed.
- Existing 32 editorial PASS stories remain unchanged; with this batch, 38/47 have second-pass editorial PASS and 9 remain PENDING, subject to the canonical table update.
