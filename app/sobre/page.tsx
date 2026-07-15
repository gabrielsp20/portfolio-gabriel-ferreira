import type { Metadata } from "next";
import { About } from "../../components/About";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a trajetória profissional de Gabriel Ferreira em Suporte de TI, automação e desenvolvimento web.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <main id="conteudo-principal">
      <About />
    </main>
  );
}
