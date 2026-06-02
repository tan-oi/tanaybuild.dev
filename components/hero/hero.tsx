import { Mail, ArrowUpRight } from "lucide-react";

import { TooltipWrapper } from "../ui/tooltip-wrapper";
import { contactTags, experiences } from "@/lib/data";
import { ICON_REGISTRY } from "../icons/registry";
import Link from "next/link";
import CTA from "../cta";

export function Hero() {
  const hasCurrentRole = experiences.some(
    (e) => e.end.toLowerCase() === "present"
  );
  const isOpenToWork = experiences.length > 0 && !hasCurrentRole;

  return (
    <section className="mb-24 flex flex-col items-start gap-6">
      <div className="space-y-2">
        {isOpenToWork && (
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 mb-1">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-sky-500" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-sky-400 font-mono font-medium">
              Open to work
            </span>
          </div>
        )}
        <h1 className="font-mono text-base font-medium tracking-tight text-primary">
          <span>Hey there,</span>

          <span className="tracking-tight text-2xl ml-2">I'm Tanay </span>
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-md">
          I write <span className="text-accent font-bold">code</span> with a
          sprinkle of chaos and a lot of caffeine. Focused on making things
          cool, fun to use, and i learn things by messing around on the internet
          haha.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <Link href={`/contact`}>
            <button className="py-2 px-4 text-sm bg-secondary text-secondary-foreground rounded-xl flex gap-2 items-center hover:bg-secondary/80 transition-all group w-fit">
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </Link>

          <CTA />
        </div>

        <div className="flex gap-3 items-center">
          {contactTags.map((item, i) => {
            const IconComponent =
              ICON_REGISTRY[item.iconTag as keyof typeof ICON_REGISTRY];

            return IconComponent ? (
              <TooltipWrapper
                key={i}
                content={
                  <p className="capitalize">{item.iconTag.replace("-", " ")}</p>
                }
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="size-5 text-muted-foreground hover:text-primary transition-colors">
                    <IconComponent />
                  </div>
                </Link>
              </TooltipWrapper>
            ) : null;
          })}

          <TooltipWrapper content="Email">
            <Link href={`mailto:tan.dev.x@gmail.com`}>
              <div className="text-muted-foreground hover:text-primary transition-colors">
                <Mail />
              </div>
            </Link>
          </TooltipWrapper>
        </div>
      </div>
    </section>
  );
}
