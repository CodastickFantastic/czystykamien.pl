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

function KontaktPage() {
  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <header>
        <Navigation type="top" page="normal" />
        <MobileNav page="page" />
      </header>
      <main className={styles.main}>
        <div className="container">
          <h1>Kontakt</h1>
          <p>
            Posiadasz do nas jakies pytania? <br />
            A może chcesz zarezerwować nasz czas dla siebie lub złożyć zapytanie
            ofertowe jako firma? <br />
            Nie zwlekaj i skontaktuj się z nami zanim zrobi to Twój sąsiad!
          </p>
          <div className={styles.iconSection}>
            <div className={styles.tile}>
              <Image src={Location} width={75} height={75} />
              <h3>Adres</h3>
              <p>
                05-077 Warszawa
                <br />
                Graniczna 15A
              </p>
            </div>
            <div className={styles.tile}>
              <Image src={Phone} width={75} height={75} />
              <h3>Telefon</h3>
              <p>501 721 417</p>
            </div>
            <div className={styles.tile}>
              <Image src={Email} width={75} height={75} />
              <h3>Email</h3>
              <p>info@czystykamien.pl</p>
            </div>
          </div>
          <div className={styles.moreInfo}>
            <div className={styles.contactForm}>
              <h2>Formularz Kontaktowy</h2>
              <ContactForm />
            </div>
            <div className={styles.googleMaps}>
              <GoogleMaps />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default KontaktPage;
