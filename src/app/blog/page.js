import styles from "@/styles/blog.module.scss";
import Navigation from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import ArticleTile from "@/components/ArticleTile";
import C1 from "@/images/galery/comparission1.webp";
import Image from "next/image";

export default function Blog() {
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
            <ArticleTile
              title="Pierwszy Post Na Naszym Blogu"
              description="Profesjonalna pielęgnacja trawnika nie jest niczym ciężkim. Do spełnienia marzeń o posiadaniu idealnej trawy nie potrzeba niczego więcej jak odrobiny cierpliwości..."
              subject="Pielęgnacja trawnika"
              author="Jan Kowalski"
              date="2021-01-01"
              link="/blog/1"
              image={C1}
            />
            <ArticleTile
              title="Pierwszy Post Na Naszym Blogu"
              description="Profesjonalna pielęgnacja trawnika nie jest niczym ciężkim. Do spełnienia marzeń o posiadaniu idealnej trawy nie potrzeba niczego więcej jak odrobiny cierpliwości..."
              subject="Pielęgnacja trawnika"
              author="Jan Kowalski"
              date="2021-01-01"
              link="/blog/1"
              image={C1}
            />
            <ArticleTile
              title="Pierwszy Post Na Naszym Blogu"
              description="Profesjonalna pielęgnacja trawnika nie jest niczym ciężkim. Do spełnienia marzeń o posiadaniu idealnej trawy nie potrzeba niczego więcej jak odrobiny cierpliwości..."
              subject="Pielęgnacja trawnika"
              author="Jan Kowalski"
              date="2021-01-01"
              link="/blog/1"
              image={C1}
            />
            <ArticleTile
              title="Pierwszy Post Na Naszym Blogu"
              description="Profesjonalna pielęgnacja trawnika nie jest niczym ciężkim. Do spełnienia marzeń o posiadaniu idealnej trawy nie potrzeba niczego więcej jak odrobiny cierpliwości..."
              subject="Pielęgnacja trawnika"
              author="Jan Kowalski"
              date="2021-01-01"
              link="/blog/1"
              image={C1}
            />
            <ArticleTile
              title="Pierwszy Post Na Naszym Blogu"
              description="Profesjonalna pielęgnacja trawnika nie jest niczym ciężkim. Do spełnienia marzeń o posiadaniu idealnej trawy nie potrzeba niczego więcej jak odrobiny cierpliwości..."
              subject="Pielęgnacja trawnika"
              author="Jan Kowalski"
              date="2021-01-01"
              link="/blog/1"
              image={C1}
            />
            <ArticleTile
              title="Pierwszy Post Na Naszym Blogu"
              description="Profesjonalna pielęgnacja trawnika nie jest niczym ciężkim. Do spełnienia marzeń o posiadaniu idealnej trawy nie potrzeba niczego więcej jak odrobiny cierpliwości..."
              subject="Pielęgnacja trawnika"
              author="Jan Kowalski"
              date="2021-01-01"
              link="/blog/1"
              image={C1}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
