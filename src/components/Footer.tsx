import Link from "next/link";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-base font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            Fast, free online tools designed for clarity, privacy, and everyday
            usefulness.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm text-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
