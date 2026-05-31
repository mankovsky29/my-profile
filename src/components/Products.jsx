import { ExternalLink, Rocket, FlaskConical, Clock } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

// ── Product catalogue ────────────────────────────────────────
const PRODUCTS = [
  {
    name:    "CloudDash",
    tagline: "Azure Resource Intelligence Dashboard",
    desc:    "Real-time Azure resource monitoring, cost analysis, and anomaly alerts — built for DevOps teams managing multi-subscription environments.",
    status:  "live",
    tech:    ["React", "TypeScript", "Azure API", ".NET 8", "SignalR", "Cosmos DB"],
    url:     "#",
    github:  "#",
    icon:    "◈",
    accent:  "from-emerald-500 to-cyan-500",
  },
  {
    name:    "DevFlow AI",
    tagline: "AI-Powered Code Review Automation",
    desc:    "Automated PR analysis, security vulnerability scanning, and intelligent code-quality suggestions powered by Azure OpenAI and custom fine-tuned models.",
    status:  "beta",
    tech:    ["Next.js", "Azure OpenAI", "TypeScript", "Python", "Azure Functions"],
    url:     "#",
    github:  null,
    icon:    "⬡",
    accent:  "from-amber-500 to-orange-500",
  },
  {
    name:    "ArchBuilder",
    tagline: "Visual Cloud Architecture Tool",
    desc:    "Drag-and-drop cloud diagramming that auto-generates Bicep/Terraform IaC from visual designs and validates against the Azure Well-Architected Framework.",
    status:  "dev",
    tech:    ["React", "React Flow", "TypeScript", "Azure", "Bicep", "Node.js"],
    url:     null,
    github:  "#",
    icon:    "⬟",
    accent:  "from-blue-500 to-violet-500",
  },
  {
    name:    "APIForge",
    tagline: "Intelligent API Scaffolding Platform",
    desc:    "Generate production-ready .NET or Node.js REST/GraphQL APIs from OpenAPI specs or natural-language descriptions with auth, rate limiting, and Azure deploy configs baked in.",
    status:  "dev",
    tech:    [".NET 8", "OpenAI", "TypeScript", "Docker", "Azure Container Apps"],
    url:     null,
    github:  null,
    icon:    "⬢",
    accent:  "from-rose-500 to-pink-500",
  },
  {
    name:    "SecureVault CLI",
    tagline: "Local-First Secrets Management",
    desc:    "Developer-friendly CLI for managing environment secrets across projects with Azure Key Vault sync, team-sharing support, and full audit logging.",
    status:  "beta",
    tech:    ["Node.js", "TypeScript", "Azure Key Vault", "CLI"],
    url:     "#",
    github:  "#",
    icon:    "⬧",
    accent:  "from-violet-500 to-purple-500",
  },
  {
    name:    "PerfLens",
    tagline: "Web Performance Analytics Suite",
    desc:    "Core Web Vitals monitoring, real-user performance metrics, and automated optimisation recommendations with Azure Application Insights integration.",
    status:  "dev",
    tech:    ["React", "D3.js", "TypeScript", "App Insights", "Azure Functions"],
    url:     null,
    github:  null,
    icon:    "◉",
    accent:  "from-cyan-500 to-blue-500",
  },
];

// ── Status config: badge class + icon component ──────────────
const STATUS = {
  live: { badge: "badge-live", Icon: Rocket,        label: "Live"           },
  beta: { badge: "badge-beta", Icon: FlaskConical,  label: "Beta"           },
  dev:  { badge: "badge-dev",  Icon: Clock,         label: "In Development" },
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">

        {/* ── Section header ─────────────────────────── */}
        <div className="mb-16">
          <span className="mono text-sm font-mono mb-3 block">03. products &amp; labs</span>
          <h2 className="section-title">Labs &amp; Products</h2>
          <p className="section-subtitle">
            A growing portfolio of developer tools, SaaS products, and open-source
            projects. Status tags tell you exactly what's ready to use versus what's
            still in the lab.
          </p>

          {/* Status legend */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="badge-live inline-flex items-center gap-1.5">
              <Rocket size={11} /> Live — production ready
            </span>
            <span className="badge-beta inline-flex items-center gap-1.5">
              <FlaskConical size={11} /> Beta — limited access
            </span>
            <span className="badge-dev inline-flex items-center gap-1.5">
              <Clock size={11} /> In Development — coming soon
            </span>
          </div>
        </div>

        {/* ── Product grid ────────────────────────────── */}
        {/* 3-column on lg, 2-column on md, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => {
            const { badge, Icon } = STATUS[p.status];
            return (
              <article
                key={p.name}
                className="card-base card-hover group flex flex-col relative overflow-hidden"
              >
                {/* Thin top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${p.accent}
                    opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Status badge + hex icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`${badge} inline-flex items-center gap-1.5`}>
                    <Icon size={11} />
                    {STATUS[p.status].label}
                  </span>
                  <span
                    className={`text-2xl font-mono leading-none bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}
                  >
                    {p.icon}
                  </span>
                </div>

                {/* Name + tagline */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {p.name}
                </h3>
                <p className="text-xs font-mono text-blue-500 dark:text-cyan-400 mb-3">
                  {p.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-5">
                  {p.desc}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  {p.url ? (
                    <a href={p.url} className="btn-primary text-xs px-4 py-2">
                      View Product <ExternalLink size={12} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold
                        text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800
                        rounded-lg cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      aria-label={`${p.name} GitHub repository`}
                      className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      <GitHubIcon size={16} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
