import Navigation from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";

import C1 from "@/images/galery/comparission1.webp";
import C2 from "@/images/galery/comparission2.webp";
import C3 from "@/images/galery/comparission3.webp";
import C4 from "@/images/galery/comparission4.webp";
import C5 from "@/images/galery/comparission5.webp";
import C6 from "@/images/galery/comparission6.webp";
import C7 from "@/images/galery/comparission7.webp";

import styles from "@/styles/galeryPage.module.scss";

export const metadata = {
  title:
    "Galeria - Czysty Kamień",
  description:
    "Zobacz efekty naszej pracy. Przed i po czyszczeniu kostki brukowej, elewacji, ogrodów, kanap i dywanów.",
};

export default function GaleryPage() {
  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <header>
        <Navigation type="top" page="normal" />
        <MobileNav page="page" />
      </header>
      <main className={styles.main}>
        <section className="container">
          <h1>Galeria</h1>
          <div className={styles.galery}>
            <div className={styles.imageWrapper}>
              <Image src={C1} alt="Efekty mycia ciśnieniowego" />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C2} alt="Mycie ciśnieniowe kostki brukowej" />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C3} alt="Mycie kostki" />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={C4}
                alt="Efekty mycia ciśnieniowego kostki brukowej"
              />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C5} alt="Kostka brukowa po umyciu karcherem" />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C6} alt="Czysta kostka brukowa" />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C7} alt="Mycie płotu drewnianego" />
              <div className={styles.shadow} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
