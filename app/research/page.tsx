import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { researchCategories } from "@/lib/research";

export default function ResearchPage() {
  const storyCount = researchCategories.reduce((sum,category)=>sum+category.topics.length,0);
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero research-index-hero tmj-image-hero tmj-image-hero-research">
          <p className="eyebrow">RESEARCH</p>
          <h1>世界の新しいプロダクトが、 日本の仕事・産業・生活をどう変えるのか。</h1>
          <p>AIを中心に、Security、Creative、Industry、Robotics、Gadgetsまで。機能紹介ではなく、「人間の役割がどう変わるか」まで読む。</p>
        </section>

        <section className="section section-tight">
          <div className="section-heading">
            <div><p className="eyebrow">THEMES</p><h2>6つのテーマから掘る。</h2></div>
            <span className="queue-count">{storyCount} STORIES</span>
          </div>

          <div className="research-category-grid">
            {researchCategories.map((category,index) => (
              <Link href={`/research/${category.slug}`} className="research-category-card" key={category.slug}>
                <div className={"research-category-photo research-category-photo-"+category.slug} aria-hidden="true"><span>{String(index+1).padStart(2,"0")}</span></div>
                <div>
                  <p className="eyebrow">{category.shortLabel}</p>
                  <h3>{category.label}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="research-category-bottom">
                  <span>{category.topics.length} STORIES</span>
                  <ArrowRight size={18}/>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section section-tight">
          <div className="section-heading">
            <div><p className="eyebrow">PUBLISHED</p><h2>まずは、ここから。</h2></div>
          </div>
          <Link href="/research/offensive-ai" className="published-feature">
            <div className="published-feature-photo" aria-hidden="true"/>
            <div>
              <p className="eyebrow">AI × SECURITY / MARKET MAP</p>
              <h3>AIは、サイバー防御のどこまでを担うのか。</h3>
              <p>攻撃 → 発見 → 対策 → 判断 → 実行 → 再検証。各社をAutomation DepthとAutonomyの違いから読む。</p>
            </div>
            <ArrowRight size={22}/>
          </Link>
        </section>

        <section className="split-section">
          <div>
            <p className="eyebrow">EDITORIAL LENS</p>
            <h2>共通して問うのは、 「人間は何をしなくなるか」。</h2>
          </div>
          <div>
            <ul className="plain-list">
              <li>何ができるのか</li>
              <li>業務のどの工程を担うのか</li>
              <li>AutomationとAutonomyはどこまで進んでいるか</li>
              <li>人間に残る判断と責任は何か</li>
              <li>日本企業が今導入する意味はあるか</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
