import { motion } from "framer-motion";
import {
  RoutingAnim,
  AuthAnim,
  DatabaseAnim,
  ValidationAnim,
  ResponseAnim,
  ArchitectureAnim,
  ConfigAnim,
  ModulesAnim,
} from "./AnimatedIcons";

const features = [
  {
    icon: <RoutingAnim />,
    title: "One-liner Routing System",
    description:
      "Define routes with auth, validation, and controllers in a single structured call.",
  },
  {
    icon: <AuthAnim />,
    title: "Built-in Auth Module",
    description:
      "Plug-and-play authentication logic without rewriting middleware every project.",
  },
  {
    icon: <DatabaseAnim />,
    title: "Database Abstraction Layer",
    description: "Supports both MongoDB and SQL, switchable via configuration.",
  },
  {
    icon: <ValidationAnim />,
    title: "Unified Validation Layer",
    description: "Centralized request validation for cleaner controllers.",
  },
  {
    icon: <ResponseAnim />,
    title: "Standardized Response Handling",
    description: "Consistent API response format across the entire backend.",
  },
  {
    icon: <ArchitectureAnim />,
    title: "Modular Architecture",
    description:
      "Separated folders for auth, routing, database, validation, utilities, logging, and uploads.",
  },
  {
    icon: <ConfigAnim />,
    title: "Config-Driven Setup",
    description:
      "Control DB type, middleware, logging, and global behavior from jetend.config.js.",
  },
  {
    icon: <ModulesAnim />,
    title: "Optional Modules",
    description:
      "Enable logging & file upload modules only when you need them.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d1d5db]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-[#d1d5db] to-[#525252]">
            Everything you need,
            <br />
            nothing you don't.
          </h2>
          <p className="text-base md:text-lg text-[#a1a1aa]">
            Jetend provides a rigid yet flexible structure to your Express
            applications, packing the most common requirements into simple,
            modular abstractions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#d1d5db]/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d1d5db]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="bg-[#1f1f1f] w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
