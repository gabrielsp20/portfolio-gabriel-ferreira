import { Experience } from "../../components/Experience";
import { pageMetadata } from "../../lib/metadata";

export const metadata = pageMetadata(
  "Experiência",
  "Trajetória de Gabriel Ferreira na SONDA IT, manutenção autônoma e ASSISTHEL TELECOM. Responsabilidades em suporte e formação em Ciência da Computação.",
  "/experiencia",
);

export default function ExperienciaPage() {
  return (
    <main id="conteudo-principal" tabIndex={-1}>
      <Experience />
    </main>
  );
}
