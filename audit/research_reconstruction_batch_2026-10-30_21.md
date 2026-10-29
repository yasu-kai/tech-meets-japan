# Batch 21 — 2026-10-30 — independent second-pass editorial review

## Scope and method
Reviewed the existing nine-story PENDING backlog separately from first-pass rewriting. Compared material product claims and availability against first-party pages, checked INPUT / OUTPUT / REPLACES, competitors and limits, Japanese-market conditions, language naturalness, and substantive reading value. Corrections were applied to the article data in GitHub main at commit `05f8e4563ec6ac784903f00e620ff43587e7874f`. No slugs, categories, existing adopted hero images or binary files were modified. This document records editorial acceptance only; **sitewide completion additionally requires latest Vercel READY, live HTTP/image/body and 94-view Playwright QA**.

## humanoid
- verdict: **PASS** (independent editorial second pass; final publication gate separate)
- score: **91/100**
- substantive Japanese body characters: **2543 → 3276**
- blocking_findings: **[]** (draft gaps corrected before editorial acceptance)
- warnings: Figure Helix 2.5の9%→56%は同社が定義した30住宅・3作業の研究評価。家庭での商用成功率や無人運用保証ではない。
- generic_text: **[]** (new paragraphs are source-specific mechanisms, comparisons or reproducible tests)
- unsupported_claims: **[]** (vendor metrics, commercial availability and assumptions are qualified)
- comparison_failures: **[]** (Figureの未知住宅での全身制御研究とAgility Digit 5の物流・製造現場の安全・商用設計を区別。固定アーム/車輪搬送も比較対象。)
- required_fixes: **[]** (applied: Helix 2.5の対照実験、Digit 5の安全設計、段取り替え・故障復旧の評価を追加。)
- independently checked primary sources:
  - https://www.figure.ai/news/helix-02
  - https://www.figure.ai/news/helix-2-5-zero-shot-30-home-generalization
  - https://www.agilityrobotics.com/content/agility-unveils-digit-5-humanoid-robot-built-for-cooperatively-safe-work-at-scale

## autonomous-driving
- verdict: **PASS** (independent editorial second pass; final publication gate separate)
- score: **90/100**
- substantive Japanese body characters: **2385 → 3084**
- blocking_findings: **[]** (draft gaps corrected before editorial acceptance)
- warnings: 東京2027年の無人配車は許認可と運用検証を条件とする計画。営業開始済みとは扱わない。
- generic_text: **[]** (new paragraphs are source-specific mechanisms, comparisons or reproducible tests)
- unsupported_claims: **[]** (vendor metrics, commercial availability and assumptions are qualified)
- comparison_failures: **[]** (車両とWaymo Driverの運転システム、仮想シミュレーションと路上試験、遠隔支援と運転責任を区別。)
- required_fixes: **[]** (applied: 東京で初期運行後に約100台へ拡大する計画、乗降地点の運用、回送/清掃/遠隔支援を含む採算評価を追記。)
- independently checked primary sources:
  - https://waymo.com/blog/2026/09/opening-tokyo-in-2027-with-nihon-kotsu-go/
  - https://waymo.com/blog/2026/02/the-waymo-world-model-a-new-frontier-for-autonomous-driving-simulation/

## physical-ai-platforms
- verdict: **PASS** (independent editorial second pass; final publication gate separate)
- score: **90/100**
- substantive Japanese body characters: **2409 → 3107**
- blocking_findings: **[]** (draft gaps corrected before editorial acceptance)
- warnings: Cosmos 3 Edgeの発表と特定機体での商用提供は別。ROSAの性能は研究条件下であり安全制御を共有GPUへ移せる保証ではない。
- generic_text: **[]** (new paragraphs are source-specific mechanisms, comparisons or reproducible tests)
- unsupported_claims: **[]** (vendor metrics, commercial availability and assumptions are qualified)
- comparison_failures: **[]** (Cosmosモデル、Isaac開発・シミュレーション、Jetson機体側計算とROSA共有GPUを別レイヤーとして比較。)
- required_fixes: **[]** (applied: 2026年5月/7月の提供時点、日本企業の参加意向と本番導入の差、仮想対実機の失敗比較を追加。)
- independently checked primary sources:
  - https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai
  - https://nvidianews.nvidia.com/news/japans-robotics-and-manufacturing-leaders-build-on-nvidia-cosmos-to-advance-physical-ai-frontier
  - https://research.nvidia.com/publication/2026-07_rosa-robotics-foundation-model-serving-system-robot-factories

## drones
- verdict: **PASS** (independent editorial second pass; final publication gate separate)
- score: **91/100**
- substantive Japanese body characters: **2391 → 3143**
- blocking_findings: **[]** (draft gaps corrected before editorial acceptance)
- warnings: DJI O4 Relay Modeは公式FAQで日本利用不可。公称通信距離は条件依存。国内飛行許可は機体の自動運航機能とは別。
- generic_text: **[]** (new paragraphs are source-specific mechanisms, comparisons or reproducible tests)
- unsupported_claims: **[]** (vendor metrics, commercial availability and assumptions are qualified)
- comparison_failures: **[]** (Dockの格納・充電、FlightHub 2の運用、O4 Ground Stationの通信機能、点検AIの画像判断を区別。)
- required_fixes: **[]** (applied: Gateway/Relayモードの対応差、同時接続一機、点検画像の設備識別子・再飛行・異常見逃し評価を追加。)
- independently checked primary sources:
  - https://enterprise.dji.com/o4-ground-station/faq
  - https://enterprise.dji.com/o4-ground-station/specs
  - https://enterprise.dji.com/dock

## Publication QA gate — verified after both content batches
- Content commit `05f8e4563ec6ac784903f00e620ff43587e7874f` deployed to Vercel production **READY** (`dpl_5AkobgJRE7CGv82THQpgNidmcRy9`). Latest tracker commit `c6cc0b7e9f2fdd1c7b0657eb3754bc3963317978` also **READY** (`dpl_GksLUE7D2x84sWGvkD8SjmW2BYzG`).
- Independent VPS HTTP check: **47/47** Research page URLs returned HTTP 200 with their correct slug, and **47/47** adopted hero WebP URLs returned HTTP 200 with valid RIFF/WebP magic and image/webp MIME. All nine newly revised article pages contained their unique revised text markers.
- Post-change GitHub Actions workflow run `40970573940`, job `123785999867`, checked out latest main commit `c6cc0b7e9f2fdd1c7b0657eb3754bc3963317978` and **SUCCESS**: deterministic editorial gate 47 stories, zero findings; Playwright **94/94 desktop/mobile views, zero automated failures**. Screenshot artifact `12940865087` uploaded (7-day retention). This is automated visual assertion, not a claim of manual inspection of every pixel.
- All 47 canonical independent editorial verdicts are PASS. Sitewide completion gates are satisfied as of this verification; the scheduled automation should stop after a single completion notice.
