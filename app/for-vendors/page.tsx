import { ArrowRight, BadgeCheck, FileSearch, Megaphone, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function VendorsPage() {
  return (
    <>
      <Header/>
      <main>
        <section className="vendor-hero">
          <p className="eyebrow">FOR GLOBAL TECHNOLOGY COMPANIES</p>
          <h1>Enter Japan.<br/><em>Without guessing.</em></h1>
          <p>日本市場の露出、理解、顧客接点、GTMまで。TECH MEETS JAPANは、海外テクノロジー企業のJapan Entryを一つの導線にします。</p>
          <a href="#apply" className="button button-accent">Apply for listing <ArrowRight size={17}/></a>
        </section>

        <section className="section">
          <div className="pricing-card">
            <div>
              <p className="eyebrow">FOUNDING COMPANY PROGRAM</p>
              <h2>初年度掲載無料。</h2>
              <p>掲載企業が増え、プラットフォーム価値が形成された後は一律 <strong>$500 / month</strong> を想定。</p>
            </div>
            <div className="pricing-rule">
              <BadgeCheck size={22}/>
              <strong>Paying more never improves your ranking.</strong>
              <p>掲載費・特集費と編集評価は完全に分離します。</p>
            </div>
          </div>

          <div className="service-grid">
            <div><Megaphone/><h3>Company Profile</h3><p>日本企業向けに、製品・ユースケース・Japan Fitを分かりやすく掲載。</p></div>
            <div><FileSearch/><h3>Featured Story</h3><p>Founder Message、Executive Interview、Japan Entry特集を制作。</p></div>
            <div><Users/><h3>Introductions</h3><p>導入候補、PoC、代理店・パートナー候補との接点を設計。</p></div>
          </div>
        </section>

        <section className="split-section" id="apply">
          <div>
            <p className="eyebrow">WHY JAPAN</p>
            <h2>Translation is not<br/>market entry.</h2>
            <p>日本語化だけでは、日本市場には入れません。商流、信頼、導入プロセス、価格、パートナー。日本で売れる形へ組み替える必要があります。</p>
          </div>
          <LeadForm kind="listing"/>
        </section>
      </main>
      <Footer/>
    </>
  );
}
