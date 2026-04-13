import { useState } from "react"

const ITEMS = [
  {
    degree: "Master of Science in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 — May 2026",
    cgpa: "CGPA: 3.8/4.0",
    summary:
      "Focused on software systems, backend development, cloud computing, and intelligent applications.",
    courses: [
      "Applied Algorithms",
      "System Design",
      "Database Concepts",
      "Cloud Computing",
      "Machine Learning",
      "Computer Networks"
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Velammal Engineering College",
    period: "Augx 2017 — Jul 2021",
    cgpa: "CGPA: 8.5/10",
    summary:
      "Built a strong foundation in programming, software engineering, databases, and problem solving.",
    courses: [
      "Data Structures",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering",
      "Web Technologies"
    ],
  },
]

export default function EducationTimeline() {
  const [openItems, setOpenItems] = useState([])

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Education
      </h2>

      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-10">
        {ITEMS.map((item, i) => {
          const expanded = openItems.includes(i)

          return (
            <article
              key={`${item.degree}-${item.school}`}
              className="relative pl-8 md:pl-10"
            >
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-500 shadow-[0_0_20px_rgba(168,85,247,0.35)]" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.degree}
                    </h3>
                    <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-500">
                      {item.school}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-sm md:text-base text-neutral-400 whitespace-nowrap">
                      {item.period}
                    </p>
                    <p className="text-sm md:text-base text-neutral-300 mt-1">
                      {item.cgpa}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                  {item.summary}
                </p>

                {expanded && (
                  <div className="mt-5">
                    <h4 className="text-white font-medium mb-3">
                      Relevant Courses
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-200"
                        >
                          {course}
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
                        ? prev.filter((itemIndex) => itemIndex !== i)
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