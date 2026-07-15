import Link from "next/link";

const competencias = [
  "Suporte corporativo",
  "PowerShell e automação",
  "React e Next.js",
  "SQL e Supabase",
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-principal"
      className="mx-auto flex min-h-[calc(100dvh-112px)] w-full max-w-7xl items-center px-6 pb-20 lg:px-10"
    >
      <div className="max-w-6xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
          Analista de Suporte de TI e Automação
        </p>

        <h1
          id="titulo-principal"
          className="font-serif text-6xl leading-none tracking-[-0.05em] md:text-8xl lg:text-9xl"
        >
          Gabriel Ferreira
        </h1>

        <p className="mt-8 max-w-6xl text-xl leading-relaxed text-gold-300 md:text-2xl">
          Suporte corporativo, automação e desenvolvimento de soluções para a
          rotina de TI.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-8 text-gold-300/80 md:text-lg">
          Transformo necessidades recorrentes do atendimento em procedimentos,
          scripts e ferramentas que organizam o trabalho, reduzem etapas manuais
          e tornam a documentação mais consistente.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/projetos"
            className="inline-flex min-h-14 items-center justify-center rounded-md bg-gold-400 px-8 text-lg font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            Ver projetos
          </Link>

          <Link
            href="/experiencia"
            className="inline-flex min-h-14 items-center justify-center rounded-md border border-gold-400/60 px-8 text-lg font-semibold text-gold-400 transition-all hover:-translate-y-0.5 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            Conhecer experiência
          </Link>

          <a
            href="/documentos/curriculo-gabriel-ferreira.pdf"
            download="Curriculo-Gabriel-Ferreira.pdf"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-gold-400/25 px-8 text-lg font-semibold text-gold-300/80 transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:bg-gold-400/10 hover:text-gold-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            Baixar currículo

            <span aria-hidden="true" className="text-xl">
              ↓
            </span>
          </a>
        </div>

        <ul
          aria-label="Principais competências"
          className="mt-12 flex max-w-5xl flex-wrap gap-x-8 gap-y-3 border-t border-gold-400/15 pt-6"
        >
          {competencias.map((competencia) => (
            <li
              key={competencia}
              className="text-sm font-medium text-gold-300/65"
            >
              {competencia}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
