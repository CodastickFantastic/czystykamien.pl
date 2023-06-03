import Link from "next/link";
import Navigation from "@/components/Header";

import styles from "@/styles/homePage.module.scss";
import MobileNav from "@/components/MobileNav";

export async function generateMetadata(){
  return {
    title: "Czysty Kamień - Czyszczenie kostki brukowej, elewacji, ogródw oraz kanap i dywanów",
    description: "Czysty Kamień to firma specjalizująca się w czyszceniu kostki brukowej, elewacji, ogrodów oraz kanap i dywanów. Z nami masz gwarancję, że twoja posesja będzie lśnić jak w dniu w któym została wybudowana.",
  }
}

export default function Home() {
  return (
    <div className="homeBackground">
      <header>
        <Navigation type="bottom" />
        <MobileNav page="main" />
      </header>
      <main>
        <div className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroBorders}>
              <h1>Wyjątkowe czyszczenie dla wyjątkowych powierzchni</h1>
              <p>
                Powierz czyszczenie kostki brukowej, elewacji, płotu oraz ogrodu
                w ręce profesjonalistów. Przywróć blask swojej posesji
                jednocześnie wykorzystując swój czas tak jak lubisz. Współpraca
                z nami to gwarancja sukcesu.
              </p>
              <button className="button">
                <Link href="/kontakt">SKORZYSTAJ Z NASZYCH USŁUG</Link>
              </button>
              <button className="button">
                <Link href="/oferta">OFERTA</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
