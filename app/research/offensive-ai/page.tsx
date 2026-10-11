import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Bot, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cycle = [
  { company:"XBOW", attack:"AI", find:"AI", plan:"AI支援", decide:"人間", execute:"人間", verify:"AI", depth:3, note:"AI Pentester。攻撃・発見・再検証までをAI化し、修正判断と適用は人間側。" },
  { company:"MindFort", attack:"AI", find:"AI", plan:"AI", decide:"人間", execute:"AI", verify:"AI", depth:4, note:"AI Security Engineerに近い。PR・Cloud/Infra修正までAgentが実行し、Human approvalを挟む。" },
  { company:"Pentera", attack:"AI / 自動", find:"AI / 自動", plan:"AI支援", decide:"人間", execute:"人間 / 外部Workflow", verify:"自動", depth:3, note:"企業全体のExposure Validation OS。攻撃・優先順位・再検証を自動化し、既存SecOpsを動かす。" },
  { company:"Horizon3 / NodeZero", attack:"自動", find:"自動", plan:"AI / 自動支援", decide:"人間", execute:"人間", verify:"自動", depth:3, note:"Attack Pathの証明に強い。Credential・権限・Critical Assetまで実際に辿る。" },
  { company:"Synack Sara", attack:"AI", find:"AI＋人間", plan:"AI＋人間", decide:"人間", execute:"人間", verify:"AI＋人間", depth:3, note:"Human validationを意図的に残す。AIが広く探し、人間が『本当に重要か』を証明する。" },
  { company:"Terra", attack:"AI", find:"AI＋人間監督", plan:"AI＋人間", decide:"人間", execute:"人間", verify:"AI中心", depth:3, note:"Human-on-the-loop。AIの速度を使いつつ、本番環境での安全性と判断を人間が統制。" },
  { company:"AgenticSec", attack:"AI", find:"AI", plan:"AI支援", decide:"人間", execute:"現状は人間中心", verify:"AI化志向", depth:3, note:"継続的なAI Pentest。初期侵入〜PoC実証を自動化し、履歴を次回検証へ活かす。" },
];

const companyFocus: Record<string,string> = {
  "XBOW":"攻撃と再検証に徹する",
  "MindFort":"修正案の実行まで踏み込む",
  "Pentera":"企業全体の攻撃検証を仕組み化",
  "Horizon3 / NodeZero":"侵入経路を実証する",
  "Synack Sara":"AIの探索を人間が検証する",
  "Terra":"AIを人間の監督下で動かす",
  "AgenticSec":"初期侵入の検証を自動化する",
};

const automationTone = (value:string) => {
  const v = value.replace(/\s/g,"");
  if (v === "人間" || v.includes("人間中心") || v.startsWith("人間/") || v.startsWith("人間＋")) return "tone-human";
  if (v.includes("AI＋人間監督")) return "tone-supervised";
  if (v.includes("AI＋人間")) return "tone-hybrid";
  if (v.includes("AI支援") || v.includes("AI/自動支援")) return "tone-assist";
  if (v === "AI") return "tone-ai";
  if (v.includes("AI/自動") || v.includes("AI＋自動")) return "tone-ai-auto";
  if (v.includes("AI中心")) return "tone-ai-centered";
  if (v === "自動") return "tone-auto";
  return "tone-neutral";
};

const depthLevels = [
  ["Level 1","発見だけ","Scanner / Detection"],
  ["Level 2","攻撃まで","Exploitability validation"],
  ["Level 3","対策提案まで","Remediation guidance"],
  ["Level 4","修正実行まで","PR / Config change / Apply"],
  ["Level 5","自律意思決定まで","Policy-based autonomous defense"],
];

