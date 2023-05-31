import Link from "next/link";
import Navigation from "@/components/Header";

import styles from "@/styles/homePage.module.scss";

export default function Home() {
  return (
    <div className="homeBackground">
        <Navigation type="bottom"/>
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
