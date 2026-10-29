# Research editorial reconstruction — 2026-10-29

## Authorization and scope
The owner authorized reconstruction of the previously protected 32 articles as well as newer Research stories. Existing verified source facts, image binaries, image associations, and URLs must remain intact unless a specific correction is evidenced. No article is considered revised solely because its length increased.

## Current inventory
43 Research stories identified from lib/researchStories.ts at audit time. By category: gadgets 12, materials-energy 2, robotics 7, ai-work 6, ai-creative 5, ai-industry 6, ai-security 5.

## Editorial acceptance criteria (per article)
1. A concrete reader question and narrative opening, not a generic definition.
2. Product/company specifics: verified features, mechanisms, inputs, outputs, limitations, and what work changes.
3. Evidence-based comparison: alternative approaches, choice conditions, non-equivalent comparisons explicitly marked.
4. Japan applicability: plausible workflow and actual adoption blockers, separated from confirmed deployments.
5. Pricing, Japanese support, availability, security, data residency: verified with date and official sources or clearly unverified.
6. No unsupported superlatives, numerical scoring, or invented user cases.
7. Independent audit verdict PASS with blocking issues cleared; QA of links and unchanged images.
8. Typical depth 3,000–5,000 Japanese characters when sources justify it; longer for deep analysis, shorter for signal/news. Never pad.

## Per-story rewrite tracker
Status REWRITE_PENDING means the story has not passed the new editorial gate. AI governance has been expanded as a first-pass pilot and still needs independent audit.

| Category | Slug | Status |
|---|---|---|
| gadgets | ixana-wir | REWRITTEN_LIVE_AUDIT_PENDING |
| gadgets | mudra-link | REWRITTEN_LIVE_AUDIT_PENDING |
| gadgets | ipolish-digital-nails | REWRITTEN_LIVE_AUDIT_PENDING |
| materials-energy | chargebotic-kestrel | REWRITTEN_LIVE_AUDIT_PENDING |
| robotics | nori-a3 | REWRITTEN_LIVE_AUDIT_PENDING |
| materials-energy | savor-carbon-fats | REWRITTEN_LIVE_AUDIT_PENDING |
| ai-work | coding-agents | REWRITTEN_LIVE_AUDIT_PENDING |
| ai-work | ai-sales | REWRITTEN_LIVE_AUDIT_PENDING |
| ai-work | ai-recruiting | REWRITTEN_LIVE_AUDIT_PENDING |
| ai-creative | ai-video | REWRITTEN_LIVE_AUDIT_PENDING |
| ai-creative | runway-production | REWRITTEN_LIVE_AUDIT_PENDING |
| ai-industry | manufacturing-ai | REWRITTEN_LIVE_AUDIT_PENDING |
| robotics | warehouse-robotics | REWRITTEN_LIVE_AUDIT_PENDING |
| gadgets | ai-glasses | REWRITTEN_LIVE_AUDIT_PENDING |
| gadgets | personal-ai-device | REWRITTEN_LIVE_AUDIT_PENDING |
| ai-work | ai-legal | REWRITE_PENDING |
| ai-work | ai-customer-service | REWRITE_PENDING |
| ai-security | ai-soc | REWRITE_PENDING |
| ai-security | identity-agents | REWRITE_PENDING |
| ai-security | ai-fraud | REWRITE_PENDING |
| ai-security | continuous-validation | REWRITE_PENDING |
| ai-creative | ai-voice | REWRITE_PENDING |
| ai-creative | synthetic-media | REWRITE_PENDING |
| ai-creative | creative-stack | REWRITE_PENDING |
| ai-industry | logistics-ai | REWRITE_PENDING |
| ai-industry | finance-ai | REWRITE_PENDING |
| ai-industry | healthcare-ai | REWRITE_PENDING |
| ai-industry | retail-ai | REWRITE_PENDING |
| robotics | humanoid | REWRITE_PENDING |
| robotics | autonomous-driving | REWRITE_PENDING |
| robotics | physical-ai-platforms | REWRITE_PENDING |
| robotics | drones | REWRITE_PENDING |
| gadgets | wearable-memory | REWRITE_PENDING |
| gadgets | future-input | REWRITE_PENDING |
| gadgets | weird-gadgets | REWRITE_PENDING |
| gadgets | silent-speech | REWRITE_PENDING |
| ai-work | browser-agents | REWRITE_PENDING |
| ai-security | agentic-dev-security | REWRITE_PENDING |
| ai-industry | procurement-agents | REWRITE_PENDING |
| robotics | robotics-as-labor | REWRITE_PENDING |
| gadgets | embodied-ai-reception | REWRITE_PENDING |
| gadgets | bridge-ultrasound-bci | REWRITE_PENDING |
| gadgets | ultrasound-bci | REWRITE_PENDING |

