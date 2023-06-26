import styles from "@/styles/blog.module.scss";
import Navigation from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import PostPreview from "@/components/PostPreview";

import { getAllPosts } from "@/lib/postsApi";

export const metadata = {
  title:
    "Blog - Czysty Kamień",
  description:
    "Dowiedz się w jaki sposób profesjonaliści czyszczą kostkę brukową, elewację i wiele wiecej. Poświęć chwilę na nasze artykuły i dowiedz się więcej.",
};

export default function Blog() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog - Strona z artykułami",
    "url": "https://czystykamien.pl/blog",
    "isFamilyFriendly": "true",
    "description": "Poznaj nasze artykuły na temat czyszczenia kostki brukowej, elewacji, ogrodów, kanap i dywanów. Dowiedz się jak w jaki sposób pracują profesjonaliści.",
    "publisher": {
      "@type": "Organization",
      "name": "Czysty Kamień",
      "url": "https://czystykamien.pl"
    }
  }

  
  const posts = getAllPosts(["title", "date", "description", "coverImage", "slug", "subject", "author"]);


  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
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
