import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Clapperboard, Factory, Radar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const reports = [
  { icon:<Clapperboard/>, eyebrow:"AI CREATIVE", title:"生成動画“第二ラウンド”をどう見るか。", copy:"Runway、MiniMax、HeyGen、Synthesia。モデル性能ではなく、日本企業にとっての用途・導入難易度・商用性で比較する。", href:"/companies" },
  { icon:<Factory/>, eyebrow:"PHYSICAL AI", title:"日本の製造業が買うべきAIはどこにある。", copy:"Applied Intuition、Wayve、RLWRLD、Exotec。内製R&Dが強い日本企業でも外部テックを買う意味がある領域を整理。", href:"/companies" },
  { icon:<Bot/>, eyebrow:"AI AGENTS", title:"“チャットボットの次”を選ぶ。", copy:"顧客対応、金融、物流。回答するAIではなく、業務を実行するAI Agentを用途別に見る。", href:"/companies" },
  { icon:<Radar/>, eyebrow:"ENTRY SIGNALS", title:"日本参入の兆しをどう読むか。", copy:"採用、提携、PoC、販売開始。海外テックが日本へ本気で入り始めたシグナルを時系列で追う。", href:"/signals" },
];

export default function ResearchPage() {
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <p className="eyebrow">RESEARCH</p>
          <h1>世界のテックを、<br/>日本で使う目線で読む。</h1>
          <p>ニュースの要約ではなく、「誰に向くか」「何と比較すべきか」「今検討する価値があるか」まで整理した独自リサーチ。</p>
        </section>

        <section className="section section-tight">
          <div className="research-grid">
            {reports.map(report => (
              <Link href={report.href} className="research-card" key={report.title}>
                {report.icon}
                <p className="eyebrow">{report.eyebrow}</p>
                <h3>{report.title}</h3>
                <p>{report.copy}</p>
                <strong>読む <ArrowRight size={15}/></strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="split-section">
          <div>
            <p className="eyebrow">HOW WE READ</p>
            <h2>企業紹介ではなく、<br/>導入判断材料にする。</h2>
          </div>
          <div>
            <ul className="plain-list">
              <li>日本市場で既に何が起きているか</li>
              <li>どんな企業・部門に向くか</li>
              <li>最初に試すならどこか</li>
              <li>何と比較すべきか</li>
              <li>導入前に見るべきリスクは何か</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
