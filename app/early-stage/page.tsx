import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Telescope, FlaskConical, Handshake, CheckCircle2, CircleHelp, Layers3, MapPinned, Microscope, Scale, BookOpen, SearchCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { earlyStageCompanies } from "@/lib/earlyStage";
import { COMMON_DIMENSIONS, BUSINESS_DIMENSIONS, DOMAIN_DIMENSIONS } from "@/lib/technologyEvaluation";

export const metadata = {
  title: "Early-Stage | 海外の新技術を日本の選択肢に | TECH MEETS JAPAN",
  description: "海外の初期スタートアップ・大学発技術を、製品・成熟度・競合・日本での用途・一次情報から読み解く。研究から商用化まで、技術の現在地を検証する独立編集ページ。",
};

const maturityLabel: Record<string,string> = {
  research:"研究",prototype:"試作",pilot:"実証",commercial:"商用化",unknown:"未確認",
};

const lenses = [
  { n:"01", icon:Telescope, title:"発見", en:"DISCOVER", desc:"何を解決する技術か。既存の方法では難しかったことは何か。", point:"新規性と代替手段を見分ける" },
  { n:"02", icon:FlaskConical, title:"成熟度", en:"MATURITY", desc:"論文・試作・実証・商用化を区別し、実際に確認された範囲を見る。", point:"デモと実用性を混同しない" },
  { n:"03", icon:Handshake, title:"日本での用途", en:"JAPAN FIT", desc:"国内のどの現場で、誰の課題を、どんな条件なら解決できるか。", point:"導入条件まで具体化する" },
  { n:"04", icon:ShieldCheck, title:"検証", en:"EVIDENCE", desc:"一次情報、第三者報道、編集部の仮説を分け、更新時点を示す。", point:"未確認事項は未確認と書く" },
];
const maturity = [
  { step:"01", name:"研究", en:"RESEARCH", description:"論文・原理検証が中心。技術的可能性を評価する段階。", check:"再現性／測定条件／査読・発表元", caveat:"市場投入済みとは扱わない" },
  { step:"02", name:"試作", en:"PROTOTYPE", description:"試作品・限定デモがある段階。機能の成立と制約を確認。", check:"実機の有無／動作環境／制約条件", caveat:"量産性・耐久性は別途検証" },
  { step:"03", name:"実証", en:"PILOT", description:"特定環境で顧客・パートナーと検証する段階。", check:"実証主体／評価指標／公開結果", caveat:"実証実施と成果達成は別" },
  { step:"04", name:"商用化", en:"COMMERCIAL", description:"提供・導入が始まった段階。継続利用の条件を見る。", check:"提供地域／価格／導入実績／支援体制", caveat:"日本で購入可能とは限らない" },
];
const pathways = [
  { id:"01", icon:Microscope, label:"NEUROTECH / HEALTH", title:"脳・身体とつながる技術", question:"計測精度は、どんな環境でどこまで実証されたか。", fit:"研究機関、医療・福祉、入力インターフェース", gate:"安全性・規制・実環境での検証", href:"/research/gadgets/bridge-ultrasound-bci", link:"超音波BCIの論点を読む" },
  { id:"02", icon:Layers3, label:"INDUSTRIAL / ROBOTICS", title:"現場を変える自動化", question:"人が行う作業のどの工程までを置き換えるか。", fit:"製造、検査、物流、保守", gate:"既存設備との接続・安全・投資回収", href:"/research/robotics/physical-ai-platforms", link:"Physical AIの競争を見る" },
  { id:"03", icon:SearchCheck, label:"AI / SECURITY", title:"判断と検証を自動化するAI", question:"提案だけか、実行と再検証まで担うのか。", fit:"情報システム、開発、セキュリティ運用", gate:"権限境界・説明可能性・監査ログ", href:"/research/offensive-ai", link:"AIセキュリティの現在地を見る" },
  { id:"04", icon:MapPinned, label:"MATERIALS / CLIMATE", title:"材料・環境技術の実装", question:"研究室の性能を、量産・回収・運用コストでも維持できるか。", fit:"素材メーカー、エネルギー、インフラ", gate:"スケール時の収支・調達・規制", href:"/research/ai-industry/manufacturing-ai", link:"製造業の導入視点を見る" },
];
const rubric = [
  { label:"差別化", question:"従来法・競合と比べて、何が本当に違うか", metric:"比較対象と検証条件" },
  { label:"用途", question:"誰が、どの業務・場面で使うか", metric:"利用者・導入場面" },
  { label:"成熟度", question:"研究、試作、実証、商用化のどこか", metric:"公開された実証証拠" },
  { label:"導入負荷", question:"設備、データ、教育、運用の負担は何か", metric:"初期費用・置換コスト" },
  { label:"日本適合", question:"言語、規制、販売・保守体制はどうか", metric:"国内提供状況・未確認事項" },
  { label:"信頼性", question:"誰の発表で、いつ確認された情報か", metric:"一次情報・確認日" },
];

