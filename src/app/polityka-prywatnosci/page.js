import Navigation from "@/components/Header";
import MobileNav from "@/components/MobileNav";

import styles from "@/styles/homePage.module.scss";


export const metadata = {
    title:
        "Polityka Prywatności - Czysty Kamień",
    description:
        "Dowiedz się więcej na temat informacji RODO oraz Cookies wykorzysytywanych przez nasz serwis",
};

export default function PolitykaPrywatnosci() {
    return (
        <div className={styles.policy}>
            <div>
                <header>
                    <Navigation type="bottom" />
                    <MobileNav page="main" />
                </header>
                <main className={`${styles.policy} container`}>
                    <h1>Polityka Prywatnosci</h1>
                    <section className={styles.section}>
                        <h2>Administrator Danych Osobowych</h2>
                    </section>
                </main>
            </div>
        </div>
    );
}
