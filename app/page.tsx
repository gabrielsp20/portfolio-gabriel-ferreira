import { Hero } from "../components/Hero";
import { HomeOverview } from "../components/HomeOverview";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata(
  "Suporte de TI e Automação",
  "Gabriel Ferreira: experiência em Service Desk, suporte a aplicações, diagnóstico e automação. Conheça a trajetória profissional e baixe o currículo.",
  "/",
);

export default function Home() {
  return (
    <main id="conteudo-principal" tabIndex={-1}>
      <Hero />
      <HomeOverview />
    </main>
  );
}
