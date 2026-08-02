"use client";

import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type MarkerLink = {
  label: string;
  href: string;
  title?: string;
};

function onEnter(e: React.PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const fromRight = e.clientX > rect.left + rect.width / 2;
  e.currentTarget.style.setProperty(
    "--marker-origin",
    fromRight ? "right" : "left",
  );
}

const SHARED =
  "marker text-sm transition-colors duration-300 hover:text-foreground";

export function MarkerLinks({ links }: { links: MarkerLink[] }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${address}`;
    }
  }, []);

  return (
    <nav
      aria-label="Contact"
      className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2"
    >
      {links.map((link) => {
        if (link.href.startsWith("mailto:")) {
          const address = link.href.replace("mailto:", "");
          return (
            <button
              key={link.label}
              type="button"
              onClick={() => copyEmail(address)}
              onPointerEnter={onEnter}
              title={address}
              data-cuelume-hover="whisper"
              data-cuelume-toggle="success"
              className={`${SHARED} cursor-pointer ${
                copied ? "text-foreground" : "text-subtle"
              }`}
            >
              {copied ? "Copied" : link.label}
            </button>
          );
        }

        const external =
          link.href.startsWith("http") || link.href.endsWith(".pdf");
        const linkNode = (
          <Link
            href={link.href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            onPointerEnter={onEnter}
            data-cuelume-hover="whisper"
            className={`${SHARED} text-subtle`}
          >
            {link.label}
          </Link>
        );
        if (!link.title) return <Fragment key={link.label}>{linkNode}</Fragment>;
        return (
          <Tooltip key={link.label} delayDuration={200}>
            <TooltipTrigger asChild>{linkNode}</TooltipTrigger>
            <TooltipContent
              sideOffset={4}
              className="bg-accent text-accent-foreground"
            >
              {link.title}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  );
}
