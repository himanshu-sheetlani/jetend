import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Terminal,
  Route,
  Database,
  Lock,
  CheckCircle,
  MessageSquare,
  Mail,
  Zap,
  ChevronRight,
} from "lucide-react";

import Introduction from "../components/docs-sections/Introduction";
import Installation from "../components/docs-sections/Installation";
import Routing from "../components/docs-sections/Routing";
import MongoIntegration from "../components/docs-sections/MongoIntegration";
import SqlIntegration from "../components/docs-sections/SqlIntegration";
import Authentication from "../components/docs-sections/Authentication";
import Validation from "../components/docs-sections/Validation";
import ResponseUtilities from "../components/docs-sections/ResponseUtilities";
import EmailSender from "../components/docs-sections/EmailSender";

const NAV_ITEMS = [
  { id: "introduction", label: "Introduction", icon: Zap },
  { id: "installation", label: "Installation", icon: Terminal },
  { id: "routing", label: "Routing", icon: Route },
  {
    id: "database",
    label: "Databases",
    icon: Database,
    subItems: [
      { id: "database-mongo", label: "MongoDB Support" },
      { id: "database-sql", label: "SQL Support" },
    ],
  },
  { id: "auth", label: "Authentication", icon: Lock },
  { id: "validation", label: "Validation", icon: CheckCircle },
  { id: "response", label: "Response Utilities", icon: MessageSquare },
  { id: "email", label: "Email Sender", icon: Mail },
];

const ContentSections = {
  introduction: <Introduction key="introduction" />,
  installation: <Installation key="installation" />,
  routing: <Routing key="routing" />,
  "database-mongo": <MongoIntegration key="mongo" />,
  "database-sql": <SqlIntegration key="sql" />,
  auth: <Authentication key="auth" />,
  validation: <Validation key="validation" />,
  response: <ResponseUtilities key="response" />,
  email: <EmailSender key="email" />,
};

export default function Docs() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTabChange = (id) => {
    setActiveSection(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex-1 w-full bg-[#0a0a0a] text-zinc-200 flex relative">
      {/* Metallic background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-zinc-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-zinc-200 to-zinc-400 rounded-full shadow-[0_0_20px_rgba(212,212,216,0.3)] text-zinc-900 hover:scale-105 transition-transform"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <aside
        className={`fixed lg:sticky top-[64px] pt-10 h-auto w-72 bg-[#09090b] backdrop-blur-2xl border-r border-zinc-800/50 z-40 transition-transform duration-300 ease-in-out shrink-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-8">
            <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500 uppercase tracking-widest mb-2">
              Documentation
            </h3>
            <p className="text-xs text-zinc-500">
              Everything you need to master JetEnd.
            </p>
          </div>

          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const { id, label, icon: Icon, subItems } = item;
              const isGroupActive =
                activeSection === id || activeSection.startsWith(id + "-");

              return (
                <div key={id} className="mb-1">
                  <button
                    onClick={() => {
                      if (subItems) {
                        // Open first child by default if group is clicked
                        handleTabChange(subItems[0].id);
                      } else {
                        handleTabChange(id);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isGroupActive && !subItems
                        ? "bg-gradient-to-r from-zinc-800 to-zinc-900/50 text-zinc-200 border border-zinc-700/50 shadow-[0_0_10px_rgba(113,113,122,0.1)]"
                        : isGroupActive && subItems
                          ? "text-zinc-300 bg-zinc-800/20"
                          : "text-zinc-500 hover:bg-zinc-800/30 hover:text-zinc-300"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isGroupActive ? "text-zinc-300" : "opacity-50"}
                    />
                    {label}
                    {isGroupActive && !subItems && (
                      <ChevronRight
                        size={16}
                        className="ml-auto opacity-50 text-zinc-400"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {subItems && isGroupActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-11 mt-1 flex flex-col gap-1 border-l border-zinc-800"
                      >
                        {subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleTabChange(sub.id)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors relative ${
                              activeSection === sub.id
                                ? "text-zinc-200 font-medium"
                                : "text-zinc-500 hover:text-zinc-300"
                            }`}
                          >
                            {activeSection === sub.id && (
                              <motion.div
                                layoutId="sidebar-active"
                                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#ff4d00]"
                              />
                            )}
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 lg:px-12 xl:px-24 relative z-10">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-zinc-800/50 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-300 text-sm font-medium mb-6 shadow-sm">
            <Zap size={14} className="text-zinc-400" />
            v1.0.2
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
            JetEnd{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500">
              Docs
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            The Tailwind for Backend Development. Write backend code quicker and
            cleaner with simple wrapper functions.
          </p>
        </motion.div>

        {/* Dynamic Content Display with Tabs */}
        <div className="pb-32 min-h-[500px]">
          <AnimatePresence mode="wait">
            {ContentSections[activeSection]}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
