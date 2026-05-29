// src/components/ProjectsSection.jsx
import { useState } from "react";

const PROJECTS = [
  {
    title: "REST-Based Expense Tracker (Cloud + Backend)",
    img: "/smart-expense-tracker.png",
    blurb:
      "Serverless expense management platform built with React, TypeScript, AWS Amplify Gen2, Cognito, DynamoDB, and AppSync.",
    details: [
      "Built a serverless expense tracker using AWS Amplify Gen2, provisioning Cognito, DynamoDB, and AppSync GraphQL API from TypeScript schema definitions.",
      "Designed a single-table DynamoDB schema with owner-based authorization, ensuring all queries are scoped to the authenticated user's Cognito identity.",
      "Developed a fintech SaaS dashboard in React and TypeScript with KPI cards, spending charts, and glassmorphism UI, deployed on Vercel.",
      "Implemented dual-mode authentication supporting AWS Cognito in production and mock dev mode for portfolio demonstration.",
    ],
    tech: [
      "React",
      "TypeScript",
      "AWS Amplify",
      "Cognito",
      "AppSync",
      "DynamoDB",
      "GraphQL",
      "Vercel",
    ],
    demoLink: "https://serverless-expense-tracker-sigma.vercel.app",
    codeLink: "https://github.com/shahetha/serverless-expense-tracker",
  },
  {
    title: "FlowBoard — Kanban Task Management App",
    img: "/flowboard.png",
    blurb:
      "A polished Kanban-style task management app for creating, organizing, and moving tasks across workflow stages.",
    details: [
      "Built a modern Kanban board with default workflow columns: To Do, In Progress, In Review, and Done.",
      "Implemented drag-and-drop task movement with status updates across board sections.",
      "Used Supabase for database persistence, guest authentication, and user-specific task isolation.",
      "Designed a clean dark UI with clear visual hierarchy, responsive layout, task cards, filters, and smooth interactions.",
      "Deployed the frontend on Cloudflare Pages for fast live access.",
    ],
    tech: [
      "JavaScript",
      "Supabase",
      "Auth",
      "RLS",
      "Drag-and-Drop",
      "Cloudflare Pages",
    ],
    demoLink: "https://flowboard-3an.pages.dev/",
    codeLink: "https://github.com/shahetha/FlowBoard",
  },

  {
    title: "SnapNote — iOS Application",
    img: "/snapnote.png",
    blurb:
      "Speech-to-text iOS application for smart note creation, offline access, and searchable storage.",
    details: [
      "Designed and developed an iOS application with real-time speech-to-text note creation.",
      "Implemented categorized and searchable note storage for better organization.",
      "Added offline caching and local persistence for reliable access without internet connectivity.",
      "Structured the app with clear separation between UI, storage, and speech processing layers.",
    ],
    tech: ["iOS", "Swift", "Speech-to-Text", "Mobile Systems"],
    demoLink: "",
    codeLink: "https://github.com/shahetha/Snapnote",
  },

  {
    title: "Crop Disease Detection — Mobile ML Application",
    img: "/crop-disease-detection.png",
    blurb:
      "Cross-platform mobile application for crop disease detection using TensorFlow Lite and computer vision.",
    details: [
      "Developed a mobile application for crop leaf disease prediction using image processing.",
      "Integrated TensorFlow Lite for on-device disease detection and fast inference.",
      "Designed a modular mobile architecture for maintainability and future model upgrades.",
      "Focused on real-world agricultural use cases by helping detect plant disease early from leaf images.",
    ],
    tech: ["Flutter", "TensorFlow Lite", "Computer Vision", "Mobile ML"],
    demoLink: "",
    codeLink: "",
  },
];

function Card({ item, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative rounded-2xl border border-white/10 overflow-hidden bg-black/40
                 transition-all duration-300 hover:-translate-y-1
                 hover:shadow-[0_0_60px_rgba(167,139,250,.18)]"
    >
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4">
          <h3 className="text-white text-2xl font-bold text-center">
            {item.title}
          </h3>
        </div>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[650px] p-5" : "max-h-0 px-5"
        }`}
      >
        <h3 className="text-white text-lg font-semibold">{item.title}</h3>

        <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
          {item.blurb}
        </p>

        <ul className="mt-3 space-y-2 text-sm text-neutral-400 list-disc list-inside">
          {item.details.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full border border-fuchsia-400/30 text-fuchsia-300 bg-fuchsia-500/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {item.demoLink && (
            <a
              href={item.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white text-sm font-semibold hover:brightness-110 transition"
            >
              Live Demo
            </a>
          )}

          {item.codeLink && (
            <a
              href={item.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 rounded-xl border border-white/15 text-white text-sm font-semibold hover:border-white/30 transition"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-fuchsia-400/40" />
    </div>
  );
}

export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-6 w-full">
      <h2 className="h-heading text-center text-5xl md:text-6xl font-bold text-white mb-10">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <Card
            key={project.title}
            item={project}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => {
            setShowMore((prev) => !prev);
            setOpenIndex(null);
          }}
          className="px-6 py-3 rounded-2xl border border-white/15 text-white font-semibold hover:border-fuchsia-400/50 hover:text-fuchsia-300 transition"
        >
          {showMore ? "Show Less" : "More Projects"}
        </button>
      </div>
    </div>
  );
}