import { Search } from "@/components/Search";
import { tools } from "@/data/tools";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Search Tools",
  description: "Search ToolWeb's free online calculators, converters, and utilities.",
  path: "/search/"
});

export default function SearchPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-4xl font-semibold text-ink">Search tools</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          Find a free online tool by name, category, or keyword.
        </p>
      </section>
      <Search tools={tools} />
    </main>
  );
}
