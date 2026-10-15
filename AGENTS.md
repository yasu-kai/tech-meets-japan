# Agent operating instructions — Tech-Meets-Japan

This file is the project entrypoint for AI coding agents. It does **not** replace actually opening the documents and verifying the live state.

## Mandatory preflight
1. Read this file and the relevant project docs before editing. For **any image generation, upload, card, hero, thumbnail, or CSS asset work**, fetch and read `docs/IMAGE_PIPELINE.md` in full **at the start of the task**.
2. Verify the connected GitHub/Vercel tools by discovering or calling them. Never claim they are unavailable without checking.
3. Check the current `main` branch, actual files, and most recent deployments; do not rely on past assistant messages as evidence.
4. Identify the user's actual requested outcome and work on that **before** cosmetic alternatives or reporting.

## Required image task gate
- Prove access to **actual binary image bytes**.
- Register one test asset in GitHub using Blob(base64) → Tree → Commit → Ref or a verified equivalent. Then verify its deployed URL and MIME type.
- Only after success, batch images, wire unique images to each editorial article and category, and check responsive layout.
- Category-wide placeholders or SVG gradients **do not count** as requested photorealistic image integration.
- Verify image availability, correct article-to-thumbnail mapping, and mobile cropping/overlaps.
- Report separate states: generated / uploaded / referenced / deployed / visually verified. Never equate Vercel READY to user-visible correctness.
- If blocked, report the exact failed operation and a concrete recovery path. Do not endlessly announce progress or make unrelated changes.

## Permanent incident context
The 2026-10-15 image integration attempt repeatedly failed because assistant runs incorrectly denied connected tool availability, did not complete binary uploads, substituted placeholders, reused identical images for unrelated articles, introduced mobile collisions, and overstated deployment completion. See **docs/IMAGE_PIPELINE.md** for the detailed incident and implementation steps. Avoid repeating it.

## Publication and editorial
- Tech-Meets-Japan is an **original discovery and Japan-market analysis** publication, not a syndication/reposting site.
- Distinguish published editorial content from planned/unverified research and keep sourcing traceable.
- Visual direction: photorealistic cinematic technology journalism, controlled dark/navy palette. No generic cute 3D SaaS icon packs.
- Production updates are authorized by the site owner in this project conversation, but verify current instructions and inspect deployment success; never claim a manual visual QA that has not occurred.

## Before saying “done”
Provide evidence for the *actual user goal*, not just a committed CSS change. If a key part remains unfinished, say it is unfinished.
