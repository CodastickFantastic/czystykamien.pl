import Link from "next/link";
import Navigation from "@/components/Header";
import Image from "next/image";
import Hero from "@/images/hero.webp";

import styles from "@/styles/homePage.module.scss";
import MobileNav from "@/components/MobileNav";

export const metadata = {
    title:
        "Polityka Prywatności - Czysty Kamień",
    description:
        "Dowiedz się więcej na temat informacji RODO oraz Cookies wykorzysytywanych przez nasz serwis",
};

export default function Home() {

    return (
        <div className={styles.homeHero}>
            <div>
                <header>
                    <Navigation type="bottom" />
                    <MobileNav page="main" />
                </header>
                <main>
                    <div className={styles.heroSection}>
                        <div className="container">
                            <div className={styles.heroBorders}>
                                <p>
                                    Polityka Prywatnosci test
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