## Batch 01 — 2026-10-29
- Rewritten and deployed: **3/42** (ai-sales, coding-agents, ai-recruiting). Remaining not rewritten: **39**.
- Each of the three has 9 sections and approximately 3,000–3,400 Japanese body characters, with product-specific official sources and live HTTP 200 verification.
- Separate source-bound editorial review completed; independent final audit and desktop/mobile visual QA are still pending. **Do not count as final PASS.**
- Evidence: [audit/research_reconstruction_batch_2026-10-29_01.md](../audit/research_reconstruction_batch_2026-10-29_01.md).
- No existing image files or URL slugs were changed.

## Batch 02 — 2026-10-29
- Rewritten in this batch: **4 stories** (ixana-wir, mudra-link, ipolish-digital-nails, chargebotic-kestrel). Previously rewritten in batch 01: 3; total rewritten **7/42**, remaining not rewritten **35**.
- All 4 rewrites use named product mechanisms and explicit distinctions between shipping, sampling, pre-order, demonstration and roadmap targets. Exact editorial counts and primary-source audit are in [audit/research_reconstruction_batch_2026-10-29_02.md](../audit/research_reconstruction_batch_2026-10-29_02.md).
- Status is **REWRITTEN_LIVE_AUDIT_PENDING** pending final independent review and mobile/desktop visual QA. Do not count any of these as final PASS until verified.
- No slugs, article imagery, category mapping, or existing validated claims were removed.

## Batch 03 — 2026-10-29
- Reconstructed **2 more stories**: nori-a3 and savor-carbon-fats. Both expanded from 6 to 10 source-bound sections, including new product-specific mechanical/chemical explanations and commercialization constraints.
- Total rewritten **9/42**, remaining not rewritten **33**. Final independent audit and responsive screenshot QA remain open; status **REWRITTEN_LIVE_AUDIT_PENDING**.
- Evidence: [audit/research_reconstruction_batch_2026-10-29_03.md](../audit/research_reconstruction_batch_2026-10-29_03.md).
- Existing slugs, verified image associations and original source facts retained.

## Batch 04 — 2026-10-29
- Reconstructed **4 stories**: ai-video, runway-production, manufacturing-ai, warehouse-robotics. Total rewritten **13/42**; remaining not rewritten **29**.
- Each story was rewritten from official vendor documentation and includes product-specific mechanisms, operational inputs/outputs, limitations, comparisons, and Japan deployment criteria.
- Evidence: [audit/research_reconstruction_batch_2026-10-29_04.md](../audit/research_reconstruction_batch_2026-10-29_04.md).
- Status **REWRITTEN_LIVE_AUDIT_PENDING**. Latest content commit `75340223d18ab3a5df47453619c39ff556d8dab1` is Vercel READY; all four article routes HTTP 200 and correct original WebP heroes HTTP 200. Independent final audit and responsive screenshot QA remain open. Preserve original image mappings and slugs.

## Batch 05 — 2026-10-29
- Reconstructed **2 stories**: ai-glasses and personal-ai-device. Total rewritten **15/42**; remaining not rewritten **27**.
- Source and editorial evidence: [audit/research_reconstruction_batch_2026-10-29_05.md](../audit/research_reconstruction_batch_2026-10-29_05.md).
- Status **REWRITTEN_LIVE_AUDIT_PENDING** pending final independent audit, production checks and responsive screenshot QA. Existing slugs and image mappings unchanged.

## Change discipline
- Update article bodies in lib/researchStories.ts, preserving slugs and image mapping.
- Verify official references for each material claim before publishing a rewrite.
- Audit against audit/INDEPENDENT_AI_AUDITOR.md and record blockers.
- Check production deployment, article rendering, card links, and mobile before marking complete.
- Publish in reviewable batches; never claim the entire backlog is complete after only one pilot.
