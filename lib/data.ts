export type CompanyIntelligence = {
  snapshot?: { label: string; value: string; note?: string }[];
  japanCustomers?: string[];
  targetAccounts?: { 
    segment: string; 
    pain: string; 
    openingOffer: string; 
    whyBuy: string;
    signals?: string[];
    exampleTasks?: string[];
    whyThisProduct?: string[];
    comparedWhy?: string[];
    notFitIf?: string[];
  }[];
  gtmPlays?: { title: string; buyer: string; wedge: string; expansion: string }[];
  competition?: { name: string; strength: string; runwayEdge: string; threat: string }[];
  risks?: { title: string; detail: string; severity: "High" | "Medium" | "Low" }[];
  scoreBreakdown?: {
    label: string;
    weight?: number;
    criteria: {
      label: string;
      max: number;
      awarded: number;
      rule: string;
      reason: string;
      evidence?: string[];
    }[];
  }[];
  timeline?: { date: string; title: string; detail: string }[];
  verdict?: string;
  sources?: { label: string; url: string }[];
};

export type Company = {
  slug: string;
  name: string;
  country: string;
  category: string;
  tagline: string;
  description: string;
  fitScore: number;
  stage: string;
  japanStatus: string;
  useCases: string[];
  buyers: string[];
  pain: string;
  whyNow: string;
  tags: string[];
  website: string;
  featured?: boolean;
  entryStage: "Watching" | "Entering" | "Scaling" | "Established";
  intelligence?: CompanyIntelligence;
};

export type Signal = {
  date: string;
  company: string;
  title: string;
  category: string;
  summary: string;
  level: "Launch" | "Partnership" | "Hiring" | "Funding" | "Product";
};

