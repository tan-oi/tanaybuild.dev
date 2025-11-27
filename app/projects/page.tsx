import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient text-foreground selection:bg-primary selection:text-primary-foreground">
      <main className="max-w-4xl mx-auto px-6 py-24 font-sans">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
          <h1 className="text-3xl text-primary font-semibold mb-2">
            All Projects
          </h1>
          <div className="space-y-4 max-w-2xl">
            <p className="text-muted-foreground leading-relaxed">
              A collection of things I've built. It's wild to look back and see
              how far I've come, though the road ahead is still long.
            </p>
            <p className="text-muted-foreground text-sm italic">
              (Listed chronologically, from my latest obsessions back to my
              earliest experiments.)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={item.link}
              status={item.status}
              github={item.github}
              image={item.image}
              slug={item.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
