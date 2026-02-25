import { motion } from "framer-motion";

export default function Trust() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0d0d0d] overflow-hidden whitespace-nowrap">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p className="text-sm font-medium text-[#a1a1aa] tracking-widest uppercase mb-8">
          Built for modern backend teams
        </p>

        <div className="relative w-full overflow-hidden flex items-center h-12">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 md:gap-24 items-center opacity-50 pr-12 md:pr-24 whitespace-nowrap min-w-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 md:gap-24 items-center">
                <div className="text-lg md:text-xl font-bold font-mono text-white hover:text-white transition-colors cursor-default">
                  NODE.JS
                </div>
                <div className="text-lg md:text-xl font-bold font-mono text-white hover:text-white transition-colors cursor-default">
                  EXPRESS
                </div>
                <div className="text-lg md:text-xl font-bold font-mono text-white hover:text-white transition-colors cursor-default">
                  MONGODB
                </div>
                <div className="text-lg md:text-xl font-bold font-mono text-white hover:text-white transition-colors cursor-default">
                  POSTGRESQL
                </div>
                <div className="text-lg md:text-xl font-bold font-mono text-white hover:text-white transition-colors cursor-default">
                  REDIS
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
