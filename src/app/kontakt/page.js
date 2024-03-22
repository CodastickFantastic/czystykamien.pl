import Navigation from "@/components/Header";
import Image from "next/image";
import GoogleMaps from "@/components/GoogleMaps";
import Email from "@/images/icons/emailIcon.png";
import Phone from "@/images/icons/phoneIcon.png";
import Location from "@/images/icons/locationIcon.png";

import styles from "@/styles/contactPage.module.scss";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title:
    "Kontakt - Czysty Kamień",
  description:
    "Zamów usługę mycia ciśnieniowego lub prania trapicerki już dziś. Skontaktuj się z nami telefonicznie lub mailowo.",
};

function KontaktPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Strona Kontaktowa",
    "url": "https://czystykamien.pl/kontakt",
    "isFamilyFriendly": "true",
    "description": "Mycie i czyszczenie kostki brukowej, elewacji, ogrodów, kanap i dywanów. Zadzwoń i zarezerwuj usługę już dziś.",
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
        <div className="container">
          <section>
            <h1>Kontakt</h1>
            <p>
              Posiadasz do nas jakies pytania? <br />
              A może chcesz zarezerwować nasz czas dla siebie lub złożyć
              zapytanie ofertowe jako firma? <br />
              Nie zwlekaj i skontaktuj się z nami zanim zrobi to Twój sąsiad!
            </p>
            <div className={styles.iconSection}>
              <div className={styles.tile}>
                <Image
                  src={Location}
                  width={75}
                  height={75}
                  alt="Ikona adresu"
                />
                <h2>Adres</h2>
                <p>Lebiodowa 20 <br/> Warszawa</p>
              </div>
              <div className={styles.tile}>
                <Image
                  src={Phone}
                  width={75}
                  height={75}
                  alt="Ikona telefonu"
                />
                <h2>Telefon</h2>
                <p>501 721 417</p>
              </div>
              {/* <div className={styles.tile}>
                <Image src={Email} width={75} height={75} alt="Ikona email" />
                <h2>Email</h2>
                <p>czystykamien24@gmail.com</p>
              </div> */}
            </div>
          </section>
          {/* <section>
            <div className={styles.moreInfo}>
              <section className={styles.contactForm}>
                <h3>Formularz Kontaktowy</h3>
                <ContactForm />
              </section>
              <section className={styles.googleMaps}>
                <GoogleMaps />
              </section>
            </div>
          </section> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default KontaktPage;
