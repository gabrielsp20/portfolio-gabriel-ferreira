"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ProjectGalleryImage = {
  image: string;
  title: string;
  description: string;
};

type ProjectImageGalleryProps = {
  images: ProjectGalleryImage[];
};

export function ProjectImageGallery({
  images,
}: ProjectImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  useEffect(() => {
    if (selectedImageIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return (currentIndex + 1) % images.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((currentIndex) => {
          if (currentIndex === null) {
            return null;
          }

          return (currentIndex - 1 + images.length) % images.length;
        });
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedImageIndex, images.length]);

  function openImage(index: number) {
    setSelectedImageIndex(index);
  }

  function closeImage() {
    setSelectedImageIndex(null);
  }

  function showPreviousImage() {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex - 1 + images.length) % images.length;
    });
  }

  function showNextImage() {
    setSelectedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex + 1) % images.length;
    });
  }

  const modal =
    selectedImage &&
    selectedImageIndex !== null &&
    typeof document !== "undefined"
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada: ${selectedImage.title}`}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy-950/95 p-3 backdrop-blur-md sm:p-6"
            onMouseDown={closeImage}
          >
            <div
              className="relative flex h-full max-h-[96dvh] w-full max-w-7xl flex-col overflow-hidden border border-gold-400/25 bg-navy-950 shadow-2xl"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <header className="flex shrink-0 items-center justify-between gap-5 border-b border-gold-400/15 px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                    Tela {selectedImageIndex + 1} de {images.length}
                  </p>

                  <h2 className="mt-1 truncate font-serif text-xl font-semibold text-gold-400 sm:text-2xl">
                    {selectedImage.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeImage}
                  aria-label="Fechar imagem ampliada"
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-400/25 text-2xl text-gold-400 transition-colors hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </header>

              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black/20 p-3 sm:p-6">
                <Image
                  src={selectedImage.image}
                  alt={`Tela ampliada do Sistema de Gestão da EBD: ${selectedImage.title}`}
                  width={1200}
                  height={1600}
                  sizes="100vw"
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                  priority
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="Visualizar imagem anterior"
                      className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold-400/25 bg-navy-950/90 font-serif text-3xl text-gold-400 shadow-xl transition-all hover:border-gold-400 hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:left-6"
                    >
                      <span aria-hidden="true">‹</span>
                    </button>

                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="Visualizar próxima imagem"
                      className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold-400/25 bg-navy-950/90 font-serif text-3xl text-gold-400 shadow-xl transition-all hover:border-gold-400 hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:right-6"
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </>
                )}
              </div>

              <footer className="shrink-0 border-t border-gold-400/15 px-4 py-4 sm:px-6">
                <p className="max-w-4xl text-sm leading-7 text-gold-300/65">
                  {selectedImage.description}
                </p>

                <p className="mt-2 hidden text-xs text-gold-300/40 sm:block">
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
      <div className="mt-14 space-y-20 md:mt-16 md:space-y-28">
        {images.map((item, index) => {
          const reverseOrder = index % 2 !== 0;

          return (
            <article
              key={item.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <button
                type="button"
                onClick={() => openImage(index)}
                aria-label={`Ampliar imagem: ${item.title}`}
                className={`group relative overflow-hidden border border-gold-400/20 bg-navy-900/40 p-3 text-left shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 ${
                  reverseOrder ? "lg:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Tela do Sistema de Gestão da EBD: ${item.title}`}
                    width={900}
                    height={1200}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
                  />

                  <div className="absolute inset-0 flex items-end justify-center bg-navy-950/0 p-5 transition-colors duration-300 group-hover:bg-navy-950/30">
                    <span className="translate-y-3 border border-gold-400/25 bg-navy-950/95 px-5 py-3 text-sm font-semibold text-gold-300 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Visualizar tela
                    </span>
                  </div>
                </div>
              </button>

              <div className={reverseOrder ? "lg:order-1" : ""}>
                <span className="font-serif text-2xl text-gold-400/25">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-serif text-3xl font-semibold text-gold-400 md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-gold-300/70">
                  {item.description}
                </p>

                <button
                  type="button"
                  onClick={() => openImage(index)}
                  className="mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-400 transition-colors hover:text-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
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