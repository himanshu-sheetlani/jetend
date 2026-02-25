import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import ModelViewer from "./ModelViewer";
import hexBg from "../assets/hex-bg.png";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i jetend");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-around overflow-hidden"
      style={{
        backgroundColor: "#050505",
        backgroundImage: `
          radial-gradient(circle at 70% 0%, rgba(255, 115, 0, 0.15), transparent 50%),
          radial-gradient(circle at 100% 50%, rgba(38, 0, 255, 0.15), transparent 35%),
          radial-gradient(circle at 65% 80%, rgba(0, 255, 213, 0.09), transparent 30%)
        `,
      }}
    >
      {/* Hexagon texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url(${hexBg})`,
          backgroundSize: "auto",
          opacity: 0.03,
        }}
      />
      <div className="max-w-8xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col z-20 mt-12 lg:mt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-bl from-[#faa56e] to-[#a19c99]">
            For Engineers Who Refuse Boilerplate.
          </h1>

          <p className="text-base md:text-lg text-[#a1a1aa] mb-8 max-w-xl leading-relaxed">
            Jetend is a utility-first Node.js backend toolkit built on top of
            Express that removes repetitive boilerplate and enforces clean
            architecture. It doesn't replace Express, it disciplines and
            structures it.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
            <Link
              to="/docs"
              className="relative group rounded-full p-[1px] overflow-hidden transition-all hover:scale-[1.02]"
            >
              {/* The glowing border effect built with gradient */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-[#e5e7eb]/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></span>

              {/* The intense top highlight / glow */}
              <span className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent shadow-[0_0_15px_3px_#ff7300] z-20"></span>
              <span className="absolute top-0 left-1/4 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#ffaa00] to-transparent blur-sm z-20"></span>

              {/* Button inner content */}
              <div className="relative flex items-center justify-center px-6 md:px-8 py-3 rounded-full bg-[#050505] text-[#f3f4f6] font-medium transition-colors w-full h-full z-10 group-hover:text-white group-hover:bg-[#0a0a0a]">
                Get Started
              </div>
            </Link>
            <a
              href="#features"
              className="flex items-center gap-2 px-2 py-3 text-[#e5e7eb] font-medium hover:text-white transition-all group text-sm md:text-base"
            >
              Explore our services
              <ChevronRight
                size={20}
                className="text-[#a1a1aa] group-hover:text-white transition-all group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Quick Install Command */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 max-w-sm w-full"
          >
            <p className="text-xs text-[#a1a1aa] uppercase tracking-widest font-semibold mb-3">
              Install via NPM
            </p>
            <div
              onClick={handleCopy}
              className="group flex items-center justify-between px-3 md:px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-[#d1d5db]/50 cursor-pointer transition-all hover:bg-[#141414]"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-[#a1a1aa] font-mono text-xs md:text-sm group-hover:text-white transition-colors">
                  $
                </span>
                <code className="text-[#e5e7eb] font-mono text-xs md:text-sm tracking-wide">
                  npm i jetend
                </code>
              </div>
              <div className="p-1.5 md:p-2 rounded-md bg-white/5 group-hover:bg-[#d1d5db]/10 transition-colors">
                {copied ? (
                  <Check size={14} className="text-[#10b981]" />
                ) : (
                  <Copy
                    size={14}
                    className="text-[#a1a1aa] group-hover:text-white transition-colors"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Spline Viewer Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[350px] md:h-[550px] lg:h-[750px] w-full flex items-center justify-center lg:-mr-20 mt-8 lg:mt-0"
        >
          {/* Dark overlay to blend spline better if needed */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0a0a0a] z-10 pointer-events-none opacity-50"></div>

          <div className="w-full h-full relative z-0">
            <ModelViewer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
