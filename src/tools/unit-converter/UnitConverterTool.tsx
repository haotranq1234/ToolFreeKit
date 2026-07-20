"use client";

import { useMemo, useState } from "react";

const lengthUnits = {
  meters: 1,
  kilometers: 1000,
  feet: 0.3048,
  miles: 1609.344
};

type LengthUnit = keyof typeof lengthUnits;

export function UnitConverterTool() {
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState<LengthUnit>("meters");
  const [to, setTo] = useState<LengthUnit>("feet");

  const converted = useMemo(() => {
    const numeric = Number(value);

    if (!Number.isFinite(numeric)) {
      return null;
    }

    return (numeric * lengthUnits[from]) / lengthUnits[to];
  }, [from, to, value]);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-semibold text-ink">
          Value
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            inputMode="decimal"
            className="focus-ring mt-2 h-12 w-full rounded-lg border border-line px-4 text-base text-ink"
          />
        </label>
        <label className="text-sm font-semibold text-ink">
          From
          <select
            value={from}
            onChange={(event) => setFrom(event.target.value as LengthUnit)}
            className="focus-ring mt-2 h-12 w-full rounded-lg border border-line px-4 text-base text-ink"
          >
            {Object.keys(lengthUnits).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-ink">
          To
          <select
            value={to}
            onChange={(event) => setTo(event.target.value as LengthUnit)}
            className="focus-ring mt-2 h-12 w-full rounded-lg border border-line px-4 text-base text-ink"
          >
            {Object.keys(lengthUnits).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5 rounded-lg bg-surface p-5">
        <p className="text-sm font-medium text-muted">Converted value</p>
        <p className="mt-2 text-3xl font-semibold text-ink">
          {converted === null ? "Enter a number" : converted.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
