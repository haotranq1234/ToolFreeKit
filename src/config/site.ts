export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "ToolFreeKit",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://toolfreekit.com",
  description:
    "Fast, free online tools for everyday calculations, conversions, productivity, and content workflows.",
  email: "hello@toolfreekit.com",
  social: {
    x: "https://x.com/"
  }
};

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();
