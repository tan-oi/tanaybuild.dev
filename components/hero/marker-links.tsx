"use client";

import Link from "next/link";

export type MarkerLink = {
  label: string;
  href: string;
};
function onEnter(e: React.PointerEvent<HTMLAnchorElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  const fromRight = e.clientX > rect.left + rect.width / 2;
  e.currentTarget.style.setProperty(
    "--marker-origin",
    fromRight ? "right" : "left"
  );
}

export function MarkerLinks({ links }: { links: MarkerLink[] }) {
  return (
    <nav
      aria-label="Contact"
      className="rise mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 [animation-delay:.36s]"
    >
      {links.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <Link
            key={link.label}
            href={link.href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            onPointerEnter={onEnter}
            className="marker text-sm text-subtle transition-colors duration-300 hover:text-foreground"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
