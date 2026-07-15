import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import { HomeOverview } from "../components/HomeOverview";

export const metadata: Metadata = {
  title: "Gabriel Ferreira | Suporte, Automação e Desenvolvimento",
  description:
    "Portfólio de Gabriel Ferreira, Analista de Suporte de TI e Automação que cria scripts, ferramentas e soluções web para rotinas operacionais.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="conteudo-principal">
      <Hero />
      <HomeOverview />
    </main>
  );
}
