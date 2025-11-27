import { Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Github from "../icons/github";
import { ICON_REGISTRY } from "../icons/registry";
import { TooltipWrapper } from "../ui/tooltip-wrapper";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status?: "completed" | "wip" | "inactive";
  github?: string;
  image?: string;
  slug: string;
}

const statusConfig = {
  wip: {
    label: "Work in progress",
    color: "bg-emerald-400 animate-pulse",
  },
  completed: {
    label: "Completed",
    color: "bg-blue-500",
  },
  inactive: {
    label: "Inactive",
    color: "bg-slate-500",
  },
};

export function ProjectCard({
  title,
  description,
  tags,
  link = "#",
  status = "completed",
  github,
  image,
  slug,
}: ProjectCardProps) {
  const currentStatus = statusConfig[status];

  return (
    <div className="group flex flex-col rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
      <div className="relative w-full aspect-video bg-muted">
        <img src={image as string} alt={title} className="object-cover" />
      </div>

      <div className="flex flex-col p-4 gap-2 h-full">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-1 shrink-0">
            <TooltipWrapper content="Website">
              <Link href={link} target="_blank">
                <Button
                  size="icon-sm"
                  className="text-muted-foreground hover:text-primary bg-transparent hover:bg-transparent hover:scale-110 cursor-pointer"
                >
                  <Globe className="size-5" />
                </Button>
              </Link>
            </TooltipWrapper>
            {github && (
              <TooltipWrapper content="Source Code">
                <Link href={github} target="_blank">
                  <Button
                    size="icon-sm"
                    className="text-muted-foreground hover:text-primary bg-transparent hover:bg-transparent hover:scale-110 cursor-pointer"
                  >
                    <Github className="size-5 font-bold" />
                  </Button>
                </Link>
              </TooltipWrapper>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="mt-auto pt-2 flex flex-col gap-2">
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">
            Technologies
          </span>
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tag) => {
              const IconComponent =
                ICON_REGISTRY[tag as keyof typeof ICON_REGISTRY];
              return IconComponent ? (
                <TooltipWrapper
                  key={tag}
                  content={
                    <p className="capitalize">{tag.replace("-", " ")}</p>
                  }
                >
                  <div className="size-5 text-muted-foreground hover:text-primary transition-colors cursor-help">
                    <IconComponent />
                  </div>
                </TooltipWrapper>
              ) : null;
            })}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 mt-2 border-t border-border/50">
          <div className="flex items-center gap-1.5">
            <div className={`size-2 rounded-full ${currentStatus.color}`}></div>
            <p className="text-xs font-medium text-muted-foreground">
              {currentStatus.label}
            </p>
          </div>
          <Link
            href={`/projects/${slug}`}
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium hover:text-primary transition-colors ml-auto"
          >
            More details
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
