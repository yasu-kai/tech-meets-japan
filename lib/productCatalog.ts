
type BaseProduct = {
  slug:string; name:string; provider:string; companySlug:string; country:string; category:string;
  tagline:string; description:string; fitScore:number; japanStatus:string;
  entryStage:"Watching"|"Entering"|"Scaling"|"Established";
  useCases:string[]; targetUsers:string[]; alternatives:string[]; tags:string[]; website:string;
  [key:string]:any;
};

type Profile = {
  source:string;
  capabilities:[string,string,string,string,string,string][];
  useCases:[string,string,string,string,string,string][];
  differentiators:[string,string,string,string[]][];
  limitations:string[];
  pricing:{plans:{name:string;monthly:string;notes:string}[];enterprise:string;api:string;tco:string};
  onboarding:{level:1|2|3|4|5;label:string;time:string;note:string};
  replacement:{level:1|2|3|4|5;label:string;note:string};
  japanese:{ui:string;input:string;output:string;docs:string;support:string;note:string};
  support:{level:string;details:string[]};
  integrations:string[];
  enterprise:string[];
  automation:{domain:string;current:0|1|2|3|4|5;target:0|1|2|3|4|5;decision:string;execution:string;loop:"None"|"Partial"|"Strong";future:string;assumption:string};
  bestFor:string[];
  notFor:string[];
  verdict:"今すぐ試す"|"PoC推奨"|"様子見"|"日本ではまだ早い";
};

const cycleFor=(a:Profile["automation"])=>{
  const roles:(0|1|2|3|4|5)[]=[1,2,3,4,5];
  const steps=["認識・入力","分析・判断材料","提案・計画","実行","検証・改善"];
  return steps.map((step,i)=>{
    const threshold=roles[i];
    const aiRole=a.current>=threshold ? (a.current>=4 && i<3?"Autonomous":i<2?"Primary":"Primary") : a.current===threshold-1?"Assist":"None";
    return {step,aiRole,humanRole:a.current>=4?"例外・承認・Policy":"判断・承認・例外処理",note:i===3?a.execution:i===4?(a.loop==="Strong"?"結果まで観測して反復":"結果確認は一部人間が担う"):"製品の自動化範囲に応じて分担"};
  });
};

const enrich=(p:BaseProduct,cfg:Profile)=>{
  const useCaseDetails=cfg.useCases.map((u,i)=>({
    title:u[0],situation:u[1],input:u[2],output:u[3],user:u[4],replaces:u[5],
    kpi:["処理時間","人手工数","品質/成功率","1件あたりコスト"],
    whyThis:[cfg.differentiators[0]?.[1]||p.tagline,cfg.capabilities[i%cfg.capabilities.length]?.[5]||p.description],
    notFor:cfg.limitations.slice(0,2)
  }));
  const comparisonDetails=p.alternatives.slice(0,4).map((name,i)=>({
    name,
    bestWhen:["既存環境との親和性や特定機能を優先する場合","導入条件・価格・運用要件が"+p.name+"より合う場合"],
    runwayWinsWhen:[cfg.differentiators[i%cfg.differentiators.length]?.[2]||p.tagline,"複数工程を一つのWorkflowで扱いたい場合"],
    otherWinsWhen:["その代替製品の既存導入基盤をすでに持つ場合","単一機能だけを最小コストで使いたい場合"],
    switchingCost:"データ、Workflow、権限設定、現場教育の移行量で変動。PoC段階では比較的低い。",
    pricingNote:"公開価格とEnterprise見積を比較。従量課金の場合は本番利用量でTCOを試算する。",
    japaneseNote:cfg.japanese.note,
    enterpriseNote:"SSO、監査、データ管理、契約条件はEnterprise導入前に確認する。"
  }));

  const fitProfiles=p.targetUsers.slice(0,4).map((label,i)=>({
    label,
    pain:cfg.useCases[i%cfg.useCases.length]?.[1]||p.description,
    signals:["対象業務が週次以上で発生している","担当者の手作業・待ち時間がボトルネック","既存ツール間の転記や調整が多い","PoC効果を時間・件数・品質で測定できる"],
    exampleTasks:[cfg.useCases[i%cfg.useCases.length]?.[0]||p.useCases[0],cfg.capabilities[i%cfg.capabilities.length]?.[0]||p.useCases[1],p.useCases[(i+1)%p.useCases.length]||p.useCases[0]],
    whyThisProduct:[cfg.differentiators[0]?.[1]||p.tagline,cfg.differentiators[1]?.[1]||cfg.capabilities[0][5]],
    comparedWhy:[p.alternatives[0]?p.alternatives[0]+"より、"+cfg.differentiators[0]?.[2]:"Workflow全体で比較する",p.alternatives[1]?p.alternatives[1]+"とは導入範囲と運用負荷を比較する":"単機能ツールとはTCOで比較する"],
    notFitIf:cfg.limitations.slice(0,2)
  }));

  return {
    ...p,
    useCaseDetails,
    comparisonDetails,
    decision:{
      differentiators:cfg.differentiators.map((d,i)=>({label:d[0],level:i===0?"固有":"特に強い",what:d[1],whyItMatters:d[2],comparedWith:d[3],evidence:cfg.source})),
      capabilities:cfg.capabilities.map((x,i)=>({
        label:x[0],
        detail:x[1],
        level:"特に強い",
        input:x[2],
        output:x[3],
        replaces:x[4],
        whyItMatters:x[5],
        examples:[
          cfg.useCases[i%cfg.useCases.length]?.[0] || p.useCases[i%p.useCases.length] || x[0],
          cfg.useCases[(i+1)%cfg.useCases.length]?.[0] || p.useCases[(i+1)%p.useCases.length] || x[0]
        ],
        confidence:"High"
      })),
      limitations:cfg.limitations,
      pricing:{
        publicPlans:cfg.pricing.plans.map(x=>({name:x.name,monthly:x.monthly,notes:x.notes})),
        enterprise:cfg.pricing.enterprise,api:cfg.pricing.api,tcoNote:cfg.pricing.tco,
        decisionGuide:[{label:"小さく試す",value:"代表業務1つでPoCし、現行手段との時間・品質・コスト差を見る。"},{label:"本番化",value:"権限、データ、例外処理、運用責任者まで決めてから範囲を広げる。"}],
        hiddenCosts:["社内レビュー・ガバナンス設計","既存データ/システムとの接続","利用量増加時の従量費または運用費"],
        poCMeasure:["現行比の処理時間","人手介入回数","成功率/品質","1件あたり総コスト"]
      },
      onboarding:{
        level:cfg.onboarding.level,label:cfg.onboarding.label,timeToValue:cfg.onboarding.time,costNote:cfg.onboarding.note,
        tasks:["対象業務と成功条件を1つに絞る","権限・データ・連携範囲を決める","実データでPoCし、人手との比較を取る","例外時の人間への戻し方を決める"],
        prerequisites:["業務オーナーを決める","評価用の実データ/代表ケースを準備","セキュリティ・法務上の利用条件を確認"],
        recommendedFlow:[
          {phase:"01 / TEST",timing:"1〜2週",actions:["代表ケースで機能・品質を確認","人手との比較値を取る"],exit:"期待品質と基本KPIを満たす"},
          {phase:"02 / PILOT",timing:"2〜6週",actions:["限定チームで実運用","例外・権限・監査を確認"],exit:"運用責任と障害時対応を定義"},
          {phase:"03 / SCALE",timing:"以降",actions:["対象業務・利用者を拡大","利用量とTCOを継続監視"],exit:"本番KPIが継続達成"}
        ],
        owners:[{role:"Business owner",responsibility:"KPI・利用範囲・最終判断"},{role:"IT / Security",responsibility:"権限・データ・連携・監査"}],
        successCriteria:["現行手段より時間またはコストが改善","品質が許容基準を満たす","例外時に安全に人へ戻せる"]
      },
      replacement:{
        level:cfg.replacement.level,label:cfg.replacement.label,costNote:cfg.replacement.note,
        migrationRisks:["既存Workflowとの二重運用","過去データや設定の移行","現場の運用ルール変更"],
        coexistence:["まず追加導入で既存手段と並走","成功した工程だけ段階的に置換"],
        hardToReplace:["独自データやWorkflowを深く蓄積した後","複数部門が同一基盤へ依存した後"],
        easyToReplace:["単一用途のPoC段階","標準形式でデータをExportできる場合"],
        decisionRule:"最初から全面置換せず、1工程の追加導入→KPI確認→置換範囲拡大の順が安全。"
      },
      japanese:{
        ...cfg.japanese,
        practicalUse:[
          {scene:"日本語での日常利用",status:cfg.japanese.input,implication:"実業務の入力品質・固有名詞・敬語をPoCで確認。"},
          {scene:"管理者運用",status:cfg.japanese.ui,implication:"UIが英語中心でも、管理者限定なら運用可能な場合がある。"},
          {scene:"問い合わせ",status:cfg.japanese.support,implication:"障害・契約・請求を日本語で扱えるかを事前確認。"}
        ],
        procurementChecks:["日本語サポート範囲","請求・契約主体","データ保存地域","SLA / 障害時窓口"]
      },
      support:{
        level:cfg.support.level,details:cfg.support.details,
        whoGetsWhat:[{tier:"Self-serve",support:"Docs / Help center中心。契約プランにより範囲が異なる。"},{tier:"Enterprise",support:"導入支援・優先サポート・個別契約条件を確認。"}],
        operationalRisks:["製品更新でUI/仕様が変わる可能性","日本時間帯の即時対応可否は契約前確認"],
        preContractQuestions:["日本語での障害対応は可能か","SLAとEscalation pathは何か","利用量急増時の制限はあるか"]
      },
      integrations:cfg.integrations,
      enterpriseReadiness:[
        {item:"SSO / Identity",status:cfg.enterprise.includes("SSO")?"対応/提供":"要確認",note:"Enterprise契約で確認",implication:"全社展開時のアカウント統制に影響",verify:cfg.source},
        {item:"Audit / Admin",status:cfg.enterprise.includes("Audit")?"対応/提供":"要確認",note:"管理・監査機能",implication:"誰が何をしたか追えるか",verify:cfg.source},
        {item:"Security / Compliance",status:cfg.enterprise.includes("Security")?"公開情報あり":"要確認",note:"認証・データ保護",implication:"調達審査に影響",verify:cfg.source},
        {item:"Data controls",status:"要契約確認",note:"保存・学習利用・削除条件",implication:"機密データ利用前に確認必須",verify:cfg.source},
        {item:"Enterprise support",status:cfg.support.level,note:"導入・障害時支援",implication:"本番運用時の復旧速度に影響",verify:cfg.source}
      ],
      contract:[{item:"公開価格",value:cfg.pricing.plans.length?"あり/一部あり":"非公開中心"},{item:"Enterprise",value:cfg.pricing.enterprise},{item:"契約前確認",value:"SLA / Data policy / Support / Billing entity"}],
      trial:{
        available:cfg.pricing.plans.some(x=>/free|無料|trial/i.test(x.name+" "+x.monthly))?"あり":"Demo / 個別確認",
        detail:"代表業務1つを実データで試し、現行手段との時間・品質・総コスト差を測る。",
        testPlan:[{test:"代表タスク",pass:"現行手段より時間短縮し、品質基準を満たす"},{test:"例外ケース",pass:"失敗時に安全に人間へ戻せる"},{test:"運用",pass:"管理・権限・監査が社内要件を満たす"}],
        doNotJudgeBy:["デモの見栄えだけ","単発の最高品質だけ","初月のライセンス価格だけ"]
      },
      lockIn:{
        level:Math.min(5,Math.max(1,cfg.replacement.level)),label:cfg.replacement.level>=4?"高め":cfg.replacement.level>=3?"中程度":"低〜中",
        reasons:["独自Workflow・設定の蓄積","外部システムとの連携","利用データ・履歴の蓄積"],
        lockInGrowsWhen:["複数部署へ展開","独自自動化を深く組む","過去データが意思決定に使われ始める"],
        exitPlan:["標準形式でデータExport可否を確認","重要Workflowを文書化","代替製品で再現できる範囲を定期確認"]
      },
      automationDepth:{
        domain:cfg.automation.domain,cycle:cycleFor(cfg.automation),
        currentLevel:cfg.automation.current,
        currentLabel:["Human Only","AI Assistant","AI Analyst","AI Agent","Human-on-the-loop","Autonomous Closed Loop"][cfg.automation.current],
        targetLevel:cfg.automation.target,
        targetLabel:["Human Only","AI Assistant","AI Analyst","AI Agent","Human-on-the-loop","Autonomous Closed Loop"][cfg.automation.target],
        humanRemainingRole:["目的・Policyを決める","高リスク判断と例外処理","結果の最終責任を持つ"],
        decisionBoundary:cfg.automation.decision,executionBoundary:cfg.automation.execution,
        closedLoop:{status:cfg.automation.loop,detail:cfg.automation.loop==="Strong"?"実行結果を観測し、次の行動へ反映できる範囲が広い。":"一部工程は自動で反復するが、重要判断や実行は人間が残る。"},
        disappearingAssumption:cfg.automation.assumption,futureState:cfg.automation.future,
        editorialTake:p.name+"を見るときは機能数より、人間が業務サイクルのどこから外れるかを見る。"
      },
      fitProfiles,
      bestFor:cfg.bestFor,notFor:cfg.notFor,
      verdict:{
        status:cfg.verdict,summary:cfg.bestFor[0]+"のような条件なら検討価値が高い。全面導入より代表業務でPoCし、現行手段とのKPI差を確認してから広げたい。",
        nextActions:[{when:"NOW",action:"代表業務を1つ選ぶ",why:"評価軸を曖昧にしないため"},{when:"PoC",action:"時間・品質・コストを現行比で測る",why:"デモ評価から業務評価へ移すため"},{when:"SCALE",action:"権限・例外・SLAを固める",why:"本番運用リスクを抑えるため"}],
        goSignals:["PoCで明確な時間/コスト改善","現場利用者が継続利用","Enterprise要件を満たす"],
        stopSignals:["例外処理が多すぎる","品質確認の人手が減らない","総コストが現行手段を上回る"]
      },
      evidence:[
        {item:"製品機能",type:"Official",confidence:"High",source:cfg.source},
        {item:"日本適性",type:"Estimated",confidence:"Medium",source:p.japanStatus},
        {item:"導入負荷/TCO",type:"Estimated",confidence:"Medium",source:"公開仕様と想定Workflowから編集部推定"}
      ]
    }
  };
};

