import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const syntaxHighlight = (code) => {
  if (!code) return "";

  let html = code
    // Escape HTML first
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const tokens = [];
  const pushToken = (content, className) => {
    tokens.push(`<span class="${className}">${content}</span>`);
    return `__TOKEN_${tokens.length - 1}__`;
  };

  // 1. Comments
  html = html.replace(/(\/\/.*)/g, (match) =>
    pushToken(match, "text-zinc-500 italic"),
  );

  // 2. Strings
  html = html.replace(
    /('[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|`[^`\\]*(?:\\.[^`\\]*)*`)/g,
    (match) => pushToken(match, "text-green-400"),
  );

  // 3. standard js keywords
  html = html.replace(
    /\b(import|from|const|let|var|await|async|return|if|else|throw|new|function|export|default|true|false)\b/g,
    (match) => pushToken(match, "text-blue-400 font-medium"),
  );

  // 4. JetEnd specific keywords / objects - highlighted in Brand Orange
  html = html.replace(
    /\b(get|post|patch|del|db|mongo|sql|validate|hashPassword|comparePassword|generateJWT|requireAuth|success|error|sendEmail|jetend|auth|router|utils)\b/g,
    (match) => pushToken(match, "text-[#ff4d00] font-bold"),
  );

  // 5. Numbers
  html = html.replace(/\b(\d+)\b/g, (match) => {
    return pushToken(match, "text-purple-400");
  });

  // Restore tokens in reverse order to prevent nested replacements if any
  for (let i = tokens.length - 1; i >= 0; i--) {
    html = html.replace(`__TOKEN_${i}__`, tokens[i]);
  }

  // Add line numbers
  const lines = html.split("\n");
  html = lines
    .map(
      (line, i) =>
        `<span class="inline-block w-8 text-right text-zinc-600 select-none mr-4 pr-3 border-r border-zinc-700/50 pointer-events-none" style="color: #52525b">${i + 1}</span>${line}`,
    )
    .join("\n");

  return html;
};

export default function CodeBlock({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl bg-[#0a0a0b] border border-zinc-800 shadow-xl overflow-hidden my-6">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800 backdrop-blur-sm">
        <div className="flex items-center gap-2 mt-0.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm border border-red-600/20"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm border border-yellow-600/20"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm border border-green-600/20"></div>
          <span className="ml-3 text-xs font-medium text-zinc-500 font-mono tracking-widest lowercase">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center justify-center p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-all active:scale-95"
          title="Copy code"
        >
          {copied ? (
            <Check size={14} className="text-zinc-300" />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>
      {/* Code Area */}
      <div className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed tabular-nums">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(code) }} />
        </pre>
      </div>
    </div>
  );
}
