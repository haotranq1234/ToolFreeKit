import type { ReactNode } from "react";
import type { ToolDefinition } from "@/types/tool";
import { AdsPlaceholder } from "@/components/AdsPlaceholder";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, toolJsonLd } from "@/lib/jsonLd";

type ToolLayoutProps = {
  tool: ToolDefinition;
  children: ReactNode;
};

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <>
      <JsonLd data={toolJsonLd(tool)} />
      <JsonLd data={faqJsonLd(tool.faqs)} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumb items={[{ label: tool.name }]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article>
            <header>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                Free online tool
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                {tool.name}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
                {tool.description}
              </p>
            </header>
            <div className="mt-8 rounded-lg border border-line bg-white p-5 shadow-soft">
              {children}
            </div>
            <FAQ items={tool.faqs} />
          </article>
          <div className="space-y-5">
            <AdsPlaceholder />
            <section className="rounded-lg border border-line bg-white p-5">
              <h2 className="text-base font-semibold text-ink">Tool details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-ink">Updated</dt>
                  <dd className="text-muted">{tool.updatedAt}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Cost</dt>
                  <dd className="text-muted">Free</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