export const additionalProducts:BaseProduct[]=[
  {slug:"xbow-autonomous-pentest",name:"XBOW Autonomous Pentesting",provider:"XBOW",companySlug:"xbow",country:"United States",category:"AI Security",tagline:"人間のPentesterがやっていた攻撃探索を、AIが継続実行する。",description:"自律AIがWebアプリや外部Attack surfaceを探索し、脆弱性を発見・実証・再検証するOffensive Securityプラットフォーム。",fitScore:91,japanStatus:"Global / Japan opportunity",entryStage:"Watching",useCases:["自律Pentest","継続的脆弱性検証","Attack surface validation"],targetUsers:["大企業CISO","AppSec","Security Engineering"],alternatives:["Pentera","Horizon3 NodeZero","Synack"],tags:["Offensive AI","Pentest","Autonomy"],website:"https://xbow.com/"},
  {slug:"pentera-validation",name:"Pentera Automated Security Validation",provider:"Pentera",companySlug:"pentera",country:"Israel",category:"AI Security",tagline:"攻撃者の視点を、継続的な検証プロセスにする。",description:"企業ネットワーク・クラウド・外部Attack surfaceを自動攻撃し、実際に突破可能な経路を継続検証するSecurity Validationプラットフォーム。",fitScore:90,japanStatus:"Enterprise availability",entryStage:"Entering",useCases:["Security validation","Attack path検証","再検証"],targetUsers:["CISO","SOC","Vulnerability Management"],alternatives:["XBOW","Horizon3 NodeZero","BreachLock"],tags:["Security Validation","Automation","Exposure"],website:"https://pentera.io/"},
  {slug:"nodezero",name:"Horizon3.ai NodeZero",provider:"Horizon3.ai",companySlug:"horizon3",country:"United States",category:"AI Security",tagline:"本当に侵入できる経路だけを、攻撃して証明する。",description:"自律PentestでCredential・権限・Attack pathを辿り、Critical assetまでの実際の侵入可能性を証明するプラットフォーム。",fitScore:89,japanStatus:"Global / Japan evaluation",entryStage:"Watching",useCases:["Autonomous pentest","Attack path","Cloud validation"],targetUsers:["Security Team","IT Infrastructure","CISO"],alternatives:["Pentera","XBOW","Rapid7"],tags:["Autonomous Pentest","Attack Path","Cloud"],website:"https://www.horizon3.ai/"},
  {slug:"replit-agent",name:"Replit Agent",provider:"Replit",companySlug:"replit",country:"United States",category:"AI Development",tagline:"アイデアから動くアプリまで、会話で作る。",description:"自然言語からアプリ設計・実装・DB・認証・Deployまでを一つの環境で進めるAI開発Agent。",fitScore:92,japanStatus:"Global self-serve",entryStage:"Entering",useCases:["アプリ開発","社内ツール","Prototype"],targetUsers:["事業開発","Startup","Product Team","非エンジニア"],alternatives:["Cursor","Devin","Lovable"],tags:["Coding Agent","App Builder","Deployment"],website:"https://replit.com/products/agent"},
  {slug:"cursor-agent",name:"Cursor Agents",provider:"Cursor",companySlug:"cursor",country:"United States",category:"AI Development",tagline:"IDEの補助から、並列で仕事を任せるAgentへ。",description:"コードベースを理解し、複数ファイル編集、コマンド実行、テスト、Background/Cloud taskまで担うAI Coding環境。",fitScore:94,japanStatus:"Global self-serve",entryStage:"Scaling",useCases:["実装","Bug fix","Refactor","Code review"],targetUsers:["Software Engineer","Tech Lead","Product Engineering"],alternatives:["Claude Code","GitHub Copilot","Replit Agent","Devin"],tags:["Coding Agent","IDE","Cloud Agent"],website:"https://cursor.com/"},
  {slug:"devin",name:"Devin",provider:"Cognition",companySlug:"cognition",country:"United States",category:"AI Development",tagline:"チケット単位の開発を、AI Software Engineerへ。",description:"開発タスクを受け取り、計画・実装・テスト・ブラウザ操作・PR作成まで長時間進めるAI Software Engineer。",fitScore:91,japanStatus:"Global enterprise",entryStage:"Entering",useCases:["Feature implementation","Bug fix","Migration","QA"],targetUsers:["Engineering Team","Platform Team","Startup"],alternatives:["Cursor","Replit Agent","Claude Code"],tags:["AI Engineer","Agent","Software Development"],website:"https://devin.ai/"},
  {slug:"clay-gtm",name:"Clay GTM Platform",provider:"Clay",companySlug:"clay",country:"United States",category:"AI Sales",tagline:"リスト作成から調査・優先順位・接触までを、一つのGTM workflowへ。",description:"多数のデータソース、Claygent、Enrichment、Sequencingを組み合わせてOutbound/ABM業務を自動化するGTMプラットフォーム。",fitScore:91,japanStatus:"Global / Japan use possible",entryStage:"Entering",useCases:["Prospecting","Enrichment","ABM","Outbound"],targetUsers:["Sales Ops","SDR","Growth","RevOps"],alternatives:["Apollo","ZoomInfo","6sense"],tags:["GTM","AI Research","Enrichment"],website:"https://www.clay.com/"},
  {slug:"paradox-olivia",name:"Paradox Olivia",provider:"Paradox",companySlug:"paradox",country:"United States",category:"HR AI",tagline:"応募から面接設定までの待ち時間を、会話AIで消す。",description:"候補者との会話、Screening、Interview scheduling、FAQを自動化する採用向けConversational AI。",fitScore:86,japanStatus:"Global enterprise / localization check",entryStage:"Watching",useCases:["応募受付","Screening","面接日程","Candidate FAQ"],targetUsers:["大量採用企業","Retail HR","Hospitality HR","Recruiting Ops"],alternatives:["Eightfold","HireVue","Workday"],tags:["Recruiting AI","Scheduling","Conversational AI"],website:"https://www.paradox.ai/"},
  {slug:"eightfold-talent",name:"Eightfold Talent Intelligence",provider:"Eightfold AI",companySlug:"eightfold",country:"United States",category:"HR AI",tagline:"履歴書ではなく、Skillと可能性から人材を見る。",description:"Talent acquisition、Internal mobility、Workforce planningをSkill intelligenceで統合するAI人材プラットフォーム。",fitScore:88,japanStatus:"Global enterprise / Japan fit to verify",entryStage:"Watching",useCases:["採用","社内異動","Skill可視化","Workforce planning"],targetUsers:["大企業HR","Talent Acquisition","HR Strategy"],alternatives:["Workday","LinkedIn Talent","Gloat"],tags:["Talent Intelligence","HR AI","Skills"],website:"https://eightfold.ai/"},
  {slug:"harvey-legal-ai",name:"Harvey Legal AI",provider:"Harvey",companySlug:"harvey",country:"United States",category:"Legal AI",tagline:"法律業務の前処理を、AIが案件単位で持つ。",description:"Legal research、契約レビュー、Drafting、案件分析を法律実務向けに統合したProfessional Services AIプラットフォーム。",fitScore:90,japanStatus:"Global enterprise / Japan opportunity",entryStage:"Watching",useCases:["Legal research","契約レビュー","Drafting","Due diligence"],targetUsers:["Law Firm","企業法務","Professional Services"],alternatives:["CoCounsel","Lexis+ AI","Microsoft Copilot"],tags:["Legal AI","Research","Enterprise"],website:"https://www.harvey.ai/"},
  {slug:"figure-helix",name:"Figure Helix",provider:"Figure",companySlug:"figure",country:"United States",category:"Physical AI",tagline:"人型ロボットを、場所ごとの再設計なしに働かせる。",description:"Vision・Language・Actionと全身制御を統合し、Humanoidが未知環境で複数Taskを遂行するためのPhysical AI system。",fitScore:87,japanStatus:"Watching / Japan industrial relevance",entryStage:"Watching",useCases:["工場作業","物流","家庭作業","General manipulation"],targetUsers:["製造業","物流","Robot R&D"],alternatives:["Tesla Optimus","Apptronik","Agility Robotics"],tags:["Humanoid","VLA","Physical AI"],website:"https://www.figure.ai/"},
  {slug:"nvidia-cosmos",name:"NVIDIA Cosmos 3",provider:"NVIDIA",companySlug:"nvidia",country:"United States",category:"Physical AI",tagline:"現実世界を学ぶAIの、SimulationとFoundation Model基盤。",description:"Vision reasoning、World generation、Action generation、Synthetic dataを統合するPhysical AI向けWorld Foundation Modelプラットフォーム。",fitScore:93,japanStatus:"Japanese ecosystem expanding",entryStage:"Scaling",useCases:["Robot training","Simulation","Synthetic data","Vision AI"],targetUsers:["Robotメーカー","自動車","製造R&D","AI Platform Team"],alternatives:["Google DeepMind robotics","World Labs","In-house simulation"],tags:["World Model","Physical AI","Simulation"],website:"https://www.nvidia.com/en-us/ai/cosmos/"},
  {slug:"locus-array",name:"Locus Array",provider:"Locus Robotics",companySlug:"locus",country:"United States",category:"Robotics",tagline:"歩く支援から、Picking工程そのものの自律化へ。",description:"AMR、Robot arm、AI perceptionを組み合わせて倉庫のCase/Item handlingを自律化するRobotic fulfillment system。",fitScore:88,japanStatus:"Global / Japan logistics relevance",entryStage:"Entering",useCases:["Picking","Sortation","Fulfillment","Warehouse automation"],targetUsers:["3PL","EC","Retail物流","大規模倉庫"],alternatives:["Exotec","Geek+","Symbotic"],tags:["Warehouse Robotics","Picking","AMR"],website:"https://locusrobotics.com/"},
  {slug:"symbotic-system",name:"Symbotic Warehouse Automation",provider:"Symbotic",companySlug:"symbotic",country:"United States",category:"Robotics",tagline:"倉庫をRobot単体ではなく、施設全体のSystemとして自動化する。",description:"AI、Robotics、高密度Storage、Case handlingを統合し、大規模物流センターの保管・搬送・出荷を自動化する。",fitScore:85,japanStatus:"Watching / Japan fit depends on facility scale",entryStage:"Watching",useCases:["DC automation","Case handling","Storage","Outbound"],targetUsers:["大手小売","卸","3PL","大型DC"],alternatives:["Exotec","AutoStore","Locus"],tags:["Warehouse Automation","AI Robotics","Infrastructure"],website:"https://www.symbotic.com/"},
  {slug:"meta-ai-glasses",name:"Meta AI Glasses",provider:"Meta",companySlug:"meta",country:"United States",category:"AI Devices",tagline:"AIに『同じものを見ている』というContextを渡す。",description:"Camera、Mic、Voice AI、Display/Audioを眼鏡へ統合し、日常の視界をそのままAIへの入力にするWearable AIデバイス。",fitScore:90,japanStatus:"Japan launch",entryStage:"Scaling",useCases:["翻訳","記憶補助","Navigation","Hands-free AI"],targetUsers:["Consumer","Field Worker","Traveler","Accessibility"],alternatives:["Apple ecosystem","Android XR glasses","Smartphone"],tags:["AI Glasses","Wearable","Multimodal"],website:"https://www.meta.com/ai-glasses/"},
  {slug:"plaud-notepin",name:"Plaud NotePin",provider:"Plaud",companySlug:"plaud",country:"United States",category:"AI Devices",tagline:"メモを取る前に、会話を記憶しておく。",description:"装着型Recorderが会話をCaptureし、Transcription、Summary、Action item、検索可能なMemoryへ変えるWearable AI。",fitScore:89,japanStatus:"Available to Japanese users",entryStage:"Scaling",useCases:["会議記録","営業訪問","Interview","Personal memory"],targetUsers:["営業","Consultant","Manager","Researcher"],alternatives:["Otter","Limitless","Smartphone recorder"],tags:["Wearable AI","Memory","Transcription"],website:"https://www.plaud.ai/products/plaud-notepin"},
  {slug:"rabbit-r1",name:"rabbit r1",provider:"rabbit",companySlug:"rabbit",country:"United States",category:"AI Devices",tagline:"アプリを開く代わりに、目的をAIへ渡す。",description:"Voice、Camera、AI Agentを専用Hardware/OSへまとめ、会話から情報取得・生成・Computer interactionへつなぐPersonal AI device。",fitScore:74,japanStatus:"Global device / Japan practicality limited",entryStage:"Watching",useCases:["Voice AI","Visual query","AI task","Personal assistant"],targetUsers:["Early adopter","AI enthusiast","Developer"],alternatives:["Smartphone AI","Meta AI Glasses","ChatGPT mobile"],tags:["AI Device","Agent","Voice"],website:"https://www.rabbit.tech/rabbit-r1"},
  {slug:"adobe-firefly",name:"Adobe Firefly Enterprise",provider:"Adobe",companySlug:"adobe",country:"United States",category:"Creative AI",tagline:"生成AIを、企業の既存Creative Workflowの中へ入れる。",description:"Image/Video生成、Creative Production、Graph型Workflow、Creative Cloud連携をEnterprise governanceとともに提供するCreative AI基盤。",fitScore:92,japanStatus:"Established Japan business",entryStage:"Established",useCases:["広告制作","大量Variation","画像生成","Creative automation"],targetUsers:["大企業Marketing","Design Team","Agency","Creative Ops"],alternatives:["Runway","Canva","OpenAI image/video"],tags:["Creative AI","Enterprise","Adobe"],website:"https://www.adobe.com/products/firefly.html"}
];

