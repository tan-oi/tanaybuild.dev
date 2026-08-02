"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./theme-switcher";
import { SoundToggle } from "./sound";

const HOME = { label: "Home", href: "/" };

/** The pages above this one, outermost first. */
function ancestorsOf(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "projects" && segments.length > 1) {
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
  const trail = ancestorsOf(pathname);
  if (pathname === "/") return null;

  return (
    <header className="mb-14 flex items-center justify-between gap-4">
      <nav
        aria-label="Breadcrumb"
        className="text-subtle flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[12px] tracking-[0.05em]"
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
              className="hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </Link>
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <SoundToggle />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
