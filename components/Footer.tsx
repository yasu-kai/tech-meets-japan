import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="brand brand-footer">TECH <span>MEETS</span> JAPAN</div>
        <p>Global technology, matched to Japan.</p>
      </div>
      <div className="footer-links">
        <Link href="/companies">Companies</Link>
        <Link href="/research">Research</Link>
        <Link href="/for-vendors">For Vendors</Link>
      </div>
      <p className="footer-note">Independent editorial platform. Rankings are not influenced by paid placement.</p>
    </footer>
  );
}
