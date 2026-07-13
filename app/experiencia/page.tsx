import type { Metadata } from "next";
import { Experience } from "../../components/Experience";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Conheça a experiência profissional de Gabriel Ferreira em Suporte de TI, Service Desk, diagnóstico técnico e documentação.",
};

export default function ExperienciaPage() {
  return (
    <main>
      <Experience />
    </main>
  );
}