const P:Record<string,Profile>={
"heygen-avatar-video":{source:"https://www.heygen.com/",capabilities:[["AI Avatar","人物映像を撮影せずAvatarで生成する。","Script / Voice / Avatar","Presenter video","撮影・出演","多言語動画を短時間で量産できる。"],["Video Translation","既存動画の音声・口元を多言語化する。","Source video / target language","Localized video","再収録・字幕制作","市場別ローカライズを圧縮する。"],["Agent workflow","URLや素材から動画制作工程を自動化する。","URL / assets / brief","Generated video workflow","複数ツール操作","制作の前処理をAgentへ寄せる。"]],useCases:[["多言語営業動画","同じ製品説明を国ごとに作りたい。","Script / Product info","Localized presenter video","Marketing","撮影・吹替"],["Training","研修動画を更新し続けたい。","Manual / Slides","Training video","L&D","撮影・編集"],["Personalized outreach","顧客別に短い説明動画を作りたい。","CRM data / Script","Personalized video","Sales","個別撮影"]],differentiators:[["Avatar + Localization","Avatar生成と翻訳を同じWorkflowで扱う。","出演者を毎回撮影せず国別展開できる。",["Synthesia","Runway"]],["API / Scale","大量動画生成をAPIで組み込める。","1本の作品より大量運用に向く。",["Synthesia","Canva"]]],limitations:["映画的な自由表現やVFX編集はRunway等が強い","Avatar表現の自然さは用途・言語でPoC必須","権利・本人同意を含む運用設計が必要"],pricing:{plans:[{name:"Free",monthly:"$0",notes:"試用向け"},{name:"Creator",monthly:"公開価格あり",notes:"Self-serve"}],enterprise:"個別見積",api:"従量/APIプラン",tco:"動画本数・尺・Avatar・翻訳量で変動"},onboarding:{level:2,label:"軽い",time:"即日〜1週",note:"Self-serveは早い。EnterpriseはBrand/Avatar承認が必要。"},replacement:{level:2,label:"低〜中",note:"既存制作を残したまま追加導入しやすい。"},japanese:{ui:"部分/要確認",input:"日本語対応",output:"日本語音声・翻訳対応",docs:"英語中心",support:"Enterprise要確認",note:"日本語の自然さ、固有名詞、敬語を実素材で確認。"},support:{level:"Standard / Enterprise",details:["Help center","Enterprise support","API support"]},integrations:["API","Zapier/automation","Web workflow"],enterprise:["SSO","Audit","Security"],automation:{domain:"Video localization / presentation",current:3,target:4,decision:"内容・公開判断は人間。生成・翻訳工程はAIが担う。",execution:"動画生成・翻訳・変換まで実行。",loop:"Partial",future:"Brand rule内で市場別動画を自動量産し、人間は承認中心へ。",assumption:"動画ごとに出演者を撮影し直す前提。"},bestFor:["多言語・大量のPresenter動画が必要","撮影コストを下げたい"],notFor:["映画的表現を細かく制御したい","Avatarを使わない映像制作が中心"],verdict:"PoC推奨"},
"synthesia-enterprise-video":{source:"https://www.synthesia.io/",capabilities:[["AI Presenter","ScriptからEnterprise向けPresenter動画を生成。","Script / Avatar","Training / explainer video","撮影・Presenter手配","研修更新を高速化。"],["Enterprise governance","Brand・Workspace・権限を企業利用向けに統制。","Brand assets / roles","Controlled production","部門ごとのばらばら運用","全社標準化しやすい。"],["Localization","複数言語版を同一素材から生成。","Source video / text","Localized variants","再収録","Global trainingの更新を揃えやすい。"]],useCases:[["社内研修","Manual変更のたびに研修動画を撮り直している。","Docs / Slides","Training video","L&D","撮影・編集"],["製品説明","機能更新ごとに説明動画を更新したい。","Release notes","Explainer","Product Marketing","再撮影"],["Global comms","同じ社内メッセージを多言語で出したい。","Script","Localized video","Internal comms","多言語収録"]],differentiators:[["Enterprise training fit","研修・説明用途に強いテンプレとGovernance。","映像表現より企業運用を優先する場合に強い。",["HeyGen","Runway"]],["Governance","組織利用を前提とした管理。","大企業で野良AI利用を抑えやすい。",["HeyGen","Canva"]]],limitations:["自由な映像表現・VFX用途には向きにくい","Avatar中心のため用途が合わないと価値が出にくい","日本語Support範囲は契約前確認"],pricing:{plans:[{name:"Starter",monthly:"公開価格あり",notes:"Self-serve"},{name:"Enterprise",monthly:"個別見積",notes:"管理機能"}],enterprise:"個別見積",api:"Enterprise/API提供",tco:"Seats・動画量・Avatar/Enterprise要件で変動"},onboarding:{level:2,label:"軽い",time:"数日〜2週",note:"Template/Brandを決めれば展開しやすい。"},replacement:{level:2,label:"低〜中",note:"既存撮影と共存しやすい。"},japanese:{ui:"要確認",input:"日本語対応",output:"日本語対応",docs:"英語中心",support:"Enterprise要確認",note:"研修用の読み・固有名詞をPoC確認。"},support:{level:"Enterprise strong",details:["Enterprise onboarding","Help center","Account support"]},integrations:["API","LMS workflow","Enterprise SSO"],enterprise:["SSO","Audit","Security"],automation:{domain:"Enterprise video production",current:3,target:4,decision:"内容・ブランド・公開は人間。",execution:"Scriptから動画・翻訳までAIが実行。",loop:"Partial",future:"研修資料更新から動画改訂まで自動連携。",assumption:"研修動画更新のたびに撮影チームが必要という前提。"},bestFor:["研修・社内説明動画を継続更新する大企業","Governanceを重視"],notFor:["映画・広告の高自由度映像","Avatar以外のクリエイティブ中心"],verdict:"PoC推奨"},
"minimax-multimodal":{source:"https://www.minimax.io/",capabilities:[["Multimodal generation","Text/Image/Video/Audioを複数モデルで生成。","Prompt / media","Media outputs","複数AI契約","一社で複数モダリティを試せる。"],["Video generation","Image/Textから高品質動画を生成。","Text / Image","Video","簡易映像制作","Creative testを高速化。"],["Agent / API","Model/APIをアプリへ組み込む。","API request","Model response","自前モデル運用","開発側で組込み可能。"]],useCases:[["短尺動画","商品や企画の動画案を大量に試したい。","Prompt / Image","Video","Marketing","外注試作"],["Voice/Audio","音声機能をアプリへ入れたい。","Text / Voice","Audio","TTS構築","個別音声基盤"],["AI App","複数生成Modelを組込みたい。","API","Multimodal response","複数Vendor接続","Model aggregation"]],differentiators:[["Broad multimodal stack","Videoだけでなく音声・Textまで広い。","複数モダリティを一社で試せる。",["Runway","ElevenLabs"]],["Cost/performance competition","高速なModel改善と価格競争力。","Model単体性能を重視する開発に向く。",["OpenAI","Google"]]],limitations:["Enterprise governanceは個別確認","日本での契約・Support体制は要確認","Workflow製品というよりModel/API寄り"],pricing:{plans:[{name:"API",monthly:"従量",notes:"Model別"},{name:"Consumer",monthly:"公開価格あり",notes:"地域差あり"}],enterprise:"要問い合わせ",api:"従量課金",tco:"Model・生成量・動画尺で大きく変動"},onboarding:{level:2,label:"軽い",time:"即日〜2週",note:"API試用は早いが本番統合は開発が必要。"},replacement:{level:2,label:"低〜中",note:"API abstractionを入れれば交換しやすい。"},japanese:{ui:"部分/要確認",input:"日本語可",output:"日本語可",docs:"英語/中国語中心",support:"要確認",note:"日本語品質と商用条件を用途別確認。"},support:{level:"Developer / Enterprise",details:["API docs","Developer support","Enterprise inquiry"]},integrations:["REST API","SDK"],enterprise:["Security"],automation:{domain:"Multimodal content generation",current:2,target:3,decision:"何を生成し採用するかは人間。",execution:"生成そのものはAI。",loop:"Partial",future:"複数ModelをAgentが選び、生成・評価を反復。",assumption:"用途ごとに別々の生成Vendorを選ぶ前提。"},bestFor:["複数モダリティをAPIで試したい","Model cost/performanceを重視"],notFor:["完成されたEnterprise workflowが必要","日本語専任Support必須"],verdict:"PoC推奨"},
"applied-intuition-platform":{source:"https://www.applied.co/",capabilities:[["Simulation","自動運転/ADASを仮想環境で大規模評価。","Scenario / sensor / vehicle model","Simulation results","実車試験の一部","Rare caseを安全に増やす。"],["Vehicle OS / tooling","SDV開発のSoftware stackを統合。","Vehicle software / configs","Integrated dev workflow","内製tool群","開発工程を標準化。"],["Autonomy development","Perception/PlanningなどAutonomy開発を支援。","Driving data","Validated autonomy stack","個別開発基盤","OEMの開発速度を上げる。"]],useCases:[["ADAS検証","実車だけではRare caseを試せない。","Scenario / Sensor","Simulation report","Autonomy Team","実車試験"],["SDV開発","ECU/Software toolが分断。","Vehicle configs","Integrated workflow","Platform Team","独自tool群"],["自動運転開発","都市・車種別に検証量が膨大。","Driving data","Validated system","OEM","個別simulation"]],differentiators:[["Automotive-native stack","自動車開発に深く特化。","汎用SimulationよりOEM工程へ入りやすい。",["NVIDIA","dSPACE"]],["Simulation + vehicle software","検証だけでなくSDV stackへ広い。","Tool単体ではなく開発基盤になれる。",["Vector","Ansys"]]],limitations:["導入はEnterprise projectになりやすい","データ・車両モデル整備が前提","価格は個別見積中心"],pricing:{plans:[],enterprise:"個別見積",api:"Enterprise integration",tco:"車種・Simulation規模・開発範囲で大きく変動"},onboarding:{level:4,label:"重い",time:"1〜3か月+",note:"Vehicle data、Scenario、開発環境統合が必要。"},replacement:{level:4,label:"高い",note:"開発基盤へ深く入るほど移行コストが高い。"},japanese:{ui:"Enterprise要確認",input:"日本語非依存",output:"日本語非依存",docs:"英語中心",support:"日本展開あり/個別確認",note:"UI言語より国内導入支援とOEM integrationが重要。"},support:{level:"Enterprise",details:["Deployment support","Technical engagement","OEM integration"]},integrations:["Vehicle data","Simulation stack","Cloud/HPC","CI/CD"],enterprise:["SSO","Audit","Security"],automation:{domain:"Autonomy / vehicle development",current:3,target:4,decision:"安全要件・Release判断はOEM人間。",execution:"Simulation・Validationは自動化可能。",loop:"Strong",future:"Scenario生成→Simulation→評価→修正候補まで閉ループ化。",assumption:"Autonomy検証は実車中心でなければならない前提。"},bestFor:["自動車OEM・Tier1のAutonomy/SDV開発","大規模Simulationが必要"],notFor:["小規模PoCのみ","自動車以外の汎用Simulation"],verdict:"PoC推奨"},
"wayve-ai-driver":{source:"https://wayve.ai/",capabilities:[["Embodied AI Driver","地図・ルールを都市ごとに作り込まず学習型Driving policyを構築。","Camera / sensor / driving context","Driving action","都市別rule engineering","新都市への展開性を狙う。"],["AV2.0 platform","End-to-end AIでPerception〜Drivingを統合。","Sensor stream","Trajectory / control","多数の手作りmodule","System complexityを下げる。"],["Simulation / data loop","Fleet dataを学習・評価へ戻す。","Driving logs","Improved model","手動case分析","Data flywheelを作る。"]],useCases:[["Robotaxi","都市ごとの自動運転展開コストを下げたい。","Fleet data","AI Driver","Mobility operator","都市別stack"],["OEM integration","自社車両へAI Driverを載せたい。","Vehicle interface","Integrated driver","OEM","内製AV stack"],["Delivery mobility","無人/支援運転で配送を効率化。","Route / sensors","Autonomous driving","Logistics","Driver operation"]],differentiators:[["Mapless/generalizable approach","都市ごとのHD map依存を減らす思想。","新都市展開コストを下げる可能性。",["Waymo","Mobileye"]],["End-to-end embodied learning","Module積み上げより学習中心。","環境変化へのGeneralizationを狙う。",["Cruise","Traditional AV"]]],limitations:["Safety validation・規制が最大の制約","本番化は車両/OEM/地域ごとの統合が必要","一般企業が直接導入するSaaSではない"],pricing:{plans:[],enterprise:"OEM / Mobility個別契約",api:"非公開/提携型",tco:"車両・安全検証・地域展開を含むProgram cost"},onboarding:{level:5,label:"非常に重い",time:"数か月〜年単位",note:"車両統合・安全検証・規制対応が必要。"},replacement:{level:5,label:"非常に高い",note:"車両・データ・Safety caseへ深く依存。"},japanese:{ui:"非該当",input:"非該当",output:"非該当",docs:"英語中心",support:"Japan partnership",note:"日本語UIより日本道路・規制・車両統合が重要。"},support:{level:"Strategic partnership",details:["OEM integration","Deployment engineering","Safety program"]},integrations:["Vehicle platform","Sensor stack","Cloud data","Simulation"],enterprise:["Security"],automation:{domain:"Driving",current:4,target:5,decision:"ODD内の運転判断をAIへ渡す。事業Policy・Safety caseは人間。",execution:"車両制御までAIが実行。",loop:"Strong",future:"定義された地域で人間Driverを不要にする。",assumption:"運転判断は常に人間Driverが担う前提。"},bestFor:["OEM/Mobility operatorの次世代自動運転","都市展開のScaleを重視"],notFor:["短期ROIのIT導入","低リスクPoCだけを求める"],verdict:"様子見"},
"sierra-agent-os":{source:"https://sierra.ai/",capabilities:[["Customer Agent","顧客会話から手続き完了までAgentが対応。","Customer request / account context","Resolved request","一次応対・定型手続き","回答ではなくResolutionまで進める。"],["Agent OS / tools","Backend toolを使って契約変更・返金等を実行。","Policy / APIs","Business action","人手の画面操作","業務権限をAgentへ移せる。"],["Quality / governance","会話品質・Policyを企業側で管理。","Rules / logs","Controlled agent behavior","手動QA","Scaleしても統制しやすい。"]],useCases:[["問い合わせ解決","FAQ回答後も手続きで人へ転送される。","Customer context","Resolved case","CX","一次応対"],["契約変更","住所・プラン・予約変更を自動化。","Account / policy","Updated record","Support Ops","画面操作"],["Retention","解約意向に応じた提案をしたい。","Conversation / CRM","Offer / action","Retention team","定型引留め"]],differentiators:[["Action-oriented agent","回答ではなくBackend actionまで実行。","ContainmentではなくResolutionを上げられる。",["Intercom","Zendesk AI"]],["Enterprise agent governance","大企業向けPolicy/品質管理。","高権限Agentを統制しやすい。",["Salesforce Agentforce","ServiceNow"]]],limitations:["Backend API/権限整備が必要","高リスク処理はHuman approval設計が必要","日本語Support/契約は提携条件を確認"],pricing:{plans:[],enterprise:"個別見積",api:"Enterprise integration",tco:"Conversation量・Action数・連携範囲で変動"},onboarding:{level:3,label:"中程度",time:"2〜8週",note:"KnowledgeだけでなくBackend action設計が必要。"},replacement:{level:3,label:"中程度",note:"既存Contact Centerと共存可能だがAction連携が深いほどLock-in増。"},japanese:{ui:"Enterprise要確認",input:"日本語対応可能/要PoC",output:"日本語対応可能/要PoC",docs:"英語中心",support:"SoftBank提携/契約確認",note:"日本語会話だけでなくBackend業務完了率で評価。"},support:{level:"Enterprise",details:["Deployment support","Quality operations","Enterprise support"]},integrations:["CRM","Contact center","Backend APIs","Knowledge base"],enterprise:["SSO","Audit","Security"],automation:{domain:"Customer service",current:4,target:5,decision:"Policy範囲の定型判断をAgentへ。高額補償等は人間。",execution:"Backend actionまで実行。",loop:"Strong",future:"大半の定型問い合わせはAIが完了し、人間は例外専門へ。",assumption:"顧客対応は回答後に人間が処理を実行する前提。"},bestFor:["問い合わせ量が多くBackend手続きまで自動化したい","24/7 Resolution"],notFor:["問い合わせ量が少ない","Backend APIが整備されていない"],verdict:"PoC推奨"},
"elevenlabs-agents":{source:"https://elevenlabs.io/",capabilities:[["Conversational Voice Agent","自然な音声でリアルタイム会話。","Voice / text / context","Voice interaction","電話一次対応","音声チャネルをAI化。"],["Tool use","会話中にAPI/業務toolを実行。","Conversation / APIs","Business action","Operator操作","予約・確認・更新まで進める。"],["Voice / localization stack","TTS・Voice cloning・多言語を統合。","Text / voice sample","Localized speech","収録・ナレーション","音声制作とAgentを同一基盤化。"]],useCases:[["電話受付","営業時間・人員で電話応対が詰まる。","Call / CRM","Resolved call","Call center","一次電話"],["予約Agent","空き確認と予約を電話で完了したい。","Calendar / call","Booking","店舗/医療","受付"],["多言語Voice","同じVoice体験を多言語で出したい。","Script / voice","Localized audio","Media","再収録"]],differentiators:[["Voice quality + agent stack","音声生成と会話Agentを同じ基盤で扱う。","声の品質と業務実行をつなげられる。",["Vapi","Retell"]],["Broad language/voice tooling","Voice cloning・TTS・Agentまで広い。","音声資産を複数用途へ使える。",["OpenAI Voice","Google"]]],limitations:["電話網・本人確認・録音同意の設計が必要","日本語の割り込み/敬語/固有名詞をPoC必須","高リスク手続きは人承認が必要"],pricing:{plans:[{name:"Free",monthly:"$0",notes:"試用"},{name:"Creator/Business",monthly:"公開価格あり",notes:"利用量別"}],enterprise:"個別見積",api:"従量課金",tco:"音声分数・Model・通話インフラで変動"},onboarding:{level:2,label:"軽〜中",time:"数日〜3週",note:"Demoは早い。本番はTelephony/API/Policy統合が必要。"},replacement:{level:2,label:"低〜中",note:"電話システムと並走しやすい。"},japanese:{ui:"英語中心/要確認",input:"日本語音声対応",output:"日本語音声対応",docs:"英語中心",support:"Enterprise要確認",note:"音声自然さより会話完了率・割り込み処理を評価。"},support:{level:"Standard / Enterprise",details:["Docs","Developer support","Enterprise support"]},integrations:["Telephony","API","WebSocket","CRM tools"],enterprise:["SSO","Security"],automation:{domain:"Voice customer interaction",current:3,target:4,decision:"定型会話はAI、高リスク判断は人。",execution:"会話とTool actionまで実行。",loop:"Partial",future:"通話→処理→品質分析→改善を閉ループ化。",assumption:"電話対応には人間Operatorがリアルタイムで必要という前提。"},bestFor:["電話量が多い","音声品質とAgent実行を両立したい"],notFor:["録音/AI応対が許容されない","複雑な感情対応が中心"],verdict:"PoC推奨"},
"fresha-platform":{source:"https://www.fresha.com/",capabilities:[["Booking marketplace","予約管理とConsumer discoveryを一体化。","Availability / services","Bookings","予約台帳・集客媒体分断","予約と新規集客をつなぐ。"],["POS / payments","店頭決済と売上を予約・顧客情報へ統合。","Transactions","Unified customer/revenue data","別POS","店舗OS化。"],["CRM / marketing","顧客履歴から再来店施策を実行。","Customer history","Campaign / retention","手動DM","再来店運用を自動化。"]],useCases:[["予約運用","電話・複数予約媒体が分断。","Menu / staff / slots","Unified booking","Salon","電話予約"],["店舗決済","POSと予約情報が別。","Payment","Sales record","Store","別POS"],["再来店","顧客履歴を販促に活かせない。","CRM","Campaign","Marketing","手動名簿"]],differentiators:[["Marketplace + operating system","予約SaaSと集客Marketplaceが一体。","導入店舗に新規顧客流入も作れる。",["Square","STORES予約"]],["Vertical depth","美容・Wellnessの業務に特化。","汎用POSより現場fitが高い。",["Square","Mindbody"]]],limitations:["日本の商習慣・決済・予約媒体連携を確認","既存顧客基盤移行に現場負荷","Marketplace効果は地域密度に依存"],pricing:{plans:[{name:"Platform",monthly:"公開条件あり",notes:"機能/決済で変動"}],enterprise:"店舗/Chain条件",api:"連携要確認",tco:"決済手数料・Marketplace・追加機能を含める"},onboarding:{level:3,label:"中程度",time:"1〜4週",note:"Menu、Staff、顧客、決済設定が必要。"},replacement:{level:3,label:"中程度",note:"予約・顧客・決済を統合すると移行範囲が広い。"},japanese:{ui:"要確認",input:"日本語データ可否確認",output:"要確認",docs:"英語中心",support:"要確認",note:"日本の店舗業務・決済・予約媒体とのfitが最大論点。"},support:{level:"Platform support",details:["Merchant support","Help center"]},integrations:["Payments","Booking","CRM"],enterprise:["Security"],automation:{domain:"Salon operations",current:1,target:2,decision:"価格・接客判断は店舗。",execution:"予約・通知・一部Marketingを自動化。",loop:"Partial",future:"需要・顧客行動に応じた運用提案を自動化。",assumption:"予約・決済・顧客管理は別々のシステムで運用する前提。"},bestFor:["複数ツールが分断した美容/Wellness店舗","集客も含めて一体化したい"],notFor:["日本固有連携が必須","既存POS/予約を変えられない"],verdict:"様子見"},
"joby-air-taxi":{source:"https://www.jobyaviation.com/",capabilities:[["eVTOL aircraft","電動垂直離着陸で都市間/空港移動を短縮。","Route / passengers","Air mobility","Ground travel","都市移動時間を再設計。"],["Operations platform","機体だけでなく運航・予約まで垂直統合。","Demand / fleet","Flight operation","複数事業者分断","Serviceとして提供可能。"],["Manufacturing partnership","Toyota等と量産・品質体制を構築。","Aircraft production","Scalable fleet","少量試作","商用化Scaleへ進む。"]],useCases:[["空港アクセス","渋滞で空港移動が長い。","Passenger demand","Short flight","Mobility operator","Taxi/rail"],["都市間移動","地上移動に時間がかかる。","Route","Air taxi","City/transport","Car"],["Premium mobility","高時間価値層の新交通を作る。","Booking","Flight","Travel","Helicopter"]],differentiators:[["Vertical integration","機体・運航・Serviceを一体で設計。","機体販売だけでなく利用体験まで持てる。",["Archer","Eve"]],["Toyota/ANA Japan pathway","日本で製造・運航Partnerを持つ。","日本導入の現実性が高まる。",["Archer","Volocopter"]]],limitations:["規制・認証・Vertiport整備が前提","初期価格はMass transitより高い可能性","天候・騒音・住民受容の制約"],pricing:{plans:[],enterprise:"運航/提携モデル",api:"非該当",tco:"機体・運航・Infrastructure・規制対応を含む"},onboarding:{level:5,label:"非常に重い",time:"年単位",note:"航空認証・運航・Infrastructureが必要。"},replacement:{level:5,label:"非常に高い",note:"交通Infrastructureへの投資が大きい。"},japanese:{ui:"Service時に日本対応想定",input:"非該当",output:"非該当",docs:"英語中心",support:"Japan partners",note:"言語より航空認証・運航体制が重要。"},support:{level:"Strategic partnership",details:["ANA/Toyota等との連携","Operations support"]},integrations:["Booking","Fleet operations","Vertiport"],enterprise:["Security"],automation:{domain:"Air mobility",current:1,target:3,decision:"現状の運航責任は人間/航空制度。",execution:"機体制御は高度自動化されるがService運航は規制下。",loop:"Partial",future:"都市Air mobilityが定常Serviceになる。",assumption:"短距離都市移動は地上交通しか選択肢がない前提。"},bestFor:["空港/都市交通の新規Infrastructure","高時間価値ルート"],notFor:["短期導入","低価格Mass transit"],verdict:"日本ではまだ早い"},
"exotec-skypod":{source:"https://www.exotec.com/",capabilities:[["Skypod AMR","RobotがRackを上下移動しContainerをStationへ搬送。","Orders / inventory","Goods-to-person","歩行・棚探索","Pickerの移動を大幅削減。"],["Storage system","高密度RackとRobotを統合。","SKU / layout","High-density storage","固定Conveyor中心","施設効率を上げる。"],["Orchestration","Robot fleetとOrderをSoftwareで最適化。","WMS / orders","Task allocation","手動配車","変動に合わせてScale。"]],useCases:[["Goods-to-person","Pickerが棚を歩き回る。","Orders","Items at station","Warehouse","Walking/picking"],["High-density storage","保管効率を上げたい。","SKU/layout","Dense storage","DC","Conventional racks"],["Peak scaling","繁忙期の処理量変動が大きい。","Demand","Robot allocation","3PL","Temporary labor"]],differentiators:[["3D Skypod movement","RobotがRackを垂直移動。","搬送設備を簡素化し柔軟性を高める。",["AutoStore","Geek+"]],["Modular scaling","Robot/Stationを段階追加。","固定設備より需要変動へ対応しやすい。",["Conveyor","AS/RS"]]],limitations:["Warehouse redesign/工事が必要","Item pickingそのものは人または別Robotが残るケース","大型設備投資"],pricing:{plans:[],enterprise:"個別見積",api:"WMS integration",tco:"Facility・Robot台数・Station・工事・保守で算定"},onboarding:{level:5,label:"重い",time:"数か月",note:"Layout設計・工事・WMS integrationが必要。"},replacement:{level:5,label:"高い",note:"物理設備のため撤去/切替コスト大。"},japanese:{ui:"日本導入あり",input:"日本語非依存",output:"日本語非依存",docs:"日本語情報あり",support:"日本法人/Partner",note:"日本で導入事例があり、運用Support確認が重要。"},support:{level:"Local enterprise",details:["Project design","Installation","Maintenance"]},integrations:["WMS","Warehouse control","Conveyor/robot interfaces"],enterprise:["Security"],automation:{domain:"Warehouse fulfillment",current:4,target:5,decision:"Order allocationはSystem、人間は例外・安全。",execution:"搬送・保管をRobotが実行。",loop:"Strong",future:"Picking robotと接続し、入出荷工程の人手をさらに削減。",assumption:"倉庫内で人が商品を探し歩く前提。"},bestFor:["高SKU・高Throughput倉庫","人手不足と変動対応"],notFor:["小規模倉庫","短期間だけの利用"],verdict:"PoC推奨"},
"pallet-logistics-agent":{source:"https://www.pallet.com/",capabilities:[["Logistics AI agents","Email/Portal/電話起点の物流事務をAgent化。","Messages / TMS data","Updated shipment/task","人手転記","事務処理量を削減。"],["Workflow automation","予約・追跡・Status updateを接続。","Shipment context","Completed workflow","複数画面操作","Operatorの往復を減らす。"],["Exception handling support","遅延・変更の情報を集約し次Actionを提示。","Events","Recommended action","手動確認","例外対応を早くする。"]],useCases:[["予約調整","Email/電話で予約枠を調整。","Messages","Booked slot","Dispatch","手動連絡"],["転記","Portal/TMS間で同じ情報を入力。","Docs/messages","Updated records","Ops","Data entry"],["追跡","Carrierへ状況確認を繰り返す。","Shipment","Status","Customer ops","Manual chase"]],differentiators:[["Logistics-native agents","物流用語・Workflowに特化。","汎用Agentより導入設計を短縮。",["UiPath","Generic agents"]],["Unstructured communication","Email等非構造入力から業務Actionへ。","FAX/電話文化が残る物流へ入りやすい。",["RPA","TMS"]]],limitations:["既存TMS/API/権限接続が必要","日本語・国内物流慣行はPoC必須","例外交渉は人間が残る"],pricing:{plans:[],enterprise:"個別見積",api:"Integration型",tco:"Agent数・Workflow・Message量で変動"},onboarding:{level:3,label:"中程度",time:"2〜6週",note:"代表Workflowを接続して学習/設定。"},replacement:{level:2,label:"低〜中",note:"TMS置換ではなく上に乗せるため段階導入しやすい。"},japanese:{ui:"要確認",input:"要PoC",output:"要PoC",docs:"英語中心",support:"要確認",note:"日本語Email・帳票・物流固有表現の精度が重要。"},support:{level:"Enterprise",details:["Integration support","Workflow design"]},integrations:["TMS","Email","Carrier portals","API"],enterprise:["Security"],automation:{domain:"Logistics back office",current:3,target:4,decision:"例外交渉・重要変更は人間。",execution:"定型更新・連絡・転記をAgentが実行。",loop:"Partial",future:"Shipment eventから次Actionまで自動運用。",assumption:"物流事務は人間が複数画面と連絡手段をつなぐ前提。"},bestFor:["物流事務の手作業が多い","TMSを変えずに自動化したい"],notFor:["API/データ接続ができない","例外交渉が業務の大半"],verdict:"PoC推奨"},
"fever-marketplace":{source:"https://feverup.com/",capabilities:[["Experience marketplace","都市ごとにEvent/ExperienceをConsumerへ流通。","Event inventory","Ticket sales / discovery","個別集客","Demand generationまで持つ。"],["Original experiences","IP/Brandと体験を企画・運営。","IP / venue","Live experience","イベント会社分断","Global rollout可能。"],["Data-driven distribution","Demand dataで開催地・価格・Marketingを最適化。","Audience data","Campaign / demand insight","勘の集客","都市展開の再現性を上げる。"]],useCases:[["IP体験","IPをリアルExperience化したい。","IP/venue","Ticketed experience","IP holder","単発event"],["Brand activation","体験型Marketingを展開。","Campaign","Event","Brand","広告"],["都市集客","Event集客をMarketplaceへ載せたい。","Inventory","Audience reach","Venue","自前集客"]],differentiators:[["Marketplace + production","集客だけでなくExperience企画・運営まで。","需要と供給を同じPlatformで回す。",["Peatix","Eventbrite"]],["Global format rollout","成功Formatを複数都市へ展開。","IP体験をScaleしやすい。",["Local event agencies"]]],limitations:["地域のAudience密度に依存","Event運営は物理Operationが必要","Ticket marketplace単体より複雑"],pricing:{plans:[],enterprise:"Revenue share / partnership",api:"要確認",tco:"企画・Venue・運営・Marketing・Revenue share"},onboarding:{level:4,label:"重い",time:"1〜3か月+",note:"Venue/IP/運営を含む。"},replacement:{level:3,label:"中程度",note:"Eventごとには切替可能だがAudience/Format依存が増える。"},japanese:{ui:"日本向けServiceあり/要確認",input:"日本語対応",output:"日本語対応",docs:"Consumer向け日本語",support:"Japan operation要確認",note:"国内集客力と運営体制が重要。"},support:{level:"Managed partnership",details:["Event operations","Marketing","Partner support"]},integrations:["Ticketing","Payments","CRM/marketing"],enterprise:["Security"],automation:{domain:"Experience commerce",current:1,target:2,decision:"企画・運営判断は人間。",execution:"Discovery/Marketing/販売をPlatformが支援。",loop:"Partial",future:"Demand dataから開催都市・価格・Marketing提案を高度化。",assumption:"リアルEventは都市ごとにゼロから集客・運営する前提。"},bestFor:["IP/Brand体験を複数都市へ展開","Marketplace集客も欲しい"],notFor:["単発小規模Event","自社集客だけで十分"],verdict:"PoC推奨"},
"motiva-implants":{source:"https://motiva.health/",capabilities:[["Breast implant portfolio","安全性・形状・Surface技術を軸にImplant選択肢を提供。","Patient / surgical plan","Implant procedure","従来Implant選択","患者/医師の選択肢を広げる。"],["Ergonomic design","体位による形状変化を意識した設計。","Anatomy","Aesthetic outcome","固定形状の選択肢","自然な見た目を狙う。"],["Clinical / safety data","Registry・Clinical dataを蓄積。","Clinical outcomes","Evidence","限定データ","医療導入判断を支える。"]],useCases:[["美容乳房手術","患者ごとの見た目・触感要望。","Patient plan","Procedure","Plastic surgeon","Traditional implant"],["乳房再建","再建で選択肢を増やしたい。","Clinical plan","Reconstruction","Hospital","Existing options"],["Clinic differentiation","安全性・患者体験を差別化。","Product portfolio","Treatment option","Clinic","Commodity offering"]],differentiators:[["Product design / surface","独自Surface/Ergonomic design。","医師・患者の選択軸を増やす。",["Mentor","Natrelle"]],["Clinical evidence focus","安全性/Outcome dataを重視。","医療機関の採用判断材料。",["Other implants"]]],limitations:["医療機器承認・適応が国ごとに必要","施術結果は医師技術・患者条件に依存","AI/Softwareの自動化製品ではない"],pricing:{plans:[],enterprise:"医療機関/Distributor契約",api:"非該当",tco:"製品価格・手術・術後Follow-up"},onboarding:{level:4,label:"医療導入",time:"数週〜数か月",note:"採用審査・医師Training・Patient説明が必要。"},replacement:{level:3,label:"中程度",note:"Clinic portfolio変更とTrainingが必要。"},japanese:{ui:"非該当",input:"非該当",output:"非該当",docs:"日本承認資料/Distributor確認",support:"医療向けSupport",note:"Software日本語ではなく承認・供給・医師Trainingが重要。"},support:{level:"Clinical / distributor",details:["Clinical training","Product support"]},integrations:["Clinical workflow"],enterprise:["Security"],automation:{domain:"Medical device",current:0,target:0,decision:"医療判断は医師。",execution:"AI自動化対象ではない。",loop:"None",future:"製品そのものはAutomation競争ではなくClinical outcomeで評価。",assumption:"Automationではなく医療機器設計の選択肢を変える。"},bestFor:["承認範囲内でImplant optionを比較する医療機関"],notFor:["Software/AI自動化を求める","承認外用途"],verdict:"様子見"},
"rogo-finance-ai":{source:"https://rogo.ai/",capabilities:[["Financial research","Filings・資料・内部Knowledgeを横断検索・要約。","Docs / data","Research memo","手動調査","Analystの前処理を短縮。"],["Modeling support","Financial modelや表作成を支援。","Financial data","Model / analysis","Excel前処理","分析開始を早める。"],["Reporting","Memo・Pitch・資料作成を支援。","Research / template","Report","Draft作成","Outputまでつなぐ。"]],useCases:[["企業分析","資料収集に時間がかかる。","Filings","Research memo","Analyst","Manual research"],["案件分析","Deal資料から論点を整理。","Data room","Analysis","Bank/PE","Manual review"],["定例更新","Model/資料を更新し続ける。","New data","Updated report","Asset manager","Manual update"]],differentiators:[["Finance-native workflow","金融資料・Model・Reportに特化。","汎用AIより業務文脈へ深い。",["ChatGPT Enterprise","Microsoft Copilot"]],["Evidence-oriented research","出典・資料を前提に分析。","金融のTraceabilityに合う。",["Generic LLM"]]],limitations:["最終投資/助言判断は人間","内部Data接続と権限設計が重要","日本市場Data/日本語品質はPoC"],pricing:{plans:[],enterprise:"個別見積",api:"Enterprise",tco:"Seats・Data integration・利用範囲"},onboarding:{level:3,label:"中程度",time:"2〜6週",note:"内部Knowledge/権限接続で価値が上がる。"},replacement:{level:3,label:"中程度",note:"Excel等を完全置換せず前後工程から導入可能。"},japanese:{ui:"要確認",input:"日本語文書PoC",output:"日本語PoC",docs:"英語中心",support:"Japan team/要確認",note:"日本語金融資料、表、固有用語の精度を確認。"},support:{level:"Enterprise",details:["Deployment","Financial workflow support"]},integrations:["Document repositories","Financial data","Excel/workflows"],enterprise:["SSO","Audit","Security"],automation:{domain:"Financial analysis",current:2,target:3,decision:"投資・顧客助言は人間。",execution:"Research/Model/Reportの一部をAIが作成。",loop:"Partial",future:"案件Researchの大半をAgentが前処理し、人間は仮説と判断へ。",assumption:"金融Juniorはまず大量の資料収集・転記から始める前提。"},bestFor:["金融ProfessionalのResearch負荷が大きい","出典管理が重要"],notFor:["最終判断を完全自動化したい","Data接続できない"],verdict:"PoC推奨"},
"protopie":{source:"https://www.protopie.io/",capabilities:[["High-fidelity interaction","Codeなしで複雑なInteraction prototypeを作成。","Design / sensor inputs","Interactive prototype","静的mock","実装前に体験を検証。"],["Automotive/HMI prototyping","車載UI・Sensor連携をPrototype。","HMI design / signals","Interactive HMI","実機試作","車載UX検証を高速化。"],["AI/MCP bridge","DesignとAI coding/productionを接続。","Prototype / MCP","Implementation context","手動spec transfer","Design→実装の距離を縮める。"]],useCases:[["車載HMI","静的Designでは体験検証できない。","Design/signals","HMI prototype","Automotive UX","Static design"],["User test","実装前にInteractionを試したい。","Design","Prototype","Product team","Frontend build"],["Design-to-code","仕様伝達の往復が多い。","Prototype","Implementation context","Designer/Engineer","Manual handoff"]],differentiators:[["Interaction depth","複雑なSensor/状態遷移をCodeなしで表現。","Figmaより動的体験検証に強い。",["Figma","Framer"]],["Automotive specialization","車載HMIでの実績・機能。","自動車UXへ深くfit。",["Figma","Axure"]]],limitations:["最終Production codeそのものではない","高度Prototypeには学習が必要","MCP/AI連携はWorkflow設計が必要"],pricing:{plans:[{name:"Individual/Team",monthly:"公開価格あり",notes:"Seat based"}],enterprise:"個別見積",api:"MCP/Integration",tco:"Seats・Enterprise機能・Training"},onboarding:{level:2,label:"軽〜中",time:"数日〜2週",note:"Design teamは早く試せる。"},replacement:{level:2,label:"低〜中",note:"Figma等と共存可能。"},japanese:{ui:"日本語情報あり/要確認",input:"非言語中心",output:"非言語中心",docs:"日本語Resourceあり",support:"Japan enterprise",note:"日本でのAutomotive導入文脈とSupportを確認。"},support:{level:"Standard / Enterprise",details:["Docs","Enterprise support","Training"]},integrations:["Figma import","MCP","Hardware/sensor"],enterprise:["SSO","Security"],automation:{domain:"Product design / prototyping",current:1,target:2,decision:"UX判断は人間。",execution:"Prototype動作生成/連携をToolが支援。",loop:"Partial",future:"PrototypeからImplementation artifactへ自動接続。",assumption:"動く体験を検証するにはFrontendを実装する必要がある前提。"},bestFor:["複雑Interaction・HMI","実装前に高精度検証"],notFor:["静的UIだけ","Production codeを直接完成させたい"],verdict:"今すぐ試す"},
"rlwrld-rfm":{source:"https://www.rlwrld.ai/",capabilities:[["Robotics foundation model","RobotがVision/LanguageからActionを学ぶFoundation Model。","Camera / instruction","Robot action","工程ごとの個別program","変種作業へ適応。"],["Manipulation","不定形物・未知対象の把持/操作。","Visual scene","Pick/place action","固定座標teaching","再Teachingを減らす。"],["Industrial deployment","既存RobotへAI layerを接続。","Robot/camera","Adaptive task","Robot replacement","Hardware資産を活かす。"]],useCases:[["Picking","対象物が変わるとTeachingが必要。","Vision","Pick action","Warehouse","Rule robot"],["組付け","部品差・位置差へ柔軟対応。","Scene","Assembly action","Factory","Fixed automation"],["品出し/検品","多品種を扱いたい。","Vision","Manipulation","Retail","Manual labor"]],differentiators:[["Hardware-agnostic RFM direction","既存RobotへAIを載せる思想。","Robot本体を買い替えず知能化。",["Figure","Skild AI"]],["Japan industrial relevance","製造/物流の既存Robot資産へ接続可能性。","日本の設備installed baseと相性。",["Humanoid-only approaches"]]],limitations:["実環境でのReliability検証が必要","Safety/Robot integrationが重い","企業/工程ごとのDataが必要"],pricing:{plans:[],enterprise:"PoC/個別見積",api:"Model/Integration",tco:"Robot integration・Data collection・Safety validation"},onboarding:{level:4,label:"重い",time:"1〜3か月+",note:"Robot/Camera/Task data統合。"},replacement:{level:4,label:"高い",note:"Robot cellへ深く統合すると移行負荷大。"},japanese:{ui:"非該当/要確認",input:"自然言語/Visual",output:"Robot action",docs:"英語/韓国語中心",support:"Japan build-out",note:"言語よりRobot integrationと現場Supportが重要。"},support:{level:"Engineering engagement",details:["PoC","Robot integration"]},integrations:["Industrial robots","Cameras","Edge compute"],enterprise:["Security"],automation:{domain:"Robot manipulation",current:3,target:5,decision:"Task goal/Safetyは人間、Action選択をAIへ。",execution:"Robot actionまで実行。",loop:"Strong",future:"品種変更でも再ProgrammingせずRobotが適応。",assumption:"Robotは対象物ごとに人間がTeachingする前提。"},bestFor:["多品種・変動作業","既存RobotをAI化"],notFor:["完全固定工程で従来自動化が十分","Safety validationできない"],verdict:"PoC推奨"},
"shield-hivemind":{source:"https://shield.ai/hivemind",capabilities:[["AI Pilot","GPS/通信制約下でもVehicleを自律制御。","Sensors / mission","Autonomous flight/action","Remote pilot","通信依存を下げる。"],["Multi-agent autonomy","複数無人機の協調行動。","Mission / fleet state","Coordinated action","人間の個別操縦","Operator負荷を削減。"],["Platform portability","複数機体へAutonomy stackを展開。","Vehicle interface","AI pilot integration","機体別software","Autonomy再利用。"]],useCases:[["無人機運用","通信が不安定な環境で任務継続。","Mission/sensors","Autonomous flight","Defense","Remote control"],["協調飛行","複数機を少人数で運用。","Fleet","Coordinated mission","Operator","Individual piloting"],["ISR","広域監視を自律化。","Sensors","Coverage/data","Government","Manual patrol"]],differentiators:[["Mission autonomy under denied conditions","通信/GPS制約下の自律性。","Defense固有の厳しい環境に対応。",["Anduril","Traditional autopilot"]],["AI Pilot platform","機体ではなくPilot softwareとして展開。","複数platformへ拡張可能。",["Vehicle-specific autonomy"]]],limitations:["防衛・輸出規制が強い","日本導入は政府/防衛産業調達","公開情報だけでは運用詳細に限界"],pricing:{plans:[],enterprise:"政府/防衛契約",api:"非公開",tco:"機体・統合・Training・Mission system"},onboarding:{level:5,label:"非常に重い",time:"長期Program",note:"機体統合・Safety・調達。"},replacement:{level:5,label:"非常に高い",note:"Mission systemへ深く統合。"},japanese:{ui:"非公開/要確認",input:"Mission interface",output:"Autonomous action",docs:"限定",support:"Strategic/government",note:"日本語より政府調達・Integration・規制が主要論点。"},support:{level:"Strategic",details:["Vehicle integration","Mission support"]},integrations:["UAS platforms","Sensors","Mission systems"],enterprise:["Security"],automation:{domain:"Autonomous defense aviation",current:4,target:5,decision:"Mission目的/ROEは人間、飛行・一部戦術判断をAI。",execution:"Vehicle制御まで実行。",loop:"Strong",future:"少人数が複数AI Pilotを監督する運用。",assumption:"無人機は人間が常時遠隔操縦する前提。"},bestFor:["防衛・航空宇宙のAutonomy","通信制約環境"],notFor:["民間汎用Drone用途","短期Self-serve導入"],verdict:"様子見"},
};

