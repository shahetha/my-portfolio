import { useState } from "react"

const ITEMS = [
  {
    role: "Teaching Assistant",
    company: "Indiana University Bloomington",
    period: "Aug 2025 — Dec 2025",
    summary:
      "Mentoring students in C and Unix programming, debugging low-level code, and supporting systems programming coursework.",
    details: [
      "Mentored 100+ students in C and Unix programming, including memory management, multithreading, process synchronization, file I/O, signals, and socket-based communication.",
      "Debugged low-level C programs using POSIX APIs, Makefiles, and Linux tools to improve correctness and performance.",
      "Evaluated implementations against strict specifications, focusing on edge cases, robustness, and system-level correctness.",
      "Explained concurrency models, thread synchronization, and performance trade-offs in low-level systems."
    ],
    tech: ["C", "Linux", "GCC", "GDB", "Git", "POSIX APIs"],
  },
  {
    role: "Developer",
    company: "WNS Vuram",
    period: "Jul 2022 — Apr 2024",
    summary:
      "Built scalable backend services and enterprise onboarding workflows with REST APIs, SQL optimization, and cloud integrations.",
    details: [
      "Designed and implemented scalable backend services in a client-server architecture using REST APIs for enterprise onboarding systems.",
      "Optimized SQL queries and data workflows using indexing and execution-plan analysis, improving performance by 25% and reducing infrastructure costs by 15%.",
      "Contributed to service-oriented architecture and collaborated across distributed components in production environments.",
      "Improved backend workflows by enhancing server-side data processing logic and reducing system inefficiencies.",
      "Diagnosed and resolved production issues through log analysis and root cause identification, improving application reliability."
    ],
    tech: ["Java", "REST APIs", "SQL", "AWS S3", "Appian", "SOA", "CI/CD"],
  },
  {
    role: "Intern",
    company: "WNS Vuram",
    period: "Oct 2021 — Jul 2022",
    summary:
      "Worked on enterprise low-code applications, workflow automation, and platform development while building a strong foundation in Appian and business process implementation.",
    details: [
      "Built and customized workflow-based applications using Appian to support enterprise business processes.",
      "Assisted in developing and testing low-code solutions, gaining hands-on experience in application design, data handling, and process modeling.",
      "Worked with teams to automate routine workflows and improve process efficiency across internal use cases.",
      "Participated in Agile ceremonies, including sprint planning, daily stand-ups, and progress reviews.",
      "Documented implementation steps, configurations, and workflows to support maintainability and knowledge transfer."
    ],
    tech: ["Appian", "Workflow Automation", "Process Modeling", "Agile", "Jira", "Confluence"],
  },
  {
    role: "Developer",
    company: "Uniq Technologies",
    period: "Jan 2021 — Feb 2021",
    summary:
      "Developed Java-based applications and web modules using object-oriented design and MVC principles.",
    details: [
      "Developed Java-based applications using OOP principles and the Collections framework to implement CRUD operations and business logic modules.",
      "Implemented input validation and exception handling mechanisms to improve application stability and prevent runtime failures.",
      "Built web modules using JSP/Servlet architecture while following MVC design principles."
    ],
    tech: ["Java", "JSP", "Servlets", "OOP", "Collections", "MVC"],
  },
]

export default function ExperienceTimeline() {
  const [openItems, setOpenItems] = useState([])

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Experience
      </h2>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-10">
        {ITEMS.map((item, i) => {
          const expanded = openItems.includes(i)

          return (
            <article key={`${item.role}-${item.company}`} className="relative pl-8 md:pl-10">
              {/* timeline dot */}
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.35)]" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-500">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-sm md:text-base text-neutral-400 whitespace-nowrap">
                    {item.period}
                  </p>
                </div>

                <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                  {item.summary}
                </p>

                {expanded && (
                  <div className="mt-5 space-y-4">
                    <ul className="space-y-3 text-neutral-300">
                      {item.details.map((point, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-white/70 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  className="mt-5 text-sm px-4 py-2 rounded-lg border border-white/10 text-neutral-300 hover:text-white hover:border-white/20 transition"
                  onClick={() =>
                    setOpenItems((prev) =>
                      expanded
                        ? prev.filter((item) => item !== i)
                        : [...prev, i]
                    )
                  }
                  aria-expanded={expanded}
                >
                  {expanded ? "Hide details" : "Show details"}
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}