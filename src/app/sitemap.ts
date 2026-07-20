import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { tools } from "@/data/tools";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/search/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date("2026-07-20")
    })),
    ...tools.map((tool) => ({
      url: `${siteConfig.url}/tools/${tool.slug}/`,
      lastModified: new Date(tool.updatedAt)
    }))
  ];
}
