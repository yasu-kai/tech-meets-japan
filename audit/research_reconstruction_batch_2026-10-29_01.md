# Editorial reconstruction batch 01 — 2026-10-29

## Scope and provenance
Rewrites were applied to `lib/researchStories.ts` for `ai-sales`, `coding-agents`, `ai-recruiting` only. Existing slugs, categories, and image binaries/mappings remain unchanged. Official primary pages were opened and checked on 2026-10-29. The following is a **separate editorial source-check pass**, not a claim of external/independent-agent sign-off or a manual responsive screenshot inspection.

## ai-sales
- Editorial review verdict: **PASS (source and narrative review only)**. Score 91/100.
- Published commit: `afebc5dbf20004872dabad82ac3a614e48fb1bcc`.
- Length: ~3,340 Japanese body characters; 9 sections; 8 official sources.
- Blocking findings: none in reviewed claims.
- Warnings: vendor outcomes and autonomous capabilities are self-reported; comparative performance not independently measured; exact Japanese market coverage and pricing require trial/quote. 11x pricing page contains potentially inconsistent monthly/yearly descriptions, so no numeric price is asserted in article.
- Generic text: common sales-process framing retained as editorial context, balanced by Clay Waterfalls/Claygent/Sequencer and 11x Alice/Artisan Ava implementation differences.
- Unsupported claims: none identified in the checked sample; hypothetical workflows clearly described as proposed evaluations.
- Comparison failures: none identified; products explicitly not treated as equivalent.
- Required fixes: independently repeat editorial review; visual mobile/desktop QA.
- Source evidence: https://university.clay.com/docs/building-a-data-waterfall ; https://university.clay.com/docs/claygent-builder ; https://www.clay.com/blog/clay-email-sequencer ; https://university.clay.com/docs/getting-started-with-sequencer ; https://docs.11x.ai/alice/overview ; https://www.artisan.co/blog/artisan-launches-ava-2-0-first-autonomous-ai-bdr .
- Live HTML: HTTP 200; 9 sections; 8 source links; original WebP hero HTTP 200 image/webp.

## coding-agents
- Editorial review verdict: **PASS (source and narrative review only)**. Score 90/100.
- Published commit: `5c2c7d3ae2a866c93d0373806c99afe8159925a0`; source-link correction `6c93a978bd31e19ea3a0ded1961605a271961d91`.
- Length: ~3,203 Japanese body characters; 9 sections; 6 official sources.
- Blocking findings: an obsolete Devin documentation URL initially returned 404; corrected to the current https://docs.devin.ai/onboard-devin/environment and verified on the live page.
- Warnings: Replit Agent 4 launch-time plan availability may have changed; no claim of universal availability or independently verified speedup. Source-specific security limitations are retained.
- Generic text: limited to the common software lifecycle; product-specific distinctions cover Replit Agent 4, Cursor Cloud Agents, Devin environment setup.
- Unsupported claims: none identified in the checked sample.
- Comparison failures: none identified; different target workflows explicitly explained.
- Required fixes: independently repeat editorial review; visual mobile/desktop QA.
- Source evidence: https://replit.com/blog/introducing-agent-4-built-for-creativity ; https://docs.replit.com/replit-workspace/workspace-features/version-control ; https://cursor.com/docs/cloud-agent ; https://cursor.com/docs/cloud-agent/security ; https://docs.devin.ai/onboard-devin/environment .
- Live HTML: HTTP 200; 9 sections; 6 source links; original WebP hero HTTP 200 image/webp; corrected Devin/Cursor source links live.

## ai-recruiting
- Editorial review verdict: **PASS (source and narrative review only)**. Score 89/100.
- Published commit: `2f539124e2c7ccc791468bf2cfee42423e53d007`.
- Length: ~3,094 Japanese body characters; 9 sections; 9 official sources.
- Blocking findings: none in reviewed claims.
- Warnings: hiring/assessment is high-stakes; vendor fairness and validity claims are not treated as universal guarantees. No numerical outcome claims imported from vendor marketing. Verify Japanese language, ATS integrations, candidate rights, and applicable regulations before deployment.
- Generic text: general applicant-experience scenario is a hypothetical lead-in; product sections include named mechanisms and workflows.
- Unsupported claims: none identified in checked sample; scenarios and evaluation recommendations are framed as analysis, not product promises.
- Comparison failures: none identified; Paradox screening/scheduling, Eightfold skills intelligence, Hirevue assessment scope differentiated without exclusive claims.
- Required fixes: independently repeat editorial review; visual mobile/desktop QA.
- Source evidence: https://www.paradox.ai/products/screening ; https://www.paradox.ai/products/conversational-scheduling ; https://eightfold.ai/products/ ; https://eightfold.ai/products/talent-acquisition/ ; https://www.hirevue.com/press-release/hirevue-launches-assessment-builder-to-scale-validated-skills-hiring-across-enterprises ; https://www.hirevue.com/press-release/hirevue-launches-ai-interviewer .
- Live HTML: HTTP 200; 9 sections; 9 source links; original hero image previously verified HTTP 200 image/webp.

## Link reachability audit
- 20 of 23 official links returned HTTP 200 from the remote read-only checker. Three Hirevue pages returned HTTP 403 from that checker, while the web retrieval source opened all three successfully and verified the relevant official content. This is an automated-client access limitation, **not** evidence that the articles are gone. Recheck links with a normal browser during visual QA.
- The article HTML for all three routes returned HTTP 200, each with nine sections and the correct existing hero WebP returned HTTP 200 and `image/webp` MIME. No screenshots or mobile browser rendering have been inspected.

## Open QA gate
**No article in this batch is yet marked final PASS.** An independent audit of each complete published article and desktop/mobile visual checks remain. Production READY and live HTML/hero checks are recorded separately. Do not notify the user until the entire 42-story backlog is final PASS and verified.
