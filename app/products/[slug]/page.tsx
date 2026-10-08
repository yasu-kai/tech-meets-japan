import { notFound } from "next/navigation";
import { ArrowUpRight, Building2, Check, GitCompareArrows, Sparkles, Languages, Headphones, Plug, ShieldCheck, WalletCards, Replace, Rocket, LockKeyhole } from "lucide-react";
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

        {product.decision && (
          <>
            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">CAPABILITIES</p><h2>何ができるのか。</h2></div><Rocket size={28}/></div>
              <div className="decision-grid">
                {product.decision.capabilities?.map(x=>(
                  <article key={x.label}><h3>{x.label}</h3><p>{x.detail}</p></article>
                ))}
              </div>
              {!!product.decision.limitations?.length && <div className="decision-note"><strong>できないこと / 注意点</strong>{product.decision.limitations.map(x=><p key={x}>・{x}</p>)}</div>}
            </section>

            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">PRICING & TCO</p><h2>料金はいくらで、実際いくらかかるか。</h2></div><WalletCards size={28}/></div>
              <div className="pricing-table">
                {product.decision.pricing?.publicPlans?.map(p=><div key={p.name}><strong>{p.name}</strong><span>{p.monthly}</span><span>{p.annualEquivalent||"—"}</span><p>{p.credits}</p><small>{p.notes}</small></div>)}
              </div>
              <div className="decision-split">
                <div><strong>Enterprise</strong><p>{product.decision.pricing?.enterprise}</p></div>
                <div><strong>API</strong><p>{product.decision.pricing?.api}</p></div>
                <div><strong>TCOで見るポイント</strong><p>{product.decision.pricing?.tcoNote}</p></div>
              </div>
            </section>

            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">IMPLEMENTATION</p><h2>導入と乗り換えに、どれくらいかかるか。</h2></div><Replace size={28}/></div>
              <div className="cost-meter-grid">
                <div className="cost-card"><span>ONBOARDING</span><strong>{product.decision.onboarding?.label}</strong><b>{product.decision.onboarding?.level}/5</b><p>{product.decision.onboarding?.timeToValue}</p><small>{product.decision.onboarding?.costNote}</small><ul>{product.decision.onboarding?.tasks.map(x=><li key={x}>{x}</li>)}</ul></div>
                <div className="cost-card"><span>REPLACEMENT</span><strong>{product.decision.replacement?.label}</strong><b>{product.decision.replacement?.level}/5</b><p>{product.decision.replacement?.costNote}</p><ul>{product.decision.replacement?.migrationRisks.map(x=><li key={x}>{x}</li>)}</ul></div>
                <div className="cost-card"><span>LOCK-IN</span><strong>{product.decision.lockIn?.label}</strong><b>{product.decision.lockIn?.level}/5</b><ul>{product.decision.lockIn?.reasons.map(x=><li key={x}>{x}</li>)}</ul></div>
              </div>
            </section>

            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">JAPAN READINESS</p><h2>日本で、そのまま使えるか。</h2></div><Languages size={28}/></div>
              <div className="readiness-grid">
                <div><span>UI</span><strong>{product.decision.japanese?.ui}</strong></div>
                <div><span>入力</span><strong>{product.decision.japanese?.input}</strong></div>
                <div><span>出力</span><strong>{product.decision.japanese?.output}</strong></div>
                <div><span>Docs</span><strong>{product.decision.japanese?.docs}</strong></div>
                <div><span>Support</span><strong>{product.decision.japanese?.support}</strong></div>
              </div>
              {product.decision.japanese?.note && <div className="decision-note"><p>{product.decision.japanese.note}</p></div>}
            </section>

            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">SUPPORT & INTEGRATIONS</p><h2>運用開始後に困らないか。</h2></div><Headphones size={28}/></div>
              <div className="decision-split">
                <div><strong>Support</strong>{product.decision.support?.details.map(x=><p key={x}>・{x}</p>)}</div>
                <div><strong>Integrations</strong><div className="buyer-grid">{product.decision.integrations?.map(x=><span key={x}><Plug size={13}/>{x}</span>)}</div></div>
                <div><strong>Trial</strong><p>{product.decision.trial?.available}</p><p>{product.decision.trial?.detail}</p></div>
              </div>
            </section>

            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">ENTERPRISE READINESS</p><h2>大企業導入に耐えられるか。</h2></div><ShieldCheck size={28}/></div>
              <div className="enterprise-table">
                {product.decision.enterpriseReadiness?.map(x=><div key={x.item}><strong>{x.item}</strong><span>{x.status}</span><p>{x.note||""}</p></div>)}
              </div>
            </section>

            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">FIT</p><h2>向いている会社、向いていない会社。</h2></div><LockKeyhole size={28}/></div>
              <div className="fit-two-col">
                <div><span>BEST FOR</span>{product.decision.bestFor?.map(x=><p key={x}>✓ {x}</p>)}</div>
                <div><span>NOT FOR</span>{product.decision.notFor?.map(x=><p key={x}>× {x}</p>)}</div>
              </div>
              {product.decision.verdict && <div className="final-verdict"><span>{product.decision.verdict.status}</span><p>{product.decision.verdict.summary}</p></div>}
            </section>

            <section className="section section-tight product-analysis">
              <div className="section-heading"><div><p className="eyebrow">DATA CONFIDENCE</p><h2>どこまで確かな情報か。</h2></div></div>
              <div className="evidence-table">
                {product.decision.evidence?.map(x=><div key={x.item}><strong>{x.item}</strong><span>{x.type}</span><span>{x.confidence}</span><p>{x.source||"独自推定"}</p></div>)}
              </div>
            </section>
          </>
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
