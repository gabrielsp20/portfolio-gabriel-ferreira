"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Experiência", href: "/experiencia" },
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);
  const botaoMenuRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuAberto) {
      return;
    }

    const overflowAnterior = document.body.style.overflow;
    const botaoMenu = botaoMenuRef.current;
    const elementosDeFundo = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer"),
    );
    const estadoAnterior = elementosDeFundo.map((elemento) => ({
      elemento,
      inert: elemento.inert,
      ariaHidden: elemento.getAttribute("aria-hidden"),
    }));

    document.body.style.overflow = "hidden";
    elementosDeFundo.forEach((elemento) => {
      elemento.inert = true;
      elemento.setAttribute("aria-hidden", "true");
    });

    const frame = window.requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    });

    function tratarTeclado(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuAberto(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const itens = [
        botaoMenu,
        ...Array.from(menuRef.current.querySelectorAll<HTMLElement>("a[href]")),
      ].filter((item): item is HTMLElement => item !== null);
      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];

      if (event.shiftKey && document.activeElement === primeiro) {
        event.preventDefault();
        ultimo.focus();
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        primeiro.focus();
      }
    }

    window.addEventListener("keydown", tratarTeclado);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = overflowAnterior;
      estadoAnterior.forEach(({ elemento, inert, ariaHidden }) => {
        elemento.inert = inert;
        if (ariaHidden === null) {
          elemento.removeAttribute("aria-hidden");
        } else {
          elemento.setAttribute("aria-hidden", ariaHidden);
        }
      });
      window.removeEventListener("keydown", tratarTeclado);
      window.requestAnimationFrame(() => botaoMenu?.focus());
    };
  }, [menuAberto]);

  function paginaEstaAtiva(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="relative z-40 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
      <Link
        href="/"
        aria-label="Ir para a página inicial"
        onClick={() => setMenuAberto(false)}
        className="font-serif text-4xl font-semibold tracking-[-0.08em] transition-opacity hover:opacity-80"
      >
        GF
      </Link>

      {/* Menu para computador */}
      <nav aria-label="Navegação principal" className="hidden md:block">
        <ul className="flex items-center gap-10 text-base lg:gap-14">
          {links.map((link) => {
            const estaAtivo = paginaEstaAtiva(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={estaAtivo ? "page" : undefined}
                  className={`border-b-2 pb-2 transition-colors ${
                    estaAtivo
                      ? "border-gold-400 font-semibold"
                      : "border-transparent hover:border-gold-400/40 hover:text-gold-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Botão do menu para celular */}
      <button
        ref={botaoMenuRef}
        type="button"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuAberto}
        aria-controls="menu-mobile"
        onClick={() => setMenuAberto((estadoAtual) => !estadoAtual)}
        className="relative z-50 flex min-h-11 min-w-11 items-center justify-center border border-gold-400/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 md:hidden"
      >
        <span aria-hidden="true" className="relative block h-5 w-6">
          <span
            className={`absolute left-0 top-0.5 h-px w-6 bg-gold-400 transition-all duration-300 ${
              menuAberto ? "top-2.5 rotate-45" : ""
            }`}
          />

          <span
            className={`absolute left-0 top-2.5 h-px w-6 bg-gold-400 transition-all duration-300 ${
              menuAberto ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute left-0 top-[18px] h-px w-6 bg-gold-400 transition-all duration-300 ${
              menuAberto ? "top-2.5 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Menu aberto no celular */}
      <nav
        ref={menuRef}
        id="menu-mobile"
        aria-label="Navegação para celular"
        aria-hidden={!menuAberto}
        inert={!menuAberto}
        className={`fixed inset-x-0 bottom-0 top-[104px] z-40 border-t border-gold-400/15 bg-navy-950/95 px-6 py-8 backdrop-blur-md transition-all duration-200 motion-reduce:transition-none md:hidden ${
          menuAberto
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <ul className="mx-auto flex h-full max-w-xl flex-col justify-center">
          {links.map((link, index) => {
            const estaAtivo = paginaEstaAtiva(link.href);

            return (
              <li key={link.href} className="border-b border-gold-400/15">
                <Link
                  href={link.href}
                  aria-current={estaAtivo ? "page" : undefined}
                  onClick={() => setMenuAberto(false)}
                  className="group flex min-h-14 items-center justify-between py-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold-400"
                >
                  <span
                    className={`font-serif text-4xl transition-colors ${
                      estaAtivo
                        ? "text-gold-400"
                        : "text-gold-300/65 group-hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                  </span>

                  <span className="font-serif text-lg text-gold-400/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
