type FrenteDeAtuacao = {
  title: string;
  description: string;
};

type DestaqueProfissional = {
  value: string;
  label: string;
};

const frentesDeAtuacao: FrenteDeAtuacao[] = [
  {
    title: "Atendimento e diagnóstico",
    description:
      "Atendimento remoto em ambiente corporativo, análise de incidentes e testes em computadores, impressoras, scanners e aplicações internas.",
  },
  {
    title: "Documentação e escalonamento",
    description:
      "Registro de evidências, descrição objetiva das ações realizadas e encaminhamento para equipes presenciais ou especialistas quando necessário.",
  },
  {
    title: "Automação e melhoria",
    description:
      "Criação de scripts e ferramentas internas para reduzir tarefas repetitivas, padronizar processos e apoiar a rotina do Service Desk.",
  },
];

const destaques: DestaqueProfissional[] = [
  {
    value: "10 mil+",
    label: "chamados finalizados ao longo da experiência profissional",
  },
  {
    value: "SLA",
    label: "atendimento orientado por prioridade e prazo",
  },
  {
    value: "Fim a fim",
    label: "diagnóstico, documentação e encaminhamento",
  },
];

export function Experience() {
  return (
    <section
      aria-labelledby="titulo-experiencia"
      className="flex min-h-[calc(100dvh-120px)] items-center border-t border-gold-400/15 bg-navy-950/45 px-6 py-10 lg:px-10 lg:py-8"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
            Experiência profissional
          </p>

          <h1
            id="titulo-experiencia"
            className="max-w-xl font-serif text-5xl leading-tight tracking-[-0.03em] text-gold-400 md:text-6xl"
          >
            Suporte técnico com responsabilidade operacional.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gold-300/80 md:text-lg">
            Atuo em Service Desk corporativo, atendendo usuários, investigando
            falhas e acompanhando cada incidente até a solução ou o
            encaminhamento correto.
          </p>

          <p className="mt-5 max-w-lg text-base leading-8 text-gold-300/65">
            Minha experiência combina atendimento, conhecimento técnico,
            documentação e busca constante por maneiras mais eficientes de
            executar o trabalho.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="grid gap-px overflow-hidden border border-gold-400/15 bg-gold-400/15 sm:grid-cols-3">
            {destaques.map((destaque) => (
              <article key={destaque.value} className="bg-navy-900/90 p-6">
                <p className="font-serif text-4xl font-semibold text-gold-400">
                  {destaque.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-gold-300/70">
                  {destaque.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            {frentesDeAtuacao.map((frente, index) => (
              <article
                key={frente.title}
                className="grid gap-4 border-b border-gold-400/15 pb-6 last:border-b-0 last:pb-0 md:grid-cols-[72px_0.45fr_1fr] md:items-start"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-2xl text-gold-400/30"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="font-serif text-2xl font-semibold text-gold-400">
                  {frente.title}
                </h2>

                <p className="text-sm leading-7 text-gold-300/70 md:text-base">
                  {frente.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="mt-8 border-l-2 border-gold-400/45 pl-5">
            <p className="text-sm leading-7 text-gold-300/70">
              Além das atividades operacionais, desenvolvo soluções próprias em
              PowerShell, JavaScript, Python, React e bancos de dados para
              transformar necessidades observadas no suporte em ferramentas
              práticas.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
