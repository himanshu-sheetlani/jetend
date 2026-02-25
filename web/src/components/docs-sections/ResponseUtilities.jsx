import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../../components/CodeBlock";

export default function ResponseUtilities() {
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
          Response Utilities
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>
      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          Send consistent, clean JSON responses every time without repeating
          boilerplate structures. JetEnd automatically sets the right headers
          and structures your data.
        </p>

        <h3 className="text-2xl font-semibold text-zinc-200 mt-12 mb-4">
          Response Types
        </h3>

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">
            Success
          </span>
          Success Responses
        </h4>
        <p className="mb-4 text-zinc-400">
          The <code>success</code> method takes the response object, a message,
          optional payload data, and an optional status code (which defaults to
          200).
        </p>
        <CodeBlock
          language="javascript"
          code={`import { success } from 'jetend';\n\n// Basic success response (Defaults to HTTP 200)\nreturn success(res, "Profile updated successfully!");\n\n// Success response with data payload\nreturn success(res, "Users fetched", { users: [1, 2, 3] });\n\n// Specifying a custom HTTP status (e.g., 201 Created)\nreturn success(res, "User created", newUser, 201);`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-red-400 text-sm font-bold bg-red-400/10 px-2 py-1 rounded">
            Error
          </span>
          Error Responses
        </h4>
        <p className="mb-4 text-zinc-400">
          The <code>error</code> method guarantees a safe, consistent formatting
          for error states. It accepts the response object, an error message, a
          status code, and optional detailed information.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { error } from 'jetend';\n\n// Standard error (Defaults to HTTP 500 if status code is omitted safely)\nreturn error(res, "Internal Server Error", 500);\n\n// Error with specific status code (e.g., 404 Not Found)\nreturn error(res, "Requested User Not Found", 404);\n\n// Error with additional details\nreturn error(res, "Validation Failed", 400, { field: "email" });`}
        />
      </div>
    </motion.div>
  );
}
