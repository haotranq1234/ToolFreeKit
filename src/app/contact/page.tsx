import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact ToolWeb with feedback, corrections, or partnership ideas.",
  path: "/contact/"
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-semibold text-ink">Contact</h1>
      <p className="mt-5 text-lg leading-8 text-muted">
        Have feedback, found an issue, or want to suggest a tool? Send a note to{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="focus-ring rounded text-brand hover:text-brand-dark"
        >
          {siteConfig.email}
        </a>
        .
      </p>
    </main>
  );
}
