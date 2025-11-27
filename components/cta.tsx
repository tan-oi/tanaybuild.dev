"use client";
import { getCalApi } from "@calcom/embed-react";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
export default function CTA() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <button
      className="py-2 px-4 text-sm bg-muted text-secondary-foreground rounded-xl flex gap-2 items-center hover:bg-secondary/80 transition-all group w-fit"
      data-cal-namespace="30min"
      data-cal-link="tan-yay/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      <span>Book a call</span>
      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
