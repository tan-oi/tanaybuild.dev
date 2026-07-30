import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import Link from "next/link";

export default function ProjectSection() {
  const featured = projects.filter((p) => p.status !== "inactive").slice(0, 2);
  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="projects" className="mb-12">
      {/* Same label-and-rule header as Experience; "View all" sits at the end
          of the rule rather than as a second competing heading. */}
      <div className="mb-4 flex items-center gap-3">
        <span
          id="projects"
          className="shrink-0 font-mono text-[12px] tracking-[0.05em] text-accent"
        >
          Projects
        </span>
        <span className="h-px flex-1 bg-border" />
        <Link
          href="/projects"
          className="shrink-0 font-mono text-[12px] tracking-[0.05em] text-subtle transition-colors duration-300 hover:text-foreground"
        >
          View all
        </Link>
      </div>

      <ol className="flex flex-col gap-6">
        {featured.map((item, i) => (
          <ProjectCard
            key={item.id}
            index={i}
            title={item.title}
            description={item.description}
            tagline={item.tagline}
            tags={item.tags}
            link={item.link}
            status={item.status}
            github={item.github}
            image={item.image}
            slug={item.slug}
            video={item.video}
          />
        ))}
      </ol>

      {/* Crafts lives on its own page — the demos are heavy enough that they
          shouldn't be the last thing on the home page. */}
      <Link
        href="/crafts"
        className="group mt-12 inline-flex items-center gap-1.5 text-[15px] text-subtle transition-colors duration-300 hover:text-foreground"
      >
        Some motion experiments, when I feel creative
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 ease-[cubic-bezier(.23,1,.32,1)] group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </section>
  );
}
