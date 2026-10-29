import GeneratedEditorialImage from "@/components/GeneratedEditorialImage";
import { generatedEditorialImage, isProtectedEditorialArticle } from "@/lib/generatedEditorial";
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
    return `この記事で紹介した「${label}」について、公式サイトで詳しく確認できます。`;
  }

  return `本文「${best.heading}」で扱った論点について、公式サイトで詳しく確認できます。`;
}

export function generateStaticParams(){
  return researchStories.map(story=>({category:story.category,slug:story.slug}));
}

export default async function StoryPage({params}:{params:Promise<{category:string;slug:string}>}){
  const {category,slug}=await params;
  const story=storyMap[slug];
  if(!story || story.category!==category) notFound();
  const image=generatedEditorialImage(story.slug);
  // Keep the reviewed 32 articles identical, including their existing related cards.
  const relatedImage=(itemSlug:string)=>{
    const candidate=generatedEditorialImage(itemSlug);
    return isProtectedEditorialArticle(story.slug) && candidate?.batch ? undefined : candidate;
  };
  const isFrontierTech=["nori-a3","savor-carbon-fats","chargebotic-kestrel","ixana-wir","mudra-link","ipolish-digital-nails"].includes(story.slug);
  const related=researchStories.filter(item=>item.category===story.category && item.slug!==story.slug).slice(0,3);

  return <>
    <Header/>
    <main>
      <article className="story-article">
        <section className={"story-hero story-hero-"+story.slug}>
          <Link href={"/research/"+story.category} className="research-back"><ArrowLeft size={14}/> Back to category</Link>
          <p className="eyebrow">{story.eyebrow}</p>
          <h1>{story.title}</h1>
          <p className="story-dek">{story.dek}</p>
          {image ? <figure className="generated-editorial-hero">
            <GeneratedEditorialImage slug={story.slug} alt={story.title+"（AI生成イメージ）"} priority/>
            <figcaption>{image.note || "AI生成イメージ"}</figcaption>
          </figure> : <div className={"story-editorial-visual story-editorial-visual-"+story.category+" story-editorial-with-image story-editorial-article-"+story.slug}>
            <div className="story-visual-index">TECH MEETS JAPAN / {story.eyebrow}</div>
            <div className="story-visual-title">{story.title}</div>
            <div className="story-visual-companies">{story.companies.slice(0,4).map(c=><span key={c}>{c}</span>)}</div>
            <div className="story-visual-grid" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
          </div>}
          <div className="story-companies">{story.companies.map(c=><span key={c}>{c}</span>)}</div>
        </section>

        <section className="story-thesis">
          <span>EDITORIAL THESIS</span>
          <strong>{story.thesis}</strong>
        </section>

        <section className="story-depth">
          <div><span>{isFrontierTech?"CURRENT MATURITY":"CURRENT"}</span><strong>{story.depth.current}</strong></div>
          <ArrowRight size={20}/>
          <div><span>{isFrontierTech?"WHAT TO VERIFY":"TARGET"}</span><strong>{story.depth.target}</strong></div>
          <div className="story-human"><span>{isFrontierTech?"ADOPTION & SAFETY":"HUMAN REMAINS"}</span><strong>{story.depth.human}</strong></div>
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
            <h2>{isFrontierTech?"この技術が日本で使われるには、次に何を検証する必要があるか。":"この市場が成功した世界で、 人間は何をしなくなるのか。"}</h2>
          </section>

          <section className="story-sources">
            <p className="eyebrow">PRIMARY SOURCES</p>
            <h2>記事に登場したプロダクトを、公式サイトで確認する。</h2>
            <p className="story-sources-intro">本文で紹介したプロダクトや機能を、各社の公式情報からさらに詳しく見られます。気になったものだけ、そのまま公式サイトへ。</p>
            <div>
              {story.sources.map((source,index)=><a className="story-source-link" key={source.url} href={source.url} target="_blank" rel="noreferrer">
                <div className="story-source-index">{String(index+1).padStart(2,"0")}</div>
                <div className="story-source-copy">
                  <strong>{source.label}</strong>
                  <div className="story-source-context-label">この記事で触れたポイント</div>
                  <p>{sourceContext(story,source.label)}</p>
                </div>
                <div className="story-source-action"><span>公式情報を見る</span><ArrowRight size={16}/></div>
              </a>)}
            </div>
            <p className="research-note">TECH MEETS JAPANによる公開情報ベースの編集・整理。各社の機能、提供地域、仕様は更新される可能性があります。</p>
          </section>

          {related.length>0 && <section className="story-related">
            <div className="story-related-heading">
              <div>
                <p className="eyebrow">NEXT IN THIS THEME</p>
                <h2>このテーマを、別の角度から読む。</h2>
              </div>
            </div>
            <div className="story-related-grid">
              {related.map((item,index)=><Link className="story-related-card" href={"/research/"+item.category+"/"+item.slug} key={item.slug}>
                <span>{String(index+1).padStart(2,"0")}</span>
                <div>
                  <div className={"story-related-image story-related-image-"+item.category+" story-related-image-"+item.slug+(relatedImage(item.slug)?" generated-editorial-frame":"")} style={relatedImage(item.slug)?{backgroundImage:"none"}:undefined} aria-hidden="true"><GeneratedEditorialImage slug={item.slug} enabled={Boolean(relatedImage(item.slug))}/></div>
                  <p>{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                </div>
                <ArrowRight size={18}/>
              </Link>)}
            </div>
          </section>}
        </div>
      </article>
    </main>
    <Footer/>
  </>;
}
