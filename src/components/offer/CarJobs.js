import Image from "next/image";
import IsometricCar from "@/images/isometric_car2.webp";
import styles from "@/styles/offer.module.scss";

export default function CarJobs() {
  return (
    <>
      <div className={styles.transparentBg}>
        <h2>Auto Detailing</h2>
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
