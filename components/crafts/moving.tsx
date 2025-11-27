export default function Moving() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-neutral-950 overflow-hidden">
      <div className="scale-90 sm:scale-100 origin-center flex flex-col gap-8 items-center">
        <div className="w-52 h-2 bg-cyan-500 rounded shadow-[0_10px_20px_cyan,0_20px_40px_cyan,0_30px_60px_cyan] outline outline-cyan-400 transition duration-500"></div>

        <div className="grid grid-cols-1 grid-rows-1 w-[300px] h-[200px]">
          <div
            className="col-start-1 row-start-1 z-1 justify-self-start self-start
                            w-[290px] h-[190px] mt-3 -ml-3
                            bg-neutral-700/30 rounded-xl backdrop-blur-xl 
                            shadow-[inset_0_2px_3px_0_rgba(34,211,238,0.1),inset_0_-2px_3px_0_rgba(0,0,0,0.2)]
                            -rotate-3 blur-[1px] border-t border-cyan-300
                            animate-[swing_7s_linear_infinite]"
          ></div>

          <div
            className="col-start-1 row-start-1 z-2 justify-self-end self-start
                            w-[295px] h-[195px] mt-2 -mr-2
                            bg-transparent rounded-xl backdrop-blur-xl blur-[1px]
                            border-t border-cyan-300
                            shadow-[inset_0_2px_3px_0_rgba(34,211,238,0.15),inset_0_-2px_3px_0_rgba(0,0,0,0.25)]
                            rotate-2
                            animate-[swing-reverse_7s_linear_infinite]"
          ></div>

          <div
            className="col-start-1 row-start-1 z-3 justify-self-start self-end
                            w-48 h-48 -ml-20 -mb-20"
          >
            <svg className="w-full h-full" viewBox="0 0 487 487">
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

          <div
            className="col-start-1 row-start-1 z-3 justify-self-end self-start
                            w-20 h-20 -mr-10 -mt-12"
          >
            <svg className="w-full h-full" viewBox="0 0 487 487">
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

          <div
            className="col-start-1 row-start-1 z-4 justify-self-center self-center
                            group w-full h-full
                            bg-linear-to-b from-neutral-800 to-neutral-900
                            rounded-2xl p-4 text-white backdrop-blur-xl
                            shadow-[inset_0_2px_3px_0_rgba(34,211,238,0.2),inset_0_-2px_3px_0_rgba(0,0,0,0.3)]
                            hover:scale-105 transition-transform duration-300"
          >
            <div className="p-2 flex flex-col gap-4">
              <p className="font-light tracking-wide text-lg">
                Design Smarter, Not Harder
              </p>

              <p className="font-extralight italic tracking-wider leading-5 text-md text-neutral-400">
                Unlock better designs, at comparatively less efforts
              </p>

              <button className="w-2/3 backdrop-blur-md rounded-full bg-linear-to-r from-neutral-900 via-neutral-700/50 to-neutral-700 group-hover:via-neutral-900 group-hover:to-neutral-800 transition-colors duration-500 h-9 group-hover:border-l border-gray-500">
                <span className="text-neutral-500 text-md group-hover:text-neutral-400">
                  Get Started
                </span>
              </button>
            </div>

            <div className="absolute top-0 inset-x-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent rounded-lg overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
