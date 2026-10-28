import profile from "../data/profile.json";
import { CopyEmail } from "./CopyEmail";

export function Contact() {
  return (
    <section
      className="page-intro container contact-page"
      aria-labelledby="titulo-contato"
    >
      <div className="split-section">
        <div>
          <p className="eyebrow">Contato</p>
          <h1 id="titulo-contato">Vamos conversar sobre o próximo passo.</h1>
          <p className="lead">
            Busco oportunidades para contribuir com suporte corporativo,
            aplicações, automação e desenvolvimento.
          </p>
          <a
            className="text-link"
            href={profile.resume}
            download="Curriculo-Gabriel-Ferreira.pdf"
          >
            Baixar currículo <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="contact-details">
          <h2 className="eyebrow">E-mail profissional</h2>
          <a className="email-address" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="email-actions">
            <a
              className="button button-primary"
              href={`mailto:${profile.email}?subject=Contato%20profissional`}
            >
              Enviar e-mail <span aria-hidden="true">↗</span>
            </a>
            <CopyEmail email={profile.email} />
          </div>
          <nav className="social-links" aria-label="Perfis profissionais">
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </nav>
        </div>
      </div>
      <dl className="contact-facts">
        <div>
          <dt>Localização</dt>
          <dd>{profile.location}</dd>
        </div>
        <div>
          <dt>Disponibilidade</dt>
          <dd>{profile.availability}</dd>
        </div>
        <div>
          <dt>Áreas de interesse</dt>
          <dd>Suporte, aplicações, automação e desenvolvimento</dd>
        </div>
      </dl>
    </section>
  );
}
