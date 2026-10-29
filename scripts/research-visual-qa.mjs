import { chromium } from "playwright";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const tracker = readFileSync("docs/RESEARCH_EDITORIAL_RECONSTRUCTION_2026-10-29.md", "utf8");
const stories = [...tracker.matchAll(/^\| ([\w-]+) \| ([\w-]+) \| REWRITTEN_LIVE_AUDIT_PENDING \|$/gm)]
  .map((match) => ({ category: match[1], slug: match[2] }));
stories.push(
  { category: "ai-security", slug: "ai-governance" },
  { category: "ai-security", slug: "data-privacy" },
  { category: "ai-work", slug: "human-ai-collaboration" },
  { category: "ai-security", slug: "future-of-security" },
);
if (stories.length !== 47 || new Set(stories.map((story) => story.slug)).size !== 47) {
  throw new Error(`Expected 47 distinct research articles, got ${stories.length}`);
}
const root = process.env.TMJ_BASE_URL || "https://tech-meets-japan.vercel.app";
const output = "artifacts/research-visual-qa";
mkdirSync(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const jobs = [];
for (const story of stories) {
  for (const device of ["desktop", "mobile"]) jobs.push({ ...story, device });
}
let cursor = 0;
async function worker() {
  while (cursor < jobs.length) {
    const job = jobs[cursor++];
    const viewport = job.device === "mobile" ? { width: 390, height: 844 } : { width: 1440, height: 900 };
    const page = await browser.newPage({ viewport, deviceScaleFactor: 1, isMobile: job.device === "mobile", hasTouch: job.device === "mobile" });
    const url = `${root}/research/${job.category}/${job.slug}`;
    const record = { slug: job.slug, category: job.category, device: job.device, url, status: null, overflow: null, heroLoaded: false, headingVisible: false, relatedImagesLoaded: false, relatedUnique: false, error: null };
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 35000 });
      record.status = response?.status() ?? null;
      await page.locator(".story-hero h1").waitFor({ timeout: 12000 });
      await page.locator(`img[data-editorial-slug="${job.slug}"]`).first().waitFor({ timeout: 12000 });
      await page.evaluate(async () => {
        const images = [...document.querySelectorAll(".story-related-card img")];
        images.forEach((img) => { img.loading = "eager"; });
        await Promise.all(images.map((img) => img.decode().catch(() => {})));
      });
      await page.waitForTimeout(350);
      const state = await page.evaluate((slug) => {
        const hero = document.querySelector(`img[data-editorial-slug="${slug}"]`);
        const h1 = document.querySelector(".story-hero h1");
        const heroRect = hero?.getBoundingClientRect();
        const h1Rect = h1?.getBoundingClientRect();
        const relatedImages = [...document.querySelectorAll(".story-related-card img")];
        return {
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          heroLoaded: Boolean(hero && hero.complete && hero.naturalWidth > 0),
          headingVisible: Boolean(h1 && h1.getBoundingClientRect().width > 0),
          heroOverlapsHeading: Boolean(heroRect && h1Rect && heroRect.top < h1Rect.bottom - 2 && heroRect.bottom > h1Rect.top + 2),
          relatedImagesLoaded: relatedImages.length > 0 && relatedImages.every((img) => img.complete && img.naturalWidth > 0),
          relatedUnique: new Set(relatedImages.map((img) => img.currentSrc || img.src)).size === relatedImages.length,
        };
      }, job.slug);
      Object.assign(record, state);
      await page.screenshot({ path: join(output, `${job.slug}-${job.device}.jpg`), type: "jpeg", quality: 60, fullPage: true, animations: "disabled", timeout: 30000 });
      if (record.status !== 200 || record.overflow > 2 || !record.heroLoaded || !record.headingVisible || record.heroOverlapsHeading || !record.relatedImagesLoaded || !record.relatedUnique) record.error = "Visual or asset assertion failed";
    } catch (error) {
      record.error = String(error).slice(0, 300);
    } finally {
      results.push(record);
      await page.close();
    }
  }
}
await Promise.all(Array.from({ length: 4 }, () => worker()));
await browser.close();
results.sort((a, b) => a.slug.localeCompare(b.slug) || a.device.localeCompare(b.device));
writeFileSync(join(output, "results.json"), JSON.stringify({ checkedAt: new Date().toISOString(), root, total: results.length, failures: results.filter((x) => x.error).length, results }, null, 2));
console.log(`Research visual QA: ${results.length} views, ${results.filter((x) => x.error).length} failures`);
for (const failure of results.filter((x) => x.error)) console.error(JSON.stringify(failure));
if (results.length !== 94 || results.some((x) => x.error)) process.exitCode = 1;
