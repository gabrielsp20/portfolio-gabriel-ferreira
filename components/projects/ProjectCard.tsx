import Link from "next/link";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact";
};

export function ProjectCard({
  project,
  variant = "featured",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isPrivate = project.visibility === "private";

  return (
    <article
      className={`flex h-full flex-col border border-gold-400/20 bg-navy-900/45 transition-colors hover:border-gold-400/45 ${
        isFeatured ? "p-7 lg:p-8" : "p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
              {project.category}
            </span>

            <span
              className={`border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${
                isPrivate
                  ? "border-gold-400/15 text-gold-300/55"
                  : "border-gold-400/30 text-gold-300"
              }`}
            >
              {isPrivate ? "Projeto privado" : "Projeto público"}
            </span>
          </div>

          <h2
            className={`mt-5 max-w-xl font-serif font-semibold leading-tight text-gold-400 ${
              isFeatured ? "text-4xl" : "text-3xl"
            }`}
          >
            {project.title}
          </h2>
        </div>

        <span
          aria-hidden="true"
          className="shrink-0 font-serif text-3xl text-gold-400/20"
        >
          {project.number}
        </span>
      </div>

      <p className="mt-5 text-base leading-8 text-gold-300/75">
        {project.summary}
      </p>

      {isFeatured && (
        <div className="mt-7 grid gap-6 border-t border-gold-400/15 pt-6 sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-semibold text-gold-400">
              O problema
            </h3>

            <p className="mt-2 text-sm leading-7 text-gold-300/65">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-gold-400">
              A solução
            </h3>

            <p className="mt-2 text-sm leading-7 text-gold-300/65">
              {project.solution}
            </p>
          </div>
        </div>
      )}

      <div className="mt-7 border-t border-gold-400/15 pt-6">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
          Tecnologias
        </h3>

        <ul className="flex flex-wrap gap-2.5">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="border border-gold-400/20 px-3 py-2 text-xs text-gold-300/75"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      {isFeatured && (
        <div className="mt-7 border-l-2 border-gold-400/35 pl-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
            Resultado
          </h3>

          <p className="mt-2 text-sm leading-7 text-gold-300/70">
            {project.result}
          </p>
        </div>
      )}

      {isPrivate && project.confidentialityNote && (
        <p className="mt-7 text-sm leading-7 text-gold-300/55">
          {project.confidentialityNote}
        </p>
      )}

      <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
        <Link
          href={`/projetos/${project.slug}`}
          className="inline-flex min-h-12 items-center justify-center bg-gold-400 px-6 font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
        >
          Ver estudo de caso
        </Link>

        {!isPrivate && project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center border border-gold-400/40 px-6 font-semibold text-gold-300 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400/10"
          >
            Abrir projeto
          </a>
        )}
      </div>
    </article>
  );
}