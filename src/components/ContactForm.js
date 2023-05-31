import styles from "@/styles/contactForm.module.scss";

export default function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <input type="email" placeholder="Adres Email" required />
      <input type="text" placeholder="Imię i Nazwisko" required />
      <input type="tel" placeholder="Numer Kontaktowy" required />
      <textarea placeholder="Treść Wiadomości" required></textarea>
      <label htmlFor="rodo">
        <input id="rodo" name="rodo" type="checkbox" required />
        Wyrażam zgodę na przetwarzanie powyższych danych przez firmę Czystka
        Kostka sp. z o.o. w celu przedstawienia mi oferty.
      </label>
      <button type="submit">Proszę o kontakt</button>
    </form>
  );
}
