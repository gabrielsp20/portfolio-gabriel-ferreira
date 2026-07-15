import Link from "next/link";
import { projects } from "../data/projects";
import { ProjectCard } from "./projects/ProjectCard";

const experiencePoints = [
  "Atendimento remoto e diagnóstico técnico em ambiente de Service Desk.",
  "Registro de evidências, testes e soluções aplicadas nos chamados.",
  "Priorização por impacto e SLA, com encaminhamento para equipes especializadas quando necessário.",
  "Suporte a Windows, aplicações, impressoras e scanners.",
  "Criação de procedimentos, scripts e ferramentas para atividades recorrentes.",
];

const competenceGroups = [
  {
    title: "Suporte",
    items: [
      "Service Desk",
      "Windows",
      "Diagnóstico remoto",
      "Impressoras e scanners",
      "Documentação técnica",
      "Escalonamento",
    ],
  },
  {
    title: "Automação",
    items: [
      "PowerShell",
      "Python",
      "Processamento em lote",
      "Scripts",
      "Integrações",
      "Padronização de processos",
    ],
  },
  {
    title: "Desenvolvimento",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Supabase e PostgreSQL",
      "Git e GitHub",
    ],
  },
];

export function HomeOverview() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section
        aria-labelledby="projetos-destaque"
        className="border-t border-gold-400/15 bg-navy-950/45 px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
                Projetos em destaque
              </p>
              <h2
                id="projetos-destaque"
                className="mt-4 text-balance font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
              >
                Soluções explicadas do problema à entrega.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-gold-300/70">
              Sistemas, automações e ferramentas internas apresentados com
              contexto, tecnologias, evidências visuais e limites conhecidos.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="home" />
            ))}
          </div>

          <Link
            href="/projetos"
            className="mt-8 inline-flex min-h-12 items-center gap-3 border border-gold-400/45 px-6 font-semibold text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            Ver todos os projetos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="experiencia-resumida"
        className="border-t border-gold-400/15 px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
              Experiência em suporte
            </p>
            <h2
              id="experiencia-resumida"
              className="mt-4 text-balance font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
            >
              A operação orienta as soluções que desenvolvo.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-gold-300/75">
              Minha base profissional está no atendimento: entender o impacto,
              investigar a causa, documentar o que foi feito e manter o chamado
              no caminho certo até a solução ou o escalonamento.
            </p>
            <Link
              href="/experiencia"
              className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-400 underline decoration-gold-400/35 underline-offset-4 hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              Conhecer a experiência completa
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ol className="grid gap-px border border-gold-400/15 bg-gold-400/15 sm:grid-cols-2">
            {experiencePoints.map((point, index) => (
              <li key={point} className="bg-navy-900/95 p-6 last:sm:col-span-2">
                <span className="font-serif text-xl text-gold-400/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-7 text-gold-300/75">
                  {point}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="competencias"
        className="border-t border-gold-400/15 bg-navy-950/45 px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
              Competências
            </p>
            <h2
              id="competencias"
              className="mt-4 text-balance font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
            >
              Conhecimento conectado à prática.
            </h2>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {competenceGroups.map((group, groupIndex) => (
              <article
                key={group.title}
                className="border-t border-gold-400/30 pt-6"
              >
                <span className="font-serif text-xl text-gold-400/40">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-gold-400">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-gold-400/20 bg-navy-900/35 px-3 py-2 text-sm text-gold-300/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="chamada-final"
        className="border-y border-gold-400/15 px-6 py-16 lg:px-10 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
              Próximo passo
            </p>
            <h2
              id="chamada-final"
              className="mt-4 max-w-4xl text-balance font-serif text-4xl leading-tight text-gold-400 md:text-5xl"
            >
              Procuro oportunidades para unir suporte, automação e desenvolvimento.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:max-w-xl lg:justify-end">
            <Link
              href="/projetos"
              className="inline-flex min-h-12 items-center justify-center bg-gold-400 px-6 font-semibold text-navy-950 transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              Ver projetos
            </Link>
            <a
              href="/documentos/curriculo-gabriel-ferreira.pdf"
              download="Curriculo-Gabriel-Ferreira.pdf"
              className="inline-flex min-h-12 items-center justify-center border border-gold-400/45 px-6 font-semibold text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              Baixar currículo
            </a>
            <Link
              href="/contato"
              className="inline-flex min-h-12 items-center justify-center border border-gold-400/45 px-6 font-semibold text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              Entrar em contato
            </Link>
            <a
              href="https://www.linkedin.com/in/gabriel-ferreira-387070204/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center px-4 font-semibold text-gold-300 underline decoration-gold-400/35 underline-offset-4 hover:text-gold-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/gabrielsp20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center px-4 font-semibold text-gold-300 underline decoration-gold-400/35 underline-offset-4 hover:text-gold-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
