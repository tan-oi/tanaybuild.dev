export default function AboutSection() {
  return (
    <section className="mb-24">
      <div className="mb-8">
        <h2 className="text-2xl text-primary font-semibold">About me</h2>
      </div>
      <p className="text-muted-foreground leading-loose">
        Hey, i'm Tanay, who likes building stuff, and probably has this eternal
        hunch for wanting to reverse engineer things on web{" "}
        <span className="italic text-accent">
          (i'm 100% opening the networks tab on any new website to just try and
          understand the flow lol)
        </span>
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-muted rounded-xl border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <h3 className="text-sm font-medium text-foreground">Now</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building <span className="text-foreground font-medium">PPT</span>{" "}
            and diving deep into{" "}
            <span className="text-foreground font-medium">System Design</span>{" "}
            patterns.
          </p>
        </div>

        <div className="p-4 bg-muted rounded-xl border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-2 rounded-full bg-blue-500"></div>
            <h3 className="text-sm font-medium text-foreground">Next</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Learning <span className="text-foreground font-medium">Golang</span>{" "}
            and planning to build a game using{" "}
            <span className="text-foreground font-medium">Phaser</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
