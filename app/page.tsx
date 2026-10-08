import Link from "next/link";
import { ArrowRight, Compass, Globe2, Search, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyExplorer from "@/components/CompanyExplorer";
import { companies } from "@/lib/data";

export default function Home() {
  const featured = companies.find(c => c.featured)!;

  return (
    <>
      <Header/>
      <main>
        <section className="hero">
          <div className="hero-badge"><span></span> JAPAN ENTRY INTELLIGENCE PLATFORM</div>
          <h1>世界の次を、<br/><em>日本の選択肢に。</em></h1>
          <p className="hero-copy">
            海外テクノロジー企業を、日本企業の課題から探す。比較する。つなぐ。<br className="desktop-only"/>
            TECH MEETS JAPANは、独立したJapan Entry発見プラットフォームです。
          </p>
          <div className="hero-actions">
            <Link href="/companies" className="button button-accent">企業を探す <ArrowRight size={17}/></Link>
            <Link href="/for-vendors" className="button button-light">日本市場に参入する</Link>
          </div>
          <div className="hero-stats">
            <div><strong>{companies.length}</strong><span>Curated companies</span></div>
            <div><strong>6</strong><span>Technology categories</span></div>
            <div><strong>Neutral</strong><span>Paid placement ≠ ranking</span></div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DISCOVER</p>
              <h2>課題から、次の選択肢を探す。</h2>
            </div>
            <p>「海外の面白い会社を知る」ではなく、<br/>「自社に合う会社を見つける」ためのデータベース。</p>
          </div>
          <CompanyExplorer compact/>
          <div className="center"><Link href="/companies" className="text-link">すべての企業を見る <ArrowRight size={16}/></Link></div>
        </section>

        <section className="feature-band">
          <div className="feature-copy">
            <p className="eyebrow">FEATURED JAPAN ENTRY</p>
            <h2>{featured.name}</h2>
            <p className="feature-tagline">{featured.tagline}</p>
            <p>{featured.description}</p>
            <div className="feature-metrics">
              <div><span>Japan Fit</span><strong>{featured.fitScore}/100</strong></div>
              <div><span>Status</span><strong>{featured.japanStatus}</strong></div>
            </div>
            <Link href={"/companies/" + featured.slug} className="button button-light">分析を見る <ArrowRight size={17}/></Link>
          </div>
          <div className="feature-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>
            <div className="visual-center">R</div>
            <div className="visual-label label-a">Creative AI</div>
            <div className="visual-label label-b">Enterprise</div>
            <div className="visual-label label-c">Japan Entry</div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <div><p className="eyebrow">HOW IT WORKS</p><h2>メディアで終わらない。</h2></div>
            <p>発見から、日本市場での実装まで。</p>
          </div>
          <div className="steps-grid">
            <div className="step-card"><Search/><span>01</span><h3>Discover</h3><p>課題・業界・用途から、海外テクノロジー企業を発見。</p></div>
            <div className="step-card"><Compass/><span>02</span><h3>Compare</h3><p>Japan Fit、導入難易度、ユースケースを共通軸で比較。</p></div>
            <div className="step-card"><Globe2/><span>03</span><h3>Connect</h3><p>導入・提携・PoC・代理店など、最適な接点につなぐ。</p></div>
            <div className="step-card"><Sparkles/><span>04</span><h3>Enter Japan</h3><p>市場調査、GTM、Partner探索まで日本参入を支援。</p></div>
          </div>
        </section>

        <section className="neutrality">
          <ShieldCheck size={28}/>
          <div><p className="eyebrow">EDITORIAL INDEPENDENCE</p><h2>掲載料で、順位は買えません。</h2></div>
          <p>掲載・特集・リサーチは有料化しても、Japan Fit Scoreと編集評価は独立。中立性そのものを、この媒体の資産にします。</p>
        </section>

        <section className="cta-band">
          <p className="eyebrow">FOR GLOBAL TECHNOLOGY COMPANIES</p>
          <h2>Japan is not a translation project.<br/>It is a market-entry project.</h2>
          <p>日本市場に挑戦する海外テクノロジー企業の、最初の一歩から。</p>
          <Link href="/for-vendors" className="button button-accent">Explore Japan Entry <ArrowRight size={17}/></Link>
        </section>
      </main>
      <Footer/>
    </>
  );
}
