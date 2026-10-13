import { readFileSync } from "node:fs";

const files=["lib/data.ts","lib/productCatalog.ts"];
const generic=[
  "主要入力をそのまま取り込む",
  "既存Workflowから段階的に接続可能",
  "人が確認・再利用できる成果物として返す",
  "定型作業の工数を削減",
  "単機能ではなく業務サイクル内で評価する",
  "PoCでは人手との比較を取る",
  "複数ツール間の手作業を圧縮"
];
let errors=0;
for(const file of files){
  const text=readFileSync(file,"utf8");
  for(const phrase of generic){
    const count=text.split(phrase).length-1;
    if(count){ console.error("[GENERIC_FILLER]",file,phrase,"x",count); errors+=count; }
  }
}
console.log("Editorial audit summary");
console.log("- generic filler findings:",errors);
if(errors>0){ console.error("FAIL: generic editorial filler detected."); process.exit(1); }


const research=readFileSync("lib/researchStories.ts","utf8");
const storyMatches=[...research.matchAll(/slug:"([^"]+)",category:"([^"]+)"/g)];
let researchErrors=0;
for(let i=0;i<storyMatches.length;i++){
  const slug=storyMatches[i][1];
  const start=storyMatches[i].index;
  const end=i+1<storyMatches.length?storyMatches[i+1].index:research.length;
  const block=research.slice(start,end);
  const bodies=[...block.matchAll(/body:\[(.*?)\](?:,|\})/gs)]
    .flatMap(x=>[...x[1].matchAll(/"([^"]+)"/g)].map(y=>y[1]))
    .join("");
  const sections=(block.match(/heading:"/g)||[]).length;
  const sources=(block.match(/\{label:"[^"]+",url:"[^"]+"\}/g)||[]).length;
  if(bodies.length<650){ console.error("[THIN_STORY]",slug,"body chars",bodies.length); researchErrors++; }
  if(sections<4){ console.error("[TOO_FEW_SECTIONS]",slug,"sections",sections); researchErrors++; }
  if(sources<3){ console.error("[TOO_FEW_SOURCES]",slug,"sources",sources); researchErrors++; }
}
const storyTemplate=readFileSync("app/research/[category]/[slug]/page.tsx","utf8");
if(!storyTemplate.includes("story-editorial-visual")){
  console.error("[MISSING_VISUAL_SYSTEM] research story template has no editorial visual");
  researchErrors++;
}
console.log("- research stories:",storyMatches.length);
console.log("- research quality findings:",researchErrors);
if(researchErrors>0){
  console.error("FAIL: research editorial quality gate failed.");
  process.exit(1);
}



const css=readFileSync("app/globals.css","utf8");
const researchPage=readFileSync("app/research/[category]/[slug]/page.tsx","utf8");
const homePage=readFileSync("app/page.tsx","utf8");
let wrapErrors=0;

const forcedBreaks=[
  ...researchPage.matchAll(/<h[12][^>]*>[\s\S]*?<br\s*\/?>(?:[\s\S]*?)<\/h[12]>/g),
  ...homePage.matchAll(/<h[12][^>]*>[\s\S]*?<br\s*\/?>(?:[\s\S]*?)<\/h[12]>/g)
];
if(forcedBreaks.length){
  console.error("[FORCED_HEADLINE_BREAK] semantic headline spans are preferred over <br> in display headings:",forcedBreaks.length);
  wrapErrors+=forcedBreaks.length;
}

const riskyKeepAll=/((?:h1|h2|headline|title)[^{]*\{[^}]*word-break\s*:\s*keep-all[^}]*\})/gi;
const keepAllMatches=[...css.matchAll(riskyKeepAll)];
if(keepAllMatches.length){
  console.error("[RISKY_KEEP_ALL] display heading uses word-break: keep-all and may overflow:",keepAllMatches.length);
  wrapErrors+=keepAllMatches.length;
}

const riskyBreakWord=/((?:h1|h2|headline|title)[^{]*\{[^}]*overflow-wrap\s*:\s*break-word[^}]*\})/gi;
const breakWordMatches=[...css.matchAll(riskyBreakWord)];
if(breakWordMatches.length){
  console.error("[RISKY_BREAK_WORD] Japanese display heading uses overflow-wrap: break-word and may split phrases awkwardly:",breakWordMatches.length);
  wrapErrors+=breakWordMatches.length;
}

const suspiciousJapaneseEndings=/[、・「『（(／\/\-]$/;
for(const story of storyMatches){
  const slug=story[1];
  const start=story.index;
  const end=storyMatches.find(x=>x.index>start)?.index ?? research.length;
  const block=research.slice(start,end);
  const title=block.match(/title:"([^"]+)"/)?.[1]||"";
  if(suspiciousJapaneseEndings.test(title)){
    console.error("[SUSPICIOUS_HEADLINE_END]",slug,title);
    wrapErrors++;
  }
}

console.log("- headline wrap findings:",wrapErrors);
if(wrapErrors>0){
  console.error("FAIL: headline wrapping quality gate failed.");
  process.exit(1);
}

console.log("PASS: deterministic editorial checks.");