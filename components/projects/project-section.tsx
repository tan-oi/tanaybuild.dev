"use client";

import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function ProjectSection() {
  const featured = projects.slice(0, 2);

  return (
    <section className="mb-20">
      <div className="mb-6 flex items-baseline justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Projects
        </span>
        <Link
          href="/projects"
          className="flex items-center gap-1 text-xs text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
        >
          View all <ArrowRight className="size-3" />
        </Link>
      </div>

      <ul className="flex flex-col">
        {featured.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.4,
              delay: i * 0.05,
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
    </section>
  );
}
