import type { Metadata } from "next";
import { Projects } from "../../components/Projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Conheça os projetos desenvolvidos por Gabriel Ferreira para solucionar problemas reais de suporte técnico e automação.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <main id="conteudo-principal">
      <Projects />
    </main>
  );
}
