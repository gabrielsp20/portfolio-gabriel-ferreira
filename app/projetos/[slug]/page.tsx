import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetails } from "../../../components/projects/ProjectDetails";
import { getProjectBySlug, projects } from "../../../data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projetos/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projetos/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `https://www.gabrielsferreira.com.br/projetos/${project.slug}`,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Gabriel Ferreira",
      url: "https://www.gabrielsferreira.com.br",
    },
    keywords: project.technologies.join(", "),
    isAccessibleForFree: project.visibility === "public",
    ...(project.gallery?.[0]
      ? {
          image: `https://www.gabrielsferreira.com.br${project.gallery[0].image}`,
        }
      : {}),
  };

  return (
    <main id="conteudo-principal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
        }}
      />
      <ProjectDetails project={project} />
    </main>
  );
}
