import React from "react";
import { motion } from "framer-motion";
import { Database } from "lucide-react";
import CodeBlock from "../CodeBlock";

export default function SqlIntegration() {
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
          SQL Integration
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>

      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          Connect to SQL instantly. No complex configuration or nested
          connection pooling setups required. JetEnd's <code>db.sql</code> wraps{" "}
          <code>mysql2</code> connections and simplifies raw query execution
          drastically.
        </p>

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-purple-400 text-sm font-bold bg-purple-400/10 px-2 py-1 rounded">
            Connect
          </span>
          Establish Connection
        </h4>
        <p className="mb-4 text-zinc-400">
          Set up your SQL connection pool at the beginning of your application.
          You only need to do this once.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { db } from 'jetend';\n\nawait db.sql.connect({ \n  host: "localhost", \n  user: "root", \n  database: "test_db", \n  password: "your_password" \n});`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-blue-400 text-sm font-bold bg-blue-400/10 px-2 py-1 rounded">
            Query
          </span>
          Execute Queries
        </h4>
        <p className="mb-4 text-zinc-400">
          Execute any SQL command using the <code>query</code> function. It
          automatically handles connection pooling and returns the array of
          results directly.
        </p>
        <CodeBlock
          language="javascript"
          code={`// Execute a raw custom query\nconst users = await db.sql.query("SELECT * FROM users");\nconsole.log(users);\n\n// You can also use parameterized queries for security\nconst user = await db.sql.query(\n  "SELECT * FROM users WHERE email = ?", \n  ["himanshu@jetend.dev"]\n);`}
        />
      </div>
    </motion.div>
  );
}
