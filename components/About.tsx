import Link from "next/link";
import { WorkPrinciples } from "./WorkPrinciples";

export function About() {
  return (
    <>
      <section
        className="page-intro container split-section"
        aria-labelledby="titulo-sobre"
      >
        <div>
          <p className="eyebrow">Sobre mim</p>
          <h1 id="titulo-sobre">Da manutenção ao suporte corporativo.</h1>
        </div>
        <div className="section-copy intro-copy">
          <p>
            Comecei na manutenção de celulares e tablets, com diagnóstico de
            falhas e atendimento ao cliente. Na atuação autônoma, ampliei esse
            trabalho para notebooks e computadores, acompanhando o serviço do
            orçamento à entrega.
          </p>
          <p>
            Ao entrar no suporte corporativo, passei a lidar com incidentes que
            afetam a rotina de outros profissionais. Além de resolver o problema
            técnico, é preciso entender o impacto, explicar as ações e deixar um
            registro que permita continuar o atendimento.
          </p>
          <p>
            Foi nesse contexto que aproximei suporte e programação. Uso scripts
            e automação para organizar atividades recorrentes e padronizar
            procedimentos, mantendo a investigação e a validação como parte do
            trabalho.
          </p>
          <Link className="text-link" href="/experiencia">
            Conhecer minha trajetória <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section
        className="section section-soft"
        aria-labelledby="principios-sobre"
      >
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Forma de trabalho</p>
            <h2 id="principios-sobre">
              Investigar, registrar e dar continuidade.
            </h2>
          </div>
          <WorkPrinciples />
        </div>
      </section>
      <section
        className="section container split-section"
        aria-labelledby="apoio-ia"
      >
        <div>
          <p className="eyebrow">Ferramentas de apoio</p>
          <h2 id="apoio-ia">Uso responsável de IA.</h2>
        </div>
        <div className="section-copy">
          <p>
            Utilizo inteligência artificial como apoio à pesquisa, à
            estruturação e à revisão. Confiro as informações e testo as soluções
            antes de incorporá-las ao trabalho. A responsabilidade pelo que
            entrego continua sendo minha.
          </p>
          <Link className="text-link" href="/contato">
            Entrar em contato <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
