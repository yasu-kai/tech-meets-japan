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
console.log("PASS: deterministic editorial checks.");