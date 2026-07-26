"use client";
import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time
    ? new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(time)
    : "--:--:--";

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
      <span className="relative flex size-1.5" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
      </span>
      <span>{formattedTime}</span>
      <span className="uppercase tracking-wider text-muted-foreground/70">
        CCU, IN
      </span>
    </div>
  );
}
