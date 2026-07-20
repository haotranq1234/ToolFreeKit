import { CategoryCard } from "@/components/CategoryCard";
import { Search } from "@/components/Search";
import { featuredTools, tools } from "@/data/tools";
import { getCategoryCounts } from "@/lib/tools";
import { createMetadata } from "@/lib/metadata";
import { ToolCard } from "@/components/ToolCard";

export const metadata = createMetadata({
  title: "Free Online Tools",
  description:
    "Discover fast, free online calculators, converters, text tools, and developer utilities.",
  path: "/"
});

export default function HomePage() {
  const categoryCounts = getCategoryCounts();

  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Fast free utilities
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-6xl">
              Free online tools that get out of your way.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              A growing library of lightweight calculators, converters, text
              tools, and developer utilities built for speed, accessibility,
              and privacy.
            </p>
          </div>
        </div>
      </section>

      <Search tools={tools} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Featured tools</h2>
            <p className="mt-2 text-sm text-muted">
              Common workflows ready to use and ready to expand.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-ink">Browse categories</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCounts.map((category) => (
            <CategoryCard key={category.slug} {...category} />
          ))}
        </div>
      </section>
    </main>
  );
}
