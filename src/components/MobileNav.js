"use client";
import { useState } from "react";

import styles from "@/styles/header.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.png";
import Tools from "@/images/icons/toolsIcon.png";
import Phone from "@/images/icons/phoneIconWhite.png";
import About from "@/images/icons/aboutIcon.png";
import Blog from "@/images/icons/blogIcon.png";
import Offer from "@/images/icons/priceIcon.png";
import Galery from "@/images/icons/galeryIcon.png";

export default function MobileNav({ page }) {
  const [colorChange, setColorChange] = useState(false);
  const changeNavBarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBarColor);
  }

  return (
    <div className={styles.mobileNav} id="nav">
      <div className={`${styles.logo} ${colorChange && styles.blackBg}`}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo czystykamien.pl - Ikona myjki ciśnieniowej"
          />
        </Link>
      </div>
      <nav
        className={`${styles.navigation} ${page === "main" && styles.blackBg}`}
      >
        <Link href="/o-nas">
          <Image src={About} />O NAS
        </Link>
        <Link href="/blog">
          <Image src={Blog} />
          BLOG
        </Link>
        <Link href="/oferta">
          <Image src={Offer} />
          OFERTA
        </Link>
        <Link href="/sprzet">
          <Image src={Tools} />
          SPRZĘT
        </Link>
        <Link href="/galeria">
          <Image src={Galery} />
          GALERIA
        </Link>
        <Link href="/kontakt">
          <Image src={Phone} />
          KONTAKT
        </Link>
      </nav>
    </div>
  );
}
