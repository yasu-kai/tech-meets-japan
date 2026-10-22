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
slug:"ixana-wir",category:"gadgets",eyebrow:"FRONTIER TECH / SEMICONDUCTORS",title:"人体が通信路になる。IxanaのWi-RはBluetoothを置き換えるのか。",dek:"スマートグラスとスマホ、指先のセンサーを人体近傍の電界で結ぶWi-R。5Mbit/s品の出荷と20Mbit/s品のサンプル提供を起点に、差別化と普及の壁を探る。",thesis:"Ixanaの本質は身体をアンテナにする奇抜さではなく、体の近くにある機器だけを低消費電力で結ぶ『ローカル通信層』を製品にできるかだ。",companies:["Ixana","Wi-R"],depth:{current:"商用化初期：5Mbit/s品出荷、20Mbit/s品サンプル",target:"検証：完成品での消費電力・通信安定性・採用実績",human:"端末設計、人体近傍の安全・電波適合、セキュリティ、保守と操作の選択"},sections:[{heading:"人体を通信経路にするとはどういうことか。",body:["IxanaのWi-Rは人体表面の近くに形成する準静電界を利用し、手首の機器、メガネ、ポケット内のスマホなどを低消費電力でつなぐ技術だ。通常のBluetoothやWi-Fiが空間へ電波を放射して通信するのに対し、身体近傍へ信号を局在させる点を売りにしている。","ただし人体そのものが電池や情報処理チップになるわけではない。送受信端末には専用回路と電力が必要であり、周辺電極・端末配置・接触条件に制約がある。送受信距離を広げる一般用途のWi-Fi代替としてではなく、身体周辺の複数機器接続で評価する必要がある。"]},
{heading:"5Mbit/sの出荷品と、20Mbit/sのサンプルを分ける。",body:["Ixanaの公開ロードマップは5Mbit/s品をshipping、20Mbit/s品を2026年前半からsamplingと整理している。150Mbit/sの高速化や1m超の拡張、電力転送は将来の開発目標であって、現在購入できるシリコンの実測値と混同してはいけない。","スマートグラスの映像やセンサーデータを別端末へ転送するには速度だけでなく、遅延、途切れやすさ、装着姿勢、人体との接触、複数機器時の衝突制御が重要になる。メーカーの公称省電力性能は、Bluetoothなど同条件の実機比較で独立確認する必要がある。"]},
{heading:"競合はBluetoothだけではない。",body:["BLE、UWB、NFC、USB-Cケーブル、独自近接通信と比較する。BLEは既存機器との相互接続とエコシステムに強く、NFCは近接起動に強く、USBは大容量・安定通信が得意だ。Wi-Rの勝ち筋は、身体周辺という限定空間で省電力・低遅延を両立できるなら、軽いウェアラブルから処理をスマホ側へ逃がせる点にある。","反面、専用ICが必要で端末メーカーが採用しなければ市場は広がらない。指先・手首の接触状態、服や汗、利用者の体格差、EMC、データ暗号化、量産のBOMコストまで含めないと、カタログの通信速度だけでは採否を決められない。"]},
{heading:"日本の最初の顧客はスマートグラスメーカーか。",body:["日本での用途候補は軽量スマートグラス、生体センサー、XR入力装置、現場作業員の複数ウェアラブル連携。特にメガネ側の計算と通信の消費電力を減らせるなら、装着重量・熱設計の制約に効く可能性がある。","初期PoCでは、現行BLE構成との電池寿命・伝送速度・接続復帰・温湿度・消費電力の同条件比較、人体への安全性、国内電波・EMC要件、SDKと評価キットの導入費を確認したい。日本での販売代理店募集や国内採用製品は確認できておらず、ここで挙げる用途は編集部の仮説だ。"]}],sources:[{label:"Ixana — Wi-R platform roadmap",url:"https://ixana.ai/technology/roadmap"},{label:"Ixana — official company and products",url:"https://ixana.ai/"},{label:"Ixana — production silicon announcement",url:"https://ixana.ai/news-events/ixana-wi-r-silicon-chip-press-release"}]
},
{
slug:"mudra-link",category:"gadgets",eyebrow:"FRONTIER TECH / HUMAN INTERFACE",title:"指を動かす前の信号を、手首で読む。Mudra Linkはマウスの次になるか。",dek:"3つの神経センサーと6軸IMUを使うリストバンド。ジェスチャー操作の実用範囲、XRでの価値、認識精度と誤操作の課題を検証する。",thesis:"Mudra Linkは『思考を読む腕輪』ではない。手首の生体電気信号と動作情報から、画面に触れず機器を操作する入力方式の実装だ。",companies:["Wearable Devices","Mudra Link","Mudra Band"],depth:{current:"商用：Mudra Link販売ページと対応機器情報を公開",target:"検証：実環境での認識精度・誤作動・長時間装着",human:"操作の意思決定、ジェスチャー学習、誤認識の訂正とアクセシビリティ設定"},sections:[{heading:"これは脳波リーダーなのか。違う。",body:["Mudra Linkが検出するのは脳から頭皮上で直接記録するEEGではなく、手首の神経・筋活動に伴う微弱な生体電気信号だ。メーカーは独自のSNCセンサーとIMUの信号を統合し、ピンチやスライドなどの入力へ分類する方式を説明する。","一部の宣伝では『意図を読む』『BCI』という表現が使われるが、本人の考えを任意の文章として復元するわけではない。実際の出力はジェスチャーやカーソル・キー操作として定義される。BCI研究と混同せず、非接触UIとウェアラブル入力の比較軸で評価したい。"]},
{heading:"売っている製品の仕様は具体的だ。",body:["公式商品ページはMudra Linkを249ドルで販売案内する。1ドル150円の便宜換算では約3.7万円。3つのSNCセンサー、6軸IMU、重さ36g、アクティブ使用最大8時間、IP56を掲げ、Bluetooth HIDでPC、スマホ、XR機器などに接続する。初回セットアップにはWindowsまたはmacOSアプリが必要だ。","メーカーの互換性リストは幅広い一方、OSとアプリによって特定のキー操作が異なる場合がある。国内での最終価格、輸送、サポート、無線規制への対応は販売ページだけでは判断できない。製品の仕様値と長時間利用での実測は分けて見る必要がある。"]},
{heading:"XRで役立つのは、指先が塞がっているとき。",body:["スマートグラスやヘッドセットでは仮想キーボード、空中での大きなジェスチャー、音声操作にそれぞれ弱点がある。周囲に声を出せない会議室や騒音のある作業現場では、小さな手指動作でクリックや決定を出せるメリットがある。","しかし筋肉疲労、汗や装着位置、個人差で信号が揺れる可能性がある。誤認識が許されない操作では物理ボタンや確認UIが必要だ。対応ジェスチャーが増えるほど、覚えやすさ・誤操作率・手指動作の負荷がトレードオフになる。"]},
{heading:"競合するのはマウス、視線、音声、そしてカメラだ。",body:["入力方式の競合はBluetoothマウスやタッチパッド、視線追跡、ハンドトラッキングカメラ、音声操作、指輪型センサーなど。カメラ型は外部光や視野の影響を受けやすく、Mudra型は皮膚接触・電極の状態に依存する。どちらが優れるかは作業場面で変わる。","日本での用途候補はスマートグラス操作、医療・介護現場での非接触端末入力、研究・展示施設。比較試験ではポインター制御精度、誤クリック率、手の疲労、初期校正時間、入力完了までの時間を、既存マウス・音声・ハンドトラッキングと同条件で測りたい。国内代理店や提携希望は未確認。"]}],sources:[{label:"Mudra Link — official product and specifications",url:"https://mudra-band.com/products/mudra-link"},{label:"Mudra — neural sensing architecture",url:"https://mudra-band.com/pages/inside-the-band"},{label:"Mudra — supported gestures",url:"https://support.mudra-band.com/hc/en-us/articles/24721634390301-What-gestures-and-movements-does-the-Mudra-Link-recognize"},{label:"Mudra — device compatibility tests",url:"https://support.mudra-band.com/hc/en-us/articles/26932205746845-Mudra-Link-Media-Keys-Device-Compatibility-Guide"}]
},
{
slug:"ipolish-digital-nails",category:"gadgets",eyebrow:"FRONTIER TECH / BEAUTY HARDWARE",title:"爪に電池はない。iPolishの『300色ネイル』は何で動くのか。",dek:"スマホで選んだ色をMagic Wandからネイルへ転写。色が変わる仕組み、使い捨て前提のコスト、日本市場への展開予定を検証する。",thesis:"iPolishの面白さは『爪がスマホにつながる』ことではない。電池を爪に内蔵せず、色の変更時だけ外部から給電する設計で、デジタル素材を日常の美容用品へ持ち込もうとしている点だ。",companies:["iPolish","Magic Wand"],depth:{current:"予約販売段階：対象国と出荷予定を案内",target:"検証：実出荷・装着耐久・色の再現性・国内販売体制",human:"装着・取り外し、アプリでの色選択、ワンド操作、ネイル安全管理"},sections:[{heading:"アプリから直接爪へ無線で命令するわけではない。",body:["iPolishのFAQによると、専用アプリがBluetoothで通信するのはMagic Wandと呼ぶ機器だ。ワンドへ指先を差し込むと接点からネイルの表示材料へ必要な電力が送られ、色が切り替わる。爪には電池がなく、色を変えた後は給電せず保持する設計だ。","そのため『常時スマホから爪へ無線通信』『人体から発電して色を変える』という理解は現行製品について正しくない。色替えにはワンドを使う必要があり、色が変わる材料の詳細構成・劣化機構は公表FAQだけでは確定できない。"]},
{heading:"300色以上でも、毎回ネイル自体を使い回せるわけではない。",body:["会社は300色以上から選べると説明するが、プレスオンネイル自体は再利用を前提としていない。公式FAQでは装着の保証を7日、試験では14日の連続使用として説明している。爪が伸びるため、1〜3週間ほどで交換する使い方を想定している。","スターターキットにはワンドや接着剤等を含み、その後は交換用ネイルを追加購入するモデル。QRコードはネイルのロット差に合わせた色制御を設定する役割を持ち、約30日間のアプリ利用を可能にする。現時点で別途月額サブスクリプションは不要と説明する。これは『ワンドを一度買えば永久に追加費用なし』という意味ではない。"]},
{heading:"比較対象はジェルネイルと通常の付け爪だ。",body:["ネイルサロンでの塗り替え、ジェル、マグネットネイル、印刷ネイルシール、通常のプレスオンと比べたい。iPolishは1セットで色を何度も変えられる利便性がある一方、ワンドの携行、爪の形状適合、色変化の再現性、装着中の破損、交換ネイルの費用が導入負荷になる。","表示素材が耐水でも、接着剤による皮膚への影響、装着時の衛生、ネイル自体の傷、落下や剥離などは別の話だ。公式がいう耐水性はメーカー説明であり、実使用の長期独立評価は確認できていない。"]},
{heading:"日本が対象国に入っても、販売開始とは限らない。",body:["2026年の公式FAQでは米国やカナダ、英国などを初期提供国とし、日本は2026年後半〜2027年の後続展開予定に記載している。一方、公式の日本語サイトは存在し、アプリは日本のApp Storeでも配信されている。サイトの日本語化、アプリ配信、国内での製品輸入・保証の開始はそれぞれ別だ。","日本への事業展開では、消費者向け直販だけでなくネイルサロンや美容商社を通した供給も考えられる。しかし会社が日本の代理店を募集しているとまでは確認していない。製品輸入・電波適合・電池の輸送・化粧品や接着剤の規制適合、交換品の継続供給を検証してから国内価格を判断したい。"]}],sources:[{label:"iPolish — official FAQ, hardware and launch countries",url:"https://ipolish.fashion/pages/faq"},{label:"iPolish — Japanese storefront and preorders",url:"https://ipolish.fashion/ja/"},{label:"iPolish — official iOS app in Japan",url:"https://apps.apple.com/jp/app/ipolish/id6471020298"}]
},
{
slug:"chargebotic-kestrel",category:"materials-energy",eyebrow:"FRONTIER TECH / ENERGY",
title:"送電線から電気をもらう。ChargeboticのKestrelは何を変えるのか。",
dek:"送電線周囲の磁界から電力を回収するKestrel。18Wの実証と、まだ証明されていない長期運用・安全・経済性を切り分ける。",
thesis:"Kestrelの価値はドローンで発電することではない。電源が届きにくい現場で、既存の送電線を補給インフラへ変えられるかという問いにある。",
companies:["Chargebotic","Kestrel","Magline"],
depth:{current:"実証：2026年8月の18Wフィールドデモ",target:"次の課題：運用中の送電線での継続給電",human:"設置の遠隔操縦、送電管理者の許可、安全性評価、保守運用"},
sections:[{heading:"何をする装置か。",body:["ChargeboticのKestrelは、送電線の近くに飛行してとどまり、交流電流がつくる磁界からMaglineで電力を回収する装置だ。回収した電気はテザーを通じて地上の通信・観測機器や蓄電池へ送る。燃料補給や電池交換が難しい場所で、既存送電網を電源として利用する狙いがある。","これは『空中から無限の電力を生み出す装置』ではない。元のエネルギーは送電網が供給する。線の近くに機器を設置すること自体の安全性・許可・費用は、太陽光や配線工事と比較する必要がある。"]},
{heading:"18Wのフィールド実証と、連続給電の違い。",body:["企業は2026年8月に米Camp Robertsで、120V・100Aの通電した試験線を使い、約10フィート離れた装置から地上へ18Wを取り出したと発表した。Starlink端末、EOカメラ、パッシブレーダー、蓄電池充電などの構成を実証したとしている。","ただし運用中の電力網で長期間電力を回収することは、メーカー自身が次のマイルストーンとしている。短期の実証値を24時間365日の供給実績と同一視してはいけない。各負荷の個別消費量や蓄電池併用条件についても詳細な第三者検証は未確認だ。"]},
{heading:"設計目標の250Wは、まだ実績ではない。",body:["公式資料にある20〜150Wは電流200〜1000Aの送電線での設計レンジであり、2027年第1四半期に目標を置くKestrel 2の50〜250Wも将来計画だ。2026年8月に実際に示した18Wと、技術的に目指す数値を分離する必要がある。","磁界から得られる電力は電流、導体との距離、交流周波数、周辺機器との位置関係、コイルと変換回路の効率などに依存する。特に低負荷時や悪天候、設備への接近制限下でどの程度給電できるかが実用判断の焦点になる。"]},
{heading:"非接触の給電でも、設備接近のリスクは残る。",body:["メーカーは導体を切断・分岐せず、磁界から非接触でエネルギーを回収すると説明している。一方で、線の近くに装置を固定するための機械的な設置方法や、万一の落下・感電・アーク・航行安全への対応は別の課題だ。","Kestrel 1は遠隔操縦であり、線を自動探索して取り付ける機能はKestrel 2で開発中だと明記されている。送電事業者の許可、安全評価、整備員への影響といった条件が整わなければ、電気が取れても商用運用には移れない。"]},
{heading:"競合は発電方式ではなく、補給と配線の総コスト。",body:["代替手段は蓄電池交換、太陽電池と蓄電池、燃料発電機、専用配線工事、既存送電設備向けの誘導給電センサーなど。Kestrelは電線が近くにある場所での補給回数削減を狙うが、電線への接近が不可能な場所では使いにくい。","投資回収を判断するには装置価格だけでなく、設置許可、訓練、保守、撤収、悪天候時の稼働率、事故時責任、既設の電源方式との年間コスト比較が必要だ。公開情報から一般的な投資回収率は計算できない。"]},
{heading:"日本での入り口は、送配電事業者との限定実証。",body:["国内では山間部の遠隔センサー、災害時の一時通信、送配電インフラの監視などが用途仮説になる。もっとも、どの電線からも自由に電力を回収できるわけではない。送電網の管理者が安全と法的条件を承認することが前提だ。","国内での共同実証なら、負荷電流ごとの最低回収電力、長期安定性、送電設備への影響、設置・撤去時の危険度、代替電源との費用差を測るべきだ。日本法人、国内代理店、提携希望の存在は未確認である。"]}],sources:[{label:"Chargebotic — field demonstration and roadmap",url:"https://www.chargebotic.com/"},{label:"Chargebotic — official site",url:"https://chargebotic.com/"},{label:"Chargebotic / Powerbird — project site",url:"https://powerbird.io/"}]
},
{slug:"nori-a3",category:"robotics",eyebrow:"FRONTIER TECH / HOME ROBOTICS",title:"25万円の双腕ロボット。NORI A3は家事の未来をどこまで近づけたか。",dek:"両腕それぞれ1.5kg、4台のカメラ、LiDAR、学習用アプリ。価格を家庭用家電に近づけたNori Roboticsの挑戦を、実際にできる作業と未検証の部分に分けて見る。",thesis:"NORI A3が示す転換点は『万能な家事ロボットの完成』ではない。家庭で教えられる双腕ロボットのハードウェアを、研究室の外へ持ち出せる価格帯に下げようとしていることだ。",companies:["Nori Robotics","NORI A3"],depth:{"current":"技術成熟度：試作〜初期顧客出荷",target:"今後の検証：家庭での反復作業・安全性・保守",human:"作業の教示、誤動作監視、安全確保、故障対応。家庭内での完全自律は未確認。"},sections:[{heading:"25万円で双腕ロボット。価格の意味は『機能の完成』ではない。",body:["Nori Roboticsの公式サイトはNORI A3を1,688ドル（1ドル150円の便宜換算で約25.3万円）の双腕ロボットとして案内する。両腕があり、カメラとLiDARを搭載し、キッチン補助、片付け、物の取り出し、食器の出し入れ、洗濯物をたたむ作業などの用途を掲げる。ただし、用途の紹介と、誰の家でも日常的にその仕事を完遂できるという実証は同じではない。","注目すべきは研究・開発に必要な『身体』が比較的手の届く価格になった点だ。高価な産業用ロボットではなく、家庭サイズの移動・把持プラットフォームとして試行錯誤の母数を増やせる可能性がある。価格には国際輸送、関税、国内支援費用などを含めておらず、日本での最終取得額は未確認だ。"]},{heading:"搭載機能を分解すると、できることの輪郭が見える。",body:["メーカーの公開仕様では腕は各7＋1自由度、最大可搬重量は片腕1.5kg。カメラは4台の720p RGB、最大30fps。LiDARは最大12m、バッテリー駆動は6〜8時間とされる。カメラは物体の位置関係を観察するため、腕はつかむ・動かすため、移動機構は家具間を移るために必要だ。","しかしペイロードだけで食器洗い・調理・畳み作業の可否は決まらない。器の材質、把持失敗、障害物、段差、濡れた物体、子どもやペットがいる状況など、現実の家庭は例外が多い。現段階の評価では、宣伝上の作業一覧より、何回試して何回成功したかという作業単位の公開データを重視したい。"]},{heading:"教えるためのソフトウェアが差別化になる。",body:["Nori Labはロボットの操作・学習・管理を行うノートPC向けアプリとして紹介され、Skills Marketplaceで教えた技能を共有する構想も掲げる。公式のNori SDKでは遠隔操作などの開発機能が公開されており、ハードウェア単体の価格競争ではなく、教示データと技能の蓄積が重要になる設計が見える。","ただし『他人が教えた技能を自宅でもそのまま動かせる』かは異なる問題だ。台所の高さ、家具の形、照明、食器の種類が違うだけでも再学習が必要になる可能性がある。技能共有の価値を検証するには、異なる家庭間での成功率、教示所要時間、復旧率、遠隔介入回数が必要だ。"]},{heading:"出荷開始と成熟度は同義ではない。",body:["公式販売ページは2026年秋の出荷予定を掲示している。一方、2026年5月公開の技術論文（後に更新された可能性がある本文）では2026年7月から顧客へ出荷していると記される。先行ロットや開発者向け出荷と一般注文の納期が異なる可能性があり、単純な矛盾とも、一般向け量産完了とも断定できない。","同論文は小型化と低価格化のため、サーボ保護、電流情報を使う握力推定、昇降機構などの設計を説明する。ただし著者による技術報告であり、独立機関が家庭での多様なタスク成功率を検証した資料ではない。研究用の実装が充実していることと、一般家庭向け完成品としての安全性・保守性は分けて評価する。"]},{heading:"競合は人型ロボットだけではない。",body:["比較対象には、家庭用ヒューマノイド、研究用モバイルマニピュレータ、片腕の卓上ロボット、固定式の調理・食器洗浄機、そして人間の家事代行が含まれる。多目的ロボットは用途を学習で増やせる可能性が強みだが、単一作業では専用機の方が安全・高速・低コストな場合もある。","選定の要点は『何種類の仕事ができると宣伝されるか』ではなく、『時間あたりに、人の介入なく、どの品質で完了するか』。ロボット自体の取得価格だけでなく、破損時の交換部品、クラウド学習費用、技能教示コスト、清掃と保守も比べる必要がある。"]},{heading:"日本で最初に試すなら、万能家事より用途限定の検証だ。",body:["日本の住居は間取りが狭く、家具や床の段差、住宅内の人の動きが複雑なケースもある。日本語音声対応、電源仕様、技適対象となる無線機能、個人情報を扱うカメラ映像の保存先、国内保証などの条件は現時点で確認できていない。開発者向け募集フォームは海外注文者が輸入者になる条件に言及しており、日本向け販売体制を保証するものではない。","最初の検証候補は、研究室や実証施設での特定物品の受け渡し、片付けなど、手順・安全区画・成功条件を定義しやすい仕事だろう。家庭導入の前に、作業成功率、転倒・衝突回避、監督時間、故障時復旧のデータを取る。日本企業との提携希望や国内法人設立は未確認であり、ここに挙げた用途は編集部の仮説である。"]}],sources:[{label:"Nori Robotics — NORI A3 official specifications",url:"https://www.norirobotics.com/"},{label:"Nori A3 — technical paper",url:"https://arxiv.org/abs/2605.16537"},{label:"Nori Robotics — developer beta",url:"https://www.norirobotics.com/beta-signups"},{label:"Nori Robotics — official SDK",url:"https://github.com/Nori-Robotics/Nori-SDK"}]},
{slug:"savor-carbon-fats",category:"materials-energy",eyebrow:"FRONTIER TECH / FOOD MATERIALS",title:"牛も畑も使わずに、バターを作る。Savorの油脂は何を変えるのか。",dek:"CO₂やメタン由来の炭素から脂肪酸を合成し、食品向け油脂へ。Savorの本当の勝負は『食べられる化学』の驚きより、風味・価格・製造規模・環境性能で既存素材に競り勝てるかにある。",thesis:"Savorの価値は奇抜な代替食品ではなく、油脂という食品産業の基幹原料を、農産物の収穫と異なる供給網で調達できるかという構造転換にある。",companies:["Savor","AAK"],depth:{"current":"技術成熟度：製造設備・限定商用用途あり",target:"今後の検証：大型設備・継続供給・価格競争力",human:"製品の配合、品質保証、食品安全、取引条件、供給網・環境評価の判断。"},sections:[{heading:"『空気からバター』の正体は、油脂の化学合成だ。",body:["Savorが説明する製法は、CO₂やメタンなどを炭素源に、触媒・熱・圧力を使って炭素鎖を作り、脂肪酸を経て、グリセロールと組み合わせてトリグリセリド（一般的な食用油脂を構成する分子）へ仕上げる工程だ。最終的には用途に合わせて融点や脂肪酸組成を調整する。植物を育てたり、牛乳から脂肪を分離したりする従来の調達とは出発点が違う。","『空気だけでできる』『エネルギーが不要』という理解は誤りだ。炭素源にはメタン由来原料もあり、水素、熱、電力、製造装置、精製工程が必要だ。技術の独自性は炭素の起源よりも、食品素材として求める脂肪酸の構成や融解挙動を再現する一連の製造プロセスにある。"]},{heading:"バターは、味だけでなく温度と結晶の材料だ。",body:["クロワッサンにバターを使う理由は香りだけではない。折り込むときには一定の硬さを保ち、焼成時には適切に溶け、食べると口の中で滑らかにほどける必要がある。Savorは脂肪酸組成と配合の設計により、植物性代替バターと異なる作業温度域や食感を目指すと説明している。","この特徴は、日本の洋菓子、製パン、チョコレート、冷菓と相性がよい可能性がある。ただし、専門の料理人による採用例があることは、国内量産工場のラインで同じ品質が出るという証明ではない。温度耐性、結晶化速度、保存安定性、酸化、官能評価、アレルゲン表示の扱いを個別に確かめる必要がある。"]},{heading:"『試作品』だけではない。工場と提携が次の段階を示す。",body:["Savorは米イリノイ州Bataviaに約25,000平方フィート（約2,300平方メートル）の油脂製造施設SavorWorks1を設けたと公表している。2024年に最初の製造を行い、2025年には週100kgの製造能力を目指していると説明した。ただし、この目標値が2026年時点で恒常的に達成されたかは独立資料で確認できていない。","2026年7月、油脂メーカーAAKと乳製品代替・製パン用途の共同開発および商用化に向けた提携を発表した。AAKによる出資も公表されている。重要なのは大量生産・グローバル供給が完了したという意味ではなく、食品素材の配合技術、顧客基盤、流通網にアクセスする段階へ進んだという点だ。"]},{heading:"環境性能は『原料と電力の条件』で変わる。",body:["Savorは2026年8月、自社プロセスの温室効果ガス排出削減率を比較対象と原料・エネルギー条件に応じて約50〜98％と説明した。最初の代替乳脂肪については外部機関によるISOに基づくLCAで、従来の乳脂肪より温室効果ガス・土地・水の使用が小さいと公表している。ただし検証報告書の詳細条件を確認せず、すべての原料・工場・国に同じ削減率が当てはまるとはいえない。","メタン由来の原料、回収CO₂、使用電力の排出係数、製造規模、輸送、廃棄・副生成物の取扱いで実際のLCAは変わる。CO₂を原料に取り込むことと、食品として消費後に炭素が永続固定されることも別だ。日本の電源構成での感度分析と、代替されるバター・パーム油の基準ケースを揃えた比較が必要になる。"]},{heading:"競合は植物性バターだけではない。",body:["代替候補には大豆・菜種・パーム・ココナツ由来油脂、微生物による精密発酵油脂、培養由来脂質、従来の酪農・食肉由来脂肪がある。それぞれコスト、供給量、口溶け、風味、アレルゲン、規制、環境負荷で得手不得手が異なる。Savorは農地に依存しない構造が特徴だが、エネルギーと化学原料の価格には影響を受ける。","比較では『植物より環境に優しい』を一言で断定しない。目的用途ごとに、同一の栄養・機能単位、品質条件、製造規模での原価、ライフサイクル排出量、年間供給量を並べなければ、優劣は決められない。"]},{heading:"日本での最初の顧客は、消費者より食品メーカーかもしれない。",body:["日本での導入仮説は、原料高騰の影響を受ける洋菓子・製パン・チョコレートメーカーや、供給源を多様化したい食品素材企業だ。『Savorバター』という完成商品の輸入より、OEMの配合開発や一部置換から入る方が、品質・価格・供給の検証を設計しやすい。","ただし国内の食品原料として使用できるかは、成分規格、製造工程、食品衛生法上の扱い、表示・輸入者責任、既存添加物等への該当可能性について個別確認が必要になる。日本法人、代理店募集、日本での販売実績は確認できていない。実証の第一歩は、原料サンプル、用途別官能試験、既存油脂との機能比較、継続供給見積もりを揃えることだ。"]}],sources:[{label:"Savor — manufacturing process",url:"https://www.savor.it/process"},{label:"Savor — One Process Many Fats",url:"https://www.savor.it/journal/one-process-many-fats"},{label:"Savor — SavorWorks1 production facility",url:"https://www.savor.it/journal/savor-at-scale"},{label:"Savor — AAK scale partnership",url:"https://www.savor.it/journal/aak"},{label:"Savor — environmental LCA methodology",url:"https://www.savor.it/journal/sustainable-fats"}]},
{
slug:"coding-agents",category:"ai-work",eyebrow:"AI × WORK / DEVELOPMENT",
title:"プログラムを書くAIは、開発者の仕事をどこまで任せられるのか。",
dek:"Replit、Cursor、Devinは、コードの提案だけでなく、修正やテストまで進める機能を提供している。開発者の仕事はどう変わるのか。",
thesis:"開発AIの進歩は、コードを速く書けることだけではない。作業を依頼したあと、人が別の仕事をしている間にも修正やテストを進められる点にある。",
companies:["Replit","Cursor","Devin"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"要件定義、設計判断、レビュー、権限管理、本番責任"},
sections:[
{heading:"補完から、仕事の委任へ。",body:[
"初期の開発支援AIは、入力中のコードの続きを提案するものだった。その後、チャットで指示して複数のファイルを編集できるようになった。今は、修正作業を一つ任せたとき、テストまでどこまで進められるかが注目されている。",
"CursorのCloud Agentsは、専用の環境でコードを確認し、修正、テスト、変更内容の提出まで進める。Replit Agentは、文章で指示してアプリを作り、公開するまでの作業を支援する。どちらも、開発者が一つずつ操作する工程を減らそうとしている。"
]},
{heading:"自律性を決めるのは、コード生成能力だけではない。",body:[
"AIに開発作業を任せるには、コードを書くだけでは足りない。テストで失敗を見つけ、修正してもう一度試し、結果を人が確認できるようにする必要がある。",
"企業で使う際は、AIのプログラミング能力に加え、アクセス権限も確認したい。どのコードを読めるか、秘密情報に触れられるか、変更を人の承認なしで反映できるか。便利さと安全性の両方を考える必要がある。"
]},
{heading:"人間はコードを書かなくなるのか。",body:[
"開発者がすぐに不要になるわけではない。まず任せやすいのは、やることが明確で、テストで結果を確かめられる作業だ。例えば不具合の修正やテストの追加、定型的な機能の実装などが考えられる。",
"一方、曖昧な要望を仕様にまとめたり、何を作らないか決めたりする仕事は残る。AIが作った変更を確認し、複数の作業を組み合わせる役割も重要になるだろう。"
]},
{heading:"日本企業にとっての論点。",body:[
"日本企業での導入には、ソースコードや顧客データを外部サービスに渡せるか、誰が変更を承認するかといった確認が欠かせない。開発者個人の便利な道具としてだけでなく、チームの作業手順を変えるものとして考える必要がある。",
"注目したいのは、開発者がAIに任せた複数の作業を同時に確認できるかどうかだ。十分な品質を保ちながら扱える仕事が増えれば、チームの役割分担も変わる可能性がある。"
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
title:"営業AIは、見込み客探しから連絡まで任せられるのか。",
dek:"見込み客を探し、調べ、連絡し、反応を確認する。営業担当者が時間をかけてきた仕事を、AIはどこまで引き受けられるのか。",
thesis:"営業AIの役割はメールを書くことだけではない。連絡先を選び、送る時期や内容を考えるところまで自動化が進んでいる。ただし、判断の正確さには検証が必要だ。",
companies:["Clay","11x","Artisan"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"市場仮説、ICP、重要商談、価格・契約、ブランド責任"},
sections:[
{heading:"営業AIは、文章生成から離れ始めた。",body:[
"営業向けの生成AIは、メールや提案書の下書きだけではなくなってきた。企業の採用情報や資金調達などを調べ、連絡すべき企業と担当者を探し、それぞれに合ったメールを作って送る。こうした作業をまとめて扱うサービスが登場している。",
"Clayは複数の情報源から企業データを集め、Claygentで追加調査し、Sequencerでメールを送る機能を提供している。営業担当者が手作業で行っていた調査や送信準備を、まとめて進められる点が特徴だ。"
]},
{heading:"勝負は『自動化率』ではなく、判断の質。",body:[
"営業先の企業が採用を増やしたり、資金調達したりしても、すぐに自社の商品を買うとは限らない。相手の状況が変わったことと、購入する理由があることは別だからだ。",
"メールを何通送れたかだけでは、営業AIの良し悪しは分からない。連絡しない方がよい相手を除外できるか、相手に合った理由で連絡できるかも重要だ。誤った情報を使ったメールを大量に送らないよう、人が確認する範囲も決めておきたい。"
]},
{heading:"人間に残るのは、関係構築と例外処理。",body:[
"候補企業を探して調べる仕事は、AIに任せやすい。一方、重要な顧客への提案や価格交渉、契約条件の調整、失注した理由の聞き取りには、人が直接関わる場面が多い。",
"営業担当者がすべて不要になるわけではない。調査や入力にかける時間を減らし、どの顧客と話すべきか、何を提案すべきかを考える時間に充てられる可能性がある。"
]},
{heading:"日本企業で起きるのは、SDRの再設計かもしれない。",body:[
"日本企業では、営業担当者を置き換えるよりも、まず企業調査やメール作成を助ける使い方が考えられる。ただし、顧客データの正確さ、個人情報の扱い、既存の顧客管理システムとの連携は確認が必要だ。",
"導入効果を確かめるなら、メールの送信数だけでは足りない。有望な商談を1件作るまでの時間が短くなったか、商談の質が下がっていないかを、導入前と比べたい。"
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
"テキストや画像から動画を生成する能力は急速に一般化した。そこで各社の差は、映像制作のどこを取りに行くかへ移っている。Runwayは生成・編集・演技表現を一つの制作環境へ寄せ、HeyGenは人物・アバター・翻訳・APIを通じて『出演者を必要とする動画』を大規模化し、Synthesiaは研修や社内コミュニケーションを中心に企業向け運用と管理体制を強く意識している。",
"同じAI Videoでも、狙っている代替対象が違う。"
]},
{heading:"第二ラウンドは、作業工程の戦い。",body:[
"企業が毎月数百本の動画を作るとき、重要なのは最高品質の1本ではない。企画から生成、修正、ブランド統制、多言語化、承認、公開までをどれだけ安定して回せるかだ。",
"HeyGenはWebページから動画を生成するAgent 作業工程や多言語Avatarを拡張し、Synthesiaは企業向け向けのCollaboration、管理体制、APIを押し出す。映像AIは『クリエイティブツール』から『コンテンツ生産基盤』へ近づいている。"
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
dek:"Generate、Edit、Performance、企業向け 管理体制。Runwayを見るとき、生成モデル単体より“撮影後の仕事までどこまで吸収するか”が重要になる。",
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
"そのため現在はLevel 3に近い。今後、ブランドルールや過去成果を読み、複数案を生成し、評価し、最終候補を提示するところまで進めばAIが進め、人が監督する運用へ近づく。"
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
"一方で、問題の検知、原因候補の提示、過去対応の検索、作業手順の提案までをAIへ寄せれば、人間は最終承認と例外処理へ集中できる。製造AIの現実的な進化は、いきなり無人工場ではなくAIが進め、人が監督する運用化だ。"
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
"ここが重要な転換点だ。『人の歩行を削るロボット』から、『一つのFulfillment 作業工程を丸ごと持つロボット群』へ変わる。"
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
{label:"Harvey — Platform",url:"https://www.harvey.ai/platform"},
{label:"Thomson Reuters — CoCounsel",url:"https://legal.thomsonreuters.com/en/products/cocounsel"}
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
"そのため短期的にはAIが進め、人が監督する運用が中心になる。人間はすべてのアラートを見るのではなく、AIがエスカレーションした重要案件とPolicy設計を担当する。"
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
dek:"社員だけでなく、Agent自身が企業システムへ接続し、権限を使い、処理を実行する。Identityは『人間のログイン管理』からAgent 管理体制へ広がる。",
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
{label:"Horizon3.ai — NodeZero",url:"https://www.horizon3.ai/nodezero/"},
{label:"XBOW — Autonomous Pentesting",url:"https://xbow.com/"}
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
"AdobeのFirefly Creative Productionは、ブランドに沿った大量のコンテンツ生成を、作業工程 authoring・Runtime・管理体制まで含めて扱う方向へ進んでいる。"
]},
{heading:"価値は『生成』より『再利用可能な作業工程』。",body:[
"単発で良い画像を出せても、毎回指示文から作り直すなら業務化しにくい。Firefly GraphのようなNode-based 作業工程は、入力・生成・編集・出力を接続し、同じ処理を再利用できるようにする。",
"ここでクリエイティブ資産は完成物だけでなく、『どう作ったか』という作業工程そのものになる。"
]},
{heading:"撮影すら、Variant生成の一部になる。",body:[
"3D Digital Twinと生成AIを組み合わせれば、物理撮影なしに複数背景・角度・チャネル向け素材を作れる。商品撮影のコスト構造も変わる可能性がある。",
"特にSKU数が多い企業ほど、1商品の制作費より、全商品×全市場×全チャネルの総コストで効いてくる。"
]},
{heading:"人間は、量産作業からブランド統制へ。",body:[
"AIがVariationを増やすほど、間違ったロゴ、禁止表現、古い商品情報が大量拡散するリスクも増える。だからブランドの基準、承認、Asset source-of-truthが重要になる。",
"生成速度が上がるほど、人間の仕事は作ることから『何を許可するか』へ移る。"
]}
,{heading:"Variationが増えるほど、評価と配信まで自動化したくなる。",body:[
"100案を作れるようになると、次に詰まるのは『どれを出すか』だ。人間が100案をすべて確認し、媒体ごとに選び、結果を見て次案を作るなら、生成だけ高速化しても作業工程全体は詰まったままになる。",
"そこでSynthetic Mediaの次の競争は、ブランドの基準を守ってVariationを作り、媒体実績を受け取り、次の案を更新するClosed loopへ進む。Creative productionとPerformance marketingの境界が薄くなる。",
"ただしCTRだけを最適化するとBrandや長期価値を壊す可能性もある。何を最適化してはいけないかを人間が決める管理体制が必要になる。"
]}],
sources:[
{label:"Adobe — Firefly Graph",url:"https://business.adobe.com/blog/meet-firefly-graph"},
{label:"Adobe — Creative Production for Enterprise",url:"https://helpx.adobe.com/jp/firefly/web/work-with-enterprise-features/creative-production/creative-production-overview.html"},
{label:"Adobe — 3D digital twin workflows",url:"https://helpx.adobe.com/firefly/web/work-with-enterprise-features/creative-production/use-3d-digital-twin-workflows.html"}
]
},{
slug:"creative-stack",category:"ai-creative",eyebrow:"生成AIと制作業務",
title:"Adobeを置き換えるのか、Adobeの中に入るのか。",
dek:"画像や動画を作るAIが増える中、企業は仕上がりの良さだけでなく、著作権への対応や社内の確認手順も考える必要がある。",
thesis:"画像や動画を作るAIは、性能だけで選べない。制作の流れに組み込み、素材や利用権限を管理しやすいことも重要だ。",
companies:["Adobe","OpenAI","Google","Creative AI ecosystem"],
depth:{current:"複数の生成AIを使い分ける",target:"制作手順や承認を含めた運用",human:"モデル選定、ブランド設計、承認、権利、最終表現"},
sections:[
{heading:"画像や動画の生成AIを、用途によって使い分ける。",body:[
"画像や動画モデルが次々に更新されると、企業が制作工程を一つのAIだけに依存するリスクが増える。昨日の最高モデルが半年後も最適とは限らない。",
"Adobe Firefly Graphは、Adobeの制作ツールと複数のAIを、作業の流れに沿って組み合わせる仕組みを提案している。"
]},
{heading:"企業では、品質だけでなく利用条件も重要になる。",body:[
"個人で試すなら仕上がりの良さを優先できる。しかし企業で使う場合は、商用利用の可否、著作権侵害に関する補償、入力データの扱い、ブランドの決まり、社内の承認手順も確認しなければならない。",
"企業が生成AIを選ぶ際には、作品の出来栄えだけでなく、安心して業務に使えるかどうかも比較する必要がある。"
]},
{heading:"Adobeが強いのは、既存制作工程を持っていること。",body:[
"Photoshop、Illustrator、Premiere、Frame.ioなど、すでに現場で使われている制作ツールにAIを組み込めることはAdobeの強みだ。生成AIで素材を作っても、仕上げや素材の管理を従来のツールで行うなら、Adobeを使い続ける理由になる。",
"逆に新興AI企業は、従来工程そのものを消すことで勝ちに行く。"
]},
{heading:"日本企業でも、用途に応じたAIの使い分けが課題になる。",body:[
"画像、動画、音声で得意なAIが違うなら、用途や利用条件に合わせて使い分ける方法が考えられる。ただし、複数のAIを管理する手間も増える。",
"大切なのは契約するAIの名前だけではない。どの作業で使い、誰が確認し、どこで完成させるかまで決める必要がある。"
]}
,{heading:"制作現場に残るのは、どのサービスか。",body:[
"画像はA社、動画はB社、音声はC社と使い分ける企業も考えられる。その場合、素材の保存場所、利用できる人、著作権の確認、修正履歴などをまとめて管理できるかが課題になる。",
"Adobeは既存の制作工程や素材管理とのつながりに強みがある。一方、Runwayなどの新興企業は新しい表現や制作速度で選ばれる可能性がある。企業側は、使うAIを変更しても日々の制作が滞らないかを確かめたい。",
"今後はAIの生成品質だけでなく、複数のサービスを無理なく使い分けられる制作環境にも注目したい。"
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
"OpenAI for Healthcareも、臨床・研究・事務の作業工程を支援しながら、企業向け securityやHIPAA対応を前提にする構成を取っている。"
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
"だから比較したいのはAccuracyだけではない。AIが何を根拠に提案したかをClinicianが確認できるか、異常時にHumanへ戻せるか、医療記録へどう残るか、責任主体が明確か。Healthcare AIではAIが進め、人が監督する運用が弱さではなく設計要件になる。",
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
"だからRetail AIを比較するときは、予測精度だけでなく、どのKPIを同時に制約として扱えるか、Human overrideがどこにあるか、価格変更の理由を説明できるかを見るべきだ。価格決定はModel性能より管理体制の問題になりやすい。",
"日本では店舗ごとの裁量、チラシ・ポイント施策、メーカーとの商慣行も絡む。完全自律価格より、需要予測と提案をAIが担い、例外だけ人間が承認するAIが進め、人が監督する運用型から広がる可能性が高い。"
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
"たとえばAIが提案するだけならHuman-in-the-loop。通常運転はAIが担い、人間が監督するならAIが進め、人が監督する運用。さらに定義された条件内で結果確認・再実行まで閉じればAutonomous closed loopに近づく。",
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
"飛行・撮影が自動でも、亀裂や異常をどう評価し、保守を実施するかは別工程だ。DJIのInspection 作業工程でも、画像を人間が確認するかThird-party model detectionへ渡す設計が多い。",
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
"生成AIへ長い指示文を書く行為は、自然言語を使っていても依然として『入力作業』だ。人間は本来、見て、話して、指差し、動きながら意図を伝える。",
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
{label:"Meta — AI glasses in Japan",url:"https://about.fb.com/ja/news/2026/08/meta-glasses-launch-in-japan/"},
{label:"Engram — Silent Speech Interface",url:"https://engramlabs.co/"},
{label:"SilentWear — ETH Zürich / PULP-Bio",url:"https://github.com/pulp-bio/SilentWear"}
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
"限定WordやCommandを分類するTaskと、自由な文章を連続的にDecodeするTaskの難易度は大きく違う。30語を高精度に分類できても、そのまま無制限の指示文をSilent入力できるわけではない。",
"個人差、Sensor位置ずれ、再装着、汗、未知語、Calibration、長時間装着も課題になる。誤認されたCommandがAgent Actionへつながるなら、入力精度はSafety問題にもなる。"
]},
{heading:"次のUI競争は、画面ではなく『意図までの距離』。",body:[
"Keyboardは指を動かす。Voiceは声を出す。AI Glassesは視界を共有する。Silent Speechは声を出す直前の筋活動を読む。入力技術の歴史を並べると、人間の意図とMachine inputの距離が少しずつ短くなっている。",
"その先では、AIへ明示的に指示文する回数そのものが減るかもしれない。最も優れたAI interfaceは、最終的に『AIを操作している感覚』を消す方向へ進む可能性がある。"
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

,{
slug:"browser-agents",category:"ai-work",eyebrow:"AI × WORK / COMPUTER USE",
title:"SaaSは残る。でも、人間は触らなくなる。",
dek:"Webサービスは、人間が画面を見てクリックするために作られてきた。Browser Agentが一般化すると、その前提自体が崩れる。次に変わるのはSaaSの機能ではなく、誰がUIを操作するかだ。",
thesis:"Browser Agentの本質はRPAの置き換えではない。APIがない業務までAIが触れるようになり、ブラウザそのものがAgentのUniversal APIになることにある。",
companies:["Browserbase","Anthropic","Stagehand","Browser Agents"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop",human:"目的、権限、例外、最終承認、高リスク操作"},
sections:[
{heading:"SaaSは、人間がクリックする前提で作られている。",body:[
"企業の仕事はSaaSへ移った。CRM、ATS、会計、購買、サポート、管理画面。しかしAPIが整備されているのは業務の一部で、実際には人間が画面を開き、検索し、コピーし、入力し、Submitすることでシステム同士をつないでいる。",
"Computer UseやBrowser Agentが重要なのは、既存SaaS側がAgent対応するのを待たず、AIが人間と同じGUIを操作できることだ。AnthropicはComputer Useを『画面を見て、カーソルを動かし、クリックし、入力する』能力として提供してきた。これは専用APIがなくても仕事の入口を作れるという意味を持つ。"
]},
{heading:"Browserbaseは、ブラウザをAgentのInfrastructureとして売り始めた。",body:[
"Browserbase Agentsは、自然言語でGoalを渡すと、AgentがWebを移動し、操作し、Structured resultを返すManaged Browser Agentとして提供されている。従来のBrowser AutomationではSiteごとにScriptやSelectorを保守する必要があったが、Agentは画面やDOMを見ながら次のActionを選ぶ。",
"Stagehandも同じ方向を示す。Playwright系の操作を残しつつ、act・observe・extractのようなAI向けPrimitiveを加え、ページ変更に対してSelf-healingする。つまりBrowser Automationは『壊れないSelectorを書く競争』から、『目的を達成できるAgentを作る競争』へ移っている。"
]},
{heading:"ブラウザがUniversal APIになると、SaaSの価値の置き場所が変わる。",body:[
"人間が直接SaaSを操作しなくなると、UIの使いやすさだけでは差別化しにくくなる。Agentが裏でSalesforce、HubSpot、Workday、ServiceNowを操作し、人間はSlackやChatからGoalだけ渡す世界では、ユーザーは個々のSaaS画面をほとんど見ない可能性がある。",
"Browserbase自身も、社内Agent『bb』がSlackからPR作成、Snowflake調査、HubSpot登録、Browser operationまで横断する事例を公開している。ここで価値を持つのは『最も使いやすい画面』ではなく、Agentが安全に使える権限、Data、作業工程、監査性になる。"
]},
{heading:"ただし、GUIを操作できることと、任せてよいことは別。",body:[
"Browser Agentは人間と同じ画面を触れるため、誤操作も人間と同じように本番へ反映される。さらにWebページには指示文 Injectionが混入し得る。Agentが閲覧したページ上の命令を信頼すると、意図しない操作やData流出につながる。",
"そのため実運用では、閲覧だけ、下書きまで、更新可能、送信・決済可能といったActionごとの権限境界が必要になる。Browser Agentの自律性を上げるほど、確認画面を減らすことより『どこで必ず止めるか』を設計することが重要になる。"
]},
{heading:"消えるのはSaaSではなく、『SaaSを操作する仕事』かもしれない。",body:[
"CRMも会計も採用Systemも残る。ただし、それぞれの画面を人間が覚え、毎日巡回し、同じ情報を転記する仕事は減っていく可能性が高い。SaaSは人間向けApplicationから、Agentが使うSystem of recordへ近づく。",
"この変化が進めば、Software選定の基準も変わる。UIだけでなく、Agentが読めるData、実行可能なAction、権限の細かさ、監査Log、失敗時のRollbackが重要になる。人間は『どの画面を操作するか』ではなく、『Agentへ何を任せるか』を設計する側へ移る。"
]}
],
sources:[
{label:"Browserbase — Introducing Browserbase Agents",url:"https://www.browserbase.com/blog/introducing-browserbase-agents"},
{label:"Browserbase — How we build Internal Agents",url:"https://www.browserbase.com/blog/internal-agents"},
{label:"Browserbase — Stagehand",url:"https://www.browserbase.com/stagehand"},
{label:"Anthropic — Computer Use",url:"https://www.anthropic.com/news/3-5-models-and-computer-use"}
]
}

,{
slug:"agentic-dev-security",category:"ai-security",eyebrow:"AI × SECURITY / AGENTIC DEVELOPMENT",
title:"コードを書くAI。守るのは誰だ。",
dek:"コードを書く側がAIになるなら、守る側も人間だけでは追いつかない。MCP、Skill、外部Toolまで使うCoding Agentの登場で、Securityは『生成後のCode review』から『Agentの行動を別のAIとPolicyで監視する』仕事へ広がっている。",
thesis:"次のAppSecは、AIが書いたCodeを人間が後から全部読む形では回らない。Developer Agentとは独立したSecurity AgentとDeterministic engineが、何を使い、何を実行し、何を生成したかを継続検証する構造へ移る。",
companies:["Snyk","Evo ADS","Claude Code","Cursor / Copilot / Codex"],
depth:{current:"Level 3 — Agent-governed development",target:"Level 4 — Continuous policy enforcement",human:"Policy、Risk appetite、例外承認、Security ownership"},
sections:[
{heading:"コードを書くAIを、人間だけで守るのは無理がある。",body:[
"Developer Agentが複数Taskを並列で進めると、生成されるCodeとActionの量は人間のReview capacityを簡単に超える。しかもRiskはCodeだけに現れない。MCP Serverへ接続し、Skillを読み、外部Toolを呼び、Local fileやBrowserへAccessする時点からSecurity eventは始まっている。",
"Snykが約1万のDeveloper environmentを調査した結果では、複数のAI Coding環境、MCP Server、Agent Skillがすでに広く使われており、Tool descriptionへの指示文 InjectionやSkill内のMalicious patternも確認されている。Softwareを作る『環境』自体がSupply Chainへ加わったと見るべきだ。"
]},
{heading:"新しいRiskは、What agents use / do / generateの3面にある。",body:[
"SnykのAgentic Development Securityは、Agentが『何を使うか』『何をするか』『何を生成するか』を別のControl surfaceとして整理している。MCPやSkillの安全性、実行中のAgent action、最後に生成されたCode。従来のSASTだけでは、この3つのうち最後しか見えない。",
"特にMCPは、Agentへ外部Systemの権限を与えるAccess layerになる。便利だから接続したToolが、過剰権限、悪意あるInstruction、未管理Credentialを持てば、Code品質とは無関係にSecurity incidentが起き得る。"
]},
{heading:"『AIが書いたものを、同じAIに自己採点させない』という思想。",body:[
"SnykはAI Security Platformで、生成者と検証者を分離するIndependent validation layerを明確に打ち出している。Frontier modelのReasoningだけに任せず、SAST、SCA、Secrets、Container、IaCなどのDeterministic engineと組み合わせて検証する。",
"これはAI監査全般にも通じる。生成AIは自分が生成した内容の前提や意図を共有しているため、同じSystemだけでSelf-reviewすると盲点が残る。SpeedをAIに渡すほど、Validationは独立させる必要がある。"
]},
{heading:"Security control pointはCI/CDより前、Agentの実行の過程へ移る。",body:[
"AgentがToolを呼ぶ前、Credentialへ触れる前、Commandを実行する前にPolicyをEnforceできれば、RiskがArtifactになる前に止められる。Snykは2026年、MCP 管理体制を含むGovern Agent BehaviorをGAへ進め、実行の過程内でAgent actionを統制する方向を強めている。",
"これはShift Leftのさらに左側だ。DeveloperがCodeを書く前に、Agentが何をしようとしているかをSecurityが見る。AppSec TeamはCode reviewerだけでなく、AI workforceのPermission designerへ役割を広げることになる。"
]},
{heading:"AI開発の速度が上がるほど、人間のSecurity reviewだけでは追いつかない。",body:[
"Agentが複数Taskを並列で進めると、Code generationの量は人間DeveloperのReview capacityを超えていく。だからSecurityもMachine speedへ移らざるを得ない。ただし、AIが自動修正まで行うほど、どのRiskを許容するかというPolicyは人間側に残る。",
"将来の開発組織では、Developer AgentとSecurity Agentが同時に動き、人間はすべてのLineをReviewするのではなく、Policy violationと高Risk例外だけを見る構造が自然になる。『AIが書いたコードを誰が守るのか』への答えは、別のAI。ただし、そのAIへ何を許すかを決めるのは人間だ。"
]}
],
sources:[
{label:"Snyk — AI Security Platform",url:"https://snyk.io/jp/platform/"},
{label:"Snyk — Evo Agentic Development Security",url:"https://snyk.io/jp/news/snyk-launches-evo-agentic-development-security/"},
{label:"Snyk — Agentic Development Risk Research",url:"https://snyk.io/blog/agentic-development-security-ai-coding-risk/"},
{label:"Snyk — MCP Governance Goes GA",url:"https://snyk.io/blog/evo-ads-govern-agent-behavior-ga/"}
]
}

,{
slug:"procurement-agents",category:"ai-industry",eyebrow:"AI × INDUSTRY / PROCUREMENT",
title:"購買部門に、AIの同僚が増えている。",
dek:"購買部門に増えているのは、ひとつの万能AIではない。申請内容を確認するAgent、Supplierを調べるAgent、Riskを見るAgent、RoutingするAgent。Zipは購買業務を細かな役割へ分解し、AIの『同僚』を複数配置する方向へ進んでいる。",
thesis:"Procurement Agentの本質は、購買担当者を一人のAIで置き換えることではない。Intake、Risk、Supplier、Approvalという役割ごとにAgentを置き、人間を例外・交渉・Policyへ寄せる『AI込みの購買組織』を作ることにある。",
companies:["Zip","OpenAI Procurement","Agentic Procurement Orchestration"],
depth:{current:"Level 3 — AI Agent",target:"Level 4 — Human-on-the-loop procurement",human:"Supplier選定、交渉、Policy、例外、高額案件の最終責任"},
sections:[
{heading:"購買部門の仕事は、すでに複数のAgentへ分解できる。",body:[
"購買Requestが来ると、担当者は申請内容を読み、Order Formと突合し、既存Supplierかを確認し、SecurityやLegalへ回し、金額やPayment termの不一致を見つける。ひとつひとつは小さな仕事だが、件数が積み上がると大きな工数になる。ここに役割別Agentを置ける余地がある。",
"ZipはProcurement Orchestrationを、複数部門にまたがるこの作業工程全体をつなぐLayerとして位置づけている。Agentic AIが入ると、RuleでRouteするだけでなく、Documentを読み、差分を検出し、次のActionを提案・実行するところまで自動化範囲が広がる。"
]},
{heading:"OpenAIの事例は、『確認作業』がAgent化しやすいことを示す。",body:[
"Zipが公開するOpenAIの事例では、Intake Validation Agentが申請内容と添付DocumentやSupplier recordを突合し、不一致を自動でFlagする。従来15〜20分かかっていた確認が秒単位へ短縮されたとされる。",
"この種のTaskは、購買判断そのものではないが件数が多い。だからAgent化による効果が出やすい。人間が全Requestを最初から読むのではなく、矛盾・不足・高Risk案件だけを見る構造へ変えられる。"
]},
{heading:"50以上のAgentという発想は、購買を機能ではなく役割へ分解する。",body:[
"Zipは2025年に50以上のProcurement向けAI Agentを発表し、Intake routing、Vendor risk、Supplier recommendationなど個別TaskへAgentを配置する方向を示した。これは一体型の『購買AI』ではなく、Category manager、Analyst、Coordinatorが持っていた細かな役割をAgentへ分配する考え方に近い。",
"重要なのはAgent数ではない。どのAgentがDataを読み、どこまでActionを起こし、どこでHuman approvalへ戻るかだ。Agent同士をOrchestrateするほど、権限・監査Log・Escalation設計がProduct価値になる。"
]},
{heading:"Supplier選定や交渉まで完全自律化できるかは別問題。",body:[
"価格比較やSupplier候補抽出はAIに向く。一方、Supplierとの関係、供給継続性、契約上の微妙な条件、社内政治、将来のStrategic valueはDataだけで決めにくい。高額・長期契約ほど、人間が責任を持つ理由は残る。",
"だからProcurement Agentの現実的な到達点は、すべてを自動購入することではなく、定型RequestをStraight-through processingし、例外だけ購買担当者へ上げるAIが進め、人が監督する運用型だろう。"
]},
{heading:"購買担当者は、『申請を回す人』からPolicy designerへ移る。",body:[
"AgentがDocument確認、Risk screening、Routing、Supplier情報収集を担えば、人間が使う時間は交渉、Category strategy、Supplier relationship、Policy設計へ移せる。購買DXの本当の価値は承認画面を新しくすることではなく、担当者の仕事の配分を変えることにある。",
"日本企業で導入を見るなら、AI精度だけでなく、既存稟議・法務・情報Security・会計Systemを横断できるか、誰が例外を持つか、AI判断の根拠を監査できるかを見るべきだ。"
]}
],
sources:[
{label:"Zip — 2025 Global Growth and AI-powered Transformation",url:"https://ziphq.com/guides/zip-in-2025"},
{label:"Zip — 90-Day ROI / OpenAI Procurement Agents",url:"https://lp.ziphq.com/rs/195-QFD-187/images/eBook_90_Day-ROI-Zip.pdf?version=0"},
{label:"Zip — Executive Guide to Procurement Orchestration",url:"https://lp.ziphq.com/rs/195-QFD-187/images/Zip_Executive_Guide.pdf?version=0"},
{label:"Zip — 2026 Procurement Predictions",url:"https://lp.ziphq.com/rs/195-QFD-187/images/2026_Procurement_Predictions_Zip.pdf?version=0"}
]
}

,{
slug:"robotics-as-labor",category:"robotics",eyebrow:"ROBOTICS & PHYSICAL AI / BUSINESS MODEL",
title:"ロボットを“買う”時代が終わる。",
dek:"工場がRobotを導入する時、これまでは『設備を買う』のが前提だった。FormicのRaaSは、その前提を崩す。Robot本体ではなく、設計・保守・稼働率まで含む『作業能力』を月額で使う。Automationが設備投資から労働力調達へ近づき始めている。",
thesis:"RaaSの本質は分割払いではない。Robot Vendorが導入・保守・稼働率のRiskを持ち、顧客はHardwareの所有ではなく成果と稼働時間へ払う。Robot市場の競争軸を『何台売るか』から『何時間働かせるか』へ変える可能性がある。",
companies:["Formic","Robotics-as-a-Service","SMB Manufacturing"],
depth:{current:"Level 2–3 — Managed automation",target:"Level 4 — Outcome-based robotic labor",human:"工程設計、Safety、例外、改善、現場責任"},
sections:[
{heading:"Robotを買う、という前提そのものがBarrierだった。",body:[
"中小製造業がRobotを導入しようとすると、機体価格だけでなく、Cell設計、Integration、Installation、Programming、保守、故障対応、Upgradeまで『設備を所有する側』の責任になる。投資回収が見えにくい工程では、技術的に自動化できても稟議が止まる。",
"特に初めてAutomationを導入する工場では、何を買えばよいか、誰が止まったRobotを直すか、需要変動で設備が余ったらどうするかというRiskが大きい。Robotの性能より、導入後の責任分界がBarrierになる。"
]},
{heading:"FormicはRobotではなく、稼働するSystemを売る。",body:[
"FormicのRobotics-as-a-Serviceは、設計、導入、24/7 Monitoring、Maintenance、UpgradeまでをManaged serviceとしてまとめ、初期CapExを抑えた月額・稼働ベースの契約を提供する。公式情報では、顧客が生産している時間に対して支払い、Performanceを契約で保証するモデルを強調している。",
"ここで重要なのはFinance手法だけではない。Robotが止まるとVendor側のRevenueにも影響するため、従来の『設備を納品したら終わり』より、Vendorと工場のIncentiveが稼働率で揃いやすい。"
]},
{heading:"Robot購入から『Robot workforce』へ変わると、導入単位も変わる。",body:[
"Cameron's Coffeeの公開事例では、Palletizingから始め、12か月で複数Systemへ拡大している。最初に巨大なAutomation projectを組むのではなく、一工程で稼働実績を作り、次の工程へ増やす。",
"このモデルでは、Automationを設備更新Cycleではなく、人員配置に近い感覚で追加できる可能性がある。何台のRobotを所有しているかではなく、何時間の作業能力を確保するかがManagement指標になる。"
]},
{heading:"RaaSが普及すると、Robotメーカーの競争軸も変わる。",body:[
"Hardware性能だけで売るなら、速さ、可搬重量、精度が中心になる。しかしService化すると、Uptime、Mean time to repair、Remote support、Swap、Software update、導入Lead timeまでProductになる。",
"さらにVendorがPerformance Riskを引き受けるほど、最適なRobotを自社製に限定する理由は薄れる。工程ごとに最も経済的なHardwareを組み合わせ、裏側でFleetを管理する『Robot operator』が価値を持つ可能性がある。"
]},
{heading:"日本で刺さるなら、大企業より中堅・中小工場かもしれない。",body:[
"日本の大手製造業は既にIntegratorや設備部門を持つ企業も多い。一方、中堅・中小工場では人手不足が強くても、Automation Engineerを抱えられず、数千万円単位のCapExを怖がるケースがある。",
"だから日本でRaaSを見るときは、Robot技術そのものより、初期費用、最低契約期間、稼働率保証、保守拠点、故障時SLA、工程変更時の再構成費用を見るべきだ。Robotを『買えるか』ではなく、『人を採用する代わりに月額で使えるか』まで下がれば、市場は一段広がる。"
]}
],
sources:[
{label:"Formic — Full Service Automation / No CapEx",url:"https://formic.co/lp/accounting-for-robots"},
{label:"Formic — Robotics-as-a-Service Overview",url:"https://land.formic.co/formic-robotics-as-a-service-affordable-automation-for-growth"},
{label:"Formic — Cameron's Coffee Customer Story",url:"https://formic.co/resources/customer-stories/cameron-s-coffee-hits-automation-easy-button-scaling-from-0-to-5-systems-in-12-mo"},
{label:"Formic — State of U.S. Manufacturing / RaaS",url:"https://land.formic.co/2024-us-manufacturing-report"}
]
}

,{
slug:"embodied-ai-reception",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / PHYSICAL AI",
title:"受付に立つのは、人間でも画面でもない。",
dek:"受付のDigital化は、長く『人を減らして画面を置く』ことだった。Protoが狙うのはその次だ。Knowledgeと会話能力を持つAI Avatarを物理空間へ置き、来訪者の前にDigital Agentそのものを立たせる。",
thesis:"Embodied AI Receptionの本質はホログラム演出ではない。AIが店舗・受付・会場というPhysical touchpointに『身体』を持ち、人間StaffとKioskの間に新しい接客レイヤーを作れるかにある。",
companies:["Proto Hologram","ProtoOS","AI Avatar","Spatial Computing"],
depth:{current:"Level 2–3 — Interactive AI avatar",target:"Level 4 — Human-on-the-loop physical service agent",human:"例外対応、Brand policy、本人確認、高Risk案内、接客品質管理"},
sections:[
{heading:"受付に画面を置く時代から、AIそのものを立たせる時代へ。",body:[
"無人受付やKioskは珍しくない。しかし多くはTouch panelやTabletにFormを表示し、人間が入力する構造だ。Chatbotを載せても、ユーザーは『端末を操作する』感覚から抜けない。Protoが変えようとしているのは、この入口そのものだ。",
"Proto Hologramは、Holographic device、ProtoOS、Conversational AI、AI Avatarを組み合わせ、Physical spaceへ対話可能なAvatarを置くPlatformを提供している。ここではUser interfaceが画面のMenuではなく、人型の存在そのものになる。"
]},
{heading:"AI Avatarの価値は、見た目より『その場にいること』。",body:[
"Protoの企業向け solutionでは、Knowledge baseやLLMへ接続したPhotorealistic multilingual avatarを店舗、Office、Venue、KioskへDeployできる。Existing displayをAI-enabled assistantとして使う構成もある。",
"つまり必ずしも大型Hologram装置が本質ではない。重要なのは、WebのChatbotで終わっていたAI AgentをPhysical customer journeyへ接続し、来訪者がその場で質問し、案内を受け、必要なら人へEscalateできることだ。"
]},
{heading:"『人が足りない受付』と『人を置くほどではない場所』の間を埋める。",body:[
"Hotel、Showroom、Hospital、Event venueでは、常時人員を置くにはCostが高いが、無人Kioskだけでは体験が弱い場所がある。AI Avatarは多言語対応、定型案内、FAQ、Product explanationを常時提供できる。",
"特に複数拠点で同じBrand messageを出したい企業では、AvatarのPersona、Knowledge、言語、説明内容をCentralに管理できることが価値になる。人間Staffの教育・配置とは異なるScaleの仕方が可能になる。"
]},
{heading:"ただし、見た目が人間に近いほど期待値も上がる。",body:[
"PhotorealisticなAvatarは『何でも答えられそう』に見える。だから回答できない質問、本人確認、契約変更、医療・金融のような高Risk案内で失敗した時の違和感も大きい。",
"Physical spaceでは周囲のNoise、複数人の発話、Privacy、視線、Display位置、待ち時間もUXに効く。Web Chatbotより環境条件が複雑になるため、導入評価は会話精度だけでなく、現場で何割を自己解決し、何割を人へつなげるかで見るべきだ。"
]},
{heading:"次に競うのは、受付Staffの代替率ではなく『Agentの存在感』かもしれない。",body:[
"AI GlassesはAIを個人へ近づけ、Silent SpeechはInputを身体へ近づける。一方、ProtoのようなEmbodied AIは、AIを建物や店舗側へ常設する。AI interfaceがScreenから離れる方向は複数ある。",
"将来、店舗へ入るとAI Agentが人の姿で案内し、必要な時だけRemote humanへ切り替わるなら、Reception deskは人員配置ではなくSoftware＋Hardwareの運用問題になる。『受付を無人化する』より、『AIに物理的な接点を与える』という見方の方が本質に近い。"
]}
],
sources:[
{label:"Proto Hologram — Official Platform",url:"https://protohologram.com/"},
{label:"Proto Hologram — Enterprise Solutions",url:"https://protohologram.com/enterprise-solutions/"},
{label:"Proto Hologram — FAQ / Platform Overview",url:"https://protohologram.com/faqs"}
]
}

,{
slug:"bridge-ultrasound-bci",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / NEUROTECH",
title:"脳にチップを埋めない。BCIの本命争いに「超音波」が入ってきた。",
dek:"Neuralinkが脳内電極で高解像度の信号を取る一方、Bridge Neurotechは頭蓋骨の外から超音波で脳血流を読み、AIで意図へ変換しようとしている。勝負は『どこまで読めるか』だけではない。BCIを、何人まで届けられるかだ。",
thesis:"Bridgeの本質は、非侵襲であることそのものではない。Butterflyの半導体超音波とAI decodingを組み合わせ、これまで『信号品質を取るなら手術が必要』だったBCIのTrade-offを崩せるかにある。",
companies:["Bridge Neurotech","Butterfly Network","Merge Labs","Neuralink","Synchron","Neurable"],
depth:{current:"Research stage — observational human study",target:"Wearable non-invasive BCI",human:"意図の確認、誤認訂正、Privacy、医療判断、高Risk操作"},
sections:[
{heading:"BCIは、ずっと『信号品質か、非侵襲か』の二択だった。",body:[
"脳のIntentをComputerへ直接渡すBCIは、長く同じTrade-offを抱えてきた。脳内へ電極を置けば高いSignal-to-noise ratioと速い応答を狙えるが、手術が必要になる。頭の外から読むEEGはWearableにしやすい一方、頭蓋骨や皮膚を通る間にSignalが弱まり、空間分解能や深部Signalに制約が出る。",
"Bridge Neurotechの創業者Will Biedermanは、このTrade-off自体を変えようとしている。2026年10月にStealthを出たBridgeは1,350万ドルを調達し、手術もImplantも使わないBCIを掲げた。Biederman自身、大学院時代にNeuralinkが初期Deviceで使ったNeural recording chipを開発した経歴を持つ。"
]},
{heading:"Bridgeが賭けるのは、電気ではなく『血流』。",body:[
"Bridgeが使うのはFunctional Ultrasound Imaging、fUSだ。Ultrasound arrayがBrainへ高速にSound pulseを送り、動く赤血球から返るEchoの変化を追う。Brain regionが活動すると近くの血管が拡張し、血流が変化する。そのHemodynamic signalを使って、どこが活動しているかをFunctional imageとして捉える。",
"重要なのは、BridgeがNeuronのElectrical spikeを直接読んでいるわけではないことだ。fUSは神経活動に伴う血流変化をProxyとして読む。これはfMRIに近い考え方で、Electrical BCIとは取っているSignalの種類が根本的に違う。BridgeはこのFunctional imageをAIでDecodeし、MeaningやIntentへ変換することを目指している。"
]},
{heading:"小型化の鍵は、Butterflyの『Ultrasound-on-Chip』。",body:[
"BridgeはButterfly Networkと複数年のR&D契約を結び、Butterfly Embedded経由でUltrasound-on-Chip技術を利用する。Butterflyは従来のPiezoelectric crystalではなく、半導体上へ約9,000のCMUT素子を集積した2D arrayを使う。Beam steeringをSoftwareで制御でき、従来大型だったUltrasound systemをHandheld probeへ縮小してきた。",
"この半導体化がBCIで重要になる。Brain interfaceを日常Wearableにするには、Lab equipmentの性能だけでは足りない。小型、低消費電力、多数Element、Programmable beamという条件が必要になる。Bridgeは最終的にTemporal window付近へ置く、Headphoneに近いForm factorを構想していると説明している。"
]},
{heading:"最大の敵はAIではない。頭蓋骨だ。",body:[
"Bridge自身が挙げる最初の技術課題は、Skull越しのImagingだ。BoneはUltrasoundをScatterしAbsorbする。しかも厚みや形状は人ごとに異なり、Aberrationも個人差が大きい。Transcranial fUS研究でも、Skull-induced aberrationによるImage qualityとSensitivity低下は依然として主要課題とされている。",
"Bridgeの最初のObservational studyが面白いのは、その問題を正面から測ろうとしていることだ。Healthy adultに加えて、Skullの一部をPEEKまたはLongeviti Implantへ置換したCranioplasty経験者を募集し、Soundが通りやすい条件をReferenceとしてIntact skull越しのDataと比較する。これはまだ治療Trialではなく、Listen、Watch、Move、SpeakといったTask中のBrain activityを測るData collection studyだ。"
]},
{heading:"『思考を読む』には、もう一つの壁がある。血流はNeuronより遅い。",body:[
"Functional Ultrasoundは高いSpatial resolutionと広いField of viewを持つ一方、SignalはNeurovascular couplingを介したHemodynamic responseだ。NeuronがFireしてから血流が変化するまでには自然なDelayがある。WIREDの取材でも専門家は数秒規模のLagを指摘し、高速TypingやRobot armの瞬時制御では課題になり得るとしている。",
"BridgeはPredictive AI modelでこのDelayを補う方向を示している。ただし、AIが血流から未来のIntentを予測できることと、『自由な思考を直接読める』ことは全く違う。現時点でBridgeが実証しているのは完成BCIではなく、Skull越しにFunctional brain dataを安定取得し、Across peopleでDecodeできるかを確かめるResearch stageだ。"
]},
{heading:"競合を並べると、BCIは『侵襲度 × Signal × Wearability』の競争だと分かる。",body:[
"NeuralinkのN1は1,024 Electrodeを64本のFlexible threadへ載せ、Brain tissueへ直接置く。Neuronに近いElectrical signalを高速に取れる代わりに、Robot-assisted surgeryが必要になる。SynchronのStentrodeはJugular veinからCatheterでBrain blood vessel内へ入れるためOpen brain surgeryは避けられるが、体内Implantである点は変わらない。",
"Neurableは12個のDry EEG sensorをHeadphoneのEar cushionへ入れ、FocusやFatigueを日常的に測る完全Non-invasive Routeを商用化し始めている。ただしEEGは頭皮上でElectrical signalを読むため、深部や空間分解能では制約がある。BridgeとMerge Labsは、その中間に『Ultrasound』という別Routeを置こうとしている。",
"つまりBCI市場は、単純なNeuralink対非侵襲ではない。高いSignal fidelityを取りに行くIntracortical、手術負担を下げるEndovascular、Wearabilityを取るEEG、Spatial resolutionと非侵襲性の両立を狙うfUS。それぞれが別のTrade-offを選んでいる。"
]},
{heading:"BridgeとMergeが同じButterflyを選んだ。BCIの『つるはし』を握る会社がいる。",body:[
"BridgeとMerge Labsは競合になり得るが、両社ともButterfly NetworkのUltrasound-on-Chipを使う。Mergeは2026年1月に2.52億ドルを調達し、ButterflyとはCMOS-MEMS chip-based ultrasoundのExclusive partner契約を結んだ。一方Butterflyは、同じTechnologyをBridgeにもLicenseする権利を保持している。",
"この構図は面白い。BCIの勝者がBridgeかMergeかを当てるより、Ultrasound BCIが伸びた時にHardware foundationを誰が押さえるかを見る方が事業的には重要かもしれない。Butterfly EmbeddedはBCI以外にもRobotics、Catheter、TherapyなどへUltrasound-on-Chipを外販しており、BCI競争の裏でPlatform providerのPositionを取り始めている。",
"つまりBridgeの記事を読む時、Bridgeだけを追うと半分しか見えない。非侵襲BCIが成立するかというScienceの勝負と、そのScienceを小型・量産可能なDeviceへ落とすSemiconductor platformの勝負が同時に走っている。"
]},
{heading:"日本で最初に刺さるのは、XRより『身体を使えない人のInterface』。",body:[
"Bridgeが成功しても、最初から一般消費者がHeadphone型BCIでPCを操作する世界になる可能性は低い。臨床Benefitが大きい領域ほど、多少の装着負荷やCalibrationを許容しやすい。重度運動障害、Communication支援、Neurorehabilitation、Research interfaceの方が初期Marketとして自然だ。",
"日本で医療用途へ入る場合、HardwareとDecoding softwareのIntended use次第で医療機器としてPMDA・厚生労働省の審査対象になり得る。日本には革新的医療機器やSaMDの優先審査・相談制度もあるが、Bridgeはまだ米国でもObservational study段階だ。日本参入を語るなら、まずClinical evidence、再現性、Safety、Data 管理体制、国内Research partnerを見るべきだ。",
"その先にPC操作、XR、Hands-free computingがある。もしBridgeがSkull越しのSignalを日常Wearableで安定Decodeできれば、BCIのMarketは『手術を受ける少数』から『Deviceを装着する多数』へ桁を変える可能性がある。だからこの会社の価値は、今読めるThoughtの量ではなく、BCIの利用母数をどこまで広げられるかにある。"
]},
{heading:"初回の人対象研究は、完成品の試験ではない。",body:["Bridgeは2026年10月、健常成人と、PEEKまたはLongevitiによる頭蓋形成術を受けた成人を対象とする観察研究への参加者募集を公表した。聞く・見る・話す・動くといったタスク中に超音波画像を記録し、頭蓋骨越しの計測信号を、音が通りやすい修復材越しのデータと比較する設計である。","メーカーは独立した倫理審査委員会による承認、同意取得、治療や診断をしない観察研究であることを明記している。しかし、それは一般向けBCIの実用性や臨床有効性が証明されたことを意味しない。ヘルメット型の計測装置の研究実施と、市販ウェアラブルの完成も区別する必要がある。"]},
{heading:"次に確認すべきは、頭蓋骨越しの画像と意図解読の再現性だ。",body:["機能的超音波は神経電位の直接測定ではない。超音波の反射から赤血球の動きや血流変化を推定し、脳活動を間接的に読む。頭蓋骨による散乱・吸収、個体差、反応速度、体動、長時間の装着性といった条件が成否を左右する。","日本で実用化を評価するには、健常成人での信号品質、別日に測定した際の再現性、個人間モデルの転用性、実時間解読の誤差、必要な校正時間を確認したい。Bridgeによる日本向け販売、代理店募集、国内臨床計画は公開一次情報では未確認であり、用途の紹介は現段階では編集部の仮説となる。"]}
],
sources:[
{label:"Bridge Neurotech — Official",url:"https://www.bridgeneurotech.com/"},
{label:"Bridge Neurotech — Approach",url:"https://www.bridgeneurotech.com/approach"},
{label:"Bridge Neurotech — First Research Study",url:"https://www.bridgeneurotech.com/study"},
{label:"Bridge Neurotech — Founder Letter",url:"https://www.bridgeneurotech.com/letter"},
{label:"Butterfly Network — Bridge Partnership",url:"https://english.butterflynetwork.com/press-releases/bridge-neurotech-partnership"},
{label:"Butterfly Network — Ultrasound-on-Chip",url:"https://www.butterflynetwork.com/technology"},
{label:"Butterfly Network — Merge Labs Partnership",url:"https://www.butterflynetwork.com/press-releases/merge-labs-bci-partnership"},
{label:"WIRED — Bridge Neurotech Launch",url:"https://www.wired.com/story/bridge-neurotech-startup-rival-sam-altman-merge-labs/"},
{label:"Synchron — Stentrode Technology",url:"https://synchron.com/technology"},
{label:"Neurable — Neurable One",url:"https://www.neurable.com/blog-posts/neurable-one-is-here-the-headphones-ive-wanted-to-build-for-10-years"},
{label:"Nature Reviews Electrical Engineering — Scaling ultrasonic BCI beyond the lab",url:"https://www.nature.com/articles/s44287-026-00312-8"},
{label:"IEEE / PubMed — Towards Transcranial Functional Ultrasound Imaging Through the Adult Skull",url:"https://pubmed.ncbi.nlm.nih.gov/41926414/"},
{label:"PMDA — Medical Device Review / SaMD",url:"https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/devices/0048.html"}
]
}

,{
slug:"ultrasound-bci",category:"gadgets",eyebrow:"GADGETS & FUTURE DEVICES / NEUROTECH",
title:"脳に穴を開けない。超音波BCIが走り出した。",
dek:"Neuralinkのような埋め込み型BCIが高精度を追う一方、Bridge Neurotechは『手術をしない』道を選んだ。頭蓋骨の外から超音波で脳血流を捉え、AIで意図を読み解く。まだ研究初期だが、BCIを一部の患者向け医療機器から、より広い人が使える入力装置へ広げる条件が見え始めている。",
thesis:"BCI普及の最大の分岐点は、精度だけではない。手術が必要かどうかだ。Bridgeが挑む超音波BCIは、空間解像度と非侵襲性を両立しながら、頭蓋骨越しの信号取得とリアルタイム解読という難題を越えられるかが勝負になる。",
companies:["Bridge Neurotech","Butterfly Network","Merge Labs","Neuralink","Synchron","Neurable"],
depth:{current:"Level 1–2 — Research-stage neural sensing",target:"Level 3–4 — Intent-driven computer control",human:"装着、校正、意図の確認、高リスク操作、医療判断"},
sections:[
{heading:"BCIの次の勝負は、『脳に近づく』ではなく『手術から離れる』ことかもしれない。",body:[
"脳コンピューターインターフェースは、すでに実験室だけの技術ではない。NeuralinkやSynchronなどは、人の意思をComputerへ伝える実証を進めている。ただし高品質な信号を取るため、多くの方式は手術や体内へのDevice挿入を伴う。高い精度と引き換えに、利用対象はどうしても限られる。",
"Bridge Neurotechが置いた賭けは逆だ。FounderのWill Biedermanは、学生時代に後のNeuralink初期Chipにつながるneural interface技術を開発しながら、今は完全非侵襲のBCIを目指している。2026年10月にStealthから出たBridgeは1,350万ドルを調達し、『脳に穴を開けないInterface』を掲げた。"
]},
{heading:"Bridgeが見ているのは神経発火そのものではなく、血流の変化だ。",body:[
"Bridgeが使うfunctional ultrasoundは、超音波Pulseを脳へ送り、動いている赤血球から返るEchoの変化を捉える。脳領域が活性化すると近くの血管が拡張し、血流が増える。その変化をImageとして捉え、どの領域が活動しているかを推定する。",
"つまり『思考を超音波で直接読む』わけではない。神経活動に伴うHemodynamic responseを介して間接的に見る。Bridge自身もfMRIに近い考え方として説明している。この違いは重要で、非侵襲で深部を見られる可能性がある一方、神経電位を直接取る埋め込み電極より時間応答では不利になりやすい。"
]},
{heading:"最大の敵は、頭蓋骨そのもの。",body:[
"Bridgeが公式に挙げる技術課題は2つある。ひとつは頭蓋骨越しのImaging。骨は超音波を散乱・吸収し、その影響も人によって異なる。もうひとつはDecodingで、得られたImageを意味のある意図へリアルタイム変換し、個人差を越えて使えるModelへすることだ。",
"その難しさは最初のHuman studyにも表れている。Bridgeは健康な成人に加え、PEEKやLongeviti製Cranioplastyを受けた成人を募集している。骨よりSoundを通しやすいImplant越しのDataをReferenceとして、intact skull越しのSignalと比較する。つまり現時点では『誰でもHelmetを被ればPCを操作できる』段階からはかなり遠い。"
]},
{heading:"しかも、超音波BCIはBridgeだけの賭けではない。",body:[
"Butterfly NetworkのUltrasound-on-Chipは、この分野の重要な基盤技術になり始めている。BridgeはButterfly Embeddedを通じて同社Technologyを使う一方、Sam Altmanらが創業したMerge LabsもButterflyと複数年契約を結び、超音波BCIを開発している。Mergeは2026年1月に2.52億ドルを調達しており、資本規模ではBridgeを大きく上回る。",
"一方でBCI全体では、Neuralinkの埋め込み電極、Synchronの血管内Electrode、NeurableなどのEEG系が異なる位置にいる。比較すべきなのは単純な『精度ランキング』ではない。侵襲性、空間解像度、時間解像度、装着性、個人校正、長時間利用、Consumer化のしやすさを一緒に見る必要がある。"
]},
{heading:"日本で面白いのは、医療より先に『入力装置』として考えた時。",body:[
"Bridge自身はまず、身体が意思を外へ出せない人に新しいInterfaceを届ける意義を強く語っている。そこが最初の社会的価値であることは変わらない。ただ、手術不要のBCIが本当にWearableまで小型化できれば、その先にはAssistive technologyだけではない市場が見える。",
"PC操作、XR、Gaming、Hands-free control、Silent communication。Keyboard、Mouse、Voiceの次に『意図』がInputになる可能性がある。日本では高齢化、身体障がい者支援、Care、製造現場のHands-free operationとの相性も考えられる。ただし実用化前に、精度、Latency、個人差、Privacy、医療機器規制、脳Dataの扱いという巨大な壁がある。今見るべきなのはProduct完成度ではなく、『非侵襲BCIがどこまで現実のInterfaceに近づいたか』だ。"
]},
{heading:"本当に変わるのは、Computerではなく『入力』の前提。",body:[
"今のAIは賢くなった。それでも人間はKeyboardを打ち、Screenを触り、Voiceで命令する。つまり人間の意図は身体を経由してMachineへ渡っている。Bridgeが言う『body is the only interface to the mind』という問題設定は、BCIを医療だけでなくHuman-computer interactionの話に広げる。",
"もし手術なしで、十分な精度と速度で意図を読み取れるなら、BCIは特殊な医療Deviceではなくなる。そこまで行けるかはまだ分からない。むしろ今は、頭蓋骨越しのDataがどこまで取れるかを確かめ始めた段階だ。ただ、その最初の壁を越えた時、KeyboardやVoice interfaceと同じ土俵にBCIが入ってくる可能性がある。"
]}
],
sources:[
{label:"Bridge Neurotech — Approach",url:"https://www.bridgeneurotech.com/approach"},
{label:"Bridge Neurotech — Founder Letter",url:"https://www.bridgeneurotech.com/letter"},
{label:"Bridge Neurotech — First Research Study",url:"https://www.bridgeneurotech.com/study"},
{label:"Bridge Neurotech — About",url:"https://www.bridgeneurotech.com/about"},
{label:"Butterfly Network — Bridge partnership",url:"https://ir.butterflynetwork.com/News/press-releases/news-details/2026/Bridge-Neurotech-and-Butterfly-Network-Announce-Partnership-to-Develop-Fully-Non-Invasive-Brain-Computer-Interface/"},
{label:"Butterfly Network — Merge Labs partnership",url:"https://www.butterflynetwork.com/press-releases/merge-labs-bci-partnership"},
{label:"Bridge Neurotech — first observational human study",url:"https://www.bridgeneurotech.com/study"},
{label:"Bridge Neurotech — technology approach",url:"https://www.bridgeneurotech.com/approach"}
]
}

];

export const storyMap=Object.fromEntries(researchStories.map(s=>[s.slug,s])) as Record<string,ResearchStory>;
