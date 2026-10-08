import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyExplorer from "@/components/CompanyExplorer";

export default function CompaniesPage() {
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <p className="eyebrow">COMPANY DATABASE</p>
          <h1>日本の課題から、<br/>世界のテクノロジーを探す。</h1>
          <p>編集部が選定した海外企業を、共通のJapan Fit軸で整理しています。</p>
        </section>
        <section className="section section-tight"><CompanyExplorer/></section>
      </main>
      <Footer/>
    </>
  );
}
