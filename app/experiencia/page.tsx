import type { Metadata } from "next";
import { Experience } from "../../components/Experience";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Conheça a experiência profissional de Gabriel Ferreira em Suporte de TI, Service Desk, diagnóstico técnico e documentação.",
  alternates: { canonical: "/experiencia" },
};

export default function ExperienciaPage() {
  return (
    <main id="conteudo-principal">
      <Experience />
    </main>
  );
}
