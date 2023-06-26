import Link from "next/link";
import Navigation from "@/components/Header";
import Image from "next/image";
import Hero from "@/images/hero.webp";

import styles from "@/styles/homePage.module.scss";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title:
    "Czyszczenie kostki brukowej, elewacji, ogródw oraz kanap i dywanów - Czysty Kamień",
  description:
    "Profesjonalne czyszczenie i mycie kostki brukowej, elewacji, ogrodów, kanap i dywanów Warszawa i okolice. Sprawdź naszą ofertę!",
};

export default function Home() {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Czysty Kamień",
    "url": "https://czystykamien.pl",
    "logo": "https://czystykamien.pl/images/logo.png",
    "emaiL": "czystykamien@gmail.com",
    "foundingDate": "2022",
    "founders": [
      {
        "@type": "Person",
        "name": "Jakub Wojtysiak",
        "email": "it.jakub.wojtysiak@gmail.com",
        "jobTitle": "Właściciel",
        "telephone": "+48 501 721 417"
      },
      {
        "@type": "Person",
        "name": "Piotr Rogowski",
        "jobTitle": "Właściciel"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lebiodowa 20",
      "addressLocality": "Warszawa",
      "addressRegion": "Mazowieckie",
      "postalCode": "04-674",
      "addressCountry": "PL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Kontakt Bezpośredni",
      "telephone": "+48 501 721 417",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    },
    "sameAs": [
      "https://www.facebook.com/czystykamien",
      "https://www.instagram.com/czystykamien"
    ],
    "areaServed": "PL",
    "priceRange": "PLN",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 07:00-21:00",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.20681578738545",
      "longitude": "21.137844335582017"
    }
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Czysty Kamień",
    "url": "https://czystykamien.pl"
  }

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Strona Główna",
    "url": "https://czystykamien.pl",
    "description": "Profesjonalne czyszczenie i mycie kostki brukowej, elewacji, ogrodów, kanap i dywanów Warszawa i okolice. Sprawdź naszą ofertę!",
    "publisher": {
      "@type": "Organization",
      "name": "Czysty Kamień",
      "url": "https://czystykamien.pl"
    }
  }

  return (
    <div className={styles.homeHero}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <Image className={styles.homeBackground} src={Hero} priority alt="Obra przedstawiający czystą kostkę brukową, utrzymany w eleganckim tonie"/>
      <div>
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
                  Powierz czyszczenie kostki brukowej, elewacji, płotu oraz
                  ogrodu w ręce profesjonalistów. Przywróć blask swojej posesji
                  jednocześnie wykorzystując swój czas tak jak lubisz.
                  Współpraca z nami to gwarancja sukcesu.
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
    </div>
  );
}
