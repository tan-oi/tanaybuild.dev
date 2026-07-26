"use client";

import { useState } from "react";
import { TooltipWrapper } from "./ui/tooltip-wrapper";

type Theme = {
  id: string;
  name: string;
  accent: string;
};

const themes: Theme[] = [
  { id: "default", name: "After Hours", accent: "#b8b8b8" },
  { id: "sunset", name: "Tangerine Dream", accent: "#f56e3f" },
  { id: "ocean", name: "Tide Pool", accent: "#0891b2" },
  { id: "forest", name: "Fern Gully", accent: "#2d8659" },
  { id: "royal", name: "Lavender Haze", accent: "#7c3aed" },
];

const THEME_CLASSES = themes.map((t) => `theme-${t.id}`);

function applyTheme(id: string) {
  document.documentElement.classList.remove(...THEME_CLASSES);
  document.body.classList.remove(...THEME_CLASSES);
  if (id !== "default") {
    document.documentElement.classList.add(`theme-${id}`);
    document.body.classList.add(`theme-${id}`);
  }
  localStorage.setItem("theme", id);
}

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState(() =>
    typeof window === "undefined"
      ? "default"
      : localStorage.getItem("theme") || "default"
  );

  const handleSelect = (id: string) => {
    applyTheme(id);
    setActiveTheme(id);
  };

  return (
    <div
      role="group"
      aria-label="Theme picker"
      className="flex items-center gap-2.5"
    >
      {themes.map((theme) => {
        const isActive = activeTheme === theme.id;
        return (
          <TooltipWrapper key={theme.id} content={theme.name}>
            <button
              type="button"
              onClick={() => handleSelect(theme.id)}
              aria-label={`Switch to ${theme.name} theme`}
              aria-pressed={isActive}
              className="pressable relative flex size-4 cursor-pointer items-center justify-center rounded-full"
            >
              <span
                className="size-2.5 rounded-full ring-1 ring-border"
                style={{ background: theme.accent }}
                aria-hidden
              />
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full ring-2 ring-primary/70 ring-offset-2 ring-offset-background transition-[box-shadow] duration-150 ease-[var(--ease-out)]"
                  aria-hidden
                />
              )}
            </button>
          </TooltipWrapper>
        );
      })}
    </div>
  );
}
