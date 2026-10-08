import { ArrowRight, BarChart3, Crosshair, Network, SearchCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function ResearchPage() {
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <p className="eyebrow">JAPAN ENTRY RESEARCH</p>
          <h1>「日本で売れるか」を、<br/>進出する前に考える。</h1>
          <p>公開情報のまとめではなく、日本市場の競争構造・顧客候補・商流まで落とした参入判断材料を作ります。</p>
        </section>
        <section className="section section-tight">
          <div className="research-grid">
            <div className="research-card"><SearchCheck/><h3>Market Snapshot</h3><p>市場規模、競合、日本特有の商習慣、規制を短期間で整理。</p><strong>$1,500〜</strong></div>
            <div className="research-card"><Crosshair/><h3>Japan Fit Research</h3><p>ICP、顧客候補、Value Proposition、初期GTM仮説まで。</p><strong>$3,000〜</strong></div>
            <div className="research-card"><Network/><h3>Partner Search</h3><p>代理店、SIer、販売パートナー、協業候補をリストアップ。</p><strong>Custom</strong></div>
            <div className="research-card"><BarChart3/><h3>GTM Pilot</h3><p>初期顧客へのアプローチ、PoC設計、営業検証を伴走。</p><strong>Custom</strong></div>
          </div>
        </section>
        <section className="split-section">
          <div>
            <p className="eyebrow">OUTPUT</p>
            <h2>調査で終わらず、<br/>次のアクションまで。</h2>
            <ul className="plain-list">
              <li>市場・競合マップ</li><li>日本向けICPと顧客候補</li><li>価格・商流・販売チャネル仮説</li><li>Go / No-Go論点</li><li>90日GTMプラン</li>
            </ul>
          </div>
          <LeadForm kind="research"/>
        </section>
      </main>
      <Footer/>
    </>
  );
}
