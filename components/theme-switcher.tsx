"use client";

import React, { useState, useEffect } from "react";

const themes = [
  {
    id: "dark",
    label: "Default",
    classes: "bg-zinc-900 text-white font-sans",
  },
  {
    id: "sunset",
    label: "Sunset",
    classes: "bg-orange-100 text-orange-900 font-sans",
  },
  {
    id: "ocean",
    label: "Ocean",
    classes: "bg-cyan-100 text-cyan-900 font-sans",
  },
  {
    id: "forest",
    label: "Forest",
    classes: "bg-green-100 text-green-900 font-serif",
  },
  {
    id: "royal",
    label: "Royal",
    classes: "bg-purple-100 text-purple-900 font-serif",
  },
];

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    setActiveTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    document.body.classList.remove(
      "theme-sunset",
      "theme-ocean",
      "theme-forest",
      "theme-royal",
      "theme-dark"
    );

    document.body.classList.add(`theme-${themeId}`);

    localStorage.setItem("theme", themeId);
  };

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
  };

  return (
    <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center">
      <div className="flex flex-col gap-3 p-2 bg-background backdrop-blur-sm border border-white/60 rounded-lg shadow-xl">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            className={`
              group relative flex items-center justify-center p-1 rounded-sm shadow-sm transition-all duration-300 ease-out
              ${theme.classes}
              ${
                activeTheme === theme.id
                  ? "scale-110 ring-2 ring-zinc-700 ring-offset-0.5 ring-offset-transparent shadow-md"
                  : "hover:scale-105 active:scale-95 hover:shadow-md"
              }
            `}
            aria-label={`Switch to ${theme.label} theme`}
          >
            <span className="relative z-10">Aa</span>
          </button>
        ))}
      </div>
    </div>
  );
}
