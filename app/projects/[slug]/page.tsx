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
  wip: { label: "In progress", color: "bg-emerald-400 animate-pulse" },
  completed: { label: "Completed", color: "bg-primary/70" },
  inactive: { label: "Inactive", color: "bg-muted-foreground/40" },
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
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-24 sm:pt-20">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
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

          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Project
          </span>

          <div className="flex items-start justify-between gap-4 flex-wrap mt-2">
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                {project.title}
              </h1>
              {status && (
                <div className="flex items-center gap-1.5 mt-2">
                  <div className={`size-1.5 rounded-full ${status.color}`}></div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {status.label}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {meta?.link && (
                <TooltipWrapper content="Website">
                  <Link href={meta.link} target="_blank">
                    <button className="pressable p-2 rounded-lg text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary hover:bg-muted cursor-pointer">
                      <Globe className="size-5" />
                    </button>
                  </Link>
                </TooltipWrapper>
              )}
              {meta?.github && (
                <TooltipWrapper content="Source Code">
                  <Link href={meta.github} target="_blank">
                    <button className="pressable p-2 rounded-lg text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary hover:bg-muted cursor-pointer">
                      <Github className="size-5" />
                    </button>
                  </Link>
                </TooltipWrapper>
              )}
              {meta?.video && (
                <TooltipWrapper content="Watch a video demo">
                  <Link href={meta.video} target="_blank">
                    <button className="pressable p-2 rounded-lg text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary hover:bg-muted cursor-pointer">
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
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60"
                >
                  {tag}
                </span>
              ))}
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
