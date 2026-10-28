import type { MetadataRoute } from "next";
import profile from "../data/profile.json";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre", "/experiencia", "/contato"].map((path) => ({
    url: `${profile.site}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
