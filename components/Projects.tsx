import { projects } from "../data/projects";
import type { ProjectGroup } from "../types/project";
import { ProjectCard } from "./projects/ProjectCard";

const projectSections: Array<{
  group: ProjectGroup;
  title: string;
  description: string;
}> = [
  {
    group: "principal",
    title: "Projetos principais",
    description:
      "Aplicações com escopo amplo, regras de negócio e diferentes áreas da solução conectadas.",
  },
  {
    group: "automation",
    title: "Automações",
    description:
      "Rotinas criadas para organizar processamento em lote, estados e acompanhamento operacional.",
  },
  {
    group: "support",
    title: "Ferramentas de suporte",
    description:
      "Soluções voltadas à documentação, padronização e acesso rápido a recursos do atendimento.",
  },
];

export function Projects() {
  const publicProjects = projects.filter(
    (project) => project.visibility === "public",
  ).length;
  const privateProjects = projects.length - publicProjects;

  return (
    <section
      aria-labelledby="titulo-projetos"
      className="min-h-[calc(100dvh-112px)] border-t border-gold-400/15 bg-navy-950/45 px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
              Projetos
            </p>

            <h1
              id="titulo-projetos"
              className="max-w-4xl text-balance font-serif text-5xl leading-none tracking-[-0.03em] text-gold-400 md:text-6xl"
            >
              Suporte como ponto de partida para construir soluções.
            </h1>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-gold-300/75">
              Cada estudo de caso apresenta o contexto, as decisões técnicas,
              as evidências disponíveis e as limitações conhecidas — sem expor
              informações de ambientes internos.
            </p>

            <dl className="mt-6 flex flex-wrap gap-3" aria-label="Visibilidade dos projetos">
              <div className="border border-gold-400/30 px-4 py-3">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-500">
                  Projetos públicos
                </dt>
                <dd className="mt-1 font-serif text-2xl text-gold-400">
                  {publicProjects}
                </dd>
              </div>
              <div className="border border-gold-400/20 px-4 py-3">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-500">
                  Projetos privados
                </dt>
                <dd className="mt-1 font-serif text-2xl text-gold-400">
                  {privateProjects}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        <aside className="mt-10 border-l-2 border-gold-400/50 bg-navy-900/35 px-5 py-4">
          <p className="text-sm leading-7 text-gold-300/75">
            <strong className="font-semibold text-gold-400">Público</strong>{" "}
            indica que a aplicação ou o repositório pode ser acessado. Em
            projetos <strong className="font-semibold text-gold-400">privados</strong>,
            o estudo de caso usa telas com dados fictícios, fluxo, tecnologias
            e decisões técnicas como evidência.
          </p>
        </aside>

        <div className="mt-14 space-y-16">
          {projectSections.map((section) => {
            const sectionProjects = projects.filter(
              (project) => project.group === section.group,
            );

            return (
              <section key={section.group} aria-labelledby={`grupo-${section.group}`}>
                <div className="mb-7 grid gap-3 border-b border-gold-400/15 pb-5 md:grid-cols-[0.6fr_1fr] md:items-end">
                  <h2
                    id={`grupo-${section.group}`}
                    className="font-serif text-3xl font-semibold text-gold-400"
                  >
                    {section.title}
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-gold-300/70">
                    {section.description}
                  </p>
                </div>

                <div
                  className={
                    section.group === "principal"
                      ? "grid gap-6"
                      : "grid gap-6 lg:grid-cols-2"
                  }
                >
                  {sectionProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      variant={
                        section.group === "principal" ? "featured" : "compact"
                      }
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
