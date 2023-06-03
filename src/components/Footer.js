import Image from "next/image";
import styles from "@/styles/footer.module.scss";
import Logo from "@/images/logo.png";
import Link from "next/link";
import Script from "next/script";

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topPart}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src={Logo} alt="Czysty Kamień" height={100} />
            </Link>
            <p>Twój partner w walce z zabrudzeniami</p>
          </div>
          <div className={styles.column}>
            <address>
              <h4>Adres</h4>
              <p>
                Warszawa, Lublin,
                <br />
                Łódź, Białystok
              </p>
              <br />
              <h4>Kontakt</h4>
              <p>
                <Link href="mailto:info@czysykamien.pl">
                  info@czystykamien.pl
                </Link>
                <br />
                <Link href="tel:+48501721417">+48 501 721 417</Link>
              </p>
            </address>
          </div>
          <div className={styles.column}>
            <h4>Informacje</h4>
            <Link href="/kontakt">Oferta dla Firm</Link>
            <Link href="/kontakt">Wypożyczanie Sprzętu</Link>
            <Link href="/">Polityka Prywatności</Link>
            <Link href="/">Regulamin</Link>
            <Link href="/">RODO</Link>
            <Link href="/kontakt">Praca</Link>
          </div>
          <div className={styles.column}>
            <h4>Usługi</h4>
            <p>
              <p>Mycie KostkiBrukowej</p>
              <p>Mycie Elewacji</p>
              <p>Mycie Okien</p>
              <p>Mycie Dachów</p>
              <p>Mycie Samochodów</p>
            </p>
          </div>
          <div className={styles.column}>
            <h4>Newsletter</h4>
            <form>
              <input type="email" placeholder="Twój adres e-mail..." required />
              <button className="submit">Zapisz się</button>
            </form>
            <p className={styles.icons8}>
              Icons by: <a href="https://icons8.com/">ICONS8</a>
            </p>
          </div>
        </div>
        <div className={styles.botPart}>
          <p>&copy; 2023 Czysty Kamień</p>
          <p>
            Projekt i realizacja: <Link href="/">Space Agency Marketing</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
