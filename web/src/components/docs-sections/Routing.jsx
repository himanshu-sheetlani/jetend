import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../CodeBlock";

export default function Routing() {
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
          Starting the Server
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>
      <p className="mb-4 text-zinc-400">
          You can quickly spin up a local server using the{" "}
          <code>start(port)</code> method. Simply pass the desired port number
          to start listening for incoming requests.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { start } from 'jetend';\n\nconst PORT = 3000;\nstart(PORT);`}
        />
        <p className="mb-4 mt-6 text-zinc-400">Example output:</p>
        <CodeBlock
          language="bash"
          code={`🚀 Jetend server running at http://localhost:3000`}
        />
      <div className="flex items-center gap-4 mb-6 relative">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gradient-to-b from-zinc-300 to-zinc-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
          Routing
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>

      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          JetEnd provides simplified wrappers over conventional routing (like
          Express). By importing HTTP methods directly, you can define elegant
          endpoints quickly.
        </p>

        <h3 className="text-2xl font-semibold text-zinc-200 mt-8 mb-4">
          Common Structure
        </h3>
        <p className="mb-4">
          Every routing function accepts a <strong>path</strong> string and a{" "}
          <strong>callback</strong>. The callback is passed an object containing
          both the <code>req</code> (Request) and <code>res</code> (Response)
          objects, allowing you to easily destructure them.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { method } from 'jetend';\n\nmethod('/path/to/route', ({ req, res }) => {\n  // Access query params via req.query\n  // Access url params via req.params\n  // Access body payload via req.body\n  \n  // Send response via res.json() or custom response utilities\n});`}
        />

        <h3 className="text-2xl font-semibold text-zinc-200 mt-12 mb-4">
          HTTP Methods
        </h3>

        {/* GET Route */}
        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">
            GET
          </span>
          Retrieve Data
        </h4>
        <p className="mb-4 text-zinc-400">
          Use the <code>get</code> function to retrieve data from your server.
          This is typically used for fetching lists of items or a single
          document by ID from your database.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { get } from 'jetend';\n\nget('/users', ({ req, res }) => {\n  // Fetch users from database...\n  res.json({ message: "List of users fetched successfully." });\n});`}
        />

        {/* POST Route */}
        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-yellow-400 text-sm font-bold bg-yellow-400/10 px-2 py-1 rounded">
            POST
          </span>
          Create Data
        </h4>
        <p className="mb-4 text-zinc-400">
          Use the <code>post</code> function to submit new data to your server.
          You can access the incoming JSON payload smoothly from{" "}
          <code>req.body</code>.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { post } from 'jetend';\n\npost('/users', ({ req, res }) => {\n  const newUser = req.body;\n  // Save to database...\n  res.status(201).json({ message: "User created", data: newUser });\n});`}
        />

        {/* PATCH Route */}
        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-blue-400 text-sm font-bold bg-blue-400/10 px-2 py-1 rounded">
            PATCH
          </span>
          Update Data
        </h4>
        <p className="mb-4 text-zinc-400">
          Use the <code>patch</code> function to partially update an existing
          resource. You'll typically combine URL parameters (
          <code>req.params</code>) with a payload body (<code>req.body</code>).
        </p>
        <CodeBlock
          language="javascript"
          code={`import { patch } from 'jetend';\n\npatch('/users/:id', ({ req, res }) => {\n  const userId = req.params.id;\n  const updateData = req.body;\n  // Update database record...\n  res.json({ message: \`User \${userId} updated.\`, data: updateData });\n});`}
        />

        {/* DELETE Route */}
        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-red-400 text-sm font-bold bg-red-400/10 px-2 py-1 rounded">
            DELETE
          </span>
          Remove Data
        </h4>
        <p className="mb-4 text-zinc-400">
          Use the <code>del</code> function (short for delete) to remove data
          from your server. Using the URL parameter, identify the specific
          record you wish to delete securely.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { del } from 'jetend';\n\ndel('/users/:id', ({ req, res }) => {\n  const userId = req.params.id;\n  // Remove from database...\n  res.json({ message: \`User \${userId} deleted successfully.\` });\n});`}
        />

        {/* Router Object */}
        <h3 className="text-2xl font-semibold text-zinc-200 mt-12 mb-4">
          The Router Object
        </h3>
        <p className="mb-4 text-zinc-400">
          Alternatively, instead of importing individual methods, you can import
          the <code>router</code> object. It contains all HTTP methods as
          properties (<code>router.get</code>, <code>router.post</code>,{" "}
          <code>router.patch</code>, <code>router.del</code>) keeping your
          namespace clean.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { router } from 'jetend';\n\nrouter.get('/products', ({ req, res }) => {\n  res.json({ message: "Fetched products" });\n});\n\nrouter.post('/products', ({ req, res }) => {\n  res.status(201).json({ message: "Product created!" });\n});`}
        />
      </div>
    </motion.div>
  );
}
