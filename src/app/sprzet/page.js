import Header from "@/components/Header";
import Footer from "@/components/Footer";

import styles from "@/styles/equipmentPage.module.scss";
import Image from "next/image";
import Worker from "@/images/confidentWorker.webp";
import HDS5 from "@/images/HDS_15_5.webp";
import HDS8 from "@/images/HDS_8_18.webp";
import Puzzi from "@/images/Puzzi_30_4.webp";
import Extraction from "@/images/icons/extractionIcon.png";
import Pressure from "@/images/icons/pressureIcon.png";
import Temperature from "@/images/icons/temperatureIcon.png";
import Pipe from "@/images/icons/pipeIcon.png";
import Fan from "@/images/icons/fanIcon.png";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title:
    "Sprzęt do czyszczenia kostki brukowej, elewacji oraz tapicerki, kanap i dywanów - Czysty Kamień",
  description:
    "Poznaj sprzęt który wykorzystujemy do mycia i czyszczenia kostki brukowej oraz do prania tapicerki.",
};

export default function EquipmentPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nasz Sprzęt",
    "url": "https://czystykamien.pl/sprzet",
    "description": "Poznaj sprzęt który wykorzystujemy do mycia i czyszczenia kostki brukowej oraz do prania tapicerki.",
    "publisher": {
      "@type": "Organization",
      "name": "Czysty Kamień",
      "url": "https://czystykamien.pl",
    }
  }

  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <header>
        <Header type="top" page="normal" />
        <MobileNav page="page" />
      </header>
      <main className={styles.main}>
        <div className={styles.blackBg}>
          <div className="container">
            <section>
              <h1>SPRZĘT</h1>
              <div className={styles.description}>
                <p>
                  Niezawodny sprzęt to jeden z głównych czynników decydujących o
                  gwarancji sukcesu w czyszczeniu ciężko zabrudzonych
                  powierzchni.
                  <br />
                  <br />
                  Wykorzystywany sprzęt zarówno nie może byc zbyt słaby, gdyż
                  nie poradzi sobie z doczyszczeniem plam, ale również nie może
                  być zbyt mocny, aby nie spowodować uszkodzenia powierzchni
                  czyszczonej.
                  <br />
                  <br />
                  Ponadto bardzo ważnym elementem w utrzymywaniu czystości jest
                  odpowiedni dobór chemii w stosunku do wykonywanych czynności.
                  Dobranie zbyt silnego środka do delikatnego podłoża może w
                  najgorszym wypadku doprowadzić do uszkodzenia czyszczonego
                  elementu.
                  <br />
                  <br />
                  Pamiętaj aby poinformować nas o wszystkich szczegółach
                  czyszczonej powierzchni abyśmy mogli indywidualnie dobrać
                  zarówno sprzęt jak i chemię do zlecanej przez Ciebie pracy.
                </p>
                <div className={styles.imageContainer}>
                  <Image src={Worker} alt="Pracownik firma sprzątająca" priority/>
                  <div className={styles.shadow} />
                </div>
              </div>
            </section>
            <section>
              <h2>Poznaj lepiej wykorzystywany przez nas sprzęt</h2>
              <section className={styles.equipmentContainer}>
                <div className={styles.left}>
                  <h3>Myjka Karcher HDS 5/15 UX</h3>
                  <p>
                    Mały ale wariat. Naszego Hadesa nie da się inaczej opisać.
                    Dzięki podgrzewaniu wody nawet do 80*C poradzi sobie bez
                    problemu z najcięższymi zabrudzeniami, nawet takimi jak
                    graffiti, a przy tym nie zajmuje dużo miejsca.
                  </p>
                  <div className={styles.featuresContainer}>
                    <div className={styles.feature}>
                      <Image src={Temperature} alt="Ikona temometru" />
                      <p>
                        MAX
                        <br />
                        80&#8451;
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <Image src={Pressure} alt="Ikona ciśnienia" />
                      <p>
                        MAX
                        <br />
                        150 PSI
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <Image src={Pipe} alt="Ikona rury" />
                      <p>
                        MAX
                        <br />
                        450 L/H
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <Image src={HDS5} alt="Myjka karcher HDS 5/15" />
                </div>
              </section>
              <section className={styles.equipmentContainer}>
                <div className={styles.left}>
                  <h3>Myjka Karcher HDS 8/18 CK</h3>
                  <p>
                    W firmie potocznie nazywamy ją krową, ze względu na
                    niebagatelną wagę ponad 120 Kg. Duże rozmiary idą w parze z
                    ogromnym ciśnieniem jakie jest ona w stanie wygenerować oraz
                    maksymalną temperaturą wody potrafiącą sięgać nawet 150*C.
                  </p>
                  <div className={styles.featuresContainer}>
                    <div className={styles.feature}>
                      <Image src={Temperature} alt="Ikona temometru" />
                      <p>
                        MAX
                        <br />
                        150&#8451;
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <Image src={Pressure} alt="Ikona ciśnienia" />
                      <p>
                        MAX
                        <br />
                        200 PSI
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <Image src={Pipe} alt="Ikona rury" />
                      <p>
                        MAX
                        <br />
                        800 L/H
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <Image src={HDS8} alt="Myjka karcher HDS 8/18" />
                </div>
              </section>
              <section className={styles.equipmentContainer}>
                <div className={styles.left}>
                  <h3>Ekstraktor Karcher Puzzi 30/4 E</h3>
                  <p>
                    Pusia pomimo tego, że wygląda jak zwykły odkurzacz to bardzo
                    nie lubi być do niego porównywana. Jest ona wysoce
                    zaawansowanym urządzeniem ekstrakcyjnym, które usunie plamy
                    z najciężej zaplamionych kanap oraz wykładzin. Plamy po
                    winie już nie stanowią problemu.
                  </p>
                  <div className={styles.featuresContainer}>
                    <div className={styles.feature}>
                      <Image src={Extraction} alt="Ikona ekstrakcji" />
                      <p>
                        MAX
                        <br />
                        75 M&#178;/H
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <Image src={Pressure} alt="Ikona ciśnienia" />
                      <p>
                        MAX
                        <br />
                        254 mPSI
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <Image src={Fan} alt="Ikona wiatraka" />
                      <p>
                        MAX
                        <br />
                        74 L/S
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <Image src={Puzzi} alt="Odkurzacz karcher Puzzi 30/4" />
                </div>
              </section>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
