import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-[#ff4d00]/30">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-[110rem] mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-opacity-80 transition-colors"
          >
            <img src={logo} alt="Jetend" className="w-8 h-8 object-contain" />
            <span className="font-semibold text-lg tracking-tight">JETEND</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#a1a1aa]">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/docs" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <a
              href="https://www.npmjs.com/package/jetend"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              NPM
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/himanshu-sheetlani/jetend"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 mt-16 flex flex-col relative w-full overflow-hidden">
        {/* Glow effect in the background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #ff4d00 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        <Outlet />
      </main>

      <footer className="border-t border-white/5 py-8 mt-auto relative z-10 w-full bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#a1a1aa]">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Jetend"
              className="w-6 h-6 object-contain opacity-50 grayscale"
            />
            <p>
              © {new Date().getFullYear()} Jetend. Built for speed by Himanshu
              Sheetlani.
            </p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>
            <a
              href="https://github.com/himanshu-sheetlani/jetend"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/jetend"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              NPM
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
