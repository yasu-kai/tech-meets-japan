# Batch 15 — independent second-pass editorial review (2026-10-30)

## Scope and decision rule
Six previously PENDING stories reviewed independently against their own primary company/product/research sources and the full draft, not against prior editorial self-ratings. The final editorial verdict below is separate from the live-production and Playwright gates. This audit does not claim that all 47 stories are finished.

Reviewed against `audit/INDEPENDENT_AI_AUDITOR.md`: named-product specificity, input→output→human work, comparative fit, unsupported superlatives, pricing/Japan status, limitations, narrative and material depth. Existing slugs, categories and adopted images unchanged. First-pass 43-row status table intentionally unchanged.

Content edits committed in `lib/researchStories.ts` (commits `e4d2b240d5c0647554fe087fbeef21ad79cd6fb9`, `d9f6d3e2c07ec5a4fdfc4de1ac648abf0f9ffb34`, `ce2d66937dc15c72c5b6749948637bb84e773cc0`).

## wearable-memory
- verdict: **PASS** (editorial second pass; deployment/visual QA tracked separately)
- score: **90/100**
- blocking_findings: **none after fixes**
- warnings: マイク仕様は日本語実測精度ではない。企業向け保存地域・権限・契約は未確認と明記。
- generic_text: Earlier generic passages replaced by named, testable workflow distinctions; no material generic blocker remains.
- unsupported_claims: None retained as a verified fact; future applications and vendor claims are qualified. 
- comparison_failures: None blocking; non-equivalent technologies are compared by use case rather than numerical ranking.
- required_fixes: **completed** — 日本語公式比較を追加し、装着重量、録音距離、原音照合、録音後の確認・転記工程を具体化。
- input/output/replaces and specificity: Plaud NotePin/NotePin S: 2 MEMS, 20h/40d, 3m, NotePin S physical record/highlight, 300 min/month Starter. Explicit human review, validation and/or safety gate in article.
- first-party evidence:
  - https://support.plaud.ai/hc/ja/articles/53770668740761-Plaud-NotePin-%E3%81%A8-NotePin-S-%E3%81%AE%E9%81%95%E3%81%84%E3%81%AF
  - https://www.plaud.ai/products/plaud-notepin

## future-input
- verdict: **PASS** (editorial second pass; deployment/visual QA tracked separately)
- score: **90/100**
- blocking_findings: **none after fixes**
- warnings: 海外製品の国内発売時期は未定。研究用の8コマンドを自由文入力と混同しない。
- generic_text: Earlier generic passages replaced by named, testable workflow distinctions; no material generic blocker remains.
- unsupported_claims: None retained as a verified fact; future applications and vendor claims are qualified. 
- comparison_failures: None blocking; non-equivalent technologies are compared by use case rather than numerical ranking.
- required_fixes: **completed** — Meta Displayの国内未提供を2026年9月の日本語公式資料に接続し、手首操作と無音発話研究の入出力・成熟度を区別。
- input/output/replaces and specificity: Meta Neural Band wrist EMG; Display Japan not launched; SilentWear 14-channel neck EMG and eight commands. Explicit human review, validation and/or safety gate in article.
- first-party evidence:
  - https://about.fb.com/ja/news/2026/09/meta-connect-2026-everything-we-announced/
  - https://github.com/pulp-bio/SilentWear

## weird-gadgets
- verdict: **PASS** (editorial second pass; deployment/visual QA tracked separately)
- score: **89/100**
- blocking_findings: **none after fixes**
- warnings: 米ドル価格は公式掲載値で日本向け税込価格ではない。異種カテゴリの横並びランキングは避ける。
- generic_text: Earlier generic passages replaced by named, testable workflow distinctions; no material generic blocker remains.
- unsupported_claims: None retained as a verified fact; future applications and vendor claims are qualified. 
- comparison_failures: None blocking; non-equivalent technologies are compared by use case rather than numerical ranking.
- required_fixes: **completed** — 『失敗した製品』という根拠のない一般論を削除し、rabbitの第三者エージェント免責とOS3、追加料金・業務コストの差を具体化。Meta撮影LEDは一次情報で確認し出典追加。
- input/output/replaces and specificity: rabbit r1 OS3 $199/no subscription; Plaud recording; Meta glasses capture LED. Explicit human review, validation and/or safety gate in article.
- first-party evidence:
  - https://www.rabbit.tech/rabbit-r1
  - https://about.fb.com/ja/news/2026/07/metas-ai-glasses-your-questions-answered-jp/
  - https://www.plaud.ai/products/plaud-notepin

