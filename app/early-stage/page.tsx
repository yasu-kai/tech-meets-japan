import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { earlyStageCompanies } from "@/lib/earlyStage";

export const metadata = {
  title: "Early-Stage｜世界の新しい技術を見つける｜TECH MEETS JAPAN",
  description: "空気から作る油脂、家庭用双腕ロボット、超音波BCI。海外の新しい技術を、その面白さと日本での可能性から紹介。",
};

const editorialPicks = [
  {id:"savor",theme:"FOODTECH",headline:"バターを作るのに、牛も畑もいらない。",lead:"炭素から脂肪を合成するSavor。原料の常識を変える技術は、食品工場に入れるのか。",read:"油脂はどこから生まれる？",number:"01",className:"food"},
  {id:"nori-robotics",theme:"ROBOTICS",headline:"約25万円の双腕ロボットが、家にやってくる。",lead:"NORI A3は人間の家事をどこまで手伝えるのか。できることと、まだ難しいこと。",read:"家事ロボットの現在地を見る",number:"02",className:"robot"},
  {id:"bridge-neurotech",theme:"NEUROTECH",headline:"脳にチップを埋めない。超音波で意図を読む。",lead:"手術なしのBCIに挑むBridge Neurotech。研究段階の技術が、日常の入力装置になる日は来るか。",read:"超音波BCIを知る",number:"03",className:"brain"},
  {id:"chargebotic",theme:"ENERGY",headline:"送電線から、ドローンが電気をもらう。",lead:"遠隔地の電源問題を解決するChargebotic。18Wの実証から見える現実と限界。",read:"磁界を使う給電を知る",number:"04",className:"energy"},
];
const briefLabels: Record<string,string> = {
  "ixana":"人体を通信路にする半導体。Bluetoothとは何が違う？",
  "wearable-devices-mudra":"手首から指先の動きを読み取る。次の入力装置になる？",
  "ipolish":"ネイルが300色以上に変わる。爪に電池がない仕組みとは？",
};
const maturityLabel: Record<string,string>={research:"研究段階",prototype:"試作・初期出荷",pilot:"実証段階",commercial:"商用化段階",unknown:"成熟度未確認"};

