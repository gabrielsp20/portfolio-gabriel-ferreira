import Link from "next/link";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-ferreira-387070204/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/gabrielsp20",
    external: true,
  },
  {
    label: "E-mail",
    href: "mailto:gabriel.2110sp@gmail.com?subject=Contato%20pelo%20portfólio",
    external: false,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-400/15 bg-navy-950/80 px-6 py-8 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              aria-label="Ir para a página inicial"
              className="inline-flex font-serif text-3xl font-semibold tracking-[-0.08em] text-gold-400 transition-opacity hover:opacity-80"
            >
              GF
            </Link>

            <p className="mt-3 max-w-lg text-sm leading-7 text-gold-300/60">
              Suporte de TI, automação e desenvolvimento de soluções para
              necessidades operacionais.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav aria-label="Links de contato">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={
                        link.external ? "noopener noreferrer" : undefined
                      }
                      className="inline-flex items-center gap-2 text-sm font-medium text-gold-300/65 transition-colors hover:text-gold-400"
                    >
                      {link.label}

                      {link.external && (
                        <span aria-hidden="true" className="text-xs">
                          ↗
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="text-sm text-gold-300/45">
              Vitória da Conquista, Bahia
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-gold-400/10 pt-5 text-xs text-gold-300/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Gabriel Ferreira.</p>

          <p>Desenvolvido com Next.js e TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}