export const companies: Company[] = [
  {
    slug:"runway",name:"Runway",country:"United States",category:"Creative AI",
    tagline:"AIで映像制作そのものを再設計する。",
    description:"生成映像・編集・制作ワークフローを統合し、広告、メディア、エンターテインメントの制作速度と表現力を変えるAIプラットフォーム。",
    fitScore:94,stage:"Scale-up",japanStatus:"Japan expansion",entryStage:"Scaling",
    useCases:["広告クリエイティブ","映像制作","ゲーム・IP","ブランドコンテンツ"],
    buyers:["広告代理店","テレビ・映画","ゲーム会社","大手ブランド"],
    pain:"制作費・制作期間が大きく、コンテンツ量を増やせない。",
    whyNow:"生成品質が実制作に届き、日本市場で企業導入フェーズへ移行。",
    tags:["Generative Video","Enterprise","Media"],website:"https://runwayml.com",featured:true,
    intelligence:{
      snapshot:[
        {label:"Global market rank",value:"#3",note:"Enterprise / self-serveともに日本は第3位市場"},
        {label:"Enterprise growth",value:"+300%",note:"日本の企業顧客数、過去12カ月"},
        {label:"Asia sales share",value:"1/3",note:"アジア全体の販売量を日本が牽引"},
        {label:"Initial Japan investment",value:"$40M",note:"東京拠点と日本事業構築への初期投資"}
      ],
      japanCustomers:["Yamaha","SoftBank Corp.","NHN PlayArt","MIXI"],
      targetAccounts:[
        {segment:"広告代理店 / 制作会社",pain:"案件数は増えるが、撮影・編集・VFX人員がボトルネック。",openingOffer:"既存CM案件のプリビズ / B案量産からPoC。",whyBuy:"制作日数と試作コストを落としつつ、提案本数を増やせる。",
signals:["月10本以上の動画案件を回している","コンペや提案でB案・C案を大量に作る","ロケ・VFX・再撮影コストが重い","短尺SNS動画の量産を求められている"],
exampleTasks:["絵コンテから15秒CMのたたき台を作る","既存映像の背景だけ差し替える","同じ商品で5パターンの広告動画を作る"],
whyThisProduct:["Alephで既存映像を自然言語編集でき、撮り直しではなく“既存素材の修正”に強い","生成→編集→Upscaleまで同一環境なので、複数ツールを行き来しにくい","Enterpriseで複数モデルを統制下に置けるため制作会社の組織利用に向く"],
comparedWhy:["単純な新規動画生成だけならVeo/Klingでも代替可能","既存映像の編集・再利用まで含むならRunway優位"],
notFitIf:["完成品質を毎回100%人手で細かく制御したい","案件数が少なく制作コストも問題になっていない"]},
        {segment:"ゲーム / アニメ / IP",pain:"世界観を守りながら大量のプロモーション素材を作りたい。",openingOffer:"既存IPのPV・SNS短尺・コンセプト映像。",whyBuy:"少人数で表現量を増やせ、海外向けローカライズにも展開しやすい。",
signals:["既存IPを使ったSNS動画を継続的に出している","プロモーション素材の制作本数が多い","キャラクターを“動かす”企画が多い","海外向けに同一IPを展開している"],
exampleTasks:["静止画キャラを動かして短尺PV化","既存キャラに人の演技を転写","海外向けに同じ映像の別バージョンを制作"],
whyThisProduct:["Act-Twoで人の演技をキャラクターへ転写できるため、IPキャラを“演技させる”用途に直結","非人間キャラにも対応しやすく、Avatar系ツールよりIP表現の自由度が高い","生成だけでなく編集工程までRunway内で続けられる"],
comparedWhy:["Avatar主体ならHeyGen/Synthesiaの方が簡単な場合あり","キャラクター演技・映像表現重視ならRunwayが有利"],
notFitIf:["権利処理上、生成AI利用が全面禁止","原作監修で1フレーム単位の厳密再現が必須"]},
        {segment:"大手ブランド / マーケ",pain:"SNS・EC・キャンペーンで必要な動画量に制作体制が追いつかない。",openingOffer:"商品画像から短尺広告を複数パターン生成。",whyBuy:"クリエイティブテストの回数を大幅に増やせる。",
signals:["Meta/TikTok/YouTube向け動画を毎月大量に出す","ABテスト用クリエイティブが不足している","商品画像はあるが動画素材が足りない","海外展開で市場ごとに動画を作り分けたい"],
exampleTasks:["商品画像から縦型動画を10案作る","同一クリエイティブの季節・背景違いを生成","既存CMをSNS尺へ展開"],
whyThisProduct:["既存CMや商品動画をAlephで差し替え・変形できるため“ゼロから生成”以外の量産がしやすい","Brand KitやEnterprise統制を使えるのでブランド運用に乗せやすい","複数モデルを同一環境で試せるためABテストの制作速度を上げやすい"],
comparedWhy:["静止画→短尺だけなら他ツールでも可能","既存ブランド資産の再利用＋Enterprise統制まで必要ならRunwayが強い"],
notFitIf:["動画施策自体がほぼ無い","ブランドガイドライン上、生成表現の許容幅が極端に狭い"]},
        {segment:"放送 / 映画 / エンタメ",pain:"高コストなVFX・ロケ・企画検証が制作予算を圧迫。",openingOffer:"企画段階の絵作り、背景、VFX補助。",whyBuy:"本撮影前に完成イメージを早く検証できる。",
signals:["企画段階で完成イメージ共有に時間がかかる","VFX・ロケ費が大きい","撮影後の修正や差し替えが頻繁","企画承認前のプリビズ需要が高い"],
exampleTasks:["撮影前にシーンの完成イメージを動画化","ロケ背景を別環境へ差し替え","不要物除去や簡易VFXをAIで試す"],
whyThisProduct:["Alephで撮影済み映像を直接編集できるため“生成AI＝プリビズ専用”で終わらない","Edit Studioで既存映像の要素差し替えができ、VFX補助として使いやすい","生成→編集→高解像度化を一連で扱える"],
comparedWhy:["企画絵生成だけならVeo/OpenAIでも成立","撮影後編集まで含めるならRunwayの一貫性が強み"],
notFitIf:["長尺本編を一貫した品質で全編生成したい","制作パイプライン変更が許容されない"]}
      ],
      gtmPlays:[
        {title:"広告制作のB案量産から始める",buyer:"広告代理店・制作会社のCreative Tech部門",wedge:"既存案件のプリビズや複数案作成で、まず制作フローに組み込む。",expansion:"社内利用から、顧客案件・キャンペーン制作へ広げる。"},
        {title:"既存IPのプロモーションから試す",buyer:"ゲーム・アニメ・出版のIPホルダー",wedge:"世界観を壊しにくい短尺PVやSNS素材など、限定用途で試す。",expansion:"プロモーションからゲーム内映像・海外向け展開へ広げる。"},
        {title:"企業標準の制作ワークフローにする",buyer:"大企業マーケ / Creative Operations",wedge:"単発生成ではなく、Brand Kit・Workspace・ガバナンス込みで導入する。",expansion:"部署利用から全社標準、API / workflow組み込みへ進める。"}
      ],
      competition:[
        {name:"Adobe Firefly",strength:"既存Creative Cloudとの統合と企業安心感。",runwayEdge:"映像生成・編集ワークフローの速度と先進性。",threat:"既存Adobe契約にバンドルされると追加導入が難しい。"},
        {name:"Google Veo",strength:"モデル品質とGoogleエコシステム。",runwayEdge:"複数モデルを含めた制作UIと現場ワークフロー。",threat:"モデル性能差が縮むほどモデル単体優位は消える。"},
        {name:"OpenAI video",strength:"ブランド力・汎用AIとの統合。",runwayEdge:"プロ制作に寄せた編集・コラボ・Enterprise運用。",threat:"既存ChatGPT Enterprise顧客へのクロスセル。"},
        {name:"Higgsfield / MiniMax / Kling",strength:"高速なモデル改善とコスト競争。",runwayEdge:"Enterprise導入・管理・制作基盤としての完成度。",threat:"生成品質と価格だけで比較されると差別化しづらい。"}
      ],
      risks:[
        {title:"モデル差のコモディティ化",detail:"Runway自身もモデル性能は収斂すると述べており、勝負はWorkflow / UX / Enterprise運用へ移る。",severity:"High"},
        {title:"著作権・IPガバナンス",detail:"日本のIP企業では学習データ、生成物の権利、ブランド毀損への説明責任が導入障壁。",severity:"High"},
        {title:"Creative AI乱立",detail:"PoCは通っても、全社標準化されなければ各部署が別モデルへ分散する。",severity:"Medium"},
        {title:"代理店の内製競争",detail:"大手代理店が独自AI基盤を持つため、単なる生成ツールとして売ると競合になる。",severity:"Medium"}
      ],
      scoreBreakdown:[
        {label:"課題への刺さり",weight:25,criteria:[
          {label:"金額インパクト",max:20,awarded:20,rule:"20=直接コスト/売上に大きく効く、15=中程度、10=間接効果、5=小さい、0=不明",reason:"撮影・VFX・再編集は高コスト工程で、削減効果が直接金額に出る。",evidence:["撮影・VFX・再編集の代替余地"]},
          {label:"発生頻度",max:20,awarded:20,rule:"20=日常/週次、15=月次、10=四半期、5=年数回、0=稀",reason:"広告・SNS・IPプロモーションでは動画制作が継続的に発生。",evidence:["短尺動画の継続制作","広告クリエイティブ量産"]},
          {label:"対象企業の広さ",max:20,awarded:20,rule:"20=4業界以上、15=3業界、10=2業界、5=1業界、0=限定用途",reason:"広告、ブランド、ゲーム/IP、放送/映像の複数市場に適用可能。",evidence:["4つの明確な主要ターゲット"]},
          {label:"現行手段の不便さ",max:20,awarded:15,rule:"20=人手/高コスト工程を直接置換、15=大幅短縮、10=一部短縮、5=軽微、0=代替不要",reason:"生成・編集工程は短縮できるが、最終仕上げや監修は残る。",evidence:["撮り直し/VFXの一部代替","完全自動化ではない"]},
          {label:"効果測定のしやすさ",max:20,awarded:15,rule:"20=金額/時間で即測定、15=PoCで測定可能、10=定性的中心、5=長期評価、0=困難",reason:"制作時間・生成回数・1成果物TCOは測れるが、品質価値は主観も残る。",evidence:["Time-to-output","1成果物あたり生成回数"]}
        ]},
        {label:"日本での使いやすさ",weight:20,criteria:[
          {label:"日本拠点",max:20,awarded:20,rule:"20=日本法人/拠点あり、10=APAC拠点のみ、0=なし",reason:"東京拠点を開設済み。",evidence:["Japan office"]},
          {label:"国内導入実績",max:20,awarded:20,rule:"20=複数大手事例、15=複数事例、10=単一事例、5=PoCのみ、0=なし",reason:"複数の日本企業導入実績が確認できる。",evidence:["MIXI","SoftBank","Yamaha","NHN PlayArt"]},
          {label:"日本語UI",max:20,awarded:5,rule:"20=完全対応、15=主要機能対応、10=部分対応、5=未確認/限定的、0=非対応",reason:"公開情報だけでは十分な日本語UI対応を確認できない。",evidence:["要確認"]},
          {label:"日本語サポート",max:20,awarded:5,rule:"20=国内時間帯の日本語専任、15=日本語対応あり、10=Partner経由、5=未確認、0=英語のみ",reason:"日本拠点はあるが、日本語専任サポート範囲は未確認。",evidence:["要確認"]},
          {label:"国内契約/調達しやすさ",max:20,awarded:10,rule:"20=国内契約/請求書/Partner完備、15=一部対応、10=Enterprise個別契約、5=海外カード中心、0=困難",reason:"Enterprise契約は可能だが、国内請求・商流の公開情報が限定的。",evidence:["Enterprise individual contract"]}
        ]},
        {label:"差別化の強さ",weight:20,criteria:[
          {label:"固有機能",max:20,awarded:20,rule:"20=明確な固有機能複数、15=固有機能1つ、10=実装差、5=ほぼ同等、0=差なし",reason:"Aleph Edit StudioとAct-Twoが明確な差別化要素。",evidence:["Aleph","Act-Two"]},
          {label:"ワークフロー統合",max:20,awarded:20,rule:"20=複数工程を一気通貫、15=主要工程、10=一部、5=単機能、0=なし",reason:"生成→編集→再利用→Upscaleまで同一環境。",evidence:["Integrated workflow"]},
          {label:"Enterprise差別化",max:20,awarded:15,rule:"20=独自Enterprise統制、15=強い統制、10=標準、5=弱い、0=なし",reason:"複数モデル統制やBrand Kitは強いが、SAML/SCIM未対応。",evidence:["Third-party model controls","Brand Kit","No SAML/SCIM"]},
          {label:"代替困難性",max:20,awarded:15,rule:"20=代替困難、15=複数機能組合せで優位、10=代替可能、5=容易、0=完全コモディティ",reason:"単機能は代替可能だが、編集と制作環境を含めると代替コストが上がる。",evidence:["Veo/Kling can replace generation only"]},
          {label:"差の持続性",max:20,awarded:10,rule:"20=長期防御力高、15=中、10=競争激化、5=短期、0=急速コモディティ化",reason:"モデル性能差は縮まりやすく、優位はWorkflow側に依存。",evidence:["Rapid model competition"]}
        ]},
        {label:"導入しやすさ",weight:15,criteria:[
          {label:"試しやすさ",max:20,awarded:20,rule:"20=無料ですぐ試せる、15=Trial、10=Demo必須、5=営業経由、0=困難",reason:"Free planで即試用可能。",evidence:["Free plan"]},
          {label:"Time to Value",max:20,awarded:20,rule:"20=即日、15=1週間、10=1か月、5=四半期、0=長期",reason:"個人/小規模利用なら即日で生成可能。",evidence:["Self-serve"]},
          {label:"オンボ負荷",max:20,awarded:15,rule:"20=ほぼ設定不要、15=軽微、10=部門導入、5=全社PJ、0=重い",reason:"PoCは軽いがEnterpriseは権限・Brand運用設計が必要。",evidence:["Low-medium onboarding"]},
          {label:"既存環境との共存",max:20,awarded:20,rule:"20=追加導入可能、15=一部置換、10=移行必要、5=大規模移行、0=全面置換",reason:"Adobe等を置換せず生成工程だけ追加できる。",evidence:["Additive workflow"]},
          {label:"学習コスト",max:20,awarded:15,rule:"20=直感的、15=短期学習、10=専門知識必要、5=高スキル、0=専門職必須",reason:"基本操作は容易だが、高品質生成にはプロンプト/編集ノウハウが必要。",evidence:["Creative learning curve"]}
        ]},
        {label:"費用対効果",weight:10,criteria:[
          {label:"開始価格",max:20,awarded:20,rule:"20=低価格/Free、15=中、10=高、5=Enterpriseのみ、0=非公開のみ",reason:"Freeと低価格セルフサーブあり。",evidence:["Free","$15/month"]},
          {label:"価格透明性",max:20,awarded:15,rule:"20=全価格公開、15=主要価格公開、10=一部、5=個別見積中心、0=不明",reason:"セルフサーブ/APIは公開、Enterpriseは個別見積。",evidence:["Public self-serve pricing"]},
          {label:"TCO予測性",max:20,awarded:10,rule:"20=固定、15=上限明確、10=従量変動、5=大きく変動、0=不明",reason:"生成回数とcredits消費で実質TCOが変動。",evidence:["Credit-based usage"]},
          {label:"代替コスト削減",max:20,awarded:20,rule:"20=高額工程代替、15=中、10=一部、5=軽微、0=なし",reason:"撮影/VFX/再編集の一部を置換できる。",evidence:["Production cost replacement"]},
          {label:"スケール時の効率",max:20,awarded:15,rule:"20=規模拡大で効率増、15=概ね良好、10=比例課金、5=割高化、0=不明",reason:"量産価値は高いが、credits消費も増える。",evidence:["Credit scaling"]}
        ]},
        {label:"Enterprise適性",weight:10,criteria:[
          {label:"認証/SSO",max:20,awarded:15,rule:"20=SAML+OIDC+SCIM、15=SSOあり、10=限定、5=弱い、0=なし",reason:"OIDC SSOはあるがSAML/SCIM未対応。",evidence:["OIDC","No SAML","No SCIM"]},
          {label:"監査/管理",max:20,awarded:20,rule:"20=Audit+Analytics+Admin、15=主要機能、10=一部、5=弱い、0=なし",reason:"Audit Logs、Analytics、管理機能あり。",evidence:["Audit Logs","Workspace Analytics"]},
          {label:"セキュリティ認証",max:20,awarded:20,rule:"20=SOC2+ISO、15=どちらか、10=基本対策、5=自己申告、0=不明",reason:"SOC 2 Type IIとISO 27001を確認。",evidence:["SOC 2 Type II","ISO 27001"]},
          {label:"データ統制",max:20,awarded:15,rule:"20=詳細統制/地域選択、15=Enterprise保護、10=標準、5=弱い、0=不明",reason:"Enterprise保護は強いがData residency等は追加確認余地。",evidence:["Enterprise data protection"]},
          {label:"導入支援",max:20,awarded:20,rule:"20=専任支援+Priority、15=Priority、10=通常、5=限定、0=なし",reason:"Enterprise onboardingとPriority supportあり。",evidence:["Enterprise onboarding","Priority support"]}
        ]}
      ],
      timeline:[
        {date:"2026.05",title:"日本本格進出を発表",detail:"東京に日本本社を開設し、初期$40Mを投資。Head of Japan採用も開始。"},
        {date:"2026.06",title:"MIXIとEnterprise Partnership",detail:"スポーツ、ライフスタイル、デジタルエンタメへ利用を拡大。"},
        {date:"2026.08",title:"Enterprise事業がさらに拡大",detail:"全社売上は年初来2倍超、NRR 300%超を公表。日本はアジア最大市場と説明。"},
        {date:"2026.10",title:"日本向けDeployment体制を強化",detail:"Founding Deployment LeadやCreative Workflow Architectなど、日本企業の導入定着を担う役割を採用。"}
      ],
      verdict:"日本市場で既に導入実績と成長シグナルがあり、しかも活用領域はまだ広がっている。『面白い生成AI』として見るより、広告・IP・ブランド・映像制作のどこで実務に組み込めるかを判断する段階。日本企業が今検討する価値はかなり高い。",
      sources:[
        {label:"Runway — Runway is Coming to Japan (May 2026)",url:"https://runway.com/news/runway-is-coming-to-japan"},
        {label:"Runway — MIXI strategic partnership (Jun 2026)",url:"https://runway.com/news/runway-and-mixi-announce-strategic-partnership"},
        {label:"Runway — The Next Phase of Enterprise Video Generation (Aug 2026)",url:"https://runway.com/news/company-news%2Fthe-next-phase-of-enterprise-video-generation"},
        {label:"Runway Dev — API pricing",url:"https://docs.dev.runwayml.com/guides/pricing/"}
      ]
    }
  },
  {
    slug:"heygen",name:"HeyGen",country:"United States",category:"Creative AI",
    tagline:"一人を、世界中で話せる存在に。",
    description:"AIアバター、音声、翻訳、動画生成を組み合わせ、多言語での動画コミュニケーションを大幅に簡略化。",
    fitScore:91,stage:"Scale-up",japanStatus:"Building ecosystem",entryStage:"Entering",
    useCases:["多言語営業","採用","教育","IR・広報"],buyers:["グローバル企業","教育","EC","クリエイター"],
    pain:"言語ごとの撮影・翻訳・編集に時間とコストがかかる。",
    whyNow:"日本企業の海外展開とインバウンド対応の両方で需要が拡大。",
    tags:["AI Avatar","Localization","Video"],website:"https://www.heygen.com"
  },
  {
    slug:"synthesia",name:"Synthesia",country:"United Kingdom",category:"Enterprise AI",
    tagline:"企業動画を、撮影しない。",
    description:"研修、オンボーディング、営業支援、マニュアルなど企業内動画をAIで生成・更新するエンタープライズ動画基盤。",
    fitScore:88,stage:"Scale-up",japanStatus:"APAC expansion",entryStage:"Entering",
    useCases:["研修動画","マニュアル","営業Enablement","多言語社内広報"],buyers:["人事","営業企画","L&D","グローバル本社"],
    pain:"動画の撮影・更新コストが高く、情報更新に追いつかない。",
    whyNow:"AI動画が“制作物”から“業務インフラ”へ移行中。",
    tags:["Enterprise Video","Training","Localization"],website:"https://www.synthesia.io"
  },
  {
    slug:"minimax",name:"MiniMax",country:"China",category:"Multimodal AI",
    tagline:"日本のIPを、AI時代のグローバルコンテンツへ。",
    description:"テキスト、音声、画像、動画、音楽、Agentまでを展開するマルチモーダルAI企業。クリエイティブとIP活用の接点が大きい。",
    fitScore:89,stage:"Scale-up",japanStatus:"Japan organization",entryStage:"Scaling",
    useCases:["IPコンテンツ","動画生成","音声生成","AI Agent"],buyers:["ゲーム","アニメ・出版","広告","プラットフォーム"],
    pain:"IPを守りながらAI生成を活用し、海外展開を加速したい。",
    whyNow:"日本IPと生成AIの商用利用ルールが形成され始めている。",
    tags:["Multimodal","IP","Agent"],website:"https://www.minimax.io"
  },
  {
    slug:"applied-intuition",name:"Applied Intuition",country:"United States",category:"Physical AI",
    tagline:"車と機械のソフトウェア開発を加速する。",
    description:"自動運転・SDV・自律機械向けのシミュレーション、検証、車両ソフトウェア開発基盤。",
    fitScore:84,stage:"Scale-up",japanStatus:"Strategic expansion",entryStage:"Scaling",
    useCases:["SDV","自動運転","建機自律化","シミュレーション"],buyers:["自動車OEM","Tier1","建機","農機"],
    pain:"実機中心の検証では開発速度と試験コストに限界がある。",
    whyNow:"日本の製造業でPhysical AIとSDV投資が加速。",
    tags:["Autonomy","Simulation","Mobility"],website:"https://www.appliedintuition.com"
  },
  {
    slug:"wayve",name:"Wayve",country:"United Kingdom",category:"Mobility AI",
    tagline:"都市を学習するAI Driver。",
    description:"汎化可能なEmbodied AIによる自動運転を開発。異なる道路環境へ適応するAI Driverを目指す。",
    fitScore:90,stage:"Scale-up",japanStatus:"Tokyo deployment",entryStage:"Entering",
    useCases:["Robotaxi","自動運転","配送","Mobility Platform"],buyers:["自動車OEM","配車","交通事業者","自治体"],
    pain:"自動運転を都市ごとにゼロから作るコストが大きい。",
    whyNow:"東京での実証・商用展開が具体化し始めている。",
    tags:["Embodied AI","Autonomy","Mobility"],website:"https://wayve.ai"
  },
  {
    slug:"sierra",name:"Sierra",country:"United States",category:"Enterprise AI",
    tagline:"顧客対応を、AI Agentそのものへ。",
    description:"問い合わせ回答だけでなく、返品・手続き・解約防止など顧客業務を実行するAI Agentプラットフォーム。",
    fitScore:95,stage:"Scale-up",japanStatus:"SoftBank exclusive partnership",entryStage:"Scaling",
    useCases:["カスタマーサポート","契約手続き","解約防止","顧客体験"],buyers:["通信","金融","小売","大手サービス"],
    pain:"問い合わせ量が増えるほど人員・品質・営業時間の制約が大きくなる。",
    whyNow:"日本でも大企業導入の成果が出始め、販売チャネルが整った。",
    tags:["AI Agent","Customer Experience","Enterprise"],website:"https://sierra.ai"
  },
  {
    slug:"elevenlabs",name:"ElevenLabs",country:"United Kingdom",category:"Voice AI",
    tagline:"企業と人の会話を、AIのインフラに。",
    description:"高品質音声生成から多言語コンテンツ、会話型AI Agentまでを提供する音声AIプラットフォーム。",
    fitScore:92,stage:"Scale-up",japanStatus:"Enterprise expansion",entryStage:"Entering",
    useCases:["AIコールセンター","多言語音声","ゲーム音声","営業・予約Agent"],buyers:["コンタクトセンター","ゲーム","メディア","グローバル企業"],
    pain:"音声対応は人手・言語・営業時間に強く制約される。",
    whyNow:"Voice Agentがデモから本番業務へ移行している。",
    tags:["Voice AI","Agents","Localization"],website:"https://elevenlabs.io"
  },
  {
    slug:"fresha",name:"Fresha",country:"United Kingdom",category:"Vertical SaaS",
    tagline:"美容・ウェルネス業界のOSを取りにいく。",
    description:"予約、POS、顧客管理、決済、マーケットプレイスを統合する美容・ウェルネス向けVertical SaaS。",
    fitScore:86,stage:"Scale-up",japanStatus:"Japan build-out",entryStage:"Entering",
    useCases:["予約管理","決済","顧客管理","新規集客"],buyers:["美容室","ネイル","エステ","ウェルネス"],
    pain:"予約・決済・顧客管理・集客が複数ツールに分断される。",
    whyNow:"世界でPMF済みだが、日本はまだ白地が大きい。",
    tags:["Marketplace","Payments","Vertical SaaS"],website:"https://www.fresha.com"
  },
  {
    slug:"joby",name:"Joby Aviation",country:"United States",category:"Mobility",
    tagline:"日本に、新しい空の交通網をつくる。",
    description:"eVTOL機体、運航、予約、インフラまでを垂直統合する次世代エアモビリティ企業。",
    fitScore:87,stage:"Pre-commercial / Scale-up",japanStatus:"ANA / Toyota strategic build",entryStage:"Entering",
    useCases:["都市間移動","空港アクセス","エアタクシー","新交通インフラ"],buyers:["航空","自治体","不動産","交通事業者"],
    pain:"都市部の移動時間と既存交通インフラの制約。",
    whyNow:"日本での運航・製造・提携体制が具体化。",
    tags:["eVTOL","Mobility","Infrastructure"],website:"https://www.jobyaviation.com"
  },
  {
    slug:"exotec",name:"Exotec",country:"France",category:"Robotics",
    tagline:"倉庫を、人手不足に依存しない構造へ。",
    description:"Skypodを中心に保管・ピッキング・搬送を自動化し、物流センター全体の生産性を再設計するロボティクス企業。",
    fitScore:85,stage:"Scale-up",japanStatus:"Established Japan business",entryStage:"Established",
    useCases:["倉庫自動化","ピッキング","保管効率","フルフィルメント"],buyers:["小売","EC","3PL","食品・製造"],
    pain:"物流人材不足と、固定設備中心の自動化では変動に追いつけない。",
    whyNow:"CLO設置や物流改革で経営課題化が進む。",
    tags:["Warehouse Robotics","Automation","Logistics"],website:"https://www.exotec.com"
  },
  {
    slug:"pallet",name:"Pallet",country:"United States",category:"Logistics AI",
    tagline:"物流の“人がやっている事務”をAI Agentへ。",
    description:"配車・予約・メール・データ入力など物流オペレーションをAI Agentで自動化するVertical AI企業。",
    fitScore:83,stage:"Growth",japanStatus:"Early commercial hiring",entryStage:"Entering",
    useCases:["配車事務","予約調整","転記","問い合わせ"],buyers:["運送会社","3PL","倉庫","物流部門"],
    pain:"物流現場にメール・電話・Excelの手作業が大量に残る。",
    whyNow:"人手不足とAI Agent成熟が同時に進行。",
    tags:["AI Agent","Logistics","Automation"],website:"https://www.pallet.com"
  },
  {
    slug:"fever",name:"Fever",country:"Spain / United States",category:"Experience Tech",
    tagline:"リアル体験を、世界へ流通させる。",
    description:"イベント発見・チケット・自社体験IP・ブランド施策を統合し、都市ごとにリアル体験を展開するプラットフォーム。",
    fitScore:88,stage:"Scale-up",japanStatus:"Japan growth",entryStage:"Scaling",
    useCases:["イベント集客","IP体験","ブランドイベント","チケット販売"],buyers:["IPホルダー","ブランド","イベント会社","施設"],
    pain:"良い体験を作っても都市横断で集客・展開する仕組みが弱い。",
    whyNow:"AI時代にリアル体験価値が再評価されている。",
    tags:["Experience","Marketplace","IP"],website:"https://feverup.com"
  },
  {
    slug:"establishment-labs",name:"Establishment Labs",country:"Costa Rica",category:"HealthTech",
    tagline:"乳房医療を、美容だけで終わらせない。",
    description:"乳房インプラント、再建、低侵襲施術を軸にWomen's Health領域を展開するMedTech企業。",
    fitScore:81,stage:"Public growth",japanStatus:"Commercial expansion",entryStage:"Scaling",
    useCases:["乳房再建","美容医療","低侵襲施術","クリニック導入"],buyers:["病院","美容クリニック","形成外科","医療法人"],
    pain:"従来施術は身体負担・回復期間・選択肢に制約がある。",
    whyNow:"日本で規制承認・導入実績が積み上がっている。",
    tags:["MedTech","FemTech","Healthcare"],website:"https://establishmentlabs.com"
  },
  {
    slug:"rogo",name:"Rogo",country:"United States",category:"Financial AI",
    tagline:"金融プロフェッショナルの“仕事そのもの”をAI化。",
    description:"投資銀行、PE、Asset Manager向けに調査、モデル、メモ、案件分析などを支援する金融専用AIプラットフォーム。",
    fitScore:89,stage:"Scale-up",japanStatus:"Japan team formation",entryStage:"Entering",
    useCases:["金融リサーチ","案件分析","モデル作成","投資メモ"],buyers:["投資銀行","PE","資産運用","金融機関"],
    pain:"高スキル人材が調査・資料作成・モデル更新に大量の時間を使う。",
    whyNow:"金融向けVertical AIの導入が本番化。",
    tags:["Financial AI","Vertical AI","Enterprise"],website:"https://rogo.com"
  },
  {
    slug:"protopie",name:"ProtoPie",country:"South Korea",category:"Design Tech",
    tagline:"デザインから実装までの距離を縮める。",
    description:"高度なインタラクションプロトタイプ、ユーザーテスト、AI、MCPをつなぎ、Design-to-Productionを狙う開発基盤。",
    fitScore:84,stage:"Growth",japanStatus:"Japan enterprise expansion",entryStage:"Scaling",
    useCases:["車載HMI","プロトタイピング","UX検証","AI実装連携"],buyers:["自動車","家電","デザイン組織","プロダクト開発"],
    pain:"静的デザインでは複雑な体験を検証できず、実装との往復が遅い。",
    whyNow:"AI CodingとMCPでデザインから実装への接続が急速に進む。",
    tags:["Prototyping","MCP","Automotive UX"],website:"https://www.protopie.io"
  },
  {
    slug:"rlwrld",name:"RLWRLD",country:"South Korea",category:"Physical AI",
    tagline:"既存ロボットに、“見る・考える・掴む”を。",
    description:"産業用ロボット向けRobotics Foundation Modelを開発し、不定形物の把持や現場適応をAIで可能にするPhysical AI企業。",
    fitScore:86,stage:"Seed",japanStatus:"Japan early build",entryStage:"Entering",
    useCases:["ピッキング","組付け","検品","品出し"],buyers:["製造業","物流","小売","ロボットSI"],
    pain:"従来ロボットは対象物や工程が変わるたび再設計が必要。",
    whyNow:"Physical AIへの投資が製造・物流で本格化。",
    tags:["Robotics Foundation Model","Physical AI","Manipulation"],website:"https://www.rlwrld.ai"
  },
  {
    slug:"shield-ai",name:"Shield AI",country:"United States",category:"Defense AI",
    tagline:"AI Pilotを、複数の無人機へ。",
    description:"Hivemindを中心に、自律飛行・無人航空機・防衛向けAI Pilotを展開するDefense Tech企業。",
    fitScore:78,stage:"Scale-up",japanStatus:"Japan BD expansion",entryStage:"Entering",
    useCases:["自律無人機","防衛AI","協調飛行","監視"],buyers:["防衛省","重工","航空宇宙","政府"],
    pain:"通信・GPSが制約される環境でも自律判断できるシステムが必要。",
    whyNow:"日本の防衛・無人機投資が加速。",
    tags:["Defense Tech","Autonomy","AI Pilot"],website:"https://shield.ai"
  }
];

