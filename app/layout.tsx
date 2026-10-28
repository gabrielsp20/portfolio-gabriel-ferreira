import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import profile from "../data/profile.json";
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
  metadataBase: new URL("https://www.gabrielsferreira.com.br"),

  title: {
    default: "Gabriel Ferreira | Suporte de TI e Automação",
    template: "%s | Gabriel Ferreira",
  },

  description:
    "Gabriel Ferreira: suporte de TI, Service Desk, diagnóstico, documentação e automação de rotinas profissionais.",

  authors: [
    {
      name: "Gabriel Ferreira",
    },
  ],

  creator: "Gabriel Ferreira",
  keywords: [
    "Analista de Suporte de TI",
    "Service Desk",
    "Automação",
    "PowerShell",
    "Python",
    "Desenvolvimento web",
  ],

  openGraph: {
    title: "Gabriel Ferreira | Suporte de TI e Automação",
    description:
      "Experiência no suporte. Automação na prática. Conheça a trajetória profissional e baixe o currículo.",
    url: "https://www.gabrielsferreira.com.br",
    type: "website",
    locale: "pt_BR",
    siteName: "Gabriel Ferreira",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gabriel Ferreira | Suporte de TI e Automação",
    description:
      "Experiência no suporte. Automação na prática. Conheça a trajetória profissional e baixe o currículo.",
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Gabriel Ferreira",
      url: "https://www.gabrielsferreira.com.br",
      jobTitle: profile.role,
      homeLocation: {
        "@type": "Place",
        name: "Vitória da Conquista, Bahia, Brasil",
      },
      sameAs: [
        "https://www.linkedin.com/in/gabriel-ferreira-387070204/",
        "https://github.com/gabrielsp20",
      ],
      knowsAbout: [
        "Service Desk",
        "Suporte de TI",
        "PowerShell",
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "PostgreSQL",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Portfólio Gabriel Ferreira",
      url: "https://www.gabrielsferreira.com.br",
      inLanguage: "pt-BR",
      author: {
        "@type": "Person",
        name: "Gabriel Ferreira",
      },
    },
  ];

  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorantGaramond.variable} antialiased`}
    >
      <body>
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
          }}
        />
        <Header />

        <div className="site-content">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
