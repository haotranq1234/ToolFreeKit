export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "ToolWeb",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Fast, free online tools for everyday calculations, conversions, productivity, and content workflows.",
  email: "hello@example.com",
  social: {
    x: "https://x.com/"
  }
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();
