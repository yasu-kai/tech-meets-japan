export type AuditSeverity = "error"|"warning"|"info";
export type AuditFinding = { severity:AuditSeverity; code:string; product?:string; field?:string; message:string; evidence?:string; };

const GENERIC_PATTERNS=[
  "主要入力をそのまま取り込む",
  "既存Workflowから段階的に接続可能",
  "人が確認・再利用できる成果物として返す",
  "定型作業の工数を削減",
  "単機能ではなく業務サイクル内で評価する",
  "PoCでは人手との比較を取る",
  "複数ツール間の手作業を圧縮",
];

const VAGUE_TOKENS=["効率化","最適化","高度化","強い","便利","高品質","柔軟","スケール","一気通貫","シームレス"];

const flattenStrings=(value:any,path="",out:{path:string;text:string}[]=[]):{path:string;text:string}[]=>{
  if(value==null) return out;
  if(typeof value==="string"){ out.push({path,text:value}); return out; }
  if(Array.isArray(value)){ value.forEach((v,i)=>flattenStrings(v,path+"["+i+"]",out)); return out; }
  if(typeof value==="object"){ Object.entries(value).forEach(([k,v])=>flattenStrings(v,path?path+"."+k:k,out)); }
  return out;
};

const normalize=(s:string)=>s.toLowerCase().replace(/[。、，,.!！?？「」『』（）()【】\[\]\s]/g,"");
const ngrams=(s:string,n=18)=>{ const t=normalize(s); const set=new Set<string>(); for(let i=0;i<=t.length-n;i++) set.add(t.slice(i,i+n)); return set; };
const overlapScore=(a:string,b:string)=>{ const A=ngrams(a),B=ngrams(b); if(!A.size||!B.size) return 0; let common=0; for(const x of A) if(B.has(x)) common++; return common/Math.min(A.size,B.size); };

const productSpecificTokens=(product:any)=>{
  const tokens=new Set<string>();
  [product.name,product.provider,product.slug,...(product.tags||[]),...(product.useCases||[])].filter(Boolean).forEach((v:any)=>{
    String(v).split(/[\s/・,，()（）-]+/).filter((x:string)=>x.length>=3).forEach((x:string)=>tokens.add(x.toLowerCase()));
  });
  return [...tokens];
};

