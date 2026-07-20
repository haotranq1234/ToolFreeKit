"use client";

import { useMemo, useState } from "react";

export function WordCounterTool() {
  const [text, setText] = useState("");
  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(Boolean).length : 0;
    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).length
      : 0;

    return { words, characters, charactersNoSpaces, sentences, paragraphs };
  }, [text]);

  return (
    <div>
      <label htmlFor="word-counter-input" className="text-sm font-semibold text-ink">
        Text
      </label>
      <textarea
        id="word-counter-input"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="focus-ring mt-2 min-h-56 w-full rounded-lg border border-line p-4 text-base leading-7 text-ink"
        placeholder="Paste or type your text here..."
      />
      <dl className="mt-5 grid gap-3 sm:grid-cols-5">
        {Object.entries({
          Words: stats.words,
          Characters: stats.characters,
          "No spaces": stats.charactersNoSpaces,
          Sentences: stats.sentences,
          Paragraphs: stats.paragraphs
        }).map(([label, value]) => (
          <div key={label} className="rounded-lg bg-surface p-4">
            <dt className="text-xs font-medium uppercase tracking-wide text-muted">
              {label}
            </dt>
            <dd className="mt-1 text-2xl font-semibold text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
