import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2, AlertTriangle, BarChart3, Building2, Crosshair, ShieldCheck, Sparkles } from "lucide-react";
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
      <main>
        <section className="profile-hero">
          <div className="profile-main">
            <p className="eyebrow">{company.country} · {company.category}</p>
            <h1>{company.name}</h1>
            <p className="profile-tagline">{company.tagline}</p>
            <p className="profile-description">{company.description}</p>
            <div className="tag-row large">{company.tags.map(t => <span key={t}>{t}</span>)}</div>
          </div>
          <div className="fit-panel">
            <span>JAPAN FIT SCORE</span>
            <strong>{company.fitScore}</strong>
            <small>/ 100</small>
            <div className="fit-bar"><i style={{width: company.fitScore + "%"}}></i></div>
            <p>{company.japanStatus}</p>
          </div>
        </section>

        {intel?.snapshot && (
          <section className="intel-strip">
            {intel.snapshot.map(item => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </div>
            ))}
          </section>
        )}

        <section className="profile-grid">
          <div>
            {intel?.verdict && (
              <div className="verdict-card">
                <div className="verdict-icon"><Sparkles size={22}/></div>
                <div><p className="eyebrow">TECH MEETS JAPAN VERDICT</p><h2>この会社、日本で勝てるか。</h2><p>{intel.verdict}</p></div>
              </div>
            )}

            <div className="analysis-block">
              <p className="eyebrow">PAIN</p><h2>日本企業の、どんな痛みに刺さるか。</h2><p>{company.pain}</p>
            </div>

            {intel?.targetAccounts && (
              <div className="analysis-block">
                <p className="eyebrow">TARGET ACCOUNTS</p>
                <h2>誰に、何を入口に売るか。</h2>
                <div className="target-table">
                  {intel.targetAccounts.map(row => (
                    <div className="target-row" key={row.segment}>
                      <div><span>BUYER</span><strong>{row.segment}</strong></div>
                      <div><span>PAIN</span><p>{row.pain}</p></div>
                      <div><span>WEDGE</span><p>{row.openingOffer}</p></div>
                      <div><span>WHY BUY</span><p>{row.whyBuy}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {intel?.gtmPlays && (
              <div className="analysis-block">
                <p className="eyebrow">GTM HYPOTHESES</p>
                <h2>日本での勝ち筋、3本。</h2>
                <div className="gtm-grid">
                  {intel.gtmPlays.map((play,index) => (
                    <article key={play.title}>
                      <span>0{index+1}</span><Crosshair size={20}/>
                      <h3>{play.title}</h3>
                      <p><b>Buyer</b>{play.buyer}</p>
                      <p><b>Wedge</b>{play.wedge}</p>
                      <p><b>Expand</b>{play.expansion}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            <div className="analysis-block">
              <p className="eyebrow">WHY NOW</p><h2>なぜ、今なのか。</h2><p>{company.whyNow}</p>
            </div>

            {intel?.scoreBreakdown && (
              <div className="analysis-block">
                <p className="eyebrow">FIT BREAKDOWN</p>
                <h2>94点の中身。</h2>
                <div className="score-breakdown">
                  {intel.scoreBreakdown.map(item => (
                    <div className="score-line" key={item.label}>
                      <div className="score-head"><strong>{item.label}</strong><b>{item.score}</b></div>
                      <div className="score-track"><i style={{width:item.score+"%"}}></i></div>
                      <p>{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {intel?.competition && (
              <div className="analysis-block">
                <p className="eyebrow">COMPETITION</p>
                <h2>誰と戦い、どこで勝つか。</h2>
                <div className="competition-grid">
                  {intel.competition.map(x => (
                    <article key={x.name}>
                      <h3>{x.name}</h3>
                      <p><b>相手の強み</b>{x.strength}</p>
                      <p><b>{company.name}の勝ち筋</b>{x.runwayEdge}</p>
                      <p><b>脅威</b>{x.threat}</p>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {intel?.risks && (
              <div className="analysis-block">
                <p className="eyebrow">RISKS</p>
                <h2>それでも、ここで詰まる。</h2>
                <div className="risk-list">
                  {intel.risks.map(risk => (
                    <div key={risk.title}>
                      <AlertTriangle size={17}/>
                      <span className={"risk-level " + risk.severity.toLowerCase()}>{risk.severity}</span>
                      <strong>{risk.title}</strong>
                      <p>{risk.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {intel?.timeline && (
              <div className="analysis-block">
                <p className="eyebrow">JAPAN ENTRY TIMELINE</p>
                <h2>日本で、何が起きているか。</h2>
                <div className="timeline">
                  {intel.timeline.map(item => (
                    <div key={item.date+item.title}>
                      <span>{item.date}</span><i></i>
                      <div><strong>{item.title}</strong><p>{item.detail}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {intel?.japanCustomers && (
              <div className="analysis-block">
                <p className="eyebrow">JAPAN PROOF</p>
                <h2>すでに誰が使っているか。</h2>
                <div className="proof-grid">{intel.japanCustomers.map(x => <span key={x}><Building2 size={16}/>{x}</span>)}</div>
              </div>
            )}

            <div className="analysis-block">
              <p className="eyebrow">USE CASES</p><h2>想定ユースケース</h2>
              <div className="check-list">{company.useCases.map(x => <div key={x}><Check size={17}/>{x}</div>)}</div>
            </div>
            <div className="analysis-block">
              <p className="eyebrow">BUYERS</p><h2>最初に誰へ売るか。</h2>
              <div className="buyer-grid">{company.buyers.map(x => <span key={x}>{x}</span>)}</div>
            </div>

            {intel?.sources && (
              <div className="analysis-block">
                <p className="eyebrow">SOURCES</p><h2>根拠を見る。</h2>
                <div className="source-list">
                  {intel.sources.map(source => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}<ArrowUpRight size={15}/></a>)}
                </div>
              </div>
            )}

            <a href={company.website} target="_blank" rel="noreferrer" className="text-link">Official website <ArrowUpRight size={16}/></a>
          </div>

          <aside>
            {intel && (
              <div className="side-intel">
                <p className="eyebrow">QUICK TAKE</p>
                <div><BarChart3 size={18}/><span>Japan Fit</span><strong>{company.fitScore}/100</strong></div>
                <div><ShieldCheck size={18}/><span>Entry stage</span><strong>{company.entryStage}</strong></div>
                <div><Globe2 size={18}/><span>Japan status</span><strong>{company.japanStatus}</strong></div>
              </div>
            )}
            <LeadForm company={company.name}/>
            <div className="disclaimer"><Globe2 size={17}/><p>本ページは公開情報をもとにした独立編集プロフィールです。掲載企業との提携・代理関係を示すものではありません。GTM・競争分析の一部はTECH MEETS JAPANによる仮説です。</p></div>
          </aside>
        </section>
      </main>
      <Footer/>
    </>
  );
}
