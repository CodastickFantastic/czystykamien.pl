import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.scss";

import Logo from "@/images/logo.png";

function Navigation({ type }) {
  return (
    <header>
      <div className={type === "bottom" ? styles.bottomNav : styles.topNav}>
        <div className={`${styles.navContainer} container`}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src={Logo} alt="Czysty Kamień" height={100} />
            </Link>
          </div>
          <div className={styles.linksContainer}>
            <nav>
              <Link href="/o-nas">O NAS</Link>
              <Link href="/blog">BLOG</Link>
              <Link href="/oferta">OFERTA</Link>
              <Link href="/sprzet">SPRZĘT</Link>
              <Link href="/galeria">GALERIA</Link>
              <Link href="/kontakt">KONTAKT</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
