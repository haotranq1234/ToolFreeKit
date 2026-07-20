import { categories } from "@/data/categories";
import { tools } from "@/data/tools";

export const getToolsByCategory = (categorySlug: string) =>
  tools.filter((tool) => tool.category === categorySlug);

export const getCategoryCounts = () =>
  categories.map((category) => ({
    ...category,
    count: getToolsByCategory(category.slug).length
  }));

export const searchTools = (query: string) => {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return tools;
  }

  return tools.filter((tool) =>
    [tool.name, tool.description, tool.category, ...tool.keywords]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
};
