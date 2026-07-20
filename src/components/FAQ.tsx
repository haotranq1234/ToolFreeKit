import type { FAQItem } from "@/types/tool";

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-ink">Frequently asked questions</h2>
      <div className="mt-5 divide-y divide-line rounded-lg border border-line bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="cursor-pointer text-base font-semibold text-ink">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
