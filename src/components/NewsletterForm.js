"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "@/styles/footer.module.scss";

export default function NewsletterForm() {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ytydzne",
        "template_j3xuk75",
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PRIVATE_KEY
      )
      .then(
        (result) => {
          console.log(result);
          setIsSend(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="subject"
        value="Proszę o dodanie mojego maila do newslettera"
      />
      <input
        className={styles.ripple}
        name="email"
        type="email"
        placeholder="Twój adres e-mail..."
        required
      />

      {isSend === false ? (
        <button className="submit">Zapisz się</button>
      ) : (
        <button className="submit" disabled>
          Zapisano
        </button>
      )}
    </form>
  );
}
