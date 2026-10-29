# Research reconstruction — batch 10 editorial evidence (2026-10-30)

## Scope and methodology
This batch covers the **11 remaining original tracker rows**. All 11 now have reconstructed source-grounded content in `lib/researchStories.ts`; `bridge-ultrasound-bci` was already long-form and received a targeted evidence/limitations update. No existing slug, category, image binary or article-to-image mapping was modified. Source facts were checked against vendor/lab primary sources on 2026-10-30. This is an **editorial source-check**, not an independently commissioned final audit and not a pixel-level visual QA.

## Per-article evidence
| Article | Sections | Body characters | Primary sources | Provisional verdict |
|---|---:|---:|---:|---|
| wearable-memory | 11 | 2543 | 4 | REVISE — final audit pending |
| future-input | 12 | 2376 | 6 | REVISE — final audit pending |
| weird-gadgets | 12 | 2267 | 5 | REVISE — final audit pending |
| silent-speech | 12 | 2405 | 6 | REVISE — final audit pending |
| browser-agents | 12 | 2560 | 6 | REVISE — final audit pending |
| agentic-dev-security | 9 | 2556 | 5 | REVISE — final audit pending |
| procurement-agents | 9 | 2179 | 5 | REVISE — final audit pending |
| robotics-as-labor | 9 | 2105 | 5 | REVISE — final audit pending |
| embodied-ai-reception | 9 | 2050 | 4 | REVISE — final audit pending |
| bridge-ultrasound-bci | 11 | 4676 | 13 | REVISE — final audit pending |
| ultrasound-bci | 10 | 3009 | 9 | REVISE — final audit pending |

### Independent audit fields — preliminary, NOT independent sign-off
- **verdict:** REVISE for all 11; none are final PASS.
- **score:** Not assigned. A numerical score from the same writing pass would be self-assessment, not the required independent audit.
- **blocking_findings:** No independent claim-by-claim review or desktop/mobile screenshot QA has been completed. Several articles remain shorter than the 3,000–5,000-character typical depth target; do not pad merely to hit a number.
- **warnings:** See per-story warnings below.
- **generic_text:** Introductory category framing is retained where it explains the workflow; independent reviewer must flag any replaceable vendor descriptions.
- **unsupported_claims:** No knowingly unsupported numeric outcome imported; commercial claims remain vendor-attributed. Independent verification still required.
- **comparison_failures:** Explicitly distinguish product categories and research/commercial readiness; reviewer must check all full texts for residual false equivalence.
- **required_fixes:** Source-bound independent audit of each full published article, editorial tightening of short/generic sections, desktop/mobile visual inspection, final link QA and verified production build at final commit.

#### wearable-memory
- NotePin S comparison support page returned HTTP 403 to remote checker but was available through public web retrieval; confirm in a normal browser. Check corporate data retention and consent workflow.
- Source count: 4. Content: 2543 Japanese body characters in 11 sections. URL and original hero WebP preserved.

#### future-input
- Meta Ray-Ban Display/Neural Band Japan availability is not the same as other Meta Glasses; keep that distinction current. Claims about silent speech are research-stage.
- Source count: 6. Content: 2376 Japanese body characters in 12 sections. URL and original hero WebP preserved.

#### weird-gadgets
- USD 199 price is a dated vendor listing; JPY conversion uses an explicitly illustrative FX assumption. rabbit OS3 claims are vendor-reported.
- Source count: 5. Content: 2267 Japanese body characters in 12 sections. URL and original hero WebP preserved.

#### silent-speech
- Research claims concern restricted vocabularies and few participants, not continuous general-purpose Japanese speech. ETH publication page returned HTTP 500 to remote checker; replaced with ETH lab publications page.
- Source count: 6. Content: 2405 Japanese body characters in 12 sections. URL and original hero WebP preserved.

#### browser-agents
- Agent success and reliability are vendor claims; must test prompt injection, credential scoping and irreversibility of actions in a sandbox.
- Source count: 6. Content: 2560 Japanese body characters in 12 sections. URL and original hero WebP preserved.

#### agentic-dev-security
- Snyk MCP Governance is not comprehensive shell/data-exfiltration protection; vendor explicitly acknowledges limitations. Avoid universal detection claims.
- Source count: 5. Content: 2556 Japanese body characters in 9 sections. URL and original hero WebP preserved.

