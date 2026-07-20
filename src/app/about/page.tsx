import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about ToolWeb and the principles behind our free online tool library.",
  path: "/about/"
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-semibold text-ink">About ToolWeb</h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        ToolWeb is built to become a large, dependable library of free online
        tools. The product is optimized for speed, clear answers, accessible
        interfaces, and maintainable expansion.
      </p>
      <p className="mt-5 leading-7 text-muted">
        Every tool should solve one job well. Shared layouts, metadata helpers,
        and typed registries keep the site consistent while allowing each tool
        to evolve independently.
      </p>
    </main>
  );
}
