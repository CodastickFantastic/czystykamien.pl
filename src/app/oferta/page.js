import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/offerPage.module.scss";
import Image from "next/image";

import Indoor from "@/images/indoor2.webp";
import Outdoor from "@/images/outdoor.webp";
import Detailing from "@/images/detailing.webp";

import CarJobs from "@/components/offer/CarJobs";
import OutdoorJobs from "@/components/offer/OutdoorJobs";
import IndoorJobs from "@/components/offer/IndoorJobs";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title:
    "Oferta - Czysty Kamień",
  description:
    "Profesjonalne czyszczenie i mycie kostki brukowej, elewacji, ogrodów, kanap i dywanów Warszawa i okolice. Sprawdź naszą ofertę!",
};


export default function OfferPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Oferta - Czysty Kamień",
    "url": "https://czystykamien.pl/oferta",
    "isFamilyFriendly": "true",
    "description": "Profesjonalne czyszczenie i mycie kostki brukowej, elewacji, ogrodów, kanap i dywanów Warszawa i okolice. Sprawdź naszą ofertę!",
    "publisher": {
      "@type": "Organization",
      "name": "Czysty Kamień",
      "url": "https://czystykamien.pl"
    }
  }

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mycie Ciśnieniowe",
    "alternateName": "Usługi Mycia Ciśnieniowego",
    "serviceType": "Mycie Ciśnieniowe",
    "description": "Profesjonalne mycie i czyszczenie kostki brukowej, elewacji, płotów, tarasów oraz dachów",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Czysty Kamień"
    },
    "areaServed": {
      "@type": "State",
      "name": "Mazowieckie"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi Mycia Ciśnieniowego",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Prace Zewnętrzne",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mycie Kostki Brukowej",
                "alternateName": "Czyszczenie Kostki Brukowej",
                "serviceType": "Mycie Kostki Brukowej",
                "description": "Profesjonalne mycie i czyszczenie kostki brukowej"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "9.00",
                "priceCurrency": "PLN",
                "unitText": "m2"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mycie Elewacji Budynków",
                "alternateName": "Mycie Fasad Budynków",
                "serviceType": "Mycie Elewacji Budynków",
                "description": "Profesjonalne mycie i czyszczenie elewacji i fasad budynków"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "10.00",
                "priceCurrency": "PLN",
                "unitText": "m2"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mycie Basenów",
                "alternateName": "Czyszczenie Basenów",
                "serviceType": "Mycie Basenów",
                "description": "Profesjonalne mycie i czyszczenie basenów"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "12.00",
                "priceCurrency": "PLN",
                "unitText": "m2"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mycie Płotów",
                "alternateName": "Czyszczenie Płotów",
                "serviceType": "Mycie Płotów",
                "description": "Profesjonalne mycie i czyszczenie płotów"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "10.00",
                "priceCurrency": "PLN",
                "unitText": "m2"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mycie Dachów",
                "alternateName": "Czyszczenie Dachów",
                "serviceType": "Mycie Dachów",
                "description": "Profesjonalne mycie i czyszczenie dachów"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "12.00",
                "priceCurrency": "PLN",
                "unitText": "m2"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mycie Dachów",
                "alternateName": "Czyszczenie Dachów",
                "serviceType": "Mycie Dachów",
                "description": "Profesjonalne mycie i czyszczenie dachów"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "12.00",
                "priceCurrency": "PLN",
                "unitText": "m2"
              }
            },
            {
              "@type": "OfferCatalog",
              "name": "Usługi Ogrodowe",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Koszenie Trawy",
                    "serviceType": "Koszenie Trawy",
                    "description": "Profesjonalne koszenie trawnika"
                  },
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "3.00",
                    "priceCurrency": "PLN",
                    "unitText": "m2"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Odchwaszczanie",
                    "serviceType": "Odchwaszczanie",
                    "description": "Profesjonalne odchwaszczanie"
                  },
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "2.00",
                    "priceCurrency": "PLN",
                    "unitText": "m2"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Strzyżenie Żywopłotów",
                    "alternateName": "Przycinanie Drzew",
                    "serviceType": "Strzyżenie Żywopłotów",
                    "description": "Profesjonalne strzyżenie żywopłotów i przycinanie drzew"
                  },
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "50.00",
                    "priceCurrency": "PLN"
                  }
                }
              ]
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Prace Wewnętrzne",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pranie i czysczenie Dywanów",
                "alternateName": "Pranie i czyszczenie Wykładziny",
                "serviceType": "Pranie i czyszczenie Dywanów",
                "description": "Profesjonalne mycie i czyszczenie dywanów i wykładziny"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "10.00",
                "priceCurrency": "PLN",
                "unitText": "m2"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pranie kanap i foteli",
                "alternateName": "Czyszczenie kanap i foteli",
                "serviceType": "Czyszczenie kanap i foteli",
                "description": "Profesjonalne mycie i czyszczenie kanap oraz foteli"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "125.00",
                "priceCurrency": "PLN"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pranie krzesel i foteli biurowych",
                "alternateName": "Czyszczenie krzesel i foteli biurowych",
                "serviceType": "Czyszczenie krzesel i foteli biurowych",
                "description": "Profesjonalne mycie i czyszczenie krzesel oraz foteli biurowych"
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "25.00",
                "priceCurrency": "PLN"
              }
            }
          ]
        }
      ]
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
        <section className={styles.blackBg1}>
          <div className="container">
            <h1>OFERTA</h1>
            <p>
              W naszej ofercie znajdą państwo rozmaity wybór usług.
              <br className={styles.br} />
              <br />
              Wykonujemy prace zarówno zewnętrzne jak i te wewnątrz pomieszczeń.
              <br className={styles.br} />
              <br />
              Poznaj szczegóły naszej oferty i zapoznaj się sugerowanymi cenami.
            </p>
            <div className={styles.services}>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}/>
              <div className={styles.service}>
                <a href="#inDoorSection">
                  <div className={styles.insetShadowContainer}>
                    <Image src={Indoor} alt="Czyszczenie wnętrz myjką parową" priority/>
                    <div className={styles.insetShadow} />
                  </div>
                  <h2>Prace Wewnętrzne</h2>
                </a>
              </div>
              <div className={styles.service}>
                <a href="#outDoorSection">
                  <div className={styles.insetShadowContainer}>
                    <Image
                      src={Outdoor}
                      alt="Czyszczenie kosti brukowej urządzeniem pod dużym ciśnieniem"
                      priority
                    />
                    <div className={styles.insetShadow} />
                  </div>
                  <h2>Prace Zewnętrzne</h2>
                </a>
              </div>
              <div className={styles.service}>
                <a href="#carSection">
                  <div className={styles.insetShadowContainer}>
                    <Image src={Detailing} alt="Autodetailing" priority/>
                    <div className={styles.insetShadow} />
                  </div>
                  <h2>Auto Detailing</h2>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="outDoorSection">
          <OutdoorJobs />
        </section>

        <section id="inDoorSection">
          <IndoorJobs />
        </section>

        <section id="carSection">
          <CarJobs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
