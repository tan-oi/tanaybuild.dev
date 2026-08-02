import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { formatTags, projects } from "@/lib/data";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  Cpu,
  Zap,
  Layout,
  Layers,
  ArrowRight,
  GitBranch,
  Map,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";

export async function generateStaticParams() {
  const all = getAllProjects();
  return all.map((project) => ({ slug: project.slug }));
}

const components = { Cpu, Zap, Layout, Layers, ArrowRight, GitBranch, Map };

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

  const links = [
    meta?.link && { label: "Live", href: meta.link },
    meta?.github && { label: "Source", href: meta.github },
    meta?.video && { label: "Demo", href: meta.video },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <h1 className="text-[22px] leading-[1.35] font-medium tracking-[-0.02em] text-balance">
        {project.title}
      </h1>

      <p className="text-muted-foreground mt-4 max-w-[34rem] text-[15px] text-pretty">
        {project.description}
      </p>

      {meta?.tags && meta.tags.length > 0 && (
        <p className="text-subtle mt-4 font-mono text-[12px] tracking-[0.03em]">
          {formatTags(meta.tags)}
        </p>
      )}

      {links.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-foreground hover:decoration-border-strong text-[15px] underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color,opacity] duration-150 ease-out active:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <div className="bg-border mt-10 h-px" />

      <Prose>
        <MDXRemote source={project.content} components={components} />
      </Prose>
    </>
  );
}
