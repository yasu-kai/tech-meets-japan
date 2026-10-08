import Link from "next/link";
import { ArrowRight, Compass, Globe2, Search, ShieldCheck, Sparkles, Activity, Layers3, Radar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductExplorer from "@/components/ProductExplorer";
import { products, signals, themes } from "@/lib/data";

export default function Home() {
  const featured = products.find(p => p.featured)!;
  const categoryCount = new Set(products.map(p => p.category)).size;

  return (
    <>
      <Header/>
      <main>
        <section className="hero">
          <div className="hero-badge"><span></span> JAPAN ENTRY INTELLIGENCE PLATFORM</div>
          <h1>世界の次を、<br/><em>日本の選択肢に。</em></h1>
          <p className="hero-copy">
            海外テクノロジープロダクトを、課題や用途から探す。比べる。使いどころを知る。<br className="desktop-only"/>
            TECH MEETS JAPANは、日本に入ってくるプロダクトを見つける独立系テックメディアです。
          </p>
          <div className="hero-actions">
            <Link href="/products" className="button button-accent">プロダクトを探す <ArrowRight size={17}/></Link>
          </div>
          <div className="hero-stats">
            <div><strong>{products.length}</strong><span>Curated products</span></div>
            <div><strong>{categoryCount}</strong><span>Technology categories</span></div>
            <div><strong>{signals.length}</strong><span>Entry signals tracked</span></div>
            <div><strong>Independent</strong><span>Editorial intelligence</span></div>
          </div>
        </section>

        <section className="ticker-section">
          <div className="ticker-label"><Activity size={15}/> LATEST JAPAN ENTRY SIGNALS</div>
          <div className="ticker-grid">
            {signals.slice(0,4).map(signal => (
              <Link href="/signals" className="ticker-item" key={signal.date + signal.company}>
                <div><span>{signal.date}</span><b>{signal.level}</b></div>
                <strong>{signal.company}</strong>
                <p>{signal.title}</p>
              </Link>
            ))}
          </div>
          <Link href="/signals" className="text-link">すべてのシグナルを見る <ArrowRight size={16}/></Link>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DISCOVER</p>
              <h2>課題から、次の選択肢を探す。</h2>
            </div>
            <p>「どの会社が来たか」ではなく、<br/>「何が使えるようになるか」を知るためのデータベース。</p>
          </div>
          <ProductExplorer compact/>
          <div className="center"><Link href="/products" className="text-link">すべてのプロダクトを見る <ArrowRight size={16}/></Link></div>
        </section>

        <section className="theme-section">
          <div className="section-heading">
            <div><p className="eyebrow">MARKET MAP</p><h2>今、日本で動く4つの波。</h2></div>
            <p>カテゴリではなく、「次に市場を作るテーマ」で追う。</p>
          </div>
          <div className="theme-grid">
            {themes.map((theme,i) => (
              <div className="theme-card" key={theme.title}>
                <span>0{i+1}</span>
                <div className="theme-icon">{i===0?<Sparkles/>:i===1?<Radar/>:i===2?<Layers3/>:<Globe2/>}</div>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
                <strong>{theme.count} companies tracked</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="feature-band">
          <div className="feature-copy">
            <p className="eyebrow">FEATURED PRODUCT</p>
            <h2>{featured.name}</h2>
            <p className="feature-tagline">{featured.tagline}</p>
            <p>{featured.description}</p>
            <div className="feature-metrics">
              <div><span>Japan Fit</span><strong>{featured.fitScore}/100</strong></div>
              <div><span>Status</span><strong>{featured.japanStatus}</strong></div>
            </div>
            <Link href={"/products/" + featured.slug} className="button button-light">分析を見る <ArrowRight size={17}/></Link>
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
            <div className="step-card"><Search/><span>01</span><h3>Discover</h3><p>課題・業界・用途から、海外テクノロジープロダクトを発見。</p></div>
            <div className="step-card"><Compass/><span>02</span><h3>Compare</h3><p>Japan Fit、導入難易度、ユースケースを共通軸で比較。</p></div>
            <div className="step-card"><Globe2/><span>03</span><h3>Understand</h3><p>日本での導入状況、競合、リスク、実績まで立体的に理解。</p></div>
            <div className="step-card"><Sparkles/><span>04</span><h3>Decide</h3><p>自社に合うか、今検討すべきか、次のアクションまで判断。</p></div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="section-heading">
            <div><p className="eyebrow">EDITORIAL</p><h2>日本参入を、“ニュース”で終わらせない。</h2></div>
            <p>なぜ今なのか。誰に売るのか。何が障壁なのかまで読む。</p>
          </div>
          <div className="editorial-grid">
            <article className="editorial-lead">
              <span>DEEP DIVE</span>
              <h3>AI Creative 第二ラウンド。日本IPを取りに来るプレーヤーは誰か。</h3>
              <p>Runway、MiniMax、HeyGen、Synthesia。映像生成の比較ではなく、日本市場で何を取りに来ているかで整理する。</p>
              <Link href="/companies" className="text-link">関連企業を見る <ArrowRight size={16}/></Link>
            </article>
            <article><span>MARKET ENTRY</span><h3>海外企業が日本で最初に間違えること。</h3><p>翻訳とJapan Entryは違う。商流、価格、信頼、導入プロセスをどう組み替えるか。</p></article>
            <article><span>PHYSICAL AI</span><h3>日本の製造業が“買うAI”はどこにある。</h3><p>内製R&Dが強い市場で、外部テック企業が入り込める場所を考える。</p></article>
          </div>
        </section>

        <section className="neutrality">
          <ShieldCheck size={28}/>
          <div><p className="eyebrow">EDITORIAL PRINCIPLE</p><h2>読む人の判断に、役立つか。</h2></div>
          <p>プロダクト紹介で終わらず、用途・比較対象・実績・リスク・導入適性まで同じ目線で整理。TECH MEETS JAPANは、判断材料の質を最優先にします。</p>
        </section>

        <section className="cta-band">
          <p className="eyebrow">EXPLORE WHAT'S NEXT</p>
          <h2>知らなかった選択肢を、<br/>次の打ち手に。</h2>
          <p>海外プロダクトを、話題ではなく「自社で使えるか」で見る。</p>
          <Link href="/products" className="button button-accent">プロダクトを探す <ArrowRight size={17}/></Link>
        </section>
      </main>
      <Footer/>
    </>
  );
}
