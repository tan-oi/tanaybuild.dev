"use client";

import { useRef, useState } from "react";

interface HoverPreviewProps {
  src: string;
  alt?: string;
  children: React.ReactNode;
}

export default function HoverPreview({
  src,
  alt,
  children,
}: HoverPreviewProps) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={onMove}
      className="relative"
    >
      {children}

      <div
        aria-hidden
        className={`pointer-events-none absolute z-20 hidden transition-all duration-200 ease-out md:block ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-1 scale-95 opacity-0"
        }`}
        style={{
          left: pos.x + 24,
          top: pos.y + 24,
          width: 320,
        }}
      >
        <div className="border-border/60 bg-card rotate-[-1.5deg] overflow-hidden rounded-lg border shadow-2xl shadow-black/40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt ?? ""} className="block h-auto w-full" />
        </div>
      </div>
    </div>
  );
}
