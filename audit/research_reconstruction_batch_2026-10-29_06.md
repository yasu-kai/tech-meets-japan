# TMJ editorial reconstruction — Batch 06 (2026-10-29)

## Scope
Four previously pending Research stories. Primary sources checked via first-party pages on 2026-10-29. Content revised in lib/researchStories.ts; existing slugs and image mappings retained.

## Article evidence
### ai-legal
- Sections: 8; Japanese body characters: 2301; primary-source links: 6.
- Editorial verification: concrete scenario, product-specific mechanics, inputs/outputs, comparison conditions, operational limitations, Japan adoption checks and human decision boundary.
- Independent final verdict: **REVISE (pending independent review)**; score **not assigned** until separate auditor.
- blocking_findings: no completed independent source-bound claim-by-claim audit; no responsive screenshot QA.
- warnings: product feature availability, pricing, Japanese support and contract conditions require customer-specific validation.
- generic_text: no automatically generated generic-text flags in this preliminary pass; independent review required.
- unsupported_claims: no known unsupported numeric performance claims; unverified implementation claims explicitly presented as hypothetical.
- comparison_failures: no direct winner asserted; comparison framed by product use case and existing stack.
- required_fixes: independent review, live source URL check, responsive screenshot check, final PASS decision.

### ai-customer-service
- Sections: 9; Japanese body characters: 2369; primary-source links: 5.
- Editorial verification: concrete scenario, product-specific mechanics, inputs/outputs, comparison conditions, operational limitations, Japan adoption checks and human decision boundary.
- Independent final verdict: **REVISE (pending independent review)**; score **not assigned** until separate auditor.
- blocking_findings: no completed independent source-bound claim-by-claim audit; no responsive screenshot QA.
- warnings: product feature availability, pricing, Japanese support and contract conditions require customer-specific validation.
- generic_text: no automatically generated generic-text flags in this preliminary pass; independent review required.
- unsupported_claims: no known unsupported numeric performance claims; unverified implementation claims explicitly presented as hypothetical.
- comparison_failures: no direct winner asserted; comparison framed by product use case and existing stack.
- required_fixes: independent review, live source URL check, responsive screenshot check, final PASS decision.

### ai-soc
- Sections: 9; Japanese body characters: 2429; primary-source links: 6.
- Editorial verification: concrete scenario, product-specific mechanics, inputs/outputs, comparison conditions, operational limitations, Japan adoption checks and human decision boundary.
- Independent final verdict: **REVISE (pending independent review)**; score **not assigned** until separate auditor.
- blocking_findings: no completed independent source-bound claim-by-claim audit; no responsive screenshot QA.
- warnings: product feature availability, pricing, Japanese support and contract conditions require customer-specific validation.
- generic_text: no automatically generated generic-text flags in this preliminary pass; independent review required.
- unsupported_claims: no known unsupported numeric performance claims; unverified implementation claims explicitly presented as hypothetical.
- comparison_failures: no direct winner asserted; comparison framed by product use case and existing stack.
- required_fixes: independent review, live source URL check, responsive screenshot check, final PASS decision.

### identity-agents
- Sections: 9; Japanese body characters: 2352; primary-source links: 2.
- Editorial verification: concrete scenario, product-specific mechanics, inputs/outputs, comparison conditions, operational limitations, Japan adoption checks and human decision boundary.
- Independent final verdict: **REVISE (pending independent review)**; score **not assigned** until separate auditor.
- blocking_findings: no completed independent source-bound claim-by-claim audit; no responsive screenshot QA.
- warnings: product feature availability, pricing, Japanese support and contract conditions require customer-specific validation.
- generic_text: no automatically generated generic-text flags in this preliminary pass; independent review required.
- unsupported_claims: no known unsupported numeric performance claims; unverified implementation claims explicitly presented as hypothetical.
- comparison_failures: no direct winner asserted; comparison framed by product use case and existing stack.
- required_fixes: independent review, live source URL check, responsive screenshot check, final PASS decision.

## First-party sources used
**ai-legal:**
- Harvey — Platform: https://www.harvey.ai/platform
- Harvey — Vault: https://www.harvey.ai/platform/vault
- Harvey — Legal Work Orchestration: https://www.harvey.ai/platform/legal-work-orchestration
- Thomson Reuters — CoCounsel Legal: https://legal.thomsonreuters.com/en/products/cocounsel-legal
- Thomson Reuters Japan — CoCounsel: https://www.thomsonreuters.co.jp/ja/products/cocounsel.html
- Thomson Reuters Japan — CoCounsel skills: https://www.thomsonreuters.co.jp/ja/products/cocounsel/features.html

**ai-customer-service:**
- Sierra — Agent Studio: https://sierra.ai/product/agent-studio
- Sierra — Japanese site: https://sierra.ai/jp
- ServiceNow — AI agents in CSM: https://www.servicenow.com/docs/r/ja-JP/customer-service-management/now-assist-for-csm/csm-ai-agents-use-cases.html
- Salesforce — Agentforce security and design: https://admin.salesforce.com/blog/2025/best-practices-for-building-secure-agentforce-service-agents
- Salesforce — Agentforce: https://www.salesforce.com/agentforce/

**ai-soc:**
- Microsoft — Security Copilot agents overview: https://learn.microsoft.com/en-us/copilot/security/agents-overview
- Microsoft — Setup and manage agents: https://learn.microsoft.com/en-us/copilot/security/agents-manage
- Microsoft — Phishing Triage Agent: https://learn.microsoft.com/en-us/defender-xdr/phishing-triage-agent
- Microsoft — Security Alert Triage Agent: https://learn.microsoft.com/en-us/defender-xdr/security-alert-triage-agent
- Microsoft — Deploy agents in Defender: https://learn.microsoft.com/en-us/defender-xdr/security-copilot-agents-defender
- Microsoft — Responsible AI for Security Copilot agents: https://learn.microsoft.com/en-us/copilot/security/security-copilot-application-card-agents

**identity-agents:**
- Okta — AI agent innovations at Oktane 2026: https://www.okta.com/newsroom/press-releases/ai-innovations-oktane-2026/
- Okta — Identity Engine release notes 2026: https://help.okta.com/oie/en-us/content/topics/releasenotes/archive/oie-relnotes-2026.htm

## Publication QA
Pending Vercel READY, route HTTP 200, WebP association verification. Do not count as final PASS until complete.

## Production follow-up
- All four article pages and their original WebP images: HTTP 200, correct hero URL referenced in HTML, expected article keywords present.
- Vercel production deployment READY at commit `606381faa60dae84d0e7f222e774b8ac4819c89e`.
- First-party URLs: most HTTP 200. Salesforce Admin returned 403 to remote client, but was readable in web research; access-control response is not evidence of missing documentation.
- Browser visual QA blocked by missing Chrome runtime libraries on authorized VPS. Independent final audit remains outstanding; verdict remains REVISE (pending), not PASS.
