import Link from "next/link";
import { ZeroDot } from "@/components/zero-dot";

export const metadata = {
  title: "Page not found — Tanay Ghoriwala",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col justify-center">
      <h1 className="w-fit cursor-default text-[clamp(7rem,24vw,14rem)] leading-none font-medium tracking-[-0.045em]">
        4
        <ZeroDot className="text-accent" />4
      </h1>

      <p className="text-subtle mt-6 flex flex-wrap items-center gap-2 font-mono text-[12px] tracking-[0.05em]">
        skill issue.
      </p>

      <p className="text-muted-foreground mt-12 max-w-md text-[15px] text-pretty">
        try{" "}
        <Link
          href="/"
          data-cuelume-hover="whisper"
          className="link-retract text-foreground"
        >
          home
        </Link>
        , or see what&apos;s on{" "}
        <Link
          href="/projects"
          data-cuelume-hover="whisper"
          className="link-retract text-foreground"
        >
          projects
        </Link>{" "}
        and{" "}
        <Link
          href="/crafts"
          data-cuelume-hover="whisper"
          className="link-retract text-foreground"
        >
          crafts
        </Link>
        . still stuck?{" "}
        <a
          href="mailto:tan.dev.x@gmail.com"
          data-cuelume-hover="whisper"
          className="link-retract text-foreground"
        >
          email me
        </a>
        .
      </p>
    </div>
  );
}
