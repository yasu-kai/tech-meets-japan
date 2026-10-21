/** Early-Stage editorial company intelligence. Last checked 2026-10-22.
 * These are company profiles, not comparisons of technology performance.
 * Funding, bookings, sales and incubator backing are distinct concepts.
 */
export type CompanyProfile = {
  people: {name:string;role:string;story:string}[];
  founding: string;
  finance: string;
  progress: {date:string;event:string}[];
  market: string[];
  takeaway: string;
  disclosure: string;
  sources: {label:string;url:string}[];
};
export const earlyStageProfiles:Record<string,CompanyProfile>={
  "bridge-neurotech":{
    people:[{name:"Will Biederman, PhD",role:"Founder & CEO",story:"大学院時代に開発した神経記録チップがNeuralinkの初期機器に採用され、その後Google X／Verilyで医療機器を開発。Dexcom G7の開発に携わり、Forest Neurotech（後のArbor Neuroscience）も共同創業した。身体に埋め込む技術を知る人物が、あえて手術不要のBCIに挑む構図が興味深い。"}],
    founding:"2026年創業。米カリフォルニア州シリコンバレーを拠点とする。",
    finance:"2026年10月に1,350万ドル（1ドル150円の参考換算で約20.3億円）を調達したと創業者が公表。reMind CapitalとGeneral Catalystが主導し、Sunflower CapitalやScott Sandellらが参加した。",
    progress:[
      {date:"2026年",event:"Bridge Neurotech設立。超音波を使う非侵襲型BCIを研究。"},
      {date:"2026年10月6日",event:"ステルス状態から事業を公表。Butterfly Networkとの複数年の研究開発契約を発表。"},
      {date:"2026年10月",event:"Redwood Cityで最初の人対象観察研究の参加者を募集。"}
    ],
    market:["最初の研究対象は医療機器の販売ではなく、頭蓋骨越しに脳活動の指標を読めるかという科学的・工学的課題。","日本での用途は大学・医療研究機関との研究連携が先行候補。ただし日本への進出計画や提携募集は確認できない。"],
    takeaway:"研究の成功が、そのまま販売開始を意味するわけではない。創業者の経験と資金・半導体技術を背景に、頭蓋骨という最大の障壁を越えられるかが見どころ。",
    disclosure:"調達額・投資家は創業者発表。臨床有効性、商用製品、国内提携は未確認。",
    sources:[
      {label:"Bridge — 創業者からの手紙（2026年10月）",url:"https://www.bridgeneurotech.com/letter"},
      {label:"Bridge — 創業者・研究チーム",url:"https://www.bridgeneurotech.com/about"},
      {label:"Butterfly Network — 研究開発提携（2026年10月6日）",url:"https://ir.butterflynetwork.com/News/press-releases/news-details/2026/Bridge-Neurotech-and-Butterfly-Network-Announce-Partnership-to-Develop-Fully-Non-Invasive-Brain-Computer-Interface/"}
    ]
  },
  "chargebotic":{
    people:[
      {name:"Anis Cheriet",role:"Co-founder & CEO",story:"EV充電インフラの事業展開に携わった経歴を公表している。分散した機器へ、いかに電力を届けるかという問題に取り組む。"},
      {name:"Bo Christopher Redfearn",role:"Co-founder & CTO",story:"Oculus、Apple、Googleでの経験を持つと会社が説明。磁界から電力を取り出すMaglineの技術設計を担当する。"}
    ],
    founding:"2026年設立。米サンフランシスコを拠点とする。",
    finance:"Founders Incの支援とNVIDIA Inceptionへの参加を会社が公表。外部からの累計調達額、評価額、売上は未確認。支援プログラムへの参加を資金調達金額と混同しない。",
    progress:[
      {date:"2026年",event:"Chargebotic設立。送電線の磁界から電力を得るKestrelを開発。"},
      {date:"2026年8月",event:"Camp RobertsのJIFX 26-4で18Wの給電実証を発表。"},
      {date:"次のマイルストーン",event:"実際に運用中の送電線での継続給電を検証する計画。半自律接続のKestrel 2も開発中。"}
    ],
    market:["公式サイトでは政府機関・インテグレーター・機器メーカー向けに説明会を案内。遠隔機器の電源供給という課題を中心に据える。","日本では送配電事業者が許可する設備での限定実証が考えられるが、日本法人・販売代理店・国内事業者との提携は未確認。"],
    takeaway:"EV充電網の構築経験とデバイス開発の経験を組み合わせた会社。最初の18Wよりも、送電設備の安全要件に合う製品と運用体制を作れるかが次の成長条件になる。",
    disclosure:"18Wの実証や創業者経歴は企業公表情報。調達額、正式な安全認証、日本進出は未確認。",
    sources:[
      {label:"Chargebotic — 企業紹介、創業チーム、2026年実証",url:"https://chargebotic.com/"}
    ]
  },
  "nori-robotics":{
    people:[{name:"Antonio Sitong Li",role:"Founder / CTO",story:"Columbia Universityでコンピューターサイエンスと建築を学び、VRによる実演からロボットに作業を教える研究に関わった。価格の高い研究用ロボットを、家庭や開発者へ開くことを目指している。"}],
    founding:"2026年創業。サンフランシスコ拠点。Y CombinatorのSummer 2026バッチに参加。YC掲載のチーム規模は5人。",
    finance:"Y Combinator掲載の会社申告では、立ち上げ後約6週間で44万ドル超（1ドル150円換算で約6,600万円）の売上を計上したとしている。資金調達額ではなく会社側が掲載した売上情報であり、認識基準・返金・出荷完了の状況は未確認。",
    progress:[
      {date:"2026年",event:"Nori設立。Y Combinator Summer 2026に参加。"},
      {date:"2026年8月",event:"NORI A3の1,688ドル（約25.3万円）での一般向け注文を案内。"},
      {date:"2026年秋",event:"公式販売ページは秋の出荷予定を掲載。先行ロットと一般注文の出荷は区別して見る必要がある。"}
    ],
    market:["開発者向けベータを先行して募り、SDKを使う研究者・開発者からフィードバックを集める方針。一般家庭向け完成品としての性能と混同しない。","日本からの注文では輸入手続・関税の負担を案内。日本法人、国内保証、修理体制などは未確認。"],
    takeaway:"価格を下げることで実機利用者を増やし、そこから技能や実行データを蓄積する戦略が特徴。家事ロボットとして完成しているかより、安価な実機とデータの循環が成立するかを追いたい。",
    disclosure:"販売価格・売上・採択情報・創業者経歴は企業やYCの公開情報。売上は監査済み決算ではなく、一般家庭での実用性も未確認。",
    sources:[
      {label:"Y Combinator — Nori公式企業ページ",url:"https://www.ycombinator.com/companies/noril1"},
      {label:"Nori Robotics — A3公式商品ページ",url:"https://www.norirobotics.com/"},
      {label:"Nori Robotics — 開発者向けベータ",url:"https://www.norirobotics.com/beta-signups"},
      {label:"Nori A3 — 開発者による技術論文",url:"https://arxiv.org/abs/2605.16537"}
    ]
  }
};
