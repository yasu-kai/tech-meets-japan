export type CompanyIntelligence = {
  snapshot?: { label: string; value: string; note?: string }[];
  japanCustomers?: string[];
  targetAccounts?: { segment: string; pain: string; openingOffer: string; whyBuy: string }[];
  gtmPlays?: { title: string; buyer: string; wedge: string; expansion: string }[];
  competition?: { name: string; strength: string; runwayEdge: string; threat: string }[];
  risks?: { title: string; detail: string; severity: "High" | "Medium" | "Low" }[];
  scoreBreakdown?: { label: string; score: number; reason: string }[];
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
        {segment:"広告代理店 / 制作会社",pain:"案件数は増えるが、撮影・編集・VFX人員がボトルネック。",openingOffer:"既存CM案件のプリビズ / B案量産からPoC。",whyBuy:"制作日数と試作コストを落としつつ、提案本数を増やせる。"},
        {segment:"ゲーム / アニメ / IP",pain:"世界観を守りながら大量のプロモーション素材を作りたい。",openingOffer:"既存IPのPV・SNS短尺・コンセプト映像。",whyBuy:"少人数で表現量を増やせ、海外向けローカライズにも展開しやすい。"},
        {segment:"大手ブランド / マーケ",pain:"SNS・EC・キャンペーンで必要な動画量に制作体制が追いつかない。",openingOffer:"商品画像から短尺広告を複数パターン生成。",whyBuy:"クリエイティブテストの回数を大幅に増やせる。"},
        {segment:"放送 / 映画 / エンタメ",pain:"高コストなVFX・ロケ・企画検証が制作予算を圧迫。",openingOffer:"企画段階の絵作り、背景、VFX補助。",whyBuy:"本撮影前に完成イメージを早く検証できる。"}
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
        {label:"Pain intensity",score:92,reason:"制作費・時間・量の制約は明確。"},
        {label:"Japan timing",score:98,reason:"$40M投資と東京拠点、顧客成長が同時進行。"},
        {label:"Sales clarity",score:95,reason:"広告・ゲーム・ブランドなど買い手と用途が見えやすい。"},
        {label:"New market creation",score:96,reason:"単なる効率化ではなく、制作量・表現・制作主体そのものを広げる。"},
        {label:"Defensibility",score:82,reason:"モデル性能だけでは守りにくく、Workflow / Enterprise運用が鍵。"}
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
  capabilities?: { label: string; detail: string; confidence?: "High"|"Medium"|"Low" }[];
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
  tags: string[];
  website: string;
  featured?: boolean;
  decision?: ProductDecisionData;
};

export const products: Product[] = [
  {slug:"runway-ai-video",name:"Runway AI Video Platform",provider:"Runway",companySlug:"runway",country:"United States",category:"Creative AI",tagline:"撮影・編集・VFXの一部を、生成AIの制作フローへ。",description:"映像生成、編集、Transformation、Character performanceなどを一つの制作環境で扱うAI映像プラットフォーム。",fitScore:94,japanStatus:"Japan expansion",entryStage:"Scaling",useCases:["広告動画","プリビズ","SNSクリエイティブ","IP・ゲーム映像"],targetUsers:["広告・制作会社","ブランドマーケ","ゲーム・IP","放送・映像"],alternatives:["Adobe Firefly","Google Veo","OpenAI video","Higgsfield"],tags:["Generative Video","Enterprise","Creative Workflow"],website:"https://runwayml.com",featured:true,
  decision:{
    capabilities:[
      {label:"Text / Image → Video",detail:"Gen-4.5などでテキスト・画像から動画生成。"},
      {label:"Video Editing / Transformation",detail:"Aleph系で既存映像の変換・編集ワークフローに対応。"},
      {label:"Character Performance",detail:"人物・キャラクター表現を動かすAct-Two系機能を利用可能。"},
      {label:"Multi-model workflow",detail:"Runway独自モデルに加え一部サードパーティモデルも同一環境で利用可能。"},
      {label:"Enterprise controls",detail:"EnterpriseではSSO、Audit Logs、Analytics、Brand Kit、組織管理などを提供。"}
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

export const productCategories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
