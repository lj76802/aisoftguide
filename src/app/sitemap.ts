import { MetadataRoute } from "next";
import { AI_TOOLS, TUTORIALS } from "@/lib/data";

const BASE_URL = "https://www.aisoftguide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolUrls = AI_TOOLS.map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    lastModified: new Date(tool.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const tutorialUrls = TUTORIALS.map((tut) => ({
    url: `${BASE_URL}/tutorials/${tut.slug}`,
    lastModified: new Date(tut.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/tutorials`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...toolUrls,
    ...tutorialUrls,
  ];
}
