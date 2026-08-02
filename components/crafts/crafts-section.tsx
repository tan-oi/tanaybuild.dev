import MotionDropdown from "./dropdown";
import Moving from "./moving";
import Pricing from "./pricing";

const CRAFTS = [
  {
    name: "Dropdown",
    note: "a select that springs open, and remembers your pick",
    demo: <MotionDropdown />,
    // The open menu escapes its frame, so this one can't be clipped.
    clip: false,
  },
  {
    name: "Pricing",
    note: "a plan switch where the pill slides between options",
    demo: <Pricing />,
    clip: true,
  },
  {
    name: "Glass card",
    note: "panels swinging behind frosted glass, on a loop",
    demo: <Moving />,
    clip: true,
  },
];

export default function CraftSection() {
  return (
    <section aria-labelledby="crafts" className="mb-20">
      {/* Same label-and-rule header as Experience and Projects. */}
      <div className="mb-4 flex items-center gap-3">
        <span
          id="crafts"
          className="text-accent shrink-0 font-mono text-[12px] tracking-[0.05em]"
        >
          Crafts
        </span>
        <span className="bg-border h-px flex-1" />
      </div>

      <p className="text-muted-foreground mb-6 max-w-[30rem] text-[15px] text-pretty">
        Small UI experiments, powered by my new found love towards motion.
      </p>

      <ul className="flex flex-col gap-6">
        {CRAFTS.map((craft, i) => (
          <li key={craft.name}>
            {/* The demo is the content, so the frame stays a hairline — no
                card, no fill, nothing competing with what's inside it. */}
            <div
              className={`ring-border relative grid aspect-video place-items-center rounded-lg ring-1 ring-inset ${
                craft.clip ? "overflow-hidden" : "z-20"
              }`}
            >
              {craft.demo}
            </div>
            <p className="text-subtle mt-2.5 flex gap-2 font-mono text-[12px] tracking-[0.03em]">
              <span className="tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                {craft.name} — {craft.note}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
