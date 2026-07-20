import type { ToolDefinition } from "@/types/tool";

export const tools: ToolDefinition[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    description:
      "Count words, characters, sentences, and paragraphs in plain text.",
    category: "text-tools",
    keywords: ["word counter", "character counter", "text statistics"],
    updatedAt: "2026-07-20",
    faqs: [
      {
        question: "Is the word counter free?",
        answer: "Yes. The word counter is free to use and runs in your browser."
      },
      {
        question: "Does the tool store my text?",
        answer:
          "No. The foundation is designed for privacy-first browser tools."
      }
    ]
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description:
      "Calculate percentages, percentage change, discounts, and increases.",
    category: "calculators",
    keywords: ["percentage calculator", "percent change", "discount calculator"],
    updatedAt: "2026-07-20",
    faqs: [
      {
        question: "What percentage calculations are supported?",
        answer:
          "The tool foundation supports common percentage workflows such as part-of-whole, increase, decrease, and discounts."
      }
    ]
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    description:
      "Convert common length, weight, temperature, and volume units quickly.",
    category: "converters",
    keywords: ["unit converter", "measurement converter", "convert units"],
    updatedAt: "2026-07-20",
    faqs: [
      {
        question: "Can more units be added?",
        answer:
          "Yes. Each tool is isolated so conversion families can be expanded safely over time."
      }
    ]
  }
];

export const featuredTools = tools.slice(0, 6);

export const getTool = (slug: string) =>
  tools.find((tool) => tool.slug === slug);
