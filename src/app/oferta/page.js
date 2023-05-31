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

export default function OfferPage() {
  return (
    <div className="pagesBackground">
      <Navigation type="top" />
      <main className={styles.main}>
        <div className={styles.blackBg1}>
          <div className="container">
            <h1>OFERTA</h1>
            <p>
              W naszej ofercie znajdą państwo rozmaity wybór usług.
              <br />
              Wykonujemy prace zarówno zewnętrzne jak i te wewnątrz pomieszczeń.
              <br />
              Poznaj szczegóły naszej oferty i zapoznaj się sugerowanymi cenami.
            </p>
            <div className={styles.services}>
              <div className={styles.service}>
                <a href="#inDoorSection">
                  <div className={styles.insetShadowContainer}>
                    <Image src={Indoor} />
                    <div className={styles.insetShadow} />
                  </div>
                  <h3>Prace Wewnętrzne</h3>
                </a>
              </div>
              <div className={styles.service}>
                <a href="#outDoorSection">
                  <div className={styles.insetShadowContainer}>
                    <Image src={Outdoor} />
                    <div className={styles.insetShadow} />
                  </div>
                  <h3>Prace Zewnętrzne</h3>
                </a>
              </div>
              <div className={styles.service}>
                <a href="#carSection">
                  <div className={styles.insetShadowContainer}>
                    <Image src={Detailing} />
                    <div className={styles.insetShadow} />
                  </div>
                  <h3>Auto Detailing</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="outDoorSection">
          <OutdoorJobs />
        </div>
        <div id="inDoorSection">
          <IndoorJobs />
        </div>
        <div id="carSection">
          <CarJobs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
