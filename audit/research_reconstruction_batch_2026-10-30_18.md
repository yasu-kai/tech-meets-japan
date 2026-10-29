# Batch 18 — 2026-10-30 — five independent second-pass editorial audits

## Scope and methodology
Source-bound independent editorial review of five previously PENDING articles. Reopened current first-party vendor documents, compared material claims against their stated scope, distinguished specification from measured outcomes and release from Japan availability, and amended product-specific articles. Legacy 43-row rewrite tracker is intentionally unchanged. Existing slug, category, hero/image associations and image binaries unchanged. The five editorial PASS verdicts below are **not** a claim that global 47-article publication QA is complete.

## warehouse-robotics
- verdict: **PASS**
- score: **90/100**
- substantive Japanese body characters: 2622 → 3371
- blocking_findings: **[]** (material draft weaknesses corrected before PASS)
- warnings:
  - Exotec/Locus/Symboticの商用導入条件・価格・国内保守は個別見積もりが必要。
  - Locusの90%手作業削減は公式マーケティング値で独立比較ではない。
- generic_text: **[]** (new paragraphs are tied to named vendor mechanism, specification or measurable workflow)
- unsupported_claims: **[]** (unverified performance, price, rollout and legal claims explicitly qualified)
- comparison_failures: **[]** (comparison fixed: Exotec=Goods-to-Personのビン搬送、Locus Array=通路内ロボット把持、Symbotic=ケース物流。対象荷姿・工程が異なり単純ランキング不可。)
- required_fixes: **[]** (applied: ビン搬送と出荷の違い、SKUの自律把持率、WMS連携/在庫責任を追記。)
- corrections/evidence:
  - Exotec Skypodの最大600ビン/時はワークステーション単位のメーカー仕様であり、注文行数や草加FSDC実績と同一視できない。区別を明記。
  - Locus Arrayの「100% SKU」はOrigin/Vectorを含む統合システムのベンダー説明であり、Array単体の万能把持性能ではない。対象SKUの実測評価へ置換。
- official first-party sources independently opened:
  - https://www.exotec.com/system/automated-warehouse-robots/
  - https://www.exotec.com/news/mitsubishi-shokuhin-soka-fsdc/
  - https://locusrobotics.com/news/locus-robotics-locus-array-launch/
  - https://www.symbotic.com/solutions/

## ai-glasses
- verdict: **PASS**
- score: **91/100**
- substantive Japanese body characters: 2616 → 3339
- blocking_findings: **[]** (material draft weaknesses corrected before PASS)
- warnings:
  - 端末の販売地域とソフトウェア機能の利用可能地域は一致しない。
  - 録画LEDがあっても第三者の同意や職場規程の代替にはならない。
- generic_text: **[]** (new paragraphs are tied to named vendor mechanism, specification or measurable workflow)
- unsupported_claims: **[]** (unverified performance, price, rollout and legal claims explicitly qualified)
- comparison_failures: **[]** (comparison fixed: Meta音声・撮影中心の眼鏡とXREALの外部演算ユニットを使う表示型は異なる用途。世代差・日本提供条件を分ける。)
- required_fixes: **[]** (applied: Gen3、Audioの2027年日本予定、Muse地域制限を補足。)
- corrections/evidence:
  - 5月のRay-Ban Meta Gen2の価格・電池情報のみでは9月発売のGen3を見落とす。Gen3税込78,980円・最大9時間を追記。
  - Meta Museは2026年9月時点で米国のみ。国内で全機能が使えるとの誤認を防ぐ。
  - XREAL AURAの日本注文開始は11月2日予定で、10月30日時点では国内注文前。
- official first-party sources independently opened:
  - https://about.fb.com/news/2026/05/ray-ban-meta-ai-glasses-launch-in-japan/
  - https://about.fb.com/ja/news/2026/09/ai-glasses-lineup-added/
  - https://blog.google/products-and-platforms/platforms/android/xreal-aura/

## personal-ai-device
- verdict: **PASS**
- score: **89/100**
- substantive Japanese body characters: 2742 → 3194
- blocking_findings: **[]** (material draft weaknesses corrected before PASS)
- warnings:
  - 日本向け送料・税・サポート・モデル課金は未確定。
  - Humaneのサービス終了はHP買収リリースと当時の報道で裏付け、元FAQが常時閲覧できるとは限らない。
