import AboutSection from "@/components/about-section";
import CraftSection from "@/components/crafts/crafts-section";

import { Hero } from "@/components/hero/hero";
import LocalTime from "@/components/local-time";

import ProjectSection from "@/components/projects/project-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient text-foreground selection:bg-primary selection:text-primary-foreground ">
      <main className="max-w-xl mx-auto px-6 py-24 font-sans">
        <Hero />
        <ProjectSection />

        <AboutSection />

        <CraftSection />
      </main>

    
    </div>
  );
}
