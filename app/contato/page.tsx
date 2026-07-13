import type { Metadata } from "next";
import { Contact } from "../../components/Contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Gabriel Ferreira para oportunidades em suporte corporativo, automação, sistemas e desenvolvimento web.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}