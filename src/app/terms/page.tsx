import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: "Read the ToolWeb terms of use.",
  path: "/terms/"
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-semibold text-ink">Terms of Use</h1>
      <div className="mt-6 space-y-5 leading-7 text-muted">
        <p>
          ToolWeb provides free online tools for general informational and
          productivity purposes. Results should be reviewed before relying on
          them for important decisions.
        </p>
        <p>
          You agree not to misuse the website, interfere with its operation, or
          attempt to access systems without permission.
        </p>
        <p>
          The website may change over time as new tools, advertising, and
          product features are added.
        </p>
      </div>
    </main>
  );
}
