import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { researchCategoryMap, researchCategories } from "@/lib/research";

export function generateStaticParams(){
  return researchCategories.map(category => ({ category: category.slug }));
}

export default async function ResearchCategoryPage({ params }:{ params:Promise<{category:string}> }){
  const { category:slug } = await params;
  const category = researchCategoryMap[slug];
  if(!category) notFound();

  return (
    <>
      <Header/>
      <main>
        <section className="page-hero research-category-hero">
          <Link href="/research" className="research-back"><ArrowLeft size={14}/> Research</Link>
          <p className="eyebrow">{category.shortLabel}</p>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
          <div className="category-thesis"><span>EDITORIAL LENS</span><strong>{category.thesis}</strong></div>
        </section>

        <section className="section section-tight">
          <div className="section-heading"><div><p className="eyebrow">EDITORIAL QUEUE</p><h2>まず、この5本から掘る。</h2></div><span className="queue-count">{category.topics.length} STORIES</span></div>
          <div className="topic-queue">
            {category.topics.map((topic,index) => {
              const content = (
                <>
                  <div className="topic-index">{String(index+1).padStart(2,"0")}</div>
                  <div className="topic-main">
                    <div className="topic-meta"><span>{topic.format}</span><span className={topic.status==="published"?"published":"queued"}>{topic.status==="published"?"PUBLISHED":"QUEUE"}</span></div>
                    <h3>{topic.title}</h3>
                    <p>{topic.kicker}</p>
                  </div>
                  <ArrowRight size={18}/>
                </>
              );
              return topic.href
                ? <Link href={topic.href} className="topic-row" key={topic.slug}>{content}</Link>
                : <div className="topic-row topic-row-queued" key={topic.slug}>{content}</div>;
            })}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
