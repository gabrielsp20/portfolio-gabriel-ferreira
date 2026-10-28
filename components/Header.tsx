"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Experiência", href: "/experiencia" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const button = buttonRef.current;
    const overflow = document.body.style.overflow;
    const background = [
      brandRef.current,
      ...document.querySelectorAll<HTMLElement>(
        ".site-content, footer, .desktop-nav, .skip-link",
      ),
    ].filter((element): element is HTMLElement => element !== null);
    const previous = background.map((element) => ({
      element,
      inert: element.inert,
      hidden: element.getAttribute("aria-hidden"),
    }));
    document.body.style.overflow = "hidden";
    background.forEach((element) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });
    const frame = requestAnimationFrame(() =>
      menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus(),
    );
    const desktop = window.matchMedia("(min-width: 768px)");
    function onResize() {
      if (desktop.matches) setMenuOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const elements = [
        button,
        ...Array.from(
          menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
        ),
      ].filter(
        (element): element is HTMLButtonElement | HTMLAnchorElement =>
          element !== null,
      );
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    desktop.addEventListener("change", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = overflow;
      previous.forEach(({ element, inert, hidden }) => {
        element.inert = inert;
        if (hidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", hidden);
      });
      desktop.removeEventListener("change", onResize);
      window.removeEventListener("keydown", onKey);
      // A desktop resize hides the mobile trigger, so return focus to its active link.
      if (desktop.matches)
        document
          .querySelector<HTMLAnchorElement>(
            '.desktop-nav a[aria-current="page"]',
          )
          ?.focus();
      else button?.focus();
    };
  }, [menuOpen]);

  function navigationLinks(mobile = false) {
    return links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          aria-current={pathname === link.href ? "page" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          {link.label}
          {mobile && <span aria-hidden="true">→</span>}
        </Link>
      </li>
    ));
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link ref={brandRef} href="/" className="brand">
          <span className="monogram" aria-hidden="true">
            GF
          </span>
          <span className="brand-name">Gabriel Ferreira</span>
          <span className="sr-only"> — página inicial</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <ul>{navigationLinks()}</ul>
        </nav>
        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
        <nav
          ref={menuRef}
          id="menu-mobile"
          className="mobile-nav"
          aria-label="Navegação para celular"
          hidden={!menuOpen}
        >
          <ul>{navigationLinks(true)}</ul>
        </nav>
      </div>
    </header>
  );
}
