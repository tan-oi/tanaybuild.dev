const statusItems = [
  {
    label: "Now",
    pulse: true,
    dot: "bg-emerald-500",
    ping: "bg-emerald-400",
    text: (
      <>
        Trying to understand how{" "}
        <span className="font-medium text-foreground">
          search retrieval / information retrieval
        </span>{" "}
        works.
      </>
    ),
  },
  {
    label: "Next",
    dot: "bg-blue-500",
    text: (
      <>
        Learning <span className="font-medium text-foreground">Golang</span>{" "}
        and planning to build a game using{" "}
        <span className="font-medium text-foreground">Phaser</span>.
      </>
    ),
  },
  {
    label: "Free-will shenanigans",
    dot: "bg-purple-500",
    text: (
      <>
        Thinking of learning{" "}
        <span className="font-medium text-foreground">probability</span> bc
        why not?
      </>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="mb-20">
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          About
        </span>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        I like building things, and I&apos;ve got a permanent itch to
        reverse-engineer whatever I&apos;m using.{" "}
        <span className="italic text-foreground">
          Translation: I open the network tab on every new site just to watch
          how it works.
        </span>
      </p>

      <ul className="mt-2 flex flex-col">
        {statusItems.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-3 py-3.5 border-t border-border/50"
          >
            <span className="relative mt-1.5 flex size-1.5 shrink-0">
              {item.pulse && (
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${item.ping}`}
                />
              )}
              <span
                className={`relative inline-flex size-1.5 rounded-full ${item.dot}`}
              />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-foreground">
                {item.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
