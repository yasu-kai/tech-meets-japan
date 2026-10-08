import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { signals } from "@/lib/data";

export default function SignalsPage(){
  return (
    <>
      <Header/>
      <main>
        <section className="page-hero">
          <p className="eyebrow">JAPAN ENTRY SIGNALS</p>
          <h1>日本参入の“兆し”を、<br/>ニュースになる前から追う。</h1>
          <p>採用、提携、販売開始、PoC、資金調達。海外テック企業が日本市場へ動き始めたシグナルを整理します。</p>
        </section>
        <section className="section section-tight">
          <div className="signal-list">
            {signals.map((signal,index)=>(
              <article className="signal-row" key={signal.date+signal.company+index}>
                <div className="signal-date">{signal.date}</div>
                <div className="signal-company">
                  <span>{signal.category}</span>
                  <strong>{signal.company}</strong>
                </div>
                <div className="signal-body">
                  <div className="signal-level">{signal.level}</div>
                  <h2>{signal.title}</h2>
                  <p>{signal.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
