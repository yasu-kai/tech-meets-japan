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

console.log("PASS: deterministic editorial checks.");