#### procurement-agents
- Zip's 50+ agents and Superagents are vendor announcements; some availability and OpenAI operational outcomes are vendor-reported. Confirm Japan-specific procurement integrations.
- Source count: 5. Content: 2179 Japanese body characters in 9 sections. URL and original hero WebP preserved.

#### robotics-as-labor
- Formic Cameron's Coffee case is vendor/customer-reported; contract economics and Japan delivery remain unverified.
- Source count: 5. Content: 2105 Japanese body characters in 9 sections. URL and original hero WebP preserved.

#### embodied-ai-reception
- Proto's spatial displays must not be described as free-space holography; AI avatar and human telepresence are different products.
- Source count: 4. Content: 2050 Japanese body characters in 9 sections. URL and original hero WebP preserved.

#### bridge-ultrasound-bci
- Funding figure uses contemporary reporting; non-invasive BCI is not yet demonstrated as a consumer typing device. Avoid overstating brain-decoding readiness.
- Source count: 13. Content: 4676 Japanese body characters in 11 sections. URL and original hero WebP preserved.

#### ultrasound-bci
- Potential duplication with the deeper Bridge profile; this article focuses on early-stage milestone evaluation. Official IR link intermittently returned HTTP 403 and was replaced with an accessible Butterfly first-party announcement.
- Source count: 9. Content: 3009 Japanese body characters in 10 sections. URL and original hero WebP preserved.


## Official primary-source checks
- Plaud NotePin and NotePin S: https://www.plaud.ai/products/plaud-notepin ; https://www.plaud.ai/products/plaud-notepin-s ; https://support.plaud.ai/hc/en-us/articles/53770668740761-What-is-the-difference-between-Plaud-NotePin-and-NotePin-S
- Meta Japan / Neural Band: https://about.fb.com/ja/news/2025/09/meta-ray-ban-display-ai-glasses-connect-2025/ ; https://about.fb.com/ja/news/2026/09/meta-connect-2026-everything-we-announced/
- rabbit r1: https://www.rabbit.tech/rabbit-r1
- Engram, Silenzio, ETH SilentWear: https://engramlabs.co/ ; https://silenzio.io/ ; https://github.com/pulp-bio/SilentWear ; https://pulp.ethz.ch/publications.html
- Browserbase: https://www.browserbase.com/blog/introducing-browserbase-agents ; https://www.browserbase.com/stagehand ; https://www.browserbase.com/blog/internal-agents
- Snyk: https://snyk.io/jp/news/snyk-launches-evo-agentic-development-security/ ; https://snyk.io/blog/evo-ads-govern-agent-behavior-ga/ ; https://snyk.io/news/snyk-launches-evo-agentic-appsec/
- Zip: https://ziphq.com/guides/zip-in-2025 ; https://zip.com/blog/introducing-zip-ai-superagents-mcp-ai-spend-automation
- Formic: https://land.formic.co/camerons-coffee ; https://formic.co/resources/customer-stories
- Proto: https://protohologram.com/enterprise-solutions/
- Bridge and Butterfly: https://www.bridgeneurotech.com/approach ; https://www.bridgeneurotech.com/study ; https://english.butterflynetwork.com/press-releases/bridge-neurotech-partnership

## Production and link verification
- Remote HTTPS client returned **HTTP 200 for all 11 article routes** on `https://tech-meets-japan.vercel.app/research/{category}/{slug}`, and all 11 original WebP heroes returned HTTP 200, `image/webp`, RIFF magic bytes. Article slug appears in each HTML response.
- Official source links were checked concurrently: initial 3 non-200 responses included Plaud support (403), ETH research collection (500), Butterfly IR (403). ETH and Butterfly citations were replaced with accessible official first-party alternatives; Plaud support was accessible through web retrieval and may enforce automated-client restrictions.
- **Not yet verified:** latest final content commit deployment READY, browser-rendered desktop/mobile screenshots, layout/cropping, independent final editorial PASS.

## Inventory reconciliation
The original tracker contains **43** story rows, not 42. There are additionally four separately published newer AI governance/privacy/collaboration/security stories outside this original tracker. The backlog must not be closed by silently omitting the 43rd row. Current original-tracker state: **43/43 source-grounded rewrites, 0/43 final independent PASS**. Editorial and visual QA remain the gating work.
