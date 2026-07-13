import Link from "next/link";
import type { Project } from "../../types/project";
import {
  ProjectImageGallery,
  type ProjectGalleryImage,
} from "./ProjectImageGallery";

type ProjectDetailsProps = {
  project: Project;
};

const telasChamadaEbd: ProjectGalleryImage[] = [
  {
    image: "/images/projetos/chamada-ebd/01-chamada-ebd-painel.png",
    title: "Painel principal",
    description:
      "Apresenta uma visão geral da Escola Bíblica Dominical, reunindo os principais indicadores da última aula, frequência das classes, visitantes, ofertas e total de participantes.",
  },
  {
    image:
      "/images/projetos/chamada-ebd/02-chamada-ebd-registro-presenca.png",
    title: "Registro de chamada",
    description:
      "Permite registrar a presença dos alunos, professores, visitantes, ofertas e informações da aula em um único fluxo organizado.",
  },
  {
    image: "/images/projetos/chamada-ebd/03-chamada-ebd-gestao-alunos.png",
    title: "Gestão de alunos",
    description:
      "Centraliza o cadastro dos alunos e mantém informações como classe de origem, situação no sistema e participação nas aulas.",
  },
  {
    image:
      "/images/projetos/chamada-ebd/04-chamada-ebd-ranking-frequencia.png",
    title: "Ranking de frequência",
    description:
      "Apresenta o desempenho das classes com base nas regras oficiais de frequência, facilitando o acompanhamento durante o trimestre.",
  },
  {
    image:
      "/images/projetos/chamada-ebd/05-chamada-ebd-historico-aulas.png",
    title: "Histórico das aulas",
    description:
      "Mantém os registros das aulas anteriores e permite consultar datas, professores, participantes e resultados preservados no banco de dados.",
  },
  {
    image:
      "/images/projetos/chamada-ebd/06-chamada-ebd-relatorio-dia.png",
    title: "Relatório da aula",
    description:
      "Reúne os números da EBD em um relatório consolidado, incluindo frequência, visitantes, ofertas e informações de cada classe.",
  },
];

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const isPrivate = project.visibility === "private";
  const isChamadaEbd = project.slug === "sistema-gestao-ebd";

  return (
    <article className="min-h-[calc(100dvh-112px)] border-t border-gold-400/15 bg-navy-950/45 px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300/65 transition-colors hover:text-gold-400"
        >
          <span aria-hidden="true">←</span>
          Voltar para projetos
        </Link>

        <header className="mt-10 border-b border-gold-400/20 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">
              {project.category}
            </span>

            <span
              className={`border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${
                isPrivate
                  ? "border-gold-400/15 text-gold-300/55"
                  : "border-gold-400/30 text-gold-300"
              }`}
            >
              {isPrivate ? "Projeto privado" : "Projeto público"}
            </span>

            <span className="font-serif text-xl text-gold-400/25">
              {project.number}
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-tight tracking-[-0.03em] text-gold-400 md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-9 text-gold-300/80 md:text-xl">
            {project.summary}
          </p>

          {isPrivate && project.confidentialityNote && (
            <aside className="mt-8 max-w-4xl border-l-2 border-gold-400/45 bg-navy-900/35 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">
                Confidencialidade
              </p>

              <p className="mt-2 text-sm leading-7 text-gold-300/65">
                {project.confidentialityNote}
              </p>
            </aside>
          )}
        </header>

        <div className="grid gap-12 py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
              Estudo de caso
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-gold-400 md:text-5xl">
              Da necessidade à solução.
            </h2>

            <p className="mt-6 text-base leading-8 text-gold-300/65">
              Este projeto foi criado a partir de uma situação real, com foco em
              reduzir trabalho manual, organizar informações e tornar o processo
              mais seguro e eficiente.
            </p>
          </div>

          <div className="space-y-10">
            <section aria-labelledby={`problema-${project.slug}`}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                01 — Contexto
              </p>

              <h2
                id={`problema-${project.slug}`}
                className="font-serif text-3xl font-semibold text-gold-400"
              >
                O problema
              </h2>

              <p className="mt-4 text-base leading-8 text-gold-300/75">
                {project.problem}
              </p>
            </section>

            <section
              aria-labelledby={`solucao-${project.slug}`}
              className="border-t border-gold-400/15 pt-10"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                02 — Desenvolvimento
              </p>

              <h2
                id={`solucao-${project.slug}`}
                className="font-serif text-3xl font-semibold text-gold-400"
              >
                A solução
              </h2>

              <p className="mt-4 text-base leading-8 text-gold-300/75">
                {project.solution}
              </p>
            </section>

            <section
              aria-labelledby={`resultado-${project.slug}`}
              className="border-t border-gold-400/15 pt-10"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                03 — Impacto
              </p>

              <h2
                id={`resultado-${project.slug}`}
                className="font-serif text-3xl font-semibold text-gold-400"
              >
                Resultado
              </h2>

              <p className="mt-4 text-base leading-8 text-gold-300/75">
                {project.result}
              </p>
            </section>
          </div>
        </div>

        <section
          aria-labelledby={`tecnologias-${project.slug}`}
          className="border-y border-gold-400/20 py-10"
        >
          <h2
            id={`tecnologias-${project.slug}`}
            className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500"
          >
            Tecnologias utilizadas
          </h2>

          <ul className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="border border-gold-400/20 bg-navy-900/35 px-4 py-2.5 text-sm text-gold-300/75"
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>

        {isChamadaEbd && (
          <section
            aria-labelledby="telas-chamada-ebd"
            className="border-b border-gold-400/20 py-16 md:py-20"
          >
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
                Telas do sistema
              </p>

              <h2
                id="telas-chamada-ebd"
                className="mt-4 font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
              >
                Principais funcionalidades do projeto.
              </h2>

              <p className="mt-5 text-base leading-8 text-gold-300/65">
                Conheça algumas das telas desenvolvidas para organizar a gestão
                da Escola Bíblica Dominical, desde o registro de presença até a
                consulta de históricos e relatórios.
              </p>
            </header>

            <ProjectImageGallery images={telasChamadaEbd} />
          </section>
        )}

        <footer className="flex flex-col gap-5 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl text-gold-400">
              Conheça os outros projetos
            </p>

            <p className="mt-2 text-sm text-gold-300/55">
              Sistemas, automações e ferramentas criados para necessidades
              reais.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {!isPrivate && project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-gold-400 px-6 font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-gold-300"
              >
                Abrir projeto
              </a>
            )}

            {!isPrivate && project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-gold-400/40 px-6 font-semibold text-gold-300 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400/10"
              >
                Ver código
              </a>
            )}

            <Link
              href="/projetos"
              className="inline-flex min-h-12 items-center justify-center border border-gold-400/40 px-6 font-semibold text-gold-300 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400/10"
            >
              Todos os projetos
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}