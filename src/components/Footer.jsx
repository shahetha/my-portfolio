// src/components/Footer.jsx
function nowLocal() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  const Social = ({href, children}) => (
    <a href={href} target="_blank" rel="noreferrer"
       className="px-3 py-1 rounded-lg border border-white/10 hover:border-white/25 text-neutral-300 hover:text-white transition">
      {children}
    </a>
  );
  
  export default function Footer() {
    return (
      <footer id="contact" className="border-t border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* <Social href="https://github.com/">GitHub</Social> */}
            <Social href="https://www.linkedin.com/">LinkedIn</Social>
          </div>
          <div className="text-neutral-400 text-sm">
            Local time: <span className="text-white">{nowLocal()}</span> • © 2025
          </div>
        </div>
      </footer>
    );
  }
  