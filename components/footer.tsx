"use client";

import Link from "next/link";
import LocalTime from "./local-time";

export function Footer() {
  return (
    <footer className="max-w-[34rem] mx-auto px-6 pb-10 pt-4">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6">
        <LocalTime />

        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <Link
            href="https://github.com/tan-oi/tanaybuild.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
          >
            Source
          </Link>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new Event("open-command-palette"))
            }
            className="pressable inline-flex items-center gap-1.5 cursor-pointer transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
          >
            <kbd className="rounded border border-border/60 px-1.5 py-0.5 text-[10px]">
              ⌘K
            </kbd>
            to navigate
          </button>
        </div>
      </div>
    </footer>
  );
}
