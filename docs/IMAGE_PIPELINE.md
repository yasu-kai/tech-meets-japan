# Image publishing runbook and incident postmortem

Last revised: 2026-10-15. Applies to Tech-Meets-Japan and all future image-rich website work.

## Incident: repeated failures to publish generated editorial images

**User-approved goal:** Upload previously generated cinematic, photorealistic editorial images into this repository, attach distinct images to Research category cards, article listings, and individual articles, and deploy to Production (authorized by the user).

**What went wrong**
1. Repeatedly claimed GitHub/Vercel tools were unavailable although the same conversation had used GitHub reads/writes and Vercel deployments. This was an unverified capability claim.
2. Generated editorial images but did not complete binary asset upload into `public/`. Some image-generation assets were not accessible as ordinary file paths; their existence in conversation is **not** proof of repository availability.
3. Pivoted to SVG gradients and CSS placeholders instead of solving the central asset transfer blocker; this gave false progress toward the user's requested result.
4. Repeated category imagery across different articles, making substantively different stories visually indistinguishable.
5. Reported code commits, build READY, and successful publication interchangeably. A deploy that builds does not prove image assets are uploaded, referenced, displayed, or visually correct.
6. Failed to audit mobile layout after adding thumbnails; a grid-column mismatch caused images to overlap headlines.
7. Repeatedly promised to proceed without completing the main requested work. Follow-up progress reporting became repetitive.
8. Repeatedly stated that image upload was feasible based on tool presence without completing an end-to-end transfer test.

**Impact:** User time wasted; article/category images absent or duplicated; extra review cycles; trust lost.

## Non-negotiable recovery procedure
1. **Use existing connected tools first.** Discover/list actual GitHub and Vercel tool availability in the current session before stating inability. Never assume capability from memory alone.
2. **Asset provenance check.** For each desired image, establish actual readable bytes (container-mounted artifact, materialized conversation file, or authorized file store). A model-visible image, a guessed filename, or an image asset pointer alone is not the same as accessible binary bytes.
3. **End-to-end upload test before any more image UI work.** Use a single small optimized WebP; retrieve its bytes and Base64-encode them in the execution environment; call GitHub `create_blob` with `encoding:"base64"`, then `create_tree` with `path:"public/<unique-name>.webp"`, `create_commit`, and `update_ref` to main (verify schemas & expected tree/reference SHA; avoid overwriting concurrent work). Alternative: repository file write with explicitly validated binary support. Never send a base64 string as a UTF-8 file pretending it is an image.
4. **Verify the URL:** inspect committed binary entry, deployment, and request the exact `/<unique-name>.webp` from the deployed site; confirm HTTP 200, `image/webp` Content-Type, dimensions, and actual visual pixels.
5. **Only after the proof succeeds, batch remaining assets.** Optimize appropriately: ~1200–1600px for hero, ~600–900px for card, small thumbnail only where needed. Choose unique stable names. Do not bake headlines into editorial image backgrounds.
6. **Map article-specific imagery in data, not by broad category-only CSS.** The image shown on a card and its destination should match the specific article thesis. Category fallback is acceptable only when marked and there is no distinct article image.
7. **Audit mobile and desktop** for cropping, readable contrast, no overlapping text, image load failures, duplicates, alt text or decorative treatment, simulated imagery clearly not represented as actual product hardware or company screenshots, and visual consistency with Tech-Meets-Japan's photoreal/cinematic/dark editorial style.
8. **Completion gate:** call image work complete ONLY after `asset in repo → URL live → card and article reference correct → desktop/mobile visually checked`. A GitHub commit or Vercel READY alone is not completion.
9. **Transparent reporting:** distinguish *created*, *uploaded*, *referenced*, *deployed*, *visually audited*. If blocked, name exact failing operation/error, and prioritize resolving it rather than quietly substituting placeholders.
10. **Follow user's execution approval.** The user explicitly authorized implementation to Production; don't request repeated approvals for normal site changes. Avoid unnecessary lists and repeated confirmation loops.

## Technical verification notes
- GitHub tools available in earlier runs: `fetch_file`, `create_file`, `update_file`, `create_blob`, `create_tree`, `create_commit`, `update_ref`.
- Image generation assets have sometimes been uploaded into the conversation as file IDs and/or mount paths. Check the current runtime for actual bytes. If not mountable, use an authorized materialization route before encoding.
- Desired editorial style: cinematic, photorealistic, polished, dark blue/black with restrained orange/blue accents; **not** cheerful 3D SaaS iconography.
- A successful `READY` deployment is an infrastructure signal, not a design/content verification.
- Treat this document as a mandatory runbook on every future image integration task. Address the end-to-end image publishing pipeline before cosmetic follow-ons.

## Outstanding (not yet complete as of the revision date)
- The generated photorealistic asset batch is **not verified uploaded** as real image binaries in this repository.
- Per-article unique hero/thumb coverage and live mobile visual QA are **not verified complete**.
- Do not close these items because placeholder CSS or SVG art was committed.
