# Batch 16 — six independent second-pass editorial reviews (2026-10-30)

## Scope and evidence discipline
Six formerly PENDING canonical Research articles were read independently against product-maker primary pages and the relevant research paper, rather than inherited first-pass self-evaluation. The published draft contains ~2,700–3,000 Japanese body characters per article in 10 substantive sections. The usual 3,000–5,000-character range is guidance, not a pass/fail target; no unsupported padding was introduced. Source-dependent claims and vendor-marketing evidence are identified. The canonical editorial PASS below is separate from Vercel and Playwright publication QA.

Editorial corrections to `lib/researchStories.ts` committed at `3fdd85164c92dc7539235ebb643db63dc6e2190e`. All article slugs, category assignments, adopted image mappings and image binaries unchanged. The original 43-row first-pass table is untouched.

## ixana-wir
- verdict: **PASS** (independent editorial second pass only)
- score: **91/100**
- blocking_findings: **none remaining after corrections**
- warnings: 38倍のビット当たりエネルギー差はNordic nRF54L15のBLE 2M/+4dBmという指定条件でのメーカー比較。完成端末の電池寿命や国内量産採用を保証しない。
- generic_text: No material interchangeable vendor-neutral filler remained after checking the complete article; the mechanism and measurable choice criteria are specific.
- unsupported_claims: No material unsupported claim retained as established fact; forward-looking deployment/use cases explicitly marked as editorial hypotheses or unverified.
- comparison_failures: No blocking failure. Alternatives are compared by use-case and operating constraints rather than numerical ranking or false product equivalence.
- required_fixes: **completed** — 現稿の出荷YR23（100kbit/s〜5Mbit/s）と評価サンプルYR31（最大20Mbit/s）、150Mbit/sロードマップ、実効速度とチップ消費電力の区別を確認。追加修正不要。
- input/output/replaces and product specificity: 人体・導電構造物に沿う局所電界→両端のWi-R電極・チップ→データ伝送。Bluetoothは既存端末との互換性で優位、Wi-Rは近接機器間の電力制約で評価。
- primary evidence:
  - https://ixana.ai/products/chips/wi-r-ban
  - https://ixana.ai/technology/wi-r-ban

## mudra-link
- verdict: **PASS** (independent editorial second pass only)
- score: **90/100**
- blocking_findings: **none remaining after corrections**
- warnings: 価格は2026-10-30の米国向け公式表示。国内価格・税・送料・輸入条件と、Studio Evaluation Kitの同梱範囲は未確定。装着条件による誤認識率の実測は未確認。
- generic_text: No material interchangeable vendor-neutral filler remained after checking the complete article; the mechanism and measurable choice criteria are specific.
- unsupported_claims: No material unsupported claim retained as established fact; forward-looking deployment/use cases explicitly marked as editorial hypotheses or unverified.
- comparison_failures: No blocking failure. Alternatives are compared by use-case and operating constraints rather than numerical ranking or false product equivalence.
- required_fixes: **completed** — 重大な価格不一致を発見し、旧249米ドル（約37,350円）から公式499米ドル（約74,850円、仮定150円/USD）へ訂正。Mudra Studio Evaluation Kitとの関係を追記。
- input/output/replaces and product specificity: 手首のSNCセンサー3基と6DoF IMU→ジェスチャー分類→Bluetooth HIDマウス/キーボード入力。声・視線・カメラ操作との使い分けと初期設定OS制約を具体化。
- primary evidence:
  - https://mudra-band.com/products/mudra-link
  - https://mudra-band.com/pages/mudra-studio
  - https://mudra-band.com/pages/compatible-with-mudra

## ipolish-digital-nails
- verdict: **PASS** (independent editorial second pass only)
- score: **91/100**
- blocking_findings: **none remaining after corrections**
- warnings: 予約販売と国内正式出荷を混同しない。色の独立再現性・長期耐久・国内規制対応は未確認。価格は税・送料別の米ドル公式表示。
- generic_text: No material interchangeable vendor-neutral filler remained after checking the complete article; the mechanism and measurable choice criteria are specific.
- unsupported_claims: No material unsupported claim retained as established fact; forward-looking deployment/use cases explicitly marked as editorial hypotheses or unverified.
- comparison_failures: No blocking failure. Alternatives are compared by use-case and operating constraints rather than numerical ranking or false product equivalence.
- required_fixes: **completed** — 公式FAQに基づきQRコードの30日アプリ利用、別途定期課金不要、ロットごとの色表示補正という実用上重要な仕様を追記。
- input/output/replaces and product specificity: スマホアプリ→BluetoothでMagic Wand→2接点でネイル表示を切替、爪は電池なし。再利用を前提としない付け爪とワンドの継続利用を区別。
- primary evidence:
  - https://ipolish.fashion/pages/faq
  - https://ipolish.fashion/collections/frontpage

