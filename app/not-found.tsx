import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="conteudo-principal"
      className="flex min-h-[calc(100dvh-112px)] items-center border-t border-gold-400/15 bg-navy-950/45 px-6 py-16 lg:px-10"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="font-serif text-8xl leading-none text-gold-400/25">404</p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
          Página não encontrada
        </p>
        <h1 className="mt-4 text-balance font-serif text-5xl leading-tight text-gold-400 md:text-6xl">
          Este endereço não faz parte do portfólio.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-gold-300/75">
          O conteúdo pode ter mudado de lugar ou o endereço pode ter sido
          digitado incorretamente. Volte ao início ou consulte os projetos.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center bg-gold-400 px-6 font-semibold text-navy-950 transition-colors hover:bg-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            Voltar ao início
          </Link>
          <Link
            href="/projetos"
            className="inline-flex min-h-12 items-center justify-center border border-gold-400/45 px-6 font-semibold text-gold-300 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </main>
  );
}
