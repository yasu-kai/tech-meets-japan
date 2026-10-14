# Early-Stage editorial and commercialization protocol

## Reader-first rule
Early-Stage is a public editorial category, **not** a directory of companies available for partnership. Editorial selection is independent of commercial contracts. Never imply a company is looking for Japan partners without primary evidence.

## Editorial fields / verification
For each candidate, capture product, company, official website, HQ country, funding stage and dated funding amount where available, maturity (research / prototype / pilot / commercial), known competitors, Japan presence, candidate Japanese use cases, potential partnership models, and direct source URLs with checked dates.
- `verified`: company/regulator/university/investor primary source explicitly establishes claim.
- `reported`: credible third-party reporting, attributed as such.
- `unverified`: hypothesis or unknown, never phrased as a fact.
- Unavailable funding, hiring, prices, Japan office, or openness to partnerships = "unconfirmed", not "none".
- Company-confirmed partnership interest requires a direct dated confirmation, distinct from an editor's hypothesis.

## Separation of data
`lib/earlyStage.ts` only contains fields safe for public exposure. Contact names, outreach history, notes, quotes in confidence, rates and pipeline are held in a restricted CRM, not in the Next.js repository or public web bundle.

## Prepublication gate (all required)
1. Check official product/organization URLs and publication dates.
2. Match each numerical and comparative claim to evidence; date funding and avoid currency conversion without a dated rate.
3. Verify research/prototype/pilot/commercial claims against demonstrated evidence.
4. Attribute hypotheses of Japan fit and partner suitability; never claim recruitment without a sourced collaboration call.
5. Confirm no editorial ranking is purchased; label sponsorship and disclose material conflicts.
6. Check legal, IP, regulated use, and market claims; escalate rather than speculate.
7. Check article links, navigation, responsive layout, accessibility basics and build status.
8. Record audit date and reviewer; withhold publication for blocking items.

## Discovery universe (source-neutral)
Search all early-stage companies regardless of academic origin: VC portfolios, accelerators, bootstrapped founders, startup launches, university spinouts, TLOs and direct patent/technology discovery. University affiliation is a provenance attribute, never an eligibility requirement. Target Pre-seed through Series A while allowing exceptional earlier or later companies on merits. Diversify the first 30 across source channels, sectors and regions; do not treat the university-derived initial longlist as the final sample.

## 30-company discovery pilot
The 30 / 30 / 9 / 4 / 2 funnel is an experimental target, not a forecast. Record denominators and timestamps. Report delivered outreach separately from replies, verified needs, qualified opportunities, and paid commitments. Allow opt-out and avoid bulk contact without proper contact/privacy review.

## Candidate score (internal hypothesis, not public score)
- Japan-specific technical/customer fit 0–5
- Product maturity / evidence 0–5
- Unmet Japan opportunity 0–5
- Feasibility of an actionable partner introduction 0–5
- Ability to reach decision-maker 0–5
Do not turn unknown inputs into affirmative points. Pick 30 across sectors and geographies, not only the highest media visibility.

## Release checklist
- Category page compiled and responsive
- Sources verified and claims rechecked
- First candidate profiles validated
- CRM field ownership/access defined
- Opt-out and commercial/editorial disclosure policy published where relevant
- Preview reviewed before merging to main

## Sector diversity / anti-bias rule (2026-10-14)
Discovery must be **sector-agnostic**: mobility is only one vertical, not the default focus. For the first 1,000-company pool, measure distribution across AI/software, enterprise applications, cybersecurity, life sciences/health, materials/chemicals, semiconductors/electronics, manufacturing/robotics, energy/climate, food/agriculture, space, consumer devices and mobility/logistics, plus uncategorized. These are provisional tagging buckets, not exclusion rules. Use multi-label sectors but designate one primary vertical for counting. Avoid more than 15% from one primary vertical in the initial sourcing pass, with exceptions documented rather than silently discarding outstanding firms. Avoid more than 25% from one accelerator/VC/university source and track region, stage and source diversity. Review balance every 100 additions. The outreach MVP 30 should span at least 8 primary verticals, and no single primary vertical should dominate it. Report both raw and deduplicated counts; explicitly report unknown sectors and cross-category overlaps. Commercial suitability should ultimately outweigh quota compliance.
