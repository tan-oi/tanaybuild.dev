export type Theme = {
  id: string;
  name: string;
  /** Fills the theme's chip in the switcher. Whichever colour identifies the
   *  theme fastest: the accent for the two chromatic ones, grey for Graphite,
   *  and Paper's cream ground — the only light theme, so it reads as such. */
  dot: string;
};

export const themes: Theme[] = [
  { id: "graphite", name: "Graphite", dot: "#4A4A46" },
  { id: "oxide", name: "Oxide", dot: "#C97B4E" },
  { id: "tidepool", name: "Tide pool", dot: "#5FA88E" },
  { id: "paper", name: "Paper", dot: "#F2F1EE" },
];

export const THEME_IDS = themes.map((t) => t.id);
export const DEFAULT_THEME = "graphite";
