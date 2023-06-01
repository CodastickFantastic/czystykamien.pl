import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/header.module.scss";

import Logo from "@/images/logo.png";
import Tools from "@/images/icons/toolsIcon.png";
import Phone from "@/images/icons/phoneIconWhite.png";
import About from "@/images/icons/aboutIcon.png";
import Blog from "@/images/icons/blogIcon.png";
import Offer from "@/images/icons/priceIcon.png";
import Galery from "@/images/icons/galeryIcon.png";

function Navigation({ type, page }) {
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
      <div className={styles.mobileNav}>
        <div className={`${styles.logo} ${page === "main" ? styles.main : styles.normal}`}>
          <Link href="/">
            <Image src={Logo} />
          </Link>
        </div>
        <div className={`${styles.navigation} ${page === "main" ? styles.main : styles.normal}`}>
          <Link href="/o-nas"><Image src={About}/>O NAS</Link>
          <Link href="/blog"><Image src={Blog}/>BLOG</Link>
          <Link href="/oferta"><Image src={Offer}/>OFERTA</Link>
          <Link href="/sprzet"><Image src={Tools}/>SPRZĘT</Link>
          <Link href="/galeria"><Image src={Galery}/>GALERIA</Link>
          <Link href="/kontakt"><Image src={Phone}/>KONTAKT</Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
