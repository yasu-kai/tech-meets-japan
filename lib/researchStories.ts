export type ResearchStory = {
  slug:string;
  category:string;
  eyebrow:string;
  title:string;
  dek:string;
  thesis:string;
  companies:string[];
  depth:{current:string;target:string;human:string};
  sections:{heading:string;body:string[]}[];
  sources:{label:string;url:string}[];
  hero?:string;
};

export const researchStories:ResearchStory[] = [
{
slug:"coding-agents",category:"ai-work",eyebrow:"AI × WORK / DEVELOPMENT",
title:"Coding Agentは、プログラマーの何を奪うのか。",
dek:"Replit、Cursor、Devin。コード補完の競争から、タスクを受け取り、実装し、テストし、証拠を残して返す“開発主体”の競争へ。",
thesis:"Coding Agentの本当の変化は、コードを書く速度ではない。『実装する人間が常にPCの前にいる』という前提を崩し始めたことだ。",
companies:["Replit","Cursor","Devin"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"要件定義、設計判断、レビュー、権限管理、本番責任"},
sections:[
{heading:"補完から、仕事の委任へ。",body:[
"AIコーディングの第一段階は、入力途中のコードを予測して補完することだった。次にチャットで質問し、複数ファイルを編集するCopilot型へ進んだ。そして現在の競争は、ひとつの実装タスクを渡したあと、人間が離れている間にどこまで完了できるかへ移っている。",
"CursorのCloud Agentsは専用の仮想環境でリポジトリを読み、計画し、コードを編集し、コマンドを実行し、テストし、Pull Requestを作る。Replit Agentも、自然言語からアプリを組み上げ、実行環境・データベース・認証・公開まで同じ場所でつなごうとしている。ここではIDEそのものより、『開発業務を引き受ける単位』が変わっている。"
]},
{heading:"自律性を決めるのは、コード生成能力だけではない。",body:[
"長時間動けること、失敗を検知できること、修正して再実行できること、そして結果を人間が検証できる形で返せること。この閉ループが成立して初めて、Coding Agentは単なる高性能な補助ツールから仕事の委任先になる。",
"そのため企業導入で重要になるのはモデルのベンチマークだけではない。どのリポジトリへ入れるか、Secretsやネットワークをどこまで許可するか、どの変更を自動でマージしてよいか、どの証拠を残すか。開発能力の競争は、そのまま権限設計の競争になる。"
]},
{heading:"人間はコードを書かなくなるのか。",body:[
"すべての開発者が消える、という見方は早い。むしろ最初に減るのは、仕様が比較的明確で、成功条件をテストで定義できる仕事だ。バグ修正、テスト追加、定型的な機能実装、移行作業などは、Agentへ切り出しやすい。",
"一方で、曖昧な要求をどう製品へ落とすか、何を作らないか、既存アーキテクチャとどう折り合うか、失敗時にどこまでリスクを取るかは人間側に残る。成功した世界では、開発者は『コードを書く人』より、『複数の開発Agentへ仕事を設計して渡し、成果を統合する人』へ近づく。"
]},
{heading:"日本企業にとっての論点。",body:[
"日本では、生成AIの導入可否よりも、ソースコードや顧客データをどこまで外部環境へ出せるか、誰が最終承認するか、既存の開発標準へどう組み込むかが導入速度を左右する可能性が高い。Agent導入は個人の生産性ツールではなく、開発プロセス設計の変更として考えた方がいい。",
"特に注目したいのは『非エンジニアが作れるか』より、『エンジニアが同時に何本の仕事を監督できるか』だ。そこが変われば、開発組織の人数設計そのものが変わる。"
]}
],
sources:[
{label:"Replit — Agent 4",url:"https://replit.com/blog/introducing-agent-4-built-for-creativity"},
{label:"Replit — Agent",url:"https://replit.com/products/agent"},
{label:"Cursor — Background / Cloud Agents",url:"https://prod.cursor.com/help/ai-features/background-agents"},
{label:"Cognition — Devin Knowledge Base",url:"https://knowledge.cognition.ai/"}
]
},
{
slug:"ai-sales",category:"ai-work",eyebrow:"AI × WORK / SALES",
title:"AI Salesは『提案』ではなく『営業活動』を代替できるか。",
dek:"リード探索、調査、優先順位付け、パーソナライズ、送信、反応分析。AIは営業の“前工程”を一つの連続した運用へ変え始めている。",
thesis:"AI Salesの本質は、メール文面を作ることではない。『誰に・いつ・何を送るか』を連続的に判断する運用へ近づいていることだ。",
companies:["Clay","11x","Artisan"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"市場仮説、ICP、重要商談、価格・契約、ブランド責任"},
sections:[
{heading:"営業AIは、文章生成から離れ始めた。",body:[
"数年前まで営業での生成AI活用といえば、メール文面や提案書の下書きが中心だった。現在は、企業データの収集、シグナル検知、候補企業のスコアリング、担当者特定、個別文面生成、シーケンス投入までをつなぐ方向へ進んでいる。",
"Clayは、複数データソースを組み合わせたEnrichment、Claygentによる調査・判断、Sequencerによる配信を一つの流れへ統合している。重要なのは、AIが単独で“営業する”ことより、従来SDRが大量の時間を使っていた前処理を、イベント駆動で常時回せるようになった点だ。"
]},
{heading:"勝負は『自動化率』ではなく、判断の質。",body:[
"営業は自動化しやすそうに見えて、実際には例外が多い。採用が増えた、資金調達した、新製品を出した、といったシグナルがあっても、それが自社商材にとって本当に購買タイミングなのかは別問題だ。",
"だからAI Salesで重要なのは送信件数ではなく、シグナルをどう解釈し、誰を除外し、どの文脈で接触するか。自動化を増やしすぎれば、古いデータや誤った推論を大量配信するリスクも増える。AIが強くなるほど、Human oversightの設計が重要になる。"
]},
{heading:"人間に残るのは、関係構築と例外処理。",body:[
"定型的なProspectingやResearchはAIへ移しやすい。一方で、重要顧客への提案、複雑な社内政治の把握、価格交渉、契約条件、失注理由の本質的理解などは人間が残りやすい。",
"営業担当者の仕事がなくなるというより、低付加価値な『探す・調べる・入力する』が減り、『誰を攻めるか』『どんな仮説を持つか』『どの案件に時間を使うか』へ集中する構造が見えてくる。"
]},
{heading:"日本企業で起きるのは、SDRの再設計かもしれない。",body:[
"日本ではAI SDRをそのまま人員置換として入れるより、既存営業の前工程を圧縮する使い方から広がる可能性が高い。特に、データ品質、メール文化、個人情報・ブランド配慮、既存CRM運用との接続が成否を分ける。",
"見るべきKPIも送信数ではない。『人間が1件の有望案件を作るまでに使う時間』がどれだけ減るか。そしてAIが作った案件の質が維持されるか。この二つを同時に見る必要がある。"
]}
],
sources:[
{label:"Clay — AI Outbound Sales",url:"https://www.clay.com/blog/ai-outbound-sales"},
{label:"Clay — Sequencer",url:"https://www.clay.com/blog/clay-email-sequencer"},
{label:"Clay — Claygent Builder",url:"https://www.clay.com/blog/claygent-builder"},
{label:"Clay — AI-native SDR teams",url:"https://www.clay.com/blog/ai-sdr-team"}
]
},
{
slug:"ai-recruiting",category:"ai-work",eyebrow:"AI × WORK / RECRUITING",
title:"採用は、AIでどこまで変わるのか。",
dek:"候補者探索、応募、スクリーニング、日程調整、面接、オファー。採用AIは“便利なチャット”から、採用オペレーションを持つ存在へ。",
thesis:"採用AIの価値は『候補者を評価するAI』だけではない。候補者と企業の間にある大量の摩擦を消すことにある。",
companies:["Paradox","Eightfold","HireVue"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"採用基準、重要評価、最終判断、候補者との関係、説明責任"},
sections:[
{heading:"最初に消えるのは、採用担当者ではなく待ち時間。",body:[
"採用業務には、候補者検索、応募受付、資格要件の確認、面接日程の調整、リマインド、ステータス更新など、大量の事務作業が存在する。ParadoxのOliviaは、会話形式で応募を受け付け、要件に基づく初期スクリーニングを行い、条件を満たす候補者にはそのまま面接日程を提示する。",
"この構造では、AIの価値は『人を見抜く』ことより、候補者が待たされる時間と、採用担当者が調整に費やす時間を同時に削ることにある。"
]},
{heading:"次の競争は、候補者の理解。",body:[
"EightfoldのようなTalent Intelligenceは、履歴書上の肩書だけではなく、スキルや能力、キャリアの文脈をもとに候補者と仕事の適合を考える方向へ進んでいる。ここでは採用システムが単なる応募管理から、候補者・社員・仕事の関係を理解する基盤へ変わる。",
"一方で、AIによる推薦や選別が強くなるほど、なぜその人を高く評価したのか、どの情報を使ったのか、偏りをどう監視するのかが重要になる。効率化と説明責任はセットだ。"
]},
{heading:"面接は最後まで人間に残るのか。",body:[
"定型質問の収集や動画回答の受付はすでに自動化できる。しかし、組織との相性、候補者の迷い、魅力付け、役割の擦り合わせは、情報を得る場であると同時に信頼形成の場でもある。",
"そのため採用AIの現実的な到達点は、採用担当者を完全に排除することより、『人間が会うべき候補者に、早く、十分な情報を持って会える状態』を作ることにある。"
]},
{heading:"日本では、高頻度採用から効きやすい。",body:[
"店舗、物流、介護、コールセンターなど、応募数が多く、スピードが採用率へ直結する領域では効果を出しやすい。一方で幹部採用や専門人材では、候補者体験や説得の比重が大きく、人間の関与は長く残る。",
"AI採用を導入するときは『何人減らせるか』より、応募から初回接触まで何分か、面接設定まで何時間か、採用担当者が候補者一人あたりに使う事務時間がどれだけ減るかを見る方が本質に近い。"
]}
],
sources:[
{label:"Paradox — Candidate Screening",url:"https://www.paradox.ai/products/screening"},
{label:"Paradox — Hiring Software",url:"https://www.paradox.ai/solutions/recruiters"},
{label:"Eightfold — Talent Intelligence",url:"https://eightfold.ai/products/"}
]
},
{
slug:"ai-video",category:"ai-creative",eyebrow:"AI × CREATIVE / VIDEO",
title:"生成動画『第二ラウンド』をどう見るか。",
dek:"Runway、HeyGen、Synthesia。映像を“生成する”競争から、撮影・編集・出演・翻訳・配信を再構成する競争へ。",
thesis:"生成動画の次の勝負は、1本の綺麗な動画を出せるかではない。制作工程の何段階をまとめて消せるかだ。",
companies:["Runway","HeyGen","Synthesia"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"企画、ブランド、権利確認、最終クリエイティブ判断、公開責任"},
sections:[
{heading:"『動画を作れる』だけでは差にならなくなった。",body:[
"テキストや画像から動画を生成する能力は急速に一般化した。そこで各社の差は、映像制作のどこを取りに行くかへ移っている。Runwayは生成・編集・演技表現を一つの制作環境へ寄せ、HeyGenは人物・アバター・翻訳・APIを通じて『出演者を必要とする動画』を大規模化し、Synthesiaは研修や社内コミュニケーションを中心にEnterprise運用とGovernanceを強く意識している。",
"同じAI Videoでも、狙っている代替対象が違う。"
]},
{heading:"第二ラウンドは、Workflowの戦い。",body:[
"企業が毎月数百本の動画を作るとき、重要なのは最高品質の1本ではない。企画から生成、修正、ブランド統制、多言語化、承認、公開までをどれだけ安定して回せるかだ。",
"HeyGenはWebページから動画を生成するAgent workflowや多言語Avatarを拡張し、SynthesiaはEnterprise向けのCollaboration、Governance、APIを押し出す。映像AIは『クリエイティブツール』から『コンテンツ生産基盤』へ近づいている。"
]},
{heading:"人間が残る場所は、品質より責任。",body:[
"AIが映像を生成できても、ブランドを毀損しないか、人物の権利を侵害しないか、誤情報を含まないか、どの表現を公開するかは人間側に残る。特に企業利用では、生成能力の高さと運用可能性は別物だ。",
"だからAutomation Depthを見るときは、生成ボタンの性能より、AIが修正を反復できるか、ブランドルールを守れるか、複数チャネルへ自動展開できるかを見る必要がある。"
]},
{heading:"日本企業には『多言語化』から入りやすい。",body:[
"日本企業が海外向け動画を作る際、撮影・ナレーション・字幕・再編集には大きなコストがかかる。そこをAI Avatarや翻訳で圧縮できる効果は分かりやすい。",
"一方、日本語の自然さ、人物表現への許容度、社内承認、肖像・著作権管理など、日本特有の品質基準もある。導入判断は『生成品質』だけでなく『運用で事故らないか』まで含めて見るべきだ。"
]}
],
sources:[
{label:"Runway",url:"https://runwayml.com/"},
{label:"HeyGen — Avatar V",url:"https://www.heygen.com/avatars/avatar-v"},
{label:"HeyGen — May 2026 updates",url:"https://www.heygen.com/blog/heygen-may-2026-release"},
{label:"Synthesia — Enterprise",url:"https://www.synthesia.io/enterprise"}
]
},
{
slug:"runway-production",category:"ai-creative",eyebrow:"AI × CREATIVE / PRODUCT",
title:"Runwayは映像生成AIではなく、制作工程OSになれるか。",
dek:"Generate、Edit、Performance、Enterprise Governance。Runwayを見るとき、生成モデル単体より“撮影後の仕事までどこまで吸収するか”が重要になる。",
thesis:"Runwayの強さは映像をゼロから作ることだけではない。既存映像を壊さずに変える工程へ深く入っている。",
companies:["Runway"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"企画、ブランド、演出判断、権利確認、公開"},
sections:[
{heading:"Runwayを『動画生成AI』と呼ぶと、少し見誤る。",body:[
"映像生成モデルの比較だけをすると、品質や速度のランキングになりやすい。しかし制作現場では、ゼロから生成する回数より、すでにある映像を直す回数の方が多い。Runwayの重要な方向性は、生成だけでなく編集・変換・演技の移植をAI化していることにある。",
"Aleph系の編集では、元動画の構図や動きを残しながら要素を差し替えるという、従来なら再撮影やVFXが必要だった作業を圧縮する。Act-Two系のPerformance Captureは、人間の演技をキャラクターへ移す。"
]},
{heading:"消え始めるのは『撮り直す』という前提。",body:[
"背景を変える、衣装を変える、商品を差し替える、不要物を消す、光を変える。これらが映像生成ではなく映像編集として成立すれば、制作工程の経済性が変わる。",
"特に広告やSNSのようにバリエーションを大量に作る領域では、一度撮った素材を複数市場・複数商品へ展開できる価値が大きい。"
]},
{heading:"Automation Depthはまだ完全閉ループではない。",body:[
"Runwayが深く担うのはCreative Executionだ。何を作るか、どの表現を採用するか、ブランドとして公開できるかは人間側に残る。また、媒体配信や予算配分まで自律的に行うわけではない。",
"そのため現在はLevel 3に近い。今後、ブランドルールや過去成果を読み、複数案を生成し、評価し、最終候補を提示するところまで進めばHuman-on-the-loopへ近づく。"
]},
{heading:"日本企業での初手は、制作会社置換ではない。",body:[
"最初に効きやすいのは、既存制作フローの高コスト部分を一つずつ削ることだ。再撮影、ローカライズ、SNS向け再編集、社内説明動画など、ROIを測りやすい工程から入る。",
"『AI動画を作る』ではなく、『この工程を撮影なしにできないか』と問う方が、Runwayの価値を見つけやすい。"
]}
],
sources:[
{label:"Runway",url:"https://runwayml.com/"},
{label:"Runway — Enterprise",url:"https://runway.com/news/company-news%2Fthe-next-phase-of-enterprise-video-generation"},
{label:"Runway — Japan",url:"https://runway.com/news/runway-is-coming-to-japan"}
]
},
{
slug:"manufacturing-ai",category:"ai-industry",eyebrow:"AI × INDUSTRY / MANUFACTURING",
title:"日本の製造業が『外から買うべきAI』はどこにある。",
dek:"設計、シミュレーション、品質、保全、現場知識。強い内製文化を持つ製造業でも、外部AIを買う意味がある層は広がっている。",
thesis:"製造AIの価値は、工場を“AI化”することではない。現場に散らばる判断を、データとAgentで再利用可能にすることだ。",
companies:["Siemens","NVIDIA","Industrial AI ecosystem"],
depth:{current:"Level 2–3 — AI Analyst / Agent",target:"Level 4 — Human-on-the-loop",human:"安全、設備責任、品質承認、変更管理、例外対応"},
sections:[
{heading:"製造業AIは、チャットボット導入ではない。",body:[
"製造現場で価値を出すには、設備データ、品質情報、設計情報、保全履歴、作業標準とAIがつながる必要がある。Siemensは2026年、設計・シミュレーション・PLM・製造・運用までIndustrial Copilotを広げ、NVIDIAとの連携ではIndustrial AI Operating Systemという方向性を掲げている。",
"ここで重要なのは、大規模言語モデルそのものより、工場の文脈へ接続された状態だ。"
]},
{heading:"外部AIを買う意味は、モデルではなく接続層にある。",body:[
"日本の大手製造業は、生産技術や品質管理を内製できる。しかし、設備データを継続収集し、原因分析へつなぎ、複数工場で知識を再利用する基盤を一から作るのは別の仕事だ。",
"Insights Hubのような仕組みは、OEEや品質・性能データを文脈化し、Copilotが原因探索や改善行動を支援する。外部プロダクトの価値は、AIモデルより『現場データと改善ループの接続』にある。"
]},
{heading:"完全自律化が難しい理由。",body:[
"工場では一つの判断が、設備停止、品質不良、安全事故へ直結する。だからソフトウェア業務よりも実行権限をAIへ渡すハードルが高い。",
"一方で、問題の検知、原因候補の提示、過去対応の検索、作業手順の提案までをAIへ寄せれば、人間は最終承認と例外処理へ集中できる。製造AIの現実的な進化は、いきなり無人工場ではなくHuman-on-the-loop化だ。"
]},
{heading:"日本企業が見るべきは『熟練者の暗黙知』。",body:[
"設備や品質のノウハウがベテランに依存している企業ほど、AI導入の意味がある。重要なのは、その知識を単に文書化することではなく、異常が起きたときにAIが状況に応じて呼び出せる形へ変換すること。",
"成功した世界では、熟練者が毎回現場へ呼ばれるのではなく、熟練者の判断パターンがAI Agentの能力として複数拠点へ配布される。"
]}
],
sources:[
{label:"Siemens — CES 2026 Industrial AI",url:"https://press.siemens.com/global/en/pressrelease/siemens-unveils-technologies-accelerate-industrial-ai-revolution-ces-2026"},
{label:"Siemens — Insights Hub",url:"https://www.siemens.com/ja-jp/products/insights-hub"},
{label:"Siemens — Manufacturing AI",url:"https://blogs.sw.siemens.com/insights-hub/2026/06/19/siemens-presently-named-company-to-beat-in-manufacturing-ai-by-gartner/"}
]
},
{
slug:"warehouse-robotics",category:"robotics",eyebrow:"ROBOTICS & PHYSICAL AI / WAREHOUSE",
title:"倉庫は、どこまで人を必要としなくなるのか。",
dek:"Exotec、Locus、Symbotic。歩行支援からGoods-to-Person、そしてPickingまで。倉庫ロボットは“人を助ける”段階から“工程を持つ”段階へ。",
thesis:"倉庫自動化の境界は、移動ではなく『掴む』ことにある。Pickingまでロボットが持てば、Lights-outに一気に近づく。",
companies:["Exotec","Locus Robotics","Symbotic"],
depth:{current:"Level 3–4 — Agent / Human-on-the-loop",target:"Level 5 — Closed Loop in bounded workflows",human:"例外品、設備保守、安全、需要計画、施設設計"},
sections:[
{heading:"倉庫自動化は、歩かなくてよくするところから始まった。",body:[
"従来の倉庫では、人が棚まで歩き、商品を探し、運ぶ時間が大きな比率を占める。ExotecのSkypodはロボットが棚を上下移動してコンテナをWorkstationへ運ぶGoods-to-Person型で、この『歩く・探す』を機械側へ移す。",
"2026年には三菱食品の草加FSDCでSkypodが本格稼働し、日本の食品卸でも導入が進んだ。倉庫ロボティクスはすでに海外の未来技術ではない。"
]},
{heading:"次の境界はPicking。",body:[
"人のところまで商品を運べても、最後に商品を掴み、箱へ入れる工程が人間なら完全自律にはならない。Locus Arrayは移動ロボット、ロボットアーム、AI perceptionを組み合わせ、end-to-end fulfillmentの自律化を狙う。",
"ここが重要な転換点だ。『人の歩行を削るロボット』から、『一つのFulfillment workflowを丸ごと持つロボット群』へ変わる。"
]},
{heading:"自律化は、単体ロボットの賢さだけでは決まらない。",body:[
"倉庫では数百台のロボット、在庫、注文、充電、設備故障を同時に管理する必要がある。だから価値の中心は、ロボット本体だけでなくオーケストレーションにある。",
"Symboticのようなend-to-end systemは、保管・搬送・順序制御を統合する。Physical AIでは、一台が賢いことより、施設全体が一つのシステムとして動くことが重要になる。"
]},
{heading:"日本での意味は、人手不足以上に『変動対応』。",body:[
"自動化は人件費削減だけで語られがちだが、日本では繁閑差や採用難、SKU変動への対応も大きい。固定設備を大量に入れるより、ロボット台数を増減しながら処理能力を調整できる構造には価値がある。",
"倉庫が完全無人になるかより、どの工程から『人が必須ではない』状態になるかを見る方が現実的だ。"
]}
],
sources:[
{label:"Exotec — Skypod Robots",url:"https://www.exotec.com/system/automated-warehouse-robots/"},
{label:"Exotec — Mitsubishi Shokuhin Japan",url:"https://www.exotec.com/news/mitsubishi-shokuhin-soka-fsdc/"},
{label:"Locus Robotics — Locus Array",url:"https://locusrobotics.com/news/locus-robotics-locus-array-launch/"},
{label:"Symbotic — Solutions",url:"https://www.symbotic.com/solutions/"}
]
},
{
slug:"ai-glasses",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / AI GLASSES",
title:"AI Glassesは、スマホの次の画面になれるか。",
dek:"Meta、Google、Android XR。AIが『あなたの視点』を持つとき、スマートグラスは通知端末ではなくContextを取得する場所になる。",
thesis:"AI Glassesの本命機能はディスプレイではない。AIがユーザーと同じものを見て、同じ場所にいることだ。",
companies:["Meta","Google / Android XR","EssilorLuxottica"],
depth:{current:"Level 2–3 — AI Assistant / Agent",target:"Level 4 — Contextual Human-on-the-loop",human:"目的、許可、プライバシー判断、最終行動"},
sections:[
{heading:"スマートグラスは、再び現実的な市場になった。",body:[
"過去のスマートグラスは、重さ、バッテリー、見た目、用途不足に苦しんだ。現在のAI Glassesは別の入口から伸びている。常時大きな画面を出すのではなく、カメラ、マイク、音声AIを日常的な眼鏡へ入れる。",
"Metaは2026年にRay-Ban MetaやOakley Metaを日本展開し、その後Meta Glassesの国内販売も開始した。GoogleもAndroid XRで、音声中心の眼鏡とDisplay付き眼鏡の両方を進めている。"
]},
{heading:"AIにとって、眼鏡は強いセンサーになる。",body:[
"スマホのAIは、ユーザーが写真を撮る、画面を共有する、文章を入力するまで周囲の状況を知らない。眼鏡はユーザーと同じ方向を向き、音を聞き、位置や行動の文脈へ入りやすい。",
"つまり『何を見ているか』をAIが共有できる。翻訳、道案内、物体認識、記憶補助、会議支援など、既存スマホAIでもできる機能が、入力操作なしで始められる点に意味がある。"
]},
{heading:"普及の壁は、性能より社会受容。",body:[
"カメラ付き眼鏡が常時使われる世界では、装着者だけでなく周囲の人のプライバシーも関係する。録画中かどうか、データがどこへ送られるか、職場で使用を許可するか。端末が自然になるほどルール設計は難しくなる。",
"だからAI Glassesの競争は、画面解像度だけでなく『普通の眼鏡として使えるか』『周囲から許容されるか』でも決まる。"
]},
{heading:"日本は、意外と重要な市場になる。",body:[
"日本では眼鏡利用者が多く、公共交通や都市生活でハンズフリー情報の価値も高い。一方で撮影への心理的抵抗や職場ルールは強い。",
"最初からスマホ置換を狙うより、道案内、翻訳、作業支援、接客支援など『両手が塞がっている瞬間』から普及する可能性が高い。"
]}
],
sources:[
{label:"Meta — AI glasses launch in Japan",url:"https://about.fb.com/news/2026/05/ray-ban-meta-ai-glasses-launch-in-japan/"},
{label:"Meta — Meta Glasses Japan",url:"https://about.fb.com/ja/news/2026/08/meta-glasses-launch-in-japan/"},
{label:"Google — Android XR intelligent eyewear",url:"https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/"}
]
},
{
slug:"personal-ai-device",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / PERSONAL AI",
title:"AI専用端末は、スマホアプリに勝てるのか。",
dek:"rabbit r1、Humane Ai Pinの失敗、OS型AIの再挑戦。AI専用ハードは“AIがある”だけでは存在理由にならない。",
thesis:"Personal AI Deviceが勝つ条件は、スマホより賢いことではない。スマホを開く必要がない仕事を持てることだ。",
companies:["rabbit r1","Humane Ai Pin","AI-native devices"],
depth:{current:"Level 2–3 — Assistant / Agent",target:"Level 4 — Persistent Personal Agent",human:"目的、許可、支払い・対外行動、プライバシー"},
sections:[
{heading:"AI専用端末には、厳しい問いがある。",body:[
"スマホにはすでに高性能なカメラ、マイク、通信、決済、アプリ、AIがある。だから新しいAI端末は『AIが使える』だけでは足りない。わざわざ別の端末を持つ理由を作らなければならない。",
"Humane Ai Pinはその難しさを象徴した。消費者向けサービスは2025年に終了し、サーバー停止後は主要なクラウド機能が使えなくなった。ハード単体ではなく、クラウドサービス依存型デバイスの継続性という問題も残した。"
]},
{heading:"rabbitは、専用OSという方向へ賭けている。",body:[
"rabbit r1は2024年に$199で登場し、2026年時点でも販売が続いている。rabbit OS3では、r1を単なる質問端末ではなく、モデル・スキル・コンピュータへ会話でアクセスする物理的な入口として位置づけている。",
"重要なのは端末スペックではなく、『アプリを開く』という操作単位を崩せるかだ。ユーザーが目的を言い、AIが必要なツールを選び、行動までつなげるなら専用端末にも意味が出る。"
]},
{heading:"ハードウェアの存在理由は、Interactionにある。",body:[
"スマホアプリとして同じ機能を提供できるなら、専用端末は不利だ。逆に、ボタンを押してすぐ話せる、常に持ち歩く、カメラをAIの目として向ける、といった物理的な操作が習慣を変えるなら差になる。",
"AI Deviceの勝負はモデル性能より、人間がAIを呼び出す摩擦をどこまで減らせるかにある。"
]},
{heading:"次のPersonal AIは『端末』ではなく『居場所』かもしれない。",body:[
"眼鏡、イヤホン、スマホ、PC、車、家庭内デバイス。AIは一つの専用端末に閉じるより、複数デバイスをまたいで同じContextを持つ方が自然だ。",
"その意味でPersonal AI Device市場は、どの箱が勝つかではなく、『AIがどこに常駐するか』を決める競争として見ると面白い。専用端末が勝つ可能性もあれば、最終的にOSやクラウド側へ吸収される可能性もある。"
]}
],
sources:[
{label:"rabbit — r1",url:"https://www.rabbit.tech/rabbit-r1"},
{label:"rabbit — r1 introduction",url:"https://www.rabbit.tech/newsroom/introducing-r1"},
{label:"rabbit — newsroom / OS3",url:"https://www.rabbit.tech/newsroom"},
{label:"Humane — Ai Pin consumer wind-down",url:"https://support.humane.com/hc/en-us/articles/34243204841997-Ai-Pin-Consumers-FAQ"}
]
}
,{
slug:"ai-legal",category:"ai-work",eyebrow:"AI × WORK / LEGAL",
title:"パラリーガル業務は、AIでどこまで消えるのか。",
dek:"調査、レビュー、ドラフト、比較、論点整理。Legal AIは『文章を書く補助』から、案件の前処理を持つ業務基盤へ進みつつある。",
thesis:"Legal AIの本質は、弁護士の代わりに結論を出すことではない。人間が判断する前に必要だった大量の探索・整理・比較を圧縮することだ。",
companies:["Harvey","Legal AI platforms"],
depth:{current:"Level 2–3 — AI Analyst / Agent",target:"Level 4 — Human-on-the-loop",human:"法的判断、顧客説明、交渉、署名・提出、最終責任"},
sections:[
{heading:"最初に消えるのは、『探す時間』。",body:[
"法律業務では、契約書、判例、社内規程、過去案件、メールなど、判断そのものより前に大量の資料を探し、読み、比較する時間がかかる。Legal AIが最も早く価値を出すのは、この前処理だ。",
"現在のLegal AIは、文書要約だけでなく、複数資料を横断した論点抽出、契約条項比較、ドラフト作成、レビュー支援まで広がっている。つまり『答えを作るAI』より、『案件を人間が判断できる状態まで持ってくるAI』に近づいている。"
]},
{heading:"Automation Depthが上がるほど、証拠が重要になる。",body:[
"法務では、結果がもっともらしいだけでは足りない。どの資料を根拠にしたか、どの条項を参照したか、どこに不確実性があるかが追跡できなければならない。",
"そのためLegal AIでは、モデル性能だけでなく、出典管理、アクセス権、監査ログ、機密情報の扱い、レビュー導線が競争力になる。自律性が高いほど、人間が後から検証できる構造が不可欠になる。"
]},
{heading:"弁護士より先に、パラリーガル業務が再編される。",body:[
"定型的な調査、比較表作成、一次レビュー、ドラフト準備はAgentへ切り出しやすい。一方で、顧客の意図を読み、法的リスクと事業リスクを天秤にかけ、交渉方針を決める仕事は残りやすい。",
"この変化は『法律家が不要になる』というより、ジュニア層が経験してきた仕事の構成を変える。AIが下準備を担うほど、人間は早い段階から判断と説明責任を求められる。"
]},
{heading:"日本企業では、社内法務から入りやすい。",body:[
"外部提出や訴訟より、まず契約レビュー、社内規程検索、過去案件照会のような閉じた業務から導入しやすい。機密保持と権限管理を設計しやすく、効果も測りやすいからだ。",
"見るべきKPIは『AIが何件回答したか』ではない。案件着手から人間の判断開始までの時間がどれだけ短くなったか、レビュー品質を落とさず何時間削減できたかだ。"
]}
],
sources:[
{label:"Harvey",url:"https://www.harvey.ai/"},
{label:"Harvey — Platform",url:"https://www.harvey.ai/platform"}
]
},{
slug:"ai-customer-service",category:"ai-work",eyebrow:"AI × WORK / CUSTOMER SERVICE",
title:"回答するAIから、解決するAIへ。",
dek:"FAQ回答、本人確認、契約変更、返金、予約変更。Customer Service AIは『会話』ではなく『処理完了』を競う段階へ。",
thesis:"顧客対応AIの評価軸は正答率から変わる。ユーザーが人間へ引き継がれずに、目的を達成できた割合が重要になる。",
companies:["Sierra","ServiceNow","Salesforce"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"高リスク判断、例外、クレーム、補償判断、ポリシー設計"},
sections:[
{heading:"チャットボットの限界は、『答えるだけ』だった。",body:[
"従来のサポートBotはFAQを検索して回答することが中心だった。しかし顧客が本当に欲しいのは説明ではなく、住所を変える、予約を変更する、返金を受ける、契約を更新するといった結果だ。",
"AI Agent型の顧客対応では、会話の途中で本人確認や業務システムへの操作を行い、処理完了まで進める。ここで初めて、Contact Centerの業務量そのものへ影響が出る。"
]},
{heading:"成功指標はContainmentだけでは足りない。",body:[
"人間へ転送されなかった割合が高くても、顧客が諦めて離脱していれば成功ではない。重要なのはResolution、つまり目的が完了したかどうかだ。",
"さらに、AIが返金や契約変更まで行うなら、権限範囲と金額上限、例外条件、本人確認レベルを細かく設計する必要がある。Agentの性能よりPolicy設計が品質を左右する。"
]},
{heading:"人間が残るのは、感情と例外。",body:[
"定型手続きや情報照会はAIへ寄せやすい。一方で、顧客が怒っている、補償が必要、社内ルールでは処理できない、複数部署をまたぐ、といった状況では人間が価値を持つ。",
"AIが増えるほど、人間のオペレーターは『平均的な問い合わせを処理する人』から、『難しい案件を解く人』へ変わる。教育内容も応対件数より例外処理力へ寄っていく。"
]},
{heading:"日本で効くのは、24時間化より『待たせないこと』。",body:[
"日本企業では電話やメールが残る業界も多い。そこでAIを入れる価値は単なる営業時間外対応ではなく、本人確認や社内照会を先に済ませ、人間が対応するときには解決に必要な情報が揃っている状態を作ることにある。",
"完全無人化を目指すより、AIが一次処理を完了させ、人間は高リスク案件だけを見る構造の方が現実的だ。"
]}
,{heading:"『解決した』の定義を決めないと、Agent導入は数字だけ良くなる。",body:[
"AIが一次回答してConversationを終了すればContainment rateは上がる。しかし顧客が翌日に再問い合わせしたり、裏で人間が処理をやり直しているなら、実際には解決していない。",
"Customer Service Agentを比較するときは、回答率ではなくResolution rate、再問い合わせ率、Human handoff後の処理時間、Backend action成功率まで見る必要がある。SierraのようにSystem actionまで持つ製品が注目されるのは、この『回答と解決の差』を取りに行くからだ。",
"人間に残るのは怒りや例外だけではない。Policyそのものを変更する判断、補償の境界、重要顧客への関係維持など、企業として責任を引き受ける部分が残る。"
]}],
sources:[
{label:"Sierra",url:"https://sierra.ai/"},
{label:"ServiceNow — AI Agents",url:"https://www.servicenow.com/products/ai-agents.html"},
{label:"Salesforce — Agentforce",url:"https://www.salesforce.com/agentforce/"}
]
},{
slug:"ai-soc",category:"ai-security",eyebrow:"AI × SECURITY / SOC",
title:"SOCは監視室から、AI監督室へ変わるのか。",
dek:"検知、Triage、調査、Threat Intel、封じ込め。Security CopilotのAgent化は、SOC業務を人間中心のキュー処理から継続的なAI運用へ近づける。",
thesis:"SOCの自動化で重要なのはアラート数を減らすことではない。検知から調査・対応までを一つの閉ループへできるかだ。",
companies:["Microsoft Security Copilot","AI SOC Agents"],
depth:{current:"Level 3–4 — Agent / Human-on-the-loop",target:"Level 4–5 in bounded workflows",human:"重大インシデント、事業影響判断、封じ込め承認、復旧責任"},
sections:[
{heading:"SOCのボトルネックは、アラートではなく『次に何をするか』。",body:[
"セキュリティ製品は長年、大量のアラートを生成してきた。問題は検知後に、関連ログを集め、脅威情報を調べ、優先順位を付け、封じ込めるまで人間が何度も画面を往復することだった。",
"Security CopilotのAgent群は、Threat Intelligence briefing、調査、Identity、Endpointなどの反復作業を構造化して実行する。Microsoftは2026年、Red・Blue・Greenの専門Agentが継続ループで動くProject Perceptionも示した。"
]},
{heading:"『AIが調査する』から『AI同士が役割分担する』へ。",body:[
"一つの万能Agentが全部を担うより、攻撃シミュレーション、検知、調査、修復を別Agentへ分ける方が、権限を制御しやすい。これはSOCの組織構造をそのままソフトウェア化する発想でもある。",
"AgentごとにIdentity、Permission、Triggerを持たせれば、どのAIが何を見て何を実行できるかを定義できる。自律化の核心は、モデルの知性より権限境界にある。"
]},
{heading:"人間は『一次調査』から外れていく。",body:[
"既知パターンの相関分析、脅威情報収集、端末情報の確認はAIに向く。一方で、本番系を止める、アカウントを大量に無効化する、顧客へ通知する、といった判断には事業影響が伴う。",
"そのため短期的にはHuman-on-the-loopが中心になる。人間はすべてのアラートを見るのではなく、AIがエスカレーションした重要案件とPolicy設計を担当する。"
]},
{heading:"日本企業では、SOC人材不足への答えになり得る。",body:[
"セキュリティ人材を大量採用できない企業ほど、反復調査をAgentへ渡す効果は大きい。ただし、AI導入前にログ統合や権限整理ができていなければ、自律化は進まない。",
"AI SOCは人材不足を魔法のように解消するものではなく、まず『AIが動ける観測・権限基盤』を整えるプロジェクトでもある。"
]}
],
sources:[
{label:"Microsoft — Security Copilot agents",url:"https://learn.microsoft.com/en-us/copilot/security/agents-security-copilot"},
{label:"Microsoft — Responsible AI FAQ for agents",url:"https://learn.microsoft.com/copilot/security/rai-faqs-security-copilot-agents"},
{label:"Microsoft — Project Perception",url:"https://www.microsoft.com/en-us/security/blog/2026/07/30/whats-new-in-microsoft-security-july-2026/"}
]
},{
slug:"identity-agents",category:"ai-security",eyebrow:"AI × SECURITY / IDENTITY",
title:"AI Agent時代のIdentityは、誰を認証するのか。",
dek:"社員だけでなく、Agent自身が企業システムへ接続し、権限を使い、処理を実行する。Identityは『人間のログイン管理』からAgent governanceへ広がる。",
thesis:"AI Agentが本当に仕事をするなら、Agentはチャット機能ではなく『権限を持つデジタル労働者』として扱う必要がある。",
companies:["Okta","Identity Security ecosystem"],
depth:{current:"Level 2–3 — Governance emerging",target:"Level 4 — Policy-controlled agent identity",human:"Agent所有者、権限承認、例外、監査、停止判断"},
sections:[
{heading:"Agentが増えるほど、『誰がやったか』が曖昧になる。",body:[
"AI AgentがCRM、メール、クラウド、コード、財務システムへ接続すれば、従来の人間用アカウントだけでは管理できない。どのAgentが、誰の依頼で、どの権限を使って行動したかを追跡する必要がある。",
"Oktaは2026年、AI Agentをfirst-class identityとして登録・発見・統制する方向を明確にした。Agent SSOやAgent Discoveryは、Agentを『裏側のスクリプト』ではなくIdentity lifecycleの対象として扱う。"
]},
{heading:"重要なのは、常設権限を持たせないこと。",body:[
"Agentは人間より高速に大量の操作を行える。だから長期間有効な強いCredentialを渡すと、誤動作時のBlast Radiusも大きい。",
"理想は、特定タスクのために必要な最小権限を一時的に与え、終了後に失効させること。誰の意図で権限が付与されたかも紐づける。Agent Identityは、Zero TrustをAIへ拡張する領域になる。"
]},
{heading:"Shadow AIは、Shadow ITより厄介になる。",body:[
"社員が勝手に使うSaaSなら、多くの場合は人間が操作主体だ。しかしAgentは一度接続すると継続的に動き、複数システムをまたぐ可能性がある。",
"そのため『存在を把握する』『所有者を決める』『接続先を制限する』『即時停止できる』ことが必要になる。AI導入数が増える企業ほど、Identity側の整備が先行条件になる。"
]},
{heading:"日本企業は、Agent導入より先に台帳を作るべきかもしれない。",body:[
"どの部署がどのAgentを使い、どのデータへアクセスし、誰が責任者なのか。これを管理できない状態で自律化だけを進めると、監査時に説明できなくなる。",
"Agent Identityは地味だが、AIが『会話』から『実行』へ進むほど重要になる基盤層だ。"
]}
],
sources:[
{label:"Okta — Secure agentic enterprise",url:"https://www.okta.com/newsroom/press-releases/showcase-2026/"},
{label:"Okta — Agent Discovery",url:"https://www.okta.com/newsroom/press-releases/okta-secures-the-agentic-enterprise-with-new-tools-for-discovering-and-mitigating-shadow-ai-risks/"},
{label:"Okta — Agent SSO",url:"https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/"}
]
},{
slug:"ai-fraud",category:"ai-security",eyebrow:"AI × SECURITY / FRAUD",
title:"不正検知AIは、『止める判断』まで持てるか。",
dek:"不正スコアを出すだけでは守れない。決済拒否、入金保留、アカウント制限まで自動で行うとき、AIは分析から執行へ踏み込む。",
thesis:"Fraud AIの難しさは検知精度ではない。『悪いものを止める』と『良い顧客を止めない』を同時に最適化することだ。",
companies:["Stripe Radar","Fraud AI platforms"],
depth:{current:"Level 3–4 — AI Decision / bounded execution",target:"Level 4 — Human-on-the-loop",human:"閾値設計、高額例外、顧客救済、Policy、監査"},
sections:[
{heading:"不正検知は、AIが強くなりやすい領域。",body:[
"決済不正は大量の取引データとパターン変化を扱うため、機械学習と相性がいい。Stripe RadarはStripeネットワーク全体のデータを利用し、取引やアカウントをスコアリングして不正を判断する。",
"2026年のRadarは、決済だけでなくBusiness accountやCustomer abuseまで対象を広げ、既存決済プロセッサからでもAPIでSignalsを利用できる構成を打ち出している。"
]},
{heading:"精度が高いだけでは、事業には使えない。",body:[
"不正を厳しく止めればFraud lossは減る。しかし正当な顧客までブロックすれば売上が落ちる。逆に通しすぎれば損失が増える。",
"だからFraud AIは、単純なAccuracy競争ではなく、False Positive、Revenue、Chargeback、運用コストを同時に最適化する問題になる。モデルの閾値そのものが事業判断だ。"
]},
{heading:"AIが『執行』すると責任が変わる。",body:[
"スコア提示だけなら人間が最終判断できる。しかし、AIが取引拒否、Payout制限、Reserve設定まで自動で実行するなら、Agentは分析者ではなく業務権限者になる。",
"ここでは自動化率を上げるほど、異議申し立てや救済導線が重要になる。止めるAIだけでなく、間違えたとき戻せる仕組みまで含めて設計する必要がある。"
]},
{heading:"日本企業でも、決済以外へ広がる。",body:[
"EC、マーケットプレイス、サブスクだけでなく、アカウント乗っ取り、クーポン濫用、返品詐欺、無料トライアル悪用など、Fraudはサービス設計全体へ広がっている。",
"AIが扱う範囲が広がるほど、不正対策部門だけでなく、CS、Finance、Productが同じPolicyを共有する必要が出てくる。"
]}
],
sources:[
{label:"Stripe Radar",url:"https://stripe.com/radar"},
{label:"Stripe Radar — Japan",url:"https://stripe.com/jp/radar"},
{label:"Stripe — How we built Radar",url:"https://stripe.com/blog/how-we-built-it-stripe-radar"}
]
}
,{
slug:"continuous-validation",category:"ai-security",eyebrow:"AI × SECURITY / CONTINUOUS VALIDATION",
title:"年1回の診断は、継続攻撃に置き換わるか。",
dek:"Pentestをイベントではなく常時運転へ。自動化された攻撃・再検証が、セキュリティ評価の周期そのものを変え始めている。",
thesis:"Continuous Validationの価値は『診断を安くする』ことではない。環境が変わるたびに、攻撃可能性を再計算できることだ。",
companies:["Pentera","Horizon3.ai","Continuous Security Validation"],
depth:{current:"Level 3–4 — Automated validation",target:"Level 4 — Human-on-the-loop",human:"検証範囲、事業影響判断、修正優先度、例外承認"},
sections:[
{heading:"年1回のPentestには、構造的な弱点がある。",body:[
"クラウド設定、アカウント権限、SaaS連携、コードは日々変わる。一方でPentestが年1回なら、診断の翌日に生まれた侵入経路は次回まで見つからない可能性がある。",
"Continuous Validationは、攻撃者と同じ視点で環境を定期的に検証し続けることで、この時間差を縮める。セキュリティ評価を『イベント』から『常時プロセス』へ変える考え方だ。"
]},
{heading:"スキャナーと違うのは、突破可能性を見ること。",body:[
"脆弱性が存在することと、実際に重要資産まで到達できることは同じではない。自動Pentest系は、Credential、権限昇格、横展開などを組み合わせ、Attack Pathとして実証する。",
"この違いは優先順位付けに効く。CVSSが高い問題を全部直すのではなく、『本当に突破へつながる穴』から直す判断がしやすくなる。"
]},
{heading:"再検証まで閉じると、修正の意味が変わる。",body:[
"修正後に同じ攻撃経路を自動で再実行できれば、TicketをCloseする前に『本当に塞がった』ことを確認できる。",
"ここまで来ると、Pentestは報告書を納品する仕事ではなく、攻撃→修正→再攻撃を回すControl loopへ近づく。"
]},
{heading:"人間は、攻撃者ではなく境界設計者になる。",body:[
"どこまで攻撃してよいか、Productionで何を禁止するか、どの結果を自動で再検証するか。継続化するほどGuardrailが重要になる。",
"日本企業でも、外部監査や年次診断を完全に消すより、日常的なValidationを自動化し、人間の専門家は重要経路や例外へ集中する形が現実的だ。"
]}
,{heading:"『毎日攻撃できる』ことと『毎日自律攻撃する』ことは違う。",body:[
"Continuous Validationという言葉は自動化を強く感じさせるが、実際には定義済みScenarioを定期実行する製品と、得られた結果から次の攻撃経路をAI自身が選ぶ製品が混在する。ここを分けないと、AutomationをAutonomyとして評価してしまう。",
"比較軸は、攻撃Scopeを誰が決めるか、Credentialや権限昇格を動的に利用するか、未知のAttack pathを探索するか、修正後Retestを自動で回すか、そしてProductionへ与えるRiskをどう制御するか。単純な実行頻度だけでは足りない。",
"年1回Pentestが完全に消えるとは限らない。むしろHuman expertによる深い評価と、Machineによる高頻度Validationが役割分担する可能性が高い。"
]}],
sources:[
{label:"Pentera",url:"https://pentera.io/"},
{label:"Horizon3.ai — NodeZero",url:"https://www.horizon3.ai/nodezero/"}
]
},{
slug:"ai-voice",category:"ai-creative",eyebrow:"AI × CREATIVE / VOICE",
title:"声を作るAIから、会話を運用するAIへ。",
dek:"ElevenLabsを中心に、Voice AIは音声合成からリアルタイム会話、本人確認、業務実行、継続改善まで広がっている。",
thesis:"Voice AIの次の勝負は『人間らしい声』ではない。電話というチャネルで、どこまで仕事を完了できるかだ。",
companies:["ElevenLabs","Voice Agent ecosystem"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"高リスク案件、感情判断、本人確認Policy、例外対応"},
sections:[
{heading:"Voice AIはTTS市場ではなくなりつつある。",body:[
"初期の競争は、自然な発音、感情表現、多言語化だった。現在は、Speech recognition、Reasoning、Turn-taking、Backend tool useまで統合し、電話やWhatsApp上で業務を完了させる方向へ進んでいる。",
"ElevenAgentsは、音声・チャットに加え、画像、ファイル、位置情報なども扱い、会話を単なる音声応答ではなくマルチモーダルな業務入口へ広げている。"
]},
{heading:"人間らしさより、『会話が壊れないこと』。",body:[
"電話では、割り込み、沈黙、聞き返し、怒り、曖昧表現が普通に起こる。音声が自然でもTurn-takingが悪ければ実用にならない。",
"Expressive Modeのような取り組みは、声色そのものより、相手の感情に応じてトーンを変え、会話をResolutionへ進めることを狙っている。"
]},
{heading:"本当の差は、通話後に学習できるか。",body:[
"大量の通話を人間が全部レビューするのは難しい。ElevenAgents Spotlightは会話を分類し、品質やSentimentを評価し、改善ポイントを提案する。",
"ここまで来るとVoice Agentは『電話を代行するAI』ではなく、自分の会話ログを観測し改善ループへつなぐ運用システムになる。"
]},
{heading:"日本では、電話文化が残る業界ほどインパクトが大きい。",body:[
"医療、物流、予約、公共サービスなど、電話が重要なチャネルとして残る領域ではVoice Agentの価値が大きい。一方で敬語、間、本人確認、録音同意など、日本語特有の運用品質が要求される。",
"導入時は『人間そっくりか』より、処理完了率、転送率、再入電率、誤案内率を見るべきだ。"
]}
,{heading:"Voice Agentの比較軸は、声質から業務完了率へ。",body:[
"自然な声は入口にすぎない。実運用では、割り込みを処理できるか、本人確認を通せるか、CalendarやCRMを操作できるか、失敗時に人へ転送できるか、通話後に結果をSystemへ残せるかが重要になる。",
"つまりElevenLabs、Voice Agent platform、Contact Center AIを比べるときはTTS品質だけでは足りない。Latency、Turn-taking、Tool use、Telephony、Monitoring、Escalation、Cost per resolved callまで同じ表に並べる必要がある。",
"日本語では敬語や相槌、固有名詞、数字・住所確認などで会話が崩れやすい。『人間っぽい声』より、例外を含めて最後まで業務を終えられるかを見るべきだ。"
]}],
sources:[
{label:"ElevenLabs — Expressive Mode",url:"https://elevenlabs.io/blog/introducing-expressive-mode"},
{label:"ElevenLabs — Voice agent capabilities",url:"https://elevenlabs.io/blog/voice-agent-capabilities"},
{label:"ElevenLabs — Spotlight",url:"https://elevenlabs.io/blog/introducing-elevenagents-spotlight"},
{label:"ElevenLabs — New modalities",url:"https://elevenlabs.io/blog/introducing-new-modalities"}
]
},{
slug:"synthetic-media",category:"ai-creative",eyebrow:"AI × CREATIVE / SYNTHETIC MEDIA",
title:"Synthetic Mediaは、広告制作コストをどこまで崩すか。",
dek:"一つの素材から、国・商品・チャネルごとに何百もの派生版を作る。生成AIの価値は『作品』より、Variation economicsに現れ始めている。",
thesis:"Synthetic Mediaが変えるのはクリエイターの人数より、『1案を作った後に何種類展開できるか』という制作経済性だ。",
companies:["Adobe Firefly","Enterprise creative workflows"],
depth:{current:"Level 2–3 — AI Analyst / Agent",target:"Level 4 — Governed creative automation",human:"コンセプト、ブランド、権利、最終承認、キャンペーン責任"},
sections:[
{heading:"企業クリエイティブは、量の問題になっている。",body:[
"EC、SNS、広告、CRM、地域別サイト。企業は同じキャンペーンでも大量のサイズ、言語、背景、商品差分を必要とする。生成AIは、この派生制作を一気に圧縮できる。",
"AdobeのFirefly Creative Productionは、ブランドに沿った大量のコンテンツ生成を、Workflow authoring・Runtime・Governanceまで含めて扱う方向へ進んでいる。"
]},
{heading:"価値は『生成』より『再利用可能なWorkflow』。",body:[
"単発で良い画像を出せても、毎回Promptから作り直すなら業務化しにくい。Firefly GraphのようなNode-based workflowは、入力・生成・編集・出力を接続し、同じ処理を再利用できるようにする。",
"ここでクリエイティブ資産は完成物だけでなく、『どう作ったか』というWorkflowそのものになる。"
]},
{heading:"撮影すら、Variant生成の一部になる。",body:[
"3D Digital Twinと生成AIを組み合わせれば、物理撮影なしに複数背景・角度・チャネル向け素材を作れる。商品撮影のコスト構造も変わる可能性がある。",
"特にSKU数が多い企業ほど、1商品の制作費より、全商品×全市場×全チャネルの総コストで効いてくる。"
]},
{heading:"人間は、量産作業からブランド統制へ。",body:[
"AIがVariationを増やすほど、間違ったロゴ、禁止表現、古い商品情報が大量拡散するリスクも増える。だからBrand rule、承認、Asset source-of-truthが重要になる。",
"生成速度が上がるほど、人間の仕事は作ることから『何を許可するか』へ移る。"
]}
,{heading:"Variationが増えるほど、評価と配信まで自動化したくなる。",body:[
"100案を作れるようになると、次に詰まるのは『どれを出すか』だ。人間が100案をすべて確認し、媒体ごとに選び、結果を見て次案を作るなら、生成だけ高速化してもWorkflow全体は詰まったままになる。",
"そこでSynthetic Mediaの次の競争は、Brand ruleを守ってVariationを作り、媒体実績を受け取り、次の案を更新するClosed loopへ進む。Creative productionとPerformance marketingの境界が薄くなる。",
"ただしCTRだけを最適化するとBrandや長期価値を壊す可能性もある。何を最適化してはいけないかを人間が決めるGovernanceが必要になる。"
]}],
sources:[
{label:"Adobe — Firefly Graph",url:"https://business.adobe.com/blog/meet-firefly-graph"},
{label:"Adobe — Creative Production for Enterprise",url:"https://helpx.adobe.com/jp/firefly/web/work-with-enterprise-features/creative-production/creative-production-overview.html"},
{label:"Adobe — 3D digital twin workflows",url:"https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/use-3d-digital-twin-workflows.html"}
]
},{
slug:"creative-stack",category:"ai-creative",eyebrow:"AI × CREATIVE / STACK",
title:"Adobeを置き換えるのか、Adobeの中に入るのか。",
dek:"生成モデルが増えるほど、企業は『どのモデルが一番強いか』より、制作・権利・ブランド・承認をどう束ねるかを考えるようになる。",
thesis:"Creative AI市場の勝者は、最高性能モデルだけでは決まらない。複数モデルを企業Workflowに安全に組み込めるControl layerが重要になる。",
companies:["Adobe","OpenAI","Google","Creative AI ecosystem"],
depth:{current:"Level 2–3 — Multi-model workflow",target:"Level 4 — Governed agentic production",human:"モデル選定、ブランド設計、承認、権利、最終表現"},
sections:[
{heading:"生成モデルは、差し替え可能な部品になり始める。",body:[
"画像や動画モデルが次々に更新されると、企業が一つのモデルへ全Workflowを固定するリスクが増える。昨日の最高モデルが半年後も最適とは限らない。",
"Adobe Firefly Graphは、Adobeのツールと複数AIモデルをNodeとして組み合わせる考え方を押し出している。モデル競争の上にWorkflow layerを置く発想だ。"
]},
{heading:"Enterpriseでは、性能より統制が効く。",body:[
"個人なら最高品質の出力を選べばいい。しかし企業では、商用利用条件、IP indemnification、データ扱い、ブランドルール、承認経路を同時に管理する必要がある。",
"Creative Stackの競争は、Model benchmarkからGovernance benchmarkへ広がる。"
]},
{heading:"Adobeが強いのは、既存制作工程を持っていること。",body:[
"Photoshop、Illustrator、Premiere、Frame.ioなど既存Workflowの中へAIを入れられることは大きい。生成AIが新しい入口でも、最終仕上げやAsset管理が既存ツールに戻るなら、そこを持つ企業はControl pointを維持できる。",
"逆に新興AI企業は、従来工程そのものを消すことで勝ちに行く。"
]},
{heading:"日本企業は、単一モデル導入より『Model portfolio』を考える段階へ。",body:[
"用途ごとに最適モデルが違うなら、企業側はモデル名ではなく、入力データ・権利条件・用途・承認レベルに応じて自動選択する方が合理的になる。",
"Creative AIは『どのAIを契約するか』から、『どのWorkflowでどのAIを使わせるか』へ進む。"
]}
,{heading:"比較すべきは、Model性能ではなく『誰がControl layerを握るか』。",body:[
"Creative AIが増えるほど、企業は一つのModelへ賭けにくくなる。画像はA、動画はB、音声はCという構成が普通になれば、どのModelを使うかより、Brand asset、権限、承認、Rights、Versionを誰が一元管理するかが重要になる。",
"Adobeの強みは既存Creative workflowとAsset管理へ近いこと。一方、Runwayや新興Model vendorは新しい表現や速度で先行する。企業側は『最高Modelを選ぶ』より、『Modelを差し替えてもWorkflowが壊れない構造』を持てるかを見るべきだ。",
"この市場の勝者は生成Modelそのものではなく、複数Modelを安全に交換できるOperating layerになる可能性がある。"
]}],
sources:[
{label:"Adobe — Firefly Graph",url:"https://business.adobe.com/products/creativecloud-business/firefly-graph.html"},
{label:"Adobe — Node-based workflows",url:"https://business.adobe.com/blog/why-node-based-workflows-are-the-future-of-creative-ai"},
{label:"Adobe — AI and creative work",url:"https://www.adobe.com/ai/research/202606/ai-is-redistributing-creative-work.html"}
]
},{
slug:"logistics-ai",category:"ai-industry",eyebrow:"AI × INDUSTRY / LOGISTICS",
title:"FAXと電話が残る物流に、AIはどこから入るのか。",
dek:"配車、調達、追跡、例外対応、支払い。物流AIは『最適化』より先に、人間同士の調整作業をAgentへ移し始めている。",
thesis:"物流のAI化で最初に消えるのはトラックではない。荷主・運送会社・倉庫の間を埋める『確認・催促・転記』だ。",
companies:["project44","Uber Freight","LSP44"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"例外交渉、重大遅延、取引関係、現場判断、契約"},
sections:[
{heading:"物流のボトルネックは、データがないことではない。",body:[
"GPS、TMS、メール、電話、EDIなど情報源は多い。しかし現場では、それらが分断され、人間が『今どこにある』『遅れるのか』『誰に連絡するか』をつないでいる。",
"project44のMoやUber FreightのInsights AIは、複数データを横断し、Operatorが質問できる形へ整理する。まずは『探す』を減らす。"
]},
{heading:"次は、『調整する』をAIへ渡す。",body:[
"project44 AutopilotはCarrier onboarding、Freight procurement、Exception managementなどでAgentを継続稼働させる。LSP44もExecutionとAutomationをAgent/API infrastructureとして提供する方向を示している。",
"物流では一件の遅延が複数企業へ波及する。だからAIの価値は単体最適より、複数プレイヤーの間でActionをつなぐことにある。"
]},
{heading:"完全自律化を止めるのは、現場の例外。",body:[
"天候、渋滞、荷待ち、破損、ドライバー不足、顧客都合。物流は例外の連続で、現場側が電話一本で解決しているケースも多い。",
"だからAI導入は、現場文化を無視して全部置き換えるより、情報収集・定型連絡・再計算をAgentへ渡し、人間は交渉と例外判断へ集中する方が現実的だ。"
]},
{heading:"日本では、AIより先に『接続』が課題になる。",body:[
"FAXや電話が残る現場では、AI Agentが直接システム操作できないこともある。そのためメール、音声、OCR、既存TMSとのBridgeを作りながら段階導入する必要がある。",
"逆に言えば、非構造なコミュニケーションを扱えるAIが成熟すると、日本の物流は一気に変わる余地が大きい。"
]}
],
sources:[
{label:"project44 — Autopilot",url:"https://www.project44.com/press-releases/project44-launches-autopilot-to-cut-freight-costs-improve-data-quality-optimize-inventory-levels-and-accelerate-cash-flow/"},
{label:"project44 — Mo AI Analyst",url:"https://www.project44.com/press-releases/project44-launches-conversational-ai-analyst-to-turn-real-time-supply-chain-data-into-faster-more-confident-decisions/"},
{label:"Uber Freight — AI logistics",url:"https://www.uberfreight.com/en-US/technologie/ai"},
{label:"Uber Freight — Intelligent supply chains",url:"https://www.uberfreight.com/en-US/blog/new-era"}
]
}
,{
slug:"finance-ai",category:"ai-industry",eyebrow:"AI × INDUSTRY / FINANCE",
title:"金融AIは、分析補助から意思決定へ進めるか。",
dek:"調査、モデリング、資料作成、リスク確認。Finance AIは、アナリストが情報を集める時間を削り、判断へ集中させる方向へ進んでいる。",
thesis:"金融AIの価値は『答えを出すこと』より、判断に必要な証拠・計算・比較を一つの画面へ集約することにある。",
companies:["Rogo","Finance AI platforms"],
depth:{current:"Level 2–3 — AI Analyst / Agent",target:"Level 4 — Human-on-the-loop",human:"投資判断、顧客説明、リスク許容、署名・執行、規制責任"},
sections:[
{heading:"金融業務は、判断より前処理が長い。",body:[
"企業分析、投資銀行、資産運用では、決算資料、Filings、社内メモ、マーケットデータを集め、比較し、モデルへ入れ、資料にまとめるまでに膨大な時間がかかる。",
"RogoのようなFinance特化AIは、Research、Modeling、Reportingを一つのAgent体験へ寄せようとしている。汎用チャットではなく、金融データと業務フォーマットへ深く入る点が重要だ。"
]},
{heading:"正しさだけでなく、追跡可能性が必要。",body:[
"金融では数値が一つ違うだけで意思決定が変わる。だから『もっともらしい説明』より、どの資料・どの期間・どの計算を根拠にしたかを追えることが重要になる。",
"Agentが表やチャートを生成するほど、Citation、Data permission、Version管理が製品品質になる。"
]},
{heading:"人間に残るのは、意味付けとリスク。",body:[
"同じデータを見ても、買収すべきか、投資すべきか、顧客に勧めるべきかはBusiness contextで変わる。AIは比較・計算・シナリオ生成を高速化できるが、最終判断の責任は人間に残る。",
"その結果、ジュニアの仕事は情報収集から、仮説設定と検証へ移っていく可能性がある。"
]},
{heading:"日本では、Excelを消すより『Excelの前後』を消す。",body:[
"金融機関でExcelそのものを一気に置き換えるのは難しい。むしろデータ収集、転記、更新、コメント作成をAgentが担い、既存モデルへ正しいデータを流す方が導入しやすい。",
"AI導入のKPIはレポート本数ではなく、人間が判断に使える時間をどれだけ増やせたかで見るべきだ。"
]}
,{heading:"金融でAIに渡しにくいのは、分析ではなく『責任のある結論』。",body:[
"資料収集、決算比較、Model更新、Memo作成はAIへ移しやすい。しかし『この会社へ融資する』『この銘柄を推奨する』『このRiskを許容する』という判断は、規制・説明責任・顧客適合性と結びつく。",
"金融AIの自律性を見るときは、AIがRecommendationを出せるかではなく、そのRecommendationがそのままTransactionや顧客提案へ接続されるかを見るべきだ。多くの領域ではHuman approvalが意図的に残る。",
"一方、裏側のResearch工程では閉ループ化が進みやすい。新しいFilingsを検知し、Modelを更新し、差分を要約し、Analystへ重要度順で渡すところまで自動化できれば、人間は情報処理ではなく仮説と判断へ移る。"
]}],
sources:[
{label:"Rogo",url:"https://rogo.ai/"},
{label:"Rogo — Product design system",url:"https://design.rogo.ai/product"},
{label:"Rogo — Product description",url:"https://design.rogo.ai/product/accordion"}
]
},{
slug:"healthcare-ai",category:"ai-industry",eyebrow:"AI × INDUSTRY / HEALTHCARE",
title:"医療AIで、最後まで人間に残る判断は何か。",
dek:"記録、検索、患者説明、事前準備。Healthcare AIは診断置換より先に、医療従事者を事務作業から解放する方向で広がっている。",
thesis:"医療AIの現実的な価値は『医師の代わり』ではない。医師が患者を見る時間を取り戻すことだ。",
companies:["OpenAI for Healthcare","Healthcare AI ecosystem"],
depth:{current:"Level 2 — AI Analyst",target:"Level 3–4 in bounded workflows",human:"診断、治療方針、患者説明、同意、緊急判断、最終責任"},
sections:[
{heading:"医療は、AIが強くても自律化しにくい。",body:[
"医療では誤りの影響が大きく、患者ごとの状況も複雑だ。そのため『AIが診断して治療を決める』より、まずDocumentation、情報検索、紹介状、患者向け説明などの支援から導入が進む。",
"OpenAI for Healthcareも、臨床・研究・事務のWorkflowを支援しながら、Enterprise securityやHIPAA対応を前提にする構成を取っている。"
]},
{heading:"最も大きな余地は、医療者の時間。",body:[
"診療前の情報整理、診療後の記録、保険・紹介関連の文書作成は、患者と直接向き合わない時間を増やす。AIがここを圧縮すれば、医療の供給能力そのものを増やせる。",
"AdventHealthでは、OpenAI活用で一部のAdministrative task時間を大きく削減した事例が公開されている。効率化がそのまま患者対応時間へ転換される点が重要だ。"
]},
{heading:"AIが扱うほど、Trusted sourceが重要になる。",body:[
"医療情報はWeb検索の寄せ集めでは足りない。院内Protocol、患者情報、信頼できるClinical evidenceを権限付きで接続し、根拠を示す必要がある。",
"Healthcare AIはモデル単体より、EHRや院内Knowledgeへ安全に接続できるかが価値を決める。"
]},
{heading:"日本では、診断AIより事務AIが先に広がる可能性が高い。",body:[
"診療報酬、個人情報、医療安全の制約を考えると、いきなりClinical decisionを渡すより、記録・文書・予約・患者説明支援から入る方が現実的だ。",
"人間に最後まで残るのは、患者個人の価値観まで含めた意思決定と責任だろう。"
]}
,{heading:"医療AIで自律性を上げるほど、説明責任は消えない。",body:[
"医療では、AIが高精度でも、そのまま最終判断へ接続できるとは限らない。誤診のCost、患者への説明、既往歴や生活背景、治療選択肢のPreferenceなど、Model外の情報が意思決定へ入るからだ。",
"だから比較したいのはAccuracyだけではない。AIが何を根拠に提案したかをClinicianが確認できるか、異常時にHumanへ戻せるか、医療記録へどう残るか、責任主体が明確か。Healthcare AIではHuman-on-the-loopが弱さではなく設計要件になる。",
"一方、Documentation、Coding、Triage、画像の一次読影など、判断前後のOperationは自動化余地が大きい。人間を消すより、医師・看護師が患者を見る時間を取り戻す方向で価値が出やすい。"
]}],
sources:[
{label:"OpenAI — OpenAI for Healthcare",url:"https://openai.com/index/openai-for-healthcare/"},
{label:"OpenAI — Healthcare solutions",url:"https://openai.com/solutions/industries/healthcare/"},
{label:"OpenAI — AdventHealth",url:"https://openai.com/index/adventhealth/"}
]
},{
slug:"retail-ai",category:"ai-industry",eyebrow:"AI × INDUSTRY / RETAIL",
title:"価格決定は、人間の勘からAIの推論へ移るか。",
dek:"値付け、Markdown、在庫、補充。Retail AIは、過去実績だけでなく需要・在庫・価格弾力性をつないで意思決定を高速化する。",
thesis:"Retail AIの面白さは予測ではない。予測を『価格を変える』『発注する』というActionへつなげられるかにある。",
companies:["Blue Yonder","Retail planning AI"],
depth:{current:"Level 2–3 — AI Analyst / Agent",target:"Level 4 — Human-on-the-loop",human:"ブランド価格戦略、例外、仕入れ関係、重大な価格変更、責任"},
sections:[
{heading:"価格は、いまだに人間の感覚が残る領域。",body:[
"競合価格、在庫量、シーズン残日数、需要、粗利を全部見ながらSKU単位で価格を決めるのは難しい。そのため現場では横並びや経験則に頼る場面が残る。",
"AI Pricingは、価格変更と需要変化の関係を学習し、商品・店舗・日付ごとにMarkdownや価格案を出す。ここでは人間の『勘』をデータで補強できる。"
]},
{heading:"本当の価値は、価格と在庫を別々に考えないこと。",body:[
"価格を下げれば需要は増えるが、在庫が不足すれば機会損失になる。逆に在庫過多なら、早いMarkdownの方が最終利益を守れることもある。",
"Blue YonderのPlanning系は、Allocation、Replenishment、Inventory、Supplier orderingなどを同じPlanning文脈で扱う方向へ進んでいる。"
]},
{heading:"AIが発注まで行うと、役割が変わる。",body:[
"予測値を出すだけならAnalystだが、Pending orderを確認し、推奨し、条件内で発注へ進むならAgentになる。",
"ここでも人間は例外、ブランド戦略、仕入れ先との関係、急激な市場変化を担当し、AIは日常的な大量判断を持つ構造になる。"
]},
{heading:"日本の小売ほど、実は余地が大きい。",body:[
"店舗数・SKU数が多く、担当者の経験で調整している企業ではAIの効果が出やすい。一方で値付けがブランドイメージに直結する業態では、完全自動化は難しい。",
"最初はClearanceや補充のように成功条件を定量化しやすい領域から始めるのが現実的だ。"
]}
,{heading:"価格AIで危ないのは、精度より『目的関数』。",body:[
"AIが価格を最適化するとき、何を最大化するかで結果は変わる。粗利、売上、在庫回転、来店頻度、廃棄削減。短期粗利だけを追えば値上げが増え、在庫消化だけを追えばBrandを壊す可能性がある。",
"だからRetail AIを比較するときは、予測精度だけでなく、どのKPIを同時に制約として扱えるか、Human overrideがどこにあるか、価格変更の理由を説明できるかを見るべきだ。価格決定はModel性能よりGovernanceの問題になりやすい。",
"日本では店舗ごとの裁量、チラシ・ポイント施策、メーカーとの商慣行も絡む。完全自律価格より、需要予測と提案をAIが担い、例外だけ人間が承認するHuman-on-the-loop型から広がる可能性が高い。"
]}],
sources:[
{label:"Blue Yonder — AI pricing",url:"https://now.blueyonder.com/AI-pricing-tailored"},
{label:"Blue Yonder — 2026 Planning release",url:"https://es.blueyonder.com/release-announcements/1h-2026-release/cognitive-solutions-for-planning"},
{label:"Blue Yonder — Retail decision speed",url:"https://blueyonder.com/blog/2026/retail-in-real-time-how-decision-speed-protects-margins"}
]
},{
slug:"humanoid",category:"robotics",eyebrow:"ROBOTICS & PHYSICAL AI / HUMANOID",
title:"Humanoidは、『人型』である必要が本当にあるのか。",
dek:"FigureをはじめとするHumanoid各社が狙うのは、ロボット専用設備ではなく、人間向けに作られた世界をそのまま使うことだ。",
thesis:"Humanoidの合理性は見た目ではない。工場・家・道具がすでに『人間サイズ』で設計されていることにある。",
companies:["Figure","Humanoid ecosystem"],
depth:{current:"Level 3 — Physical AI Agent",target:"Level 4–5 in bounded environments",human:"目的、安全Policy、例外、保守、重大判断"},
sections:[
{heading:"人型は、最適形状ではないかもしれない。",body:[
"荷物を運ぶだけなら車輪の方が効率的で、溶接なら固定Robot armの方が速い。Humanoidが意味を持つのは、一つの作業最適ではなく、人間用に作られた複数環境をそのまま使える可能性にある。",
"階段、棚、ドア、工具、キッチン。世界側を作り直さずRobot側が合わせる発想だ。"
]},
{heading:"FigureのHelixは、全身を一つのPolicyで動かそうとしている。",body:[
"Helix 02はVision、Touch、Proprioceptionを使い、歩行・操作・バランスを連続した一つのSystemとして扱う。長時間のTaskをResetなしに行う方向が示されている。",
"さらにHelix 2.5では、未知の家庭環境へ入ってZero-shotで作業するGeneralizationを狙う。Humanoidの競争軸はDemoの派手さより、場所が変わっても働けるかへ移っている。"
]},
{heading:"最大の壁は、器用さより信頼性。",body:[
"工場や家庭で使うなら、100回中95回成功では足りない作業もある。人間と同じ空間で動く以上、安全性、故障時停止、物を壊さないことが重要になる。",
"Physical AIはソフトウェアより失敗コストが高い。だから自律度の上昇と同時にSafety layerが必要になる。"
]},
{heading:"日本はHumanoidの実験場になり得る。",body:[
"製造業、物流、介護、人手不足という条件が揃う一方、日本企業は産業Robotの経験も厚い。",
"Humanoidが既存Robotを全部置き換えるのではなく、『設備を専用化するほど量がない仕事』から入る可能性が高い。"
]}
,{heading:"人型の価値は、賢さより『既存環境を変えなくていいこと』。",body:[
"工場や倉庫をRobot専用に作り直せるなら、人型である必要は薄い。固定Arm、AMR、Conveyorの方が速く安く安全な工程は多い。それでもHumanoidが注目されるのは、階段、扉、棚、道具、作業台など、人間向けに作られたInfrastructureをそのまま使える可能性があるからだ。",
"つまり比較対象はHumanoid同士だけではない。工程を固定自動化する費用、建屋を改修する費用、人手を残す費用と比べる必要がある。価値は『二足歩行できる』ことではなく、General-purposeなBodyへSoftware skillを追加していく経済性が成立するかにある。",
"日本では既存工場が多く、Brownfieldへ後付けできる価値は大きい一方、安全柵なしで人と混在できるか、保守を誰が担うか、稼働率をどこまで上げられるかが導入判断を決める。"
]}],
sources:[
{label:"Figure — Helix",url:"https://www.figure.ai/helix"},
{label:"Figure — Helix 02",url:"https://www.figure.ai/news/helix-02"},
{label:"Figure — Helix 2.5",url:"https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization"}
]
},{
slug:"autonomous-driving",category:"robotics",eyebrow:"ROBOTICS & PHYSICAL AI / AUTONOMY",
title:"自動運転のLevel思想は、他産業へ輸出される。",
dek:"Waymoが示したのは、運転AIだけではない。『どこまで人間から責任を外せるか』をLevelで考える方法そのものが、AI産業全体へ広がり始めている。",
thesis:"Autonomyを理解する最も強い問いは、『AIが何をできるか』ではなく『誰が失敗時の責任を持つか』だ。",
companies:["Waymo","Autonomous Driving ecosystem"],
depth:{current:"Level 4–5 in defined ODD",target:"Broader Level 4–5 operation",human:"Service design、Safety case、Remote assistance、Policy、例外"},
sections:[
{heading:"自動運転は、AI自律化の先行産業。",body:[
"自動運転では昔から、運転支援と完全自律を同じ言葉で扱わない。人間が常時監視するのか、特定条件だけAIが運転するのか、人間なしで走るのかを分けて考えてきた。",
"この考え方はCoding、Security、Customer Serviceにもそのまま使える。『AIができる』ではなく、『人間はまだ監視し続ける必要があるか』を見る。"
]},
{heading:"Waymoは、限定領域でHumanを外している。",body:[
"Waymoは2026年、6th-generation DriverでFully autonomous operationを拡大し、複数都市で一般向け無人Ride-hailingを展開している。",
"重要なのは、どこでも何でも運転できるAGIではなく、Operational Design Domainを定義し、その範囲でHuman driverを不要にしていることだ。"
]},
{heading:"SimulationがAutonomyを支える。",body:[
"現実世界でRare caseをすべて試すことはできない。Waymo World ModelのようなSimulationは、実道路で遭遇しにくいScenarioを大量に作り、AIの行動を検証する。",
"他業界のAgentでも同じ構造が必要になる。実行前にSandboxで試し、失敗条件を学習し、本番権限を段階的に広げる。"
]},
{heading:"日本にとって、これは遠い未来ではなくなった。",body:[
"Waymoは2026年、日本交通とGOとともに東京で2027年の無人配車サービス商用化準備を発表した。",
"つまりAutonomy Levelは海外の概念ではなく、日本のサービス設計・規制・保険・責任分界へ直接入ってくる。"
]}
,{heading:"自動運転Levelが他産業へ輸出できる理由。",body:[
"自動運転Levelが便利なのは、AIの賢さではなく『誰がいつ責任を持つか』を段階で表せるからだ。Warehouse、Security、Customer Service、Software Agentでも同じで、AssistとAutonomyの差は、異常時に誰が戻ってくるかで決まる。",
"たとえばAIが提案するだけならHuman-in-the-loop。通常運転はAIが担い、人間が監督するならHuman-on-the-loop。さらに定義された条件内で結果確認・再実行まで閉じればAutonomous closed loopに近づく。",
"このLevel思想を使うと、製品比較が『AIを使っているか』から『人間が業務サイクルのどこから外れるか』へ変わる。TECH MEETS JAPANのAutomation Depthもこの考え方を横展開している。"
]}],
sources:[
{label:"Waymo — 6th-generation Driver",url:"https://waymo.com/blog/2026/02/ro-on-6th-gen-waymo-driver/"},
{label:"Waymo — World Model",url:"https://waymo.com/blog/2026/02/the-waymo-world-model-a-new-frontier-for-autonomous-driving-simulation/"},
{label:"Waymo — Tokyo 2027",url:"https://waymo.com/blog/2026/09/opening-tokyo-in-2027-with-nihon-kotsu-go/"}
]
},{
slug:"physical-ai-platforms",category:"robotics",eyebrow:"ROBOTICS & PHYSICAL AI / PLATFORM",
title:"Physical AIの勝者は、ロボット企業か、基盤企業か。",
dek:"NVIDIA Cosmos、Isaac、GR00T。Robot本体の競争の下で、Simulation・World Model・Training・Edge deploymentを握るPlatform競争が進む。",
thesis:"Physical AIでは、Robot一台の知能より『学習を何台へ再利用できるか』がScaleを決める。",
companies:["NVIDIA","Robot foundation model ecosystem"],
depth:{current:"Level 2–3 — Platform intelligence",target:"Infrastructure for Level 4–5 robots",human:"Task definition、Safety、Deployment、Fleet governance"},
sections:[
{heading:"Physical AIには、LLM以上にデータが足りない。",body:[
"Web上のTextと違い、Robotが必要とするのは、物体の位置、重さ、接触、動き、失敗など現実世界のDataだ。しかも実機で収集するのは高コストになる。",
"NVIDIA CosmosはWorld generation、Vision reasoning、Action generationをまとめ、Synthetic dataとRobot policy学習を支える基盤を狙っている。"
]},
{heading:"Simulationが、Robot開発のCloudになる。",body:[
"現実で千回失敗させる代わりに、Virtual environmentで大量Scenarioを作り、学習・評価する。IsaacやCosmosの価値は、Robotメーカーが一からSimulation stackを作らなくてよいことにある。",
"これはPhysical AIにおけるInfrastructure layerだ。"
]},
{heading:"次の争点は、Robot fleetへのServing。",body:[
"Robotが増えると、一台ごとに高性能GPUを持たせるのが最適とは限らない。NVIDIAのROSA研究は、複数Robotが共有GPU poolへアクセスし、工場全体の生産性を最大化するServing modelを示している。",
"Physical AIは一台の賢さから、Fleet computingへ進む。"
]},
{heading:"日本企業はPlatform側でも重要になる。",body:[
"NVIDIAは2026年、日本のFANUC、安川、川崎重工、富士通などがCosmos/Isaac/Jetson系のPhysical AI ecosystemへ参加する動きを発表した。",
"日本の強みはHardwareだけではない。RobotとFactoryの実データを持つこと自体が、Foundation model時代の資産になる。"
]}
],
sources:[
{label:"NVIDIA — Cosmos 3",url:"https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai"},
{label:"NVIDIA — Physical AI",url:"https://www.nvidia.com/en-us/ai/cosmos/"},
{label:"NVIDIA — Japan Physical AI ecosystem",url:"https://nvidianews.nvidia.com/news/japans-robotics-and-manufacturing-leaders-build-on-nvidia-cosmos-to-advance-physical-ai-frontier?page=7"},
{label:"NVIDIA Research — ROSA",url:"https://research.nvidia.com/publication/2026-07_rosa-robotics-foundation-model-serving-system-robot-factories"}
]
},{
slug:"drones",category:"robotics",eyebrow:"ROBOTICS & PHYSICAL AI / DRONES",
title:"ドローンは、『飛ぶカメラ』から作業主体へ進めるか。",
dek:"点検、測量、警備、災害対応。DockとCloud controlが進むことで、ドローンは操縦される機体から、スケジュールで働く遠隔Robotへ変わる。",
thesis:"Drone autonomyの本質は自動飛行ではない。人間が現地へ行かずに、観測→データ取得→異常確認を回せることだ。",
companies:["DJI Enterprise","Autonomous drone ecosystem"],
depth:{current:"Level 3–4 — Automated physical agent",target:"Level 4 — Human-on-the-loop",human:"飛行Policy、異常判断、整備、規制対応、重大Action"},
sections:[
{heading:"Droneは、操縦者から離れ始めている。",body:[
"従来は操縦者が現場へ行き、飛ばし、撮影し、データを持ち帰った。DJI DockとFlightHub 2は、CloudからMissionを予約し、Droneが離陸・飛行・撮影・帰還・充電する運用を可能にする。",
"これにより点検は『人が行く仕事』から『Remote operation』へ変わる。"
]},
{heading:"自動化しやすいのは、繰り返し点検。",body:[
"送電線、Pipeline、屋根、橋梁、太陽光など、同じ場所を定期的に見る仕事はAutomationと相性がいい。",
"Routeを再利用し、Visual/Thermal dataを蓄積すれば、時系列比較もしやすくなる。"
]},
{heading:"ただし、分析はまだ人間が多く残る。",body:[
"飛行・撮影が自動でも、亀裂や異常をどう評価し、保守を実施するかは別工程だ。DJIのInspection workflowでも、画像を人間が確認するかThird-party model detectionへ渡す設計が多い。",
"今後のAutomation Depthは、Flight autonomyより、Inspection decisionまで閉じられるかで決まる。"
]},
{heading:"日本では、人手不足と危険作業の両方に効く。",body:[
"山間部、送電線、橋、工場など、移動コストや危険性が高い場所ほどRemote inspectionの価値が大きい。",
"Droneが人間を完全に消すより、現場へ行く回数を劇的に減らすだけでも事業価値は十分に大きい。"
]}
,{heading:"次の差は、飛行性能より『任務を終えられるか』。",body:[
"Droneが作業主体になるには、目的地まで飛べるだけでは足りない。対象を識別し、異常を判断し、必要なら近づき、撮影・散布・運搬を実行し、結果を記録して戻る必要がある。競争軸は機体性能からMission autonomyへ移る。",
"比較したいのは、人間OperatorがWaypointを指定するのか、AIが状況から次のActionを選ぶのか、通信が切れても任務を継続できるのか、複数機を一人で監督できるのかだ。同じ『自律Drone』でもAutomationとAutonomyには大きな差がある。",
"日本では航空法、目視外飛行、機体認証、現場安全が導入速度を決める。技術的にできることと、現場で任せられることを分けて読む必要がある。"
]}],
sources:[
{label:"DJI Enterprise — Inspection",url:"https://enterprise.dji.com/inspection"},
{label:"DJI Enterprise — Dock",url:"https://enterprise.dji.com/dock"},
{label:"DJI — O4 Ground Station",url:"https://www.dji.com/media-center/announcements/dji-release-o4-ground-station"}
]
},{
slug:"wearable-memory",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / MEMORY",
title:"『全部覚えている』ウェアラブルは、便利か、怖いか。",
dek:"Plaud NotePinのようなWearable AIは、会議メモから日常記憶へ近づく。『記録する』と『記憶する』の境界が薄くなる。",
thesis:"Wearable Memoryの価値は録音ではない。過去の会話を、後から質問できる情報資産へ変えることだ。",
companies:["Plaud NotePin","Wearable AI memory devices"],
depth:{current:"Level 1–2 — Capture / AI Analyst",target:"Level 3 — Contextual memory agent",human:"録音許可、保存判断、削除、プライバシー、利用目的"},
sections:[
{heading:"メモを取る行為そのものが消える。",body:[
"Plaud NotePinはPin、Clip、Wristbandなどで装着し、会話をHands-freeでCaptureし、Transcription、Summary、Action itemへ変換する。",
"ここでの変化は文字起こしではない。人間が『これは重要だからメモしよう』と判断する前に、まず記録して後から意味を取り出せることだ。"
]},
{heading:"Memory deviceは、検索可能な人生ログへ近づく。",body:[
"会議、商談、講義、現場会話を蓄積すれば、『先月あの人は何と言っていたか』『決定事項は何だったか』をAIへ聞ける。",
"これはNotes appよりExternal memoryに近い。Contextが蓄積するほどAI Assistantの理解も深くなる。"
]},
{heading:"最大の壁は、周囲の人の権利。",body:[
"Wearableが小さく自然になるほど、録音されていることに周囲が気づきにくい。製品側もRecording前に相手の同意を得るよう注意を促している。",
"『自分の記憶を拡張する権利』と『他人に記録されない権利』が衝突する領域だ。"
]},
{heading:"日本では、仕事用途から広がる可能性が高い。",body:[
"会議議事録、営業訪問、現場ヒアリングなど目的が明確な場面なら価値が説明しやすい。一方、常時Life-logは社会的受容のハードルが高い。",
"まずは『録音ボタンを押した瞬間だけ記憶するAI』から普及し、その境界が少しずつ広がる可能性がある。"
]}
,{heading:"記憶AIの本当の競争は、録音できるかではない。",body:[
"録音、文字起こし、要約だけならスマートフォンでもできる。Wearable Memoryの差が出るのは、いつ記録を始めるかを人間が意識しなくてよいこと、そして過去の会話・場所・人物を後からContextとして再利用できることだ。",
"一方で、常時Captureが便利になるほど、本人以外の会話をどう扱うか、録音中をどう示すか、削除要求へどう応えるかが製品価値の一部になる。『全部覚えている』ことは機能であると同時に、社会的Permissionの設計でもある。",
"日本で普及するかを見るなら、文字起こし精度だけでなく、録音表示、保存先、第三者同意、企業利用時のData retention、会議Toolとの役割重複まで比較したい。"
]}],
sources:[
{label:"Plaud — NotePin",url:"https://www.plaud.ai/products/plaud-notepin"},
{label:"Plaud — NotePin S",url:"https://www.plaud.ai/products/plaud-notepin-s"},
{label:"Plaud — AI memory capsule",url:"https://global.plaud.ai/blogs/articles/plaud-notepin-dual-mems"}
]
},{
slug:"future-input",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / INPUT",
title:"キーボードの次の入力装置は、何になる。",
dek:"Voice、Vision、Gesture、EMG。AI時代は『文字を打つ』ことより、人間の意図をどう低摩擦で機械へ渡すかが重要になる。",
thesis:"次世代Inputの勝者は、最も未来的なDeviceではない。人間が『操作している感覚』を最も消せるものだ。",
companies:["Meta Neural Band","AI Glasses","Voice AI"],
depth:{current:"Level 1–2 — New input modalities",target:"Level 3 — Context-aware multimodal control",human:"意図、確認、Privacy、誤操作修正"},
sections:[
{heading:"AIは、キーボードと相性が悪い部分がある。",body:[
"生成AIへ長いPromptを書く行為は、自然言語を使っていても依然として『入力作業』だ。人間は本来、見て、話して、指差し、動きながら意図を伝える。",
"AIがMultimodalになるほど、Input device側もText boxから離れる。"
]},
{heading:"Voiceは最も自然だが、すべての場所で使えない。",body:[
"音声はHands-freeで速い。一方、オフィスや公共空間では話し続けるのが不自然な場面もある。",
"そこでGestureやEMGのような静かなInputが意味を持つ。Meta Neural Bandは手首の筋電信号を使い、Glass interfaceを操作する方向を示している。"
]},
{heading:"最終形は、『入力しない』ことかもしれない。",body:[
"AI Glassesが視線や周囲のContextを理解すれば、『これ何？』『次どう行く？』の“これ”を説明しなくてよくなる。",
"Context-aware AIでは、Inputの一部をSensorが代行する。ユーザーが毎回情報を明示的に渡す必要がなくなる。"
]},
{heading:"日本では、公共空間で使えるInputが強い。",body:[
"電車、オフィス、店舗など人の近くで使う場面が多い日本では、常時Voiceより小さなGestureや視線の方が社会的に受け入れやすい可能性がある。",
"未来のDeviceを見るときは、画面サイズではなく『意図を伝えるために何動作必要か』で比較すると面白い。"
]}
,{heading:"Silent Speechは、入力装置そのものを消し始める。",body:[
"Voice UIの弱点は、声を出さなければ使えないことだ。会議中、電車内、工場、寝室、公共空間。AIへ話しかけること自体が摩擦になる場面は多い。そこで注目されるのが、発話時に動く顔・顎・首の筋活動をsEMGで拾い、音を出さずに言語へ変換するSilent Speech Interfaceだ。",
"Engram、Silenzio、SilentWearのような取り組みは、Keyboard対Voiceという比較そのものを古くする。入力競争は『どのDeviceを触るか』から『人間の意図をどのSignalで取るか』へ進み始めている。",
"ただし限定語彙の分類精度と自由会話の連続Decodeは別物だ。位置ずれ、個人差、Calibration、長時間装着、Privacyまで含めて初めて日常Inputになる。"
]}],
sources:[
{label:"Meta — Ray-Ban Display and Neural Band",url:"https://about.fb.com/news/2025/09/meta-ray-ban-display-ai-glasses-emg-wristband/"},
{label:"Meta — AI glasses in Japan",url:"https://about.fb.com/ja/news/2026/08/meta-glasses-launch-in-japan/"}
]
},{
slug:"weird-gadgets",category:"gadgets",eyebrow:"WTF / GADGET",
title:"なんだこれwww — 海外の変態ガジェットを拾う。",
dek:"AI Pin、AI Glasses、Wearable recorder、AI専用端末。完成度より『なぜそれを専用ハードにしたのか』を見ると、次のUIが見えてくる。",
thesis:"変なガジェットは、失敗しても価値がある。既存スマホでは解けないと誰かが感じた『摩擦』を可視化しているからだ。",
companies:["Plaud","rabbit","Meta","AI-native hardware"],
depth:{current:"Experimental",target:"Unknown — category formation",human:"採用判断、Privacy、習慣化、用途発見"},
sections:[
{heading:"変なHardwareは、未来の失敗作か、先行指標か。",body:[
"新しいDeviceは、最初から完成されたCategoryとして現れない。スマホもWearableも、初期には『これ何に使うの？』という製品が大量に出た。",
"AI Hardwareも同じで、Pin、Pendant、Glasses、専用Buttonなど、既存のPhoneとは違う入口を各社が試している。"
]},
{heading:"見るべきは、スペックではなく『消したい摩擦』。",body:[
"Plaud NotePinはメモを取る動作を消そうとする。rabbit r1はAppを探して操作する手順を消そうとする。AI GlassesはPhoneを取り出してCameraを向ける動作を消そうとする。",
"専用Hardwareの存在理由は、AI性能ではなく『この1アクションをなくしたい』という設計思想にある。"
]},
{heading:"失敗製品からも、Categoryの学習が進む。",body:[
"Humane Ai Pinのように市場から退場する製品があっても、『常時AI』『Screenless』『Voice-first』への需要仮説そのものが消えるわけではない。",
"次の企業は、Battery、熱、価格、Latency、Social acceptanceといった失敗原因を学習して再挑戦する。"
]},
{heading:"TECH MEETS JAPANでは、ここを遊び枠にする。",body:[
"全部をAutomation Depthで重く読む必要はない。たまに『何これwww』から入り、なぜ作ったのか、日本で誰が使いそうか、普及障壁は何かを見る。",
"変態ガジェット枠は、未来のCategoryが生まれる直前を拾うためのアンテナでもある。"
]}
,{heading:"『なんだこれ』は、次の標準UIの実験場でもある。",body:[
"奇妙なGadgetを笑って終わらせるのは簡単だ。しかしAI pin、眼鏡、Ring、Neckbandの多くは、スマホの画面を触るという前提をどう崩すかを試している。失敗製品でも、失敗した理由自体が次のUI設計の材料になる。",
"見るべきは販売台数だけではない。なぜ専用Hardwareが必要だったのか、スマホAppでは代替できないInputやContextがあるのか、毎日持ち歩く理由があるのか、充電・Privacy・Social acceptanceを超えられるか。この4点で見ると『変態ガジェット』にも市場仮説が見える。",
"TECH MEETS JAPANでは、変だから載せるのではなく、『この変さが5年後の普通になる可能性はどこにあるか』まで読む。"
]}],
sources:[
{label:"Plaud — NotePin",url:"https://www.plaud.ai/products/plaud-notepin"},
{label:"rabbit — r1",url:"https://www.rabbit.tech/rabbit-r1"},
{label:"Meta — AI Glasses",url:"https://about.fb.com/news/2026/05/ray-ban-meta-ai-glasses-launch-in-japan/"}
]
}
,{
slug:"silent-speech",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / INTERFACE",
title:"人間は、いつまでAIに話しかけるのか。",
dek:"Voiceの次は、声を出すことすら要らなくなるかもしれない。顎、首、手。Silent Speechを読むEMG wearableが、AIへの入力そのものを作り替え始めている。",
thesis:"Silent Speechの本質は『無音で話せる』ことだけではない。人間がAIを操作していると意識する瞬間を、どこまで消せるかにある。",
companies:["Engram","Silenzio","SilentWear / ETH Zürich","GMO Pepabo + Yokohama National University"],
depth:{current:"Level 1–2 — Experimental interface",target:"Level 3–4 — Contextual / silent AI input",human:"意図、確認、Privacy境界、誤認時の訂正、最終操作責任"},
sections:[
{heading:"生成AIは進化した。でも、入口はまだ古い。",body:[
"AIは文章を書き、画像を作り、コードを書き、電話までできるようになった。一方、人間がAIへ指示する方法は、キーボードで打つか、声で話すかという古いInputに強く依存している。Voiceは自然だが、電車、会議中、騒音環境、静かな場所では使いにくい。Privacyの問題もある。",
"Silent Speech Interfaceは、この制約を音声認識の改善ではなく、音そのものを不要にすることで解こうとしている。発話時に動く筋肉の電気信号をsurface EMGで読み、声を出す前の運動信号をDigital inputへ変える。"
]},
{heading:"顎、首、手。人体のどこを入力端子にするか。",body:[
"Engramは耳から顎周辺へ装着する非侵襲Wearableを試作し、Speech muscle signalsをSilent commandやPhraseへ変える構想を掲げる。Silenzioも顔・首周辺のsurface-EMGからSilent articulationを読み、単なるGesture分類ではなく自然言語Decodeを目指す。",
"ETH ZürichのPULP-BioによるSilentWearは14-channelのDry EMG neckbandをOpen-sourceで公開している。Hardware・Firmware・Datasetまで公開することで、Silent Speechを再現可能な研究Platformへ近づけている。"
]},
{heading:"日本勢は、顔に貼りっぱなしにしない方向を出した。",body:[
"GMOペパボ研究所と横浜国立大学の共同研究は、手に装着したSoft EMG interfaceの指先Electrodeを口元へ近づけ、必要なときだけ筋活動を取る方式を提案した。30語Vocabularyを3名で平均97.2±1.3%分類し、Real-time drone controlまで実証している。",
"面白いのはAccuracyだけではない。顔や首へSensorを常時装着する負担を、手を口元へ近づけるGestureへ置き換えている点だ。WearabilityとPrivacyをSensor placementから解こうとしている。"
]},
{heading:"ただし、97%と自然な会話は同じではない。",body:[
"限定WordやCommandを分類するTaskと、自由な文章を連続的にDecodeするTaskの難易度は大きく違う。30語を高精度に分類できても、そのまま無制限のPromptをSilent入力できるわけではない。",
"個人差、Sensor位置ずれ、再装着、汗、未知語、Calibration、長時間装着も課題になる。誤認されたCommandがAgent Actionへつながるなら、入力精度はSafety問題にもなる。"
]},
{heading:"次のUI競争は、画面ではなく『意図までの距離』。",body:[
"Keyboardは指を動かす。Voiceは声を出す。AI Glassesは視界を共有する。Silent Speechは声を出す直前の筋活動を読む。入力技術の歴史を並べると、人間の意図とMachine inputの距離が少しずつ短くなっている。",
"その先では、AIへ明示的にPromptする回数そのものが減るかもしれない。最も優れたAI interfaceは、最終的に『AIを操作している感覚』を消す方向へ進む可能性がある。"
]}
,{heading:"『なんだこれ』は、次の標準UIの実験場でもある。",body:[
"奇妙なGadgetを笑って終わらせるのは簡単だ。しかし、専用AI端末、AI pin、眼鏡、Ring、Neckbandの多くは、スマホの画面を触るという前提をどう崩すかを試している。失敗製品でも、失敗した理由自体が次のUI設計の材料になる。",
"見るべきは販売台数だけではない。なぜ専用Hardwareが必要だったのか、スマホAppでは代替できないInputやContextがあるのか、毎日持ち歩く理由があるのか、充電・Privacy・Social acceptanceを超えられるか。この4点で見ると『変態ガジェット』にも市場仮説が見える。",
"TECH MEETS JAPANでは、変だから載せるのではなく、『この変さが5年後の普通になる可能性はどこにあるか』まで読む。"
]}],
sources:[
{label:"Engram — Silent Speech Interface",url:"https://engramlabs.co/"},
{label:"Silenzio — Speech, without sound",url:"https://silenzio.io/"},
{label:"SilentWear — ETH Zürich / PULP-Bio",url:"https://github.com/pulp-bio/SilentWear"},
{label:"ETH Zürich — Wearable fully-dry EMG neckband",url:"https://www.research-collection.ethz.ch/entities/publication/269abfdb-581f-48b2-a847-7ea8711f7adc"},
{label:"GMO Pepabo Research — 2026 research archive",url:"https://rand.pepabo.com/archive/"},
{label:"Soft Active EMG Interface — 2026 paper",url:"https://arxiv.org/abs/2608.27048"}
]
}

];

export const storyMap=Object.fromEntries(researchStories.map(s=>[s.slug,s])) as Record<string,ResearchStory>;
