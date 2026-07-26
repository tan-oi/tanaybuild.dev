import { Globe, ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import Github from "../icons/github";
import { TooltipWrapper } from "../ui/tooltip-wrapper";
import { RowShell } from "../ui/row-shell";
import HoverPreview from "../hover-preview";
import { Project } from "@/lib/data";

export type ProjectCardProps = Omit<Project, "id">;

const statusConfig = {
  wip: {
    label: "In progress",
    color: "bg-emerald-400 animate-pulse",
  },
  completed: {
    label: "Completed",
    color: "bg-primary/70",
  },
  inactive: {
    label: "Inactive",
    color: "bg-muted-foreground/40",
  },
};

function IconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <TooltipWrapper content={label}>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="pressable flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary">
          {icon}
        </div>
      </Link>
    </TooltipWrapper>
  );
}

export function ProjectCard({
  title,
  description,
  tags,
  link = "#",
  status = "completed",
  github,
  image,
  slug,
  video,
}: ProjectCardProps) {
  const currentStatus = statusConfig[status];

  const row = (
    <RowShell>
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex min-w-0 items-baseline gap-2">
          <h3 className="shrink-0 font-medium text-foreground transition-colors duration-150 ease-[var(--ease-out)] group-hover:text-primary">
            {title}
          </h3>
          <span className="shrink-0 text-muted-foreground/40">—</span>
          <p className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <div className={`size-1.5 rounded-full ${currentStatus.color}`} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {currentStatus.label}
          </span>
        </div>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-0.5">
          {github && (
            <IconLink href={github} label="Source code" icon={<Github className="size-3.5" />} />
          )}
          {video && (
            <IconLink href={video} label="Watch a demo" icon={<Play className="size-3.5" />} />
          )}
          <IconLink href={link} label="Website" icon={<Globe className="size-3.5" />} />
          {slug && (
            <Link
              href={`/projects/${slug}`}
              className="ml-1 inline-flex items-center gap-1 text-xs font-medium text-foreground/80 transition-colors duration-150 ease-[var(--ease-out)] group-hover:text-primary"
            >
              Details
              <ArrowUpRight className="size-3 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 ease-[var(--ease-out)] group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          )}
        </div>
      </div>
    </RowShell>
  );

  if (!image) return row;
  return (
    <HoverPreview src={image} alt={title}>
      {row}
    </HoverPreview>
  );
}
