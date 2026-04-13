// src/components/ProjectsSection.jsx
import { useState } from "react";

const PROJECTS = [
  {
    title: "REST-Based Expense Tracker (Cloud + Backend)",
    img: "/smart-expense-tracker.png",
    blurb:
      "Serverless expense management platform built with AWS Lambda, API Gateway, DynamoDB, and S3.",
    details: [
      "Designed and implemented RESTful APIs to support scalable expense management operations with validation and structured error handling.",
      "Built and deployed a serverless backend using AWS Lambda and API Gateway for scalability and low infrastructure overhead.",
      "Modeled DynamoDB schemas for efficient querying, consistency, and faster data retrieval.",
      "Implemented structured logging and backend validation for reliability and maintainability.",
    ],
    tech: ["Python", "REST APIs", "AWS Lambda", "API Gateway", "DynamoDB", "S3"],
  },

  {
    title: "Crop Disease Detection – Mobile ML Application",
    img: "/crop-disease-detection.png",
    blurb:
      "Cross-platform mobile application for crop disease detection using TensorFlow Lite and computer vision.",
    details: [
      "Developed Android and iOS mobile application with real-time image processing and sensor-driven inputs.",
      "Integrated TensorFlow Lite for on-device disease prediction with fast inference.",
      "Optimized memory usage and model performance, improving prediction accuracy by 40% and stability by 80%.",
      "Designed modular architecture and prepared technical documentation for long-term maintainability.",
    ],
    tech: ["Flutter", "TensorFlow Lite", "Computer Vision", "Mobile Development"],
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
      {/* Image */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Title on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4">
          <h3 className="text-white text-2xl font-bold text-center">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Expand Description on Click */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] p-5" : "max-h-0 px-5"
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
      </div>

      {/* Glow Border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-fuchsia-400/40" />
    </div>
  );
}

export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 w-full">
      <h2 className="h-heading text-center text-5xl md:text-6xl font-bold text-white mb-10">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.title}
            item={project}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
}