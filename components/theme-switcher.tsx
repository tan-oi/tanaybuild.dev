"use client";

import { useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_IDS, themes } from "@/lib/themes";

const THEME_CLASSES = THEME_IDS.map((id) => `theme-${id}`);

export function ThemeSwitcher() {
  const [active, setActive] = useState(DEFAULT_THEME);

  // The pre-paint script in ThemeProvider already set the class; this only
  // syncs React state so the pressed swatch matches on hydration.
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved && THEME_IDS.includes(saved)) setActive(saved);
  }, []);

  const select = (id: string) => {
    setActive(id);
    const root = document.documentElement;
    root.classList.remove(...THEME_CLASSES);
    root.classList.add(`theme-${id}`);
    document.body.classList.remove(...THEME_CLASSES);
    localStorage.setItem("theme", id);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        getComputedStyle(root).getPropertyValue("--background").trim()
      );
    }
  };

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label="Colour theme"
    >
      {themes.map((theme) => (
        <button
          key={theme.id}
          type="button"
          onClick={() => select(theme.id)}
          aria-label={`${theme.name} theme`}
          aria-pressed={active === theme.id}
          style={{ background: theme.dot }}
          className={`size-[11px] cursor-pointer rounded-full border transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-135 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-foreground ${
            active === theme.id
              ? "scale-135 border-secondary border-2"
              : "border-border-strong"
          }`}
        />
      ))}
    </div>
  );
}
