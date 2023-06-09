import styles from "@/styles/offer.module.scss";
import Image from "next/image";
import IsometricIndoor from "@/images/isometricIndoor.webp";
import Sofa from "@/images/icons/sofaIcon.png";
import Delivery from "@/images/icons/deliveryIcon.png";
import Chair from "@/images/icons/chairIcon.png";
import Chemicals from "@/images/icons/chemicalsIcon.png";
import Carpet from "@/images/icons/carpetIcon.png";
import Covering from "@/images/icons/coveringIcon.png";

export default function IndoorJobs() {
  return (
    <>
      <div className={styles.transparentBg}>
        <h3>Prace Wewnętrzne</h3>
        <div className={styles.isometricIndoorContainer}>
          <Image
            src={IsometricIndoor}
            alt="Ilustracja izometryczna prac wykonywanych na wewnątrz"
          />
          <span className={`${styles.circle} ${styles.i1}`}><a href="#a7">1</a></span>
          <span className={`${styles.circle} ${styles.i2}`}><a href="#a8">2</a></span>
        </div>
      </div>

      <div className={styles.blackBg}>
        <div className="container">
          <div className={styles.offerContainer}>
            <div className={`${styles.offerSpecLong} ${styles.offerSpec}`} id="a7">
              <p className={styles.number}>1</p>
              <Image
                src={Sofa}
                className={styles.mainIcon}
                alt="Ikona kanapy/sofy"
              />
              <h3>Pranie Kanap</h3>
              <p>Już od 150zł/Sztuka</p>
              <Image
                src={Chair}
                className={styles.mainIcon}
                alt="Ikona krzesła"
              />
              <h3>Pranie Krzeseł</h3>
              <p>Już od 25zł/Sztuka</p>
              <Image
                src={Chemicals}
                className={styles.mainIcon}
                alt="Ikona chemikaliów do impregnacji"
              />
              <h3>Impregnacja</h3>
              <p>Już od 25zł/Sztuka</p>
              <Image
                src={Delivery}
                className={styles.secondIcon}
                alt="Ikona obrazująca dojazd do klienta"
              />
              <p>Dojazd w cenie</p>
            </div>
            <div className={`${styles.offerSpecLong} ${styles.offerSpec}`} id="a8">
              <p className={styles.number}>2</p>
              <Image
                src={Carpet}
                className={styles.mainIcon}
                alt="Ikona dywanu"
              />
              <h3>Pranie Dywanów</h3>
              <p>Już od 150zł/Sztuka</p>
              <Image
                src={Covering}
                className={styles.mainIcon}
                alt="Ikona wykładziny"
              />
              <h3>Pranie Wykładzin</h3>
              <p>Już od 9zł/M&#178;</p>
              <Image
                src={Chemicals}
                className={styles.mainIcon}
                alt="Ikona chemikaliów do impregnacji"
              />
              <h3>Impregnacja</h3>
              <p>Już od 50zł</p>
              <Image
                src={Delivery}
                className={styles.secondIcon}
                alt="Ikona obrazująca dojazd do klienta"
              />
              <p>Dojazd w cenie</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