export default function EarlyStagePage() {
  const published = earlyStageCompanies.filter(c => c.editorialStatus === "published" && Boolean(c.publishedPath));
  return <>
    <Header/>
    <main className="es-page">
      <section className="page-hero tmj-image-hero tmj-image-hero-early-stage es-hero">
        <div className="es-hero-inner">
          <p className="eyebrow">DISCOVER / EARLY-STAGE TECHNOLOGY</p>
          <h1>まだ知られていない技術を、<br/>日本の選択肢に。</h1>
          <p className="es-hero-lead">海外のアーリースタートアップ、大学発技術、研究成果。<br/>「面白い」で終わらせず、<strong>何ができるか・どこまで実証されたか・日本で誰が使えるか</strong>を読み解く。</p>
          <div className="es-hero-actions"><a href="#discover" className="es-pill es-pill-light">注目領域を見る <ArrowRight size={16}/></a><a href="#method" className="es-pill es-pill-outline">評価の考え方 <ArrowRight size={16}/></a></div>
          <p className="es-hero-note">独立編集 / 事実と仮説を区別 / 未確認事項を明記</p>
        </div>
      </section>

      <section className="section section-tight es-intro">
        <div className="section-heading"><div><p className="eyebrow">WHY EARLY-STAGE</p><h2>製品になる前から、<br/>見ておく理由。</h2></div><p>成熟した製品の比較だけでは、次の選択肢は見つからない。</p></div>
        <div className="es-intro-grid"><p>まだ売られていない技術にも、将来の顧客課題を変える可能性がある。一方で、<strong>論文の成果、試作品のデモ、実証結果、商用製品は同じではない。</strong></p><p>TECH MEETS JAPANは、企業の宣伝をなぞるのではなく、技術を使う側の視点から現在地を整理する。日本での提携・販売・実証は、<strong>確認済みの事実ではなく検討すべき可能性</strong>として扱う。</p></div>
      </section>

      <section className="section section-tight" id="method">
        <div className="section-heading"><div><p className="eyebrow">THE EDITORIAL LENS</p><h2>技術と、その次の一歩。</h2></div><p>四つの問いを通して、可能性と現在地を切り分ける。</p></div>
        <div className="steps-grid">{lenses.map(x=><div className="step-card es-step" key={x.n}><x.icon size={26}/><span>{x.n}</span><small>{x.en}</small><h3>{x.title}</h3><p>{x.desc}</p><strong>{x.point}</strong></div>)}</div>
      </section>

      <section className="es-dark-band">
        <div className="es-container"><div className="es-band-heading"><p className="eyebrow">MATURITY MATTERS</p><h2>「できる」と「使える」の<br/>間には、距離がある。</h2><p>発表の派手さではなく、公開された証拠に基づいて段階を判断する。</p></div>
          <div className="es-maturity-grid">{maturity.map(x=><article key={x.step} className="es-maturity-card"><div className="es-maturity-top"><span>{x.step}</span><small>{x.en}</small></div><h3>{x.name}</h3><p>{x.description}</p><div className="es-maturity-check"><CheckCircle2 size={15}/><span>{x.check}</span></div><div className="es-maturity-caveat">{x.caveat}</div></article>)}</div>
          <p className="es-disclaimer">※成熟度は個別の公開情報を確認した上で付与します。情報不足の場合は「未確認」と表記します。</p>
        </div>
      </section>

      <section className="section section-tight" id="discover">
        <div className="section-heading"><div><p className="eyebrow">EXPLORE / TECHNOLOGY FRONTIERS</p><h2>どの技術が、<br/>日本の現場を変えるか。</h2></div><p>掲載企業の宣伝ではなく、検討すべき技術領域と問いを先に提示する。</p></div>
        <div className="es-pathways">{pathways.map(x=><article className="es-pathway" key={x.id}><div className="es-pathway-head"><x.icon size={27}/><span>{x.id} / {x.label}</span></div><h3>{x.title}</h3><p className="es-pathway-question">{x.question}</p><dl><div><dt>日本での用途候補</dt><dd>{x.fit}</dd></div><div><dt>導入前に確かめること</dt><dd>{x.gate}</dd></div></dl><Link href={x.href}>{x.link}<ArrowUpRight size={16}/></Link></article>)}</div>
        <p className="es-annotation">ここで紹介するのは技術領域の検討軸です。リンク先のResearch記事は、Early-Stage掲載企業や提携希望企業の一覧ではありません。</p>
      </section>

      <section className="section section-tight es-score">
        <div className="section-heading"><div><p className="eyebrow">EVALUATION / SIX QUESTIONS</p><h2>記事を読む前に、<br/>確かめたいこと。</h2></div><p>評価はスコアだけで完結しない。根拠と不確実性を併記する。</p></div>
        <div className="es-rubric">{rubric.map((x,i)=><div className="es-rubric-row" key={x.label}><span>{String(i+1).padStart(2,"0")}</span><strong>{x.label}</strong><p>{x.question}</p><small>{x.metric}</small></div>)}</div>
      </section>

      <section className="section section-tight es-framework">
        <div className="section-heading"><div><p className="eyebrow">EVALUATION / TWO LAYERS</p><h2>共通の物差しと、<br/>技術ごとの専門評価。</h2></div><p>AIだけを基準にしない。すべての技術を同じ問いから見て、必要な専門項目を加える。</p></div>
        <div className="es-intro-grid"><div><h3>共通評価・全技術</h3><p>技術の独自性、用途、成熟度、実用性、導入負荷、日本市場適合性、競争優位性、検証可能性の8項目。</p></div><div><h3>分野別評価・該当技術のみ</h3><p>AIなら自律実行範囲、半導体なら消費電力と量産性、医療なら安全性と臨床検証、素材なら効率とライフサイクル。非該当項目は評価対象外にする。</p></div></div>
        <div className="es-framework-count"><span>共通評価：{COMMON_DIMENSIONS.length}項目</span><span>事業評価：{BUSINESS_DIMENSIONS.length}項目</span><span>分野別モジュール：{Object.keys(DOMAIN_DIMENSIONS).length}分類</span></div>
        <p className="es-annotation">技術の性能と事業の成立可能性は別々に記録します。出典不足は低評価ではなく「未確認」とし、根拠のない総合スコアは付けません。</p>
      </section>
      <section className="section section-tight es-stories" id="stories">
        <div className="section-heading"><div><p className="eyebrow">EARLY-STAGE / STORIES</p><h2>検証できた技術から、<br/>記事にする。</h2></div><p>一次情報・成熟度・競合・日本での用途を確認したものから公開。</p></div>
        {published.length ? <div className="research-grid">{published.map(c=><Link className="research-card" href={c.publishedPath!} key={c.id}><p className="eyebrow">{c.country} / {maturityLabel[c.maturity]}</p><h3>{c.product}</h3><p>{c.summary}</p><strong>{c.company} <ArrowRight size={16}/></strong></Link>)}</div> :
          <div className="es-empty"><div><p className="eyebrow">EDITORIAL PIPELINE</p><h3>掲載準備中。<br/>未検証の企業は並べません。</h3><p>研究・試作・実証・商用化を区別し、出典と日本での用途を確認できた記事から追加します。掲載数を増やすために未確認の情報を公開することはありません。</p><Link href="/research" className="es-text-link">公開中のResearchを読む <ArrowRight size={16}/></Link></div><div className="es-empty-side"><BookOpen size={34}/><strong>次の記事で確認すること</strong><span>技術の仕組みと差別化</span><span>実証された範囲と制約</span><span>競合・代替技術</span><span>日本市場での用途と障壁</span><span>公式情報・確認日</span></div></div>}
      </section>

      <section className="section section-tight es-faq">
        <div className="section-heading"><div><p className="eyebrow">FAQ / EDITORIAL POLICY</p><h2>何を掲載し、<br/>何を断定しないか。</h2></div></div>
        <div className="es-faq-grid"><div><CircleHelp size={20}/><h3>資金調達や売上は載せる？</h3><p>公開情報で確認できる場合に限り、通貨・金額・発表日・出典を記載します。推定値は事実と区別します。</p></div><div><CircleHelp size={20}/><h3>日本展開の意思は確認済み？</h3><p>企業による公式表明や直接確認がない限り「未確認」です。日本での用途がありそうなことと、進出希望は別です。</p></div><div><CircleHelp size={20}/><h3>研究段階の技術も扱う？</h3><p>扱います。ただし、論文・試作・実証・商用化を混同せず、実現していない用途は将来構想として示します。</p></div><div><CircleHelp size={20}/><h3>掲載企業と提携している？</h3><p>掲載は提携・推薦・販売代理契約を意味しません。広告・有償支援がある場合は編集記事と区別して明示します。</p></div></div>
      </section>

      <section className="es-final"><div className="es-container es-final-inner"><div><p className="eyebrow">FROM SIGNAL TO OPPORTUNITY</p><h2>技術の未来を、<br/>日本で使える選択肢へ。</h2><p>期待だけでも、懐疑だけでも終わらせない。確認できた事実から、次の問いを立てる。</p></div><Link href="/research" className="es-pill es-pill-light">Researchを探す <ArrowRight size={17}/></Link></div></section>

      <section className="neutrality es-neutrality"><ShieldCheck size={28}/><div><p className="eyebrow">EDITORIAL INDEPENDENCE</p><h2>掲載と提携は、別の判断。</h2></div><p>記事は独立した編集判断で制作します。日本企業との提携可能性は分析上の仮説であり、企業が実際に協業先を募集していることを意味しません。有償の支援やスポンサー記事は区別して表示します。</p></section>
    </main>
    <Footer/>
    <style>{`
      .es-page{overflow:hidden}.es-page .es-container{max-width:1240px;margin:0 auto;padding:0 28px}.es-page .section{scroll-margin-top:92px}
      .es-page .es-hero{min-height:570px;display:flex;align-items:center;padding:90px max(28px,calc((100vw - 1184px)/2));position:relative}.es-hero-inner{position:relative;z-index:1;max-width:980px}.es-page .es-hero h1{font-size:clamp(52px,7vw,100px);line-height:1.07;letter-spacing:-.075em;margin:25px 0 32px}.es-hero-lead{max-width:780px;font-size:clamp(16px,1.7vw,20px);line-height:1.85}.es-hero-lead strong{font-weight:800}.es-hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}.es-pill{display:inline-flex;align-items:center;justify-content:center;gap:18px;padding:14px 22px;border-radius:999px;font-size:14px;font-weight:800;transition:transform .2s}.es-pill:hover{transform:translateY(-2px)}.es-pill-light{background:#f5f2e9;color:#111}.es-pill-outline{border:1px solid rgba(255,255,255,.65);color:#fff}.es-hero-note{font-size:12px;letter-spacing:.06em;opacity:.75;margin-top:35px}
      .es-intro-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;padding-top:4px}.es-intro-grid p{font-size:18px;line-height:1.95;color:#50514b}.es-intro-grid strong{color:#141512}.es-page .es-step{position:relative;min-height:270px}.es-step small{display:block;font-size:10px;letter-spacing:.1em;color:#85867e;margin:18px 0 6px}.es-step strong{display:block;margin-top:22px;font-size:12px;color:#20211d}
      .es-dark-band{background:#101b1d;color:#f4f4ec;padding:92px 0}.es-band-heading{max-width:850px;margin-bottom:42px}.es-band-heading .eyebrow{color:#a7c6c3}.es-band-heading h2{font-size:clamp(38px,5.4vw,70px);letter-spacing:-.07em;line-height:1.14;margin:15px 0 25px}.es-band-heading>p:last-child{color:#b5c3c0;line-height:1.8}.es-maturity-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.es-maturity-card{border:1px solid #3b5151;padding:26px 22px;min-height:325px;background:rgba(255,255,255,.035)}.es-maturity-top{display:flex;justify-content:space-between;color:#b4c9c5;font-size:12px}.es-maturity-top small{font-size:10px;letter-spacing:.07em}.es-maturity-card h3{font-size:32px;margin:34px 0 14px}.es-maturity-card>p{color:#d0d8d5;font-size:14px;line-height:1.85;min-height:79px}.es-maturity-check{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#d6ff39;line-height:1.6;margin:20px 0}.es-maturity-check svg{flex-shrink:0}.es-maturity-caveat{border-top:1px solid #3b5151;padding-top:13px;font-size:12px;color:#aab8b6}.es-disclaimer{color:#a8b9b6;font-size:12px;margin-top:24px}
      .es-pathways{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.es-pathway{padding:32px;border:1px solid var(--line);background:#faf8f2;display:flex;flex-direction:column;min-height:380px}.es-pathway-head{display:flex;align-items:center;justify-content:space-between;color:#565d56}.es-pathway-head span{font-size:11px;letter-spacing:.07em}.es-pathway h3{font-size:clamp(24px,3vw,36px);letter-spacing:-.06em;margin:28px 0 12px}.es-pathway-question{font-size:16px;line-height:1.7;font-weight:700}.es-pathway dl{margin:20px 0 28px}.es-pathway dl div{display:grid;grid-template-columns:145px 1fr;gap:12px;padding:10px 0;border-top:1px solid var(--line);font-size:13px}.es-pathway dt{color:#777a72}.es-pathway dd{margin:0}.es-pathway>a{display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:800;margin-top:auto;text-decoration:underline;text-underline-offset:5px}.es-annotation{color:#74766f;font-size:12px;line-height:1.8;margin-top:18px}
      .es-rubric{border-top:2px solid #161714}.es-rubric-row{display:grid;grid-template-columns:48px 145px minmax(0,1fr) 220px;align-items:center;gap:15px;border-bottom:1px solid var(--line);padding:20px 12px}.es-rubric-row>span{font-size:12px;color:#999}.es-rubric-row strong{font-size:18px}.es-rubric-row p{margin:0;font-size:14px}.es-rubric-row small{color:#797c74;font-size:12px}
      .es-empty{display:grid;grid-template-columns:1.4fr .8fr;border:1px solid var(--line);background:#faf8f2}.es-empty>div:first-child{padding:52px}.es-empty h3{font-size:clamp(30px,4vw,52px);letter-spacing:-.06em;line-height:1.3;margin:18px 0}.es-empty p:not(.eyebrow){max-width:650px;color:#5c6057;line-height:1.9}.es-text-link{display:inline-flex;gap:8px;align-items:center;font-weight:800;font-size:14px;margin-top:22px;text-decoration:underline;text-underline-offset:6px}.es-empty-side{background:#e9e8df;padding:42px;display:flex;flex-direction:column;gap:17px}.es-empty-side strong{font-size:18px;margin:10px 0}.es-empty-side span{border-top:1px solid #cdcdc3;padding-top:12px;font-size:13px}
      .es-framework-count{display:flex;flex-wrap:wrap;gap:12px;margin-top:25px}.es-framework-count span{border:1px solid var(--line);border-radius:999px;padding:9px 15px;font-size:12px;font-weight:700}.es-framework .es-intro-grid h3{font-size:24px;letter-spacing:-.04em}.es-framework .es-intro-grid p{font-size:15px}.es-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0 44px}.es-faq-grid>div{border-top:1px solid var(--line);padding:25px 0}.es-faq-grid h3{font-size:20px;margin:15px 0}.es-faq-grid p{color:#666a62;line-height:1.85;font-size:14px}.es-final{background:#164b4a;color:#fff;padding:74px 0}.es-final-inner{display:flex;justify-content:space-between;align-items:end;gap:35px}.es-final h2{font-size:clamp(36px,5vw,66px);line-height:1.2;letter-spacing:-.065em;margin:14px 0}.es-final p:last-child{color:#d2e4df;line-height:1.8}.es-final .es-pill{flex-shrink:0}.es-neutrality{margin-top:0}
      @media(max-width:900px){.es-maturity-grid{grid-template-columns:repeat(2,1fr)}.es-rubric-row{grid-template-columns:34px 115px 1fr}.es-rubric-row small{grid-column:3}.es-pathway dl div{grid-template-columns:120px 1fr}}
      @media(max-width:640px){.es-page .es-hero{padding:76px 22px;min-height:590px}.es-page .es-hero h1{font-size:clamp(44px,11vw,66px)}.es-hero-lead br{display:none}.es-page .es-container{padding:0 20px}.es-intro-grid,.es-pathways,.es-faq-grid,.es-empty{grid-template-columns:1fr}.es-intro-grid{gap:0}.es-intro-grid p{font-size:16px}.es-maturity-grid{grid-template-columns:1fr}.es-maturity-card{min-height:auto}.es-maturity-card>p{min-height:auto}.es-dark-band{padding:66px 0}.es-pathway{padding:24px;min-height:auto}.es-rubric-row{grid-template-columns:30px 1fr;gap:8px;padding:20px 0}.es-rubric-row p,.es-rubric-row small{grid-column:2}.es-empty>div:first-child,.es-empty-side{padding:28px}.es-final-inner{align-items:start;flex-direction:column}.es-final{padding:60px 0}}
    `}</style>
  </>;
}
