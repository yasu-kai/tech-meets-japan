"use client";

import { useState } from "react";
import { CheckCircle2, Copy } from "lucide-react";

type Kind = "intro" | "listing" | "research";

const labels: Record<Kind, { title: string; copy: string }> = {
  intro: { title: "この企業について相談する", copy: "導入・提携・PoCの相談内容を整理します。" },
  listing: { title: "企業掲載を申し込む", copy: "Founding companiesは初年度掲載無料を想定しています。" },
  research: { title: "Japan Entry Researchを相談する", copy: "市場、競合、ICP、GTM仮説を日本市場向けに整理します。" },
};

export default function LeadForm({ kind = "intro", company }: { kind?: Kind; company?: string }) {
  const [done, setDone] = useState(false);
  const [text, setText] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = [
      "[TECH MEETS JAPAN inquiry]",
      "Type: " + kind,
      company ? "Company: " + company : "",
      "Name: " + (form.get("name") || ""),
      "Company: " + (form.get("company") || ""),
      "Email: " + (form.get("email") || ""),
      "Message: " + (form.get("message") || ""),
    ].filter(Boolean);
    setText(lines.join("\n"));
    setDone(true);
  }

  async function copy() {
    await navigator.clipboard.writeText(text);
  }

  if (done) {
    return (
      <div className="form-success">
        <CheckCircle2 size={28}/>
        <h3>問い合わせ内容を作成しました</h3>
        <p>正式な送信先設定前のため、現在は内容をコピーできます。サイト公開後に送信機能へ接続できます。</p>
        <button className="button button-dark" onClick={copy}><Copy size={16}/> 内容をコピー</button>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <p className="eyebrow">CONTACT</p>
      <h2>{labels[kind].title}</h2>
      <p>{labels[kind].copy}</p>
      <div className="form-grid">
        <label>お名前<input name="name" required placeholder="山田 太郎"/></label>
        <label>会社名<input name="company" required placeholder="Company Inc."/></label>
      </div>
      <label>メールアドレス<input name="email" type="email" required placeholder="you@company.com"/></label>
      <label>相談内容<textarea name="message" rows={5} required placeholder="検討している課題・市場・導入目的など"/></label>
      <button className="button button-accent" type="submit">相談内容を作成する</button>
    </form>
  );
}