export default function EarlyStagePage(){
  const published=earlyStageCompanies.filter(c=>c.editorialStatus==="published"&&c.publishedPath);
  const picks=editorialPicks.map(p=>({p,company:published.find(c=>c.id===p.id)})).filter(v=>Boolean(v.company));
  const more=published.filter(c=>!editorialPicks.some(p=>p.id===c.id));
  return <>
    <Header/>
    <main className="es-relaunch">
      <section className="esr-hero">
        <div className="esr-shell">
          <p className="esr-overline">EARLY-STAGE / DISCOVER WHAT'S NEXT</p>
          <h1>まだ知らない技術に、<br/>出会おう。</h1>
          <p className="esr-hero-copy">牛を使わないバター。家事を覚えるロボット。脳に埋め込まないコンピューターインターフェース。世界では、ちょっと信じられない技術が、もう動き始めている。</p>
          <Link href="#stories" className="esr-hero-link">新しい技術を見つける <ArrowRight size={18}/></Link>
        </div>
      </section>

      <section id="stories" className="esr-shell esr-main">
        <div className="esr-heading">
          <p className="esr-overline esr-overline-dark">CURATED STORIES</p>
          <h2>まずは、この4つから。</h2>
          <p>「なんだこれ？」から始まる技術を、仕組みと現実の両面から見てみよう。</p>
        </div>
        <div className="esr-features">
        {picks.map(({p,company},index)=><Link className={"esr-feature esr-"+p.className} key={p.id} href={company!.publishedPath!}>
          <div className="esr-feature-art" aria-hidden="true"><span className="esr-art-type">{p.theme}</span><strong>{p.number}</strong><span className="esr-art-mark">{p.theme==="FOODTECH"?"C → F":p.theme==="ROBOTICS"?"↗":p.theme==="NEUROTECH"?"∿":"⚡"}</span></div>
          <div className="esr-feature-text"><span className="esr-overline esr-overline-dark">{p.theme} <span className="esr-dot">•</span> {maturityLabel[company!.maturity]}</span>
            <h3>{p.headline}</h3><p>{p.lead}</p><span className="esr-read">{p.read}<ArrowUpRight size={18}/></span>
          </div>
        </Link>)}
        </div>
      </section>

      {more.length>0&&<section className="esr-more">
        <div className="esr-shell">
          <div className="esr-heading"><p className="esr-overline esr-overline-dark">MORE TO EXPLORE</p><h2>まだまだ、面白い。</h2><p>見た目は未来っぽい。でも、本当に使うには何が必要なのか。</p></div>
          <div className="esr-more-grid">{more.map(c=><Link href={c.publishedPath!} className="esr-small" key={c.id}>
            <span className="esr-overline esr-overline-dark">{c.company} / {maturityLabel[c.maturity]}</span>
            <h3>{briefLabels[c.id]||c.product}</h3><p>{c.summary}</p><span className="esr-read">記事を読む <ArrowUpRight size={16}/></span>
          </Link>)}</div>
        </div>
      </section>}

      <section className="esr-shell esr-editorial">
        <div><p className="esr-overline esr-overline-dark">WHY IT MATTERS IN JAPAN</p><h2>面白い。<br/>でも、日本では？</h2></div>
        <div><p>新しい技術が話題になる理由と、実際に使えるかどうかは別の話。TECH MEETS JAPANは、何が新しいのかを紹介するだけでなく、性能の根拠、価格、導入の難しさ、日本での用途まで一緒に考える。</p>
          <p>研究中のものは研究中と書く。メーカーの発表と、第三者が検証した事実も分ける。未来への期待を楽しみながら、現在地は見失わない。</p>
          <Link href="/research" className="esr-read">ほかの技術記事を探す <ArrowRight size={18}/></Link>
        </div>
      </section>
      <section className="esr-disclosure"><div className="esr-shell"><ShieldCheck size={20}/><p>編集記事は独立した判断で制作しています。掲載は推薦・提携・日本進出意思の確認を意味しません。記事中の未確認事項や将来の用途は、その旨を明記します。</p></div></section>
    </main>
    <Footer/>
    <style>{`
      .es-relaunch{background:#f5f2eb;color:#121513;overflow:hidden}.es-relaunch *{min-width:0}
      .esr-shell{width:min(1160px,calc(100% - 72px));margin:0 auto}
      .esr-hero{color:#f9fbf6;background:radial-gradient(ellipse at 75% 20%,#186b69,transparent 50%),linear-gradient(115deg,#091920 0%,#103f41 70%,#17413d 100%);padding:96px 0 104px}
      .esr-overline{font-size:11px!important;font-weight:800;letter-spacing:.11em;line-height:1.5}.esr-overline-dark{color:#69736d}
      .esr-hero h1{font-size:clamp(48px,6.8vw,88px);line-height:1.18;letter-spacing:-.065em;max-width:970px;margin:26px 0 34px;font-weight:900;overflow-wrap:normal;word-break:normal}
      .esr-hero-copy{max-width:760px;font-size:clamp(17px,1.8vw,21px);line-height:1.95;color:#e3eeec;letter-spacing:0}
      .esr-hero-link{display:inline-flex;align-items:center;gap:20px;background:#d6ff39;color:#0a1b1a;border-radius:99px;padding:16px 23px;font-weight:800;margin-top:28px}
      .esr-main{padding-top:92px;padding-bottom:94px}.esr-heading{max-width:810px;margin-bottom:37px}.esr-heading h2{font-size:clamp(31px,4.2vw,56px);letter-spacing:-.055em;line-height:1.3;margin:12px 0}.esr-heading>p:last-child{color:#626962;font-size:16px;line-height:1.8}
      .esr-features{display:grid;grid-template-columns:1fr 1fr;gap:22px}.esr-feature{background:#fffcf7;border:1px solid #dcded4;display:flex;flex-direction:column;min-height:520px;transition:transform .2s,border-color .2s}.esr-feature:hover{transform:translateY(-4px);border-color:#83938a}
      .esr-feature-art{height:230px;position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(135deg,#203633,#46736b);color:#e5f0e9}
      .esr-food .esr-feature-art{background:linear-gradient(125deg,#455c41,#9da481)}.esr-robot .esr-feature-art{background:linear-gradient(125deg,#2c353f,#607681)}.esr-brain .esr-feature-art{background:linear-gradient(125deg,#27314f,#417f83)}.esr-energy .esr-feature-art{background:linear-gradient(125deg,#273a37,#658577)}
      .esr-art-type{position:absolute;top:24px;left:27px;font-size:12px;font-weight:800;letter-spacing:.18em}.esr-feature-art>strong{position:absolute;top:18px;right:25px;font-size:13px}.esr-art-mark{font-size:clamp(90px,15vw,170px);line-height:1;font-weight:900;letter-spacing:-.12em;opacity:.26}
      .esr-feature-text{padding:33px 32px 34px;display:flex;flex-direction:column;flex:1}.esr-dot{padding:0 5px}.esr-feature h3{font-size:clamp(25px,2.65vw,36px);line-height:1.4;letter-spacing:-.048em;margin:15px 0 17px;overflow-wrap:normal;word-break:normal}.esr-feature-text>p{font-size:15px;line-height:1.85;color:#626861;margin:0 0 26px}.esr-read{display:inline-flex;align-items:center;gap:9px;font-weight:800;font-size:14px;margin-top:auto;border-bottom:1px solid currentColor;padding-bottom:5px;width:max-content;max-width:100%}
      .esr-more{background:#e9ede6;padding:78px 0 92px}.esr-more-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}.esr-small{background:#fffdf8;padding:29px 25px;display:flex;flex-direction:column;min-height:280px}.esr-small h3{font-size:22px;line-height:1.48;letter-spacing:-.04em;margin:18px 0 10px}.esr-small>p{font-size:13px;color:#6b7168;line-height:1.75;margin:0 0 25px}
      .esr-editorial{display:grid;grid-template-columns:1fr 1.1fr;gap:70px;padding-top:94px;padding-bottom:104px}.esr-editorial h2{font-size:clamp(37px,4.3vw,57px);line-height:1.3;letter-spacing:-.06em;margin:15px 0}.esr-editorial>div:nth-child(2)>p{font-size:17px;line-height:2;color:#49544d;margin-top:0;margin-bottom:20px}.esr-editorial .esr-read{margin-top:14px}
      .esr-disclosure{border-top:1px solid #d3d7cf;padding:25px 0 35px}.esr-disclosure .esr-shell{display:flex;gap:15px;align-items:start;color:#747d74}.esr-disclosure p{margin:0;font-size:12px;line-height:1.8;max-width:900px}.esr-disclosure svg{flex-shrink:0;margin-top:2px}
      @media(max-width:850px){.esr-features{grid-template-columns:1fr}.esr-feature{min-height:auto;display:grid;grid-template-columns:40% 60%}.esr-feature-art{height:100%;min-height:270px}.esr-more-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.esr-editorial{gap:35px}}
      @media(max-width:600px){.esr-shell{width:calc(100% - 40px)}.esr-hero{padding:72px 0 76px}.esr-hero h1{font-size:clamp(42px,10vw,60px);line-height:1.22;letter-spacing:-.055em}.esr-hero-copy{font-size:16px;line-height:1.85}.esr-main{padding-top:65px;padding-bottom:65px}.esr-heading{margin-bottom:27px}.esr-heading h2{font-size:32px}.esr-features,.esr-more-grid{grid-template-columns:1fr}.esr-feature{display:flex}.esr-feature-art{height:190px;min-height:190px}.esr-art-mark{font-size:100px}.esr-feature-text{padding:25px 24px 28px}.esr-feature h3{font-size:27px}.esr-more{padding:58px 0 65px}.esr-small{min-height:auto}.esr-editorial{grid-template-columns:1fr;gap:13px;padding-top:68px;padding-bottom:70px}.esr-editorial h2{font-size:38px}.esr-editorial>div:nth-child(2)>p{font-size:15px}.esr-disclosure{padding:25px 0}}
    `}</style>
  </>;
}
