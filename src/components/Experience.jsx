// ── Career history data ──────────────────────────────────────
const EXPERIENCE = [
  {
    role:       "Principal Tech Lead & Solutions Architect",
    company:    "FinTech Innovations Ltd.",
    period:     "Jan 2023 – Present",
    location:   "London, UK · Hybrid",
    highlights: [
      "Architected and led delivery of a cloud-native Azure platform handling 2 M+ daily transactions across 4 regions.",
      "Cut infrastructure costs by 40 % through FinOps redesign — Reserved Instances, right-sizing, and intelligent auto-scaling.",
      "Owned full technical strategy for 3 cross-functional squads (12 engineers), setting ADRs, RFC processes, and security baselines.",
      "Introduced Azure DevOps/GitHub Actions CI/CD pipelines reducing release cycles from 2 weeks to same-day deployments.",
    ],
    tech:    ["Azure", ".NET 8", "React", "Kubernetes", "Cosmos DB", "Event Hub", "Terraform"],
    current: true,
  },
  {
    role:       "Senior .NET Developer & Team Lead",
    company:    "Digital Commerce Corp.",
    period:     "Mar 2020 – Dec 2022",
    location:   "Remote",
    highlights: [
      "Designed a multi-tenant SaaS e-commerce platform processing £500 M+ annual GMV with 99.99 % uptime SLA.",
      "Led monolith-to-microservices migration using Azure Service Bus, CQRS, and event-driven architecture.",
      "Mentored 6 mid-level engineers and implemented a structured technical career growth framework.",
      "Achieved zero-downtime deployments via blue-green deployments on Azure Container Apps.",
    ],
    tech:    ["ASP.NET Core", "React", "Service Bus", "Redis", "SQL Server", "Docker"],
    current: false,
  },
  {
    role:       "Full Stack Developer",
    company:    "Creative Tech Agency",
    period:     "Jun 2017 – Feb 2020",
    location:   "Manchester, UK",
    highlights: [
      "Delivered 20+ bespoke web applications for enterprise clients across finance, retail, and healthcare sectors.",
      "Introduced TypeScript and React to the agency stack — improved code quality scores by 35 % within 6 months.",
      "Built CI/CD pipelines with Azure DevOps, compressing release cycle from 2 weeks to 2 days.",
    ],
    tech:    ["C#", "React", "TypeScript", "Azure DevOps", "Angular", "SQL Server"],
    current: false,
  },
  {
    role:       "Junior .NET Developer",
    company:    "Softworks Ltd.",
    period:     "Sep 2014 – May 2017",
    location:   "Birmingham, UK",
    highlights: [
      "Built and maintained internal business applications with ASP.NET MVC and Web API.",
      "Contributed to open-source developer-tooling libraries adopted company-wide.",
      "Completed intensive training programme in software architecture patterns and cloud fundamentals.",
    ],
    tech:    ["C#", "ASP.NET MVC", "jQuery", "SQL Server", "TFS"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/40">
      <div className="section-container">

        {/* ── Section header ─────────────────────────── */}
        <div className="mb-16">
          <span className="mono text-sm font-mono mb-3 block">04. experience</span>
          <h2 className="section-title">Career Timeline</h2>
          <p className="section-subtitle">
            10+ years of progressive engineering experience — from junior developer
            to principal architect and cross-functional tech lead.
          </p>
        </div>

        {/* ── Vertical timeline ──────────────────────── */}
        <div className="relative">
          {/* Continuous line running through all dots */}
          <div
            className="absolute left-[15px] sm:left-[31px] top-3 bottom-3 w-px
              bg-gradient-to-b from-blue-500 via-violet-400/60 to-transparent"
          />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-10 sm:pl-20">

                {/* Timeline dot — pulsing for current role */}
                <div
                  className={`absolute left-[8px] sm:left-[24px] top-5 w-4 h-4 rounded-full border-2 z-10
                    ${exp.current
                      ? "bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/50"
                      : "bg-gray-50 dark:bg-gray-900 border-gray-400 dark:border-gray-600"
                    }`}
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-40" />
                  )}
                </div>

                {/* Role card */}
                <div className="card-base card-hover group">

                  {/* Header row: role title + period badge */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-blue-500 dark:text-cyan-400">
                          {exp.company}
                        </span>
                        <span className="text-gray-300 dark:text-gray-700">·</span>
                        <span className="text-gray-500 dark:text-gray-500">{exp.location}</span>
                      </div>
                    </div>

                    {/* Period — right-aligned, monospace pill */}
                    <span className="shrink-0 font-mono text-xs text-gray-500 dark:text-gray-500
                      bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-blue-500 dark:text-cyan-400 mt-0.5 shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
