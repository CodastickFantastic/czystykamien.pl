import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import HeroImage from "@/images/czysciciel.webp";
import Czyszcenie from "@/images/outdoor.webp";
import Gwarancja from "@/images/icons/gwarancja.png";
import Profesjonalizm from "@/images/icons/profesjonalizm.png";
import Bezpieczenstwo from "@/images/icons/bezpieczenstwo.png";
import CzystaKostka from "@/images/galery/comparission4.webp";
import SzczesliwyPracownik from "@/images/ourWorker.webp";
import Chemia from "@/images/chemia.webp";
import Checkbox from "@/images/icons/checkboxIcon.png";

import styles from "@/styles/about.module.scss";
import ContactForm from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";


export const metadata = {
  title:
    "O nas - Czysty Kamień",
  description:
    "Poznajmy się bliżej. Dowiedz się więcej o naszej firmie oraz o tym jakie usługi oferujemy oraz jakie utrzymujemy standardy.",
};

export default function AboutUsPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "O nas",
    "url": "https://czystykamien.pl/o-nas",
    "isFamilyFriendly": "true",
    "description": "Poznajmy się bliżej. Dowiedz się więcej o naszej firmie oraz o tym jakie usługi oferujemy oraz jakie utrzymujemy standardy.",
    "publisher": {
      "@type": "Organization",
      "name": "Czysty Kamień",
      "url": "https://czystykamien.pl"
    }
  }

  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <header>
        <Navigation type="top" page="normal" />
        <MobileNav page="page" />
      </header>
      <main className={styles.main}>
        <section>
          <div className={styles.blackBg1}>
            <div className="container">
              <div className={styles.shadowContainer1}>
                <Image
                  src={HeroImage}
                  className={styles.firstImg}
                  alt="Osoba myjąca kostkę brkuową"
                  priority
                />
                <div className={styles.innerShadow1} />
              </div>
            </div>
            <h1>O NAS</h1>
          </div>
          <div className={styles.blackBg}>
            <div className={`container ${styles.description}`}>
              <p>
                Nasza firma oferuje profesjonalne usługi mycia oraz czyszczenia
                zarówno posesji prywatnych jak i przemysłowych.
                <br />
                <br />
                Zawsze dokładamy wszelkich starań aby zagwarantować jak
                najwyższą jakość wykonywanych usług.
                <br />
                <br />
                Nie zostawiamy miejsca na błędy oraz poprawki. Zaufaj nam a
                przekonasz się, że praca zostanie wykonana w rzetelny sposób.
              </p>
              <div className={styles.shadowContainer}>
                <Image
                  src={Czyszcenie}
                  alt="Czyszcenie kostki brukowej wraz ze sprzętem"
                />
                <div className={styles.shadow} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.transparentBg}>
            <div className={`container ${styles.pros}`}>
              <Image src={Gwarancja} alt="Ikona gwarancja" />
              <h2>Gwarancja Jakości oraz Najniższej Ceny</h2>
            </div>
          </div>
          <div className={styles.blackBg}>
            <div className={`container ${styles.columns}`}>
              <p>
                Gwarantujemy najwyższą jakość wykonywanych usług. Nie
                pozostawiamy miejsca na błędy. Korzystamy tylko i wyłącznie ze
                specjalistycznego i niezawodnego sprzętu firmy Karcher oraz
                stosujemy specjalistyczną chemię która pozwoli na doczyszczenie
                najbardziej uporczywych zabrudzeń.
                <br />
                <br />
                Ponadto staramy się zawsze zagwarantować najkorzystniejszą cenę
                na rynku. Jeśli pokażesz nam, że konkurencja ma niższe stawki,
                zejdziemy dla Ciebie z ceny wykonywanej usługi.
              </p>
              <div className={styles.smallRoundShadowContainer}>
                <Image
                  src={CzystaKostka}
                  alt="Efekt mycia kostki brukowej myjką ciśnieniową"
                />
                <div className={styles.innerShadowSmallRound} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.transparentBg}>
            <div className={`container ${styles.pros}`}>
              <Image src={Profesjonalizm} alt="Ikona profesjonalizm" />
              <h2>Usługa Szyta Na Miarę</h2>
            </div>
          </div>
          <div className={styles.blackBg}>
            <div className={`container ${styles.columns}`}>
              <p>
                Nasz personel jest stale szkolony aby spełniać najwyższe
                standardy jakości gwarantowane przez naszą firmę.
                <br />
                <br />
                Do każdego klienta podchodzimy w sposób indywidualny. Każdy
                przypadek jest inny i wymaga odpowiedniego podejścia oraz
                sprzętu.
                <br />
                <br />
                Nasi pracownicy dokładają wszelkich starań w celu wykonania prac
                w należyty sposób.
              </p>
              <div className={styles.smallRoundShadowContainer}>
                <Image src={SzczesliwyPracownik} alt="Pracownik" />
                <div className={styles.innerShadowSmallRound} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.transparentBg}>
            <div className={`container ${styles.pros}`}>
              <Image src={Bezpieczenstwo} alt="Ikona bezpieczeństwo" />
              <h2>Zabezpieczenie To Podstawa</h2>
            </div>
          </div>
          <div className={styles.blackBg}>
            <div className={`container ${styles.columns}`}>
              <p>
                Ręczymy w 100% za każdego z naszych pracowników. Zatrudniamy
                tylko sprawdzone osoby.
                <br />
                <br />
                Dodatkowo nasz personel przechodzi szkolenia w trakcie których
                uczy się, jak działać z myjką oraz chemią, w taki sposób aby nie
                wyrządzić szkód.
                <br />
                <br />
                Osobiście dobieramy sprzęt w taki sposób, aby nasze mocarne
                myjki nie uszkodziły twojego cennego mienia.
                <br />
                <br /> Wybór chemii również nie jest przypadkowy. Zawsze staramy
                się dbać o środowisko oraz o twój ogródek i dobierać w taki
                sposób detergenty, aby nie zagrażały przyrodzie.
              </p>
              <div className={styles.smallRoundShadowContainer}>
                <Image src={Chemia} alt="Chemia do mycia kostki brukowej" />
                <div className={styles.innerShadowSmallRound} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.blackBg}>
          <h3>NIE ZWLEKAJ I ZAMÓW CZYSZCZENIE JUŻ DZIŚ</h3>
          <div className={styles.contactForm}>
            <div className={styles.left}>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Najlepszy Sprzęt Na Rynku</p>
              </div>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Gwarancja Najniższej Ceny</p>
              </div>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Szybkie Terminy Realizacji</p>
              </div>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Tylko Pozytywne Opinie</p>
              </div>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Profesjonalne Podejście</p>
              </div>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Profesjonalna Chemia</p>
              </div>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Ubezpieczenie OC</p>
              </div>
              <div className={styles.feature}>
                <Image src={Checkbox} alt="Ikona sukcesu" />
                <p>Gwarancja Jakości</p>
              </div>
            </div>
            {/* <div className={styles.right}>
              <ContactForm />
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
