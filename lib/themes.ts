export type Theme = {
  id: string;
  name: string;
  /** Dot colour in the switcher — the theme's background, except Oxide/Tide
   *  pool/Paper where the accent reads better at 11px. */
  dot: string;
};

export const themes: Theme[] = [
  { id: "graphite", name: "Graphite", dot: "#0C0C0D" },
  { id: "oxide", name: "Oxide", dot: "#C97B4E" },
  { id: "tidepool", name: "Tide pool", dot: "#5FA88E" },
  { id: "paper", name: "Paper", dot: "#F2F1EE" },
];

export const THEME_IDS = themes.map((t) => t.id);
export const DEFAULT_THEME = "graphite";
