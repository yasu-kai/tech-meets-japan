import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { earlyStageCompanies } from "@/lib/earlyStage";
import { earlyStageProfiles } from "@/lib/earlyStageProfiles";

const featured = ["bridge-neurotech","chargebotic","nori-robotics"] as const;
const profiles: Record<string,{headline:string;opening:string;why:string;challenge:string;status:string;question:string;research:string}> = {
  "bridge-neurotech":{
    headline:"脳に埋め込まないBCIに挑む、新しい研究チーム。",
    opening:"脳の信号を読むために、頭蓋骨へ電極を埋め込む必要はあるのか。Bridge Neurotechは超音波で脳内の血流変化を捉え、意図を読み解く技術を研究している。",
    why:"手術なしで使えるBCIが実現すれば、医療・福祉や新しい入力装置の選択肢が広がる可能性がある。ただし、現在は人対象の観察研究の段階。",
    challenge:"頭蓋骨越しの信号の品質、個人差、装着性、リアルタイム解読の精度が大きな課題。実用化の時期は未確認。",
    status:"研究段階。初回の人対象観察研究を案内している。",
    question:"手術を受けない人でも、日常的な操作に十分な信号が取れるのか。",
    research:"/research/gadgets/bridge-ultrasound-bci"
  },
  "chargebotic":{
    headline:"送電線の磁界を、小さな電源に変えようとしている。",
    opening:"送電線の近くなのに、監視機器や通信装置へ電気を届けるのは難しい。Chargeboticはドローン型の装置を送電線付近へ配置し、磁界から電力を回収する構想に取り組んでいる。",
    why:"山間部の監視センサーや遠隔通信機器では、燃料補給や電池交換の手間を減らせる可能性がある。",
    challenge:"2026年8月の18W実証は企業発表によるもの。実際の送電網での連続運用、安全性、許認可、費用対効果は引き続き検証が必要。",
    status:"実証段階。通電した試験線での給電を公表。",
    question:"本物の電力インフラで、安全かつ継続して使えるのか。",
    research:"/research/materials-energy/chargebotic-kestrel"
  },
  "nori-robotics":{
    headline:"家庭用ロボットを、研究室の外へ届けようとしている。",
    opening:"双腕ロボットは高価で、専門家のいる場所で使うもの。そんな前提を変えようとしているのがNori Roboticsだ。NORI A3は約1,688ドルの価格で、家庭や開発者の手が届くロボットを目指す。",
    why:"ロボット本体に加え、操作・技能学習用のソフトウェアを整え、さまざまな作業を教えられるプラットフォームを目指している。",
    challenge:"用途のデモと、家庭内での安定した作業完遂は別。実出荷の対象・台数、家庭での成功率、安全性、国内サポートは未確認事項。",
    status:"試作から初期供給への移行期。メーカーが販売・出荷予定を案内。",
    question:"場所が変わっても、教えた作業を安全に再現できるのか。",
    research:"/research/robotics/nori-a3"
  }
};
export function generateStaticParams(){return featured.map(id=>({id}));}
export default async function EarlyCompanyProfile({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  if(!featured.includes(id as typeof featured[number])) notFound();
  const c=earlyStageCompanies.find(x=>x.id===id);
  const p=profiles[id];
  const intelligence=earlyStageProfiles[id];
  if(!c||!p||!intelligence) notFound();
  return <><Header/><main style={{background:"#f5f2eb",color:"#18201b"}}>
    <article style={{width:"min(900px,calc(100% - 40px))",margin:"0 auto",padding:"68px 0 100px"}}>
      <Link href="/early-stage" style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:13,fontWeight:700,marginBottom:42}}><ArrowLeft size={16}/> Early-Stageに戻る</Link>
      <p className="eyebrow">EARLY-STAGE / COMPANY PROFILE</p>
      <h1 style={{fontSize:"clamp(40px,6vw,74px)",lineHeight:1.22,letterSpacing:"-.055em",margin:"16px 0 22px",overflowWrap:"normal",wordBreak:"normal"}}>{p.headline}</h1>
      <p style={{fontSize:18,lineHeight:1.85,color:"#58645b",marginBottom:38}}>{c.company} / {c.country}</p>
      <p style={{fontSize:"clamp(18px,2vw,23px)",lineHeight:1.95,maxWidth:820,marginBottom:65}}>{p.opening}</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,270px),1fr))",gap:16,marginBottom:66}}>
        {[{title:"なぜ注目するのか",body:p.why},{title:"いま、どこまで来たか",body:p.status},{title:"次に確かめたいこと",body:p.challenge}].map(b=><section key={b.title} style={{borderTop:"2px solid #202820",padding:"22px 8px"}}><h2 style={{fontSize:21,lineHeight:1.45,margin:"0 0 18px"}}>{b.title}</h2><p style={{lineHeight:1.9,color:"#525c54",fontSize:15}}>{b.body}</p></section>)}
      </div>
      <section style={{marginBottom:70}}>
        <p className="eyebrow" style={{color:"#66776c"}}>THE PEOPLE BEHIND IT</p>
        <h2 style={{fontSize:"clamp(30px,4vw,44px)",lineHeight:1.35,letterSpacing:"-.045em",margin:"14px 0 27px"}}>この挑戦を始めたのは、誰か。</h2>
        {intelligence.people.map(person=><div key={person.name} style={{borderTop:"1px solid #bec8bf",padding:"25px 0 28px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,270px),1fr))",gap:24}}>
          <div><strong style={{fontSize:24,lineHeight:1.4,display:"block"}}>{person.name}</strong><span style={{fontSize:13,color:"#637168"}}>{person.role}</span></div>
          <p style={{fontSize:16,lineHeight:1.9,margin:0,color:"#46544a"}}>{person.story}</p>
        </div>)}
      </section>
      <section style={{background:"#fffdf7",border:"1px solid #d3ddd2",padding:"clamp(22px,4vw,44px)",marginBottom:70}}>
        <p className="eyebrow" style={{color:"#67786b"}}>COMPANY / WHERE THEY STAND</p>
        <h2 style={{fontSize:"clamp(27px,3vw,37px)",lineHeight:1.35,letterSpacing:"-.04em",margin:"14px 0 28px"}}>会社として、どこまで進んだのか。</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,250px),1fr))",gap:26}}>
          <div><h3 style={{fontSize:18,marginBottom:12}}>創業・拠点</h3><p style={{fontSize:15,lineHeight:1.9,color:"#4c5a4e"}}>{intelligence.founding}</p></div>
          <div><h3 style={{fontSize:18,marginBottom:12}}>資金・事業の現状</h3><p style={{fontSize:15,lineHeight:1.9,color:"#4c5a4e"}}>{intelligence.finance}</p></div>
        </div>
      </section>
      <section style={{marginBottom:70}}>
        <p className="eyebrow" style={{color:"#67786b"}}>MILESTONES</p>
        <h2 style={{fontSize:"clamp(28px,3.8vw,42px)",lineHeight:1.4,letterSpacing:"-.045em",margin:"14px 0 24px"}}>始まってから、いままで。</h2>
        {intelligence.progress.map((item,i)=><div key={item.date+i} style={{display:"grid",gridTemplateColumns:"minmax(100px,170px) minmax(0,1fr)",gap:20,borderTop:"1px solid #cbd4cc",padding:"21px 0"}}>
          <strong style={{fontSize:14,lineHeight:1.7}}>{item.date}</strong><p style={{fontSize:15,lineHeight:1.85,margin:0,color:"#4c5b50"}}>{item.event}</p>
        </div>)}
      </section>
      <section style={{marginBottom:68}}>
        <p className="eyebrow" style={{color:"#67786b"}}>JAPAN / THE BUSINESS QUESTION</p>
        <h2 style={{fontSize:"clamp(28px,3.8vw,42px)",lineHeight:1.35,letterSpacing:"-.045em",margin:"14px 0 26px"}}>日本と、どうつながりそうか。</h2>
        {intelligence.market.map((line,i)=><p key={i} style={{fontSize:16,lineHeight:1.95,color:"#4b584d",margin:"0 0 20px"}}>{line}</p>)}
        <p style={{fontSize:17,lineHeight:1.9,fontWeight:700,borderLeft:"3px solid #f4512c",paddingLeft:18,marginTop:26}}>{intelligence.takeaway}</p>
      </section>
      <section style={{background:"#193f3d",color:"white",padding:"clamp(25px,5vw,55px)",marginBottom:60}}>
        <p className="eyebrow" style={{color:"#d6ff39"}}>THE NEXT QUESTION</p>
        <h2 style={{fontSize:"clamp(27px,3.5vw,43px)",lineHeight:1.45,letterSpacing:"-.04em",margin:"18px 0 28px"}}>{p.question}</h2>
        <Link href={p.research} style={{display:"inline-flex",gap:10,alignItems:"center",fontWeight:800,color:"#d6ff39"}}>技術の仕組みと競合を詳しく読む <ArrowRight size={18}/></Link>
      </section>
      <section><h2 style={{fontSize:23,marginBottom:20}}>公式情報を確認する</h2><p style={{lineHeight:1.8,color:"#5c685f",marginBottom:16}}>会社の発表に基づく内容と、編集部の用途仮説を区別しています。国内での提携意向・販売体制は確認できていません。</p>
      <a href={c.website} target="_blank" rel="noreferrer" style={{display:"inline-flex",gap:8,alignItems:"center",textDecoration:"underline",fontWeight:750}}>企業公式サイト <ExternalLink size={15}/></a>
      <p style={{fontSize:13,color:"#67746b",lineHeight:1.8,marginTop:23}}>{intelligence.disclosure}</p>
      <div style={{marginTop:20}}>{intelligence.sources.map((e,i)=><p key={e.url} style={{margin:"14px 0",fontSize:14,color:"#56665c",overflowWrap:"anywhere"}}><a href={e.url} target="_blank" rel="noreferrer" style={{textDecoration:"underline"}}>{String(i+1).padStart(2,"0")} / {e.label} <ExternalLink size={12}/></a></p>)}</div>
      <p style={{fontSize:12,color:"#718076",marginTop:22}}>情報確認日：2026年10月22日。情報は更新される可能性があります。</p>
      </section>
    </article>
  </main><Footer/></>;
}
