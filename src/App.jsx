// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero3D";            // we will turn Hero3D into the new Hero
import About from "./components/AboutSplit";       // we’ll repurpose AboutSplit
import Projects from "./components/ProjectsSection"; // we’ll repurpose ProjectsSection
import Footer from "./components/Footer";
import Experience from "./components/ExperienceTimeline";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-neutral-200">
      <Navbar />

      {/* HERO */}
      <section id="home" className="min-h-[100svh] flex items-center justify-center">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-[100svh] flex items-center justify-center bg-[#0e0f13]">
        <About />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="min-h-[100svh] flex items-center justify-center bg-[#101319]">
        <Experience />
      </section>

      {/* EXPERIENCE */}
      <section id="education" className="min-h-[100svh] flex items-center justify-center bg-[#101319]">
        <Education />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-[100svh] flex items-center justify-center bg-[#101319]">
        <Projects />
      </section>

      <Footer />
    </div>
  );
}