const G=(source:string,domain:string,current:0|1|2|3|4|5,target:0|1|2|3|4|5,cap:string,use:string,diff:string,pricing:string,jp:string,alts:string[]):Profile=>({
 source,
 capabilities:[[cap,cap+"を中核に、従来人手または固定Workflowだった工程を再設計する。","業務データ / 指示 / Context","業務結果 / Action","手作業・既存Toolの一部",use+"の処理量と速度を上げる。"],["Workflow integration","複数工程・Toolを接続し、単発機能で終わらせない。","Systems / data","Integrated workflow","Tool間の転記・調整","本番運用で価値を出しやすい。"],["Governance / scale","組織利用に必要な権限・管理・再利用を想定。","Policy / roles","Controlled operation","個人利用の属人化","PoCからScaleへ進みやすい。"]],
 useCases:[[use,use+"に人手・待ち時間・分断が残る。","業務データ / Context","完了した業務成果","対象部門","手作業"],["反復業務の自動化","同じ判断・操作を繰り返している。","Rules / examples","Automated action","担当者","定型作業"],["例外の前処理","人間が情報収集から始めている。","Events / documents","Prioritized case","管理者","一次調査"]],
 differentiators:[[diff,diff,use+"で既存手段より一段深く業務を持てる。",alts],["End-to-end workflow","単機能ではなく前後工程まで接続。","導入効果を局所効率化で終わらせにくい。",alts]],
 limitations:["本番利用では権限・データ・例外設計が必要","日本語・国内契約・Supportは用途別に確認","Demo品質だけでなく実業務KPIで評価が必要"],
 pricing:{plans:pricing?[{name:"Public / Self-serve",monthly:pricing,notes:"公開条件ベース"}]:[],enterprise:"個別見積/要確認",api:"提供有無を公式で確認",tco:"利用量・Integration・Supportを含む総コストで評価"},
 onboarding:{level:3,label:"中程度",time:"1〜6週",note:"代表Workflowの接続・評価が必要。"},
 replacement:{level:3,label:"中程度",note:"PoCは低いがWorkflow統合後は移行負荷が増える。"},
 japanese:{ui:jp,input:jp,output:jp,docs:"公式Docsを確認",support:"要契約確認",note:"日本語品質だけでなく、日本の業務・契約・Support適合を確認。"},
 support:{level:"Standard / Enterprise",details:["公式Docs","Enterprise supportを契約前確認"]},
 integrations:["API / system integration","Existing workflow"],enterprise:["Security"],
 automation:{domain,current,target,decision:"重要判断・Policy・例外は人間が保持し、定型判断を段階的にAI/自動化へ渡す。",execution:"製品が扱う業務範囲でActionまで進める。",loop:current>=4?"Strong":"Partial",future:"人間は全件処理から例外・Policy監督へ移る。",assumption:use+"は人間が常時作業する必要があるという前提。"},
 bestFor:[use+"の工数・待ち時間が大きい",diff+"を重視"],notFor:["対象業務量が少ない","権限/データ接続ができない"],verdict:"PoC推奨"
});

