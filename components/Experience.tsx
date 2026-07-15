type FrenteDeAtuacao = {
  title: string;
  description: string;
};

type DestaqueProfissional = {
  value: string;
  label: string;
};

type Responsabilidade = {
  description: string;
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
    label: "atendimento orientado por prioridade, prazo e impacto",
  },
  {
    value: "Fim a fim",
    label: "diagnóstico, documentação, solução e encaminhamento",
  },
];

const responsabilidades: Responsabilidade[] = [
  {
    description:
      "Atendimento remoto a usuários em ambiente corporativo, buscando compreender o impacto e a urgência de cada solicitação.",
  },
  {
    description:
      "Diagnóstico de problemas relacionados a computadores, Windows, aplicações, impressoras, scanners, dispositivos e conectividade.",
  },
  {
    description:
      "Registro das evidências, testes realizados, causas identificadas e soluções aplicadas durante os atendimentos.",
  },
  {
    description:
      "Encaminhamento de incidentes para equipes presenciais ou especialistas, com informações técnicas claras e completas.",
  },
  {
    description:
      "Atuação orientada por SLA, prioridade, impacto operacional e continuidade do atendimento aos usuários.",
  },
  {
    description:
      "Desenvolvimento de scripts, automações e ferramentas para reduzir tarefas repetitivas e melhorar processos internos.",
  },
];

export function Experience() {
  return (
    <section
      aria-labelledby="titulo-experiencia"
      className="min-h-[calc(100dvh-120px)] border-t border-gold-400/15 bg-navy-950/45 px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
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
                <article
                  key={destaque.value}
                  className="bg-navy-900/90 p-6"
                >
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
          </div>
        </header>

        <section
          aria-labelledby="trajetoria-profissional"
          className="mt-20 border-t border-gold-400/20 pt-14 md:mt-24 md:pt-16"
        >
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
                Trajetória
              </p>

              <h2
                id="trajetoria-profissional"
                className="mt-4 max-w-xl font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
              >
                Experiência construída na prática.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-gold-300/65">
                Minha atuação profissional é marcada pelo contato direto com
                usuários, investigação de falhas, responsabilidade sobre
                incidentes e melhoria contínua dos processos de suporte.
              </p>
            </div>

            <div>
              <article className="relative border-l border-gold-400/25 pl-8 md:pl-10">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold-400"
                />

                <div className="flex flex-col gap-5 border-b border-gold-400/15 pb-10 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                      Experiência atual
                    </p>

                    <h3 className="mt-3 font-serif text-3xl font-semibold text-gold-400">
                      Analista de Suporte de TI / Service Desk
                    </h3>

                    <p className="mt-2 text-base font-semibold text-gold-300/80">
                      SONDA
                    </p>
                  </div>

                  <div className="shrink-0 text-sm leading-7 text-gold-300/55 md:text-right">
                    <p>Atual</p>
                    <p>Vitória da Conquista, Bahia</p>
                    <p>Atuação remota</p>
                  </div>
                </div>

                <div className="pt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">
                    Principais responsabilidades
                  </h4>

                  <ul className="mt-6 grid gap-4">
                    {responsabilidades.map((responsabilidade, index) => (
                      <li
                        key={responsabilidade.description}
                        className="grid grid-cols-[32px_1fr] gap-3"
                      >
                        <span className="font-serif text-lg text-gold-400/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-7 text-gold-300/70 md:text-base">
                          {responsabilidade.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="formacao-academica"
          className="mt-20 border-t border-gold-400/20 pt-14 md:mt-24 md:pt-16"
        >
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
                Formação acadêmica
              </p>

              <h2
                id="formacao-academica"
                className="mt-4 max-w-xl font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
              >
                Formação acadêmica concluída.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-gold-300/65">
                Graduação concluída pela Universidade Nove de Julho, com
                titulação de Bacharel em Ciência da Computação.
              </p>
            </div>

            <article className="relative border-l border-gold-400/25 pl-8 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold-400"
              />

              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                  Ensino superior
                </p>

                <span className="border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
                  Concluído
                </span>
              </div>

              <h3 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-gold-400">
                Ciência da Computação — Bacharelado
              </h3>

              <p className="mt-4 text-base font-medium leading-8 text-gold-300/75">
                Universidade Nove de Julho — UNINOVE
              </p>

              <dl className="mt-8 grid gap-x-10 gap-y-6 border-t border-gold-400/15 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
                    Titulação
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-gold-300/75">
                    Bacharel em Ciência da Computação
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
                    Conclusão do curso
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-gold-300/75">
                    <time dateTime="2022-12-20">20 de dezembro de 2022</time>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
                    Colação de grau
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-gold-300/75">
                    <time dateTime="2023-01-16">16 de janeiro de 2023</time>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
                    Carga horária total
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-gold-300/65">
                    3.636 horas-aula
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        </section>

        <aside className="mt-20 border-l-2 border-gold-400/45 bg-navy-900/30 px-5 py-5 md:mt-24">
          <p className="max-w-5xl text-sm leading-7 text-gold-300/70">
            Além das atividades operacionais, desenvolvo soluções próprias em
            PowerShell, JavaScript, Python, React e bancos de dados para
            transformar necessidades observadas no suporte em ferramentas
            práticas.
          </p>
        </aside>
      </div>
    </section>
  );
}
