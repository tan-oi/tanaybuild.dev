"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check } from "lucide-react";

export default function MotionDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("medium");

  const options = [
    { label: "Extra Small", value: "xs" },
    { label: "Small", value: "sm" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "lg" },
    { label: "Extra Large", value: "xl" },
  ];

  const selectedOption = options.find((opt) => opt.value === selectedValue);
  const displayName = selectedOption ? selectedOption.label : selectedValue;

  return (
    <div className="w-full h-full flex items-start justify-center bg-transparent pt-24">
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] as any }}
          className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-3 border border-slate-700 min-w-[180px] justify-between"
        >
          <motion.span
            key={displayName}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {displayName}
          </motion.span>
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{
              duration: 0.3,
              ease: [0.34, 1.56, 0.64, 1] as any,
            }}
          >
            <ChevronDown size={16} className="opacity-60" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: -15,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: -10,
                filter: "blur(2px)",
                transition: { duration: 0.15 },
              }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1] as any,
              }}
              className="absolute top-full mt-2 w-full bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-lg overflow-hidden z-50"
            >
              {options.map((option, index) => {
                const isSelected = selectedValue === option.value;

                return (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, x: -15, filter: "blur(2px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1] as any,
                    }}
                    onClick={() => {
                      setSelectedValue(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left flex items-center gap-2 hover:bg-slate-700/70 transition-colors relative ${
                      isSelected ? "bg-slate-700/50" : ""
                    }`}
                  >
                    <motion.span
                      className="text-white flex items-center gap-2"
                      animate={{
                        x: isSelected ? 2 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.34, 1.56, 0.64, 1] as any,
                            }}
                          >
                            <Check size={14} className="text-green-400" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {option.label}
                    </motion.span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
