import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4 mb-6 relative">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gradient-to-b from-zinc-300 to-zinc-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
          Introduction
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>
      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          JetEnd is a lightweight toolkit that makes building Node.js backends{" "}
          <strong className="text-zinc-200 font-medium">effortless</strong>. It
          takes the confusing, repetitive parts of backend development—like
          routing, database connections, authentication, and validation—and
          turns them into simple one-liners.
        </p>
        <p>
          It is perfect for beginners, rapid prototyping, and clean code
          enthusiasts who want to focus on features instead of boilerplate.
        </p>
        <div className="mt-8 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex gap-4 items-start relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-zinc-400 to-zinc-600"></div>
          <Zap className="text-zinc-300 shrink-0 mt-1" />
          <div>
            <h4 className="text-zinc-200 font-semibold mb-1">
              Built for Speed
            </h4>
            <p className="text-sm text-zinc-400">
              You can set up a fully secure, database-connected API in less than
              5 minutes with JetEnd.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
