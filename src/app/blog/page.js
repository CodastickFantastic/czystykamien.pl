

export default function BlogPage() {
    return (
      <div className={`pagesBackground ${styles.mobile}`}>
        <header>
          <Navigation type="top" page="normal" />
          <MobileNav page="page" />
        </header>
        <main className={styles.main}>
          <div className="container">
            <h1>Blog</h1>
            <div>
                
            </div>
          </div>
        </main>
  
        <Footer />
      </div>
    );
  }
  