import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Tanay Ghoriwala",
  description: "Everything I've built, newest first.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="rise mb-10 [animation-delay:.12s]">
        <h1 className="text-[19px] leading-tight font-medium tracking-[-0.02em]">
          Projects
        </h1>
        <p className="mt-3 max-w-[30rem] text-[15px] text-muted-foreground text-pretty">
          Everything I&apos;ve built, newest first. It&apos;s wild to look back
          and see how far I&apos;ve come, though the road ahead is still long.
        </p>
      </div>

      <ol className="rise flex flex-col gap-6 [animation-delay:.2s]">
        {projects.map((item, i) => (
          <ProjectCard
            key={item.id}
            index={i}
            title={item.title}
            tagline={item.tagline}
            description={item.description}
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
    </>
  );
}
