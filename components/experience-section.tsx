import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiences, type Experience } from "@/lib/data";
import HoverPreview from "./hover-preview";

function MaybePreview({
  item,
  children,
}: {
  item: Experience;
  children: React.ReactNode;
}) {
  if (!item.image) return <>{children}</>;
  return (
    <HoverPreview src={item.image} alt={item.company}>
      {children}
    </HoverPreview>
  );
}

export default function ExperienceSection() {
  const current = experiences.find((e) => e.end.toLowerCase() === "present");
  const past = experiences.filter((e) => e.end.toLowerCase() !== "present");

  return (
    <section className="mb-24">
      <div className="mb-8">
        <span className="text-sm text-muted-foreground">Where I&apos;ve been</span>
        <h2 className="text-2xl text-primary font-semibold">Experience</h2>
      </div>

      {current && (
        <div className="relative">
          <MaybePreview item={current}>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-500 font-mono font-medium">
                Currently
              </span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono ml-auto">
                {current.start} — {current.end}
              </span>
            </div>

            <div className="flex items-baseline gap-2 flex-wrap">
              <h3 className="text-xl font-semibold text-foreground">
                {current.role}
              </h3>
              <span className="text-muted-foreground/60">at</span>
              {current.companyUrl ? (
                <Link
                  href={current.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-primary inline-flex items-center gap-0.5 hover:underline underline-offset-4 decoration-primary/40"
                >
                  {current.company}
                  <ArrowUpRight className="size-4" />
                </Link>
              ) : (
                <span className="text-xl font-semibold text-primary">
                  {current.company}
                </span>
              )}
            </div>
          </MaybePreview>

          <p className="text-muted-foreground leading-relaxed mt-3 max-w-xl">
            {current.description}
          </p>

          {current.note && (
            <p className="text-sm italic text-foreground/70 mt-2 max-w-xl">
              <span className="text-muted-foreground/60 mr-1.5">—</span>
              {current.note}
            </p>
          )}

          {current.slug && (
            <Link
              href={`/work/${current.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors mt-4 group hover:underline underline-offset-4 decoration-primary/40"
            >
              What I&apos;m actually working on
              <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          )}
        </div>
      )}

      {past.length > 0 && (
        <ol className={`${current ? "mt-10 pt-8 border-t border-border/50" : ""} space-y-6`}>
          {past.map((item) => (
            <li key={item.id}>
              <MaybePreview item={item}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <div className="flex items-baseline gap-2 flex-wrap min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <span className="text-muted-foreground/60">at</span>
                    {item.companyUrl ? (
                      <Link
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-primary inline-flex items-center gap-0.5 hover:underline underline-offset-4 decoration-primary/40"
                      >
                        {item.company}
                        <ArrowUpRight className="size-4" />
                      </Link>
                    ) : (
                      <span className="text-lg font-semibold text-primary">
                        {item.company}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono shrink-0">
                    {item.start} — {item.end}
                  </span>
                </div>
              </MaybePreview>

              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {item.description}
              </p>
              {item.note && (
                <p className="text-sm italic text-foreground/70 mt-2 max-w-xl">
                  <span className="text-muted-foreground/60 mr-1.5">—</span>
                  {item.note}
                </p>
              )}
              {item.slug && (
                <Link
                  href={`/work/${item.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors mt-4 group/link hover:underline underline-offset-4 decoration-primary/40"
                >
                  What I actually worked on
                  <ArrowUpRight className="size-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
