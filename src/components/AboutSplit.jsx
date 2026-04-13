// src/components/AboutSplit.jsx
import { motion } from "framer-motion";

export default function AboutSplit() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-10 text-white"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="space-y-6 text-neutral-300 text-lg md:text-xl leading-relaxed text-justify"
      >
        <p>
          I’m{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-500">
          Shahetha Shanmugam
          </span>
          , a Software Engineer currently pursuing a Master’s in Computer
          Science at Indiana University Bloomington.
        </p>

        <p>
          My background spans backend engineering, systems programming, cloud
          architecture, and enterprise software development. I enjoy building
          scalable APIs, optimizing workflows, and designing reliable
          applications with strong engineering fundamentals.
        </p>

        <p>
          I’ve worked with technologies such as{" "}
<span 
className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-500 drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
          Python, Java, JavaScript, AWS, SQL, C, and React
          </span>
          , and I’m especially interested in distributed systems, cloud-native
          applications, and applied AI.
        </p>

        <p>
          I focus on creating software that is efficient, maintainable, and
          built for real-world impact.
        </p>
      </motion.div>
    </div>
  );
}