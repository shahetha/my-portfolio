// src/components/Navbar.jsx
const Link = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-1 text-base font-medium text-neutral-200 hover:text-white transition whitespace-nowrap"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-2xl">
        <a href="#home" className="font-bold tracking-wide text-white">
          Portfolio
        </a>

        {/* email + status pill (desktop only) */}
        <div className="hidden md:flex items-center gap-1">
          <a href="mailto:shahshan@iu.edu" className="hover:text-white">
            shahshan@iu.edu
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 text-emerald-300/90 px-3 py-1">
            <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
            Available
          </span>
        </div>

        {/* nav links */}
        <div className="flex items-center">
          <Link href="#experience">Experience</Link>
          <Link href="#education">Education</Link>
          <Link href="#techstack">Tech Stack</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}