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
          <div className="offsec-hero-art offsec-svg-hero" aria-label="AI offense versus AI defense">
            <svg viewBox="0 0 1600 720" role="img" aria-label="AI攻撃側とAI防御側が中央のインフラを巡って対峙し、人間が承認を担う構図">
              <defs>
                <linearGradient id="offBg" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#120506"/>
                  <stop offset="46%" stopColor="#111319"/>
                  <stop offset="54%" stopColor="#111319"/>
                  <stop offset="100%" stopColor="#03101a"/>
                </linearGradient>
                <radialGradient id="redGlow"><stop offset="0%" stopColor="#ff3b24" stopOpacity=".9"/><stop offset="100%" stopColor="#ff3b24" stopOpacity="0"/></radialGradient>
                <radialGradient id="blueGlow"><stop offset="0%" stopColor="#2aa8ff" stopOpacity=".9"/><stop offset="100%" stopColor="#2aa8ff" stopOpacity="0"/></radialGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <rect width="1600" height="720" fill="url(#offBg)"/>
              <circle cx="220" cy="350" r="320" fill="url(#redGlow)" opacity=".55"/>
              <circle cx="1380" cy="350" r="320" fill="url(#blueGlow)" opacity=".55"/>

              <text x="90" y="90" fill="#ff5a42" fontSize="32" fontWeight="800">OFFENSE AI</text>
              <text x="1510" y="90" fill="#66c9ff" fontSize="32" fontWeight="800" textAnchor="end">DEFENSE AI</text>
              <text x="800" y="105" fill="white" fontSize="84" fontWeight="900" textAnchor="middle">AI <tspan fill="#9ea4ad">vs</tspan> AI</text>
              <text x="800" y="150" fill="#d9dce1" fontSize="22" fontWeight="700" textAnchor="middle">サイバー防御は「人間が戦う世界」から終わり始めている。</text>

              <g stroke="#ff4b33" strokeWidth="4" fill="none" opacity=".9" filter="url(#glow)">
                <path d="M100 250 C360 210 520 280 710 330"/>
                <path d="M100 360 C360 330 520 360 710 360"/>
                <path d="M100 470 C360 520 520 430 710 390"/>
              </g>
              <g stroke="#43b8ff" strokeWidth="4" fill="none" opacity=".9" filter="url(#glow)">
                <path d="M1500 250 C1240 210 1080 280 890 330"/>
                <path d="M1500 360 C1240 330 1080 360 890 360"/>
                <path d="M1500 470 C1240 520 1080 430 890 390"/>
              </g>

              <g transform="translate(670 230)">
                <rect x="0" y="0" width="260" height="250" rx="18" fill="#111820" stroke="#d7e8ff" strokeWidth="2"/>
                <rect x="38" y="35" width="184" height="130" rx="10" fill="#172533" stroke="#62c4ff" strokeWidth="2"/>
                <path d="M130 62 l44 20 v40 c0 34-22 56-44 70-22-14-44-36-44-70v-40z" fill="none" stroke="#62c4ff" strokeWidth="4"/>
                <path d="M112 123 l14 14 28-34" fill="none" stroke="#62c4ff" strokeWidth="5"/>
                <text x="130" y="210" fill="#fff" fontSize="24" fontWeight="800" textAnchor="middle">CORE INFRA</text>
              </g>

              <g fill="#ff4b33">
                <circle cx="180" cy="250" r="34"/><circle cx="270" cy="330" r="29"/><circle cx="190" cy="430" r="38"/><circle cx="330" cy="470" r="24"/>
              </g>
              <g fill="#43b8ff">
                <circle cx="1420" cy="250" r="34"/><circle cx="1330" cy="330" r="29"/><circle cx="1410" cy="430" r="38"/><circle cx="1270" cy="470" r="24"/>
              </g>

              <g fontSize="19" fontWeight="800" fill="white">
                <text x="95" y="230">RECON</text><text x="95" y="300">EXPLOIT</text><text x="95" y="370">LATERAL MOVE</text><text x="95" y="440">IMPACT</text>
                <text x="1505" y="230" textAnchor="end">DETECT</text><text x="1505" y="300" textAnchor="end">REMEDIATE</text><text x="1505" y="370" textAnchor="end">IMPLEMENT</text><text x="1505" y="440" textAnchor="end">VERIFY</text>
              </g>

              <g transform="translate(595 515)">
                <rect width="410" height="120" rx="14" fill="#0d1117" stroke="#7f8790"/>
                <text x="205" y="34" fill="#fff" fontSize="18" fontWeight="900" textAnchor="middle">HUMAN ROLE</text>
                <text x="205" y="64" fill="#cfd4db" fontSize="16" textAnchor="middle">Approve / Reject · Risk Tolerance</text>
                <text x="205" y="88" fill="#cfd4db" fontSize="16" textAnchor="middle">Business Impact · When to Deploy</text>
              </g>

              <text x="85" y="655" fill="#ff6a55" fontSize="18" fontWeight="900">攻撃 → 発見 → 対策 → 判断 → 実行 → 再検証</text>
              <text x="1515" y="655" fill="#ffffff" fontSize="18" fontWeight="800" textAnchor="end">TECH <tspan fill="#ff4b33">MEETS</tspan> JAPAN</text>
            </svg>
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
