import Link from "next/link";
import { Search } from "lucide-react";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="focus-ring rounded text-xl font-semibold tracking-normal text-ink"
        >
          {siteConfig.name}
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded text-sm font-medium text-muted hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#tools"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted hover:bg-surface hover:text-ink"
          aria-label="Find tools"
          title="Find tools"
        >
          <Search aria-hidden="true" size={18} />
        </Link>
      </nav>
    </header>
  );
}