export const categories = ["All", ...Array.from(new Set(companies.map(c => c.category)))];

export const signals: Signal[] = [
  {date:"2026.10.06",company:"Applied Intuition",category:"Physical AI",level:"Partnership",title:"Honda・日産とのSDV協業を同日発表",summary:"日本の自動車開発にAIネイティブなVehicle OS / 開発基盤を深く組み込む動き。"},
  {date:"2026.09",company:"Rogo",category:"Financial AI",level:"Funding",title:"日本市場への足場を強化",summary:"金融専用AIの日本展開が、投資・採用・顧客開拓の複数面で進行。"},
  {date:"2026.08",company:"Exotec",category:"Robotics",level:"Partnership",title:"Mujinと倉庫全体自動化を提案",summary:"単体ロボットから、入荷〜出荷を統合する物流センター設計へ領域を拡張。"},
  {date:"2026.07.14",company:"Sierra",category:"Enterprise AI",level:"Partnership",title:"SoftBankと日本独占パートナーシップ",summary:"AI Agentを日本の大企業へ展開する販売チャネルが一気に形成。"},
  {date:"2026.06",company:"Applied Intuition",category:"Mobility AI",level:"Launch",title:"自動運転システムを日本へ展開",summary:"日本の道路・規制・左側通行に対応したSDSを展開し、ローカル基盤を構築。"},
  {date:"2026.03.11",company:"Wayve",category:"Mobility AI",level:"Partnership",title:"Nissan・Uberと東京Robotaxiへ",summary:"2026年後半の東京パイロットを目指し、AI Driverの実都市展開へ。"},
  {date:"2026",company:"Joby Aviation",category:"Mobility",level:"Partnership",title:"ANA・Toyotaと日本実装を加速",summary:"機体販売ではなく、運航・製造・インフラを含む日本市場構築へ。"},
  {date:"2026",company:"RLWRLD",category:"Physical AI",level:"Funding",title:"産業ロボティクスAIを日本で拡張",summary:"日本拠点を持ち、製造・物流向けに長期導入モデルを形成中。"}
];

