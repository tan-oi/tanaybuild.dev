"use client";
import { useState, useEffect } from "react";

export default function LocalTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatKolkata = (date: Date, options: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      ...options,
    }).format(date);
  };

  const formattedTime = formatKolkata(time, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="fixed top-6 right-6 sm:top-10 sm:right-10 z-50">
      <div className="bg-transparent border border-1 border-muted-foreground p-2 rounded-xl">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground font-mono">
          <div className="flex items-center bg-none gap-2">
            <span>{formattedTime}</span>
            <span className="text-xs uppercase font-bold tracking-wider">
              CCU, IN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
