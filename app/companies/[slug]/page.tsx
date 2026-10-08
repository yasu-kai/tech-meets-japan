import { notFound } from "next/navigation";
import { ArrowUpRight, AlertTriangle, BarChart3, Building2, Crosshair, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { companies } from "@/lib/data";

export function generateStaticParams() {
  return companies.map(c => ({ slug: c.slug }));
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = companies.find(c => c.slug === slug);
  if (!company) notFound();
  const intel = company.intelligence;

  return (
    <>
      <Header/>
      <main className="company-profile">
        <section className="profile-masthead">
          <div className="profile-kicker-row">
            <div className="profile-kicker">{company.country} / {company.category}</div>
            <div className="profile-stage">{company.entryStage}</div>
          </div>

          <div className="profile-title-grid">
            <div>
              <h1>{company.name}</h1>
              <p className="profile-deck">{company.tagline}</p>
            </div>
            <div className="score-orbit" style={{"--score": company.fitScore} as React.CSSProperties}>
              <div>
                <span>JAPAN FIT</span>
                <strong>{company.fitScore}</strong>
                <small>/100</small>
              </div>
            </div>
          </div>

          <div className="profile-intro-grid">
            <p>{company.description}</p>
            <div className="profile-status">
              <span>STATUS IN JAPAN</span>
              <strong>{company.japanStatus}</strong>
            </div>
          </div>

          <div className="tag-row editorial-tags">{company.tags.map(t => <span key={t}>{t}</span>)}</div>
        </section>

        {intel?.snapshot && (
          <section className="stat-ribbon">
            {intel.snapshot.map((item,index) => (
              <div key={item.label}>
                <span>0{index+1}</span>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
                <small>{item.note}</small>
              </div>
            ))}
          </section>
        )}

        {intel?.verdict && (
          <section className="editorial-verdict">
            <div className="verdict-label"><Sparkles size={16}/> TECH MEETS JAPAN VIEW</div>
            <div>
              <h2>日本企業にとって、使う価値はあるか。</h2>
              <p>{intel.verdict}</p>
            </div>
          </section>
        )}

        <section className="profile-editorial">
          <div className="editorial-rail">
            <div className="rail-block">
              <span>PAIN</span>
              <strong>何が痛いのか</strong>
              <p>{company.pain}</p>
            </div>
            <div className="rail-block">
              <span>WHY NOW</span>
              <strong>なぜ今なのか</strong>
              <p>{company.whyNow}</p>
            </div>
            {intel && (
              <div className="rail-block rail-quick">
                <span>QUICK TAKE</span>
                <div><BarChart3 size={15}/><b>Fit</b><strong>{company.fitScore}/100</strong></div>
                <div><ShieldCheck size={15}/><b>Stage</b><strong>{company.entryStage}</strong></div>
                <div><Globe2 size={15}/><b>Status</b><strong>{company.japanStatus}</strong></div>
              </div>
            )}
          </div>

          <div className="editorial-main">
            {intel?.targetAccounts && (
              <section className="story-section">
                <div className="story-heading"><span>01</span><div><p>WHO IT FITS</p><h2>どんな企業に、どう刺さるか。</h2></div></div>
                <div className="account-grid">
                  {intel.targetAccounts.map((row,index) => (
                    <article key={row.segment}>
                      <div className="account-num">{String(index+1).padStart(2,"0")}</div>
                      <h3>{row.segment}</h3>
                      <dl>
                        <div><dt>PAIN</dt><dd>{row.pain}</dd></div>
                        <div><dt>FIRST USE</dt><dd>{row.openingOffer}</dd></div>
                        <div><dt>WHY FIT</dt><dd>{row.whyBuy}</dd></div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {intel?.gtmPlays && (
              <section className="story-section dark-story">
                <div className="story-heading"><span>02</span><div><p>ADOPTION PATTERNS</p><h2>導入するなら、この3パターン。</h2></div></div>
                <div className="gtm-editorial">
                  {intel.gtmPlays.map((play,index) => (
                    <article key={play.title}>
                      <div className="gtm-index">0{index+1}</div>
                      <Crosshair size={18}/>
                      <h3>{play.title}</h3>
                      <p><b>向いている企業</b>{play.buyer}</p>
                      <p><b>最初の使い方</b>{play.wedge}</p>
                      <p><b>次の展開</b>{play.expansion}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {intel?.scoreBreakdown && (
              <section className="story-section">
                <div className="story-heading"><span>03</span><div><p>FIT BREAKDOWN</p><h2>{company.fitScore}点は、何でできているか。</h2></div></div>
                <div className="score-editorial">
                  {intel.scoreBreakdown.map(item => (
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
              <section className="story-section">
                <div className="story-heading"><span>04</span><div><p>ALTERNATIVES</p><h2>何と比べて選ぶべきか。</h2></div></div>
                <div className="competition-editorial">
                  <div className="competition-head"><span>ALTERNATIVE</span><span>強み</span><span>{company.name.toUpperCase()} が向くケース</span><span>選ぶ際の注意</span></div>
                  {intel.competition.map(x => (
                    <div className="competition-row" key={x.name}>
                      <strong>{x.name}</strong><p>{x.strength}</p><p>{x.runwayEdge}</p><p>{x.threat}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {intel?.risks && (
              <section className="story-section">
                <div className="story-heading"><span>05</span><div><p>RISKS</p><h2>それでも、ここで詰まる。</h2></div></div>
                <div className="risk-editorial">
                  {intel.risks.map((risk,index) => (
                    <article key={risk.title}>
                      <div className="risk-index">{String(index+1).padStart(2,"0")}</div>
                      <AlertTriangle size={16}/>
                      <div><span>{risk.severity}</span><h3>{risk.title}</h3><p>{risk.detail}</p></div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {intel?.timeline && (
              <section className="story-section">
                <div className="story-heading"><span>06</span><div><p>JAPAN ENTRY TIMELINE</p><h2>日本で、何が起きているか。</h2></div></div>
                <div className="timeline-editorial">
                  {intel.timeline.map(item => (
                    <article key={item.date+item.title}>
                      <time>{item.date}</time>
                      <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {intel?.japanCustomers && (
              <section className="story-section proof-story">
                <div className="story-heading"><span>07</span><div><p>JAPAN PROOF</p><h2>すでに誰が使っているか。</h2></div></div>
                <div className="proof-editorial">{intel.japanCustomers.map(x => <div key={x}><Building2 size={15}/><strong>{x}</strong></div>)}</div>
              </section>
            )}

            {intel?.sources && (
              <section className="story-section sources-story">
                <div className="story-heading"><span>08</span><div><p>SOURCES</p><h2>根拠を追う。</h2></div></div>
                <div className="sources-editorial">
                  {intel.sources.map((source,index) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span>{String(index+1).padStart(2,"0")}</span><strong>{source.label}</strong><ArrowUpRight size={15}/></a>)}
                </div>
              </section>
            )}
          </div>
        </section>

        <section className="profile-end">
          <div>
            <p className="eyebrow">NEXT ACTION</p>
            <h2>{company.name}を、自社で使うなら。</h2>
            <p>公式情報と独自分析を見比べながら、まず試すべき用途と比較対象を整理して判断できます。</p>
            <a href={company.website} target="_blank" rel="noreferrer" className="text-link">Official website <ArrowUpRight size={16}/></a>
          </div>
          <a href={company.website} target="_blank" rel="noreferrer" className="button button-dark">公式サイトを見る <ArrowUpRight size={16}/></a>
        </section>

        <div className="profile-disclaimer">
          本ページは公開情報をもとにした独立編集プロフィールです。掲載企業との提携・代理関係を示すものではありません。導入適性・比較分析の一部はTECH MEETS JAPANによる独自見解です。
        </div>
      </main>
      <Footer/>
    </>
  );
}
