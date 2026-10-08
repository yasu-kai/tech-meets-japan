"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { productCategories, products } from "@/lib/data";

export default function ProductExplorer({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(p => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery = !q || [p.name,p.provider,p.category,p.tagline,p.description,...p.useCases,...p.targetUsers,...p.alternatives,...p.tags]
        .join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const visible = compact ? filtered.slice(0, 6) : filtered;

  return (
    <section className="explorer">
      <div className="explorer-bar">
        <div className="search-box">
          <Search size={18}/>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="課題・用途・プロダクト名で検索" />
        </div>
        <div className="filter-label"><SlidersHorizontal size={16}/> Category</div>
      </div>
      <div className="chips">
        {productCategories.map(c => <button key={c} onClick={()=>setCategory(c)} className={category===c?"chip active":"chip"}>{c}</button>)}
      </div>
      <div className="company-grid">
        {visible.map(product => (
          <Link href={"/products/"+product.slug} className="company-card" key={product.slug}>
            <div className="company-card-top">
              <div className="company-monogram">{product.name.slice(0,2).toUpperCase()}</div>
              <div className="score"><strong>{product.fitScore}</strong><span>Japan Fit</span></div>
            </div>
            <p className="eyebrow">{product.category} · by {product.provider}</p>
            <h3>{product.name}</h3>
            <p className="card-tagline">{product.tagline}</p>
            <div className="tag-row">{product.tags.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div>
            <div className="card-link">View product <ArrowUpRight size={15}/></div>
          </Link>
        ))}
      </div>
      {!compact && filtered.length===0 && <div className="empty-state">該当するプロダクトがありません。別のキーワードで検索してください。</div>}
    </section>
  );
}
