import styles from "@/styles/blog.module.scss";
import Navigation from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import PostPreview from "@/components/PostPreview";
import C1 from "@/images/galery/comparission1.webp";

import { getAllPosts } from "@/lib/postsApi";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "description", "coverImage", "slug", "subject", "author"]);

  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <header>
        <Navigation type="top" page="normal" />
        <MobileNav page="page" />
      </header>
      <main className={styles.main}>
        <div className="container">
          <h1>Blog</h1>
          <div className={styles.articlesContainer}>
            {posts.map((post) => (
              <PostPreview post={post} key={post.title} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
