import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "特集 | TECH MEETS JAPAN",
  description: "海外技術の未来をテーマ別に深掘り。AIによる攻撃・防御、ディープフェイク、BCIなどを読み解く。",
};

const features = [
  {
    eyebrow:"AI × SECURITY / SPECIAL REPORT",
    title:"AIは、サイバー防御のどこまでを担うのか。",
    summary:"XBOW、Pentera、Horizon3などを、攻撃から再検証までの工程とAIの自律性で比較する。",
    href:"/research/offensive-ai",
    status:"published",
    art:"security",
  },
  {
    eyebrow:"DIGITAL TRUST / UPCOMING",
    title:"ディープフェイクとの攻防。『本物』をどう証明するか。",
    summary:"検出AI、本人確認、生成物の来歴、証拠保全。単一の検出率だけでは測れない防御の全体像。",
    status:"planning",
    art:"trust",
  },
  {
    eyebrow:"NEUROTECH / UPCOMING",
    title:"脳とコンピューターは、手術なしでつながるのか。",
    summary:"非侵襲型BCI、超音波、脳活動推定。技術成熟度と社会実装の距離を検証する。",
    status:"planning",
    art:"neuro",
  },
  {
    eyebrow:"PHYSICAL AI / UPCOMING",
    title:"ロボットは、どこまで人間の仕事を引き受けるのか。",
    summary:"産業ロボット、研究室自動化、汎用ロボット。AIが物理世界で動くための壁を整理する。",
    status:"planning",
    art:"robotics",
  },
  {
    eyebrow:"AI CREATIVE / UPCOMING",
    title:"映像AIの次の競争は、生成能力だけではない。",
    summary:"制作ワークフロー、権利処理、IP、コスト。日本のコンテンツ産業から見る市場の転換点。",
    status:"planning",
    art:"creative",
  },
  {
    eyebrow:"EARLY-STAGE / UPCOMING",
    title:"日本企業がまだ知らない技術は、どこに眠っているのか。",
    summary:"論文・特許・研究助成金から海外ディープテックを発掘し、日本との接点を探る。",
    status:"planning",
    art:"early",
  },
] as const;

export default function FeaturesPage(){
  return <>
    <Header/>
    <main>
      <section className="page-hero tmj-image-hero tmj-image-hero-research features-page-hero">
        <p className="eyebrow">SPECIAL FEATURES</p>
        <h1>技術の変化を、<br/>一つのテーマから深く読む。</h1>
        <p>機能紹介では見えない競争構造と、その先の世界。編集部が選んだテーマを横断的に掘り下げる。</p>
      </section>
      <section className="section section-tight">
        <div className="section-heading">
          <div><p className="eyebrow">EDITOR'S SELECTION</p><h2>特集を読む。</h2></div>
          <p>公開済み記事と企画中のテーマを区別しています。</p>
        </div>
        <div className="features-grid">
          {features.map((f,i)=><div className={"features-card features-card-"+f.art} key={f.title}>
            <div className="features-card-art" aria-hidden="true"/>
            <div className="features-card-body">
              <p className="eyebrow">{String(i+1).padStart(2,"0")} / {f.eyebrow}</p>
              <h3>{f.title}</h3>
              <p>{f.summary}</p>
              {f.status==="published" ?
                <Link href={f.href} className="features-card-action">特集を読む <ArrowRight size={17}/></Link> :
                <span className="features-coming">企画・調査中</span>}
            </div>
          </div>)}
        </div>
      </section>
    </main>
    <Footer/>
  </>
}
