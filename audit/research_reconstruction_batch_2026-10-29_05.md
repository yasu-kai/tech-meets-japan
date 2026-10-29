# Editorial reconstruction batch 05 — 2026-10-29

## Scope
Two device stories fully rewritten from first-party sources on 2026-10-29. Existing article routes and hero image associations preserved. The following is an editorial source-bound check, **not independent final PASS**.

## ai-glasses
- Body 2616 Japanese characters, 13 sections, 4 sources.
- Provisional verdict REVISE pending independent final audit and responsive QA.
- Blocking findings: independent audit and production browser visual QA not yet complete.
- Warnings: vendor-reported specifications and future roadmap are not independently tested. Current price and Japan availability are dated to specific announcements. Humane historical FAQ link is currently inaccessible via web retrieval (502), so shutdown is described as historical, not a newly verified live page.
- Generic text: concrete product specifications, operating models and evaluation workflows added.
- Unsupported claims: none intentionally added; hypothetical examples explicitly hypothetical.
- Comparison failures: audio glasses and display XR devices not treated as equivalent.
- Required fixes: verify live deployment, article source links, hero image mapping, independent audit and mobile/desktop screenshots.

## personal-ai-device
- Body 2742 Japanese characters, 14 sections, 5 sources.
- Provisional verdict REVISE pending independent final audit and responsive QA.
- Blocking findings: independent audit and production browser visual QA not yet complete.
- Warnings: vendor-reported specifications and future roadmap are not independently tested. Current price and Japan availability are dated to specific announcements. Humane historical FAQ link is currently inaccessible via web retrieval (502), so shutdown is described as historical, not a newly verified live page.
- Generic text: concrete product specifications, operating models and evaluation workflows added.
- Unsupported claims: none intentionally added; hypothetical examples explicitly hypothetical.
- Comparison failures: audio glasses and display XR devices not treated as equivalent.
- Required fixes: verify live deployment, article source links, hero image mapping, independent audit and mobile/desktop screenshots.

## Official sources
### ai-glasses
- Meta — Japan launch May 2026: https://about.fb.com/news/2026/05/ray-ban-meta-ai-glasses-launch-in-japan/
- Meta — Japan Meta Glasses August 2026: https://about.fb.com/ja/news/2026/08/meta-glasses-launch-in-japan/
- Google — Android XR eyewear: https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/
- Google — XREAL AURA Oct 28, 2026: https://blog.google/products-and-platforms/platforms/android/xreal-aura/

### personal-ai-device
- rabbit — r1 current product: https://www.rabbit.tech/rabbit-r1
- rabbit — OS3 general availability 2026-09-22: https://www.rabbit.tech/newsroom/rabbitos-3-launch
- rabbit — OS3 updates: https://www.rabbit.tech/updates
- rabbit — Support: https://www.rabbit.tech/support
- Humane — Historical FAQ (currently unavailable): https://support.humane.com/hc/en-us/articles/34243204841997-Ai-Pin-Consumers-FAQ

## Additional operational depth
- Follow-up added 4-5 original sections per article: ai-glasses 13 sections / 2616 Japanese characters; personal-ai-device 14 sections / 2742 Japanese characters.
- Focus: display tradeoffs, audio vs visual instruction, privacy and consent; AI device memory, execution permissions, cost, continuity and exit risk.
- Independent final audit and responsive QA remain open.

## Historical source link repair and live verification
- Original Humane consumer FAQ link is no longer reliably accessible (web retrieval 502; remote HTTP connection error). Removed it from live article sources; historical provenance retained in the audit.
- Replaced broken live source with HP's 2025-02-18 first-party acquisition release and Ars Technica's contemporaneous 2025-02-19 report citing the original Humane FAQ shutdown terms. Explicit secondary-source exception for a defunct primary page.
- Content follow-up commit `ca9d963f4cadbf072b7093e61d4621c92d8d46a8` reached Vercel Production deployment `dpl_JGBYk2Ao6kqvSeS8SXd261bLhKv4` READY.
- Both live routes HTTP 200 with new sections; correct original WebP heroes HTTP 200 image/webp. SHA256 prefixes: ai-glasses `0a85547caad79b90b8de`, personal-ai-device `4480425acd4949cc370e`.
- Eight of nine original official links HTTP 200 via remote client; the original Humane FAQ failed and was replaced.
- Final independent editorial audit and desktop/mobile screenshot QA remain open; **not final PASS**.
