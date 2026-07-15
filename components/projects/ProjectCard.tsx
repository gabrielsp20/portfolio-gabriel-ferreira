import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../types/project";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact" | "home";
  headingLevel?: 2 | 3;
};

export function ProjectCard({
  project,
  variant = "compact",
  headingLevel = 3,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isHome = variant === "home";
  const isPrivate = project.visibility === "private";
  const coverImage = project.gallery?.[0];
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const shownTechnologies = isHome
    ? project.technologies.slice(0, 4)
    : project.technologies;

  return (
    <article
      className={`group grid h-full min-w-0 grid-cols-1 overflow-hidden border border-gold-400/20 bg-navy-900/55 transition-colors hover:border-gold-400/50 motion-reduce:transition-none ${
        isFeatured ? `${styles.featuredCard} lg:items-start` : ""
      }`}
    >
      {coverImage && (
        <Link
          href={`/projetos/${project.slug}`}
          aria-label={`Ver estudo de caso: ${project.title}`}
          className={`flex w-full min-w-0 items-center justify-center overflow-hidden border-b border-gold-400/15 bg-navy-950/70 p-2 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold-400 ${
            isFeatured
              ? "aspect-[4/3] lg:max-h-[34rem] lg:border-b-0 lg:border-r"
              : isHome
                ? "aspect-[16/9] max-h-72"
                : "aspect-[16/10] max-h-80"
          }`}
        >
          <Image
            src={coverImage.image}
            alt={`${project.title}: ${coverImage.title}`}
            width={coverImage.width}
            height={coverImage.height}
            sizes={
              isFeatured
                ? "(max-width: 1023px) calc(100vw - 3rem), (max-width: 1440px) 42vw, 550px"
                : "(max-width: 767px) calc(100vw - 3rem), (max-width: 1279px) 50vw, 600px"
            }
            className="h-full w-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none"
          />
        </Link>
      )}

      <div
        className={`flex min-w-0 flex-1 flex-col overflow-hidden ${
          isFeatured ? "p-6 lg:p-8" : isHome ? "p-5" : "p-6"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-500">
                {project.category}
              </span>

              <span
                className={`border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] ${
                  isPrivate
                    ? "border-gold-400/20 text-gold-300/65"
                    : "border-gold-400/40 text-gold-300"
                }`}
              >
                {isPrivate ? "Privado" : "Público"}
              </span>
            </div>

            <Heading
              className={`mt-4 break-words text-balance font-serif font-semibold leading-tight text-gold-400 ${
                isFeatured ? "text-4xl" : isHome ? "text-2xl" : "text-3xl"
              }`}
            >
              {project.title}
            </Heading>
          </div>

          <span
            aria-hidden="true"
            className="shrink-0 font-serif text-2xl text-gold-400/30"
          >
            {project.number}
          </span>
        </div>

        <p
          className={`mt-4 text-gold-300/75 ${
            isHome ? "text-sm leading-7" : "text-base leading-8"
          }`}
        >
          {project.summary}
        </p>

        {isFeatured && (
          <div className="mt-6 border-l-2 border-gold-400/40 pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
              Resultado observável
            </p>

            <p className="mt-2 text-sm leading-7 text-gold-300/70">
              {project.result}
            </p>
          </div>
        )}

        <div className="mt-6 border-t border-gold-400/15 pt-5">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-500">
            Tecnologias
          </p>

          <ul className="flex flex-wrap gap-2">
            {shownTechnologies.map((technology) => (
              <li
                key={technology}
                className="border border-gold-400/20 px-2.5 py-1.5 text-xs text-gold-300/75"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex min-w-0 flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
          <Link
            href={`/projetos/${project.slug}`}
            className="inline-flex min-h-11 items-center justify-center bg-gold-400 px-5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 motion-reduce:transition-none"
          >
            Ver estudo de caso
          </Link>

          {!isPrivate && project.projectUrl && !isHome && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center border border-gold-400/45 px-5 text-sm font-semibold text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 motion-reduce:transition-none"
            >
              Abrir projeto
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
