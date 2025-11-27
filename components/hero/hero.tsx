import { Mail, ArrowUpRight } from "lucide-react";

import { TooltipWrapper } from "../ui/tooltip-wrapper";
import { contactTags } from "@/lib/data";
import { ICON_REGISTRY } from "../icons/registry";
import Link from "next/link";
import CTA from "../cta";

export function Hero() {
  return (
    <section className="mb-24 flex flex-col items-start gap-6">
      <div className="space-y-2">
        <h1 className="font-mono text-base font-medium tracking-tight text-primary">
          <span>Hey there,</span>

          <span className="tracking-tight text-2xl ml-2">I'm Tanay </span>
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-md">
          I write <span className="text-secondary font-bold">code</span> with a
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
            <Link href={`mailto:tanay.dev.x@gmail.com`}>
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
