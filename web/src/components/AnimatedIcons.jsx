import { motion } from "framer-motion";

export const RoutingAnim = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg
      viewBox="0 0 48 48"
      className="w-full h-full absolute inset-0 text-[#525252]"
    >
      <path
        d="M14 24 H34"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <circle cx="14" cy="24" r="3" fill="#a1a1aa" />
      <circle cx="34" cy="24" r="3" fill="#a1a1aa" />
    </svg>
    <motion.div
      className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
      animate={{ x: [-10, 10, -10] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export const AuthAnim = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-md border border-white/10 bg-[#1f1f1f]">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6 text-[#a1a1aa] z-10"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
    <motion.div
      className="absolute left-0 w-full h-[2px] bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.4)] z-20"
      animate={{ y: [-16, 16, -16] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export const DatabaseAnim = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center -space-y-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-7 h-3 rounded-full border border-[#525252] bg-gradient-to-b from-[#141414] to-[#1f1f1f]"
        style={{ zIndex: 3 - i }}
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut",
        }}
      />
    ))}
    <motion.div
      className="absolute w-4 h-[2px] bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.6)]"
      style={{ zIndex: 4 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export const ValidationAnim = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      className="absolute w-8 h-8 rounded-full border border-white"
      animate={{ scale: [0.5, 1.5], opacity: [0.6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
    <motion.div
      className="absolute w-8 h-8 rounded-full border border-white"
      animate={{ scale: [0.5, 1.5], opacity: [0.6, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeOut" }}
    />
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-5 h-5 text-white z-10"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </div>
);

export const ResponseAnim = () => (
  <div className="relative w-full h-full flex flex-col gap-1 items-center justify-center">
    <motion.div
      className="w-7 h-2 rounded-sm bg-[#525252]"
      animate={{ width: ["100%", "70%", "100%"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="flex gap-1 w-7 h-4">
      <motion.div
        className="w-full h-full rounded-sm bg-[#a1a1aa]"
        animate={{ height: ["100%", "40%", "100%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="w-full h-full rounded-sm bg-white shadow-[0_0_6px_rgba(255,255,255,0.3)]"
        animate={{ height: ["40%", "100%", "40%"] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.4,
          ease: "easeInOut",
        }}
      />
    </div>
  </div>
);

export const ArchitectureAnim = () => (
  <div className="w-7 h-7 grid grid-cols-2 gap-1 m-auto mt-[10px]">
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="bg-[#d1d5db] rounded-sm"
        animate={{ scale: [1, 0.5, 1], rotate: [0, 90, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export const ConfigAnim = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      className="absolute w-8 h-8 border-[1.5px] border-dashed border-[#525252] rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute w-5 h-5 border-[1.5px] border-dashed border-white/50 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export const ModulesAnim = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-5 h-5 border-[1.5px] border-[#a1a1aa] bg-[#141414] rounded-sm transform origin-center"
        style={{ rotateX: "60deg", rotateZ: "45deg" }}
        animate={{
          y: [i * 5 - 5, i * 8 - 8, i * 5 - 5],
          borderColor: i === 1 ? ["#a1a1aa", "#ffffff", "#a1a1aa"] : "#a1a1aa",
          boxShadow:
            i === 1
              ? [
                  "0 0 0px transparent",
                  "0 0 10px rgba(255,255,255,0.4)",
                  "0 0 0px transparent",
                ]
              : "none",
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);
