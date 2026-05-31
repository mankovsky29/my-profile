import { useState } from "react";
import { Copy, Check, Mail, MapPin, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "./SocialIcons";

const EMAIL = "man.siarhei@gmail.com";

const SOCIALS = [
  {
    label: "GitHub",
    desc:  "Open source projects & contributions",
    href:  "https://github.com",
    Icon:  GitHubIcon,
  },
  {
    label: "LinkedIn",
    desc:  "Professional network & recommendations",
    href:  "https://linkedin.com",
    Icon:  LinkedInIcon,
  },
  {
    label: "Twitter / X",
    desc:  "Thoughts on cloud, dev, and product",
    href:  "https://twitter.com",
    Icon:  TwitterXIcon,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Copy email to clipboard — graceful fallback for older browsers
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      el.style.position = "fixed";
      el.style.opacity  = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="section-container py-24">

        {/* ── Section header ─────────────────────────── */}
        <div className="mb-16 text-center">
          <span className="mono text-sm font-mono mb-3 block">05. contact</span>
          <h2 className="section-title text-center">Let's Build Something</h2>
          <p className="section-subtitle mx-auto text-center">
            Open to senior engineering roles, cloud architecture consulting, and
            strategic product collaborations. Let's talk about what we could
            build together.
          </p>
        </div>

        {/* ── Two-column contact grid ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Left: email copy + location ─────────────── */}
          <div className="space-y-4">

            {/* Email card with copy-to-clipboard utility */}
            <div className="card-base">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 shrink-0">
                  <Mail size={17} className="text-blue-500 dark:text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 dark:text-gray-500 mb-0.5">
                    Email
                  </div>
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">
                    {EMAIL}
                  </div>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg
                  text-sm font-semibold border transition-all duration-200 ${
                    copied
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-cyan-400 dark:hover:border-cyan-500"
                  }`}
              >
                {copied ? (
                  <><Check size={14} /> Copied to clipboard!</>
                ) : (
                  <><Copy size={14} /> Copy Email Address</>
                )}
              </button>
            </div>

            {/* Location card */}
            <div className="card-base flex items-center gap-4">
              <div className="p-2 rounded-lg bg-violet-500/10 shrink-0">
                <MapPin size={17} className="text-violet-500" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 dark:text-gray-500 mb-0.5">
                  Based in
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  London, United Kingdom
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                  Open to remote &amp; hybrid roles worldwide
                </div>
              </div>
            </div>
          </div>

          {/* Right: social links ─────────────────────── */}
          <div>
            <h3 className="text-xs font-mono text-gray-400 dark:text-gray-600 mb-4">
              // digital footprint
            </h3>
            <div className="space-y-3">
              {SOCIALS.map(({ label, desc, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base card-hover flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0
                      group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200">
                      <Icon
                        size={17}
                        className="text-gray-600 dark:text-gray-400
                          group-hover:text-blue-500 dark:group-hover:text-cyan-400
                          transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 dark:text-white">
                        {label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{desc}</div>
                    </div>
                  </div>
                  <ExternalLink
                    size={13}
                    className="text-gray-300 dark:text-gray-700
                      group-hover:text-blue-500 dark:group-hover:text-cyan-400
                      transition-colors duration-200 shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer bar ─────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800
          flex flex-col sm:flex-row items-center justify-between gap-4
          text-xs font-mono text-gray-400 dark:text-gray-600">
          <span className="flex items-center gap-2">
            <span>
              <span className="text-gray-300 dark:text-gray-700">&lt;</span>
              <span className="text-blue-500 dark:text-cyan-400">AC</span>
              <span className="text-gray-300 dark:text-gray-700"> /&gt;</span>
            </span>
            Siarhei Mankouski — Senior Developer &amp; Solutions Architect
          </span>
          <span>Built with React + Tailwind CSS · Hosted on Azure Static Web Apps</span>
        </div>

      </div>
    </footer>
  );
}
