"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { experiences, type Experience } from "@/lib/data";
import HoverPreview from "./hover-preview";
import { RowShell } from "./ui/row-shell";

function ExperienceRow({ item }: { item: Experience }) {
  const isCurrent = item.end.toLowerCase() === "present";

  const row = (
    <RowShell>
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex min-w-0 items-baseline gap-2">
          <h3 className="shrink-0 font-medium text-foreground">
            {item.role}
          </h3>
          <span className="shrink-0 text-muted-foreground/40">at</span>
          {item.companyUrl ? (
            <Link
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-medium text-primary underline-offset-4 decoration-primary/40 hover:underline"
            >
              {item.company}
            </Link>
          ) : (
            <span className="shrink-0 font-medium text-primary">
              {item.company}
            </span>
          )}
          {isCurrent && (
            <span className="relative flex size-1.5 shrink-0" aria-label="Current role">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
          )}
          <span className="hidden shrink-0 text-muted-foreground/40 sm:inline">
            —
          </span>
          <p className="hidden min-w-0 flex-1 truncate text-sm text-muted-foreground sm:block">
            {item.description}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {item.start} – {item.end}
        </span>
      </div>
      <p className="mt-1 text-sm text-muted-foreground sm:hidden">
        {item.description}
      </p>

      {item.note && (
        <p className="mt-2 text-sm italic text-foreground/70">
          <span className="mr-1.5 text-muted-foreground/50">—</span>
          {item.note}
        </p>
      )}

      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {item.slug && (
          <Link
            href={`/work/${item.slug}`}
            className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-medium text-foreground/80 transition-colors duration-150 ease-[var(--ease-out)] group-hover:text-primary"
          >
            What I worked on
            <ArrowUpRight className="size-3 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 ease-[var(--ease-out)] group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
        )}
      </div>
    </RowShell>
  );

  if (!item.image) return row;
  return (
    <HoverPreview src={item.image} alt={item.company}>
      {row}
    </HoverPreview>
  );
}

export default function ExperienceSection() {
  return (
    <section className="mb-20">
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Experience
        </span>
      </div>

      <ul className="flex flex-col">
        {experiences.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.4,
              delay: i * 0.05,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <ExperienceRow item={item} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
