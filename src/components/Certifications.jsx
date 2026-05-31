// ── Inline Azure logo SVG (no external image dependency) ────
function AzureLogo({ className = "w-8 h-8" }) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="az-a" x1="68.13%" y1="17.48%" x2="27.89%" y2="96.35%">
          <stop offset="0%"   stopColor="#114A8B" />
          <stop offset="100%" stopColor="#0669BC" />
        </linearGradient>
        <linearGradient id="az-b" x1="76.12%" y1="55.38%" x2="49.50%" y2="96.61%">
          <stop offset="0%"   stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0"   />
        </linearGradient>
        <linearGradient id="az-c" x1="49.94%" y1="0%"    x2="49.94%" y2="96.14%">
          <stop offset="0%"   stopColor="#3CCBF4" />
          <stop offset="100%" stopColor="#2892DF" />
        </linearGradient>
      </defs>
      <path
        d="M33.34 6.28 14.03 54.15l27.58 32.74-4.07.57H72.7L33.34 6.28Z"
        fill="url(#az-a)"
      />
      <path
        d="M36.18 6.28 55.8 6l24.17 48.35L62.3 86.46H37.54l26.5-4.57L48.69 49.38 36.18 6.28Z"
        fill="url(#az-b)"
        opacity="0.5"
      />
      <path
        d="M55.8 6.28 80 54.63l-17.7 31.83H23.3l39.36-6.57-18.35-33.5L55.8 6.28Z"
        fill="url(#az-c)"
      />
    </svg>
  );
}

// ── Cert data ────────────────────────────────────────────────
const CERTS = [
  {
    code:    "AZ-900",
    name:    "Azure Fundamentals",
    level:   "Fundamentals",
    year:    "2020",
    accent:  "from-blue-500 to-cyan-500",
    desc:    "Core cloud concepts, Azure services, pricing, and SLA fundamentals.",
  },
  {
    code:    "AZ-104",
    name:    "Azure Administrator Associate",
    level:   "Associate",
    year:    "2021",
    accent:  "from-cyan-500 to-teal-500",
    desc:    "Managing Azure subscriptions, governance, storage, compute, and virtual networking.",
  },
  {
    code:    "AZ-204",
    name:    "Azure Developer Associate",
    level:   "Associate",
    year:    "2021",
    accent:  "from-violet-500 to-blue-500",
    desc:    "Designing, building, testing, and maintaining cloud-native applications on Azure.",
  },
  {
    code:    "AZ-305",
    name:    "Azure Solutions Architect Expert",
    level:   "Expert",
    year:    "2022",
    accent:  "from-orange-500 to-rose-500",
    desc:    "Designing end-to-end Azure solutions: compute, networking, storage, identity, and security.",
  },
  {
    code:    "AZ-400",
    name:    "Azure DevOps Engineer Expert",
    level:   "Expert",
    year:    "2022",
    accent:  "from-emerald-500 to-cyan-500",
    desc:    "Continuous integration, delivery, monitoring, and Azure DevOps/GitHub Actions pipelines.",
  },
  {
    code:    "AZ-500",
    name:    "Azure Security Engineer Associate",
    level:   "Associate",
    year:    "2023",
    accent:  "from-rose-500 to-pink-500",
    desc:    "Security controls, identity management, threat protection, and secure data operations.",
  },
  {
    code:    "DP-900",
    name:    "Azure Data Fundamentals",
    level:   "Fundamentals",
    year:    "2021",
    accent:  "from-amber-500 to-orange-500",
    desc:    "Relational and non-relational data concepts, analytics workloads, and Azure data services.",
  },
  {
    code:    "AI-900",
    name:    "Azure AI Fundamentals",
    level:   "Fundamentals",
    year:    "2023",
    accent:  "from-pink-500 to-violet-500",
    desc:    "AI workloads, responsible AI, machine learning, CV, NLP, and Azure AI services.",
  },
];

// Badge styles keyed by certification level
const LEVEL_STYLE = {
  Fundamentals: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
  Associate:    "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400",
  Expert:       "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-900/40">
      <div className="section-container">

        {/* ── Section header ─────────────────────────── */}
        <div className="mb-16">
          <span className="mono text-sm font-mono mb-3 block">02. certifications</span>
          <h2 className="section-title">Azure Certifications</h2>
          <p className="section-subtitle">
            Microsoft Azure certified across multiple disciplines — from foundational
            cloud concepts to expert-level architecture and DevOps engineering.
          </p>
        </div>

        {/* ── Certifications grid ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert) => (
            <div
              key={cert.code}
              className="card-base card-hover group relative overflow-hidden flex flex-col"
            >
              {/* Top accent bar — gradient animates on hover */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cert.accent}
                  opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Row: year + level badge + Azure logo */}
              <div className="flex items-center justify-between pt-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400 dark:text-gray-600">{cert.year}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${LEVEL_STYLE[cert.level]}`}>
                    {cert.level}
                  </span>
                </div>
                <AzureLogo className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Cert exam code — uses same accent gradient as the bar */}
              <span
                className={`font-mono font-bold text-xl bg-gradient-to-r ${cert.accent} bg-clip-text text-transparent mb-1`}
              >
                {cert.code}
              </span>

              {/* Cert full name */}
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug mb-3">
                {cert.name}
              </h3>

              {/* Short description */}
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed mt-auto">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Microsoft Learn profile CTA ─────────────── */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-blue-500 dark:text-cyan-400 hover:underline font-mono transition-opacity duration-200 hover:opacity-80"
          >
            <AzureLogo className="w-4 h-4" />
            View Microsoft Learn Profile →
          </a>
        </div>

      </div>
    </section>
  );
}
