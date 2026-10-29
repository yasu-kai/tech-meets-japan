# 採用画像対応表 — 2026-10-29

基準main: `254d5a2e6a39514fd44619c33db403d367051220`。画像の新規生成なし。

## 実装範囲

- 既存9記事に採用画像を設定。単一の既存 `public/editorial/generated/manifest.json` で管理。
- No.12–15は現行mainに対応記事・記事URL・本文が存在しない。画像ファイルの配置・配信のみ。別の記事への流用や架空の記事URLの割当ては行わない。
- No.3 NORI A3、No.5 Mudra Linkは正式採用未確認のため画像を変更しない。
- 既存32記事は画像バイナリ・対応表の既存行・記事HTML（関連記事欄を含む）を維持。保護対象ページの関連記事は今回の追加画像へ変更しない。

## 採用版の照合

No.7–10の採用一覧画像にはNo.7へIdentity Agentsの旧画像が載っている不一致がある。No.7は2026-10-28 08:13:37 UTCのユーザー「おけ、採用！」と直後のAI SOC正式採用記録に対応する、08:13:22 UTC生成の「AIと人間のサイバー防衛司令室.png」を使用する。No.8は08:28:32 UTCに採用された修正版。採用一覧そのものや修正前画像を素材として使用しない。

## ファイルと記事

