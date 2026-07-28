import Link from "next/link";
import { experiences, formatTags, type Experience } from "@/lib/data";
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

function Slab({ item }: { item: Experience }) {
  const isCurrent = item.end.toLowerCase() === "present";

  return (
    <div className="border-b border-border pb-6 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <MaybePreview item={item}>
          {item.companyUrl ? (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[19px] leading-tight font-medium tracking-[-0.02em] underline decoration-transparent underline-offset-[6px] transition-[text-decoration-color] duration-200 ease-out hover:decoration-border-strong"
            >
              {item.company}
            </a>
          ) : (
            <span className="text-[19px] leading-tight font-medium tracking-[-0.02em]">
              {item.company}
            </span>
          )}
        </MaybePreview>

        {/* Role rides with the dates as one microtype line, so the company
            owns the top line alone. */}
        <span className="flex shrink-0 items-center gap-2 font-mono text-[12px] tracking-[0.05em] text-subtle">
          {isCurrent && (
            <span className="size-[5px] animate-pulse rounded-full bg-accent" />
          )}
          {item.role} · {item.start} — {item.end}
        </span>
      </div>

      <p className="mt-3 max-w-[30rem] text-[15px] text-muted-foreground text-pretty">
        {item.description}
      </p>

      {item.note && (
        <p className="mt-1.5 max-w-[30rem] text-[15px] text-subtle italic">
          {item.note}
        </p>
      )}

      {item.tags && item.tags.length > 0 && (
        <p className="mt-3 font-mono text-[12px] tracking-[0.03em] text-muted-foreground">
          {formatTags(item.tags)}
        </p>
      )}

      {item.slug && (
        <Link
          href={`/work/${item.slug}`}
          className="link-retract mt-3 inline-block text-[15px] text-accent"
        >
          {isCurrent ? "What I'm actually working on" : "What I actually worked on"}
        </Link>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  if (experiences.length === 0) return null;

  return (
    <section
      aria-labelledby="experience"
      className="rise mb-20 [animation-delay:.46s]"
    >
      {/* Label and rule read as one unit, so the section is separated by a
          single hairline rather than a floating word above a box. */}
      <div className="mb-4 flex items-center gap-3">
        <span
          id="experience"
          className="shrink-0 font-mono text-[12px] tracking-[0.05em] text-accent"
        >
          Experience
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col gap-9">
        {experiences.map((item) => (
          <Slab key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
