import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2 } from "lucide-react";
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

        <section className="profile-grid">
          <div>
            <div className="analysis-block">
              <p className="eyebrow">PAIN</p><h2>日本企業の、どんな痛みに刺さるか。</h2><p>{company.pain}</p>
            </div>
            <div className="analysis-block">
              <p className="eyebrow">WHY NOW</p><h2>なぜ、今なのか。</h2><p>{company.whyNow}</p>
            </div>
            <div className="analysis-block">
              <p className="eyebrow">USE CASES</p><h2>想定ユースケース</h2>
              <div className="check-list">{company.useCases.map(x => <div key={x}><Check size={17}/>{x}</div>)}</div>
            </div>
            <div className="analysis-block">
              <p className="eyebrow">BUYERS</p><h2>最初に誰へ売るか。</h2>
              <div className="buyer-grid">{company.buyers.map(x => <span key={x}>{x}</span>)}</div>
            </div>
            <a href={company.website} target="_blank" rel="noreferrer" className="text-link">Official website <ArrowUpRight size={16}/></a>
          </div>
          <aside>
            <LeadForm company={company.name}/>
            <div className="disclaimer"><Globe2 size={17}/><p>本ページは公開情報をもとにした独立編集プロフィールです。掲載企業との提携・代理関係を示すものではありません。</p></div>
          </aside>
        </section>
      </main>
      <Footer/>
    </>
  );
}
