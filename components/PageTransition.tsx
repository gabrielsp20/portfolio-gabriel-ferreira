"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const reduzirMovimento = useReducedMotion();

  if (reduzirMovimento) {
    return <div>{children}</div>;
  }

  return (
    <div className="relative isolate">
      {/* Cortina azul que atravessa a tela */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 bg-navy-950"
        initial={{ x: "100%" }}
        animate={{
          x: ["100%", "0%", "0%", "-100%"],
        }}
        transition={{
          duration: 0.85,
          times: [0, 0.34, 0.58, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Traço dourado editorial */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-1/2 z-[60] h-px w-full origin-left bg-gold-400"
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 0.85,
          times: [0, 0.32, 0.6, 1],
          ease: "easeInOut",
        }}
      />

      {/* Entrada do conteúdo da nova página */}
      <motion.div
        initial={{
          opacity: 0,
          x: 24,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}