import type { FAQItem, ToolDefinition } from "@/types/tool";
import { absoluteUrl, siteConfig } from "@/config/site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search/?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const faqJsonLd = (items: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
});

export const toolJsonLd = (tool: ToolDefinition) => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: tool.name,
  description: tool.description,
  url: absoluteUrl(`/tools/${tool.slug}/`),
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
});