export default function OffensiveAIResearchPage(){
  return (
    <>
      <Header/>
      <main>
        <section className="offsec-hero">
          <div className="offsec-hero-art">
            <img src="/offensive-ai-hero.png" alt="AI攻撃側とAI防御側が中央のインフラを巡って対峙し、人間が承認を担う構図" />
          </div>
          <Link href="/research" className="research-back"><ArrowLeft size={14}/> Research</Link>
          <p className="eyebrow">OFFENSIVE AI / MARKET MAP</p>
          <h1>AIは、サイバー防御の<br/>どこまでを奪うのか。</h1>
          <p className="offsec-lead">見るべきは「AIでPentestできるか」ではない。<strong>攻撃 → 発見 → 対策 → 判断 → 実行 → 再検証</strong>の6工程のうち、どこまでAIに権限を渡しているかだ。</p>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">THE CYCLE</p><h2>見るべきサイクルは、これ。</h2></div><RefreshCw size={28}/></div>
          <div className="cycle-visual">
            <div className="cycle-track" aria-hidden="true"></div>
            {[
              {no:"01",jp:"擬似攻撃",en:"ATTACK",desc:"侵入経路を探す"},
              {no:"02",jp:"ホール発見",en:"DISCOVER",desc:"突破可能性を証明"},
              {no:"03",jp:"対応策策定",en:"PLAN",desc:"どう塞ぐかを決める"},
              {no:"04",jp:"意思決定",en:"DECIDE",desc:"止める・直す・許容する",decision:true},
              {no:"05",jp:"実行",en:"EXECUTE",desc:"修正・設定変更・Deploy"},
              {no:"06",jp:"再検証",en:"RE-ATTACK",desc:"本当に塞がったか再攻撃"}
            ].map((x,i)=>
              <div className={"cycle-node "+(x.decision?"cycle-decision":"")} key={x.no}>
                <div className="cycle-node-top"><span>{x.no}</span><b>{x.en}</b></div>
                <div className="cycle-dot">{i+1}</div>
                <strong>{x.jp}</strong>
                <p>{x.desc}</p>
                {x.decision && <small>HUMAN DECISION BOUNDARY</small>}
              </div>
            )}
            <div className="cycle-return" aria-hidden="true">
              <span>RE-ATTACK LOOP</span>
              <div className="cycle-return-line"></div>
              <RefreshCw size={18}/>
            </div>
          </div>
          <p className="cycle-thesis">本質は、<strong>「各工程を誰が担うか」</strong>。同じ“AI Pentest”でも、攻撃だけAI化する会社と、修正までAIに任せる会社では思想がまったく違う。</p>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">AUTOMATION MATRIX</p><h2>AIは、どこを担うのか。</h2></div><Bot size={28}/></div>
          <div className="automation-table">
            <div className="automation-head"><span>社名</span><span>① 擬似攻撃</span><span>② ホール発見</span><span>③ 対応策</span><span>④ 意思決定</span><span>⑤ 実行</span><span>⑥ 再検証</span></div>
            {cycle.map(x=><div className="automation-row" key={x.company}>
              <strong>{x.company}</strong>
              <span className={automationTone(x.attack)}>{x.attack}</span>
              <span className={automationTone(x.find)}>{x.find}</span>
              <span className={automationTone(x.plan)}>{x.plan}</span>
              <span className={automationTone(x.decide)}>{x.decide}</span>
              <span className={automationTone(x.execute)}>{x.execute}</span>
              <span className={automationTone(x.verify)}>{x.verify}</span>
            </div>)}
          </div>
          <div className="research-note">公開情報をもとにしたTECH MEETS JAPANの整理。製品アップデートや契約形態によって自動化範囲は変わり得る。</div>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">COMPANY READ</p><h2>同じAIでも、担い方が違う。</h2></div><ShieldCheck size={28}/></div>
          <div className="offsec-company-grid">
            {cycle.map(x=><article key={x.company}>
              <div className="offsec-company-head" style={{alignItems:"center"}}><h3 style={{fontSize:"clamp(13px, 1.15vw, 15px)",fontWeight:700,color:"#77746e",letterSpacing:"0.01em"}}>{x.company}</h3><span>Depth {x.depth}/5</span></div>
              <h4 style={{fontSize:"clamp(19px, 2.05vw, 27px)",lineHeight:1.35,fontWeight:800,letterSpacing:"-0.035em",margin:"14px 0 9px",color:"#171715"}}>{companyFocus[x.company]}</h4>
              <p style={{fontSize:"14px",lineHeight:1.75,color:"#5c5a56",marginBottom:"15px"}}>{x.note}</p>
              <div className="offsec-mini-flow">
                <span>{x.attack}</span><ArrowRight size={12}/><span>{x.find}</span><ArrowRight size={12}/><span>{x.plan}</span><ArrowRight size={12}/><span>{x.execute}</span><ArrowRight size={12}/><span>{x.verify}</span>
              </div>
            </article>)}
          </div>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">AUTOMATION DEPTH</p><h2>人は、「どこまでAIに権限を渡すべきか」</h2></div><Zap size={28}/></div>
          <div className="depth-journey">
            <div className="depth-journey-top"><span>LESS AUTONOMY</span><span>AIの裁量と責任が広がる <ArrowRight size={16}/></span><span>MORE AUTONOMY</span></div>
            <div className="depth-journey-rail" aria-hidden="true"><div className="depth-journey-progress"/></div>
            <div className="depth-journey-stages">
              {depthLevels.map(([level,title,desc],i)=>
                <div key={level} className={"depth-stage "+(i===3?"depth-stage-pivot ":"")+(i===4?"depth-stage-future":"")}>
                  <div className="depth-stage-marker"><span>{String(i+1).padStart(2,"0")}</span></div>
                  <div className="depth-stage-copy"><small>{level}</small><strong>{title}</strong><p>{desc}</p></div>
                  {i===3 && <div className="depth-pivot-label">実行権限の境界</div>}
                </div>
              )}
            </div>
            <div className="depth-journey-foot"><span>AIが見つけ、提案する</span><span>AIが実際に変更を加える</span><span>AIが判断まで担う</span></div>
          </div>
          <div className="offsec-callout">
            <p className="eyebrow">THE SHIFT</p>
            <h3>“PentestをAI化できるか” から、<br/>“Cybersecurity LifecycleのどこまでAIに権限を渡せるか”へ。</h3>
            <p>攻撃・発見・対策・再検証は急速にAI化できる。一方で、Revenue影響、停止リスク、Risk acceptance、Deploy timingのようなBusiness contextを含む意思決定は、今もHuman側に残る。</p>
          </div>
        </section>

        <section className="section section-tight">
          <div className="future-state">
            <p className="eyebrow">WHERE THIS GOES</p>
            <h2>人間の仕事は「防御」から、<br/>「AIによるサイバー防御の権限設計」へ。</h2>
            <p className="future-intro">守り方が変わる。人間は作業の担い手から、AIに与える権限と境界を決める側へ。</p>
            <div className="future-evolution">
              <div className="future-phase future-phase-now">
                <div className="future-phase-label"><span className="future-phase-index">01 / 現在</span><strong>NOW</strong><p>AIが見つけ、人が直す</p></div>
                <div className="future-phase-body">
                  <div className="future-actors"><span className="future-chip future-chip-ai">AIが攻撃・発見</span><ArrowRight size={16}/><span className="future-chip future-chip-human">人間が判断・修正</span><ArrowRight size={16}/><span className="future-chip future-chip-ai">AIが再検証</span></div>
                  <p>攻撃と検証はAIに任せる。修正の判断も作業も、人間が担う。</p>
                </div>
              </div>
              <div className="future-phase future-phase-next">
                <div className="future-phase-label"><span className="future-phase-index">02 / 次の段階</span><strong>NEXT</strong><p>人が承認し、AIが直す</p></div>
                <div className="future-phase-body">
                  <div className="future-actors"><span className="future-chip future-chip-ai">AIが攻撃・対策提案</span><ArrowRight size={16}/><span className="future-chip future-chip-human">人間が承認</span><ArrowRight size={16}/><span className="future-chip future-chip-ai">修正AIが実行</span><ArrowRight size={16}/><span className="future-chip future-chip-proof">攻撃AIが再検証</span></div>
                  <p>修正作業もAIへ。ただし、適用の可否は人間が判断する。</p>
                </div>
              </div>
              <div className="future-phase future-phase-future">
                <div className="future-phase-label"><span className="future-phase-index">03 / 将来像</span><strong>FUTURE</strong><p>人は権限とルールを設計する</p></div>
                <div className="future-phase-body">
                  <div className="future-actors"><span className="future-chip future-chip-human">人間が権限・条件を設定</span><ArrowRight size={16}/><span className="future-chip future-chip-ai">AIが条件内で判断・実行</span><ArrowRight size={16}/><span className="future-chip future-chip-proof">独立した攻撃AIが検証</span></div>
                  <p>承認済みの範囲ではAIが自律処理。例外・高リスク変更は人間に戻す。</p>
                </div>
              </div>
            </div>
            <div className="future-principle"><ShieldCheck size={18}/><span>一貫する原則：<strong>攻撃・検証するAIと、修正を実行するAIは分ける。</strong></span></div>
          </div>
        </section>

        <section className="offsec-conclusion">
          <div>
            <p className="eyebrow">EDITORIAL TAKE</p>
            <h2>XBOWは「AI Pentester」。<br/>MindFortは「AI Security Engineer」へ。</h2>
          </div>
          <p>この軸で見ると、単なる“攻撃自動化”よりも、修正実行まで踏み込むプレーヤーの意味が見えやすくなる。TECH MEETS JAPANでは今後、機能数ではなく<strong>Automation Depth</strong>でOffensive AI市場を追う。</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}
