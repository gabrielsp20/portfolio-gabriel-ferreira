import { projects } from "../data/projects";
import { ProjectCard } from "./projects/ProjectCard";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <section
      aria-labelledby="titulo-projetos"
      className="min-h-[calc(100dvh-112px)] border-t border-gold-400/15 bg-navy-950/45 px-6 py-12 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
              Projetos
            </p>

            <h1
              id="titulo-projetos"
              className="max-w-4xl font-serif text-5xl leading-none tracking-[-0.03em] text-gold-400 md:text-6xl"
            >
              Soluções criadas para problemas reais.
            </h1>
          </div>

          <p className="max-w-xl text-base leading-8 text-gold-300/70">
            Sistemas e automações desenvolvidos a partir de necessidades
            observadas em suporte técnico, gestão e rotinas operacionais.
          </p>
        </header>

        <div className="mt-12">
          <div className="mb-6 flex items-center gap-5">
            <h2 className="shrink-0 text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
              Projetos principais
            </h2>

            <div
              aria-hidden="true"
              className="h-px w-full bg-gold-400/15"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant="featured"
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-5">
            <h2 className="shrink-0 text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
              Outros projetos
            </h2>

            <div
              aria-hidden="true"
              className="h-px w-full bg-gold-400/15"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {additionalProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}