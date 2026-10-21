import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { earlyStageCompanies } from "@/lib/earlyStage";

export const metadata = {
  title: "Early-Stage｜世界の初期スタートアップを知る｜TECH MEETS JAPAN",
  description: "まだ広く知られていない海外の初期企業。何を目指し、どこまで開発が進み、何が課題なのか。会社と挑戦を紹介する。",
};

const editorialPicks = [
  {id:"bridge-neurotech",theme:"NEUROTECH",headline:"脳に埋め込まないBCIを、研究室から現実へ。",lead:"超音波で脳の活動を捉えるBridge Neurotech。研究はいま、どこまで進んでいるのか。",read:"この会社を知る",number:"01",className:"brain"},
  {id:"chargebotic",theme:"ENERGY",headline:"送電線のそばで、小さな電源を作る。",lead:"Chargeboticは遠隔地の電源問題に挑む。18Wの実証と、次の壁。",read:"この会社を知る",number:"02",className:"energy"},
  {id:"nori-robotics",theme:"ROBOTICS",headline:"家庭用ロボットを、もっと身近に。",lead:"Nori Roboticsが目指す低価格の双腕ロボット。家庭で使うには何が必要なのか。",read:"この会社を知る",number:"03",className:"robot"},
];
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
          <h1>まだ知らない挑戦者に、<br/>出会おう。</h1>
          <p className="esr-hero-copy">脳に埋め込まない入力装置。送電線のそばに生まれる電源。身近な双腕ロボット。世界の初期企業は、どんな未来を作ろうとしているのか。</p>
          <Link href="#stories" className="esr-hero-link">企業を見つける <ArrowRight size={18}/></Link>
        </div>
      </section>

      <section id="stories" className="esr-shell esr-main">
        <div className="esr-heading">
          <p className="esr-overline esr-overline-dark">CURATED STORIES</p>
          <h2>まずは、この3社から。</h2>
          <p>まだ小さなチームが挑む、大きな問題。会社の狙いと開発の現在地を知ろう。</p>
        </div>
        <div className="esr-features">
        {picks.map(({p,company},index)=><Link className={"esr-feature esr-"+p.className} key={p.id} href={"/early-stage/"+company!.id}>
          <div className="esr-feature-art" aria-hidden="true"><span className="esr-art-type">{p.theme}</span><strong>{p.number}</strong><span className="esr-art-mark">{p.theme==="ROBOTICS"?"↗":p.theme==="NEUROTECH"?"∿":"⚡"}</span></div>
          <div className="esr-feature-text"><span className="esr-overline esr-overline-dark">{p.theme} <span className="esr-dot">•</span> {maturityLabel[company!.maturity]}</span>
            <h3>{p.headline}</h3><p>{p.lead}</p><span className="esr-read">{p.read}<ArrowUpRight size={18}/></span>
          </div>
        </Link>)}
        </div>
      </section>

      <section className="esr-shell esr-editorial">
        <div><p className="esr-overline esr-overline-dark">COMPANIES & TECHNOLOGY</p><h2>会社を知る。<br/>技術を掘る。</h2></div>
        <div><p>Early-Stageでは、会社が何を目指し、どこまで前進したのかを紹介する。技術の仕組み、競合比較、導入条件を詳しく知りたいときはResearchの記事へ。</p>
          <p>研究・試作・実証と商用化は分けて示し、日本での提携や進出が未確認なら、そのまま未確認と書く。掲載は会社を推薦することではない。</p>
          <Link href="/research" className="esr-read">技術テーマから記事を探す <ArrowRight size={18}/></Link>
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
