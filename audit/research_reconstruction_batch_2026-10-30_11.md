# Research reconstruction — batch 11 / full-site QA and editorial corrections (2026-10-30)

## Editorial corrections
- Expanded three initially thin newly published articles: `data-privacy` (1,837 Japanese body characters, 9 sections), `human-ai-collaboration` (1,943 characters, 11 sections), `future-of-security` (1,964 characters, 11 sections). All use first-party Google Cloud, Microsoft Presidio, ServiceNow and NIST material. The original `ai-governance` pilot remains about 2,253 body characters and also needs independent review.
- Corrected `identity-agents` to include a third primary Okta source, the 2026-03-16 secure-agentic-enterprise announcement. The previous source count was two.
- Fixed `scripts/editorial-audit.mjs` to detect both TypeScript object literals and JSON-formatted article objects. Previously it silently skipped 11 rewritten records. It now requires 47 stories, >=1,800 body characters, >=6 sections and >=3 sources. The deterministic audit passed for **47/47 stories** on the latest source tree (verified by independent remote Node execution and GitHub Actions).

## All-article HTTP and source link checks
- All **47/47 Research article pages** returned HTTP 200 and matched their slugs; all **47/47 original hero WebP files** returned HTTP 200, image/webp, RIFF magic. Source: independent HTTPS client on authorized remote QA host, 2026-10-30.
- Checked **214 distinct primary-source URLs** referenced by 47 articles: **183 HTTP 200**, **25 HTTP 403** (often anti-bot access restrictions), **6 network errors/timeouts**, **zero HTTP 404 and zero HTTP 500** in this batch. These results do **not** prove all 214 links work for ordinary browsers; all 31 non-200/unknown sources remain subject to normal-browser verification. Examples of 403 include HireVue, Adobe help, project44, OpenAI, Plaud support. Network errors include some Adobe pages, ServiceNow and ETH lab pages.

## Visual QA infrastructure and findings
- Added GitHub Actions Playwright QA workflow at `.github/workflows/research-visual-qa.yml` and `scripts/research-visual-qa.mjs`, using Ubuntu 24.04 and Chromium. It captures **94 full-page screenshots** (47 desktop 1440px + 47 mobile 390px), tests HTTP, hero image decode, heading visibility, horizontal overflow and heading/hero overlap.
- Initial Playwright run on Ubuntu 26.04 failed to install browser; pinning Ubuntu 24.04 fixed it.
- GitHub Actions run `40906256588` **PASS**: 94/94 views, zero automated layout/hero failures; 94 screenshots saved as artifact. Contact-sheet review found hero sections consistently legible on desktop and mobile.
- Manual review of lower-page screenshots identified a real editorial UX defect: some related-article cards showed **the same generic laptop placeholder** instead of each article's already adopted image. Fixed `app/research/[category]/[slug]/page.tsx` to use each article's real generated WebP and added curated, topical related reading for 15 relevant stories. No image binaries, original article URLs or original hero mappings were changed. Verified correct unique related images for wearable-memory, Bridge BCI and AI governance in rendered production HTML and full-page mobile screenshots.
- GitHub Actions run `40907247781` ran the stronger related-image QA and flagged **4 false failures**: the materials-energy category has only two articles, so each article has just one related card, whereas the new test incorrectly required three. All other **90/94** views passed. Corrected the assertion to require all existing related images loaded and unique, regardless of count. A new run was triggered (`40907522742`); its final result must be checked before recording a full QA PASS.

## Independent editorial review — status
- **verdict:** REVISE / FINAL AUDIT PENDING, not PASS.
- **score:** not independently scored; do not fabricate a score.
- **blocking_findings:** final second-pass claim-by-claim source review, natural Japanese review and per-article independent PASS are not complete. Several articles remain 1,800–2,500 characters, below the normal 3,000–5,000-character depth target; expand only with new verified substance.
- **warnings:** high English-token density in `bridge-ultrasound-bci`, `agentic-dev-security`, `embodied-ai-reception`, `procurement-agents`, `robotics-as-labor`. Review unnecessary English and translationese without changing product proper nouns. `bridge-ultrasound-bci` and `ultrasound-bci` have overlapping subject matter; differentiate their editorial purposes.
- **generic_text:** independent reviewer should examine product-name substitution test and repetitive source-card context descriptions.
- **unsupported_claims:** vendor outcomes, future availability, Japanese support, pricing and legal compliance remain subject to individual official-source verification.
- **comparison_failures:** verify that dissimilar platforms and research-stage vs commercial products are not ranked as direct substitutes.
- **required_fixes:** complete independent audit, resolve material claim errors, add justified depth, inspect final screenshot artifact and confirm latest production deployment.

## Inventory and completion rule
The original reconstruction tracker has **43** stories; four newly published AI reports bring the live Research inventory to **47**. Rewritten text exists for all 47, deterministic audit passes, and all article routes and hero assets are live. This is **not equivalent to 47 final editorial PASS verdicts**. Do not send a completion notification or disable the task until every article has independent editorial PASS and visual/publication QA sign-off.
