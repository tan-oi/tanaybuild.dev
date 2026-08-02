import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Tanay Ghoriwala",
  description: "Everything I've built, newest first.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-[19px] leading-tight font-medium tracking-[-0.02em]">
          Projects
        </h1>
        <p className="text-muted-foreground mt-3 max-w-[30rem] text-[15px] text-pretty">
          Everything I&apos;ve built, newest first. It&apos;s wild to look back
          and see how far I&apos;ve come, though the road ahead is still long.
        </p>
      </div>

      <ol className="flex flex-col gap-6">
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
