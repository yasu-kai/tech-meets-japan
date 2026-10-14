import Link from "next/link";
import { ArrowRight, ShieldCheck, Telescope, FlaskConical, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { earlyStageCompanies } from "@/lib/earlyStage";

export const metadata = {
  title: "Early-Stage | TECH MEETS JAPAN",
  description: "海外の初期スタートアップ・大学発技術を、製品・成熟度・日本での用途から探る独立編集カテゴリ。",
};

const maturityLabel: Record<string,string> = {
  research:"研究",prototype:"試作",pilot:"実証",commercial:"商用化",unknown:"未確認",
};
export default function EarlyStagePage() {
  const published = earlyStageCompanies.filter(c =>
    c.editorialStatus === "published" && Boolean(c.publishedPath)
  );
  return <>
    <Header/>
    <main>
      <section className="page-hero tmj-image-hero tmj-image-hero-early-stage">
        <p className="eyebrow">DISCOVER / EARLY-STAGE TECHNOLOGY</p>
        <h1>まだ知られていない技術を、<br/>日本の選択肢に。</h1>
        <p>海外のアーリースタートアップ、大学発技術、研究成果。製品化の段階と使い道、競合、日本での可能性を独立した編集基準で読み解く。</p>
      </section>
      <section className="section section-tight">
        <div className="section-heading">
          <div><p className="eyebrow">THE EDITORIAL LENS</p><h2>技術と、その次の一歩。</h2></div>
          <p>企業の宣伝ではなく、技術を使う側の判断材料を届ける。</p>
        </div>
        <div className="steps-grid">
          <div className="step-card"><Telescope/><span>01</span><h3>発見</h3><p>どんな問題を解決し、既存技術と何が違うか。</p></div>
          <div className="step-card"><FlaskConical/><span>02</span><h3>成熟度</h3><p>研究・試作・実証・商用化のどの段階にあるか。</p></div>
          <div className="step-card"><Handshake/><span>03</span><h3>日本での用途</h3><p>どんな企業・設備・実証環境と接点を持ちうるか。</p></div>
          <div className="step-card"><ShieldCheck/><span>04</span><h3>検証</h3><p>確認済みの事実と編集部の仮説を区別し、出典を明記。</p></div>
        </div>
      </section>
      <section className="section section-tight">
        <div className="section-heading">
          <div><p className="eyebrow">EARLY-STAGE / STORIES</p><h2>注目の技術を読む。</h2></div>
          <p>掲載前には情報源・成熟度・調達情報・日本展開の有無を確認する。</p>
        </div>
        {published.length ? <div className="research-grid">{published.map(c=>
          <Link className="research-card" href={c.publishedPath!} key={c.id}>
            <p className="eyebrow">{c.country} / {maturityLabel[c.maturity]}</p>
            <h3>{c.product}</h3><p>{c.summary}</p>
            <strong>{c.company} <ArrowRight size={16}/></strong>
          </Link>
        )}</div> : <div className="empty-state">
          <h3>記事を準備しています。</h3>
          <p>一次情報と日本市場の接点を検証できた記事から公開します。未確認の提携希望や資金調達情報は掲載しません。</p>
          <Link href="/research" className="text-link">既存のResearchを読む <ArrowRight size={16}/></Link>
        </div>}
      </section>
      <section className="neutrality">
        <ShieldCheck size={28}/>
        <div><p className="eyebrow">EDITORIAL INDEPENDENCE</p><h2>掲載と提携は、別の判断。</h2></div>
        <p>記事は独立した編集判断で制作します。日本企業との提携可能性は分析上の仮説であり、企業が実際に協業先を募集していることを意味しません。有償の支援やスポンサー記事は区別して表示します。</p>
      </section>
    </main>
    <Footer/>
  </>;
}
