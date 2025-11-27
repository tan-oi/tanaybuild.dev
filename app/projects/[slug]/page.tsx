import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Cpu, Zap, Layout, Layers, ArrowRight, ArrowLeft, GitBranch,Map } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const components = {
  Cpu,
  Zap,
  Layout,
  Layers,
  ArrowRight,
  GitBranch,
  Map
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return (
    <div className="bg-gradient min-h-screen">
      <div className=" max-w-4xl mx-auto px-4 py-12">
        <Link href={"/projects"} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-6">
          <ArrowLeft className="size-4"/>
          Back to projects

        </Link>
        <div className="prose prose-invert prose-zinc max-w-none">
          <MDXRemote source={project.content} components={components} />
        </div>
      </div>
    </div>
  );
}
