import MotionDropdown from "./dropdown";
import Moving from "./moving";
import Pricing from "./pricing";

export default function CraftSection() {
  return (
    <section className="mb-20">
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Crafts
        </span>
        <p className="text-sm text-muted-foreground mt-2">
          Small UI experiments — mostly an excuse to play with{" "}
          <span className="italic text-foreground">motion</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="relative z-20 aspect-video rounded-xl border border-border/60 flex items-center justify-center">
          <MotionDropdown />
        </div>
        <div className="overflow-hidden aspect-video rounded-xl border border-border/60 flex items-center justify-center">
          <Pricing />
        </div>
        <div className="overflow-hidden aspect-video rounded-xl border border-border/60 flex items-center justify-center">
          <Moving />
        </div>
      </div>
    </section>
  );
}
