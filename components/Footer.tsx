import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="brand brand-footer">TECH <span>MEETS</span> JAPAN</div>
        <p>世界のテクノロジーを、日本の選択肢に。</p>
      </div>
      <div className="footer-links">
        <Link href="/companies">Companies</Link>
        <Link href="/signals">Signals</Link>
        <Link href="/research">Research</Link>
      </div>
      <p className="footer-note">Independent technology intelligence for people exploring what comes next.</p>
    </footer>
  );
}
