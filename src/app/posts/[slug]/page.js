import { getPostsBySlug } from "@/lib/postsApi";
// import markdownToHtml from "@/lib/markdownToHtml";
import styles from "@/styles/posts.module.scss";
import Navigation from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";

export async function generateMetadata({ params }){
  const post = getPostsBySlug(params.slug, [
    "seoTitle",
    "seoDescription",
    "keywords",
    "coverImage",
    "author"
  ]);

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
  };
}

export default function Post({ params }) {
  const post = getPostsBySlug(params.slug, [
    "title",
    "author",
    "content",
    "coverImage",
  ]);

  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <header>
        <Navigation type="top" page="normal" />
        <MobileNav page="page" />
      </header>
      <main className={styles.main}>
        <article>
          <div className="blackBgPost">
            <div className="container">
              <Image src={post.coverImage} width={1000} height={400} alt="Zdjęcie głowne na stronie bloga" priority/>
            </div>
          </div>

          <h1>{post.title}</h1>

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