|No.|元の採用画像 / Library ID|配置先・画像URL|対応する既存記事|
|---|---|---|---|
|1|CO₂と水素から生まれる食用油.png / `libfile_46a5e2c868c08191afbe0e6a4624db7d`|[`savor-carbon-fats.webp`](https://tech-meets-japan.vercel.app/editorial/generated/savor-carbon-fats.webp)|[savor-carbon-fats](https://tech-meets-japan.vercel.app/research/materials-energy/savor-carbon-fats)|
|2|夕暮れの送電線と光るドローン.png / `libfile_d01fa1606fbc819199b98382469082f4`|[`chargebotic-kestrel.webp`](https://tech-meets-japan.vercel.app/editorial/generated/chargebotic-kestrel.webp)|[chargebotic-kestrel](https://tech-meets-japan.vercel.app/research/materials-energy/chargebotic-kestrel)|
|4|未来都市のウェアラブル・インターフェース.png / `libfile_b902c0efbeb0819180a4386a3823de99`|[`ixana-wir.webp`](https://tech-meets-japan.vercel.app/editorial/generated/ixana-wir.webp)|[ixana-wir](https://tech-meets-japan.vercel.app/research/gadgets/ixana-wir)|
|6|スマホで彩る虹色ネイル.png / `libfile_e4e6431728a881918f8dbd8f9a2fb4c9`|[`ipolish-digital-nails.webp`](https://tech-meets-japan.vercel.app/editorial/generated/ipolish-digital-nails.webp)|[ipolish-digital-nails](https://tech-meets-japan.vercel.app/research/gadgets/ipolish-digital-nails)|
|7|AIと人間のサイバー防衛司令室.png / `libfile_3f4695f39c708191a9fb2cd51b362666`|[`ai-soc.webp`](https://tech-meets-japan.vercel.app/editorial/generated/ai-soc.webp)|[ai-soc](https://tech-meets-japan.vercel.app/research/ai-security/ai-soc)|
|8|AIアクセス権限のホログラム管理.png / `libfile_96ed7d79ccdc8191b490fbc7ca6ec558`|[`identity-agents.webp`](https://tech-meets-japan.vercel.app/editorial/generated/identity-agents.webp)|[identity-agents](https://tech-meets-japan.vercel.app/research/ai-security/identity-agents)|
|9|異常取引を映すデータストリーム.png / `libfile_f836548555848191b2358dda7158ed89`|[`ai-fraud.webp`](https://tech-meets-japan.vercel.app/editorial/generated/ai-fraud.webp)|[ai-fraud](https://tech-meets-japan.vercel.app/research/ai-security/ai-fraud)|
|10|未来型サイバーセキュリティ循環システム.png / `libfile_c93fa5693a648191bfca310b24a17f61`|[`continuous-validation.webp`](https://tech-meets-japan.vercel.app/editorial/generated/continuous-validation.webp)|[continuous-validation](https://tech-meets-japan.vercel.app/research/ai-security/continuous-validation)|
|11|AIが脆弱コードを安全に修正する瞬間.png / `libfile_807af7305b2c81919db20720ca639cc7`|[`agentic-dev-security.webp`](https://tech-meets-japan.vercel.app/editorial/generated/agentic-dev-security.webp)|[agentic-dev-security](https://tech-meets-japan.vercel.app/research/ai-security/agentic-dev-security)|
|12|AIと人間のガバナンス天秤.png / `libfile_777bcb9d98e08191871c51ede99de1e8`|[`ai-governance.webp`](https://tech-meets-japan.vercel.app/editorial/generated/ai-governance.webp)|対応記事なし。記事参照・記事上での表示検証は未完了。|
|13|安全なデータ共有ハブ.png / `libfile_c7e92fd56e3481919a5f97fe404069ab`|[`data-privacy.webp`](https://tech-meets-japan.vercel.app/editorial/generated/data-privacy.webp)|対応記事なし。記事参照・記事上での表示検証は未完了。|
|14|人間とAIの未来的な協働.png / `libfile_3d68e665d2f08191bca03bcffe11a5ae`|[`human-ai-collaboration.webp`](https://tech-meets-japan.vercel.app/editorial/generated/human-ai-collaboration.webp)|対応記事なし。記事参照・記事上での表示検証は未完了。|
|15|夕暮れのサイバーシールド都市展望.png / `libfile_ca71a39ca13c819192a6acd1a4522dda`|[`future-of-security.webp`](https://tech-meets-japan.vercel.app/editorial/generated/future-of-security.webp)|対応記事なし。記事参照・記事上での表示検証は未完了。|

## 最適化と注記

- 長辺1600pxのWebP。元画像の全領域を保持し、トリミングなし。
- 新規対象のヒーローは縦横比を保持、一覧・関連記事は全体が見えるよう表示する。
- 実在製品の公式写真・設計図・性能証明・製造工程の実写と誤認させない注記を設定。
- ChargeboticはEarly-Stageの企業カード・企業詳細にも同じ記事画像を使用。

|No.|WebPサイズ|ファイルのSHA-256|
|---|---|---|
|1|1600×900 / 204524 bytes|`e9976290df915333826332897e9b04d668b9df2d8fe0895b6575065255b053da`|
|2|1600×900 / 232658 bytes|`67a8a8267221b8a8ec80e24f4a7c3bae88bfb7c6341c422ac16f79108a47d312`|
|4|1600×900 / 160808 bytes|`2ae48447fbb3089ad43026b6b0fd7042d6845285ccd3f08df9ba3435dd284ecb`|
|6|1600×900 / 122256 bytes|`88fbba9f88dc2f4aae7397fe51114b0f0c5a2893f0ba4c87184f10a6aa9c3079`|
|7|1600×900 / 200692 bytes|`b033d8c54cba5b011d2098fa22330590985f0e60550103362a3fdbf17ccecb7d`|
|8|1600×902 / 165826 bytes|`50248f79a7d0a835413542775051a435ac48b2517f5dee333a97f84ad21deab2`|
|9|1600×902 / 221080 bytes|`a683ded1782f3b1ea5f4830d6613c7d1edff36ab49de6eb7dd4036de6a2ab2d5`|
|10|1600×837 / 270732 bytes|`0a2b462ed965ef3b94b981ed2ea86d700f5253f12e39085578eaf0de13c050a5`|
|11|1600×837 / 152930 bytes|`992e1675b00e4bba1a394322f12f5ccd415011477d74af2872db248e7f04678b`|
|12|1600×837 / 193658 bytes|`ab289c91fddc635b1925b30d6436f8a8db60c2bb9b2025b086bef0c1d29c7020`|
|13|1600×837 / 294204 bytes|`0f8fe8a858eb9a221fa39682efd8c42cdaf4c2d8460128c1c2541f07797877b9`|
|14|1600×837 / 202630 bytes|`76e6733c2c11773247c38f54b2680334793b0982af7ff49aedaabfd295d363a0`|
|15|1600×837 / 389130 bytes|`5abbd5ed259ee43ab8ead73f8ad0880fa51ce620d55496017a5fd64b85a992e4`|
