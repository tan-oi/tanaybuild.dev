import Link from "next/link";
import HoverPreview from "../hover-preview";
import { formatTags, Project } from "@/lib/data";

export type ProjectCardProps = Omit<Project, "id"> & { index: number };

export function ProjectCard({
  title,
  description,
  tagline,
  tags,
  link,
  status = "completed",
  github,
  image,
  slug,
  video,
  index,
}: ProjectCardProps) {
  // "Completed" is the default state of everything here, so saying so is noise.
  // Only the states that change how you read the project get called out.
  const flag =
    status === "wip" ? "In progress" : status === "inactive" ? "Inactive" : null;

  const href = slug ? `/projects/${slug}` : link;
  const meta = flag;

  const titleNode = href ? (
    <Link
      href={href}
      className="text-[19px] leading-tight font-medium tracking-[-0.02em] underline decoration-transparent underline-offset-[6px] transition-[text-decoration-color] duration-200 ease-out group-hover:decoration-border-strong"
    >
      {title}
    </Link>
  ) : (
    <span className="text-[19px] leading-tight font-medium tracking-[-0.02em]">
      {title}
    </span>
  );

  return (
    // Numbered because the list IS ordered — most recent work first.
    <li className="group grid grid-cols-[2rem_1fr] gap-x-1 border-b border-border pb-6 last:border-b-0 last:pb-0">
      <span className="pt-1 font-mono text-[12px] tracking-[0.05em] text-subtle tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          {/* The screenshot lives on hover rather than taking permanent space. */}
          {image ? (
            <HoverPreview src={image} alt={title}>
              {titleNode}
            </HoverPreview>
          ) : (
            titleNode
          )}

          {meta && (
            <span className="flex shrink-0 items-center gap-2 font-mono text-[12px] tracking-[0.05em] text-subtle">
              {status === "wip" && (
                <span className="size-[5px] animate-pulse rounded-full bg-accent" />
              )}
              {meta}
            </span>
          )}
        </div>

        {tagline && (
          <p className="mt-1 flex gap-1.5 text-[15px] text-foreground">
            <span aria-hidden className="text-subtle">
              ↳
            </span>
            {tagline}
          </p>
        )}

        <p className="mt-2 max-w-[30rem] text-[15px] text-muted-foreground text-pretty">
          {description}
        </p>

        {tags.length > 0 && (
          <p className="mt-2.5 font-mono text-[12px] tracking-[0.03em] text-subtle">
            {formatTags(tags.slice(0, 5))}
          </p>
        )}

        {(link || github || video || slug) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            {slug && (
              <Link
                href={`/projects/${slug}`}
                className="link-retract text-[15px] text-accent transition-opacity duration-150 ease-out active:opacity-70"
              >
                Read more
              </Link>
            )}
            {(
              [
                link && { label: "Live", href: link },
                github && { label: "Source", href: github },
                video && { label: "Demo", href: video },
              ].filter(Boolean) as { label: string; href: string }[]
            ).map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-subtle underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color,opacity] duration-150 ease-out hover:text-foreground hover:decoration-border-strong active:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
