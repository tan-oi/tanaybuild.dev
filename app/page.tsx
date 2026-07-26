import AboutSection from "@/components/about-section";
import CraftSection from "@/components/crafts/crafts-section";
import ExperienceSection from "@/components/experience-section";

import { Hero } from "@/components/hero/hero";

import ProjectSection from "@/components/projects/project-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient text-foreground selection:bg-primary selection:text-primary-foreground">
      <main className="max-w-[34rem] mx-auto px-6 pt-20 pb-24 sm:pt-28 font-sans">
        <Hero />
        <ExperienceSection />
        <ProjectSection />
        <AboutSection />
        <CraftSection />
      </main>
    </div>
  );
}
