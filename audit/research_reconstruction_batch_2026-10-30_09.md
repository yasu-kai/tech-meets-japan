# Editorial reconstruction batch 09 — 2026-10-30

Rewritten: humanoid, autonomous-driving, physical-ai-platforms, drones. Product-specific analysis of real robotics mechanisms, operational workflows, limitations, comparisons and Japanese adoption conditions. Original article URLs, category assignments and all WebP image binaries/mappings unchanged.

## Official primary source review
- humanoid: Figure Helix 02 (2026-01-27) and Helix 2.5 (2026-09-17); differentiates whole-body demonstration, zero-shot trials in 30 homes, and actual commercial reliability. Vendor-reported results are not independent tests.
- autonomous-driving: Waymo 6th-generation Driver (2026-02-12), World Model, Tokyo 2027 plan (2026-09-14). Commercial Tokyo launch remains conditional on permits and validation; not described as launched.
- physical-ai-platforms: NVIDIA Cosmos 3 (2026-05-31), Japan Physical AI (2026-07-15), NVIDIA ROSA research (2026-07-01). Corrects the earlier "Edge coming soon" to July Edge announcement. ROSA benchmark is research evidence, not general deployment guarantee.
- drones: DJI Enterprise inspection, Dock, O4 Ground Station (2026-06-16). Distinguishes autonomous flight from autonomous inspection, avoids universal BVLOS approval claims.

## Review status
- humanoid: 9 sections, 1599 Japanese body characters, 3 official source links. Editorial verdict **REVISE** pending independent claim-by-claim audit, live HTTP/link checks, and desktop/mobile screenshot QA.
- autonomous-driving: 9 sections, 1483 Japanese body characters, 3 official source links. Editorial verdict **REVISE** pending independent claim-by-claim audit, live HTTP/link checks, and desktop/mobile screenshot QA.
- physical-ai-platforms: 9 sections, 1520 Japanese body characters, 4 official source links. Editorial verdict **REVISE** pending independent claim-by-claim audit, live HTTP/link checks, and desktop/mobile screenshot QA.
- drones: 9 sections, 1359 Japanese body characters, 3 official source links. Editorial verdict **REVISE** pending independent claim-by-claim audit, live HTTP/link checks, and desktop/mobile screenshot QA.

## Outstanding
- Independent editorial audit against audit/INDEPENDENT_AI_AUDITOR.md: not complete.
- Production deployment and responsive QA: not yet verified at time of commit.
- Existing URLs and images must remain unchanged.

## Source-grounded depth expansion
- humanoid: 10 sections; 2543 Japanese body characters. Added concrete input/output, failure and implementation tests.
- autonomous-driving: 10 sections; 2385 Japanese body characters. Added concrete input/output, failure and implementation tests.
- physical-ai-platforms: 10 sections; 2409 Japanese body characters. Added concrete input/output, failure and implementation tests.
- drones: 10 sections; 2232 Japanese body characters. Added concrete input/output, failure and implementation tests.
Final independent audit and desktop/mobile visual QA still outstanding.

## Critical Japanese availability correction — DJI O4 Ground Station
- DJI's current first-party O4 product/FAQ explicitly says Relay Mode is unavailable in Japan due to 5GHz support restrictions. Added this blocking limitation to the Japanese adoption section. The earlier DJI media-center URL returned HTTP 404 from a remote client despite being indexed by web search; replaced with live first-party product page and FAQ.
- Corrected drones article: 2391 body characters; 4 official source links.
- All nine batch 08/09 article routes and original WebP assets returned HTTP 200 in remote HTTP checks; the latest production content commit 768cb27cea1f6da00b978de88de23aa532ba1e85 reached Vercel READY. Screenshot QA and independent final audit remain open.


## Final HTTP/source QA for this run — 2026-10-30
- Vercel production deployment `dpl_FRweVuGAztfdtaBiMYHSdoPmLao1` at commit `e6a30e2b96ab4c9da21fa0e609a5bfafd20a974f` is **READY**.
- All nine batch 08/09 article URLs returned HTTP **200**, each rendered 9–10 article sections (plus shared headings), and all nine original WebP hero URLs returned HTTP **200**, `image/webp`, RIFF/WebP magic. The revised Japanese O4 Relay Mode restriction appears in the live drones article.
- Robotics sources: 12 of 13 first-party links returned HTTP 200 from a remote client. The original DJI O4 press-release URL returned 404 from that client and was replaced by a live DJI Enterprise product page plus FAQ (both HTTP 200).
- Batch 08 source links: Rogo, Uber Freight, Blue Yonder and DJI sources returned HTTP 200. Adobe requests timed out or returned 403, project44 and OpenAI returned 403 from the remote client; all cited official source content was independently opened using web retrieval. These restrictions are not proof of broken public links.
- **Still not final PASS:** independent claim-by-claim audit and desktop/mobile pixel-level screenshot QA remain open. Do not send a completion notification.
