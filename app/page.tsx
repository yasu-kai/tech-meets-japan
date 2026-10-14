import Link from "next/link";
import { ArrowRight, Compass, Globe2, Search, ShieldCheck, Sparkles, Activity, Layers3, Radar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductExplorer from "@/components/ProductExplorer";
import { calculateProductJapanFit, products, signals, themes } from "@/lib/data";
import { researchCategories } from "@/lib/research";

export default function Home() {
  const featured = products.find(p => p.featured)!;
  const categoryCount = new Set(products.map(p => p.category)).size;

  return (
    <>
      <Header/>
      <main>
        <section className="hero">
          <div className="hero-badge"><span></span> JAPAN ENTRY INTELLIGENCE PLATFORM</div>
          <h1><span className="hero-line">世界の次を、</span><span className="hero-line"><em>日本の選択肢に。</em></span></h1>
          <p className="hero-copy">
            海外テクノロジープロダクトを、課題や用途から探す。比べる。使いどころを知る。 
            TECH MEETS JAPANは、日本に入ってくるプロダクトを見つける独立系テックメディアです。
          </p>
          <div className="home-feature-heading">
            <span>特集</span>
            <div><b>SPECIAL FEATURE 01</b><p>いま最も深く読みたいテーマを、比較と長文レポートで掘る。</p></div>
          </div>
          <Link href="/research/offensive-ai" className="home-feature-story">
            <div className="home-feature-image">
              <img src="/offensive-ai-hero.png" alt="" />
            </div>
            <div className="home-feature-content">
              <div className="home-feature-meta">
                <span>AI × SECURITY</span>
                <b>OFFENSIVE AI / MARKET MAP</b>
              </div>
              <div className="home-feature-main">
                <div>
                  <p className="home-feature-kicker">攻撃するAIは、どこまで自律化したのか。</p>
                  <h2 className="home-feature-title"><span>AIは、</span><span>サイバー防御の</span><span>どこまでを担うのか。</span></h2>
                </div>
                <div className="home-feature-summary">
                  <p>擬似攻撃から再検証まで、XBOW、Pentera、Horizon3、MindFortなどを同じ6工程に並べると、「AI Pentest」という一言では見えない差が浮かび上がる。</p>
                  <p>重要なのは、AIが脆弱性を見つけられるかではない。<strong>人間に何をさせなくしようとしているか。</strong> AutomationとAutonomyの違いから市場の現在地を読む。</p>
                </div>
              </div>
              <div className="home-feature-footer">
                <span>LONG-FORM REPORT / AUTOMATION DEPTH</span>
                <strong>特集を読む <ArrowRight size={18}/></strong>
              </div>
            </div>
          </Link>
        </section>

        <section className="ticker-section editorial-themes-home">
          <div className="ticker-label"><Activity size={15}/> EDITORIAL THEMES</div>
          <div className="editorial-theme-mosaic">
            {researchCategories.map((category,i) => (
              <Link href={"/research/" + category.slug} className={"editorial-theme-tile theme-tile-" + (i+1)} key={category.slug}>
                <div className="editorial-theme-kicker">
                  <span>{String(i+1).padStart(2,"0")}</span>
                  <b>{category.topics.length} STORIES</b>
                </div>
                <div className="editorial-theme-copy">
                  <strong>{category.label}</strong>
                  <p>{category.thesis}</p>
                </div>
                <div className="editorial-theme-arrow"><ArrowRight size={18}/></div>
              </Link>
            ))}
          </div>
          <Link href="/research" className="text-link">すべてのテーマを見る <ArrowRight size={16}/></Link>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DISCOVER</p>
              <h2>課題から、次の選択肢を探す。</h2>
            </div>
            <p>「どの会社が来たか」ではなく、 「何が使えるようになるか」を知るためのデータベース。</p>
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
              <Link href={["/research/ai-creative","/research/robotics","/research/ai-work","/research/ai-industry"][i]} className="theme-card" key={theme.title}>
                <span>0{i+1}</span>
                <div className="theme-icon">{i===0?<Sparkles/>:i===1?<Radar/>:i===2?<Layers3/>:<Globe2/>}</div>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
                <strong>関連テーマを読む <ArrowRight size={15}/></strong>
              </Link>
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
              <div><span>Japan Fit</span><strong>{calculateProductJapanFit(featured)}/100</strong></div>
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
              <Link href="/research/ai-creative/ai-video" className="text-link">映像AIの比較記事を読む <ArrowRight size={16}/></Link>
            </article>
            <article><span>EARLY-STAGE</span><h3>まだ知られていない技術を、日本の選択肢に。</h3><p>研究・試作・実証から、日本企業との接点を探る。</p><Link href="/early-stage" className="text-link">Early-Stageを見る <ArrowRight size={16}/></Link></article>
            <article><span>PHYSICAL AI</span><h3>日本の製造業が“買うAI”はどこにある。</h3><p>内製R&Dが強い市場で、外部テック企業が入り込める場所を考える。</p><Link href="/research/ai-industry/manufacturing-ai" className="text-link">製造AIの分析を読む <ArrowRight size={16}/></Link></article>
          </div>
        </section>

        <section className="neutrality">
          <ShieldCheck size={28}/>
          <div><p className="eyebrow">EDITORIAL PRINCIPLE</p><h2>読む人の判断に、役立つか。</h2></div>
          <p>プロダクト紹介で終わらず、用途・比較対象・実績・リスク・導入適性まで同じ目線で整理。TECH MEETS JAPANは、判断材料の質を最優先にします。</p>
        </section>

        <section className="cta-band">
          <p className="eyebrow">EXPLORE WHAT'S NEXT</p>
          <h2>知らなかった選択肢を、 次の打ち手に。</h2>
          <p>海外プロダクトを、話題ではなく「自社で使えるか」で見る。</p>
          <Link href="/products" className="button button-accent">プロダクトを探す <ArrowRight size={17}/></Link>
        </section>
      </main>
      <Footer/>
    </>
  );
}
