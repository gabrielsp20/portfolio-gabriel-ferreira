import Link from "next/link";
import profile from "../data/profile.json";
import { WorkPrinciples } from "./WorkPrinciples";

export function HomeOverview() {
  return (
    <>
      <section
        className="section section-soft"
        aria-labelledby="experiencia-resumida"
      >
        <div className="container split-section">
          <div>
            <p className="eyebrow">Experiência profissional</p>
            <h2 id="experiencia-resumida">
              O atendimento é o meu ponto de partida.
            </h2>
          </div>
          <div className="section-copy">
            <p>
              Na SONDA IT, atuo no suporte remoto a usuários e aplicações
              corporativas. Investigo incidentes, documento os testes e
              acompanho a solução ou o encaminhamento para a equipe responsável.
            </p>
            <p>
              A trajetória começou na manutenção de dispositivos e no contato
              direto com clientes. Hoje, essa base se conecta ao Service Desk e
              à melhoria dos processos de TI.
            </p>
            <p className="inline-fact">
              SONDA IT · Técnico de Suporte desde mai/2022 · Analista desde
              jan/2023
            </p>
            <Link className="text-link" href="/experiencia">
              Ver trajetória e formação <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="competencias">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Competências</p>
            <h2 id="competencias">Conhecimento conectado à rotina.</h2>
          </div>
          <div className="skills-grid">
            {profile.skills.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="section-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="plain-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link className="text-link section-link" href="/experiencia">
            Conhecer o contexto profissional <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section
        className="section section-soft"
        aria-labelledby="forma-trabalho"
      >
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Forma de trabalho</p>
            <h2 id="forma-trabalho">Clareza em cada etapa.</h2>
          </div>
          <WorkPrinciples />
        </div>
      </section>
      <section
        className="section contact-callout"
        aria-labelledby="chamada-final"
      >
        <div className="container split-section">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2 id="chamada-final">
              Uma oportunidade para somar à sua equipe.
            </h2>
          </div>
          <div className="section-copy">
            <p>
              Busco oportunidades em suporte, aplicações, automação e
              desenvolvimento. Meu currículo reúne a trajetória, a formação e as
              competências.
            </p>
            <div className="actions">
              <Link className="button button-primary" href="/contato">
                Entrar em contato <span aria-hidden="true">↗</span>
              </Link>
              <a
                className="text-link"
                href={profile.resume}
                download="Curriculo-Gabriel-Ferreira.pdf"
              >
                Baixar currículo ↓
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
