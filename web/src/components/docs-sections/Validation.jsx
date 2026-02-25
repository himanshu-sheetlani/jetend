import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CodeBlock from "../../components/CodeBlock";

export default function Validation() {
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
          Validation
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>
      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          Input validation often takes up too much boiler-plate space. JetEnd
          offers a beautifully simple <code>validate</code> wrapper.
        </p>
        <p className="mb-4">
          It evaluates an object against pipe-separated{" "}
          <code>&quot;|&quot;</code> rule strings. It throws specific errors if
          validation fails, and returns <code>true</code> if everything passes
          correctly.
        </p>

        <h3 className="text-2xl font-semibold text-zinc-200 mt-12 mb-4">
          Using Validation
        </h3>

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-purple-400 text-sm font-bold bg-purple-400/10 px-2 py-1 rounded">
            Check
          </span>
          Validating Data
        </h4>
        <p className="mb-4 text-zinc-400">
          Wrap your validation inside a <code>try-catch</code> block. Since{" "}
          <code>validate</code> throws descriptive errors when a rule fails, you
          can directly respond to the client with the error message.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { validate, post } from 'jetend';\n\npost("/register", async ({ req, res }) => {\n  try {\n    const isValid = validate(req.body, {\n      username: "required|min:3|max:20",\n      email: "email|required",\n      password: "required|min:8",\n    });\n    \n    // If we reach here, validation was successful!\n    res.status(200).json({ message: "Data is valid!" });\n  } catch (error) {\n    // Catch the specific error thrown by validate()\n    return res.status(400).json({ error: error.message });\n  }\n\n  // Proceed with registration...\n});`}
        />
        <h3 className="text-xl font-semibold text-zinc-200 mt-12 mb-4">
          Supported Rules
        </h3>
        <ul className="space-y-4 mt-4 text-zinc-400">
          <li className="flex items-center gap-3">
            <span className="text-zinc-200 font-mono bg-zinc-800 px-2 py-1 rounded text-sm min-w-[80px] text-center">
              required
            </span>
            <span>Field must be present and not an empty string.</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-zinc-200 font-mono bg-zinc-800 px-2 py-1 rounded text-sm min-w-[80px] text-center">
              min:X
            </span>
            <span>
              Minimum string length of <code>X</code> characters.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-zinc-200 font-mono bg-zinc-800 px-2 py-1 rounded text-sm min-w-[80px] text-center">
              max:X
            </span>
            <span>
              Maximum string length of <code>X</code> characters.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-zinc-200 font-mono bg-zinc-800 px-2 py-1 rounded text-sm min-w-[80px] text-center">
              email
            </span>
            <span>Must be a valid email string format.</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
