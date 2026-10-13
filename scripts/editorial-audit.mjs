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



const offsecPage=readFileSync("app/research/offensive-ai/page.tsx","utf8");
const semanticMobileHeadlineCount=(offsecPage.match(/className="offsec-mobile-line"/g)||[]).length;
if(semanticMobileHeadlineCount<10){
  console.error("[MOBILE_SEMANTIC_BREAKS] Offensive AI has too few semantic mobile headline segments:",semanticMobileHeadlineCount);
  process.exit(1);
}



const productCss=readFileSync("app/globals.css","utf8");
const densityMarker=productCss.lastIndexOf("/* Mobile product intelligence density */");
const mobileDensityCss=densityMarker>=0?productCss.slice(densityMarker):"";
if(!mobileDensityCss.includes(".capability-detail-grid>div{") || !mobileDensityCss.includes("min-height:0!important;")){
  console.error("[MOBILE_DENSITY_FAIL] compact mobile capability override is missing.");
  process.exit(1);
}
if(/\.capability-detail-grid>div\s*\{[^}]*min-height\s*:\s*(?:1[2-9]\d|[2-9]\d\d)px/.test(mobileDensityCss)){
  console.error("[MOBILE_DENSITY_FAIL] excessive fixed min-height remains inside the mobile density block.");
  process.exit(1);
}
if(!productCss.includes(".fit-diagnostic article{min-height:0!important;}")){
  console.error("[MOBILE_DENSITY_FAIL] fit diagnostic cards can still retain excessive mobile height.");
  process.exit(1);
}



const catalogSource=readFileSync("lib/productCatalog.ts","utf8");
const capabilityTuples=[...catalogSource.matchAll(/\["([^"]+)","([^"]+)","([^"]+)","([^"]+)","([^"]+)","([^"]+)"\]/g)]
  .map(m=>({label:m[1],detail:m[2],input:m[3],output:m[4],replaces:m[5],why:m[6]}))
  .filter(x=>!["Human Only","AI Assistant","AI Analyst","AI Agent","Human-on-the-loop","Autonomous Closed Loop"].includes(x.label));

let contentShapeFindings=0;
const tooLong=(s,max)=>s.length>max;
const emptyish=s=>!s || s.trim().length<2;
const norm=s=>s.toLowerCase().replace(/[\s。、，,.・／/()（）「」『』:_-]/g,"");

for(const cap of capabilityTuples){
  const fields=[["detail",cap.detail],["input",cap.input],["output",cap.output],["replaces",cap.replaces],["why",cap.why]];
  for(const [name,value] of fields){
    if(emptyish(value)){
      console.error("[CONTENT_SHAPE_FAIL]",cap.label,name,"is empty or meaningless");
      contentShapeFindings++;
    }
  }

  if(tooLong(cap.input,60)){
    console.error("[CONTENT_OVERWRITTEN]",cap.label,"input is too verbose:",cap.input.length);
    contentShapeFindings++;
  }
  if(tooLong(cap.output,60)){
    console.error("[CONTENT_OVERWRITTEN]",cap.label,"output is too verbose:",cap.output.length);
    contentShapeFindings++;
  }
  if(tooLong(cap.replaces,70)){
    console.error("[CONTENT_OVERWRITTEN]",cap.label,"replaces is too verbose:",cap.replaces.length);
    contentShapeFindings++;
  }
  if(tooLong(cap.why,90)){
    console.error("[CONTENT_OVERWRITTEN]",cap.label,"why is too verbose:",cap.why.length);
    contentShapeFindings++;
  }

  const values=[cap.input,cap.output,cap.replaces,cap.why].map(norm);
  for(let i=0;i<values.length;i++){
    for(let j=i+1;j<values.length;j++){
      if(values[i] && values[i]===values[j]){
        console.error("[CONTENT_REDUNDANCY]",cap.label,"two fields say effectively the same thing");
        contentShapeFindings++;
      }
    }
  }
}

console.log("- capability content-shape findings:",contentShapeFindings);
if(contentShapeFindings>0){
  console.error("FAIL: capability text quantity/content shape needs editorial revision.");
  process.exit(1);
}

console.log("PASS: deterministic editorial checks.");