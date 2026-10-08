"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/companies", label: "企業を探す" },
  { href: "/signals", label: "Entry Signals" },
  { href: "/research", label: "Research" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">TECH <span>MEETS</span> JAPAN</Link>
        <nav className={open ? "nav open" : "nav"}>
          {links.map(link => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/companies" className="icon-button" aria-label="Search"><Search size={18}/></Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu"><Menu size={22}/></button>
        </div>
      </div>
    </header>
  );
}
