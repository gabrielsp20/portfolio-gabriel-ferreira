export type ProjectVisibility = "public" | "private";

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
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
};