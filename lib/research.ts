export type ResearchFormat = "PRODUCT" | "MARKET MAP" | "REPORT" | "COMPARE" | "SIGNAL" | "WTF / GADGET";

export type ResearchTopic = {
  slug: string;
  title: string;
  kicker: string;
  format: ResearchFormat;
  status: "published" | "queue";
  href?: string;
};

export type ResearchCategory = {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  thesis: string;
  topics: ResearchTopic[];
};

export const researchCategories: ResearchCategory[] = [
  {
    slug: "materials-energy",
    label: "FOODTECH, MATERIALS & ENERGY",
    shortLabel: "MATERIALS",
    description: "食素材、材料、エネルギー。原料と製法を変える技術を、実用化の証拠とともに読む。",
    thesis: "材料の驚きだけでなく、製造条件、供給量、品質、環境負荷、コストまで見る。",
    topics: [
      { slug:"savor-carbon-fats", title:"牛も畑も使わずに、バターを作る。Savorの油脂は何を変えるのか。", kicker:"Savor / Carbon-crafted fats / AAK / Food materials", format:"REPORT", status:"published", href:"/research/materials-energy/savor-carbon-fats" },
      { slug:"chargebotic-kestrel", title:"送電線から電気をもらう。ChargeboticのKestrelは何を変えるのか。", kicker:"Chargebotic / Kestrel / 18W field demonstration", format:"REPORT", status:"published", href:"/research/materials-energy/chargebotic-kestrel" },
    ],
  },
  {
    slug: "ai-work",
    label: "AI × WORK",
    shortLabel: "WORK",
    description: "営業、開発、採用、法務、顧客対応。AIがホワイトカラー業務のどこまでを引き受けるのか。",
    thesis: "見るべきは機能数ではなく、人間の業務サイクルから何が消えるか。",
    topics: [
      { slug:"coding-agents", title:"プログラムを書くAIは、開発者の仕事をどこまで任せられるのか。", kicker:"Replit / Cognition / Cursor / Claude Code", format:"MARKET MAP", status:"published", href:"/research/ai-work/coding-agents" },
      { slug:"ai-sales", title:"営業AIは、見込み客探しから連絡まで任せられるのか。", kicker:"見込み客探し → 連絡 → 商談の見極め → 引き継ぎ", format:"REPORT", status:"published", href:"/research/ai-work/ai-sales" },
      { slug:"ai-recruiting", title:"採用は、AIでどこまで変わるのか。", kicker:"Sourcing / Screening / Interview / Scheduling", format:"MARKET MAP", status:"published", href:"/research/ai-work/ai-recruiting" },
      { slug:"ai-legal", title:"パラリーガル業務は、AIでどこまで消えるのか。", kicker:"Research / Review / Draft / Filing", format:"REPORT", status:"published", href:"/research/ai-work/ai-legal" },
      { slug:"ai-customer-service", title:"回答するAIから、解決するAIへ。", kicker:"Customer Service Agents", format:"COMPARE", status:"published", href:"/research/ai-work/ai-customer-service" },
      { slug:"browser-agents", title:"SaaSは残る。でも、人間は触らなくなる。", kicker:"Browserbase / Claude Computer Use / Stagehand", format:"REPORT", status:"published", href:"/research/ai-work/browser-agents" },
    ],
  },
  {
    slug: "ai-security",
    label: "AI × SECURITY",
    shortLabel: "SECURITY",
    description: "攻撃、検知、対策、実行、再検証。AIへ渡されるセキュリティ権限の深さを見る。",
    thesis: "AutomationとAutonomyを分け、AIが自ら次の行動を選べる範囲を見る。",
    topics: [
      { slug:"offensive-ai", title:"AIは、サイバー防御のどこまでを担うのか。", kicker:"XBOW / MindFort / Pentera / Horizon3 / Synack / Terra / AgenticSec", format:"MARKET MAP", status:"published", href:"/research/offensive-ai" },
      { slug:"ai-soc", title:"SOCは監視室からAI監督室へ変わるのか。", kicker:"Detection → Triage → Investigation → Response", format:"REPORT", status:"published", href:"/research/ai-security/ai-soc" },
      { slug:"identity-agents", title:"AI Agent時代のIdentityは誰を認証するのか。", kicker:"Human / Machine / Agent Identity", format:"REPORT", status:"published", href:"/research/ai-security/identity-agents" },
      { slug:"ai-fraud", title:"不正検知AIは『止める判断』まで持てるか。", kicker:"Fraud Detection / Decision / Action", format:"MARKET MAP", status:"published", href:"/research/ai-security/ai-fraud" },
      { slug:"continuous-validation", title:"年1回の診断は、継続攻撃に置き換わるか。", kicker:"Continuous Security Validation", format:"COMPARE", status:"published", href:"/research/ai-security/continuous-validation" },
      { slug:"agentic-dev-security", title:"コードを書くAI。守るのは誰だ。", kicker:"Snyk / MCP / Agentic Development Security", format:"REPORT", status:"published", href:"/research/ai-security/agentic-dev-security" },
    ],
  },
  {
    slug: "ai-creative",
    label: "AI × CREATIVE",
    shortLabel: "CREATIVE",
    description: "映像、音声、デザイン、広告。AIが制作工程そのものを再構成する領域。",
    thesis: "生成品質ではなく、撮影・編集・修正・展開のどの工程が消えるかを見る。",
    topics: [
      { slug:"ai-video", title:"生成動画『第二ラウンド』をどう見るか。", kicker:"Runway / HeyGen / Synthesia", format:"MARKET MAP", status:"published", href:"/research/ai-creative/ai-video" },
      { slug:"runway-production", title:"Runwayは映像生成AIではなく、制作工程OSになれるか。", kicker:"Generate / Edit / Performance / Governance", format:"PRODUCT", status:"published", href:"/research/ai-creative/runway-production" },
      { slug:"ai-voice", title:"声を作るAIから、会話を運用するAIへ。", kicker:"ElevenLabs and the voice stack", format:"REPORT", status:"published", href:"/research/ai-creative/ai-voice" },
      { slug:"synthetic-media", title:"Synthetic Mediaは広告制作コストをどこまで崩すか。", kicker:"Production / Localization / Variant Generation", format:"REPORT", status:"published", href:"/research/ai-creative/synthetic-media" },
      { slug:"creative-stack", title:"Adobeを置き換えるのか、Adobeの中に入るのか。", kicker:"AI Creative Stack", format:"COMPARE", status:"published", href:"/research/ai-creative/creative-stack" },
    ],
  },
  {
    slug: "ai-industry",
    label: "AI × INDUSTRY",
    shortLabel: "INDUSTRY",
    description: "製造、物流、金融、医療、小売。画面の中ではなく、産業オペレーションへAIが入る領域。",
    thesis: "日本企業が外部AIを買う意味がある工程と、内製すべき工程を切り分ける。",
    topics: [
      { slug:"manufacturing-ai", title:"日本の製造業が『外から買うべきAI』はどこにある。", kicker:"Simulation / Inspection / Planning / Robotics", format:"MARKET MAP", status:"published", href:"/research/ai-industry/manufacturing-ai" },
      { slug:"logistics-ai", title:"FAXと電話が残る物流に、AIはどこから入るのか。", kicker:"Dispatch / Planning / Coordination / Exception handling", format:"REPORT", status:"published", href:"/research/ai-industry/logistics-ai" },
      { slug:"finance-ai", title:"金融AIは分析補助から意思決定へ進めるか。", kicker:"Research / Risk / Advisory / Operations", format:"MARKET MAP", status:"published", href:"/research/ai-industry/finance-ai" },
      { slug:"healthcare-ai", title:"医療AIで最後まで人間に残る判断は何か。", kicker:"Diagnosis support / Workflow / Documentation", format:"REPORT", status:"published", href:"/research/ai-industry/healthcare-ai" },
      { slug:"retail-ai", title:"価格決定は、人間の勘からAIの推論へ移るか。", kicker:"Pricing / Promotion / Inventory", format:"REPORT", status:"published", href:"/research/ai-industry/retail-ai" },
      { slug:"procurement-agents", title:"購買部門に、AIの同僚が増えている。", kicker:"Zip / Intake / Risk / Supplier / Approval", format:"REPORT", status:"published", href:"/research/ai-industry/procurement-agents" },
    ],
  },
  {
    slug: "robotics",
    label: "ROBOTICS & PHYSICAL AI",
    shortLabel: "ROBOTICS",
    description: "Humanoid、倉庫、車両、ドローン。AIが現実世界で移動し、掴み、運ぶ領域。",
    thesis: "ソフトウェアの自律性が、物理世界でどこまで許容されるかを見る。",
    topics: [
      { slug:"nori-a3", title:"25万円の双腕ロボット。NORI A3は家事の未来をどこまで近づけたか。", kicker:"Nori Robotics / Bimanual / $1,688 / Reality Check", format:"PRODUCT", status:"published", href:"/research/robotics/nori-a3" },
      { slug:"warehouse-robotics", title:"倉庫は、どこまで人を必要としなくなるのか。", kicker:"Exotec / Locus / Symbotic", format:"MARKET MAP", status:"published", href:"/research/robotics/warehouse-robotics" },
      { slug:"humanoid", title:"Humanoidは『人型』である必要が本当にあるのか。", kicker:"General-purpose robotics", format:"REPORT", status:"published", href:"/research/robotics/humanoid" },
      { slug:"autonomous-driving", title:"自動運転のLevel思想は、他産業へ輸出される。", kicker:"Autonomy Levels as a common language", format:"REPORT", status:"published", href:"/research/robotics/autonomous-driving" },
      { slug:"physical-ai-platforms", title:"Physical AIの勝者はロボット企業か、基盤企業か。", kicker:"Models / Simulation / Hardware / Data", format:"COMPARE", status:"published", href:"/research/robotics/physical-ai-platforms" },
      { slug:"drones", title:"ドローンは『飛ぶカメラ』から作業主体へ進めるか。", kicker:"Inspection / Delivery / Security / Maintenance", format:"MARKET MAP", status:"published", href:"/research/robotics/drones" },
      { slug:"robotics-as-labor", title:"ロボットを“買う”時代が終わる。", kicker:"Formic / Robotics-as-a-Service / Manufacturing", format:"REPORT", status:"published", href:"/research/robotics/robotics-as-labor" },
    ],
  },
  {
    slug: "gadgets",
    label: "GADGETS & FUTURE DEVICES",
    shortLabel: "GADGETS",
    description: "Smart Glasses、Wearables、Personal AI Device。たまには『なんだこれwww』から未来を見る。",
    thesis: "面白さだけで終わらせず、誰が使うのか、日本で普及する障壁は何かまで見る。",
    topics: [
      { slug:"ixana-wir", title:"人体が通信路になる。IxanaのWi-RはBluetoothを置き換えるのか。", kicker:"Ixana / Wi-R / 5Mbit/s shipping / 20Mbit/s sampling", format:"PRODUCT", status:"published", href:"/research/gadgets/ixana-wir" },
      { slug:"mudra-link", title:"指を動かす前の信号を、手首で読む。Mudra Linkはマウスの次になるか。", kicker:"Wearable Devices / Mudra Link / EMG input", format:"PRODUCT", status:"published", href:"/research/gadgets/mudra-link" },
      { slug:"ipolish-digital-nails", title:"爪に電池はない。iPolishの『300色ネイル』は何で動くのか。", kicker:"iPolish / Magic Wand / Color-changing nails", format:"PRODUCT", status:"published", href:"/research/gadgets/ipolish-digital-nails" },
      { slug:"ai-glasses", title:"AI Glassesは、スマホの次の画面になれるか。", kicker:"Meta / Google / Android XR", format:"MARKET MAP", status:"published", href:"/research/gadgets/ai-glasses" },
      { slug:"personal-ai-device", title:"AI専用端末は、スマホアプリに勝てるのか。", kicker:"rabbit r1 / Humane / AI-native devices", format:"COMPARE", status:"published", href:"/research/gadgets/personal-ai-device" },
      { slug:"wearable-memory", title:"『全部覚えている』ウェアラブルは便利か、怖いか。", kicker:"Memory / Capture / Search", format:"REPORT", status:"published", href:"/research/gadgets/wearable-memory" },
      { slug:"future-input", title:"キーボードの次の入力装置は何になる。", kicker:"Voice / Gesture / Vision / Neural input", format:"REPORT", status:"published", href:"/research/gadgets/future-input" },
      { slug:"weird-gadgets", title:"なんだこれwww — 海外の変態ガジェットを拾う。", kicker:"The weird edge of product innovation", format:"WTF / GADGET", status:"published", href:"/research/gadgets/weird-gadgets" },
      { slug:"silent-speech", title:"人間は、いつまでAIに話しかけるのか。", kicker:"Engram / Silenzio / SilentWear / GMO Pepabo + YNU", format:"REPORT", status:"published", href:"/research/gadgets/silent-speech" },
      { slug:"embodied-ai-reception", title:"受付に立つのは、人間でも画面でもない。", kicker:"Proto Hologram / AI Avatar / Spatial Computing", format:"REPORT", status:"published", href:"/research/gadgets/embodied-ai-reception" },
      { slug:"ultrasound-bci", title:"脳に穴を開けない。超音波BCIが走り出した。", kicker:"Bridge Neurotech / Butterfly / Merge Labs / Neuralink", format:"REPORT", status:"published", href:"/research/gadgets/ultrasound-bci" },
      { slug:"bridge-ultrasound-bci", title:"脳にチップを埋めない。BCIの本命争いに「超音波」が入ってきた。", kicker:"Bridge Neurotech / Butterfly / Merge Labs / Neuralink", format:"REPORT", status:"published", href:"/research/gadgets/bridge-ultrasound-bci" },
    ],
  },
];

export const researchCategoryMap = Object.fromEntries(
  researchCategories.map(category => [category.slug, category])
) as Record<string, ResearchCategory>;

// Research catalog is audited on push.

// Headline wrapping audit trigger.
