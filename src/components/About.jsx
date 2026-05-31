import { Cloud, Code2, Database, GitBranch, Layout, Lock, Server, Zap } from "lucide-react";

// ── Skill cards data ────────────────────────────────────────
const SKILLS = [
  {
    icon:  Cloud,
    title: "Cloud Architecture",
    desc:  "Resilient, cost-optimised multi-region Azure architectures using ARM templates, Bicep, and Terraform.",
    color: "text-blue-500",
    bg:    "bg-blue-500/10",
  },
  {
    icon:  Server,
    title: "System Design",
    desc:  "Distributed systems, microservices, event-driven patterns, CQRS, and API-first design at enterprise scale.",
    color: "text-cyan-500",
    bg:    "bg-cyan-500/10",
  },
  {
    icon:  Code2,
    title: ".NET / C# Ecosystem",
    desc:  "Expert-level .NET 6/7/8, ASP.NET Core, Minimal APIs, SignalR, Worker Services, and EF Core.",
    color: "text-violet-500",
    bg:    "bg-violet-500/10",
  },
  {
    icon:  Layout,
    title: "React & TypeScript",
    desc:  "Modern React patterns — hooks, context, Suspense, React Query, and TypeScript-first codebases.",
    color: "text-emerald-500",
    bg:    "bg-emerald-500/10",
  },
  {
    icon:  GitBranch,
    title: "DevOps & CI/CD",
    desc:  "Azure DevOps pipelines, GitHub Actions, containerised deployments, and Infrastructure as Code workflows.",
    color: "text-orange-500",
    bg:    "bg-orange-500/10",
  },
  {
    icon:  Database,
    title: "Data & Storage",
    desc:  "Azure SQL, Cosmos DB, Redis Cache, Blob Storage, and event streaming with Service Bus & Event Hub.",
    color: "text-rose-500",
    bg:    "bg-rose-500/10",
  },
  {
    icon:  Lock,
    title: "Security & IAM",
    desc:  "Zero-trust architecture, Azure Entra ID, managed identities, Key Vault, RBAC, and OWASP compliance.",
    color: "text-amber-500",
    bg:    "bg-amber-500/10",
  },
  {
    icon:  Zap,
    title: "Performance Engineering",
    desc:  "CPU/memory profiling, multi-layer caching, CDN strategy, lazy loading, and sub-100 ms API targets.",
    color: "text-pink-500",
    bg:    "bg-pink-500/10",
  },
];

const STACK = [
  "C# / .NET 8", "ASP.NET Core", "TypeScript", "React", "Next.js", "Node.js",
  "Azure", "Terraform", "Bicep", "Docker", "Kubernetes", "GitHub Actions",
  "Azure DevOps", "SQL Server", "PostgreSQL", "Cosmos DB", "Redis", "Service Bus",
  "SignalR", "gRPC", "REST", "GraphQL", "Tailwind CSS", "OWASP",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="section-container">

        {/* ── Section header ─────────────────────────── */}
        <div className="mb-16">
          <span className="mono text-sm font-mono mb-3 block">01. about</span>
          <h2 className="section-title">Core Expertise</h2>
          <p className="section-subtitle">
            A full-spectrum engineer with deep expertise across cloud, backend,
            and frontend — from writing code to architecting enterprise systems
            and leading cross-functional engineering teams.
          </p>
        </div>

        {/* ── 4-column responsive skill grid ─────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="card-base card-hover group cursor-default">
                {/* Animated icon container — scales up on card hover */}
                <div
                  className={`inline-flex p-3 rounded-xl ${skill.bg} mb-4
                    group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className={skill.color} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm leading-snug">
                  {skill.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Full tech stack tags ────────────────────── */}
        <div className="mt-12 card-base">
          <h3 className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-5">
            // full technology stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
