import { getPostsBySlug } from "@/lib/postsApi";
import styles from "@/styles/posts.module.scss";
import Navigation from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import htmlStripe from "@/lib/htmlStripe";

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
    author: post.author,
  };
}

export default function Post({ params }) {
  const post = getPostsBySlug(params.slug, [
    "title",
    "author",
    "content",
    "coverImage",
    "seoTitle",
    "date",
    "keywords",
    "subject",
    "seoDescription",

  ]);

  const jsonLdBlog = {
    "@context":"http://schema.org",
		"@type": "BlogPosting",
		"image": `https://www.czystykamien.pl/${post.coverImage}`,
		"url": `https://www.czystykamien.pl/${params.slug}`,
		"headline": post.title,
    "alternativeHeadline": post.seoTitle,
		"dateCreated": post.date,
		"datePublished": post.date,
		"dateModified": post.date,
		"inLanguage": "pl-PL",
		"isFamilyFriendly": "true",
		"copyrightYear": "2023",
		"copyrightHolder": "Czysty Kamień",
		"author": {
			"@type": "Person",
			"name": post.author,
		},
		"publisher": {
			"@type": "Organization",
			"name": "Czysty Kamień",
			"url": "https://www.czystykamien.pl",
			"logo": {
				"@type": "ImageObject",
				"url": "http://www.czystykamien.pl/images/logo.png"
			}
		},
		"keywords": [post.keywords],
		"genre": post.subject,
		"articleSection": post.subject,
    "description": post.seoDescription,
		"articleBody": htmlStripe(post.content)
  }

  return (
    <div className={`pagesBackground ${styles.mobile}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />
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