Object.assign(P,{
"xbow-autonomous-pentest":G("https://xbow.com/","Offensive security",3,4,"Autonomous attack exploration","継続Pentest","AIが状況に応じて次の攻撃経路を考え、実証する", "", "英語中心",["Pentera","NodeZero"]),
"pentera-validation":G("https://pentera.io/","Security validation",3,4,"Automated attack validation","Exposure validation","企業全体を継続的に実攻撃で検証", "", "Enterprise要確認",["XBOW","NodeZero"]),
"nodezero":G("https://www.horizon3.ai/nodezero/","Autonomous pentest",3,4,"Attack path proof","Autonomous pentest","CredentialからCritical assetまで侵入経路を実証", "", "英語中心",["Pentera","XBOW"]),
"replit-agent":G("https://replit.com/products/agent","Software development",3,4,"App-building agent","アプリ開発","自然言語から実装・DB・Deployまで一つの環境", "Freeあり", "英語UI/日本語入力可",["Cursor","Devin"]),
"cursor-agent":G("https://cursor.com/","Software development",3,4,"Cloud/background coding agents","実装・Bug fix","既存Codebase上でAgentを並列稼働", "公開価格あり", "英語UI/日本語入力可",["Claude Code","Devin"]),
"devin":G("https://devin.ai/","Software development",3,4,"Long-running software agent","チケット単位開発","計画・実装・テスト・PRまで長時間自走", "公開/Enterprise", "英語UI/日本語指示可",["Cursor","Replit"]),
"clay-gtm":G("https://www.clay.com/","GTM operations",3,4,"Data enrichment + AI research","Outbound / ABM","企業Data・Signal・AI researchを同一tableで組み合わせる", "Free/有料あり", "英語UI/日本語Data可",["Apollo","ZoomInfo"]),
"paradox-olivia":G("https://www.paradox.ai/","Recruiting operations",3,4,"Conversational recruiting workflow","応募〜面接設定","候補者会話からScreening・Schedulingを完了", "", "日本語/地域対応要確認",["Eightfold","HireVue"]),
"eightfold-talent":G("https://eightfold.ai/","Talent intelligence",2,3,"Skill intelligence graph","採用・社内異動","履歴書の肩書よりSkill/可能性を横断分析", "", "日本語/地域対応要確認",["Workday","LinkedIn"]),
"harvey-legal-ai":G("https://www.harvey.ai/","Legal work",3,4,"Legal-domain agent workspace","Legal research / review","法律資料と案件Workflowに特化", "", "日本語法務はPoC必須",["CoCounsel","Lexis+ AI"]),
"figure-helix":G("https://www.figure.ai/helix","Humanoid robotics",3,5,"Whole-body VLA control","Humanoid作業","歩行・Manipulation・Visionを一つのPolicyへ統合", "", "非言語中心",["Tesla Optimus","Apptronik"]),
"nvidia-cosmos":G("https://www.nvidia.com/en-us/ai/cosmos/","Physical AI development",3,4,"World foundation model + simulation","Robot/AV学習","Reasoning・World generation・Action generationを統合", "Open models", "日本語公式情報あり",["In-house simulation","Other world models"]),
"locus-array":G("https://locusrobotics.com/","Warehouse fulfillment",4,5,"AMR + robotic picking","倉庫Picking","移動だけでなくPicking工程までRobot化", "", "日本語対応要確認",["Exotec","Symbotic"]),
"symbotic-system":G("https://www.symbotic.com/solutions/","Warehouse automation",4,5,"Facility-scale orchestration","大規模DC自動化","Robot単体でなく施設全体を統合", "", "日本語対応要確認",["Exotec","AutoStore"]),
"meta-ai-glasses":G("https://www.meta.com/ai-glasses/","Contextual personal AI",2,4,"First-person context","Hands-free AI","AIがユーザーと同じ視界を持てる", "Retail pricing", "日本発売/日本語機能は要確認",["Smartphone","Android XR"]),
"plaud-notepin":G("https://www.plaud.ai/products/plaud-notepin","Knowledge capture",2,3,"Wearable always-ready capture","会議・訪問記録","録音→文字起こし→要約→検索をWearableで一体化", "Retail pricing", "日本語文字起こし対応確認",["Otter","Phone recorder"]),
"rabbit-r1":G("https://www.rabbit.tech/rabbit-r1","Personal AI device",2,3,"Dedicated AI interaction","Personal AI","Appを探す操作を会話中心へ置き換える", "$199 class", "英語中心/日本語可否確認",["Smartphone AI","Meta Glasses"]),
"adobe-firefly":G("https://www.adobe.com/products/firefly.html","Creative production",3,4,"Creative Cloud + generative AI","Enterprise creative production","既存Adobe workflow内で生成AIを統制", "公開価格あり", "日本語UI/Docsあり",["Runway","Canva"])
});


