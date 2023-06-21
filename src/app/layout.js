import "@/styles/globals.scss";
import { Inter, Nunito } from "next/font/google";

import { navigation } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title:
    "Czyszczenie kostki brukowej, elewacji, ogródw oraz kanap i dywanów - Czysty Kamień",
  description:
    "Profesjonalne czyszczenie i mycie kostki brukowej, elewacji, ogrodów, kanap i dywanów Warszawa i okolice. Sprawdź naszą ofertę!",
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="pl">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
