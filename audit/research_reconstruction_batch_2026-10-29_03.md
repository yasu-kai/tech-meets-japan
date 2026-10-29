# Editorial reconstruction batch 03 — 2026-10-29

## Scope
Two existing source-rich articles were restructured by inserting four narrative and technical sections at appropriate points, preserving all original verified paragraphs and source links. Primary sources opened on 2026-10-29. Hypothetical Japanese market cases are identified as editorial analysis.

- **nori-a3**: 10 sections, 2800 Japanese body characters, 4 official sources; editorial state REWRITTEN_LIVE_AUDIT_PENDING.
- **savor-carbon-fats**: 10 sections, 2799 Japanese body characters, 5 official sources; editorial state REWRITTEN_LIVE_AUDIT_PENDING.

## Official-source checks
- Nori Robotics product specs and $1,688 price: https://www.norirobotics.com/ ; technical report for 19 DoF, 45×45cm, 20.4kg, lift range and servo safety: https://arxiv.org/abs/2605.16537 ; developer beta restrictions: https://www.norirobotics.com/beta-signups ; SDK capabilities and limitations: https://github.com/Nori-Robotics/Nori-SDK .
- Savor chemistry: https://www.savor.it/process ; facility and scale statements: https://www.savor.it/journal/savor-at-scale ; AAK partnership dated July 9, 2026: https://www.savor.it/journal/aak ; conditional cradle-to-gate LCA assumptions and figures dated Aug 17, 2026: https://www.savor.it/journal/sustainable-fats .

## Independent auditor gate
- verdict: REVISE — final independent full-text audit and desktop/mobile visual QA not yet performed.
- score: not assigned; no independent review score invented.
- blocking_findings: pending independent review, source link reachability audit, live rendered content and image QA.
- warnings: Nori paper is a manufacturer-authored technical report, not independent household task performance verification; Savor LCA figures are reported by the company and depend on system boundaries and inputs.
- generic_text: narrative examples are hypothetical, not claims of deployed customers.
- unsupported_claims: none knowingly added; quantified claims tied to official documents.
- comparison_failures: no categorical product superiority asserted; alternatives evaluated by context.
- required_fixes: verify all links, production 200 and unchanged image WebP, independently audit complete texts, visually inspect desktop/mobile.

## Live publication evidence
- Main content commit: `c8c971f25f48308896cb4b01b96ea9767e454975`.
- Vercel Production deployment `dpl_3JRTDWia4Ecy7p2T4iFu8CkpxBCi` READY, source commit matched.
- Production HTML: `/research/robotics/nori-a3` and `/research/materials-energy/savor-carbon-fats` both HTTP 200 with **10 story sections** and new technical sections present.
- Original hero assets both HTTP 200 image/webp with valid WebP signature; SHA256 prefixes nori-a3 `582e5393c9b6e0e3e66d`, savor-carbon-fats `e9976290df9153338263`.
- All **9/9 official source links HTTP 200** via read-only remote HTTP check.
- **Still pending**: independent final editorial audit and desktop/mobile screenshot review; no final PASS claimed.
