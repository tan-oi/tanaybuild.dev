"use client";

import React, { useState, useEffect, useRef } from "react";
import { SwatchBook } from "lucide-react";

type Theme = {
  id: string;
  name: string;
  swatches: [string, string, string, string, string];
};

const themes: Theme[] = [
  {
    id: "default",
    name: "After Hours",
    swatches: ["#121212", "#0b0b0b", "#b8b8b8", "#3a3a3a", "#f2f2f2"],
  },
  {
    id: "sunset",
    name: "Tangerine Dream",
    swatches: ["#fef9f5", "#f56e3f", "#ffa855", "#e94674", "#3d2817"],
  },
  {
    id: "ocean",
    name: "Tide Pool",
    swatches: ["#f7fbfd", "#0891b2", "#4db3a1", "#2563eb", "#0f2c3d"],
  },
  {
    id: "forest",
    name: "Fern Gully",
    swatches: ["#f8faf8", "#2d8659", "#7fb069", "#26a17b", "#1e3a27"],
  },
  {
    id: "royal",
    name: "Lavender Haze",
    swatches: ["#faf8fc", "#7c3aed", "#a78bfa", "#6366f1", "#2b1d3d"],
  },
];

const THEME_CLASSES = themes.map((t) => `theme-${t.id}`);

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState("default");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "default";
    setActiveTheme(saved);
    applyTheme(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const applyTheme = (id: string) => {
    const root = document.documentElement;
    root.classList.remove(...THEME_CLASSES);
    root.classList.add(`theme-${id}`);
    document.body.classList.remove(...THEME_CLASSES);
    document.body.classList.add(`theme-${id}`);
    localStorage.setItem("theme", id);
  };

  const handleSelect = (id: string) => {
    setActiveTheme(id);
    applyTheme(id);
  };

  return (
    <div
      ref={containerRef}
      className="hidden md:block fixed right-6 bottom-6 z-50"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Open theme picker"
        className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-md shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
      >
        <span className="sr-only">Themes</span>
        <SwatchBook
          className="h-[18px] w-[18px] text-foreground transition-transform group-hover:rotate-12"
          strokeWidth={1.75}
          aria-hidden
        />
        <span
          className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full ring-2 ring-card transition-colors"
          style={{
            background:
              themes.find((t) => t.id === activeTheme)?.swatches[1] ??
              themes[0].swatches[1],
          }}
          aria-hidden
        />
      </button>

      <div
        className={`absolute right-0 bottom-12 origin-bottom-right transition-all duration-200 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="w-64 rounded-xl border border-border bg-card/95 backdrop-blur-md shadow-2xl p-2">
          <div className="px-2 pt-1 pb-2 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Pick a vibe
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close theme picker"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            {themes.map((theme) => {
              const isActive = activeTheme === theme.id;
              const accent = theme.swatches[1];
              return (
                <li key={theme.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(theme.id)}
                    aria-label={`Select ${theme.name} theme`}
                    aria-pressed={isActive}
                    className={`group/row relative w-full flex items-center gap-3 pl-3 pr-3 py-2 rounded-lg transition-all cursor-pointer overflow-hidden ${
                      isActive ? "bg-muted" : "hover:bg-muted/60"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r-full transition-all ${
                        isActive ? "opacity-100" : "opacity-0 group-hover/row:opacity-40"
                      }`}
                      style={{ background: accent }}
                      aria-hidden
                    />
                    <span
                      className="flex h-6 overflow-hidden rounded-md ring-1 ring-border/70 shrink-0 shadow-sm transition-transform group-hover/row:scale-105"
                      aria-hidden
                    >
                      {theme.swatches.map((c, i) => (
                        <span
                          key={i}
                          className="block h-full w-3"
                          style={{ background: c }}
                        />
                      ))}
                    </span>
                    <span
                      className={`flex-1 text-left text-sm tracking-tight transition-colors ${
                        isActive ? "text-foreground font-medium" : "text-foreground/80"
                      }`}
                    >
                      {theme.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
