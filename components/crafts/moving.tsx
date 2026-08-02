export default function Moving() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950">
      <div className="flex origin-center scale-90 flex-col items-center gap-8 sm:scale-100">
        <div className="h-2 w-52 rounded bg-cyan-500 shadow-[0_10px_20px_cyan,0_20px_40px_cyan,0_30px_60px_cyan] outline outline-cyan-400 transition duration-500"></div>

        <div className="grid h-[200px] w-[300px] grid-cols-1 grid-rows-1">
          <div className="z-1 col-start-1 row-start-1 mt-3 -ml-3 h-[190px] w-[290px] -rotate-3 animate-[swing_7s_linear_infinite] self-start justify-self-start rounded-xl border-t border-cyan-300 bg-neutral-700/30 shadow-[inset_0_2px_3px_0_rgba(34,211,238,0.1),inset_0_-2px_3px_0_rgba(0,0,0,0.2)] blur-[1px] backdrop-blur-xl"></div>

          <div className="z-2 col-start-1 row-start-1 mt-2 -mr-2 h-[195px] w-[295px] rotate-2 animate-[swing-reverse_7s_linear_infinite] self-start justify-self-end rounded-xl border-t border-cyan-300 bg-transparent shadow-[inset_0_2px_3px_0_rgba(34,211,238,0.15),inset_0_-2px_3px_0_rgba(0,0,0,0.25)] blur-[1px] backdrop-blur-xl"></div>

          <div className="z-3 col-start-1 row-start-1 -mb-20 -ml-20 h-48 w-48 self-end justify-self-start">
            <svg className="h-full w-full" viewBox="0 0 487 487">
              <circle
                cx="243.5"
                cy="243.5"
                r="233"
                style={{
                  fill: "none",
                  stroke: "#374151",
                  strokeWidth: "2px",
                  opacity: 0.3,
                }}
              />
              <path
                d="m10,243.5C10,114.82,114.32,10.5,243,10.5"
                style={{
                  fill: "none",
                  stroke: "#22d3ee",
                  strokeLinecap: "round",
                  strokeWidth: "8px",
                  filter: "drop-shadow(0 0 12px #22d3ee)",
                  animation: "spin 5s linear infinite",
                  transformOrigin: "243.5px 243.5px",
                }}
              />
            </svg>
          </div>

          <div className="z-3 col-start-1 row-start-1 -mt-12 -mr-10 h-20 w-20 self-start justify-self-end">
            <svg className="h-full w-full" viewBox="0 0 487 487">
              <circle
                cx="243.5"
                cy="243.5"
                r="233"
                style={{
                  fill: "none",
                  stroke: "#374151",
                  strokeWidth: "4px",
                  opacity: 0.5,
                  filter: "blur(3px)",
                }}
              />
              <path
                d="m10,243.5C10,114.82,114.32,10.5,243,10.5"
                style={{
                  fill: "none",
                  stroke: "#22d3ee",
                  strokeLinecap: "round",
                  strokeWidth: "8px",
                  filter: "drop-shadow(0 0 12px #22d3ee)",
                  animation: "spin 5s linear infinite",
                  transformOrigin: "243.5px 243.5px",
                }}
              />
            </svg>
          </div>

          <div className="group z-4 col-start-1 row-start-1 h-full w-full self-center justify-self-center rounded-2xl bg-linear-to-b from-neutral-800 to-neutral-900 p-4 text-white shadow-[inset_0_2px_3px_0_rgba(34,211,238,0.2),inset_0_-2px_3px_0_rgba(0,0,0,0.3)] backdrop-blur-xl transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col gap-4 p-2">
              <p className="text-lg font-light tracking-wide">
                Design Smarter, Not Harder
              </p>

              <p className="text-md leading-5 font-extralight tracking-wider text-neutral-400 italic">
                Unlock better designs, at comparatively less efforts
              </p>

              <button className="h-9 w-2/3 rounded-full border-gray-500 bg-linear-to-r from-neutral-900 via-neutral-700/50 to-neutral-700 backdrop-blur-md transition-colors duration-500 group-hover:border-l group-hover:via-neutral-900 group-hover:to-neutral-800">
                <span className="text-md text-neutral-500 group-hover:text-neutral-400">
                  Get Started
                </span>
              </button>
            </div>

            <div className="absolute inset-x-0 top-0 h-1 w-full overflow-hidden rounded-lg bg-linear-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
