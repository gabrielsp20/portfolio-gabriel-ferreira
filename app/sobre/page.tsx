import { About } from "../../components/About";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata(
  "Sobre",
  "Da manutenção de dispositivos ao suporte corporativo: conheça a trajetória e a forma de trabalho de Gabriel Ferreira.",
  "/sobre",
);

export default function SobrePage() {
  return (
    <main id="conteudo-principal" tabIndex={-1}>
      <About />
    </main>
  );
}
