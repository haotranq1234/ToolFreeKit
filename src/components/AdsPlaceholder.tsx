type AdsPlaceholderProps = {
  label?: string;
};

export function AdsPlaceholder({ label = "Advertisement" }: AdsPlaceholderProps) {
  return (
    <aside
      className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-line bg-surface px-4 py-6 text-xs font-medium uppercase tracking-wide text-muted"
      aria-label={label}
    >
      {label}
    </aside>
  );
}
