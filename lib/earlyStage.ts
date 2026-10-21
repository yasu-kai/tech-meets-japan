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
    "editorialStatus": "research"
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
    "editorialStatus": "research"
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
    "editorialStatus": "research"
  }
];
