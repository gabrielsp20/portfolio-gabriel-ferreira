import { Contact } from "../../components/Contact";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata(
  "Contato",
  "Fale com Gabriel Ferreira por e-mail ou LinkedIn sobre oportunidades em suporte de TI, aplicações, automação e desenvolvimento.",
  "/contato",
);

export default function ContactPage() {
  return (
    <main id="conteudo-principal" tabIndex={-1}>
      <Contact />
    </main>
  );
}
