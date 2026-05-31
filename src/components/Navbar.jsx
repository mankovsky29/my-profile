import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",          href: "#about"          },
  { label: "Certifications", href: "#certifications" },
  { label: "Products",       href: "#products"       },
  { label: "Experience",     href: "#experience"     },
  { label: "Contact",        href: "#contact"        },
];

export default function Navbar({ darkMode, toggleTheme }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);

  // Add a frosted-glass backdrop once the user scrolls past 20 px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ─────────────────────────────── */}
          <a href="#" className="flex items-center">
            <span className="font-mono text-lg font-bold tracking-tight select-none">
              <span className="text-gray-400 dark:text-gray-600">&lt;</span>
              <span className="text-blue-500 dark:text-cyan-400">AC</span>
              <span className="text-gray-400 dark:text-gray-600"> /&gt;</span>
            </span>
          </a>

          {/* ── Desktop nav links ─────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="nav-link pb-0.5">
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Theme toggle + hamburger ──────────── */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ─────────────────────── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 pb-6 animate-[fadeIn_0.15s_ease]">
            <div className="flex flex-col gap-5 px-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
