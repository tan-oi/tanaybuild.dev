"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient text-foreground selection:bg-primary selection:text-primary-foreground">
      <main className="max-w-[34rem] mx-auto px-6 pt-20 pb-24 sm:pt-28 font-sans">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <div className="mb-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            All projects
          </span>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
            Listed from my latest obsessions back to my earliest experiments.
          </p>
        </div>

        <ul className="flex flex-col">
          {projects.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.04,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <ProjectCard
                title={item.title}
                description={item.description}
                tags={item.tags}
                link={item.link}
                status={item.status}
                github={item.github}
                image={item.image}
                slug={item.slug}
                video={item.video}
              />
            </motion.li>
          ))}
        </ul>
      </main>
    </div>
  );
}
