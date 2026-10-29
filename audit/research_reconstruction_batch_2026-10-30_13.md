# Research reconstruction — Source-bound second-pass editorial audit, batch 13

**Date:** 2026-10-30 (JST)  
**Scope:** Four additional AI Research reports absent from the original 43-story tracker: `ai-governance`, `data-privacy`, `human-ai-collaboration`, `future-of-security`.  
**Method:** Independent second-pass comparison of the first-pass articles against original official product documentation and NIST frameworks; product-specific factual additions, Japan conditions and explicit limitations, followed by review of the revised text. This is a distinct editorial review stage, not a claim that a separate AI model was used.  
**Implementation:** GitHub main content commit `1f3bc616a3e057723a23a8c31baa0f20342217ba`. Vercel Production deployment `dpl_CKaz3eR96i7feKbn5g1wZTu64jGP` **READY**. Four revised article pages returned HTTP 200 and contained the new article-specific content. Four original WebP heroes returned HTTP 200 / image/webp / valid RIFF. No article slug, category or adopted image changed.

| Slug | Editorial verdict | Score / 100 | Body characters | Sections | Blocking findings |
| --- | --- | ---: | ---: | ---: | --- |
| ai-governance | PASS | 89 | 3,184 | 10 | 0 |
| data-privacy | PASS | 91 | 2,818 | 12 | 0 |
| human-ai-collaboration | PASS | 89 | 2,829 | 14 | 0 |
| future-of-security | PASS | 86 | 2,814 | 14 | 0 |

## ai-governance
- **verdict:** PASS; **score:** 89.
- **blocking_findings:** none after source-bound correction.
- **warnings:** IBM's October 14, 2026 product update describes discovery support for AWS Bedrock, Azure AI Foundry, IBM watsonx Orchestrate and Google's Gemini agent platform; coverage of every agent development environment is **not** asserted. Arize AX/Langfuse integrations and IBM Bob metadata extraction are product claims, not independently measured performance. Prices, Japan-specific terms and deployment coverage remain unverified.
- **generic_text:** Added specific discovery sources, metadata fields, evaluation metric integration and an actionable responsibility/approval/stop checklist.
- **unsupported_claims:** Fictional purchasing-agent incident is labeled hypothetical. NIST AI RMF is described as voluntary risk framework, not product certification.
- **comparison_failures:** watsonx.governance's AI asset/risk control scope distinguished from Microsoft Purview's information classification/protection scope; no false one-to-one feature equivalence.
- **required_fixes:** none editorial; fresh post-change desktop/mobile QA still required.
- **primary evidence:** https://www.ibm.com/new/announcements/new-in-ibm-watsonx-governance-govern-ai-agents-as-you-build-expand-accountability-and-streamline-compliance ; https://learn.microsoft.com/en-us/purview/protect-sensitive-data-to-get-ready-for-ai ; https://www.nist.gov/itl/ai-risk-management-framework

## data-privacy
- **verdict:** PASS; **score:** 91.
- **blocking_findings:** none after correction.
- **warnings:** Google Cloud's official processing-location table, last updated October 26, 2026, lists Tokyo/Osaka as processing regions but **does not** list them among regions supporting image inspection/redaction. Availability can change; article explicitly makes this date-dependent. Product detection does not guarantee Japanese legal compliance or perfect PII detection.
- **generic_text:** Added specific infoType/InspectConfig/DeidentifyConfig process distinctions, tokenization versus masking, and Japanese data processing-region selection by data type.
- **unsupported_claims:** No assertion of 100% anonymization or immunity to re-identification. Pseudonymization is not equated with irreversible anonymization.
- **comparison_failures:** Google managed API and Microsoft Presidio open-source analyzer/anonymizer compared by data path, customization, operations and region, not unsupported accuracy rankings.
- **required_fixes:** none editorial; fresh post-change desktop/mobile QA still required.
- **primary evidence:** https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-infotypes ; https://docs.cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data ; https://docs.cloud.google.com/sensitive-data-protection/docs/locations ; https://microsoft.github.io/presidio/text_anonymization/

## human-ai-collaboration
- **verdict:** PASS; **score:** 89.
- **blocking_findings:** none after correction.
- **warnings:** ServiceNow Zurich documentation specifies AI entitlements, Intelligent Approvals plugin, AI Platform Core dependencies and roles. Existing workflow overlap can create conflicting approval records; this is explicitly described. Example three-way approval policy is a fictional illustrative scenario, not a customer deployment.
- **generic_text:** Added concrete auto-approve/auto-reject/can't-decide outcomes, approval record handling, plugin dependencies, and role-specific testing.
- **unsupported_claims:** No assertion that all ServiceNow instances or Japanese contracts include the feature. No unverified Japanese document accuracy claim.
- **comparison_failures:** Deterministic rule-based approvals versus AI policy-document interpretation distinguished by what they automate and how exceptions are handled.
- **required_fixes:** none editorial; fresh post-change desktop/mobile QA still required.
- **primary evidence:** https://www.servicenow.com/docs/r/zurich/build-workflows/explore-intelligent-approvals.html ; https://www.servicenow.com/docs/r/zurich/build-workflows/configure-intelligent-approvals.html

## future-of-security
- **verdict:** PASS; **score:** 86.
- **blocking_findings:** none after correction.
- **warnings:** This is a cross-cutting framework report, not a named product profile. Hypothetical CRM over-privilege scenario is explicitly marked illustrative. Frameworks provide management guidance, not certification or assurance of compliance. Existing identity/AI SOC/continuous validation coverage remains linked conceptually rather than falsely claimed as a single product.
- **generic_text:** Added a concrete multi-system incident path, four interlocking controls (identity, data, action, evidence) and an investment-order decision process.
- **unsupported_claims:** No asserted real-world incident, measured effectiveness or guarantee of breach prevention.
- **comparison_failures:** NIST CSF 2.0's six cyber-risk functions distinguished from AI RMF's voluntary AI-risk scope; not compared as rival products.
- **required_fixes:** none editorial; fresh post-change desktop/mobile QA still required.
- **primary evidence:** https://www.nist.gov/cyberframework ; https://www.nist.gov/itl/ai-risk-management-framework ; https://learn.microsoft.com/en-us/purview/protect-sensitive-data-to-get-ready-for-ai

## End-to-end gate
- Editorial second-pass PASS across batches 12 and 13: **9/47**. The remaining **38/47** require independent source-bound review.
- The preceding Playwright rerun `40907522742` completed successfully for the earlier five-article batch: **94 views, 0 automated failures**, as recorded in its job log. This is **not** evidence for the newly revised four articles; re-run after commit `1f3bc616a3e057723a23a8c31baa0f20342217ba` is required.
- Do not notify the owner or stop the automation until all 47 articles have editorial PASS and current production desktop/mobile QA.

## Final post-change visual QA
- After all four batch-13 articles and two corrected headlines were deployed, GitHub Actions workflow `40907522742`, latest rerun job `123619472614`, completed **successfully: 94 desktop/mobile full-page views, 0 automated failures**. Deterministic editorial checks also passed. Artifact ID `12918667139` contains the latest screenshots. This is automated visual QA; do not imply that every screenshot was individually human-reviewed.
