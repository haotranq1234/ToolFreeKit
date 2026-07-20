import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for may have moved or does not exist.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Back to home
      </Link>
    </main>
  );
}
