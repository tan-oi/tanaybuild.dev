import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function RowShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative -ml-4 pl-4 py-5 border-b border-border/60 last:border-b-0",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute left-0 top-5 bottom-5 w-px bg-primary origin-top scale-y-0 transition-transform duration-200 ease-[var(--ease-out)] group-hover:scale-y-100"
      />
      {children}
    </div>
  );
}
