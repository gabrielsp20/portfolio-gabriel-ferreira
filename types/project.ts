export type ProjectVisibility = "public" | "private";

export type ProjectGroup = "principal" | "automation" | "support";

export type ProjectGalleryImage = {
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

export type ProjectSection = {
  title: string;
  description?: string;
  items?: string[];
  relatedProjectSlug?: string;
  relatedProjectLabel?: string;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  group: ProjectGroup;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  visibility: ProjectVisibility;
  featured: boolean;
  projectUrl?: string;
  repositoryUrl?: string;
  confidentialityNote?: string;
  role?: string;
  status?: string;
  period?: string;
  limitations?: string[];
  challenges?: string[];
  learnings?: string[];
  nextSteps?: string[];
  highlights?: string[];
  sections?: ProjectSection[];
  galleryTitle?: string;
  galleryDescription?: string;
  gallery?: ProjectGalleryImage[];
  demonstrationNote?: string;
};
