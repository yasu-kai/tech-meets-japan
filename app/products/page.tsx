import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductExplorer from "@/components/ProductExplorer";

export default function ProductsPage(){
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <p className="eyebrow">PRODUCT DATABASE</p>
          <h1>日本に入ってくる、<br/>次のプロダクトを探す。</h1>
          <p>企業名からではなく、何ができるか・何に使えるか・何と比べるべきかから探すプロダクトデータベース。</p>
        </section>
        <section className="section section-tight"><ProductExplorer/></section>
      </main>
      <Footer/>
    </>
  )
}
