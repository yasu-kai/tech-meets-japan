import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="brand brand-footer">TECH <span>MEETS</span> JAPAN</div>
        <p>世界のテクノロジーを、日本の選択肢に。</p>
      </div>
      <div className="footer-links">
        <Link href="/products">プロダクト</Link>
        <Link href="/signals">Signals</Link>
        <Link href="/research">技術記事</Link>
        <Link href="/features">Features</Link>
        <Link href="/early-stage">Early-Stage</Link>
        <Link href="/about">About</Link>
        <Link href="/editorial-policy">編集方針</Link>
        <Link href="/editor/kai-umeda">編集者</Link>
      </div>
      <p className="footer-note">Edited by Kai Umeda · Independent technology intelligence · <span>© TECH MEETS JAPAN</span></p>
    </footer>
  );
}
