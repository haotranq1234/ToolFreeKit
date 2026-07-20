"use client";

import { Search as SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import type { ToolDefinition } from "@/types/tool";
import { ToolCard } from "@/components/ToolCard";

type SearchProps = {
  tools: ToolDefinition[];
};

export function Search({ tools }: SearchProps) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
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
  }, [query, tools]);

  return (
    <section id="tools" className="border-y border-line bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-normal text-ink">
            Find a free tool
          </h2>
          <div className="relative mt-5">
            <SearchIcon
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              size={20}
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="focus-ring h-12 w-full rounded-full border border-line bg-white pl-12 pr-4 text-base text-ink shadow-soft placeholder:text-muted"
              placeholder="Search calculators, converters, text tools..."
              aria-label="Search tools"
            />
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
