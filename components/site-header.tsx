"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./theme-switcher";

const HOME = { label: "Home", href: "/" };

/** The pages above this one, outermost first. */
function ancestorsOf(pathname: string) {
  if (pathname.startsWith("/projects/")) {
    return [HOME, { label: "All projects", href: "/projects" }];
  }
  return [HOME];
}

/**
 * Masthead for every page except home. A trail of the pages above this one
 * rather than a nav row — four pages don't need a navbar, and the name belongs
 * on the home page rather than above every article.
 */
export function SiteHeader() {
  const pathname = usePathname();
  // Home's masthead lives in the hero; a "Home" crumb there is nonsense.
  const trail = ancestorsOf(pathname);
  if (pathname === "/") return null;

  return (
    <header className="rise mb-14 flex items-center justify-between gap-4 [animation-delay:.04s]">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[12px] tracking-[0.05em] text-subtle"
      >
        {trail.map((item, i) => (
          <span key={item.href} className="flex items-center gap-2.5">
            {i > 0 && (
              <span aria-hidden className="opacity-45">
                ·
              </span>
            )}
            <Link
              href={item.href}
              className="transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </Link>
          </span>
        ))}
      </nav>

      <ThemeSwitcher />
    </header>
  );
}
