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
        {title:"広告代理店を“販売チャネル”にする",buyer:"大手代理店のAI / Creative Tech部門",wedge:"まず内製制作の高速化ツールとして導入。",expansion:"代理店が自社顧客へRunway活用施策を提案し、案件単位で横展開。"},
        {title:"IP企業で成功事例を作る",buyer:"ゲーム・アニメ・出版のIPホルダー",wedge:"既存IPを壊さない限定ユースケースでPoC。",expansion:"プロモーション→ゲーム内映像→海外展開へ拡張。"},
        {title:"Enterprise workflowとして売る",buyer:"大企業マーケ / Creative Operations",wedge:"単発生成ではなく、Brand Kit・Workspace・ガバナンス込みで導入。",expansion:"部署利用→全社標準→API / workflow組み込みへ。"}
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
      verdict:"日本市場で既にPMFの兆候があり、しかも商業組織はまだ構築途上。『売れるか分からない海外企業』ではなく、『既に自然流入で売れている会社を、組織的GTMで一段上げる』局面。Japan Entry案件としては最上位クラス。",
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
