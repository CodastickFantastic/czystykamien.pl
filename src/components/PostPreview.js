import styles from "@/styles/articleTile.module.scss";
import Image from "next/image";
import Link from "next/link";

import DateFormatter from "./DateFormatter";

export default function ArticleTile({ post }) {
  return (
    <article className={styles.articleTile}>
      <div className={styles.imageWrapper}>
        <Image src={post.coverImage} width={200} height={200} />
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.articleDescription}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className={styles.articleFooter}>
          <div className={styles.details}>
            <p className={styles.cyan}>
              Tematyka: <span>{post.subject}</span>
            </p>
            <p className={styles.cyan}>
              Autor: <span>{post.author}</span>
            </p>
            <p className={styles.cyan}>
              Opublikowany:{" "}
              <span>
                <DateFormatter dateString={post.date} />
              </span>
            </p>
          </div>
          <button className={styles.moreInfo}>
            <Link href={`/posts/${post.slug}`}>Czytaj więcej...</Link>
          </button>
        </div>
      </div>
    </article>
  );
}
