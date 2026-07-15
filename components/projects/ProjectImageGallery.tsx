"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import type { ProjectGalleryImage } from "../../types/project";

type ProjectImageGalleryProps = {
  projectTitle: string;
  images: ProjectGalleryImage[];
};

const focusableElements =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProjectImageGallery({
  projectTitle,
  images,
}: ProjectImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const dialogId = useId().replaceAll(":", "");
  const modalRootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const isOpen = selectedImageIndex !== null;
  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const modalRoot = modalRootRef.current;
    const backgroundElements = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== modalRoot,
    );
    const previousBackgroundState = backgroundElements.map((element) => ({
      element,
      inert: element.inert,
      ariaHidden: element.getAttribute("aria-hidden"),
    }));

    document.body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedImageIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedImageIndex((currentIndex) =>
          currentIndex === null ? null : (currentIndex + 1) % images.length,
        );
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedImageIndex((currentIndex) =>
          currentIndex === null
            ? null
            : (currentIndex - 1 + images.length) % images.length,
        );
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const elements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableElements),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (elements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = elements[0];
      const lastElement = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      previousBackgroundState.forEach(({ element, inert, ariaHidden }) => {
        element.inert = inert;

        if (ariaHidden === null) {
          element.removeAttribute("aria-hidden");
        } else {
          element.setAttribute("aria-hidden", ariaHidden);
        }
      });
      window.removeEventListener("keydown", handleKeyboard);

      const opener = openerRef.current;
      window.requestAnimationFrame(() => opener?.focus());
    };
  }, [isOpen, images.length]);

  function openImage(index: number, opener: HTMLElement) {
    openerRef.current = opener;
    setSelectedImageIndex(index);
  }

  function closeImage() {
    setSelectedImageIndex(null);
  }

  function showPreviousImage() {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null
        ? null
        : (currentIndex - 1 + images.length) % images.length,
    );
  }

  function showNextImage() {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex + 1) % images.length,
    );
  }

  function stopPropagation(event: ReactMouseEvent) {
    event.stopPropagation();
  }

  const modal =
    selectedImage &&
    selectedImageIndex !== null &&
    typeof document !== "undefined"
      ? createPortal(
          <div
            ref={modalRootRef}
            data-gallery-modal-root={dialogId}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-950/95 p-2 backdrop-blur-md sm:p-6"
            onMouseDown={closeImage}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${dialogId}-title`}
              aria-describedby={`${dialogId}-description`}
              tabIndex={-1}
              className="relative flex h-full max-h-[96dvh] w-full max-w-7xl flex-col overflow-hidden border border-gold-400/25 bg-navy-950 shadow-2xl focus:outline-none"
              onMouseDown={stopPropagation}
            >
              <header className="flex shrink-0 items-center justify-between gap-5 border-b border-gold-400/15 px-4 py-3 sm:px-6 sm:py-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                    Imagem {selectedImageIndex + 1} de {images.length}
                  </p>

                  <h2
                    id={`${dialogId}-title`}
                    className="mt-1 truncate font-serif text-xl font-semibold text-gold-400 sm:text-2xl"
                  >
                    {selectedImage.title}
                  </h2>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeImage}
                  aria-label="Fechar imagem ampliada"
                  className="flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-gold-400/30 text-2xl text-gold-400 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 motion-reduce:transition-none"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </header>

              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black/20 p-2 sm:p-6">
                <Image
                  src={selectedImage.image}
                  alt={`${projectTitle}: ${selectedImage.title}`}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  sizes="100vw"
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="Visualizar imagem anterior"
                      className="absolute left-2 top-1/2 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center border border-gold-400/30 bg-navy-950/95 font-serif text-3xl text-gold-400 shadow-xl transition-colors hover:border-gold-400 hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:left-6 motion-reduce:transition-none"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="Visualizar próxima imagem"
                      className="absolute right-2 top-1/2 flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center border border-gold-400/30 bg-navy-950/95 font-serif text-3xl text-gold-400 shadow-xl transition-colors hover:border-gold-400 hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:right-6 motion-reduce:transition-none"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </>
                )}
              </div>

              <footer className="shrink-0 border-t border-gold-400/15 px-4 py-3 sm:px-6 sm:py-4">
                <p
                  id={`${dialogId}-description`}
                  className="max-w-4xl text-sm leading-6 text-gold-300/75 sm:leading-7"
                >
                  {selectedImage.description}
                </p>

                <p className="mt-1 hidden text-xs text-gold-300/55 sm:block">
                  Use as setas do teclado para navegar ou pressione Esc para
                  fechar.
                </p>
              </footer>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
        {images.map((item, index) => {
          const reverseOrder = index % 2 !== 0;

          return (
            <article
              key={item.image}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(event) =>
                  openImage(index, event.currentTarget)
                }
                aria-label={`Ampliar imagem “${item.title}” do projeto ${projectTitle}`}
                className={`group relative overflow-hidden border border-gold-400/25 bg-navy-900/40 p-2 text-left shadow-2xl shadow-black/20 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-gold-400/55 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 motion-reduce:transform-none motion-reduce:transition-none ${
                  reverseOrder ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${projectTitle}: ${item.title}`}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 1024px) calc(100vw - 48px), 520px"
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none"
                />

                <span className="absolute bottom-4 right-4 border border-gold-400/35 bg-navy-950/95 px-4 py-2 text-sm font-semibold text-gold-300 shadow-xl">
                  Ampliar
                </span>
              </button>

              <div className={reverseOrder ? "lg:order-1" : ""}>
                <span className="font-serif text-2xl text-gold-400/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 font-serif text-3xl font-semibold text-gold-400 md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-gold-300/75">
                  {item.description}
                </p>

                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(event) =>
                    openImage(index, event.currentTarget)
                  }
                  className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-400 transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 motion-reduce:transition-none"
                >
                  Visualizar em detalhes
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {modal}
    </>
  );
}
