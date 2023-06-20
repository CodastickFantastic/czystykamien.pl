import styles from "@/styles/articleTile.module.scss";
import Image from "next/image";
import Link from "next/link";

import DateFormatter from "./DateFormatter";

export default function ArticleTile({
  title,
  description,
  subject,
  author,
  date,
  link,
  image,
}) {
  return (
    <article className={styles.articleTile}>
      <div className={styles.imageWrapper}>
        <Image src={image} />
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.articleDescription}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.articleFooter}>
          <div className={styles.details}>
            <p className={styles.cyan}>
              Tematyka: <span>{subject}</span>
            </p>
            <p className={styles.cyan}>
              Autor: <span>{author}</span>
            </p>
            <p className={styles.cyan}>
              Opublikowany:{" "}
              <span>
                <date>{date}</date>
              </span>
            </p>
          </div>
          <button className={styles.moreInfo}>
            <Link href={link}>Czytaj więcej...</Link>
          </button>
        </div>
      </div>
    </article>
  );
}
