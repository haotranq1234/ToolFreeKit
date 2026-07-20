export type ToolCategory = {
  slug: string;
  name: string;
  description: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ToolDefinition = {
  slug: string;
  name: string;
  description: string;
  category: string;
  keywords: string[];
  updatedAt: string;
  faqs: FAQItem[];
};