export const themes = [
  {title:"AI Creative",copy:"動画・音声・IP・アバター。日本のコンテンツ産業が次に使うAI。",count:4},
  {title:"Physical AI",copy:"車・ロボット・建機・倉庫。ソフトウェアが現実世界を動かす。",count:5},
  {title:"Enterprise Agents",copy:"問い合わせ・金融・物流。業務そのものを実行するAI。",count:4},
  {title:"New Market Infrastructure",copy:"Mobility・Experience・Health。既存カテゴリを超える市場づくり。",count:5}
];


export type ProductDecisionData = {
  differentiators?: {
    label: string;
    level: "Runway固有" | "Runwayで特に強い" | "他でもできる";
    what: string;
    whyItMatters: string;
    comparedWith: string[];
    evidence?: string;
  }[];
  capabilities?: {
    label: string;
    detail: string;
    level: "Runway固有" | "Runwayで特に強い" | "他でもできる";
    input: string;
    output: string;
    replaces: string;
    whyItMatters: string;
    examples: string[];
    confidence?: "High"|"Medium"|"Low";
  }[];
  limitations?: string[];
  pricing?: {
    publicPlans?: { name:string; monthly?:string; annualEquivalent?:string; credits?:string; notes?:string }[];
    enterprise?: string;
    api?: string;
    tcoNote?: string;
  };
  onboarding?: { level:1|2|3|4|5; label:string; timeToValue:string; costNote:string; tasks:string[] };
  replacement?: { level:1|2|3|4|5; label:string; costNote:string; migrationRisks:string[] };
  japanese?: { ui:string; input:string; output:string; docs:string; support:string; note?:string };
  support?: { level:string; details:string[] };
  integrations?: string[];
  enterpriseReadiness?: { item:string; status:string; note?:string }[];
  contract?: { item:string; value:string }[];
  trial?: { available:string; detail:string };
  lockIn?: { level:1|2|3|4|5; label:string; reasons:string[] };
  bestFor?: string[];
  notFor?: string[];
  verdict?: { status:"今すぐ試す"|"PoC推奨"|"様子見"|"日本ではまだ早い"; summary:string };
  evidence?: { item:string; type:"Official"|"Observed"|"Estimated"; confidence:"High"|"Medium"|"Low"; source?:string }[];
};

