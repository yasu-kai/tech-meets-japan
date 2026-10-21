export type EvidenceStatus = "verified" | "reported" | "unverified" | "not_applicable";
export type Maturity = "research" | "prototype" | "pilot" | "commercial" | "unknown";
export type FundingStage = "pre_seed" | "seed" | "series_a" | "other" | "unknown";
export type ContactStage = "not_contacted" | "outreach_sent" | "replied" | "discovery" | "opportunity" | "closed";
export type EditorialStatus = "research" | "draft" | "audit" | "published";

export type Evidence = {
  status: EvidenceStatus;
  sourceUrl?: string;
  checkedAt?: string; // YYYY-MM-DD
  note?: string;
};

export type EarlyStageCompany = {
  id: string;
  company: string;
  country: string;
  website: string;
  product: string;
  summary: string;
  sector: string[];
  fundingStage: FundingStage;
  fundingAmount?: { value: number; currency: string; asOf: string; evidence: Evidence };
  maturity: Maturity;
  japanPresence: { value: "present" | "absent" | "unknown"; evidence: Evidence };
  japanPartnershipInterest: { value: "confirmed" | "unconfirmed" | "not_interested"; evidence: Evidence };
  potentialJapanUseCases: string[];
  partnerHypotheses: string[];
  officialCollaborationCall?: { description: string; evidence: Evidence };
  evidence: Evidence[];
  editorialStatus: EditorialStatus;
  publishedPath?: string;
};

// Editorial content is public. Outreach and commercial pipeline must be kept in
// an access-controlled CRM rather than published in the Next.js client bundle.
export type PrivateOutreachRecord = {
  companyId: string;
  contactStage: ContactStage;
  contactRole?: string;
  lastContactAt?: string;
  nextAction?: string;
  commercialInterest?: "yes" | "no" | "unknown";
  notes?: string;
};


