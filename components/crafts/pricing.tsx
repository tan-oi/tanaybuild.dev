"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Pricing() {
  const [selected, setSelected] = useState(0);
  const [premium, setPremium] = useState(0);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
      <div className="relative w-full max-w-[300px] origin-center scale-100">
        <div className="relative h-14 rounded-lg border border-zinc-800 bg-zinc-900 p-1">
          <motion.div
            animate={{
              x: selected === 0 ? 2 : "100%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-1 bottom-1 rounded-md bg-white shadow-sm"
            style={{ width: "calc(50% - 4px)" }}
          />

          <div className="relative z-10 grid h-full grid-cols-2">
            <motion.button
              animate={{
                color: selected === 0 ? "#000" : "#a1a1aa",
              }}
              onClick={() => setSelected(0)}
              className="relative flex items-center justify-center px-6 text-sm font-medium transition-colors"
            >
              Free
            </motion.button>

            <div className="relative flex items-center">
              <AnimatePresence mode="wait">
                {selected === 0 ? (
                  <motion.button
                    key="premium-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setSelected(1)}
                    className="flex w-full flex-col justify-center px-10 text-left text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-300"
                  >
                    <div>Premium</div>
                    <div className="text-xs font-normal text-zinc-500">
                      Solo / Team
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="premium-options"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="relative flex h-10 w-full items-center rounded-md p-0.5"
                  >
                    <motion.div
                      animate={{
                        x: premium === 0 ? 4 : "calc(100% - 4px)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute top-0 bottom-0 w-1/2 rounded-sm bg-black"
                      style={{ width: "calc(50% - 2px)" }}
                    />

                    <div className="relative z-10 grid h-full w-full grid-cols-2">
                      <motion.button
                        animate={{
                          color: premium === 0 ? "#fff" : "#71717a",
                        }}
                        onClick={() => setPremium(0)}
                        className="flex items-center justify-center text-xs font-medium transition-colors"
                      >
                        Solo
                      </motion.button>

                      <motion.button
                        animate={{
                          color: premium === 1 ? "#fff" : "#71717a",
                        }}
                        onClick={() => setPremium(1)}
                        className="flex items-center justify-center text-xs font-medium transition-colors"
                      >
                        Team
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-zinc-400">
          Current:{" "}
          {selected === 0
            ? "Free"
            : `Premium ${premium === 0 ? "Solo" : "Team"}`}
        </div>
      </div>
    </div>
  );
}