const specialized:Record<string,Partial<Profile>>={
"xbow-autonomous-pentest":{
 capabilities:[
  ["Autonomous attack reasoning","対象を観察しながら次に試す攻撃経路をAIが選ぶ。","Target / scope / observed responses","Exploit path / proof","人間Pentesterの探索","固定Scannerでは見つけにくい連鎖的な侵入経路を探せる。"],
  ["Exploit validation","単にCVEを列挙せず、実際に成立するかを安全に実証する。","Candidate vulnerability","Validated finding / evidence","手動PoC","修正優先度を『本当に侵入できるか』で判断できる。"],
  ["Retest loop","修正後に同じ経路を再検証する。","Remediated target","Pass / fail evidence","再診断の手配","攻撃→修正→再攻撃の周期を短くできる。"]
 ],
 useCases:[
  ["外部Attack surface検証","公開資産が増え、どこから侵入できるか把握しきれない。","Domains / Apps / scope","Validated exploit paths","Security Engineering","年次Pentestの一部"],
  ["AppSec連続検証","Releaseごとに手動Pentestできない。","Application build","Findings with proof","AppSec","手動PoC"],
  ["修正後Retest","修正TicketをCloseしても本当に塞がったか不安。","Fixed target","Retest result","Vulnerability Management","再診断依頼"]
 ],
 differentiators:[
  ["Attack reasoning loop","ScannerのRule実行ではなく、得られた結果から次の攻撃をAIが選ぶ。","Pentestの探索工程そのものを自律化する。",["Pentera","NodeZero"]],
  ["Proof over alerts","脆弱性数ではなく侵入成立の証拠を返す。","修正優先度をRiskではなくExploitabilityへ寄せられる。",["Scanner","CSPM"]]
 ],
 limitations:["本番環境で許容する攻撃範囲の設計が必要","修正そのものは別Workflow/人間が担う","日本語Support・国内契約は要確認"],
 integrations:["CI/CD","Ticketing","Security workflow"]
},
"pentera-validation":{
 capabilities:[
  ["Automated security validation","内部・外部・Cloudを継続的に攻撃Simulationする。","Assets / credentials / scope","Validated exposures","Point-in-time pentest","継続的なExposure validationへ移行できる。"],
  ["Attack path prioritization","複数の弱点をつないでCritical assetまでの経路を示す。","Identity / network / vulnerabilities","Prioritized attack paths","CVSS中心の優先順位","実際のBusiness impactへ近い順で直せる。"],
  ["Automated retest","修正後の検証を繰り返し自動化する。","Remediation changes","Closed / open validation","手動再診断","修正SLAを短縮できる。"]
 ],
 useCases:[
  ["Enterprise exposure validation","Network/Cloud/Identityが複雑で診断が追いつかない。","Enterprise assets","Validated paths","CISO / VM","年次Pentest"],
  ["Cloud posture proof","設定不備が本当に突破へつながるか知りたい。","Cloud assets","Exploit proof","Cloud Security","設定Scanner"],
  ["Purple team validation","Detection controlが攻撃を捉えるか検証。","Attack techniques","Detection evidence","SOC","Manual purple team"]
 ],
 differentiators:[
  ["Enterprise breadth","単一Appではなく企業全体の攻撃面を継続検証。","Exposure Managementの運用基盤になりやすい。",["XBOW","App pentest tools"]],
  ["Repeatable validation","同じ攻撃を何度でも再現・比較できる。","Control改善を時系列で測定しやすい。",["Consulting pentest","Manual red team"]]
 ],
 integrations:["SIEM","SOAR","Ticketing","Cloud","Identity"]
},
"nodezero":{
 capabilities:[
  ["Autonomous pentest","Credential・Network・Cloudを横断して侵入経路を探索する。","Scope / credentials","Attack path evidence","Manual pentest","短時間で実侵入可能性を可視化。"],
  ["Credential attack chaining","取得したCredentialを次の横展開へ利用する。","Identity / credential context","Privilege path","単発vulnerability scan","複数弱点の連鎖を証明。"],
  ["Critical asset impact","Crown jewelまで到達できるかを示す。","Asset graph","Business-relevant path","脆弱性一覧","修正優先度が明確になる。"]
 ],
 useCases:[
  ["Internal pentest","内部侵入後の横展開リスクを知りたい。","Internal scope","Attack graph","Security","Manual internal test"],
  ["Cloud validation","Cloud/IAMの組み合わせリスクを確認。","Cloud/IAM","Validated path","Cloud Security","CSPM only"],
  ["M&A/環境変更検証","Network変更後に新しい経路がないか確認。","Changed environment","Retest","IT/Security","Manual check"]
 ],
 differentiators:[
  ["Attack-path proof","Credential chainを使いCritical assetまで実証。","単一findingより経営に説明しやすい。",["Vulnerability scanner","CSPM"]],
  ["Fast repeatable pentest","自律実行を繰り返せる。","環境変更のたびに再検証できる。",["Consulting pentest","Red team"]]
 ],
 integrations:["Cloud","Identity","Ticketing","SIEM"]
},
"replit-agent":{
 capabilities:[
  ["Prompt-to-app build","要件からFrontend/Backendを生成し動くApplicationへ持っていく。","Natural-language brief","Running app","初期実装","非エンジニアでもPrototypeを作りやすい。"],
  ["Database / auth setup","DBや認証を同じWorkspaceで設定する。","Data model / requirements","Connected backend","外部Service設定","App構築の前後工程を減らす。"],
  ["Deploy in same environment","実装後そのままHosting/Deployへ進める。","Built app","Public deployment","別Cloud setup","Idea→公開までのTool移動を削減。"]
 ],
 useCases:[
  ["社内Tool","Spreadsheet運用を簡単なAppへ変えたい。","Process / data","Internal app","Ops","Manual spreadsheet"],
  ["新規事業Prototype","検証前に開発チームを大きく張れない。","Product brief","MVP","Business/Product","Outsourced prototype"],
  ["Customer portal","小規模Web appを短期間で作る。","Requirements","Web app","SMB/Startup","Traditional build"]
 ],
 differentiators:[
  ["Build + runtime in one place","Coding Agentと実行/Deploy環境が同居。","『生成したCodeを別環境へ持っていく』手間が少ない。",["Cursor","Claude Code"]],
  ["Non-engineer accessibility","IDE知識が少なくても会話起点で作れる。","Engineering resourceが薄いTeamにも入口がある。",["Devin","Cursor"]]
 ],
 integrations:["Replit DB","Auth","Deploy","GitHub"]
},
"cursor-agent":{
 capabilities:[
  ["Repository-aware agent","既存Codebase全体を読み、複数Fileを横断編集する。","Repository / task","Code changes","Manual implementation","既存Product開発へ入りやすい。"],
  ["Background / Cloud agents","別環境でTaskを並列実行する。","Issue / branch","PR / evidence","Developerの逐次作業","一人が複数Taskを監督できる。"],
  ["IDE-native review loop","生成差分をEditor内で確認・修正する。","Agent diff","Reviewed code","Tool switching","Human reviewを残したままAgent化。"]
 ],
 useCases:[
  ["Bug fix","再現条件は分かるが修正工数が積み上がる。","Issue / code","Patch / test","Engineer","Manual fix"],
  ["Feature implementation","仕様の明確な機能を並列で進めたい。","Spec","PR","Product engineering","Sequential coding"],
  ["Refactor/Test","品質改善Taskが後回し。","Repository","Refactor/tests","Platform team","Manual maintenance"]
 ],
 differentiators:[
  ["IDE + agent continuity","Editorで考えたContextのままAgentへTaskを渡す。","CopilotとCloud agentを同じ開発体験で使える。",["Devin","Replit"]],
  ["Existing-code focus","新規Appだけでなく大規模既存Repositoryに深く入る。","Professional engineerの本番Codebaseと相性が良い。",["Lovable","No-code builders"]]
 ],
 integrations:["GitHub","Terminal","Cloud agents","MCP"]
},
"devin":{
 capabilities:[
  ["Long-running software task","Issueを受けて計画・実装・検証を長時間進める。","Ticket / repository","PR / result","Engineer task ownership","人間が席を離れている間もTaskを進める。"],
  ["Browser + terminal work","CodeだけでなくBrowser/CLIを使って調査・実行する。","Web / terminal / code","Completed workflow","Manual tool switching","Software taskの周辺作業も持てる。"],
  ["Parallel delegated work","複数Devinへ別Taskを渡す。","Backlog","Parallel outputs","Single-developer queue","EngineerがManager的役割へ移れる。"]
 ],
 useCases:[
  ["Backlog消化","明確なIssueが積み上がる。","Issues","PRs","Engineering","Manual backlog"],
  ["Migration","Library/API変更を大量に適用。","Migration plan","Updated code","Platform","Manual repetitive changes"],
  ["QA/Bug reproduction","Bug調査からFixまで往復が多い。","Bug report","Repro + fix","QA/Engineering","Manual triage"]
 ],
 differentiators:[
  ["Task ownership model","補完ではなくTask単位で仕事を受ける。","人間の常時操作から離れやすい。",["GitHub Copilot","IDE copilots"]],
  ["Tool-using engineer","Browser/Terminalを含めSoftware工程を横断。","Code生成だけで終わらない。",["Simple code generators","No-code"]]
 ],
 integrations:["GitHub","Browser","Terminal","Issue workflows"]
},
"clay-gtm":{
 capabilities:[
  ["Multi-source enrichment","多数のData providerをWaterfallで組み合わせる。","Company/contact list","Enriched records","手作業Research","GTM data準備を圧縮。"],
  ["Claygent research","Webや公開情報をAIが調べ、条件判定・要約を行う。","Account / research question","Structured insight","SDR research","人手ResearchをScaleできる。"],
  ["Sequencing / activation","Enriched dataからOutreachへ接続する。","Qualified records","Personalized sequence","CSV handoff","Research→接触を同一Workflow化。"]
 ],
 useCases:[
  ["ABM list building","Target accountごとの情報収集が重い。","Account list","Prioritized accounts","RevOps","Manual research"],
  ["Signal-based outbound","採用/資金調達等のTimingを拾いたい。","Signals","Triggered outreach","SDR","Periodic list"],
  ["CRM enrichment","CRM dataが古く判断に使えない。","CRM records","Updated fields","Sales Ops","Manual cleanup"]
 ],
 differentiators:[
  ["Composable GTM table","Data・AI・Logic・OutreachをSpreadsheet感覚で組む。","自社独自のGTM logicを構築しやすい。",["Apollo","ZoomInfo"]],
  ["Claygent as research layer","定型Enrichmentで取れない情報をAI調査で埋める。","ニッチなSignal・定性情報まで構造化できる。",["Traditional databases","Static intent data"]]
 ],
 integrations:["Salesforce","HubSpot","Email","Webhooks","Data providers"]
},
"paradox-olivia":{
 capabilities:[
  ["Conversational apply","候補者がChatから応募・質問できる。","Candidate conversation","Application","Form-based apply","応募摩擦を減らす。"],
  ["Screening automation","要件に基づいて初期Screeningする。","Answers / rules","Qualified candidate","Recruiter screening","大量採用の前処理を削減。"],
  ["Interview scheduling","条件を満たした候補者へ面接枠を即提示。","Calendar / candidate","Booked interview","日程調整","応募から面接までの時間を短縮。"]
 ],
 useCases:[
  ["Hourly hiring","応募数が多くRecruiterが追いつかない。","Applicants","Screened/booked candidates","Retail/Hotel HR","Manual screening"],
  ["Hiring event","短期間に大量面接を設定。","Candidate pool","Schedules","Recruiting Ops","Email coordination"],
  ["Candidate FAQ","同じ質問にRecruiterが繰り返し回答。","Policy/FAQ","Instant answers","HR","Manual response"]
 ],
 differentiators:[
  ["Candidate conversation first","ATS画面ではなく会話を入口にする。","候補者体験と採用速度を同時に改善しやすい。",["Traditional ATS","Workday"]],
  ["Screen-to-schedule continuity","Screening後すぐCalendarへつなぐ。","『応募後に待つ時間』を減らす。",["Point scheduling tools","Chatbots"]]
 ],
 integrations:["ATS","Calendar","HRIS","Messaging"]
},
"eightfold-talent":{
 capabilities:[
  ["Talent intelligence graph","Skill・経験・Roleの関係をAIでModel化する。","Profiles / jobs","Talent graph","Keyword matching","肩書だけでないMatchへ。"],
  ["Internal mobility","社内人材とOpen role/ProjectをMatchする。","Employee skills","Mobility recommendations","Manager network","外部採用だけに頼らない。"],
  ["Workforce planning","将来必要Skillと現在のGapを可視化。","Workforce data","Skill gap plan","Manual workforce analysis","人材戦略へAIを広げる。"]
 ],
 useCases:[
  ["採用Search","Keywordでは候補者を見逃す。","Job/skills","Ranked talent","TA","Keyword search"],
  ["社内異動","社内に適任者がいても見つからない。","Employee profiles","Internal matches","HRBP","Manager knowledge"],
  ["Skill planning","将来必要Skillが曖昧。","Workforce/job data","Gap analysis","CHRO","Spreadsheet planning"]
 ],
 differentiators:[
  ["Skill-centric model","Job titleよりSkill relationを中核に置く。","採用と社内Talentを同じModelで扱える。",["ATS","LinkedIn"]],
  ["External + internal talent","採用だけでなくMobility/Planningへ広い。","人材DBを単発採用で終わらせない。",["Recruiting point tools","Sourcing tools"]]
 ],
 integrations:["HRIS","ATS","Career site","Enterprise data"]
},
"harvey-legal-ai":{
 capabilities:[
  ["Legal research","法律資料・案件資料を横断して論点を調査。","Legal documents / question","Cited analysis","Manual research","調査前処理を短縮。"],
  ["Contract / document analysis","契約・大量文書の論点と差分を抽出。","Contracts / data room","Issue list / comparison","Junior review","Due diligenceをScale。"],
  ["Drafting workspace","既存Template/ContextからDraftを生成・修正。","Matter context","Draft","First draft work","Legal professionalを判断へ寄せる。"]
 ],
 useCases:[
  ["契約レビュー","大量契約を一次確認する。","Contracts","Issue summary","Legal","Manual first review"],
  ["Due diligence","Data roomを短期間で読み込む。","Documents","Risk map","M&A legal","Manual review"],
  ["Research memo","法的論点の調査に時間がかかる。","Question/sources","Memo","Lawyer","Manual research"]
 ],
 differentiators:[
  ["Legal-domain workspace","法律実務のMatter/Document contextを前提に設計。","汎用Chatより法務Workflowに深く入る。",["ChatGPT Enterprise","Microsoft Copilot"]],
  ["Professional-services orientation","Firm/法務のレビュー責任を残したままAIを組み込む。","完全自動結論ではなくExpert augmentationに寄る。",["Generic agents","Simple contract AI"]]
 ],
 integrations:["Document management","Enterprise knowledge","Legal workflows"]
},
"figure-helix":{
 capabilities:[
  ["Whole-body VLA control","視覚・言語・全身Controlを単一Policyへ統合。","Vision / instruction / proprioception","Whole-body action","個別motion program","歩行しながら両手作業を行える方向へ。"],
  ["Dexterous manipulation","手・腕・Body balanceを協調して物体操作。","Object scene","Manipulation","固定Robot cell","人向け環境で作業しやすい。"],
  ["Generalization","未知の環境・配置でもZero-shot適応を狙う。","New scene","Task execution","Site-specific programming","導入場所ごとの再Teachingを減らす可能性。"]
 ],
 useCases:[
  ["工場Material handling","人向け設備で搬送・操作したい。","Factory scene","Physical task","Manufacturing","Manual labor"],
  ["物流作業","棚・箱・道具が人間前提。","Warehouse","Pick/move","Logistics","Manual handling"],
  ["家庭/Service","未知配置で複数Taskを行う。","Home scene","General task","Service robotics","Single-purpose robot"]
 ],
 differentiators:[
  ["Human-environment compatibility","人型Bodyで既存の人間向け環境を使う。","設備側をRobot専用に作り直す必要を減らす可能性。",["Fixed arm","AMR"]],
  ["Unified whole-body policy","歩行とManipulationを別Systemに分けない。","長い一連のPhysical taskをつなげやすい。",["Traditional humanoid stacks","Teleoperation"]]
 ],
 integrations:["Humanoid hardware","Vision","Robot policy stack"]
},
"nvidia-cosmos":{
 capabilities:[
  ["Vision reasoning","Real-world映像から物体・相互作用・意図を推論。","Video / image / sensor context","Reasoning","個別Vision model","Physical AI用理解基盤を共通化。"],
  ["World generation","物理世界の複数Futureを生成しSimulationに使う。","Text/image/video/action","Synthetic worlds","実世界収集だけ","Rare scenarioを低Riskで増やす。"],
  ["Action generation / policy backbone","Robot/AVのAction model学習基盤として使う。","Embodiment data","Policy action","Task-specific model from scratch","Physical AI学習をScale。"]
 ],
 useCases:[
  ["Robot policy training","実機Dataだけでは不足。","Robot data","Trained policy","Robot R&D","Real-world-only collection"],
  ["AV simulation","Rare caseを安全に大量生成。","Driving context","Synthetic scenarios","AV team","Physical testing"],
  ["Industrial vision","Videoから異常/行動を理解。","Factory video","Reasoning/alerts","Manufacturing","Rule vision"]
 ],
 differentiators:[
  ["Reasoning + world + action in one model family","理解・Simulation・Actionを同一Physical AI stackで扱う。","Robot開発の複数基盤を統合しやすい。",["Point world models","Standalone VLMs"]],
  ["Open ecosystem / NVIDIA stack","Isaac/Jetson/Metropolis等とつながる。","日本のRobot/製造ecosystemへ入りやすい。",["Closed APIs","In-house stacks"]]
 ],
 integrations:["NVIDIA Isaac","Jetson","Metropolis","Simulation/robotics stack"]
},
"locus-array":{
 capabilities:[
  ["Autonomous mobile movement","AMRがContainer/Workを自律搬送。","Orders / facility map","Material movement","Human walking","移動工数を削減。"],
  ["Robotic picking","Robot arm + perceptionでItem/Caseを扱う。","Items / vision","Picked goods","Human picking","Goods-to-personの先へ進む。"],
  ["Fleet orchestration","複数RobotをOrder優先度に応じて配車。","WMS/orders","Optimized tasks","Manual dispatch","Throughputを施設全体で上げる。"]
 ],
 useCases:[
  ["E-commerce fulfillment","多品種Pickingの人手依存が大きい。","Orders","Picked orders","3PL/EC","Manual picking"],
  ["Case handling","Case単位作業を自動化したい。","Cases","Handled cases","Retail DC","Manual handling"],
  ["Peak operation","繁忙期だけ人員確保が難しい。","Demand","Scaled fleet work","Warehouse","Temp labor"]
 ],
 differentiators:[
  ["AMR + manipulation","移動支援だけでなくRobot armまで組み合わせる。","倉庫工程を一段深く自動化できる。",["AMR-only systems","Manual picking"]],
  ["Brownfield-friendly direction","既存施設へ段階導入しやすいAMR思想。","巨大固定設備より移行を抑えやすい。",["Symbotic","Conveyor automation"]]
 ],
 integrations:["WMS","Warehouse controls","AMR fleet","Robotic arms"]
},
"symbotic-system":{
 capabilities:[
  ["High-speed case handling","高速Robot/ConveyorでCaseを搬送・順序制御。","Cases / orders","Sequenced outbound","Manual pallet/case work","大型DCのThroughputを上げる。"],
  ["Dense automated storage","在庫を高密度に保管しSystemが位置を管理。","Inventory","Optimized storage","Traditional racking","Facility footprint効率を改善。"],
  ["Facility orchestration","Storage・Robot・Orderを一つのSystemで制御。","WMS/orders","End-to-end flow","複数設備の個別制御","DC全体最適へ。"]
 ],
 useCases:[
  ["Retail DC","大量Caseを店舗別に高速処理。","Store orders","Sequenced cases","Large retailer","Manual DC"],
  ["Wholesale distribution","大規模在庫を自動保管・出荷。","Inventory/orders","Automated flow","Wholesale","Conventional automation"],
  ["Network modernization","複数大型拠点を標準化。","Facility program","Standard automation","Enterprise logistics","Site-by-site systems"]
 ],
 differentiators:[
  ["Facility-scale system","Robot製品ではなく大型DC全体を一体設計。","ThroughputとStorageを同時に最適化。",["Locus","Point robots"]],
  ["High-volume case automation","Case単位の巨大Volumeに特化。","大手小売・卸のScaleで強みが出る。",["Exotec","AMR systems"]]
 ],
 integrations:["WMS","Warehouse infrastructure","Enterprise supply chain"]
},
"meta-ai-glasses":{
 capabilities:[
  ["First-person vision context","Cameraがユーザーと同じものを見てAIへContextを渡す。","Visual scene / voice","Contextual answer","Phone camera操作","『これ』を説明せず質問できる。"],
  ["Hands-free voice interaction","眼鏡を外さずVoiceでAIを呼び出す。","Voice","Audio/display response","Phone unlock/app launch","AI呼び出し摩擦を下げる。"],
  ["Translation / navigation context","周囲のText・場所を見ながら支援。","Scene / language / location","Guidance","Phone translation/navigation","移動中のHands-free利用に向く。"]
 ],
 useCases:[
  ["旅行/翻訳","Phoneを取り出さず周囲を理解したい。","Scene/voice","Translation/guidance","Traveler","Phone translation"],
  ["Field support","両手を使う作業中に情報を確認。","Visual task","Instructions","Field worker","Tablet/manual"],
  ["Personal memory","見たもの・聞いたものをContextにしたい。","Daily context","Recall/answer","Consumer","Manual capture"]
 ],
 differentiators:[
  ["AI shares your viewpoint","AIがユーザーの視界Contextを直接得る。","スマホよりInput操作を減らせる。",["Smartphone AI","Earbuds"]],
  ["Socially wearable form","専用Gadget感を抑えた眼鏡形状。","日常利用時間を伸ばしやすい。",["Headsets","AI pins"]]
 ],
 integrations:["Meta AI","Camera","Audio","Mobile companion"]
},
"plaud-notepin":{
 capabilities:[
  ["Wearable capture","Pin/Clip/Wristで会話をすぐ録音。","Conversation audio","Recording","Phone操作","記録開始の摩擦を減らす。"],
  ["Transcription + summary","音声を文字起こし・要約・Action item化。","Audio","Notes / tasks","Manual minutes","会議後処理を短縮。"],
  ["Searchable memory","蓄積した会話を後から検索・質問する。","Past recordings","Recall / answer","Manual note search","個人のExternal memoryになる。"]
 ],
 useCases:[
  ["会議","話しながらNotesを取りたくない。","Meeting audio","Minutes/tasks","Manager","Manual note"],
  ["営業訪問","会話内容とNext actionを残したい。","Customer conversation","CRM-ready notes","Sales","Memory/manual memo"],
  ["Interview","質問に集中し後で整理したい。","Interview audio","Transcript/summary","Researcher","Manual transcription"]
 ],
 differentiators:[
  ["Dedicated wearable capture","Phoneを机に置くより常時持ちやすい。","Capture開始の行動コストが低い。",["Otter","Phone recorder"]],
  ["Capture-to-memory workflow","録音で終わらず検索可能なKnowledgeへ。","過去会話をAI Contextとして再利用できる。",["Recorder","Transcription-only tools"]]
 ],
 integrations:["Plaud app","Export","AI templates"]
},
"rabbit-r1":{
 capabilities:[
  ["Voice-first AI interface","専用Button/VoiceでAIを即呼び出す。","Voice","Answer/action","Phone app launch","AI利用開始までの操作を減らす。"],
  ["Camera vision","Cameraで見た対象についてAIへ質問。","Image/scene","Visual answer","Phone photo upload","現実世界をInputにしやすい。"],
  ["Agent/computer interaction direction","AIが複数Tool/Computer操作へ進むOS思想。","Intent","Task result","Manual app navigation","App単位操作からIntent単位へ。"]
 ],
 useCases:[
  ["Quick query","Phoneを開かずすぐ聞きたい。","Voice","Answer","Early adopter","Phone assistant"],
  ["Visual question","目の前の物をAIに聞きたい。","Camera","Analysis","Consumer","Photo + chat"],
  ["AI experiment","専用AI deviceの新しい操作系を試したい。","Intent","Agent result","Developer/enthusiast","Mobile app"]
 ],
 differentiators:[
  ["Dedicated AI hardware","AIだけを呼び出す物理Device。","Phoneの通知・App構造から切り離した体験。",["Smartphone","ChatGPT app"]],
  ["OS-level interaction experiment","『Appを選ぶ』より『目的を言う』思想。","次世代UIの実験として価値。",["Traditional mobile OS","Voice assistants"]]
 ],
 integrations:["rabbit OS","Camera","Cloud AI"]
},
"adobe-firefly":{
 capabilities:[
  ["Enterprise-safe generation","Image/Video等をAdobe ecosystem内で生成。","Prompt / assets","Creative media","External generation tools","既存Creative環境へ導入しやすい。"],
  ["Creative Production","大量Resize/Variation/背景処理等をWorkflow化。","Assets / rules","Bulk variants","Manual production","量産工程を自動化。"],
  ["Firefly Graph","Node-basedに生成・編集工程を再利用可能なFlowへする。","Models / nodes / assets","Reusable workflow","Prompt-by-prompt work","生成手順自体を資産化。"]
 ],
 useCases:[
  ["広告Variation","媒体・市場別に大量差分が必要。","Master assets","Variants","Creative Ops","Manual resizing/editing"],
  ["商品Creative","SKUごとの背景/素材制作が重い。","Product assets","Commerce media","Retail marketing","Photo editing"],
  ["Enterprise AI standard","部署ごとの生成AI利用を統制したい。","Brand/model policy","Controlled AI workflow","IT/Creative","Shadow AI"]
 ],
 differentiators:[
  ["Creative Cloud continuity","Photoshop/Premiere等既存制作環境と連続。","AIだけ別Toolに分断されにくい。",["Runway","Standalone AI tools"]],
  ["Enterprise governance + IP posture","企業利用を意識した権利・管理設計。","大企業調達で説明しやすい。",["Consumer generators","Small AI vendors"]]
 ],
 integrations:["Photoshop","Illustrator","Premiere","Creative Cloud","Enterprise APIs"]
}
};

