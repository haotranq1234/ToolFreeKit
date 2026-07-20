import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export function Pagination({
  currentPage,
  totalPages,
  basePath
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          href={`${basePath}${page === 1 ? "" : `page/${page}/`}`}
          className="focus-ring inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-line px-3 text-sm font-medium text-muted hover:text-ink"
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}
