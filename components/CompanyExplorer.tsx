"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { categories, companies } from "@/lib/data";

export default function CompanyExplorer({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return companies.filter(c => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery = !q || [c.name, c.category, c.tagline, c.description, ...c.useCases, ...c.buyers, ...c.tags]
        .join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const visible = compact ? filtered.slice(0, 4) : filtered;

  return (
    <section className="explorer">
      <div className="explorer-bar">
        <div className="search-box">
          <Search size={18}/>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="課題・業界・会社名で検索" />
        </div>
        <div className="filter-label"><SlidersHorizontal size={16}/> Category</div>
      </div>

      <div className="chips">
        {categories.map(c => (
          <button key={c} onClick={() => setCategory(c)} className={category === c ? "chip active" : "chip"}>{c}</button>
        ))}
      </div>

      <div className="company-grid">
        {visible.map(company => (
          <Link href={"/companies/" + company.slug} className="company-card" key={company.slug}>
            <div className="company-card-top">
              <div className="company-monogram">{company.name.slice(0,2).toUpperCase()}</div>
              <div className="score"><strong>{company.fitScore}</strong><span>Japan Fit</span></div>
            </div>
            <p className="eyebrow">{company.country} · {company.category}</p>
            <h3>{company.name}</h3>
            <p className="card-tagline">{company.tagline}</p>
            <div className="tag-row">
              {company.tags.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="card-link">View profile <ArrowUpRight size={15}/></div>
          </Link>
        ))}
      </div>

      {!compact && filtered.length === 0 && <div className="empty-state">該当する企業がありません。別のキーワードで検索してください。</div>}
    </section>
  );
}
