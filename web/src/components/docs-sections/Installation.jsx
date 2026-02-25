import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../../components/CodeBlock";

export default function Installation() {
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
          Installation
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>
      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          Install JetEnd via npm. It works out of the box with modern Node.js
          environments.
        </p>
        <CodeBlock language="bash" code="npm install jetend" />
        <p className="mb-4">
          Then, you can import its modules directly into your application:
        </p>
        <CodeBlock
          language="javascript"
          code={`import { db, auth, router, utils } from 'jetend';\n\n// Or import specifically\nimport { get, post, db, hashPassword, success } from 'jetend';`}
        />
      </div>
    </motion.div>
  );
}
