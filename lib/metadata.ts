import type { Metadata } from "next";
import profile from "../data/profile.json";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | ${profile.name}`;
  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
      locale: "pt_BR",
      siteName: "Gabriel Ferreira",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Gabriel Ferreira — Suporte de TI e Automação",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
