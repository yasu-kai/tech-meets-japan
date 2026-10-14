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

export const earlyStageCompanies: EarlyStageCompany[] = [];
