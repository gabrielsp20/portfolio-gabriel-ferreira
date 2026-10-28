import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo-principal" tabIndex={-1} className="not-found container">
      <p className="error-code" aria-hidden="true">
        404
      </p>
      <p className="eyebrow">Página não encontrada</p>
      <h1>Este endereço não está disponível.</h1>
      <p className="lead">
        Confira o endereço ou use a navegação para conhecer meu perfil
        profissional.
      </p>
      <div className="actions">
        <Link className="button button-primary" href="/">
          Voltar ao início <span aria-hidden="true">→</span>
        </Link>
        <Link className="button button-secondary" href="/contato">
          Entrar em contato
        </Link>
      </div>
    </main>
  );
}
