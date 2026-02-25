import React from "react";
import { motion } from "framer-motion";
import CodeBlock from "../../components/CodeBlock";

export default function EmailSender() {
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
          Email Sender
        </h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 to-transparent flex-grow hidden sm:block" />
      </div>
      <div className="prose prose-invert max-w-none text-zinc-400 text-lg leading-relaxed">
        <p className="mb-4">
          Need to dispatch an email? JetEnd wraps <code>nodemailer</code> so you
          can do it securely with a simple one-liner!
        </p>

        <h3 className="text-2xl font-semibold text-zinc-200 mt-12 mb-4">
          Email Dispatch
        </h3>

        <h4 className="flex items-center gap-3 text-xl font-medium text-zinc-300 mt-8 mb-4">
          <span className="text-blue-400 text-sm font-bold bg-blue-400/10 px-2 py-1 rounded">
            Send
          </span>
          Dispatching Emails
        </h4>
        <p className="mb-4 text-zinc-400">
          The <code>sendEmail</code> utility allows you to send HTML formatted
          emails asynchronously. Simply pass your SMTP credentials, the
          recipient, the subject line, and the HTML body content.
        </p>
        <CodeBlock
          language="javascript"
          code={`import { sendEmail } from 'jetend';\n\nawait sendEmail(\n  "your-email@gmail.com",   // Sender\n  "your-app-password",      // Password or App Password\n  "recipient@example.com",  // Receiver\n  "Hello from JetEnd!",     // Subject\n  "<h1>Welcome to the easiest backend ever.</h1>" // HTML Body\n);`}
        />

        <div className="mt-8 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-inner">
          <h4 className="text-zinc-200 font-medium mb-2 flex items-center gap-2">
            💡 Gmail Setup Tip:
          </h4>
          <p className="text-sm text-zinc-400 m-0">
            If you are using Gmail to send emails, using your normal account
            password will fail for security reasons. Instead, you need to
            generate an <strong>App Password</strong> from your Google Account
            settings and use that instead.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
