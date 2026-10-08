import { notFound } from "next/navigation";
import { ArrowUpRight, Building2, Check, GitCompareArrows, Globe2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companies, products } from "@/lib/data";

export function generateStaticParams(){ return products.map(p=>({slug:p.slug})); }

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=products.find(p=>p.slug===slug);
  if(!product) notFound();
  const company=companies.find(c=>c.slug===product.companySlug);
  const intel=company?.intelligence;

  return (
    <>
      <Header/>
      <main className="company-profile">
        <section className="profile-masthead">
          <div className="profile-kicker-row">
            <div className="profile-kicker">{product.category} / {product.country}</div>
            <div className="profile-stage">{product.entryStage}</div>
          </div>

          <div className="profile-title-grid">
            <div>
              <p className="eyebrow">PRODUCT</p>
              <h1>{product.name}</h1>
              <p className="profile-deck">{product.tagline}</p>
            </div>
            <div className="score-orbit" style={{"--score":product.fitScore} as React.CSSProperties}>
              <div><span>JAPAN FIT</span><strong>{product.fitScore}</strong><small>/100</small></div>
            </div>
          </div>

          <div className="profile-intro-grid">
            <p>{product.description}</p>
            <div className="profile-status">
              <span>PROVIDER</span><strong>{product.provider}</strong>
              <span style={{marginTop:14}}>STATUS IN JAPAN</span><strong>{product.japanStatus}</strong>
            </div>
          </div>
          <div className="tag-row editorial-tags">{product.tags.map(t=><span key={t}>{t}</span>)}</div>
        </section>

        <section className="product-quick-grid">
          <div><span>WHAT IT DOES</span><h2>何ができる？</h2><p>{product.description}</p></div>
          <div><span>WHO IT FITS</span><h2>誰に向く？</h2><div className="buyer-grid">{product.targetUsers.map(x=><span key={x}>{x}</span>)}</div></div>
          <div><span>USE CASES</span><h2>何に使える？</h2><div className="check-list">{product.useCases.map(x=><div key={x}><Check size={15}/>{x}</div>)}</div></div>
          <div><span>COMPARE WITH</span><h2>何と比べる？</h2><div className="buyer-grid">{product.alternatives.map(x=><span key={x}>{x}</span>)}</div></div>
        </section>

        {intel?.verdict && (
          <section className="editorial-verdict">
            <div className="verdict-label"><Sparkles size={16}/> TECH MEETS JAPAN VIEW</div>
            <div>
              <h2>日本企業が、今見る価値はあるか。</h2>
              <p>{intel.verdict}</p>
            </div>
          </section>
        )}

        {intel?.scoreBreakdown && (
          <section className="section section-tight product-analysis">
            <div className="section-heading">
              <div><p className="eyebrow">FIT BREAKDOWN</p><h2>{product.fitScore}点は、何でできているか。</h2></div>
              <p>話題性ではなく、日本企業が実際に使う目線で評価。</p>
            </div>
            <div className="score-editorial">
              {intel.scoreBreakdown.map(item=>(
                <div key={item.label}>
                  <div className="score-editorial-head"><strong>{item.label}</strong><b>{item.score}</b></div>
                  <div className="score-editorial-bar"><i style={{width:item.score+"%"}}></i></div>
                  <p>{item.reason}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {intel?.competition && (
          <section className="section section-tight product-analysis">
            <div className="section-heading">
              <div><p className="eyebrow">ALTERNATIVES</p><h2>何と比べて選ぶべきか。</h2></div>
              <GitCompareArrows size={28}/>
            </div>
            <div className="competition-editorial">
              <div className="competition-head"><span>ALTERNATIVE</span><span>強み</span><span>{product.name.toUpperCase()} が向くケース</span><span>選ぶ際の注意</span></div>
              {intel.competition.map(x=><div className="competition-row" key={x.name}><strong>{x.name}</strong><p>{x.strength}</p><p>{x.runwayEdge}</p><p>{x.threat}</p></div>)}
            </div>
          </section>
        )}

        <section className="profile-end">
          <div>
            <p className="eyebrow">PROVIDER</p>
            <h2>提供元は、{product.provider}。</h2>
            <p>企業情報はプロダクト理解の補助情報として扱います。主役はあくまで「何が使えるか」。</p>
            {company && <p className="provider-note"><Building2 size={15}/>{company.country} / {company.stage}</p>}
          </div>
          <a href={product.website} target="_blank" rel="noreferrer" className="button button-dark">公式サイトを見る <ArrowUpRight size={16}/></a>
        </section>

        <div className="profile-disclaimer">
          本ページは公開情報をもとにした独立編集プロフィールです。導入適性・比較分析の一部はTECH MEETS JAPANによる独自見解です。
        </div>
      </main>
      <Footer/>
    </>
  )
}
