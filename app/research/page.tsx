import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            <div><p className="eyebrow">RESEARCH LIBRARY</p><h2>技術分野から探す。</h2><p className="research-index-intro">関心のある分野を選んで、個別の技術・製品・市場分析を読む。</p></div>
            <span className="queue-count">{storyCount} ARTICLES</span>
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


      </main>
      <Footer/>
    </>
  );
}
