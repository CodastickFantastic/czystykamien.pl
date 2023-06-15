import "@/styles/globals.scss";
import { Inter, Nunito } from "next/font/google";

import { navigation } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Czysty Kamień - Czyszczenie kostki brukowej, elewacji, ogródw oraz kanap i dywanów",
  description:
    "Czysty Kamień to firma specjalizująca się w czyszceniu kostki brukowej, elewacji, ogrodów oraz kanap i dywanów. Z nami masz gwarancję, że twoja posesja będzie lśnić jak w dniu w któym została wybudowana.",
  icons: {
    icon: "/favicons/favicon-16x16.png",
    
  },
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="pl">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
