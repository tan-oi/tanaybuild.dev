"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";

    document.body.classList.remove(
      "theme-sunset",
      "theme-ocean",
      "theme-forest",
      "theme-royal"
    );

    if (savedTheme !== "default") {
      document.body.classList.add(`theme-${savedTheme}`);
    }
  }, []);

  return <>{children}</>;
}