- generic_text: **[]** (new paragraphs are tied to named vendor mechanism, specification or measurable workflow)
- unsupported_claims: **[]** (unverified performance, price, rollout and legal claims explicitly qualified)
- comparison_failures: **[]** (comparison fixed: 専用r1端末 vs スマホAIアプリ vs PCエージェント。呼び出し・成功・手戻り・サービス継続性の総時間で比較。)
- required_fixes: **[]** (applied: 無料の範囲、確認付き操作、データ処理経路を追記。)
- corrections/evidence:
  - rabbit r1は公式サイト199米ドル・本体サブスク不要。外部モデル/サービス費用が無条件に無料という意味ではない。
  - OS3はクラウド運用、最大5端末接続、ユーザー指示による操作と機密操作時の確認を公式発表で確認。
  - PCファイルのローカル保持と、処理内容がモデル提供者に渡らないことは同義ではない。
- official first-party sources independently opened:
  - https://www.rabbit.tech/rabbit-r1
  - https://www.rabbit.tech/newsroom/rabbitos-3-launch
  - https://www.hp.com/us-en/newsroom/press-releases/2025/hp-accelerates-ai-software-investments-to-transform-the-future-of-work.html

## ai-legal
- verdict: **PASS**
- score: **91/100**
- substantive Japanese body characters: 2301 → 3127
- blocking_findings: **[]** (material draft weaknesses corrected before PASS)
- warnings:
  - 弁護士の最終責任は残る。契約の機密性・地域・料金は個別確認。
  - 大量文書の処理上限は版・契約条件により変わり得る。
- generic_text: **[]** (new paragraphs are tied to named vendor mechanism, specification or measurable workflow)
- unsupported_claims: **[]** (unverified performance, price, rollout and legal claims explicitly qualified)
- comparison_failures: **[]** (comparison fixed: Harvey Vaultの案件横断抽出/協業とCoCounselの法律情報源連携は守備範囲が重なり、同一条件の契約群と法域で比較する必要がある。)
- required_fixes: **[]** (applied: 数値上限と精度を分離、日本法コンテンツの違い、引用元追跡可能なレビュー表の作り方を追加。)
- corrections/evidence:
  - Harvey Vaultは最大10万文書を扱う説明だが完全正確なレビューの証明ではない。
  - CoCounsel LegalのTabular Analysisは最大1万文書・100質問の製品仕様。件数の大小を性能順位へ変換しない。
  - 日本向けCoCounselはWestlaw Japan連携を案内。英語圏のWestlaw/Practical Lawと日本法の収録範囲は別に確認。
- official first-party sources independently opened:
  - https://www.harvey.ai/platform/vault
  - https://www.harvey.ai/platform/legal-work-orchestration
  - https://legal.thomsonreuters.com/en/products/cocounsel-legal
  - https://www.thomsonreuters.co.jp/ja/products/cocounsel.html

## ai-customer-service
- verdict: **PASS**
- score: **90/100**
- substantive Japanese body characters: 2369 → 3284
- blocking_findings: **[]** (material draft weaknesses corrected before PASS)
- warnings:
  - 日本語音声・提供プラン・データ保持・国内サポートは個別確認。
  - 解決率はAI自己申告ではなく注文/ケースの業務状態と照合する必要がある。
- generic_text: **[]** (new paragraphs are tied to named vendor mechanism, specification or measurable workflow)
- unsupported_claims: **[]** (unverified performance, price, rollout and legal claims explicitly qualified)
- comparison_failures: **[]** (comparison fixed: Sierra=会話設計とツール接続、ServiceNow=ケース/業務フロー、Salesforce=CRM/Action。既存基盤と返品業務の同一テストで判断。)
- required_fixes: **[]** (applied: トレース、既定権限、Topicとアクセス制御の違い、失敗時の人間引継ぎを追加。)
- corrections/evidence:
  - Sierra Agent StudioのJourneys、Agent Traces、Knowledge gapsは公式ページで確認。失敗の自動是正まで保証するものではない。
  - ServiceNow CSM公式文書ではワークフロー/エージェントの既定レコードは読み取り専用。自律実行には複製と有効化、権限制御が必要。
  - SalesforceのTopic/Actionは仕事の範囲と操作を定義するが、データアクセスの実権限とは分けて設計する。
- official first-party sources independently opened:
  - https://sierra.ai/product/agent-studio
  - https://www.servicenow.com/docs/r/ja-JP/customer-service-management/now-assist-for-csm/csm-ai-agents-use-cases.html
  - https://admin.salesforce.com/blog/2025/best-practices-for-building-secure-agentforce-service-agents

## Deployment and visual QA gate
- Content commit: `7682788205e02370ddc18f7c5c1b0430fb561e47`.
- Vercel production READY and independent article/hero HTTP verification: **pending at audit-file creation**; record results in canonical tracker after observed.
- Fresh post-content Playwright 94-view QA: **pending at audit-file creation**; no claim of success until run evidence is checked.
- No completion notification: other PENDING articles remain.
