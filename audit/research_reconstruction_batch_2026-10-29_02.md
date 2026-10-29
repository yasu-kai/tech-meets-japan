# Editorial reconstruction batch 02 — 2026-10-29

## Scope
Four articles rewritten in lib/researchStories.ts without changing their slug, category, hero mapping or previously verified factual claims. Primary official product and help pages were read on 2026-10-29. New examples and Japanese adoption scenarios are explicitly labeled as editorial hypotheses.

## Article metrics
- **ixana-wir**: 8 sections; 2109 Japanese body characters; source links added or retained. Editorial check: **REVISE / final audit pending**, score not assigned. No independent auditor sign-off.
- **mudra-link**: 8 sections; 2246 Japanese body characters; source links added or retained. Editorial check: **REVISE / final audit pending**, score not assigned. No independent auditor sign-off.
- **ipolish-digital-nails**: 8 sections; 2060 Japanese body characters; source links added or retained. Editorial check: **REVISE / final audit pending**, score not assigned. No independent auditor sign-off.
- **chargebotic-kestrel**: 8 sections; 2098 Japanese body characters; source links added or retained. Editorial check: **REVISE / final audit pending**, score not assigned. No independent auditor sign-off.

## Source-bound fact checks
- ixana-wir: shipping YR23 5 Mbit/s vs sampling YR31 20 Mbit/s; 0.2 nJ/bit measured full-chip TX/RX; 38× comparison uses a specified Nordic BLE benchmark, **not** battery life. Sources: https://ixana.ai/technology/wi-r-ban ; https://ixana.ai/products/chips/wi-r-ban ; https://ixana.ai/technology/roadmap .
- mudra-link: 3 SNC sensors, 6-DoF IMU, Bluetooth HID, initial setup OS requirements and 8h claimed active use; official gestures help distinguishes coming-soon functions. Sources: https://mudra-band.com/products/mudra-link ; https://mudra-band.com/pages/inside-the-band ; https://support.mudra-band.com/hc/en-us/articles/24721634390301-What-gestures-and-movements-does-the-Mudra-Link-recognize .
- ipolish-digital-nails: Bluetooth is phone-to-Magic-Wand, nail powered by contact; non-reusable press-on; 7-day warranty; Japan planned but not confirmed shipped. Starter $95, Wand $60, 2-piece refill $6.50, as of 2026-10-29. Some official pages disagree on delivery timing; article discloses this. Sources: https://ipolish.fashion/pages/faq ; https://ipolish.fashion/collections/frontpage ; https://ipolish.fashion/products/squoval-refills .
- chargebotic-kestrel: 18W drawn down in Aug 2026 field test on 100A line; 22.8W bench at 132A; 20–150W design envelope and Kestrel 2 50–250W target **not demonstrated**; sustained harvest on live grid remains next milestone. Source: https://www.chargebotic.com/ .

## Independent auditor gate
- verdict: **REVISE** (final independent full-text and screenshot audit pending for all four)
- score: **not yet assigned**; do not manufacture a score before independent review.
- blocking_findings: manual desktop/mobile visual verification and independent source-bound full-text audit not yet performed.
- warnings: vendor measurements and specifications are manufacturer-reported; prices, product availability and regional compliance may change; iPolish shipping dates vary across official pages.
- generic_text: narrative examples are editorial hypotheticals, not documented customer deployments. Evaluate whether any sections can be moved to another product without loss of specificity.
- unsupported_claims: no independently confirmed product claims added; technical and numeric statements tied to official sources; Japanese market applications are hypothetical.
- comparison_failures: product-vs-standard comparisons use choice conditions; no blanket superiority claims.
- required_fixes: independently review full published articles; verify live HTTP/MIME and unchanged hero mapping; desktop and mobile visual QA; mark final PASS only after these gates.

## Delivery evidence
GitHub commit and Vercel deployment details are to be appended after successful deployment. Production READY alone does not prove live article rendering.
