"use client";

import { useMemo, useState } from "react";

const parseNumber = (value: string) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

export function PercentageCalculatorTool() {
  const [part, setPart] = useState("25");
  const [whole, setWhole] = useState("200");

  const result = useMemo(() => {
    const partValue = parseNumber(part);
    const wholeValue = parseNumber(whole);

    if (wholeValue === 0) {
      return null;
    }

    return (partValue / wholeValue) * 100;
  }, [part, whole]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Part
          <input
            value={part}
            onChange={(event) => setPart(event.target.value)}
            inputMode="decimal"
            className="focus-ring mt-2 h-12 w-full rounded-lg border border-line px-4 text-base text-ink"
          />
        </label>
        <label className="text-sm font-semibold text-ink">
          Whole
          <input
            value={whole}
            onChange={(event) => setWhole(event.target.value)}
            inputMode="decimal"
            className="focus-ring mt-2 h-12 w-full rounded-lg border border-line px-4 text-base text-ink"
          />
        </label>
      </div>
      <div className="mt-5 rounded-lg bg-surface p-5">
        <p className="text-sm font-medium text-muted">Result</p>
        <p className="mt-2 text-3xl font-semibold text-ink">
          {result === null ? "Enter a non-zero whole" : `${result.toFixed(2)}%`}
        </p>
      </div>
    </div>
  );
}
