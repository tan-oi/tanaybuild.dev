"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Pricing() {
  const [selected, setSelected] = useState(0);
  const [premium, setPremium] = useState(0);

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden">
      <div className="relative w-full max-w-[300px] scale-100 origin-center">
        <div className="relative bg-zinc-900 rounded-lg p-1 border border-zinc-800 h-14">
          <motion.div
            animate={{
              x: selected === 0 ? 2 : "100%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-1 bottom-1 bg-white rounded-md shadow-sm"
            style={{ width: "calc(50% - 4px)" }}
          />

          <div className="relative z-10 grid grid-cols-2 h-full">
            <motion.button
              animate={{
                color: selected === 0 ? "#000" : "#a1a1aa",
              }}
              onClick={() => setSelected(0)}
              className="px-6 text-sm font-medium transition-colors relative flex items-center justify-center"
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
                    className="w-full px-10 text-left text-zinc-400 text-sm font-medium hover:text-zinc-300 transition-colors flex flex-col justify-center"
                  >
                    <div>Premium</div>
                    <div className="text-xs text-zinc-500 font-normal">
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
                    className="relative rounded-md p-0.5 w-full h-10 flex items-center"
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
                      className="absolute top-0 bottom-0 w-1/2 bg-black rounded-sm"
                      style={{ width: "calc(50% - 2px)" }}
                    />

                    <div className="relative z-10 grid grid-cols-2 w-full h-full">
                      <motion.button
                        animate={{
                          color: premium === 0 ? "#fff" : "#71717a",
                        }}
                        onClick={() => setPremium(0)}
                        className="text-xs font-medium transition-colors flex items-center justify-center"
                      >
                        Solo
                      </motion.button>

                      <motion.button
                        animate={{
                          color: premium === 1 ? "#fff" : "#71717a",
                        }}
                        onClick={() => setPremium(1)}
                        className="text-xs font-medium transition-colors flex items-center justify-center"
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

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Current:{" "}
          {selected === 0
            ? "Free"
            : `Premium ${premium === 0 ? "Solo" : "Team"}`}
        </div>
      </div>
    </div>
  );
}
