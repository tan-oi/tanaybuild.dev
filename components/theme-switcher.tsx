"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_THEME, THEME_IDS, themes } from "@/lib/themes";

const THEME_CLASSES = THEME_IDS.map((id) => `theme-${id}`);

/* The <html> class is the source of truth — ThemeProvider's pre-paint script
   sets it before first paint, so reading it avoids a second render pass. */
const listeners = new Set<() => void>();

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function getSnapshot() {
  const match = document.documentElement.className.match(/theme-([\w-]+)/);
  return match && THEME_IDS.includes(match[1]) ? match[1] : DEFAULT_THEME;
}

const getServerSnapshot = () => DEFAULT_THEME;

function syncThemeColor() {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute(
      "content",
      getComputedStyle(document.documentElement)
        .getPropertyValue("--background")
        .trim()
    );
}

export function ThemeSwitcher() {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const select = useCallback((id: string) => {
    const el = document.documentElement;
    el.classList.remove(...THEME_CLASSES);
    el.classList.add(`theme-${id}`);
    document.body.classList.remove(...THEME_CLASSES);
    localStorage.setItem("theme", id);
    syncThemeColor();
    listeners.forEach((fn) => fn());
  }, []);

  return (
    // Chips overlap into a stack at rest and spread apart on hover — the
    // separator ring is drawn in --background so they read as stacked paper.
    <div className="group flex items-center" role="group" aria-label="Colour theme">
      {themes.map((theme, i) => (
        <button
          key={theme.id}
          type="button"
          onClick={() => select(theme.id)}
          aria-label={`${theme.name} theme`}
          aria-pressed={theme.id === active}
          style={{ background: theme.dot }}
          // Press feedback fires on pointer-down, not on release — waiting for
          // the click to acknowledge the tap reads as lag.
          className={`size-[15px] cursor-pointer rounded-full transition-[margin,transform,box-shadow] duration-[420ms] ease-[cubic-bezier(.16,1,.3,1)] hover:z-10 hover:-translate-y-[3px] active:scale-90 active:duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-foreground ${
            i === 0 ? "ml-0" : "-ml-1.5 group-hover:ml-[3px]"
          } ${
            theme.id === active
              ? "shadow-[0_0_0_1.5px_var(--background),0_0_0_3px_var(--foreground)]"
              : "shadow-[0_0_0_1.5px_var(--background)]"
          }`}
        />
      ))}
    </div>
  );
}
