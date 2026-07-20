import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export const createMetadata = ({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false
}: MetadataInput): Metadata => {
  const url = absoluteUrl(path);
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
};