## chargebotic-kestrel
- verdict: **PASS** (independent editorial second pass only)
- score: **90/100**
- blocking_findings: **none remaining after corrections**
- warnings: 線上への固定方法と導体の絶縁距離は公開資料から完全には判断できない。試験線18Wを運用中の高圧送電線の連続電力に外挿しない。
- generic_text: No material interchangeable vendor-neutral filler remained after checking the complete article; the mechanism and measurable choice criteria are specific.
- unsupported_claims: No material unsupported claim retained as established fact; forward-looking deployment/use cases explicitly marked as editorial hypotheses or unverified.
- comparison_failures: No blocking failure. Alternatives are compared by use-case and operating constraints rather than numerical ranking or false product equivalence.
- required_fixes: **completed** — 『送電線の近くにとどまる』の曖昧さを修正。遠隔操縦で線上へ移動し固定する一方、メーカーは導体に非接触と説明する点を明記。ホバリング発電との誤解を排除。
- input/output/replaces and product specificity: 送電線電流の磁界→Magline誘導回収→テザー→地上24V DC。18W実証、20〜150W設計範囲、Kestrel 2の50〜250W目標を区別。太陽光・発電機・電池との運用費用比較。
- primary evidence:
  - https://www.chargebotic.com/

## nori-a3
- verdict: **PASS** (independent editorial second pass only)
- score: **90/100**
- blocking_findings: **none remaining after corrections**
- warnings: 販売ページの秋出荷表示と技術論文の7月からの顧客出荷は対象ロットが違う可能性があり、一般向け量産完了とは断定しない。安全・日本語・国内保証は未検証。
- generic_text: No material interchangeable vendor-neutral filler remained after checking the complete article; the mechanism and measurable choice criteria are specific.
- unsupported_claims: No material unsupported claim retained as established fact; forward-looking deployment/use cases explicitly marked as editorial hypotheses or unverified.
- comparison_failures: No blocking failure. Alternatives are compared by use-case and operating constraints rather than numerical ranking or false product equivalence.
- required_fixes: **completed** — 公式価格1,688米ドル、片腕1.5kg、4カメラ、LiDAR、19自由度、20.4kg、69〜145cmの伸縮機構とSDK/技能共有の研究段階を照合。重大な本文修正不要。
- input/output/replaces and product specificity: カメラ/LiDAR入力→遠隔操作・技能教示→双腕把持・移動。固定専用機や家事代行と、タスク完了率・人手介入・安全性・保守で比較。
- primary evidence:
  - https://www.norirobotics.com/
  - https://arxiv.org/abs/2605.16537
  - https://github.com/Nori-Robotics/Nori-SDK

## savor-carbon-fats
- verdict: **PASS** (independent editorial second pass only)
- score: **91/100**
- blocking_findings: **none remaining after corrections**
- warnings: 50〜98%削減率は同社公表の特定LCAシナリオ。CO₂由来約2kg、メタン由来約5.5kg CO₂e/kgは米国平均電源などの条件付き。2025年週100kg目標の恒常達成は未検証。
- generic_text: No material interchangeable vendor-neutral filler remained after checking the complete article; the mechanism and measurable choice criteria are specific.
- unsupported_claims: No material unsupported claim retained as established fact; forward-looking deployment/use cases explicitly marked as editorial hypotheses or unverified.
- comparison_failures: No blocking failure. Alternatives are compared by use-case and operating constraints rather than numerical ranking or false product equivalence.
- required_fixes: **completed** — SavorWorks1の25,000平方フィート、AAKとの2026-07-09提携と出資、LCAの評価境界・原料条件を照合。誇大な環境断定なし、追加修正不要。
- input/output/replaces and product specificity: CO₂/メタン由来炭素→炭化水素→脂肪酸→トリグリセリド→用途別油脂。乳脂肪・パーム・精密発酵油脂と物性、供給量、コスト、LCAで比較。
- primary evidence:
  - https://www.savor.it/process
  - https://www.savor.it/journal/savor-at-scale
  - https://www.savor.it/journal/aak
  - https://www.savor.it/journal/sustainable-fats

## Publication gate still open
These six editorial verdicts are not an assertion of live deployment or latest visual QA. Recheck Vercel READY for the new content SHA, independently verify six updated pages and adopted heroes, and rerun the 47-page × desktop/mobile (94-view) Playwright workflow after the final content deployment. Global completion requires **47/47** editorial PASS plus current production and visual QA. No user notification before then.
