import Link from "next/link";
import profile from "../data/profile.json";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link
              href="/"
              className="monogram"
              aria-label="GF — Gabriel Ferreira — início"
            >
              GF
            </Link>
            <p className="footer-description">
              Suporte de TI, automação e melhoria da rotina profissional.
            </p>
          </div>
          <div className="footer-contact">
            <nav aria-label="Links de contato">
              <ul>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`}>E-mail</a>
                </li>
              </ul>
            </nav>
            <p>{profile.location}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gabriel Ferreira.</p>
          <p>Atendimento com clareza. Tecnologia com propósito.</p>
        </div>
      </div>
    </footer>
  );
}
