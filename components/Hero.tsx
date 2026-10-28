import Link from "next/link";
import profile from "../data/profile.json";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="titulo-principal">
      <div className="hero-copy">
        <p className="eyebrow">Gabriel Ferreira · Analista de Suporte de TI</p>
        <h1 id="titulo-principal">
          Experiência no suporte.
          <br />
          Automação na prática.
        </h1>
        <p className="hero-description">
          Atendimento, diagnóstico e documentação para a rotina de TI. Scripts e
          melhoria de processos para fazer essa rotina evoluir.
        </p>
        <div className="actions">
          <a
            className="button button-primary"
            href={profile.resume}
            download="Curriculo-Gabriel-Ferreira.pdf"
          >
            Baixar currículo <span aria-hidden="true">↓</span>
          </a>
          <Link className="button button-secondary" href="/contato">
            Entrar em contato <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link className="text-link hero-link" href="/experiencia">
          Conhecer minha experiência <span aria-hidden="true">→</span>
        </Link>
      </div>
      <aside className="profile-note" aria-label="Perfil profissional">
        <span className="monogram" aria-hidden="true">
          GF
        </span>
        <p className="eyebrow">Perfil profissional</p>
        <dl>
          <div>
            <dt>Atuação</dt>
            <dd>Suporte de TI e Service Desk</dd>
          </div>
          <div>
            <dt>Experiência corporativa</dt>
            <dd>
              SONDA IT <span>desde maio de 2022</span>
            </dd>
          </div>
          <div>
            <dt>Formação</dt>
            <dd>
              Ciência da Computação <span>UNINOVE · Concluído em 2022</span>
            </dd>
          </div>
        </dl>
        <p className="profile-location">{profile.location}</p>
      </aside>
    </section>
  );
}
