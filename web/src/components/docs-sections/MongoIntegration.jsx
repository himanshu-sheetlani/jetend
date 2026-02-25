import React from "react";
import { motion } from "framer-motion";
import { Database } from "lucide-react";
import CodeBlock from "../CodeBlock";

export default function MongoIntegration() {
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
          MongoDB Integration
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>

      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          Connect to MongoDB instantly. No complex configuration or nested
          connection pooling setups required. JetEnd's <code>db.mongo</code>{" "}
          wraps Mongoose for a cleaner syntax and automatic connection handling.
        </p>

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-purple-400 text-sm font-bold bg-purple-400/10 px-2 py-1 rounded">
            Connect
          </span>
          Establish Connection
        </h4>
        <p className="mb-4 text-zinc-400">
          Set up your database connection at the beginning of your application.
          You only need to do this once.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { db } from 'jetend';\n\nawait db.mongo.connect("mongodb://127.0.0.1:27017/JetEnd");`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-blue-400 text-sm font-bold bg-blue-400/10 px-2 py-1 rounded">
            Model
          </span>
          Define a Schema
        </h4>
        <p className="mb-4 text-zinc-400">
          JetEnd simplifies Mongoose schemas into direct object structures.
        </p>
        <CodeBlock
          language="javascript"
          code={`const User = db.mongo.model("User", { \n  name: String, \n  email: String \n});`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-yellow-400 text-sm font-bold bg-yellow-400/10 px-2 py-1 rounded">
            Create
          </span>
          Insert Documents
        </h4>
        <p className="mb-4 text-zinc-400">
          Use the <code>create</code> function to securely insert new documents
          matching your model.
        </p>
        <CodeBlock
          language="javascript"
          code={`const newUser = await db.mongo.create(User, { \n  name: "Himanshu", \n  email: "himanshu@jetend.dev" \n});`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">
            Read
          </span>
          Query Documents
        </h4>
        <p className="mb-4 text-zinc-400">
          Query the database using <code>read</code>. If you omit the search
          arguments, it will fetch all matching entries in that collection.
        </p>
        <CodeBlock
          language="javascript"
          code={`// Find a specific user\nconst allUsers = await db.mongo.read(User, { name: "Himanshu" }); \n\n// Find all users\nconst everyone = await db.mongo.read(User);`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-[#ff4d00] text-sm font-bold bg-[#ff4d00]/10 px-2 py-1 rounded">
            Update
          </span>
          Modify Documents
        </h4>
        <p className="mb-4 text-zinc-400">
          Use <code>update</code> to modify an existing document, passing the
          target match attributes followed by the updated values.
        </p>
        <CodeBlock
          language="javascript"
          code={`const updatedUser = await db.mongo.update(\n  User, \n  { _id: "document_id_here" }, // Query parameters\n  { name: "Jane" }             // Update details\n);`}
        />

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-10 mb-4">
          <span className="text-red-400 text-sm font-bold bg-red-400/10 px-2 py-1 rounded">
            Delete
          </span>
          Remove Documents
        </h4>
        <p className="mb-4 text-zinc-400">
          Removing a document is as simple as calling <code>delete</code> with
          the target match objects securely.
        </p>
        <CodeBlock
          language="javascript"
          code={`const deletedResponse = await db.mongo.delete(User, { _id: "document_id_here" });`}
        />
      </div>
    </motion.div>
  );
}
