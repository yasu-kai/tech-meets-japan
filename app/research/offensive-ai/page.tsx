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
          <div className="cycle-flow">
            {["① 擬似攻撃","② ホール発見","③ 対応策策定","④ 意思決定","⑤ 実行","⑥ 再検証"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong>{i<5 && <ArrowRight size={16}/>}</div>)}
          </div>
          <p className="cycle-thesis">本質は、<strong>「各工程を誰が担うか」</strong>。同じ“AI Pentest”でも、攻撃だけAI化する会社と、修正までAIに任せる会社では思想がまったく違う。</p>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">AUTOMATION MATRIX</p><h2>誰が、どこまでやるのか。</h2></div><Bot size={28}/></div>
          <div className="automation-table">
            <div className="automation-head"><span>会社</span><span>① 擬似攻撃</span><span>② ホール発見</span><span>③ 対応策</span><span>④ 意思決定</span><span>⑤ 実行</span><span>⑥ 再検証</span></div>
            {cycle.map(x=><div className="automation-row" key={x.company}>
              <strong>{x.company}</strong><span>{x.attack}</span><span>{x.find}</span><span>{x.plan}</span><span className="human-cell">{x.decide}</span><span>{x.execute}</span><span>{x.verify}</span>
            </div>)}
          </div>
          <div className="research-note">公開情報をもとにしたTECH MEETS JAPANの整理。製品アップデートや契約形態によって自動化範囲は変わり得る。</div>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">COMPANY READ</p><h2>同じ市場に見えて、思想が違う。</h2></div><ShieldCheck size={28}/></div>
          <div className="offsec-company-grid">
            {cycle.map(x=><article key={x.company}>
              <div className="offsec-company-head"><h3>{x.company}</h3><span>Depth {x.depth}/5</span></div>
              <p>{x.note}</p>
              <div className="offsec-mini-flow">
                <span>{x.attack}</span><ArrowRight size={12}/><span>{x.find}</span><ArrowRight size={12}/><span>{x.plan}</span><ArrowRight size={12}/><span>{x.execute}</span><ArrowRight size={12}/><span>{x.verify}</span>
              </div>
            </article>)}
          </div>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">AUTOMATION DEPTH</p><h2>競争は「どこまで権限を渡すか」へ。</h2></div><Zap size={28}/></div>
          <div className="depth-scale">
            {depthLevels.map(([level,title,desc],i)=><div key={level} className={i===3?"depth-highlight":""}><span>{level}</span><strong>{title}</strong><p>{desc}</p></div>)}
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
            <h2>人間の仕事は「直す」から、<br/>「AI防衛軍の権限設計」へ。</h2>
            <div className="future-lanes">
              <div><span>NOW</span><p>AI攻撃 → AI発見 → 人間判断 → 人間修正 → AI検証</p></div>
              <div><span>NEXT</span><p>AI攻撃 → AI発見 → AI対策案 → 人間承認 → AI修正 → AI検証</p></div>
              <div><span>FURTHER</span><p>AI攻撃 → AI発見 → AIリスク評価 → PolicyでAI判断 → AI修正 → AI検証</p></div>
            </div>
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
