"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Search } from "lucide-react";
import { projects, experiences, contactTags } from "@/lib/data";

interface PaletteItem {
  id: string;
  label: string;
  sublabel?: string;
  href: string;
  external?: boolean;
  group: string;
}

function buildItems(): PaletteItem[] {
  const items: PaletteItem[] = [
    { id: "home", label: "Home", href: "/", group: "Navigate" },
    {
      id: "projects-index",
      label: "Projects",
      sublabel: "All projects",
      href: "/projects",
      group: "Navigate",
    },
    { id: "contact", label: "Contact", href: "/contact", group: "Navigate" },
  ];

  for (const p of projects) {
    if (!p.slug) continue;
    items.push({
      id: `project-${p.slug}`,
      label: p.title,
      sublabel: "Project",
      href: `/projects/${p.slug}`,
      group: "Projects",
    });
  }

  for (const e of experiences) {
    if (!e.slug) continue;
    items.push({
      id: `work-${e.slug}`,
      label: `${e.role} at ${e.company}`,
      sublabel: "Work",
      href: `/work/${e.slug}`,
      group: "Work",
    });
  }

  for (const c of contactTags) {
    items.push({
      id: `social-${c.iconTag}`,
      label: c.iconTag.replace("-", " "),
      sublabel: "Social",
      href: c.href,
      external: true,
      group: "Socials",
    });
  }

  items.push({
    id: "email",
    label: "Email",
    sublabel: "tan.dev.x@gmail.com",
    href: "mailto:tan.dev.x@gmail.com",
    external: true,
    group: "Socials",
  });

  return items;
}

function matchItems(items: PaletteItem[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return items;

  return items
    .map((item) => {
      const label = item.label.toLowerCase();
      let score = -1;
      if (label.startsWith(q)) score = 2;
      else if (label.includes(q)) score = 1;
      else if (item.sublabel?.toLowerCase().includes(q)) score = 0;
      return { item, score };
    })
    .filter((x) => x.score >= 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.item);
}

const SPRING = { type: "spring" as const, stiffness: 420, damping: 34 };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const listId = useId();
  const router = useRouter();

  const items = useMemo(() => buildItems(), []);
  const filtered = useMemo(() => matchItems(items, query), [items, query]);
  const activeItem = filtered[activeIndex];

  // Reset the selection to the first result whenever the query changes -
  // adjusted during render (React's recommended pattern) rather than in an
  // effect, so it doesn't cause an extra commit.
  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setActiveIndex(0);
  }

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const navigate = useCallback(
    (item: PaletteItem) => {
      close();
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(item.href);
      }
    },
    [close, router]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpenEvent = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpenEvent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      restoreFocusRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      const raf = requestAnimationFrame(() => inputRef.current?.focus());
      return () => {
        cancelAnimationFrame(raf);
      };
    }
    document.body.style.overflow = "";
    restoreFocusRef.current?.focus();
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeItem) navigate(activeItem);
    } else if (e.key === "Tab") {
      // Only the input is a tab stop - keep focus pinned inside the dialog.
      e.preventDefault();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-[15vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onKeyDown={onKeyDown}
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={SPRING}
            style={{ transformOrigin: "top center" }}
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-border/60 px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to..."
                role="combobox"
                aria-expanded="true"
                aria-controls={listId}
                aria-autocomplete="list"
                aria-activedescendant={activeItem?.id}
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="shrink-0 rounded border border-border/60 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                ESC
              </kbd>
            </div>

            <ul
              id={listId}
              role="listbox"
              aria-label="Search results"
              className="max-h-80 overflow-y-auto py-2"
            >
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-muted-foreground">
                  No matches
                </li>
              )}

              {filtered.map((item, i) => {
                const isNewGroup = item.group !== filtered[i - 1]?.group;
                return (
                  <li key={item.id}>
                    {isNewGroup && (
                      <div className="px-4 pt-2 pb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60">
                        {item.group}
                      </div>
                    )}
                    <div
                      id={item.id}
                      role="option"
                      aria-selected={i === activeIndex}
                      tabIndex={-1}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => navigate(item)}
                      className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2 text-sm transition-colors duration-100 ease-[var(--ease-out)] ${
                        i === activeIndex
                          ? "bg-muted text-foreground"
                          : "text-foreground/80"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="truncate">{item.label}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                        {item.sublabel}
                        {item.external && <ArrowUpRight className="size-3" />}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
