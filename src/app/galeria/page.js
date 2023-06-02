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

export default function GaleryPage() {
  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <header>
        <Navigation type="top" page="normal" />
        <MobileNav page="page" />
      </header>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.galery}>
            <div className={styles.imageWrapper}>
              <Image src={C1} />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C2} />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C3} />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C4} />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C5} />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C6} />
              <div className={styles.shadow} />
            </div>
            <div className={styles.imageWrapper}>
              <Image src={C7} />
              <div className={styles.shadow} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