export function auditCatalog(products:any[]):AuditFinding[]{
  const findings:AuditFinding[]=[];
  const corpus=products.map(p=>({slug:p.slug,strings:flattenStrings(p)}));
  for(const p of products){
    const strings=flattenStrings(p);
    const allText=strings.map(x=>x.text).join("\n");
    const specific=productSpecificTokens(p);
    const decision=p.decision;

    for(const pattern of GENERIC_PATTERNS){
      if(allText.includes(pattern)) findings.push({severity:"error",code:"GENERIC_FILLER",product:p.slug,message:"共通テンプレ文が残っています: 「"+pattern+"」",evidence:pattern});
    }

    (decision?.capabilities||[]).forEach((cap:any,i:number)=>{
      const combined=[cap.label,cap.detail,cap.input,cap.output,cap.replaces,cap.whyItMatters].filter(Boolean).join(" ");
      const specificHits=specific.filter(t=>combined.toLowerCase().includes(t)).length;
      const vagueHits=VAGUE_TOKENS.filter(t=>combined.includes(t)).length;
      if(specificHits===0 && combined.length>60) findings.push({severity:"warning",code:"LOW_PRODUCT_SPECIFICITY",product:p.slug,field:"decision.capabilities["+i+"]",message:"「何ができる」の説明に製品固有語がほぼありません。別製品名へ置換しても成立する可能性があります。",evidence:combined.slice(0,180)});
      if(vagueHits>=2) findings.push({severity:"warning",code:"VAGUE_CAPABILITY",product:p.slug,field:"decision.capabilities["+i+"]",message:"抽象語が多く、具体的な入出力・置換作業が弱いです。",evidence:combined.slice(0,180)});
      if(cap.level==="固有" && !(decision?.evidence||[]).some((e:any)=>typeof e.source==="string" && e.source.startsWith("http"))) findings.push({severity:"error",code:"UNSUPPORTED_UNIQUE",product:p.slug,field:"decision.capabilities["+i+"]",message:"「固有」判定なのに公式根拠URLがありません。"});
    });

    (decision?.differentiators||[]).forEach((d:any,i:number)=>{
      if((d.comparedWith||[]).length===0) findings.push({severity:"warning",code:"NO_COMPARISON_TARGET",product:p.slug,field:"decision.differentiators["+i+"]",message:"差別化項目なのに比較対象がありません。"});
      if(d.level==="固有" && !d.evidence) findings.push({severity:"error",code:"UNSUPPORTED_UNIQUE",product:p.slug,field:"decision.differentiators["+i+"]",message:"「固有」なのに根拠Sourceがありません。"});
    });

    const sourceUrls=[...(decision?.evidence||[]).map((x:any)=>x.source),...(decision?.differentiators||[]).map((x:any)=>x.evidence)].filter((x:any)=>typeof x==="string" && x.startsWith("http"));
    if(sourceUrls.length===0) findings.push({severity:"error",code:"NO_OFFICIAL_SOURCE",product:p.slug,message:"公式URLの根拠がありません。"});
  }

  for(let i=0;i<corpus.length;i++){
    for(let j=i+1;j<corpus.length;j++){
      const A=corpus[i],B=corpus[j];
      for(const a of A.strings.filter(x=>x.text.length>=70)){
        let best=0,bestText="";
        for(const b of B.strings.filter(x=>x.text.length>=70)){ const score=overlapScore(a.text,b.text); if(score>best){best=score;bestText=b.text;} }
        if(best>=0.82) findings.push({severity:best>=0.92?"error":"warning",code:"CROSS_PRODUCT_DUPLICATION",product:A.slug,field:a.path,message:B.slug+" と高い文章重複 ("+Math.round(best*100)+"%)。商品名を差し替えただけの可能性があります。",evidence:"A: "+a.text.slice(0,150)+" / B: "+bestText.slice(0,150)});
      }
    }
  }
  return findings;
}

export const auditScore=(findings:AuditFinding[])=>Math.max(0,100-findings.reduce((n,f)=>n+(f.severity==="error"?12:f.severity==="warning"?5:1),0));

export const editorialAuditPrompt=[
  "あなたはTECH MEETS JAPANの独立AI監査役です。執筆者ではありません。文章を良く見せる提案より、誤り・一般論・比較不成立・根拠不足を発見することを優先してください。",
  "",
  "監査原則:",
  "1. 製品名を競合名へ置換しても成立する文章は、原則として不合格候補。",
  "2. 「固有」は、競合では実現困難であることを公式情報または明確な比較根拠で説明できる場合のみ許可。",
  "3. 「特に強い」は、同機能を競合も持つ前提で、なぜこの製品が強いかを具体的に説明できる場合のみ許可。",
  "4. Pricing / 日本語 / Support / Enterprise / Security は、推測を事実として書かない。",
  "5. 比較はAを選ぶ条件 / Bを選ぶ条件 / 比較対象として同列か、まで判定する。",
  "6. INPUT / OUTPUT / REPLACES は実際に何を入れ、何が出て、どの人手・Tool・工程が減るかを書く。",
  "7. 情報量が多くても、新しい事実や判断材料が増えていなければ低品質と判定する。",
  "8. 公式Sourceに書いていない内容を断定しない。推定なら推定と明記する。",
  "9. 編集側の意図・文章を尊重する必要はない。独立して判定する。",
  "10. 問題がなければ無理に問題を作らない。",
  "",
  "出力: verdict / score / blocking_findings / warnings / generic_text / unsupported_claims / comparison_failures / required_fixes"
].join("\n");