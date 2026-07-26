"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { TooltipWrapper } from "../ui/tooltip-wrapper";
import { contactTags, experiences } from "@/lib/data";
import { ICON_REGISTRY } from "../icons/registry";
import Link from "next/link";
import CTA from "../cta";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06, ease: EASE_OUT },
  }),
};

export function Hero() {
  const hasCurrentRole = experiences.some(
    (e) => e.end.toLowerCase() === "present"
  );
  const isOpenToWork = experiences.length > 0 && !hasCurrentRole;

  return (
    <section className="mb-20 flex flex-col items-start gap-7">
      <div className="space-y-3">
        {isOpenToWork && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 pl-2 pr-2.5 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-primary font-mono font-medium">
              Open to work
            </span>
          </motion.div>
        )}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          Hey there,
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="text-4xl sm:text-[2.75rem] font-semibold tracking-tight text-primary leading-[1.1]"
        >
          I&apos;m Tanay
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="text-muted-foreground leading-relaxed max-w-[30ch] pt-1"
        >
          I build fullstack products — mostly Next.js, careful interfaces,
          and enough caffeine to make it work. I learn best by taking things
          apart to see how they tick.
        </motion.p>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="flex flex-col gap-6"
      >
        <div className="flex gap-2">
          <Link href={`/contact`}>
            <button className="pressable py-2 px-4 text-sm bg-secondary text-secondary-foreground rounded-xl flex gap-2 items-center transition-colors duration-150 ease-[var(--ease-out)] hover:bg-secondary/80 group w-fit cursor-pointer">
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150 ease-[var(--ease-out)]" />
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
                  <div className="pressable size-5 text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary">
                    <IconComponent />
                  </div>
                </Link>
              </TooltipWrapper>
            ) : null;
          })}

          <TooltipWrapper content="Email">
            <Link href={`mailto:tan.dev.x@gmail.com`}>
              <div className="pressable text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary">
                <Mail className="size-5" />
              </div>
            </Link>
          </TooltipWrapper>
        </div>
      </motion.div>
    </section>
  );
}