## silent-speech
- verdict: **PASS** (editorial second pass; deployment/visual QA tracked separately)
- score: **91/100**
- blocking_findings: **none after fixes**
- warnings: 研究論文のarXivは閲覧環境でアクセス制限があったため検索インデックス上の論文要旨を照合。論文本文の全実験条件は未検証。
- generic_text: Earlier generic passages replaced by named, testable workflow distinctions; no material generic blocker remains.
- unsupported_claims: None retained as a verified fact; future applications and vendor claims are qualified. 
- comparison_failures: None blocking; non-equivalent technologies are compared by use case rather than numerical ranking.
- required_fixes: **completed** — Engramの試作・未販売を明記し、SilentWearの8コマンドと30語分類研究の条件を追加。精度を自由文・日本語一般利用へ拡大解釈しない。
- input/output/replaces and specificity: Engram prototype / no commercial sales; Silenzio sEMG language aspiration; SilentWear 14-channel/8 commands; 2026 Japanese study 30 words 3 people 97.2±1.3%. Explicit human review, validation and/or safety gate in article.
- first-party evidence:
  - https://engramlabs.co/
  - https://silenzio.io/
  - https://github.com/pulp-bio/SilentWear
  - https://arxiv.org/abs/2608.27048

## browser-agents
- verdict: **PASS** (editorial second pass; deployment/visual QA tracked separately)
- score: **91/100**
- blocking_findings: **none after fixes**
- warnings: サイトごとの認証、CAPTCHA、権限・利用規約は個別に検証が必要。
- generic_text: Earlier generic passages replaced by named, testable workflow distinctions; no material generic blocker remains.
- unsupported_claims: None retained as a verified fact; future applications and vendor claims are qualified. 
- comparison_failures: None blocking; non-equivalent technologies are compared by use case rather than numerical ranking.
- required_fixes: **completed** — 一般提供日と出力形式を一次情報に合わせ、操作成功と業務完了を分離する評価基準を追加。
- input/output/replaces and specificity: Browserbase Agents GA June 30 2026, asynchronous structured outputs and session replay; Stagehand act/observe/extract. Explicit human review, validation and/or safety gate in article.
- first-party evidence:
  - https://www.browserbase.com/blog/introducing-browserbase-agents
  - https://www.browserbase.com/stagehand
  - https://www.anthropic.com/news/3-5-models-and-computer-use

## ultrasound-bci
- verdict: **PASS** (editorial second pass; deployment/visual QA tracked separately)
- score: **91/100**
- blocking_findings: **none after fixes**
- warnings: 研究参加者募集は臨床有効性や製品化の証明ではない。神経活動は血流を介した間接測定。
- generic_text: Earlier generic passages replaced by named, testable workflow distinctions; no material generic blocker remains.
- unsupported_claims: None retained as a verified fact; future applications and vendor claims are qualified. 
- comparison_failures: None blocking; non-equivalent technologies are compared by use case rather than numerical ranking.
- required_fixes: **completed** — 英語混じりの専門用語を自然な日本語へ修正し、研究参加者の3D頭部スキャンとプローブ固定、観察研究の範囲、Merge契約の意味を追加。
- input/output/replaces and specificity: Bridge functional ultrasound blood-flow proxy, skull imaging/decoding barriers, PEEK/Longeviti observational cohorts; Butterfly Merge 2026 licensing. Explicit human review, validation and/or safety gate in article.
- first-party evidence:
  - https://www.bridgeneurotech.com/approach
  - https://www.bridgeneurotech.com/study
  - https://www.bridgeneurotech.com/letter
  - https://www.butterflynetwork.com/press-releases/merge-labs-bci-partnership

## Remaining publication gate
The six editorial PASS verdicts are subject to latest GitHub main → Vercel READY → HTTP/hero/updated-body verification and a fresh 47-article/94-viewport Playwright run. No global completion claim before all 47 have editorial PASS and current production QA. Some articles remain below the typical 3,000–5,000 Japanese-character guide; the material is not padded with unsupported claims.
