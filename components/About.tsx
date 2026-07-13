type FormaDeTrabalho = {
  title: string;
  description: string;
};

type Destaque = {
  value: string;
  label: string;
};

const formasDeTrabalho: FormaDeTrabalho[] = [
  {
    title: "Entender antes de agir",
    description:
      "Analiso o sintoma, o impacto e as evidências antes de aplicar uma solução ou encaminhar o atendimento.",
  },
  {
    title: "Documentar com clareza",
    description:
      "Registro o problema, os testes realizados e a solução de forma que outros profissionais consigam compreender o atendimento.",
  },
  {
    title: "Melhorar o processo",
    description:
      "Quando identifico uma atividade repetitiva, procuro transformá-la em procedimento, script ou ferramenta.",
  },
];

const destaques: Destaque[] = [
  {
    value: "10 mil+",
    label: "chamados finalizados",
  },
  {
    value: "Suporte",
    label: "experiência em ambiente corporativo",
  },
  {
    value: "Automação",
    label: "soluções criadas para rotinas reais",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="flex min-h-[calc(100dvh-120px)] items-center border-t border-gold-400/15 bg-navy-950/55 px-6 py-10 lg:px-10 lg:py-8"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
            Sobre mim
          </p>

          <h1
            id="titulo-sobre"
            className="max-w-xl font-serif text-5xl leading-tight tracking-[-0.03em] text-gold-400 md:text-6xl"
          >
            Experiência real antes do código.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gold-300/80 md:text-lg">
            Minha trajetória em tecnologia começou no suporte, atendendo
            usuários, investigando falhas e lidando com problemas que afetam a
            operação de empresas.
          </p>

          <p className="mt-5 max-w-lg text-base leading-8 text-gold-300/65">
            O desenvolvimento surgiu como uma forma de ampliar esse trabalho:
            em vez de apenas executar tarefas repetitivas, comecei a criar
            scripts, automações e sistemas para torná-las mais rápidas,
            padronizadas e confiáveis.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="grid gap-px overflow-hidden border border-gold-400/15 bg-gold-400/15 sm:grid-cols-3">
            {destaques.map((destaque) => (
              <article
                key={destaque.value}
                className="bg-navy-900/90 p-6"
              >
                <p className="font-serif text-3xl font-semibold text-gold-400">
                  {destaque.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-gold-300/65">
                  {destaque.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {formasDeTrabalho.map((forma, index) => (
              <article
                key={forma.title}
                className="border-t border-gold-400/20 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="font-serif text-xl text-gold-400/30"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-3 font-serif text-2xl font-semibold text-gold-400">
                  {forma.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gold-300/65">
                  {forma.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="mt-8 border-l-2 border-gold-400/45 bg-navy-900/30 px-5 py-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">
              Como utilizo inteligência artificial
            </h2>

            <p className="mt-3 text-sm leading-7 text-gold-300/65">
              Utilizo IA como ferramenta de apoio para pesquisa, estruturação,
              revisão e aceleração do desenvolvimento. O código é testado,
              ajustado e precisa ser compreendido por mim antes de fazer parte
              de um projeto.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}