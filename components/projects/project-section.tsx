import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <>
      <section className="mb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-sm text-muted-foreground">Featured</span>
            <h2 className="text-2xl text-primary font-semibold">Projects</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-8">
          {projects.slice(0, 4).map((item, i) => (
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
      </section>
    </>
  );
}
