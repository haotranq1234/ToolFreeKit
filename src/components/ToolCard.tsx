import Link from "next/link";
import type { ToolDefinition } from "@/types/tool";
import { getCategory } from "@/data/categories";

type ToolCardProps = {
  tool: ToolDefinition;
};

export function ToolCard({ tool }: ToolCardProps) {
  const category = getCategory(tool.category);

  return (
    <Link
      href={`/tools/${tool.slug}/`}
      className="focus-ring block rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-brand">
        {category?.name ?? "Tool"}
      </p>
      <h3 className="mt-2 text-lg font-semibold tracking-normal text-ink">
        {tool.name}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{tool.description}</p>
    </Link>
  );
}
