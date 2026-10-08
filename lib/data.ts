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
};

export const companies: Company[] = [
  {
    slug: "runway",
    name: "Runway",
    country: "United States",
    category: "Creative AI",
    tagline: "AIで映像制作そのものを再設計する。",
    description: "生成映像・編集・制作ワークフローを統合し、広告、メディア、エンターテインメントの制作速度と表現力を変えるAIプラットフォーム。",
    fitScore: 94,
    stage: "Scale-up",
    japanStatus: "Japan expansion",
    useCases: ["広告クリエイティブ", "映像制作", "ゲーム・IP", "ブランドコンテンツ"],
    buyers: ["広告代理店", "テレビ・映画", "ゲーム会社", "大手ブランド"],
    pain: "制作費・制作期間が大きく、コンテンツ量を増やせない。",
    whyNow: "生成品質が実制作に届き、日本市場で企業導入フェーズへ移行。",
    tags: ["Generative Video", "Enterprise", "Media"],
    website: "https://runwayml.com",
    featured: true
  },
  {
    slug: "heygen",
    name: "HeyGen",
    country: "United States",
    category: "Creative AI",
    tagline: "一人を、世界中で話せる存在に。",
    description: "AIアバター、音声、翻訳、動画生成を組み合わせ、多言語での動画コミュニケーションを大幅に簡略化。",
    fitScore: 91,
    stage: "Scale-up",
    japanStatus: "Building ecosystem",
    useCases: ["多言語営業", "採用", "教育", "IR・広報"],
    buyers: ["グローバル企業", "教育", "EC", "クリエイター"],
    pain: "言語ごとの撮影・翻訳・編集に時間とコストがかかる。",
    whyNow: "日本企業の海外展開とインバウンド対応の両方で需要が拡大。",
    tags: ["AI Avatar", "Localization", "Video"],
    website: "https://www.heygen.com"
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    country: "United Kingdom",
    category: "Enterprise AI",
    tagline: "企業動画を、撮影しない。",
    description: "研修、オンボーディング、営業支援、マニュアルなど企業内動画をAIで生成・更新するエンタープライズ動画基盤。",
    fitScore: 88,
    stage: "Scale-up",
    japanStatus: "APAC expansion",
    useCases: ["研修動画", "マニュアル", "営業Enablement", "多言語社内広報"],
    buyers: ["人事", "営業企画", "L&D", "グローバル本社"],
    pain: "動画の撮影・更新コストが高く、情報更新に追いつかない。",
    whyNow: "AI動画が“制作物”から“業務インフラ”へ移行中。",
    tags: ["Enterprise Video", "Training", "Localization"],
    website: "https://www.synthesia.io"
  },
  {
    slug: "minimax",
    name: "MiniMax",
    country: "China",
    category: "Multimodal AI",
    tagline: "日本のIPを、AI時代のグローバルコンテンツへ。",
    description: "テキスト、音声、画像、動画、音楽、Agentまでを展開するマルチモーダルAI企業。クリエイティブとIP活用の接点が大きい。",
    fitScore: 89,
    stage: "Scale-up",
    japanStatus: "Japan organization",
    useCases: ["IPコンテンツ", "動画生成", "音声生成", "AI Agent"],
    buyers: ["ゲーム", "アニメ・出版", "広告", "プラットフォーム"],
    pain: "IPを守りながらAI生成を活用し、海外展開を加速したい。",
    whyNow: "日本IPと生成AIの商用利用ルールが形成され始めている。",
    tags: ["Multimodal", "IP", "Agent"],
    website: "https://www.minimax.io"
  },
  {
    slug: "applied-intuition",
    name: "Applied Intuition",
    country: "United States",
    category: "Physical AI",
    tagline: "車と機械のソフトウェア開発を加速する。",
    description: "自動運転・SDV・自律機械向けのシミュレーション、検証、車両ソフトウェア開発基盤。",
    fitScore: 84,
    stage: "Scale-up",
    japanStatus: "Strategic expansion",
    useCases: ["SDV", "自動運転", "建機自律化", "シミュレーション"],
    buyers: ["自動車OEM", "Tier1", "建機", "農機"],
    pain: "実機中心の検証では開発速度と試験コストに限界がある。",
    whyNow: "日本の製造業でPhysical AIとSDV投資が加速。",
    tags: ["Autonomy", "Simulation", "Mobility"],
    website: "https://www.appliedintuition.com"
  },
  {
    slug: "wayve",
    name: "Wayve",
    country: "United Kingdom",
    category: "Mobility AI",
    tagline: "都市を学習するAI Driver。",
    description: "汎化可能なEmbodied AIによる自動運転を開発。都市ごとの巨大な事前マップ依存を減らし、異なる道路環境へ適応するAI Driverを目指す。",
    fitScore: 90,
    stage: "Scale-up",
    japanStatus: "Tokyo deployment",
    useCases: ["Robotaxi", "自動運転", "配送", "Mobility Platform"],
    buyers: ["自動車OEM", "配車", "交通事業者", "自治体"],
    pain: "自動運転を都市ごとにゼロから作るコストが大きい。",
    whyNow: "東京での実証・商用展開が具体化し始めている。",
    tags: ["Embodied AI", "Autonomy", "Mobility"],
    website: "https://wayve.ai"
  }
];

export const categories = ["All", ...Array.from(new Set(companies.map(c => c.category)))];
