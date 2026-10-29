# Research reconstruction — Independent source-bound editorial audit, batch 12

**Date:** 2026-10-30 (JST)  
**Scope:** `agentic-dev-security`, `procurement-agents`, `robotics-as-labor`, `embodied-ai-reception`, `bridge-ultrasound-bci`.  
**Review method:** Second-pass source verification against vendor / regulator primary material, critical review of the earlier first-pass drafts, explicit correction of unsupported generalization and awkward Japanese, and a fresh post-revision editorial check. This is a separate editorial pass from the earlier draft stage; it is not a claim that a separate AI model performed the audit.  
**Article implementation:** GitHub main commits `0135e9add2fb193bf6582c7d0a3a55c9d1453640`, `e5302bfcc49e08974fa2e35bf22d42a5fded4b9d`, `463620b0032389471522068930467c972d6a73b8`.  
**Publication check:** Vercel deployment `dpl_aYR3LV5d1mkgf8kkMYsZa2zWc5FL` READY for latest content commit. Independent remote HTTP client confirmed 5/5 article pages HTTP 200 with revised phrases, 5/5 original WebP images HTTP 200 with valid RIFF/WebP headers. **Post-change 94-view Playwright visual QA is a separate gate.**

## Verdict summary

| Article | Editorial verdict | Score / 100 | Body characters | Sections | Blocking findings |
| --- | --- | ---: | ---: | ---: | --- |
| agentic-dev-security | PASS | 89 | 3,188 | 12 | 0 |
| procurement-agents | PASS | 88 | 3,001 | 12 | 0 |
| robotics-as-labor | PASS | 87 | 2,843 | 12 | 0 |
| embodied-ai-reception | PASS | 86 | 2,548 | 12 | 0 |
| bridge-ultrasound-bci | PASS | 90 | 3,522 | 11 | 0 |

Editorial PASS means the reviewed text meets the source-bound editorial criteria as of this review, not that its latest layout has passed fresh desktop/mobile visual QA. A separate source accessibility audit identified 31/214 non-200 responses across the full site; anti-bot 403 is not a verified broken link. These five were checked against accessible first-party pages using independent web retrieval.

## agentic-dev-security
- **verdict:** PASS; **score:** 89.
- **blocking_findings:** none after correction.
- **warnings:** Product launch descriptions span multiple release stages. Evo ADS MCP Governance was announced GA on 2026-09-30; Evo Agentic AppSec's component agents announced 2026-10-15 include experimental preview, open preview and GA features. Availability for Japan, prices, support and data processing region remain unverified and are not asserted.
- **generic_text:** Generic “AI security must be independent” claims replaced with Snyk's three explicit control surfaces and specific MCP allowlisting limits.
- **unsupported_claims:** The nearly-10,000-developer-environment observation is now attributed to Snyk's sample, not generalized as a global statistic. No remaining material unsupported assertion identified in sampled claim-by-claim review.
- **comparison_failures:** GitHub's code/secret scanning and Snyk's MCP server allowlisting explicitly distinguished; not falsely presented as equivalent products.
- **required_fixes:** none editorial; fresh visual QA pending.
- **primary evidence:** https://snyk.io/news/snyk-launches-evo-agentic-development-security/ ; https://snyk.io/blog/evo-ads-govern-agent-behavior-ga/ ; https://snyk.io/news/snyk-launches-evo-agentic-appsec/ ; https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/use-ghas-with-ai-coding-agents/scan-for-secrets-with-github-mcp-server

## procurement-agents
- **verdict:** PASS; **score:** 88.
- **blocking_findings:** none after correction.
- **warnings:** OpenAI intake validation timing is Zip's own published customer case, not independently measured across all customers. Zip's June 2026 announcement described some Superagent availability prospectively; current contract-specific access is not assumed.
- **generic_text:** Replaced English-heavy procurement generalities with specific intake, contract, accounts-payable, approval and configuration inputs/outputs.
- **unsupported_claims:** The vendor-reported timing is explicitly attributed. No unqualified claim of fully autonomous supplier award or negotiation.
- **comparison_failures:** Added first-party SAP Ariba Sourcing Assistant and Procurement Contract Assistant comparison; differentiates sourcing/bid analysis from intake/orchestration and acknowledges overlap.
- **required_fixes:** none editorial; fresh visual QA pending.
- **primary evidence:** https://zip.com/blog/introducing-zip-ai-superagents-mcp-ai-spend-automation ; https://www.sap.com/sea/use-cases/joule-assistant/sourcing-assistant ; https://www.sap.com/bulgaria/use-cases/joule-assistant/contract-ai ; https://lp.ziphq.com/rs/195-QFD-187/images/eBook_90_Day-ROI-Zip.pdf?version=0

