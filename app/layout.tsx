import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gabriel Ferreira | Suporte, Automação e Desenvolvimento",
    template: "%s | Gabriel Ferreira",
  },

  description:
    "Portfólio de Gabriel Ferreira, profissional de TI com experiência em suporte corporativo, automação e desenvolvimento de soluções web.",

  authors: [
    {
      name: "Gabriel Ferreira",
    },
  ],

  creator: "Gabriel Ferreira",

  openGraph: {
    title: "Gabriel Ferreira | Portfólio Profissional",
    description:
      "Suporte corporativo, automação e desenvolvimento de soluções para problemas reais de TI.",
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio Gabriel Ferreira",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[radial-gradient(circle_at_center,_#0a3563_0%,_#061d3b_50%,_#031429_100%)] text-gold-400">
        <Header />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}