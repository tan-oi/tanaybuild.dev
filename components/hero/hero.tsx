import { ThemeSwitcher } from "../theme-switcher";
import { MarkerLinks, type MarkerLink } from "./marker-links";

/** Bump this by hand when the page content actually changes. */
const LAST_UPDATED = "July 2026";

const links: MarkerLink[] = [
  { label: "Résumé", href: "/resume.pdf" },
  { label: "Email", href: "mailto:tan.dev.x@gmail.com" },
  { label: "GitHub", href: "https://github.com/tan-oi" },
  { label: "X", href: "https://x.com/tan0i_" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tanay-ghoriwala" },
];

export function Hero() {
  return (
    <>
      <div className="mb-10">
        <header className="rise mb-10 flex items-start justify-between gap-4 [animation-delay:.04s]">
          <div>
            <h2 className="text-[19px] leading-tight font-medium tracking-[-0.02em]">
              Tanay Ghoriwala
            </h2>
            <span className="mt-1.5 block font-mono text-[11px] tracking-[0.05em] text-subtle">
              Updated {LAST_UPDATED}
            </span>
          </div>
          <div className="pt-2">
            <ThemeSwitcher />
          </div>
        </header>

        <h1 className="rise mb-4 text-[14px] leading-[1.7] font-normal [animation-delay:.12s]">
          I&apos;m a software developer based in India, i like building and
          playing around with stupid things on my ide/cc on some very
          questionable hours
        </h1>

        <p className="rise text-[14px] mb-4 text-muted-foreground text-pretty [animation-delay:.2s]">
          I like reverse-engineering things. Spent days in{" "}
          <a
            className="link-retract text-foreground"
            href="https://chroniclehq.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chronicle
          </a>
          &apos;s network tab working out how it works, got obsessed, built my
          own mini version, and eventually got the opportunity to work there.
        </p>

        <MarkerLinks links={links} />
      </div>
    </>
  );
}
