import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../../components/CodeBlock";

export default function Authentication() {
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
          Authentication
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>
      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          Secure your app effortlessly. JetEnd provides extremely concise helper
          functions for password hashing, comparing, and JSON Web Token (JWT)
          management.
        </p>

        <h3 className="text-2xl font-semibold text-zinc-200 mt-12 mb-4">
          Password Security
        </h3>

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-purple-400 text-sm font-bold bg-purple-400/10 px-2 py-1 rounded">
            Hash
          </span>
          Hashing Passwords
        </h4>
        <p className="mb-4 text-zinc-400">
          Use the <code>hashPassword</code> utility to securely hash a plaintext
          password (typically during user registration) before storing it in
          your database. It takes the <code>password</code> and an optional{" "}
          <code>saltRounds</code> parameter (which defaults to 10 if not
          provided).
        </p>
        <CodeBlock
          language="javascript"
          code={`import { hashPassword } from 'jetend';\n\n// Basic usage (defaults to 10 salt rounds)\nconst hash = await hashPassword("mySecretPassword");\n\n// Specifying custom salt rounds\nconst strongerHash = await hashPassword("mySecretPassword", 12);\n\n// Save 'hash' to your database`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-blue-400 text-sm font-bold bg-blue-400/10 px-2 py-1 rounded">
            Verify
          </span>
          Validating Passwords
        </h4>
        <p className="mb-4 text-zinc-400">
          When a user logs in, use <code>comparePassword</code> to compare their
          plaintext input against the stored hash in your database securely.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { comparePassword } from 'jetend';\n\nconst isValid = await comparePassword("mySecretPassword", hash);\n\nif (!isValid) {\n  throw new Error("Invalid credentials");\n}`}
        />

        <h3 className="text-2xl font-semibold text-zinc-200 mt-12 mb-4">
          Session Management (JWT)
        </h3>

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-yellow-400 text-sm font-bold bg-yellow-400/10 px-2 py-1 rounded">
            Generate
          </span>
          Issuing Tokens
        </h4>
        <p className="mb-4 text-zinc-400">
          After successful login, issue a JSON Web Token to the client. The{" "}
          <code>generateJWT</code> method takes your payload and an optional
          secret key (it defaults to searching for <code>JWT_SECRET</code> in
          your environment variables).
        </p>
        <CodeBlock
          language="javascript"
          code={`import { generateJWT } from 'jetend';\n\n// Basic usage (assumes process.env.JWT_SECRET exists)\nconst token = generateJWT({ id: 1, name: "Jet" });\n\n// Custom secret and expiration\nconst customToken = generateJWT(\n  { role: "admin" }, \n  "my-custom-secret-key", \n  { expiresIn: "2h" }\n);`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">
            Protect
          </span>
          Route Middleware
        </h4>
        <p className="mb-4 text-zinc-400">
          Protect sensitive endpoints using the <code>requireAuth</code>{" "}
          middleware. When a token is successfully verified, the decoded payload
          becomes accessible via <code>req.user</code>.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { get, requireAuth } from 'jetend';\n\nget("/profile", requireAuth("my-custom-secret-key"), ({ req, res }) => {\n  // req.user is automatically populated by the middleware\n  res.json({ \n    message: "Welcome to your profile", \n    user: req.user \n  }); \n});`}
        />
      </div>
    </motion.div>
  );
}
