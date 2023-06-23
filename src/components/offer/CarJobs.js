import Image from "next/image";
import IsometricCar from "@/images/isometricCar.webp";
import styles from "@/styles/offer.module.scss";

export default function CarJobs() {
  return (
    <>
      <div className={styles.transparentBg}>
        <h3>Auto Detailing</h3>
        <div className={styles.isometricCarContainer}>
          <Image src={IsometricCar} alt="Ilustracja izometryczna samochodu" />
        </div>
      </div>

      <div className={styles.blackBg}>
        <div className="container">
          <p className={styles.comming}>Auto Detailing wkrótce...</p>
        </div>
      </div>
    </>
  );
}
