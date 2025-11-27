import MotionDropdown from "./dropdown";
import Moving from "./moving";
import Pricing from "./pricing";

export default function CraftSection() {
  return (
    <>
      <section className="mb-24">
        <div className="mb-8">
          <h2 className="text-2xl text-primary font-semibold">Featured</h2>
          <p className="text-sm text-secondary">smol ui crafts</p>
          <p className="italic text-muted-foreground">
            powered by my new found love towards motion
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="relative z-20 aspect-video rounded-2xl border border-border flex items-center justify-center">
            <MotionDropdown />
          </div>
          <div className="overflow-hidden aspect-video rounded-2xl  border border-border flex items-center justify-center">
            <Pricing />
          </div>
          <div className="overflow-hidden aspect-video rounded-2xl x border border-border flex items-center justify-center">
            <Moving />
          </div>
        </div>
      </section>
    </>
  );
}