## robotics-as-labor
- **verdict:** PASS; **score:** 87.
- **blocking_findings:** none after correction.
- **warnings:** Formic's historic productive-hour RaaS model and 2026 fixed-monthly Full Service Automation offers are not interchangeable; contract-dependent billing and guarantees are stated. Customer figures are vendor-published cases, not general benchmarks. Japanese commercial availability is not asserted.
- **generic_text:** Replaced “robot workforce” abstractions with a palletizing production line, operational responsibilities, stoppage and maintenance economics.
- **unsupported_claims:** Corrected a prior implication that all Formic contracts charge only productive hours. The two different public offers are described with their respective sources.
- **comparison_failures:** Purchase, lease and service contracts distinguished by ownership, maintenance, uptime risk and total contract cost.
- **required_fixes:** none editorial; fresh visual QA pending.
- **primary evidence:** https://land.formic.co/formic-robotics-as-a-service-affordable-automation-for-growth ; https://formic.co/lp/accounting-for-robots ; https://formic.co/resources/customer-stories/cameron-s-coffee-hits-automation-easy-button-scaling-from-0-to-5-systems-in-12-mo ; https://formic.co/resources/customer-stories/taffy-town-scaled-with-formic-full-service-automation

## embodied-ai-reception
- **verdict:** PASS; **score:** 86.
- **blocking_findings:** none after correction.
- **warnings:** “Hologram” is Proto's marketing term for display-based presence; not evidence of free-floating images. Security certifications on a vendor page do not automatically establish compliance for a Japanese deployment. Japanese language performance, local support, pricing and third-party integrations require a pilot.
- **generic_text:** Replaced abstract “physical AI” rhetoric with Luma's 86-inch, approximately 186-kg device, ProtoOS support for existing displays, and concrete reception handoff scenarios.
- **unsupported_claims:** No assertion that Proto automatically integrates with a given Japanese access-control or reservation system.
- **comparison_failures:** Distinguishes tablet kiosks, AI avatars on existing displays, life-sized Proto Luma and remote human telepresence; different capabilities are not conflated.
- **required_fixes:** none editorial; fresh visual QA pending.
- **primary evidence:** https://protohologram.com/enterprise-solutions/ ; https://protohologram.com/proto-os/ ; https://protohologram.com/the-luma ; https://protohologram.com/ai-avatars

## bridge-ultrasound-bci
- **verdict:** PASS; **score:** 90.
- **blocking_findings:** none after correction.
- **warnings:** Company funding of $13.5m is attributed as reported rather than asserted from a first-party funding release. Functional ultrasound measures hemodynamic signals indirectly and has a decoding/latency challenge. The 9,000-element Butterfly technology description concerns its existing ultrasound platform and does not establish the exact specification of Bridge's research hardware. No commercialization, Japanese launch or clinical efficacy is claimed.
- **generic_text:** Rebuilt the English-heavy report into a coherent Japanese feature centered on what is measured, why skull attenuation matters, the actual observational study, and meaningful milestones.
- **unsupported_claims:** Removed implied proof of intent decoding; official Bridge material documents a research study recruiting participants, not a shipping thought-reading device.
- **comparison_failures:** Neuralink's 1,024-electrode implant, Synchron's investigational endovascular Stentrode, Neurable's 12-sensor consumer EEG headphones and Bridge's proposed ultrasound BCI distinguished by signal type, invasiveness and maturity.
- **required_fixes:** none editorial; fresh visual QA pending.
- **primary evidence:** https://www.bridgeneurotech.com/approach ; https://www.bridgeneurotech.com/study ; https://english.butterflynetwork.com/press-releases/bridge-neurotech-partnership ; https://www.butterflynetwork.com/press-releases/merge-labs-bci-partnership ; https://www.butterflynetwork.com/technology ; https://neuralink.com/updates/prime-study-progress-update/ ; https://synchron.com/technology ; https://www.neurable.com/products/neurable-one

## Publication and visual follow-up
- The 5 revised pages and unchanged original hero binaries passed live HTTP/content checks on 2026-10-30.
- The existing Playwright workflow run `40907522742` was requested for re-run after these content updates; do not mark post-change desktop/mobile QA PASS until its latest attempt finishes and results are inspected.
- Keep 47-story final completion gate open. Editorial PASS is **5/47** after this batch; other 42 stories remain unaudited in the independent second pass. Do not notify the owner until all 47 satisfy editorial and visual gates.

## Final post-change QA and headline corrections
- Corrected two overstatements discovered in the headline review: `robotics-as-labor` is now **ロボットを買わずに使う。Formicが変える工場の自動化。** rather than claiming robot purchasing has ended; `embodied-ai-reception` is now **受付に人の姿をしたAI。Protoは接客をどう変えるか。** rather than implying Proto is not a screen-based display. The article titles and Research listing titles were updated together in GitHub commits `300c01f012d3f912afb633522bf07a8d0a3d26ce` and `c74fb7fd4384eace2abd39d066a90e96e8a374b3`.
- Latest title-corrected Vercel Production deployment `dpl_3g9tCBeMsuG6kEc99xfYV9x659Nh` reached READY. Both revised article pages returned HTTP 200 and displayed their corrected titles; original headlines were absent.
- GitHub Actions workflow `40907522742`, latest rerun job `123619472614`, **PASS: 94 desktop/mobile views, 0 automated failures** after all nine batch-12/13 article changes and title corrections. Screenshot artifact ID `12918667139`. This verifies automated layout, hero and related-card checks; it is not a claim of fresh human inspection of every screenshot.
