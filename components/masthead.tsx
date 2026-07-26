import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export function Masthead() {
  return (
    <header className="max-w-[34rem] mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between">
      <Link
        href="/"
        className="font-mono text-xs tracking-wide text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
      >
        tanay
      </Link>
      <ThemeSwitcher />
    </header>
  );
}
