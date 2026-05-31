import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

// ── Typewriter hook ──────────────────────────────────────────
// Cycles through `texts`, typing each character out then deleting.
// `typingSpeed` ms per char, `deletingSpeed` ms per char, `pauseMs` pause at full word.
function useTypewriter(texts, typingSpeed = 75, deletingSpeed = 40, pauseMs = 2200) {
  const [display,    setDisplay]    = useState("");
  const [textIdx,    setTextIdx]    = useState(0);
  const [charIdx,    setCharIdx]    = useState(0);
  const [deleting,   setDeleting]   = useState(false);
  const [paused,     setPaused]     = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, pauseMs);
      return () => clearTimeout(t);
    }

    const current = texts[textIdx];

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setPaused(true);
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setTextIdx((i) => (i + 1) % texts.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(t);
  }, [charIdx, deleting, paused, textIdx, texts, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

const ROLES = [
  "Tech Lead",
  "Solutions Architect",
  "Azure Certified Engineer",
  "Full-Stack Engineer",
  "Senior .NET Developer",
];

const STATS = [
  { value: "10+",  label: "Years Experience"     },
  { value: "8",    label: "Azure Certs"           },
  { value: "50+",  label: "Projects Shipped"      },
  { value: "6",    label: "Engineering Teams Led" },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Dot-grid texture ───────────────────────────── */}
      <div className="absolute inset-0 dot-grid" />

      {/* ── Bottom fade to background colour ──────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-950 pointer-events-none" />

      {/* ── Ambient colour glows ───────────────────────── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/8 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-violet-500/8 dark:bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative section-container text-center px-4 py-20">

        {/* Availability pill */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
            Available for senior roles &amp; consulting
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]">
          <span className="text-gray-900 dark:text-white">Siarhei Mankouski</span>
          <span className="mono">.</span>
        </h1>

        {/* Typewriter role — fixed height prevents layout shift */}
        <div className="h-10 sm:h-12 mb-6 flex items-center justify-center">
          <span className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text font-mono">
            {role}
            <span className="cursor-blink text-blue-500 dark:text-cyan-400">&thinsp;|</span>
          </span>
        </div>

        {/* Bio paragraph */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable cloud systems and high-performance applications.
          10+ years across the .NET, React, and Azure ecosystems — from
          first commit to production architecture and team leadership.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#products" className="btn-primary">
            View My Work <ArrowDown size={15} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
          {/* Quick social shortcuts */}
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 dark:hover:text-cyan-400 dark:hover:border-cyan-400 transition-all duration-200"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 dark:hover:text-cyan-400 dark:hover:border-cyan-400 transition-all duration-200"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-5 px-6 bg-white dark:bg-gray-900"
            >
              <span className="text-2xl sm:text-3xl font-extrabold gradient-text leading-none mb-1">
                {s.value}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-500 font-mono text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <ArrowDown size={18} className="text-gray-400 dark:text-gray-600" />
      </div>
    </section>
  );
}
