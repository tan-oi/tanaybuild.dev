import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { projects } from "@/lib/data";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  Cpu,
  Zap,
  Layout,
  Layers,
  ArrowRight,
  ArrowLeft,
  GitBranch,
  Map,
  Globe,
  Play,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Github from "@/components/icons/github";
import { ICON_REGISTRY } from "@/components/icons/registry";
import { TooltipWrapper } from "@/components/ui/tooltip-wrapper";

export async function generateStaticParams() {
  const all = getAllProjects();
  return all.map((project) => ({ slug: project.slug }));
}

const components = {
  Cpu,
  Zap,
  Layout,
  Layers,
  ArrowRight,
  GitBranch,
  Map,
};

const statusConfig = {
  wip: { label: "Work in progress", color: "bg-emerald-400 animate-pulse" },
  completed: { label: "Completed", color: "bg-blue-500" },
  inactive: { label: "Inactive", color: "bg-slate-500" },
} as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }
  if (!project) notFound();

  const meta = projects.find((p) => p.slug === slug);
  const status = meta?.status ? statusConfig[meta.status] : null;

  return (
    <div className="bg-gradient min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <header className="mb-10 pb-8 border-b border-border/50">
          {meta?.image && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/50 bg-muted mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={meta.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                {project.title}
              </h1>
              {status && (
                <div className="flex items-center gap-1.5 mt-2">
                  <div className={`size-2 rounded-full ${status.color}`}></div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {status.label}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {meta?.link && (
                <TooltipWrapper content="Website">
                  <Link href={meta.link} target="_blank">
                    <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors cursor-pointer">
                      <Globe className="size-5" />
                    </button>
                  </Link>
                </TooltipWrapper>
              )}
              {meta?.github && (
                <TooltipWrapper content="Source Code">
                  <Link href={meta.github} target="_blank">
                    <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors cursor-pointer">
                      <Github className="size-5" />
                    </button>
                  </Link>
                </TooltipWrapper>
              )}
              {meta?.video && (
                <TooltipWrapper content="Watch a video demo">
                  <Link href={meta.video} target="_blank">
                    <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors cursor-pointer">
                      <Play className="size-5" />
                    </button>
                  </Link>
                </TooltipWrapper>
              )}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-5 max-w-2xl">
            {project.description}
          </p>

          {meta?.tags && meta.tags.length > 0 && (
            <div className="mt-6 flex flex-col gap-2">
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2 items-center">
                {meta.tags.map((tag) => {
                  const Icon =
                    ICON_REGISTRY[tag as keyof typeof ICON_REGISTRY];
                  return Icon ? (
                    <TooltipWrapper
                      key={tag}
                      content={
                        <p className="capitalize">{tag.replace("-", " ")}</p>
                      }
                    >
                      <div className="size-5 text-muted-foreground hover:text-primary transition-colors cursor-help">
                        <Icon />
                      </div>
                    </TooltipWrapper>
                  ) : (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        <article className="prose prose-invert prose-zinc max-w-none selection:bg-primary selection:text-primary-foreground prose-headings:text-primary prose-headings:font-semibold prose-h1:hidden prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-em:text-foreground/90 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-hr:border-border/50 prose-li:text-muted-foreground prose-li:marker:text-primary/50 prose-blockquote:border-l-primary/50 prose-blockquote:text-muted-foreground">
          <MDXRemote source={project.content} components={components} />
        </article>
      </div>
    </div>
  );
}