// Verified-source research candidates. Not public articles until editorial audit passes.
// Public research registry; records are NOT automatically published as Early-Stage articles.
// Commercial products should be considered for Products/Research instead of Early-Stage stories.
export const earlyStageCompanies: EarlyStageCompany[] = [
  {
    "id": "bridge-neurotech",
    "company": "Bridge Neurotech",
    "country": "United States",
    "website": "https://www.bridgeneurotech.com/",
    "product": "超音波による非侵襲型BCI",
    "summary": "超音波で脳活動を計測・解読する非侵襲型BCIを研究。最初の人対象研究で参加者を募集している。",
    "sector": [
      "Neurotechnology",
      "BCI",
      "Health"
    ],
    "fundingStage": "unknown",
    "fundingAmount": {
      "value": 13500000,
      "currency": "USD",
      "asOf": "2026-10",
      "evidence": {
        "status": "verified",
        "sourceUrl": "https://www.bridgeneurotech.com/letter",
        "checkedAt": "2026-10-21",
        "note": "創業者による公表。独立監査済みの資金受領証明ではない。"
      }
    },
    "maturity": "research",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21"
      }
    },
    "potentialJapanUseCases": [
      "研究機関での非侵襲脳活動計測",
      "医療・福祉向け入力技術の長期研究"
    ],
    "partnerHypotheses": [
      "大学・脳神経研究機関",
      "医療機器メーカー"
    ],
    "evidence": [
      {
        "status": "verified",
        "sourceUrl": "https://www.bridgeneurotech.com/letter",
        "checkedAt": "2026-10-21",
        "note": "資金調達・研究課題・初期研究について創業者説明"
      },
      {
        "status": "verified",
        "sourceUrl": "https://ir.butterflynetwork.com/News/press-releases/news-details/2026/Bridge-Neurotech-and-Butterfly-Network-Announce-Partnership-to-Develop-Fully-Non-Invasive-Brain-Computer-Interface/",
        "checkedAt": "2026-10-21",
        "note": "Butterfly Networkとの研究開発契約"
      }
    ],
    "editorialStatus": "published",
    "publishedPath": "/research/gadgets/bridge-ultrasound-bci"
  },
  {
    "id": "chargebotic",
    "company": "Chargebotic",
    "country": "United States",
    "website": "https://chargebotic.com/",
    "product": "Kestrel / Magline",
    "summary": "送電線周囲の磁界から非接触で電力を得るフィールド電源を開発。2026年8月に18Wの給電実証を公表。",
    "sector": [
      "Energy",
      "Hardware",
      "Robotics"
    ],
    "fundingStage": "unknown",
    "maturity": "pilot",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21"
      }
    },
    "potentialJapanUseCases": [
      "遠隔地のセンサー電源",
      "インフラ点検・災害時の電源研究"
    ],
    "partnerHypotheses": [
      "電力設備事業者",
      "インフラ機器メーカー"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://chargebotic.com/",
        "checkedAt": "2026-10-21",
        "note": "18Wは企業が公表したフィールド実証値。運用中の送電網での継続給電は未検証と明記。"
      }
    ],
    "editorialStatus": "published",
    "publishedPath": "/research/materials-energy/chargebotic-kestrel"
  },
  {
    "id": "ixana",
    "company": "Ixana",
    "country": "United States",
    "website": "https://ixana.ai/",
    "product": "Wi-R 近接電界通信半導体",
    "summary": "人体や機器の近傍で局所電界を利用して通信するWi-R半導体を提供。5Mbit/s製品は顧客統合向け出荷段階、20Mbit/s品はサンプリング段階と説明。",
    "sector": [
      "Semiconductors",
      "Wearables",
      "Physical AI"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21"
      }
    },
    "potentialJapanUseCases": [
      "スマートグラスと携帯計算機の接続",
      "ウェアラブル生体センサー",
      "産業ロボット内の局所通信"
    ],
    "partnerHypotheses": [
      "ウェアラブルメーカー",
      "半導体・産業機器メーカー"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://ixana.ai/",
        "checkedAt": "2026-10-21",
        "note": "通信速度・省電力値・出荷状況はメーカーの公表。第三者ベンチマーク未確認。"
      },
      {
        "status": "verified",
        "sourceUrl": "https://ixana.ai/news-events/news",
        "checkedAt": "2026-10-21",
        "note": "企業の発表履歴と製品マイルストーン"
      }
    ],
    "editorialStatus": "published",
    "publishedPath": "/research/gadgets/ixana-wir"
  },
  {
    "id": "nori-robotics",
    "company": "Nori Robotics",
    "country": "United States",
    "website": "https://www.norirobotics.com/",
    "product": "NORI A3 双腕家庭用ロボット",
    "summary": "家庭用の卓上・移動型双腕ロボット。予約・2026年秋出荷予定を案内しているが一般利用環境での性能実証は未確認。",
    "sector": [
      "Robotics",
      "Home Devices"
    ],
    "fundingStage": "unknown",
    "maturity": "prototype",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "家庭内の作業補助",
      "研究・開発用ロボットプラットフォーム"
    ],
    "partnerHypotheses": [
      "生活支援ロボットメーカー",
      "大学研究室"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://www.norirobotics.com/",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。出荷日と機能はメーカー告知。実出荷と自律作業性能は要確認。"
      }
    ],
    "editorialStatus": "published",
    "publishedPath": "/research/robotics/nori-a3"
  },
  {
    "id": "savor",
    "company": "Savor",
    "country": "United States",
    "website": "https://www.savor.it/",
    "product": "ガス由来の炭素から製造する食用油脂",
    "summary": "炭素源から脂肪酸・油脂を製造し、農地・動植物原料に依存しない食品原料を目指す。LCAの第三者監査を企業が説明。",
    "sector": [
      "Foodtech",
      "Materials",
      "Climate"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "食品メーカーの代替油脂",
      "化粧品・機能性油脂原料"
    ],
    "partnerHypotheses": [
      "食品素材メーカー",
      "食品加工メーカー"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://www.savor.it/mission",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。環境影響値は別途LCA原文・境界条件の確認が必要。"
      }
    ],
    "editorialStatus": "published",
    "publishedPath": "/research/materials-energy/savor-carbon-fats"
  },
  {
    "id": "ipolish",
    "company": "iPolish",
    "country": "United States",
    "website": "https://ipolish.fashion/ja/",
    "product": "スマホアプリで色を変更できるプレスオンネイル",
    "summary": "専用ワンドとアプリでネイルの色を切り替える製品を案内。予約状況や出荷状況は公表時点に依存する。",
    "sector": [
      "Beauty",
      "Wearables",
      "Consumer Hardware"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "ネイルサロン",
      "美容小売・ファッション"
    ],
    "partnerHypotheses": [
      "美容商社",
      "サロンチェーン"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://ipolish.fashion/ja/",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。サイト上の予約・発送予定は販売履行の証拠とは区別。"
      }
    ],
    "editorialStatus": "published",
    "publishedPath": "/research/gadgets/ipolish-digital-nails"
  },
  {
    "id": "lollipop-star",
    "company": "Lollipop Star",
    "country": "United States",
    "website": "https://www.lollipopstar.com/",
    "product": "骨伝導で音楽が聴こえるキャンディ",
    "summary": "キャンディを介した骨伝導リスニング体験を提供する音楽ロリポップ。商品販売ページを確認。",
    "sector": [
      "Consumer Hardware",
      "Foodtech",
      "Entertainment"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "ライブ・イベント物販",
      "IPコラボ・ギフト"
    ],
    "partnerHypotheses": [
      "菓子輸入販売会社",
      "イベント運営・ライセンス企業"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://www.lollipopstar.com/pages/about-us",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。日本国内の食品規制・輸入実績は未確認。"
      }
    ],
    "editorialStatus": "research"
  },
  {
    "id": "wearable-devices-mudra",
    "company": "Wearable Devices",
    "country": "Israel",
    "website": "https://mudra-band.com/",
    "product": "Mudra Band / Mudra Link",
    "summary": "手首での神経・筋活動に伴う信号から手指ジェスチャーを認識し、機器操作に変換するウェアラブル。一般消費者向け製品販売を確認。",
    "sector": [
      "Wearables",
      "Human Interfaces",
      "Semiconductors"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "XR・スマートグラス操作",
      "アクセシビリティ研究"
    ],
    "partnerHypotheses": [
      "XR機器メーカー",
      "福祉機器・UI研究機関"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://mudra-band.com/products/mudra-link",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。脳波そのものを直接読む装置とは区別。実機性能の独立検証は未確認。"
      }
    ],
    "editorialStatus": "published",
    "publishedPath": "/research/gadgets/mudra-link"
  },
  {
    "id": "mindfort",
    "company": "MindFort",
    "country": "United States",
    "website": "https://www.mindfort.ai/",
    "product": "自律ペネトレーションテスト・修正支援AI",
    "summary": "脆弱性の探索・実証・修正PR・再検証を支援するAIセキュリティ製品を案内。提供済み製品として評価。",
    "sector": [
      "AI Security",
      "Developer Tools"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "アプリケーションセキュリティ",
      "継続的脆弱性検証"
    ],
    "partnerHypotheses": [
      "セキュリティ販売パートナー",
      "SIer"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://www.mindfort.ai/product",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。自動修正の適用範囲と実運用上の承認境界は要検証。"
      }
    ],
    "editorialStatus": "research"
  },
  {
    "id": "terra-security",
    "company": "Terra Security",
    "country": "United States",
    "website": "https://www.terra.security/",
    "product": "Terra Platform 継続型AIペンテスト",
    "summary": "Web・ネットワーク・AIシステムを対象にAIエージェントと人間の監督を組み合わせる攻撃検証プラットフォーム。",
    "sector": [
      "AI Security",
      "Enterprise Software"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "継続的攻撃面検証",
      "AIシステムのレッドチーミング"
    ],
    "partnerHypotheses": [
      "国内セキュリティ事業者",
      "大手SIer"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://www.terra.security/terra-platform",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。競合比較や性能数値はメーカー独自主張から独立検証する必要。"
      }
    ],
    "editorialStatus": "research"
  },
  {
    "id": "duckbill",
    "company": "Duckbill",
    "country": "United States",
    "website": "https://getduckbill.com/",
    "product": "AIと人間の協働による実世界タスク代行",
    "summary": "調査・準備をAIが担い、電話・交渉・追跡など現実世界の手続きを人間オペレーターが完了させるサービス。",
    "sector": [
      "AI Services",
      "Consumer Services"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "手続代行サービス",
      "コンシェルジュAPI"
    ],
    "partnerHypotheses": [
      "生活サービスプラットフォーム",
      "コンシェルジュ運営企業"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://getduckbill.com/how-it-works",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。完全自律AIとは扱わない。サービス地域と個人情報取扱いは要確認。"
      }
    ],
    "editorialStatus": "research"
  },
  {
    "id": "vizcom",
    "company": "Vizcom",
    "country": "United States",
    "website": "https://www.vizcom.ai/",
    "product": "スケッチから製品イメージ・3D化するデザインAI",
    "summary": "工業デザインの初期スケッチからレンダリングや3Dモデルを生成・反復する設計支援ツール。",
    "sector": [
      "AI Creative",
      "Design Software"
    ],
    "fundingStage": "unknown",
    "maturity": "commercial",
    "japanPresence": {
      "value": "unknown",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本市場における現地体制の確認未了"
      }
    },
    "japanPartnershipInterest": {
      "value": "unconfirmed",
      "evidence": {
        "status": "unverified",
        "checkedAt": "2026-10-21",
        "note": "日本企業との提携意向を確認していない"
      }
    },
    "potentialJapanUseCases": [
      "工業デザイン初期検討",
      "製品企画・試作の可視化"
    ],
    "partnerHypotheses": [
      "工業デザイン会社",
      "製造業の企画部門"
    ],
    "evidence": [
      {
        "status": "reported",
        "sourceUrl": "https://www.vizcom.ai/overview",
        "checkedAt": "2026-10-21",
        "note": "会社公開情報による説明。商用製品。調達ステージを根拠なくEarly-Stage判定しない。"
      }
    ],
    "editorialStatus": "research"
  }
];
