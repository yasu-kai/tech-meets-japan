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
],
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
],
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
],
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
],
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
],
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
];

export const storyMap=Object.fromEntries(researchStories.map(s=>[s.slug,s])) as Record<string,ResearchStory>;
