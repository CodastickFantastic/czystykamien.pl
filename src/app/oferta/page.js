import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/offerPage.module.scss";
import Image from "next/image";

import Indoor from "@/images/indoor2.webp";
import Outdoor from "@/images/outdoor.webp";
import Detailing from "@/images/detailing.webp";

import Link from "next/link";
import CarJobs from "@/components/offer/CarJobs";
import OutdoorJobs from "@/components/offer/OutdoorJobs";
import IndoorJobs from "@/components/offer/IndoorJobs";
import MobileNav from "@/components/MobileNav";

export default function OfferPage() {
  return (
    <div className={`pagesBackground ${styles.mobile}`}>
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
