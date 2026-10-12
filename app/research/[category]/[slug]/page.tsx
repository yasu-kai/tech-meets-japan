import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { researchStories, storyMap, ResearchStory } from "@/lib/researchStories";

function sourceContext(story:ResearchStory,label:string){
  const rawTerms = label
    .split(/\s*[—–|-]\s*|\s+/)
    .map(x=>x.trim())
    .filter(x=>x.length>2 && !["Product","Platform","Solutions","Enterprise","Newsroom","Blog"].includes(x));

  let best:{heading:string;score:number}|null=null;

  for(const section of story.sections){
    const sectionText=[section.heading,...section.body].join(" ").toLowerCase();
    const score=rawTerms.reduce((n,term)=>n+(sectionText.includes(term.toLowerCase())?1:0),0);
    if(score>0 && (!best || score>best.score)) best={heading:section.heading,score};
  }

  if(!best){
    return `この記事で扱った「${label}」の機能・提供方針を確認できる公式情報です。記事内の整理と、公式側の最新説明・仕様を見比べられます。`;
  }

  return `本文「${best.heading}」で扱った論点に対応する一次情報です。記事内の整理を、公式側の機能説明・仕様・提供方針で確認できます。`;
}

export function generateStaticParams(){
  return researchStories.map(story=>({category:story.category,slug:story.slug}));
}

export default async function StoryPage({params}:{params:Promise<{category:string;slug:string}>}){
  const {category,slug}=await params;
  const story=storyMap[slug];
  if(!story || story.category!==category) notFound();

  return <>
    <Header/>
    <main>
      <article className="story-article">
        <section className={"story-hero story-hero-"+story.slug}>
          <Link href={"/research/"+story.category} className="research-back"><ArrowLeft size={14}/> Back to category</Link>
          <p className="eyebrow">{story.eyebrow}</p>
          <h1>{story.title}</h1>
          <p className="story-dek">{story.dek}</p>
          <div className="story-companies">{story.companies.map(c=><span key={c}>{c}</span>)}</div>
        </section>

        <section className="story-thesis">
          <span>EDITORIAL THESIS</span>
          <strong>{story.thesis}</strong>
        </section>

        <section className="story-depth">
          <div><span>CURRENT</span><strong>{story.depth.current}</strong></div>
          <ArrowRight size={20}/>
          <div><span>TARGET</span><strong>{story.depth.target}</strong></div>
          <div className="story-human"><span>HUMAN REMAINS</span><strong>{story.depth.human}</strong></div>
        </section>

        <div className="story-body">
          {story.sections.map((section,i)=><section key={section.heading} className="story-section">
            <div className="story-section-index">{String(i+1).padStart(2,"0")}</div>
            <div>
              <h2>{section.heading}</h2>
              {section.body.map((p,j)=><p key={j}>{p}</p>)}
            </div>
          </section>)}

          <section className="story-question">
            <span>THE QUESTION</span>
            <h2>この市場が成功した世界で、 人間は何をしなくなるのか。</h2>
          </section>

          <section className="story-sources">
            <p className="eyebrow">PRIMARY SOURCES</p>
            <h2>公開情報を確認する。</h2>
            <div>
              {story.sources.map((source,index)=><a className="story-source-link" key={source.url} href={source.url} target="_blank" rel="noreferrer">
                <div className="story-source-index">{String(index+1).padStart(2,"0")}</div>
                <div className="story-source-copy">
                  <strong>{source.label}</strong>
                  <div className="story-source-context-label">本文との対応</div>
                  <p>{sourceContext(story,source.label)}</p>
                </div>
                <div className="story-source-action"><span>公式情報を見る</span><ArrowRight size={16}/></div>
              </a>)}
            </div>
            <p className="research-note">TECH MEETS JAPANによる公開情報ベースの編集・整理。各社の機能、提供地域、仕様は更新される可能性があります。</p>
          </section>
        </div>
      </article>
    </main>
    <Footer/>
  </>;
}
