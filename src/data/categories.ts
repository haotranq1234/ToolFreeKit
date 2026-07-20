import type { ToolCategory } from "@/types/tool";

export const categories: ToolCategory[] = [
  {
    slug: "calculators",
    name: "Calculators",
    description: "Practical calculators for finance, health, dates, and everyday math."
  },
  {
    slug: "converters",
    name: "Converters",
    description: "Unit, text, file, and data converters built for quick answers."
  },
  {
    slug: "text-tools",
    name: "Text Tools",
    description: "Clean, format, count, and transform text directly in your browser."
  },
  {
    slug: "developer-tools",
    name: "Developer Tools",
    description: "Utilities for encoding, formatting, validation, and debugging."
  }
];

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);
