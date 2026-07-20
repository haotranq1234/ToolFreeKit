import Link from "next/link";
import type { ToolCategory } from "@/types/tool";

type CategoryCardProps = ToolCategory & {
  count: number;
};

export function CategoryCard({
  slug,
  name,
  description,
  count
}: CategoryCardProps) {
  return (
    <Link
      href={`/?category=${slug}#tools`}
      className="focus-ring block rounded-lg border border-line bg-white p-5 shadow-soft hover:border-brand"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">
          {count}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </Link>
  );
}
