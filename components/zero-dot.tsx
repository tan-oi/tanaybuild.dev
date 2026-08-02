"use client";

import { useRef, useState } from "react";

/** The accent dot inside the 404's zero. Rests pulsing at center; drifts
 *  toward the cursor while you hover the zero — the dot is lost too. Click
 *  it and it drags the whole site to a different theme with it. */
export function ZeroDot({ className }: { className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const max = rect.width * 0.14;
    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const d = Math.hypot(dx, dy);
    if (d > max) {
      dx = (dx / d) * max;
      dy = (dy / d) * max;
    }
    setOffset({ x: dx, y: dy });
  };

  const onLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      type="button"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-cuelume-press="press"
      data-cuelume-release="release"
      aria-label="Cycle the site theme"
      title="it's lost too — click it, see where it lands"
      className={`relative inline-block cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[inherit] ${className ?? ""}`}
    >
      0
      <span
        aria-hidden
        className="bg-accent absolute top-1/2 left-1/2 size-[0.17em] rounded-full transition-transform duration-200 ease-out"
        style={{
          transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))`,
        }}
      />
    </button>
  );
}
