/** TECH MEETS JAPAN — cross-technology editorial evaluation v1.
 * This is an editorial framework, not an ISO certification or a numerical ranking.
 * Do not equate lack of evidence with poor performance.
 */
export type EvidenceLevel = "primary" | "independent" | "company_claim" | "hypothesis" | "unknown";
export type EvaluationState = "assessed" | "not_assessed" | "not_applicable";
export type TechnologyDomain = "ai_software" | "hardware_semiconductor" | "biomedical_neurotech" | "energy_materials" | "robotics" | "other";

export type EvaluationFinding = {
  state: EvaluationState;
  observation?: string;
  evidenceLevel?: EvidenceLevel;
  sourceUrls?: string[];
  checkedAt?: string; // YYYY-MM-DD
  limitations?: string[];
};
export type EvaluationDimension = {
  id: string;
  label: string;
  question: string;
};
export const COMMON_DIMENSIONS: readonly EvaluationDimension[] = [
  { id: "novelty", label: "技術の独自性", question: "従来技術でできなかった何ができるか。" },
  { id: "use_case", label: "用途・提供価値", question: "誰の、どの課題を、どんな場面で解決するか。" },
  { id: "maturity", label: "技術成熟度", question: "研究・試作・実証・商用化のどこまで確認されたか。" },
  { id: "practicality", label: "実用性", question: "性能・制約・安全性・再現性をどこまで確認できるか。" },
  { id: "adoption", label: "導入負荷", question: "費用・設備・教育・運用・切替に何が必要か。" },
  { id: "japan_fit", label: "日本市場適合性", question: "需要・規制・言語・販売・保守体制はどうか。" },
  { id: "competition", label: "競争優位性", question: "競合・代替技術と比べた優位と弱点は何か。" },
  { id: "verifiability", label: "検証可能性", question: "誰がいつ何を確認したか。未確認事項は何か。" },
] as const;
export const DOMAIN_DIMENSIONS: Record<TechnologyDomain, readonly EvaluationDimension[]> = {
  ai_software: [
    { id: "autonomy", label: "自律実行範囲", question: "認識から実行・再検証までどこを担い、人は何を判断するか。" },
    { id: "accuracy", label: "精度・評価", question: "再現可能な評価指標と失敗時の扱いは何か。" },
    { id: "permissions", label: "権限・監査", question: "実行権限、承認、ログ、停止手段はどう設計されているか。" },
  ],
  hardware_semiconductor: [
    { id: "performance", label: "性能・消費電力", question: "測定条件付きでどの性能が得られるか。" },
    { id: "durability", label: "耐久性・形状", question: "実環境での耐久性とサイズ制約は何か。" },
    { id: "manufacturability", label: "量産性", question: "歩留まり・供給・製造コストの課題は何か。" },
  ],
  biomedical_neurotech: [
    { id: "safety", label: "安全性・侵襲性", question: "人体への影響とリスクは何か。" },
    { id: "reproducibility", label: "再現性・検証", question: "研究条件・対象者数・対照群・追試状況は何か。" },
    { id: "regulatory", label: "臨床・規制", question: "医療用途の承認・適用範囲はどこまでか。" },
  ],
  energy_materials: [
    { id: "efficiency", label: "効率・回収率", question: "投入エネルギーと回収量をどう測定したか。" },
    { id: "lifecycle", label: "寿命・環境負荷", question: "製造から廃棄までの負荷と寿命はどうか。" },
    { id: "scale_cost", label: "スケール時の経済性", question: "量産・運用・回収時のコストは成立するか。" },
  ],
  robotics: [
    { id: "task_scope", label: "対応作業範囲", question: "実環境で何をどこまで行えるか。" },
    { id: "safety", label: "安全・復旧", question: "故障・例外時にどう停止・復旧するか。" },
    { id: "integration", label: "現場導入", question: "既存設備・保守・人との分担をどう設計するか。" },
  ],
  other: [],
};
export type TechnologyEvaluation = {
  subjectId: string;
  domain: TechnologyDomain;
  technical: Record<string, EvaluationFinding>;
  business: Record<string, EvaluationFinding>;
  editorialStatus: "research" | "draft" | "audit" | "published";
  editorialNotes?: string[];
};
export const BUSINESS_DIMENSIONS: readonly EvaluationDimension[] = [
  { id: "buyer", label: "顧客・購買主体", question: "誰が費用を負担し、何を購入するか。" },
  { id: "unit_economics", label: "事業採算", question: "価格・導入・運用・回収コストはどうか。" },
  { id: "go_to_market", label: "販売・導入体制", question: "販売経路・支援・提携は確認できるか。" },
  { id: "japan_entry", label: "日本展開", question: "日本市場への意思・体制は確認されているか。" },
] as const;
/** A missing source stays unknown; no automatic score or ranking is inferred. */
export function isEvidenceBacked(finding: EvaluationFinding): boolean {
  return finding.state === "assessed" && Boolean(finding.sourceUrls?.length) && Boolean(finding.checkedAt);
}
