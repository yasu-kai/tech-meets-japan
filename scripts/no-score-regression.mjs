import { readFileSync } from "node:fs";

/**
 * Policy regression gate: TMJ does not assign numeric editorial scores
 * to products or companies. Verified quantitative product specifications
 * (prices, latency, power, etc.) remain allowed.
 */
const files = [
  "lib/data.ts",
  "lib/productCatalog.ts",
  "components/ProductExplorer.tsx",
  "components/CompanyExplorer.tsx",
  "app/products/[slug]/page.tsx",
  "app/globals.css",
  "README.md",
];
const prohibited = [
  /\bfitScore\b/i,
  /\bscoreBreakdown\b/i,
  /\b(?:calculateProductJapanFit|calculateJapanFit|dimensionScore|japanFitWeights|makeScoreBreakdown|scoreCriteria)\b/i,
  /Japan\s*Fit\s*(?:Score|scoring|=|\/\s*100)/i,
  /className=["'](?:score|score-orbit|score-rubric-[\w-]+|score-calc-[\w-]+)/i,
  /\.score(?:-orbit|-rubric-|-calc-|-breakdown|\s*\{)/i,
];
let failures = 0;
for (const file of files) {
  const source = readFileSync(file, "utf8");
  for (const expression of prohibited) {
    if (expression.test(source)) {
      failures++;
      console.error("[SCORE_REGRESSION]", file, expression.source);
    }
  }
}
if (failures) {
  console.error("FAIL: editorial scoring has been reintroduced.");
  process.exit(1);
}
console.log("PASS: editorial scoring fields, calculations and UI have not returned.");
