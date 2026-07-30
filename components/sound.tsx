"use client";

import { useCallback, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { bind, play, setEnabled, setVolume } from "cuelume";

/**
 * Wires up cuelume's data-cuelume-* attributes and offers a mute switch.
 * The choice isn't persisted — sound comes back on with every new visit.
 */
export function SoundToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    bind();
    setVolume(0.5);
  }, []);

  const toggle = useCallback(() => {
    setOn((prev) => {
      const next = !prev;
      setEnabled(next);
      // Confirm in the medium being switched on.
      if (next) play("ready");
      return next;
    });
  }, []);

  const Icon = on ? Volume2 : VolumeX;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn sound off" : "Turn sound on"}
      title={on ? "Sound on" : "Sound off"}
      className={`cursor-pointer transition-colors duration-300 hover:text-foreground ${
        on ? "text-foreground" : "text-subtle"
      }`}
    >
      <Icon className="size-[17px]" strokeWidth={1.75} aria-hidden />
    </button>
  );
}
