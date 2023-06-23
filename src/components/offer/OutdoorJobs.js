import styles from "@/styles/offer.module.scss";
import Image from "next/image";
import IsometricOutdoor from "@/images/isometricOutdoor.webp";
import Pool from "@/images/icons/poolIcon.png";
import Chemicals from "@/images/icons/chemicalsIcon.png";
import Pump from "@/images/icons/pumpIcon.png";
import Paving from "@/images/icons/pavingIcon.png";
import Sand from "@/images/icons/sandIcon.png";
import Fence from "@/images/icons/fenceIcon.png";
import Brush from "@/images/icons/brushIcon.png";
import Elevation from "@/images/icons/elevationIcon.png";
import Window from "@/images/icons/windowIcon.png";
import Roof from "@/images/icons/roofIcon.png";
import Fv from "@/images/icons/fvIcon.png";
import Garden from "@/images/icons/gardenIcon.png";
import Grass from "@/images/icons/grassIcon.png";
import Weed from "@/images/icons/weedIcon.png";
import Tree from "@/images/icons/treeIcon.png";

export default function OutdoorJobs() {
  return (
    <>
      <div className={styles.transparentBg}>
        <h3>Prace Zewnętrzne</h3>
        <div className={styles.isometricOutdoorContainer}>
          <Image
            src={IsometricOutdoor}
            alt="Ilustracja izometryczna prac wykonywanych na zewnątrz budynków"
          />
          <span className={`${styles.circle} ${styles.o1}`}><a href="#a1">1</a></span>
          <span className={`${styles.circle} ${styles.o2}`}><a href="#a2">2</a></span>
          <span className={`${styles.circle} ${styles.o3}`}><a href="#a3">3</a></span>
          <span className={`${styles.circle} ${styles.o4}`}><a href="#a4">4</a></span>
          <span className={`${styles.circle} ${styles.o5}`}><a href="#a5">5</a></span>
          <span className={`${styles.circle} ${styles.o6}`}><a href="#a6">6</a></span>
        </div>
      </div>

      <div className={styles.blackBg}>
        <div className="container">
          <div className={styles.offerContainer}>
            <div className={styles.offerSpec} id="a1">
              <p className={styles.number}>1</p>
              <Image
                src={Pool}
                className={styles.mainIcon}
                alt="Ikona basenu"
              />
              <h3>Mycie Basenów</h3>
              <p>Już od 12 ZŁ/M&#178;</p>
              <Image
                src={Chemicals}
                className={styles.secondIcon}
                alt="Ikona chemikaliów"
              />
              <p className={styles.cyan}>Chemia w cenie</p>
              <h4>Pakiet Prestige</h4>
              <p className={styles.cyan}>Zalecane Po Czyszczeniu</p>
              <p>Już od 239 ZŁ</p>
              <Image
                src={Pump}
                className={styles.secondIcon}
                alt="Ikona pompy"
              />
              <p>Czyszczenie Hydrauliki</p>
            </div>
            <div className={styles.offerSpec} id="a2">
              <p className={styles.number}>2</p>
              <Image
                src={Paving}
                className={styles.mainIcon}
                alt="Ikona kostki brukowej"
              />
              <h3>Mycie Kostki</h3>
              <p>Już od 9 ZŁ/M&#178;</p>
              <Image
                src={Chemicals}
                className={styles.secondIcon}
                alt="Ikona chemikaliów"
              />
              <p className={styles.cyan}>Odchwaszczanie w cenie</p>
              <h4>Piaskowanie Kostki</h4>
              <p className={styles.cyan}>Zalecane Po Czyszczeniu</p>
              <p>Już od 3 ZŁ/M&#178;</p>
              <Image
                src={Sand}
                className={styles.secondIcon}
                alt="Ikona piaskownicy"
              />
              <p>Piasek w cenie</p>
            </div>
            <div className={styles.offerSpec} id="a3">
              <p className={styles.number}>3</p>
              <Image
                src={Fence}
                className={styles.mainIcon}
                alt="Ikona drewnianego płotu"
              />
              <h3>Mycie Płotów</h3>
              <p>Już od 10 ZŁ/M</p>
              <Image
                src={Chemicals}
                className={styles.secondIcon}
                alt="Ikona chemikaliów"
              />
              <p className={styles.cyan}>Chemia w cenie</p>
              <h4>Renowacja Drewna</h4>
              <p className={styles.cyan}>Zalecane Po Czyszczeniu</p>
              <p>Już od 449 ZŁ/M</p>
              <Image
                src={Brush}
                className={styles.secondIcon}
                alt="Ikona pędzla"
              />
              <p>Olej w cenie</p>
            </div>
            <div className={styles.offerSpec} id="a4">
              <p className={styles.number}>4</p>
              <Image
                src={Elevation}
                className={styles.mainIcon}
                alt="Ikona elewacji domu"
              />
              <h3>Mycie Elewacji</h3>
              <p>Już od 10 ZŁ/M&#178;</p>
              <Image
                src={Chemicals}
                className={styles.secondIcon}
                alt="Ikona chemikaliów"
              />
              <p className={styles.cyan}>Chemia w cenie</p>
              <h4>Mycie Okien</h4>
              <p className={styles.cyan}>Zalecane Po Czyszczeniu</p>
              <p>Już od 29 ZŁ/Okno&#178;</p>
              <Image
                src={Window}
                className={styles.secondIcon}
                alt="Ikona okna"
              />
              <p>Obie strony w cenie</p>
            </div>
            <div className={styles.offerSpec} id="a5">
              <p className={styles.number}>5</p>
              <Image src={Roof} className={styles.mainIcon} alt="Ikona dachu" />
              <h3>Mycie Dachów</h3>
              <p>Wkrótce...</p>
              <Image
                src={Chemicals}
                className={styles.secondIcon}
                alt="Ikona chemikaliów"
              />
              <p className={styles.cyan}>Chemia w cenie</p>
              <h4>Mycie Fotowoltaiki</h4>
              <p className={styles.cyan}>Zalecane Raz Do Roku</p>
              <p>Już od 39 ZŁ/Panel&#178;</p>
              <Image
                src={Fv}
                className={styles.secondIcon}
                alt="Ikona paneli fotowoltaicznych"
              />
              <p>Zabezpieczenie w cenie</p>
            </div>
            <div className={`${styles.offerSpec2} ${styles.offerSpec}`} id="6">
              <p className={styles.number}>6</p>
              <Image
                src={Garden}
                className={styles.mainIcon}
                alt="Ikona ogródka"
              />
              <h3>Prace Ogrodowe</h3>
              <Image
                src={Grass}
                className={styles.secondIcon}
                alt="Ikona trawy"
              />
              <h4>Koszenie Trawnika</h4>
              <p className={styles.cyan}>Już od 3 ZŁ/M&#178;</p>
              <Image
                src={Weed}
                className={styles.secondIcon}
                alt="Ikona środka przeciw chwastom"
              />
              <h4>Odchwaszczanie</h4>
              <p className={styles.cyan}>Już od 1.5 ZŁ/M&#178;</p>
              <Image
                src={Tree}
                className={styles.secondIcon}
                alt="Ikona drzewa"
              />
              <h4>Drzewa/Żywopłoty</h4>
              <p className={styles.cyan}>Już od 50 ZŁ/Sztuka</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