for(const [slug,patch] of Object.entries(specialized)){
  if(P[slug]) P[slug]={...P[slug],...patch} as Profile;
}


const researchedOverrides:Record<string,Partial<Profile>>={
"heygen-avatar-video":{
  source:"https://www.heygen.com/ja-jp/enterprise-api",
  capabilities:[
    ["Video Translation API","既存動画を175以上の言語・方言へ翻訳し、音声とLip-syncまでローカライズする。","既存動画 / 対象言語 / Transcript","翻訳済み動画","吹替収録・字幕制作・Lip-sync調整","海外展開のたびに撮り直す工程を大きく減らせる。"],
    ["Video Agent API","社内WikiやKnowledge baseを入力に、AIが動画化する。","Wiki / Knowledge base / Prompt","説明・研修・Onboarding動画","企画→台本→Avatar動画の手作業","更新頻度の高いKnowledgeを動画へ継続変換できる。"],
    ["Template / Batch API","編集可能なTemplateを使い、個別化動画をBatchで大量生成する。","Template / CRM・顧客Data / Script","個別化された大量動画","1本ずつの編集・書き出し","動画をCampaignやProductのInfrastructureとして組み込める。"],
    ["Avatar / Voice stack","Avatar・Voice・Image・Music等をAPIから組み合わせる。","Avatar / Voice / Script / Assets","Production-ready video","撮影・ナレーション収録","Presenter動画の制作工程をAPI化できる。"]
  ],
  useCases:[
    ["製品ローンチの多言語化","同じ製品動画を市場ごとに再収録している。","Master video / target locales","175+言語・方言のLocalized video","Global Marketing","吹替・字幕・再編集"],
    ["研修動画の自動更新","社内Wiki更新のたびに動画も手直ししている。","Wiki / SOP / Knowledge base","更新版Training video","L&D","台本作成・Avatar動画制作"],
    ["顧客別Onboarding","顧客名・Plan・利用機能ごとに説明動画を作り分けたい。","Template / customer data","Personalized onboarding video","Customer Success","個別編集"],
    ["Product内動画生成","自社Serviceの中から動画を直接生成したい。","API request / assets","Rendered video","Product Team","外部制作Toolへの手動Export"]
  ],
  differentiators:[
    ["Video infrastructure orientation","Avatar単体ではなく、Translation・Video Agent・Template・VoiceをAPIで提供する。","『動画を作るTool』より『動画生成を自社Workflowに埋め込む基盤』として評価できる。",["Synthesia","Runway"]],
    ["Localization scale","175以上の言語・方言とLip-syncをEnterprise APIで扱う。","Global marketingやTrainingで、多言語版制作のOperationを圧縮できる。",["Runway","Traditional dubbing"]],
    ["Agent-ready API","RESTに加えMCP・typed schemaを用意し、Agentから動画生成を呼び出せる。","AI Agentが動画を成果物として生成するWorkflowを作りやすい。",["Synthesia","Traditional video APIs"]]
  ],
  limitations:["映画的な編集・VFX・自由なScene generationはRunway系が向く","AvatarやVoiceを使う場合は本人同意・Brand ruleの運用が必要","大量生成ではAPI利用量・Concurrency・動画尺を含めたTCO確認が必要"],
  pricing:{plans:[{name:"API Pay-as-you-go",monthly:"$5から開始可能",notes:"Video Agent / TTS / Generation / Translation等を利用"},{name:"Enterprise",monthly:"Contact Sales",notes:"高Concurrency・Reserved compute・Custom workflow"}],enterprise:"Contact Sales",api:"Pay-as-you-go + Enterprise",tco:"生成本数、尺、翻訳言語数、Avatar/Voice、Concurrencyで変動"},
  japanese:{ui:"日本語公式ページあり",input:"日本語利用可",output:"日本語を含む多言語対応",docs:"英語中心＋日本語製品情報",support:"Enterpriseは個別確認",note:"日本語対応の有無より、固有名詞・敬語・Lip-sync品質を実動画で確認したい。"},
  integrations:["REST API","MCP Server","HeyGen Skills","Webhooks","Batch API"],
  enterprise:["SSO","Audit","Security"],
  support:{level:"Self-serve / Enterprise",details:["Developer docs","API keyで即試用","EnterpriseはForward-deployed engineerによるCustom workflow対応"]},
  automation:{domain:"Programmatic video production",current:3,target:4,decision:"Brand・内容・公開可否は人間。動画化・翻訳・個別化はAPI/Agentへ委任できる。",execution:"生成・翻訳・Batch renderingまで実行。",loop:"Partial",future:"Knowledge更新をTriggerにAgentが市場別動画を生成し、人間は承認中心へ。",assumption:"動画は制作担当者が1本ずつ編集・翻訳・書き出す前提。"},
  bestFor:["多言語・大量・個別化されたPresenter動画をAPIで運用したい","自社ProductやWorkflowへ動画生成を埋め込みたい"],
  notFor:["映画・CMの自由度高い生成編集が中心","APIではなく1本の作品品質だけを最優先する"]
},
"synthesia-enterprise-video":{
  source:"https://www.synthesia.io/enterprise",
  capabilities:[
    ["Create → Publish workflow","Script・PowerPoint・Document・URL等から動画を作り、共同編集・管理・公開まで一つのPlatformで行う。","Script / PPT / Document / URL / Prompt","公開可能なEnterprise video","撮影・編集・別々の管理Tool","企業動画の制作から配信までを一本化できる。"],
    ["Video Localization","既存動画を160以上の言語へ翻訳し、Review・編集・Viewer言語に応じた再生まで行う。","Source video / target languages","Localized video library","外部翻訳Vendor・再収録","Global trainingやProduct updateを同時展開しやすい。"],
    ["Governance & Brand control","Versioning・Audit logs・Brand guardrails・SAML/SSOで組織利用を統制する。","Workspace / roles / Brand rules","Governed video operation","部門ごとの野良制作","Enterpriseで生成AI動画を標準化しやすい。"],
    ["Interactive Sessions","Avatarと対話するRoleplay・Surveyを提供する。","Scenario / questions / Avatar","Interactive training / survey session","人間Coach・Interview","動画視聴だけでなく練習・Insight収集へ用途を広げる。"]
  ],
  useCases:[
    ["全社Training","研修動画の制作・翻訳・更新が部門ごとに分断。","Policy / PPT / Script","Governed multilingual training","L&D","撮影・翻訳Vendor・LMS素材更新"],
    ["Sales roleplay","営業会話の練習相手と評価者が不足。","Scenario / objection rules","Interactive Avatar session","Sales Enablement","人間Coachの一部"],
    ["Global product update","Releaseごとに各国版を作り直している。","Master video / release notes","Localized updates","Product Marketing","再収録・字幕制作"],
    ["Personalized video API","自社Dataから顧客ごとに動画を作りたい。","Customer data / Template","Personalized video","Product / CS","個別制作"]
  ],
  differentiators:[
    ["Enterprise video lifecycle","Create・Translate・Manage・Publish・Engageを同一Platformで持つ。","動画生成Model単体ではなく、企業のVideo operation全体を置き換えやすい。",["HeyGen","Runway"]],
    ["Governance depth","Audit logs、Brand guardrails、SAML/SSO、SOC2/GDPR/ISO42001を前面に出す。","Legal/ITが関与する大企業導入で説明しやすい。",["HeyGen","Consumer video tools"]],
    ["Interactive Avatar Sessions","Roleplay・Surveyの双方向会話を動画Platform内に持つ。","L&DやResearchを『見る動画』から『対話する体験』へ広げる。",["Traditional e-learning","Static video"]]
  ],
  limitations:["広告・映画の自由な映像生成/編集を主目的にするとRunway等が向く","Stock/Synthetic Avatarの商用利用には用途別License制限があるためPaid広告等は事前確認が必要","Enterpriseの価値はGovernance込みなので小規模単発利用ではOverkillになり得る"],
  japanese:{ui:"日本語利用は可能・UI範囲は要確認",input:"日本語Script対応",output:"日本語を含む160+言語Localize",docs:"英語中心",support:"Enterprise個別確認",note:"日本語音声品質だけでなく、Review workflowとLicense条件を用途別に確認。"},
  integrations:["Video Creation API","Interactive Avatar API","Dubbing / Translation API","Enterprise SSO"],
  enterprise:["SSO","Audit","Security"],
  support:{level:"Enterprise strong",details:["Managed services","Team collaboration","Enterprise onboarding","AI governance / security"]},
  automation:{domain:"Enterprise video operations",current:3,target:4,decision:"何を伝えるか・Brand/Legal承認は人間。制作・翻訳・Version管理の多くをPlatformへ移せる。",execution:"生成・翻訳・公開Workflowを実行。",loop:"Partial",future:"Source資料更新から多言語動画改訂・配信までHuman-on-the-loop化。",assumption:"企業動画は撮影・翻訳・管理・配信を別々のTool/Vendorで行う前提。"}
},
"minimax-multimodal":{
  source:"https://www.minimax.io/news/minimax-h3-open-source",
  capabilities:[
    ["MiniMax H3 omni-modal video","Text・Image・Video・Audioを同時に理解し、Native stereo audio付きVideoを生成する。","Text / Image / Video / Audio context","4–15秒・最大2KのVideo + stereo audio","映像生成と音声生成の分離","映像と音を別工程で合わせる必要を減らす。"],
    ["M3 / M2.x Agentic model","Long-context・Coding・Tool use・Multimodal understandingをAPIやAgentで提供する。","Messages / multimodal context / tools","Text / code / tool actions","単一用途LLM","VideoだけでなくAgent/Coding stackも同じVendorで選べる。"],
    ["Speech API","WebSocketを含むTTS APIでStreaming音声を生成する。","Text / voice setting","Streaming speech","別TTS vendor","Realtime Voice機能を同じOpen Platformで組み込める。"],
    ["Open Platform pricing","Language・Video・Speech等を同じAPI Platformで従量利用する。","API key / model request","Model response","複数Vendor契約","複数Modalの調達とBillingをまとめられる。"]
  ],
  useCases:[
    ["映像＋音声を一体生成","動画生成後にBGM/Voiceを別Toolで足している。","Multimodal prompt / reference media","Native-audio video","Creative / Media","Video + audio別生成"],
    ["AI Coding / Agent","CodingとTool useを自社Workflowへ入れたい。","Repository / tasks / tools","Code / tool actions","Developer team","単発Chat model"],
    ["Realtime Voice","低Latencyな音声生成をServiceへ組み込みたい。","Text stream / voice settings","Streaming speech","Voice product","別TTS stack"],
    ["Multi-model procurement","Text・Video・Speechを複数Vendorから買っている。","Mixed workloads","Single-platform model access","AI Platform team","複数Vendor管理"]
  ],
  differentiators:[
    ["Full-modality model portfolio","Language・Video・Speech・Musicまで自社Model群を持つ。","単一のVideo SaaSではなく、複数ModalのModel providerとして比較すべき。",["Runway","ElevenLabs"]],
    ["H3 native audio video","H3はVideo生成とNative stereo audioを一体で扱う。","映像と音の後工程を減らし、短尺コンテンツの完成度を一回の生成で上げられる。",["Silent video models","Separate audio stacks"]],
    ["Open weights / local deployment direction","M2.x系でOpen weightsやLocal deploymentの選択肢を持つ。","API lock-inを抑えたいDeveloperには比較軸になる。",["Closed API models","SaaS-only tools"]]
  ],
  limitations:["H3は短尺4–15秒のVideo中心で、Enterprise制作Workflowそのものを提供する製品とは別物","Modelごとに能力・料金体系が異なるため『MiniMax全体』で一括比較すると誤解しやすい","日本語Support・国内契約・Enterprise governanceは個別確認が必要"],
  pricing:{plans:[{name:"MiniMax H3 2K",monthly:"$0.13 / 秒",notes:"Video generation list price"},{name:"MiniMax H3 768P",monthly:"$0.08 / 秒",notes:"Video generation list price"},{name:"Language models",monthly:"Token従量",notes:"M3等はToken課金"}],enterprise:"Open Platform / Enterprise条件を確認",api:"Pay-as-you-go",tco:"Video秒数・解像度・Text token・Speech量をModal別に積算"},
  japanese:{ui:"英語中心",input:"Modelにより日本語可",output:"Modelにより日本語可",docs:"英語中心",support:"要確認",note:"『日本語対応』を一括で書かず、M3/H3/Speechごとに実タスクで確認すべき。"},
  integrations:["Open Platform API","WebSocket TTS","Open weights / local deployment options"],
  automation:{domain:"Foundation models / multimodal generation",current:2,target:3,decision:"どのModelをどのTaskへ使うかは開発側。Model自体は生成・Tool useを担う。",execution:"Text/Code/Video/Speech生成と一部Tool action。",loop:"Partial",future:"Agentが複数ModalのModelを選び、生成・評価・Tool useをつなぐ。",assumption:"Text・Video・Speechは別々のAI Vendorを組み合わせる前提。"}
},
"applied-intuition-platform":{
  source:"https://resource.applied.co/app-eng-candidates",
  capabilities:[
    ["Virtual vehicle testing","Simulation / Sensor simulationでADAS・Autonomyを実車外で検証する。","Scenario / sensor model / vehicle model / pass-fail rules","Simulation run / metrics / failure evidence","実車試験の一部","Rare caseを含む大量Scenarioを再現可能なSoftware testへ移せる。"],
    ["VehicleOS / CoreOS","Safety-critical OSとPOSIX系OS、OTA・Diagnostics・Middleware・Networking等をCentral compute向けに提供する。","Vehicle hardware / SoC / ECU interfaces","Onboard vehicle software platform","OEMごとの基盤Software内製","SDVの土台をProgramごとにゼロから作る工数を削減する。"],
    ["SIL / HIL infrastructure","Software-in-the-loop / Hardware-in-the-loopで車載Softwareを統合・検証する。","Vehicle software / virtualized hardware / HIL","Validation evidence","実機依存のIntegration test","Hardwareが揃う前から統合・検証を進められる。"],
    ["Physical AI / Autonomy tooling","VLA・World model・Reconstruction等も含むPhysical AI開発基盤へ広げる。","Driving / robotics data","Training / evaluation workflow","個別Research stack","Simulation・Data・Onboard softwareを一社でつなげられる。"]
  ],
  useCases:[
    ["ADAS Sensor validation","雨天など特定条件で検知性能を検証したい。","Sensor / scenario models","Pass-fail simulation","ADAS team","実車走行のみ"],
    ["Vehicle software platform","複数車種・SoCでCore softwareを再利用したい。","Vehicle architecture / compute","VehicleOS","OEM platform team","Program別内製"],
    ["Autonomous trucking","Autonomy stackの開発・検証Toolchainを整備したい。","Truck data / scenarios","Validated autonomy workflow","Autonomy team","自社Tool群"],
    ["Pre-hardware integration","ECU/Hardware完成前にSoftware統合を進めたい。","Virtual platform / software","SIL/HIL validation","Vehicle software team","Hardware待ち"]
  ],
  differentiators:[
    ["Simulation to onboard software breadth","SimulationだけでなくVehicleOS・Autonomy・Infrastructureまで持つ。","『検証Tool Vendor』ではなくSDV/Physical AI stack全体へ入り込める。",["dSPACE","Ansys"]],
    ["Automotive production depth","OTA・Diagnostics・QNX/Linux/Android・SIL/HIL等Production vehicle softwareまで扱う。","Research prototypeではなく量産ProgramのSoftware architectureへ入りやすい。",["NVIDIA simulation","Point tools"]],
    ["Japan OEM proof","ToyotaのSensor simulation、IsuzuのAutonomous trucking支援など日本OEMでの公開Use caseがある。","日本市場で『使えるか』を推測だけでなく実績ベースで見られる。",["New entrants","Generic simulation tools"]]
  ],
  limitations:["SaaSのような即日導入ではなく、OEM Program単位の重いIntegrationになりやすい","価格・契約はEnterprise個別見積で比較しづらい","価値がSimulation、VehicleOS、Autonomyで異なるため導入目的を絞らないと評価がぼやける"],
  japanese:{ui:"製品により要確認",input:"日本語非依存",output:"日本語非依存",docs:"英語中心",support:"Tokyo office / 日本OEM支援実績あり",note:"日本語UIより、国内Postsales・Integration Engineerの支援範囲を確認する方が重要。"},
  integrations:["Simulation pipelines","SIL/HIL","Vehicle hardware / ECUs","CI/CD","Cloud/HPC","VehicleOS"],
  enterprise:["Security"],
  support:{level:"High-touch enterprise",details:["Technical Customer Lead","Postsales Engineer","Integration Engineer","Onsite workshops / custom integration"]},
  automation:{domain:"Vehicle software & autonomy development",current:3,target:4,decision:"Safety target・Release可否はOEM/Engineeringが保持。Simulation・Validation・一部Data workflowは自動化できる。",execution:"Scenario実行・Pass/Fail評価・Software validationまで深く実行。",loop:"Strong",future:"Real-world data→Scenario生成→Simulation→評価→Software改善のClosed loopへ。",assumption:"車両Softwareの検証は実車/実機が揃ってから始める前提。"}
},
"wayve-ai-driver":{
  source:"https://wayve.ai/technology/av2-0/",
  capabilities:[
    ["End-to-end AI Driver","Camera・Radar等のSensor入力からDriving outputまでを単一のlearned AI Driverで扱う。","Camera / radar / vehicle context","Steering / braking / driving action","Sense-plan-act型の多数Module","手設計Module間のIntegration complexityを減らす。"],
    ["Mapless generalization","HD mapや都市ごとの詳細Ruleへの依存を抑え、新しい都市・Roadへ展開する。","Live sensor input / learned world understanding","Driving in new geographies","City-by-city map build","地域展開前のMap作成・Rule tuning負荷を下げる思想。"],
    ["Cross-vehicle adaptation","車両・Sensor構成をまたいで学習したDriving intelligenceを適用する。","Vehicle/sensor data","Vehicle-specific AI Driver","Vehicleごとのstack構築","OEM横展開を前提にできる。"],
    ["Safety 2.0","World understandingとFail-operational / Redundancyを組み合わせてSafetyを設計する。","Driving context / safety constraints","Safe driving behavior","Rule-only safety layer","Long-tail scenarioへの対応を学習ベースで狙う。"]
  ],
  useCases:[
    ["新都市へのAutonomy展開","都市ごとにHD mapとRuleを作ると展開コストが高い。","Fleet data / sensor feed","AI Driver deployment","Mobility operator","City-specific AV stack"],
    ["OEM向けAI Driver","複数車種に自動運転Softwareを載せたい。","Vehicle interface / sensors","Integrated AI Driver","OEM","内製AV stack"],
    ["Robotaxi","無人Ride-hailingで人間Driver依存を減らしたい。","Vehicle / city operation","Autonomous ride","Mobility platform","Human driver"],
    ["Assisted driving","同じFoundation model思想を段階的なDriving automationへ使いたい。","Sensor data","Driving assistance","OEM","Rule-based ADAS"]
  ],
  differentiators:[
    ["AV2.0 vs AV1.0","HD map・手書きRule・Modular stackではなくEnd-to-end learned AIを中核に置く。","Wayveを単なる『自動運転会社』ではなくAutonomy architectureの違いで比較できる。",["Waymo","Mobileye"]],
    ["Generalization-first","都市・車両・Sensor・道路環境をまたぐGeneralizationを製品思想の中心に置く。","City-by-city deployment costを下げる可能性が最大の差分。",["Traditional AV1.0","Map-heavy autonomy"]],
    ["Mapless deployment","HD mapを必須にしない。","新しい地域への展開準備を軽くできる可能性がある。",["HD-map-centric systems","Rule-based stacks"]]
  ],
  limitations:["Safety validation・法規・Liabilityが導入速度を決め、Software性能だけでは展開できない","Maplessでも車両Integration・Sensor calibration・地域検証は必要","一般企業向けSaaSではなくOEM/Mobility向けStrategic product"],
  automation:{domain:"Autonomous driving",current:4,target:5,decision:"定義されたOperating条件でDriving判断をAIへ渡す。Service policy・Safety case・例外設計は人間。",execution:"Sensor入力からSteering/Brakingまで車両制御を実行。",loop:"Strong",future:"人間Driverが常時監視しないAutonomous mobilityを複数都市へScale。",assumption:"自動運転は都市ごとにHD mapと大量の手書きRuleを作り込む必要がある前提。"}
},
"sierra-agent-os":{
  source:"https://sierra.ai/jp/product",
  capabilities:[
    ["Secure business actions","CRM・Order management等へ接続し、Subscription変更やWarranty申請などをAgentが実行する。","Customer request / authenticated account / policy","Updated subscription / submitted warranty / resolved action","Operatorの画面操作","Q&Aで止まらずResolutionまで自動化できる。"],
    ["Single agent across channels","Chat・Voice・Email・SMS等へ同じAgentを展開する。","Conversation across channels","Consistent branded interaction","Channel別Bot/IVR","Channelごとの別設計を減らせる。"],
    ["Agent Data Platform / Memory","過去会話とCRM・Billing・Inventory等の構造化Dataを統合し、継続Contextを持つ。","Conversation history / company data","Personalized next action","ConversationごとのContext reset","単発応答から継続RelationshipへAgentを進化させる。"],
    ["Insights / Expert Answers","大量Conversationを分析し、失敗原因や改善点を見つけ、Knowledge更新へ戻す。","Conversation logs / outcomes","Issue diagnosis / new knowledge","人手QA・Sample review","Agent運用そのものを改善Loop化できる。"],
    ["Agent Studio / SDK","No-code StudioとCode-based SDKの両方でJourney・Guardrail・Actionを定義する。","SOP / calls / goals / code","Production agent","Prompt-only configuration","CX担当とDeveloperの両方が同じAgent基盤を使える。"]
  ],
  useCases:[
    ["契約・Plan変更","FAQ回答後にOperatorが別Systemで変更している。","Customer identity / subscription data","Changed plan","Customer Care","Operator action"],
    ["返品・保証申請","注文確認・条件判定・申請が複数Systemに分かれる。","Order / warranty policy","Processed return / warranty","E-commerce CX","Manual workflow"],
    ["24/7 Contact Center","電話・Chat・Emailで別々のTeam/Toolを使っている。","Cross-channel conversation","Unified resolution","CX Ops","Channel-specific support"],
    ["Churn prevention","過去接点や利用状況を見て先回り提案したい。","History / billing / behavior","Next-best action","Retention team","Manual segmentation"]
  ],
  differentiators:[
    ["Resolution over answer","Knowledge回答ではなくSystem of recordへ接続してActionまで行う。","Contact center自動化を『応答率』ではなく『解決率』で設計できる。",["FAQ chatbot","Basic RAG bot"]],
    ["Memory + enterprise data","会話履歴とStructured dataをAgent Data Platformで継続Context化する。","問い合わせ単発処理からCustomer relationshipへ広げられる。",["Stateless bots","Point agents"]],
    ["Build–run–improve loop","Ghostwriter/Studioで構築し、Insightsで失敗を分析、Expert AnswersでKnowledge改善へ戻す。","AI Agentを導入して終わりではなく運用改善までPlatform化している。",["Custom LLM stack","Point chatbot tools"]],
    ["40+ prebuilt integrations","Agent Studioから多数の既成Integration＋Custom integrationを利用できる。","Backend actionの立ち上げを短縮できる。",["Custom agent framework","FAQ-only tools"]]
  ],
  limitations:["Action権限を渡すほどIdentity・Approval・Rollback設計が重要","高額補償・法的例外・感情的なEscalationはHuman handoff前提で設計すべき","Pricingが公開されておらずTCO比較には見積が必要"],
  japanese:{ui:"日本語公式サイトあり",input:"多言語Agent対応",output:"多言語Agent対応",docs:"日本語製品情報あり",support:"Enterprise個別確認",note:"日本語対応そのものより、国内System連携・Voice品質・運用支援範囲をPoCで確認。"},
  integrations:["40+ pre-built integrations","Custom integrations","CRM / order management / knowledge bases","Contact center","Agent SDK"],
  enterprise:["Security"],
  support:{level:"Enterprise",details:["Agent Studio","Agent SDK","Live Assist","Insights","Contact center handoff"]},
  automation:{domain:"Customer experience operations",current:4,target:5,decision:"Journey・Guardrail・高リスク例外は人間が設定。定型判断と次ActionはAgentへ渡せる。",execution:"会話、System lookup、Subscription変更、Warranty等のActionまで実行。",loop:"Strong",future:"Conversation→Action→Outcome分析→Agent改善までClosed loop化し、人間はPolicyと例外に集中。",assumption:"Customer serviceはAgentが答えても、実際の処理は人間Operatorが行う前提。"}
}
};

for(const [slug,patch] of Object.entries(researchedOverrides)){
  if(P[slug]) P[slug]={...P[slug],...patch} as Profile;
}

export const enrichProductCatalog=(p:BaseProduct)=>{
  if(p.decision) return p;
  const cfg=P[p.slug];
  if(!cfg) return p;
  return enrich(p,cfg);
};
