type ContactMethod = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

type ProfessionalInfo = {
  title: string;
  description: string;
};

const contactMethods: ContactMethod[] = [
  {
    label: "E-mail",
    value: "gabriel.2110sp@gmail.com",
    href: "mailto:gabriel.2110sp@gmail.com?subject=Contato%20pelo%20portfólio",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gabriel-ferreira-387070204",
    href: "https://www.linkedin.com/in/gabriel-ferreira-387070204/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/gabrielsp20",
    href: "https://github.com/gabrielsp20",
    external: true,
  },
];

const professionalInformation: ProfessionalInfo[] = [
  {
    title: "Localização",
    description: "Vitória da Conquista, Bahia",
  },
  {
    title: "Disponibilidade",
    description: "Oportunidades remotas e presenciais",
  },
  {
    title: "Áreas de interesse",
    description: "Suporte, aplicações, automação e desenvolvimento",
  },
];

export function Contact() {
  return (
    <section
      aria-labelledby="titulo-contato"
      className="flex min-h-[calc(100dvh-120px)] items-center border-t border-gold-400/15 bg-navy-950/45 px-6 py-10 lg:px-10 lg:py-8"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
            Contato
          </p>

          <h1
            id="titulo-contato"
            className="max-w-xl font-serif text-5xl leading-tight tracking-[-0.03em] text-gold-400 md:text-6xl"
          >
            Aberto a novos desafios em tecnologia.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gold-300/80 md:text-lg">
            Busco oportunidades em que minha experiência com suporte
            corporativo possa se unir à automação, sistemas e desenvolvimento
            de soluções.
          </p>

          <p className="mt-5 max-w-lg text-base leading-8 text-gold-300/65">
            Tenho interesse especial em ambientes onde seja possível resolver
            problemas técnicos, melhorar processos e construir ferramentas que
            apoiem a operação.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:gabriel.2110sp@gmail.com?subject=Contato%20pelo%20portfólio"
              className="inline-flex min-h-14 items-center justify-center rounded-md bg-gold-400 px-8 text-lg font-semibold text-navy-950 transition-all hover:-translate-y-0.5 hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              Enviar um e-mail
            </a>

            <a
              href="/documentos/curriculo-gabriel-ferreira.pdf"
              download="Curriculo-Gabriel-Ferreira.pdf"
              className="inline-flex min-h-14 items-center justify-center rounded-md border border-gold-400/60 px-8 text-lg font-semibold text-gold-400 transition-all hover:-translate-y-0.5 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
            >
              Baixar currículo
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="border-y border-gold-400/20">
            {contactMethods.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group grid gap-3 border-b border-gold-400/15 py-6 last:border-b-0 md:grid-cols-[0.32fr_1fr] md:items-center"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">
                  {contact.label}
                </span>

                <span className="flex items-center justify-between gap-5 break-all font-serif text-xl text-gold-400 transition-colors group-hover:text-gold-300 md:text-2xl">
                  {contact.value}

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-gold-400/35 transition-transform group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-px overflow-hidden border border-gold-400/15 bg-gold-400/15 sm:grid-cols-3">
            {professionalInformation.map((information) => (
              <article
                key={information.title}
                className="bg-navy-900/90 p-5"
              >
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  {information.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gold-300/70">
                  {information.description}
                </p>
              </article>
            ))}
          </div>

          <aside className="mt-8 border-l-2 border-gold-400/45 pl-5">
            <p className="text-sm leading-7 text-gold-300/65">
              Para conhecer melhor meu trabalho, acesse os estudos de caso dos
              projetos, meu perfil profissional no LinkedIn ou meu código
              público no GitHub.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}