export type Product = {
  slug: string;
  name: string;
  provider: string;
  companySlug: string;
  country: string;
  category: string;
  tagline: string;
  description: string;
  fitScore: number;
  japanStatus: string;
  entryStage: "Watching" | "Entering" | "Scaling" | "Established";
  useCases: string[];
  targetUsers: string[];
  alternatives: string[];
  useCaseDetails?: {
    title:string;
    situation:string;
    input:string;
    output:string;
    user:string;
    replaces:string;
    kpi:string[];
    whyThis:string[];
    notFor:string[];
  }[];
  comparisonDetails?: {
    name:string;
    bestWhen:string[];
    runwayWinsWhen:string[];
    otherWinsWhen:string[];
    switchingCost:string;
    pricingNote:string;
    japaneseNote:string;
    enterpriseNote:string;
  }[];
  tags: string[];
  website: string;
  featured?: boolean;
  decision?: ProductDecisionData;
};

export const products: Product[] = [
  {slug:"runway-ai-video",name:"Runway AI Video Platform",provider:"Runway",companySlug:"runway",country:"United States",category:"Creative AI",tagline:"撮影・編集・VFXの一部を、生成AIの制作フローへ。",description:"映像生成、編集、Transformation、Character performanceなどを一つの制作環境で扱うAI映像プラットフォーム。",fitScore:94,japanStatus:"Japan expansion",entryStage:"Scaling",useCases:["広告動画","プリビズ","SNSクリエイティブ","IP・ゲーム映像"],targetUsers:["広告・制作会社","ブランドマーケ","ゲーム・IP","放送・映像"],alternatives:["Adobe Firefly","Google Veo","OpenAI video","Higgsfield"],
  useCaseDetails:[
    {title:"広告動画",situation:"既存CMや商品素材はあるが、媒体別・訴求別の動画案が足りない。",input:"商品画像 / 既存CM / ブランドガイド / コピー案",output:"15〜30秒動画 / 縦型短尺 / 背景・商品差し替え版",user:"広告制作 / ブランドマーケ / Creative Tech",replaces:"追加撮影 / 一部VFX / B案・C案制作",kpi:["1本あたり制作時間","案数/週","1成果物あたり生成回数","撮影・外注削減額"],whyThis:["Alephで既存映像の差し替えができる","生成→編集→Upscaleまで同一環境","Enterprise統制でブランド運用に載せやすい"],notFor:["1本の最高品質CMだけを作る案件","生成AI利用不可のブランド"]},
    {title:"プリビズ",situation:"撮影やVFXに入る前に、演出・構図・世界観を動画で共有したい。",input:"絵コンテ / 静止画 / 台本 / シーン説明",output:"完成イメージに近い短尺動画 / 複数演出案",user:"監督 / プロデューサー / 企画 / 制作会社",replaces:"静止画だけの絵コンテ / 簡易モック / 一部ロケ検証",kpi:["企画承認までの日数","修正回数","撮影前の手戻り","検討案数"],whyThis:["動画生成だけでなく後編集まで同じ環境","Alephで既存素材を変形可能","複数案を高速に比較できる"],notFor:["長尺本編をそのまま納品したい","精密な物理挙動検証が必要"]},
    {title:"SNSクリエイティブ",situation:"Meta/TikTok/YouTube向けに、同一商品の訴求・背景・尺違いを大量に作りたい。",input:"商品画像 / 過去広告 / コピー / CTA",output:"複数パターンの縦型動画 / 地域・季節別バリエーション",user:"Performance Marketing / SNS運用 / EC",replaces:"毎回の新規撮影 / 手作業リサイズ / 少数案でのABテスト",kpi:["制作本数","CTR/CVR改善","クリエイティブ更新頻度","1案あたりコスト"],whyThis:["既存素材を編集して量産しやすい","複数モデルを同一Workspaceで試せる","出力後の再編集まで一気通貫"],notFor:["静止画だけで十分な商材","動画広告をほぼ運用していない"]},
    {title:"IP・ゲーム映像",situation:"既存キャラクターを使ったPVやSNS動画を増やしたいが、手付けアニメやモーキャプが重い。",input:"キャラクター画像 / 演者動画 / 既存PV / 台詞",output:"キャラクター演技動画 / 短尺PV / 別演出版",user:"ゲーム会社 / アニメ / 出版 / IPホルダー",replaces:"一部モーションキャプチャ / 手付けアニメ / 簡易PV制作",kpi:["PV制作日数","制作本数","外注費","1キャラあたり展開数"],whyThis:["Act-Twoで演技転写ができる","非人間キャラにも対応しやすい","生成後も編集工程を続けられる"],notFor:["原作監修で1フレーム単位の再現が必須","生成AI利用が権利上禁止"]}
  ],
  comparisonDetails:[
    {name:"Adobe Firefly",bestWhen:["Creative Cloud中心の既存制作環境","Adobe契約内で完結したい","企業ガバナンスを最優先"],runwayWinsWhen:["既存動画そのものを自然言語で編集したい","Act-Twoなどキャラクター演技を使いたい","生成から編集までAI動画中心に回したい"],otherWinsWhen:["Photoshop/Premiereとの連携が最重要","新しい制作基盤を増やしたくない"],switchingCost:"低〜中。共存しやすく、全面リプレイスより併用が現実的。",pricingNote:"Adobe既存契約とのバンドル優位あり。",japaneseNote:"Adobe側が日本語・国内販売体制で優位。",enterpriseNote:"Adobeは既存Enterprise導入基盤が強い。RunwayはAI動画特化ワークフローで差別化。"},
    {name:"Google Veo",bestWhen:["最高水準の生成品質を重視","Google Cloud/Workspace活用が強い","新規動画生成が中心"],runwayWinsWhen:["既存映像の編集・変換まで必要","制作工程を一つのUIで回したい","Enterpriseで複数モデルを統制したい"],otherWinsWhen:["生成モデル単体の品質が最重要","Googleエコシステム統合が決定要因"],switchingCost:"低。生成用途だけならモデル差し替えは比較的容易。",pricingNote:"モデル/API単価比較が重要。RunwayはWorkspace価値込みで見るべき。",japaneseNote:"Googleの国内体制は強い。",enterpriseNote:"Googleは基盤/Cloud統合、Runwayは制作現場ワークフローに強み。"},
    {name:"OpenAI video",bestWhen:["ChatGPT Enterpriseとの一体運用","汎用AIと動画生成をまとめたい","社内AI標準をOpenAIに寄せている"],runwayWinsWhen:["映像制作専用の編集・再利用工程が必要","キャラクター演技や既存映像編集を重視","Creative team向け管理UIが必要"],otherWinsWhen:["既存OpenAI契約との統合が最重要","動画以外の生成AI利用も一元化したい"],switchingCost:"低〜中。API組み込み後は上がる。",pricingNote:"契約全体のAIコストで比較すべき。",japaneseNote:"日本語汎用AI体験はOpenAI側が強い。",enterpriseNote:"OpenAIは汎用AI基盤、Runwayは動画制作特化で差別化。"},
    {name:"Higgsfield",bestWhen:["高速なトレンド追随","生成表現・カメラ演出を素早く試す","コストを抑えたクリエイター利用"],runwayWinsWhen:["Enterprise管理が必要","既存映像編集やAct-Twoを使う","チーム制作・ガバナンスまで含めたい"],otherWinsWhen:["個人/小規模チームで最新表現を高速に試したい","Enterprise統制が不要"],switchingCost:"低。生成専用用途なら並行利用しやすい。",pricingNote:"生成単価だけならHiggsfield系が有利になる可能性。",japaneseNote:"日本語支援体制は要確認。",enterpriseNote:"Runwayの方が組織利用・管理面で明確に強い。"}
  ],
tags:["Generative Video","Enterprise","Creative Workflow"],website:"https://runwayml.com",featured:true,
  decision:{
    differentiators:[
      {label:"Aleph 2.0 Edit Studio",level:"Runway固有",what:"既存動画を自然言語で直接編集し、商品・人物・背景・不要物・VFXなどをショット単位で置換。さらに1フレームの編集を残りの動画へ反映できる。",whyItMatters:"“新しい動画を生成する”だけでなく、“すでに撮った映像を直す”工程にAIを入れられる。撮り直し・VFX・再編集の一部を置換しやすい。",comparedWith:["Google Veo","OpenAI video","Adobe Firefly"],evidence:"Runway Edit Studio / Aleph 2.0"},
      {label:"Act-Two Performance Capture",level:"Runway固有",what:"演者のPerformance videoから、別キャラクターへ動き・表情・発話・ジェスチャーを転写できる。非人間キャラや様々な画角にも対応。",whyItMatters:"IPキャラクターやCGキャラクターを、モーションキャプチャ設備なしで“演技させる”ワークフローを作れる。",comparedWith:["HeyGen","Synthesia","Google Veo"],evidence:"Runway Act-Two"},
      {label:"生成→編集→再利用が同一環境",level:"Runwayで特に強い",what:"Gen-4系の出力をAct-Two、Edit Studio、Retime、Expand、Upscaleなどへそのまま渡せる。",whyItMatters:"モデルを跨いでファイルを書き出し・再アップロードする手間が減り、“生成モデル”ではなく制作環境として使いやすい。",comparedWith:["Google Veo","OpenAI video","Higgsfield"],evidence:"Runway Gen-4 workflow"},
      {label:"複数社モデルをEnterprise統制下で利用",level:"Runwayで特に強い",what:"Runway独自モデルと選択された第三者モデルを同じEnterprise契約・データ保護・管理下で利用し、管理者がモデル単位でON/OFFできる。",whyItMatters:"部署ごとにAI動画ツールを個別契約するより、ガバナンスを一本化しやすい。",comparedWith:["単一モデル系サービス","個別API契約"],evidence:"Runway Enterprise third-party models FAQ"},
      {label:"Text / Image → Video",level:"他でもできる",what:"テキストや画像から高品質動画を生成する。",whyItMatters:"重要な基本機能だが、ここ自体はRunwayだけの差別化ではない。",comparedWith:["Google Veo","OpenAI video","Kling","MiniMax"],evidence:"Runway Gen-4.5"}
    ],
    capabilities:[
      {label:"Aleph Edit Studio",detail:"既存映像を自然言語で編集・変換し、背景・人物・商品・不要物・VFXなどをショット単位で変更。",level:"Runway固有",input:"既存動画 / 自然言語の編集指示",output:"編集済み動画 / 変換済みショット",replaces:"再撮影 / 手作業VFX / 素材差し替えの一部",whyItMatters:"“新規生成”ではなく“撮影済み素材の修正”までAI化できるのがRunwayの強い差別化。",examples:["既存CMの背景だけ差し替える","撮影済み映像から不要物を除去","同一素材を季節・地域別に作り替える"]},
      {label:"Act-Two Performance Capture",detail:"演者の動き・表情・発話・ジェスチャーを別キャラクターへ転写。",level:"Runway固有",input:"演者のPerformance video / キャラクター画像",output:"演技・表情を反映したキャラクター動画",replaces:"モーションキャプチャ設備 / 手付けアニメーションの一部",whyItMatters:"IPキャラクターを“演技させる”用途で、Avatar動画とは違う表現ができる。",examples:["既存IPキャラに人の演技を転写","非人間キャラを自然に動かす","短尺PV用のキャラクター演技を量産"]},
      {label:"Integrated Creative Workflow",detail:"生成→編集→変換→高解像度化まで、同一制作環境で連続して扱える。",level:"Runwayで特に強い",input:"生成素材 / 既存映像 / 外部モデル出力",output:"再編集・変換・高解像度化した制作物",replaces:"複数ツール間の書き出し / 再アップロード / 手戻り",whyItMatters:"単一モデルではなく“制作環境”として使えるため、実務フローに組み込みやすい。",examples:["Gen-4出力をそのまま編集工程へ渡す","生成動画をExpand/Upscaleで仕上げる","複数案を同一Workspaceで比較"]},
      {label:"Enterprise Model Governance",detail:"Runway独自モデルと一部第三者モデルを、同一Enterprise環境・管理ルールの下で利用。",level:"Runwayで特に強い",input:"Workspace / Brand assets / Team settings / 複数モデル",output:"統制された制作環境 / 利用ログ / 管理されたモデル利用",replaces:"部署ごとの個別AI契約 / モデルごとの管理分散",whyItMatters:"AI動画ツールが乱立しても、企業側のガバナンスを一本化しやすい。",examples:["部署ごとに利用可能モデルを制御","Brand Kitで制作ルールを共通化","Audit Logsで利用状況を確認"]},
      {label:"Text / Image → Video",detail:"Gen-4.5などでテキスト・画像から動画を生成。",level:"他でもできる",input:"テキストプロンプト / 静止画",output:"新規生成動画",replaces:"ロケ前の試作 / 初期映像制作の一部",whyItMatters:"重要な基本機能だが、Veo・Kling・MiniMaxなどでも実現可能で、ここ自体はRunway固有ではない。",examples:["絵コンテから15秒CMのたたき台を作る","商品画像から縦型動画を生成","撮影前のプリビズを作る"]}
    ],
    limitations:[
      "モデル品質だけを比較すると競合との差が短期間で縮まりやすい。",
      "高品質動画は試行回数が増えやすく、クレジット消費が読みにくい。",
      "SAMLとSCIMは現時点で未対応。SSOはOIDCベース。",
      "日本語UI・日本語サポートの提供範囲は公開情報だけでは判定しきれない。"
    ],
    pricing:{
      publicPlans:[
        {name:"Free",monthly:"$0",credits:"125 one-time credits",notes:"試用向け。"},
        {name:"Standard",monthly:"$15",annualEquivalent:"$12/月相当",credits:"625 credits/月"},
        {name:"Pro",monthly:"$35",annualEquivalent:"$28/月相当",credits:"2,250 credits/月"},
        {name:"Max",monthly:"$95",annualEquivalent:"$76/月相当",credits:"9,500 credits/月",notes:"1か月分まで未使用creditsを繰越。"}
      ],
      enterprise:"Enterpriseは個別見積。Custom credits、SSO、Workspace Analytics、Enterprise-wide onboarding、Priority support等を含む。",
      api:"Runway Devは基本1 credit = $0.01。モデル・解像度・秒数ごとに従量課金。",
      tcoNote:"制作現場では契約費より『何回生成し直すか』がTCOを左右しやすい。PoC時に1成果物あたりの平均生成回数を必ず測るべき。"
    },
    onboarding:{
      level:2,label:"低〜中",timeToValue:"個人利用なら即日。企業利用は1〜3週間程度が目安。",costNote:"小規模PoCならほぼライセンス費のみ。EnterpriseはSSO・権限・ブランドルール・運用設計の工数が追加。",
      tasks:["アカウント/Workspace設定","対象ユースケース選定","Brand / IP利用ルール整理","プロンプト・生成フロー検証","EnterpriseならSSO・権限設定"]
    },
    replacement:{
      level:2,label:"比較的低い",costNote:"Adobe等の制作環境を完全置換するより、生成工程を追加するケースが多く、初期リプレイス負荷は低め。",
      migrationRisks:["既存アセット管理との二重運用","社内承認フローの再設計","制作担当者の学習コスト","Adobe等の既存工程を完全には置き換えにくい"]
    },
    japanese:{ui:"要確認",input:"日本語プロンプト利用可",output:"言語依存度は用途次第",docs:"英語中心",support:"日本語専任対応は公開情報では要確認",note:"日本拠点は開設済みだが、UI・Help・Supportの日本語提供範囲は契約前確認推奨。"},
    support:{level:"Enterpriseは強い",details:["Enterprise Creative Support","Priority Creative & Technical Support","Same business day response","Weekly Office Hours（US/EU time zones）","Monthly Feature Deep Dives"]},
    integrations:["API","MCP","Workspace / Organization","Brand Kits","Third-party models"],
    enterpriseReadiness:[
      {item:"SSO",status:"○",note:"OIDC対応"},
      {item:"SCIM",status:"×",note:"現時点で未対応"},
      {item:"SAML",status:"×",note:"現時点で未対応"},
      {item:"Audit Logs",status:"○",note:"CSV export可"},
      {item:"SOC 2 Type II",status:"○"},
      {item:"ISO/IEC 27001:2022",status:"○"},
      {item:"Workspace Analytics",status:"○",note:"Enterprise"},
      {item:"Priority Support",status:"○",note:"Enterprise"}
    ],
    contract:[
      {item:"個人プラン",value:"月額/年額。アップグレードは日割り。"},
      {item:"Team",value:"2〜9席。$69/席/月、年契約は$55/席/月。"},
      {item:"Enterprise",value:"10名以上の大規模利用向け。個別契約。"},
      {item:"追加credits",value:"最低1,000 creditsから購入可能。"}
    ],
    trial:{available:"あり",detail:"Freeで125 creditsを一度付与。まず操作感と出力品質を確認可能。"},
    lockIn:{level:2,label:"低〜中",reasons:["出力物自体は動画/画像として持ち出せる","ただし生成フロー・Brand Kit・運用ノウハウはRunway依存になりやすい","API組み込み後は置換コストが上がる"]},
    bestFor:["広告・映像制作で生成AIを本番利用したい","複数モデルを一つの制作環境で扱いたい","ブランド/制作チーム単位でEnterprise運用したい","まず短期PoCから始めたい"],
    notFor:["日本語UI・国内時間帯サポートが必須","既存Adobe環境を完全に一発置換したい","生成コストを固定額で厳密に予算化したい"],
    verdict:{status:"PoC推奨",summary:"導入難易度は低く、制作現場で価値検証しやすい。まず1つの明確な制作工程に限定し、品質・生成回数・1成果物あたりTCOを測るのが最短。"},
    evidence:[
      {item:"公開料金",type:"Official",confidence:"High",source:"Runway pricing"},
      {item:"API単価",type:"Official",confidence:"High",source:"Runway Dev pricing"},
      {item:"SSO / SCIM / SAML",type:"Official",confidence:"High",source:"Runway Help Center"},
      {item:"Enterprise support",type:"Official",confidence:"High",source:"Runway Help Center"},
      {item:"オンボーディング期間",type:"Estimated",confidence:"Medium"},
      {item:"リプレイスコスト",type:"Estimated",confidence:"Medium"},
      {item:"日本語サポート範囲",type:"Observed",confidence:"Low"}
    ]
  }
},
  {slug:"heygen-avatar-video",name:"HeyGen AI Avatar & Video",provider:"HeyGen",companySlug:"heygen",country:"United States",category:"Creative AI",tagline:"1本の動画を、多言語・多地域へ展開する。",description:"AI Avatar、音声クローン、翻訳・リップシンクを組み合わせた動画ローカライズ／生成プロダクト。",fitScore:91,japanStatus:"Building ecosystem",entryStage:"Entering",useCases:["多言語営業","採用動画","研修","海外向けマーケ"],targetUsers:["グローバル企業","人事","営業企画","EC"],alternatives:["Synthesia","Captions","ElevenLabs"],tags:["Avatar","Localization","Video"],website:"https://www.heygen.com"},
  {slug:"synthesia-enterprise-video",name:"Synthesia Enterprise Video",provider:"Synthesia",companySlug:"synthesia",country:"United Kingdom",category:"Enterprise AI",tagline:"研修・マニュアル動画を、撮影せず更新する。",description:"企業向けのAI Avatar動画生成・更新基盤。研修、オンボーディング、営業Enablementに強い。",fitScore:88,japanStatus:"APAC expansion",entryStage:"Entering",useCases:["研修","マニュアル","オンボーディング","営業Enablement"],targetUsers:["人事","L&D","営業企画","グローバル本社"],alternatives:["HeyGen","Colossyan","Canva"],tags:["Training","Enterprise Video","Avatar"],website:"https://www.synthesia.io"},
  {slug:"minimax-multimodal",name:"MiniMax Multimodal AI",provider:"MiniMax",companySlug:"minimax",country:"China",category:"Multimodal AI",tagline:"動画・音声・画像・Agentを一つのAI群で扱う。",description:"動画、音声、画像、テキスト、Agentを横断するマルチモーダルAIプロダクト群。",fitScore:89,japanStatus:"Japan organization",entryStage:"Scaling",useCases:["IP動画","音声生成","動画生成","AI Agent"],targetUsers:["ゲーム","アニメ・出版","広告","プラットフォーム"],alternatives:["Runway","Kling","OpenAI","ElevenLabs"],tags:["Multimodal","Video","Voice","Agent"],website:"https://www.minimax.io"},
  {slug:"applied-intuition-platform",name:"Applied Intuition Vehicle & Autonomy Platform",provider:"Applied Intuition",companySlug:"applied-intuition",country:"United States",category:"Physical AI",tagline:"自動運転・SDV開発を、実機依存から切り離す。",description:"自動運転、SDV、自律機械向けのシミュレーション・検証・車両ソフトウェア開発基盤。",fitScore:84,japanStatus:"Strategic expansion",entryStage:"Scaling",useCases:["自動運転検証","SDV開発","建機自律化","シミュレーション"],targetUsers:["自動車OEM","Tier1","建機","農機"],alternatives:["内製基盤","NVIDIA","dSPACE","Vector"],tags:["Simulation","Autonomy","SDV"],website:"https://www.appliedintuition.com"},
  {slug:"wayve-ai-driver",name:"Wayve AI Driver",provider:"Wayve",companySlug:"wayve",country:"United Kingdom",category:"Mobility AI",tagline:"都市ごとに作り込まない、自動運転AI。",description:"End-to-End学習型のEmbodied AIを用い、異なる道路環境への汎化を狙う自動運転AI Driver。",fitScore:90,japanStatus:"Tokyo deployment",entryStage:"Entering",useCases:["Robotaxi","自動運転","配送","Mobility"],targetUsers:["自動車OEM","配車","交通事業者","自治体"],alternatives:["Waymo","Cruise系","自社AD stack"],tags:["Embodied AI","Autonomy","Robotaxi"],website:"https://wayve.ai"},
  {slug:"sierra-agent-os",name:"Sierra Agent OS",provider:"Sierra",companySlug:"sierra",country:"United States",category:"Enterprise AI",tagline:"顧客対応を、“回答”から“実行”へ。",description:"問い合わせ回答だけでなく、返品・契約変更・手続きなどを実行する企業向けAI Agent基盤。",fitScore:95,japanStatus:"SoftBank exclusive partnership",entryStage:"Scaling",useCases:["CS自動化","契約手続き","解約防止","顧客体験"],targetUsers:["通信","金融","小売","大手サービス"],alternatives:["Salesforce Agentforce","Intercom Fin","Zendesk AI"],tags:["AI Agent","Customer Experience","Enterprise"],website:"https://sierra.ai"},
  {slug:"elevenlabs-agents",name:"ElevenLabs Conversational AI",provider:"ElevenLabs",companySlug:"elevenlabs",country:"United Kingdom",category:"Voice AI",tagline:"自然な音声AIを、電話・接客の実務へ。",description:"高品質音声生成とリアルタイム会話を組み合わせたVoice Agent／音声AI基盤。",fitScore:92,japanStatus:"Enterprise expansion",entryStage:"Entering",useCases:["AIコールセンター","予約","営業電話","多言語音声"],targetUsers:["コンタクトセンター","サービス業","ゲーム","メディア"],alternatives:["OpenAI Realtime","Deepgram","Cartesia"],tags:["Voice AI","Agents","Realtime"],website:"https://elevenlabs.io"},
  {slug:"fresha-platform",name:"Fresha Platform",provider:"Fresha",companySlug:"fresha",country:"United Kingdom",category:"Vertical SaaS",tagline:"美容・ウェルネス店舗の予約・決済・集客を一つに。",description:"予約、POS、顧客管理、決済、マーケットプレイスを統合する美容・ウェルネス業界向けプラットフォーム。",fitScore:86,japanStatus:"Japan build-out",entryStage:"Entering",useCases:["予約","POS","決済","集客"],targetUsers:["美容室","ネイル","エステ","ウェルネス"],alternatives:["HOT PEPPER Beauty","STORES 予約","Square"],tags:["Vertical SaaS","Marketplace","Payments"],website:"https://www.fresha.com"},
  {slug:"joby-air-taxi",name:"Joby Air Taxi",provider:"Joby Aviation",companySlug:"joby",country:"United States",category:"Mobility",tagline:"都市と空港を、eVTOLで短時間接続する。",description:"電動垂直離着陸機（eVTOL）を使う次世代エアタクシーサービスと運航基盤。",fitScore:87,japanStatus:"ANA / Toyota strategic build",entryStage:"Entering",useCases:["空港アクセス","都市間移動","観光","新交通"],targetUsers:["航空","自治体","不動産","交通事業者"],alternatives:["ヘリコプター","鉄道","タクシー","Archer"],tags:["eVTOL","Air Taxi","Mobility"],website:"https://www.jobyaviation.com"},
  {slug:"exotec-skypod",name:"Exotec Skypod System",provider:"Exotec",companySlug:"exotec",country:"France",category:"Robotics",tagline:"倉庫の保管とピッキングを、ロボットで再設計する。",description:"高密度保管・搬送・ピッキングを組み合わせるGoods-to-Person型倉庫ロボティクス。",fitScore:85,japanStatus:"Established Japan business",entryStage:"Established",useCases:["倉庫自動化","ピッキング","保管効率","フルフィルメント"],targetUsers:["小売","EC","3PL","製造"],alternatives:["AutoStore","Geek+","HAI Robotics","Daifuku"],tags:["Warehouse Robotics","Automation","Logistics"],website:"https://www.exotec.com"},
  {slug:"pallet-logistics-agent",name:"Pallet Logistics AI Agents",provider:"Pallet",companySlug:"pallet",country:"United States",category:"Logistics AI",tagline:"物流のメール・電話・入力業務をAI Agentへ。",description:"配車、予約調整、メール処理、データ入力など物流オペレーションを自動化するVertical AI Agent。",fitScore:83,japanStatus:"Early commercial hiring",entryStage:"Entering",useCases:["配車事務","予約調整","転記","問い合わせ"],targetUsers:["運送会社","3PL","倉庫","物流部門"],alternatives:["RPA","BPO","内製AI Agent"],tags:["Logistics","AI Agent","Automation"],website:"https://www.pallet.com"},
  {slug:"fever-marketplace",name:"Fever Experience Platform",provider:"Fever",companySlug:"fever",country:"Spain / United States",category:"Experience Tech",tagline:"イベントの企画・集客・販売を、都市横断で展開する。",description:"イベント発見、チケット販売、IP体験、ブランドイベントを統合するExperience Marketplace。",fitScore:88,japanStatus:"Japan growth",entryStage:"Scaling",useCases:["イベント集客","IP体験","ブランドイベント","チケット"],targetUsers:["IPホルダー","ブランド","イベント会社","施設"],alternatives:["Peatix","Eventbrite","チケットぴあ"],tags:["Experience","Marketplace","IP"],website:"https://feverup.com"},
  {slug:"motiva-implants",name:"Motiva Implants",provider:"Establishment Labs",companySlug:"establishment-labs",country:"Costa Rica",category:"HealthTech",tagline:"乳房再建・美容医療の選択肢を拡張する。",description:"乳房再建・美容用途の次世代インプラント製品群。",fitScore:81,japanStatus:"Commercial expansion",entryStage:"Scaling",useCases:["乳房再建","美容医療","術後QOL","クリニック導入"],targetUsers:["形成外科","病院","美容クリニック","医療法人"],alternatives:["Mentor","Allergan系","既存インプラント"],tags:["MedTech","FemTech","Healthcare"],website:"https://establishmentlabs.com"},
  {slug:"rogo-finance-ai",name:"Rogo Finance AI",provider:"Rogo",companySlug:"rogo",country:"United States",category:"Financial AI",tagline:"金融調査・案件分析・モデル作成をAIで高速化する。",description:"投資銀行、PE、Asset Manager向けに調査、モデル、メモ、案件分析を支援する金融専用AI。",fitScore:89,japanStatus:"Japan team formation",entryStage:"Entering",useCases:["金融リサーチ","案件分析","モデル作成","投資メモ"],targetUsers:["投資銀行","PE","資産運用","金融機関"],alternatives:["ChatGPT Enterprise","Hebbia","Harvey","内製LLM"],tags:["Financial AI","Vertical AI","Enterprise"],website:"https://rogo.com"},
  {slug:"protopie",name:"ProtoPie",provider:"ProtoPie",companySlug:"protopie",country:"South Korea",category:"Design Tech",tagline:"複雑なUIを、実装前に“動く形”で検証する。",description:"高度なインタラクションをコードなしで再現し、UX検証・HMI開発に使えるプロトタイピング基盤。",fitScore:84,japanStatus:"Japan enterprise expansion",entryStage:"Scaling",useCases:["車載HMI","UX検証","プロトタイピング","Design-to-Code"],targetUsers:["自動車","家電","デザイン組織","プロダクト開発"],alternatives:["Figma Proto","Framer","Axure"],tags:["Prototyping","Automotive UX","MCP"],website:"https://www.protopie.io"},
  {slug:"rlwrld-rfm",name:"RLWRLD Robotics Foundation Model",provider:"RLWRLD",companySlug:"rlwrld",country:"South Korea",category:"Physical AI",tagline:"既存ロボットに、非定型作業への適応力を与える。",description:"産業用ロボットに把持・認識・操作の汎化能力を与えるRobotics Foundation Model。",fitScore:86,japanStatus:"Japan early build",entryStage:"Entering",useCases:["ピッキング","組付け","検品","品出し"],targetUsers:["製造","物流","小売","ロボットSI"],alternatives:["Physical Intelligence","Covariant系","内製Vision AI"],tags:["Physical AI","Robotics Foundation Model","Manipulation"],website:"https://www.rlwrld.ai"},
  {slug:"shield-hivemind",name:"Hivemind",provider:"Shield AI",companySlug:"shield-ai",country:"United States",category:"Defense AI",tagline:"通信・GPS制約下でも動くAI Pilot。",description:"無人航空機・ドローン向けの自律飛行AI Pilot / autonomy stack。",fitScore:78,japanStatus:"Japan BD expansion",entryStage:"Entering",useCases:["自律無人機","協調飛行","監視","防衛AI"],targetUsers:["防衛","重工","航空宇宙","政府"],alternatives:["Anduril系","自社autonomy stack"],tags:["Defense Tech","AI Pilot","Autonomy"],website:"https://shield.ai"}
];


export const japanFitWeights = {
  "課題への刺さり": 25,
  "日本での使いやすさ": 20,
  "差別化の強さ": 20,
  "導入しやすさ": 15,
  "費用対効果": 10,
  "Enterprise適性": 10
};

export function dimensionScore(item: NonNullable<CompanyIntelligence["scoreBreakdown"]>[number]): number {
  const max = item.criteria.reduce((sum, c) => sum + c.max, 0);
  const awarded = item.criteria.reduce((sum, c) => sum + c.awarded, 0);
  return max ? Math.round((awarded / max) * 100) : 0;
}

export function calculateJapanFit(companySlug: string): number | null {
  const company = companies.find(c => c.slug === companySlug);
  const dimensions = company?.intelligence?.scoreBreakdown;
  if (!dimensions?.length) return null;
  const weighted = dimensions.reduce((sum, item) => sum + dimensionScore(item) * (item.weight ?? 0), 0);
  const totalWeight = dimensions.reduce((sum, item) => sum + (item.weight ?? 0), 0);
  return totalWeight ? Math.round(weighted / totalWeight) : null;
}

export const productCategories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
