import Link from "next/link";
import type { Project } from "../../types/project";
import { ProjectImageGallery } from "./ProjectImageGallery";

type ProjectDetailsProps = {
  project: Project;
};

type DetailListProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

function DetailList({ eyebrow, title, items }: DetailListProps) {
  return (
    <section className="border-t border-gold-400/15 pt-9">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-gold-400">
        {title}
      </h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="grid grid-cols-[12px_1fr] gap-3 text-sm leading-7 text-gold-300/75 md:text-base"
          >
            <span aria-hidden="true" className="mt-[0.68rem] h-1 w-1 bg-gold-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const isPrivate = project.visibility === "private";
  const projectFacts = [
    project.role ? { label: "Atuação", value: project.role } : null,
    project.status ? { label: "Status", value: project.status } : null,
    project.period ? { label: "Período", value: project.period } : null,
    {
      label: "Acesso",
      value: isPrivate ? "Código privado" : "Projeto público",
    },
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <article className="min-h-[calc(100dvh-112px)] border-t border-gold-400/15 bg-navy-950/45 px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          href="/projetos"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-300/75 transition-colors hover:text-gold-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
        >
          <span aria-hidden="true">←</span>
          Voltar para projetos
        </Link>

        <header className="mt-8 border-b border-gold-400/20 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">
              {project.category}
            </span>

            <span
              className={`border px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
                isPrivate
                  ? "border-gold-400/25 text-gold-300/70"
                  : "border-gold-400/45 text-gold-300"
              }`}
            >
              {isPrivate ? "Projeto privado" : "Projeto público"}
            </span>

            {project.featured && (
              <span className="border border-gold-400/25 bg-gold-400/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-300">
                Em destaque
              </span>
            )}

            <span className="font-serif text-xl text-gold-400/35">
              {project.number}
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl text-balance font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-gold-400 md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-9 text-gold-300/85 md:text-xl">
            {project.summary}
          </p>

          <dl className="mt-8 grid gap-px overflow-hidden border border-gold-400/15 bg-gold-400/15 sm:grid-cols-2 lg:max-w-4xl">
            {projectFacts.map((fact) => (
              <div key={fact.label} className="bg-navy-900/95 p-4">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-500">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-gold-300/75">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          {isPrivate && project.confidentialityNote && (
            <aside className="mt-8 max-w-4xl border-l-2 border-gold-400/55 bg-navy-900/45 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                Confidencialidade
              </p>

              <p className="mt-2 text-sm leading-7 text-gold-300/75">
                {project.confidentialityNote}
              </p>
            </aside>
          )}
        </header>

        <div className="grid gap-12 py-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
              Estudo de caso
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-gold-400 md:text-5xl">
              Do contexto à entrega.
            </h2>

            <p className="mt-6 text-base leading-8 text-gold-300/70">
              O estudo apresenta o que motivou a ferramenta, como a solução foi
              estruturada e o que pode ser observado sem expor dados ou detalhes
              internos.
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

              <p className="mt-4 text-base leading-8 text-gold-300/80">
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

              <p className="mt-4 text-base leading-8 text-gold-300/80">
                {project.solution}
              </p>
            </section>

            <section
              aria-labelledby={`resultado-${project.slug}`}
              className="border-t border-gold-400/15 pt-10"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                03 — Evidência
              </p>

              <h2
                id={`resultado-${project.slug}`}
                className="font-serif text-3xl font-semibold text-gold-400"
              >
                Resultado observável
              </h2>

              <p className="mt-4 text-base leading-8 text-gold-300/80">
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
                className="border border-gold-400/25 bg-navy-900/45 px-4 py-2.5 text-sm text-gold-300/80"
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>

        {project.highlights && project.highlights.length > 0 && (
          <section className="py-14 md:py-16" aria-labelledby={`recursos-${project.slug}`}>
            <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
                  Escopo
                </p>
                <h2
                  id={`recursos-${project.slug}`}
                  className="mt-4 font-serif text-4xl leading-tight text-gold-400"
                >
                  Principais recursos
                </h2>
              </div>

              <ul className="grid gap-px border border-gold-400/15 bg-gold-400/15 sm:grid-cols-2">
                {project.highlights.map((highlight, index) => (
                  <li key={highlight} className="bg-navy-900/95 p-5">
                    <span className="font-serif text-lg text-gold-400/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-sm leading-7 text-gold-300/75">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {project.sections && project.sections.length > 0 && (
          <section
            aria-labelledby={`modulos-${project.slug}`}
            className="border-t border-gold-400/20 py-14 md:py-16"
          >
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
                Estrutura da solução
              </p>
              <h2
                id={`modulos-${project.slug}`}
                className="mt-4 font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
              >
                Módulos documentados
              </h2>
            </header>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {project.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="border border-gold-400/20 bg-navy-900/35 p-6"
                >
                  <span className="font-serif text-xl text-gold-400/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl font-semibold text-gold-400">
                    {section.title}
                  </h3>
                  {section.description && (
                    <p className="mt-4 text-sm leading-7 text-gold-300/75">
                      {section.description}
                    </p>
                  )}
                  {section.items && (
                    <ul className="mt-4 grid gap-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[8px_1fr] gap-3 text-sm leading-6 text-gold-300/70"
                        >
                          <span aria-hidden="true" className="mt-2.5 h-1 w-1 bg-gold-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.relatedProjectSlug && section.relatedProjectLabel && (
                    <Link
                      href={`/projetos/${section.relatedProjectSlug}`}
                      className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-400 underline decoration-gold-400/35 underline-offset-4 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
                    >
                      {section.relatedProjectLabel}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {(project.challenges || project.learnings || project.limitations || project.nextSteps) && (
          <div className="grid gap-10 border-t border-gold-400/20 py-14 md:grid-cols-2 md:py-16">
            {project.challenges && (
              <DetailList
                eyebrow="Decisões técnicas"
                title="Desafios enfrentados"
                items={project.challenges}
              />
            )}
            {project.learnings && (
              <DetailList
                eyebrow="Evolução"
                title="Aprendizados"
                items={project.learnings}
              />
            )}
            {project.limitations && (
              <DetailList
                eyebrow="Transparência"
                title="Limitações conhecidas"
                items={project.limitations}
              />
            )}
            {project.nextSteps && (
              <DetailList
                eyebrow="Possibilidades"
                title="Próximos passos"
                items={project.nextSteps}
              />
            )}
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section
            aria-labelledby={`galeria-${project.slug}`}
            className="border-t border-gold-400/20 py-16 md:py-20"
          >
            <header className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
                Evidências visuais
              </p>

              <h2
                id={`galeria-${project.slug}`}
                className="mt-4 font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
              >
                {project.galleryTitle ?? "Telas do projeto"}
              </h2>

              {project.galleryDescription && (
                <p className="mt-5 text-base leading-8 text-gold-300/70">
                  {project.galleryDescription}
                </p>
              )}

              {project.demonstrationNote && (
                <p className="mt-5 border-l-2 border-gold-400/55 pl-4 text-sm leading-7 text-gold-300/75">
                  <strong className="font-semibold text-gold-400">
                    Dados de demonstração:
                    {" "}
                  </strong>
                  {project.demonstrationNote}
                </p>
              )}
            </header>

            <ProjectImageGallery
              projectTitle={project.title}
              images={project.gallery}
            />
          </section>
        )}

        <footer className="flex flex-col gap-6 border-t border-gold-400/20 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl text-gold-400">
              Continue pelos estudos de caso
            </p>

            <p className="mt-2 text-sm text-gold-300/65">
              Sistemas, automações e ferramentas explicados com contexto e
              limitações.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
            {!isPrivate && project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-gold-400 px-6 font-semibold text-navy-950 transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
              >
                Abrir projeto
              </a>
            )}

            {!isPrivate && project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-gold-400/45 px-6 font-semibold text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
              >
                Ver código
              </a>
            )}

            <Link
              href="/projetos"
              className="inline-flex min-h-12 items-center justify-center border border-gold-400/45 px-6 font-semibold text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              Todos os projetos
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
