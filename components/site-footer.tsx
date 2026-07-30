"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

export function SiteFooter() {
  // Renders a placeholder until mounted so server and client markup agree.
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    // A hairline closes the page, so the footer reads as chrome rather than
    // as one more section.
    <footer className="mt-12 flex flex-wrap items-center gap-2.5 border-t border-border pt-6 font-mono text-[12px] tracking-[0.05em] text-subtle">
      <span className="size-[5px] shrink-0 animate-pulse rounded-full bg-accent" />
      <span suppressHydrationWarning>Kolkata — {time ?? "--:--"} local</span>
      <span className="opacity-45">·</span>
      <a
        href="https://github.com/tan-oi"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-300 hover:text-foreground"
      >
        Source
      </a>

      {/* The only place the name appears outside the home page. */}
      <span className="ml-auto opacity-65">Tanay, {new Date().getFullYear()}</span>
    </footer>
  );
}
