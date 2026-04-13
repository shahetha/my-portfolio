// src/components/Hero3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Backend Software Engineer",
  "Cloud Developer",
  "AI-Focused Engineer",
  "Full-Stack Developer",
  "AWS Enthusiast"
];

/** Reflective glowing sphere with soft lights */
function GlowingOrb({ setIsHovered }) {
  return (
    <group>
      <mesh
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <sphereGeometry args={[1.05, 128, 128]} />
        <meshStandardMaterial
          metalness={1}
          roughness={0.12}
          envMapIntensity={1.6}
          color="#9b8cff"
          transparent
          opacity={1}
        />
      </mesh>

      <pointLight intensity={7} color="#7c3aed" distance={6} />
      <ambientLight intensity={0.45} />
      <directionalLight intensity={1.5} position={[4, 5, 3]} />
    </group>
  );
}

export default function Hero3D() {
  const [isHovered, setIsHovered] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="max-w-7xl mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center px-6">    
    {/* Text column */}
      <div className="text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-neutral-200 font-semibold mb-2"
        >
          Hi, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white whitespace-nowrap"        >
          Shahetha Shanmugam
        </motion.h1>

        <motion.h2
          key={roles[roleIndex]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-500"
        >
          {roles[roleIndex]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10"
        >
          I build scalable software, cloud systems, and AI-driven applications using Python, Java, JavaScript, and AWS.
        </motion.p>

        <div className="flex flex-wrap gap-20 justify-center md:justify-start">
        <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white text-lg font-bold shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:scale-105 hover:brightness-110 transition"
>
  Resume
</a>

  <a
    href="mailto:shahshan@iu.edu"
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white text-lg font-bold shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:scale-105 hover:brightness-110 transition"
  >
    Contact
  </a>
</div>

<div className="mt-16 flex gap-5 justify-center md:justify-start">
  <a
    href="https://www.linkedin.com/in/shahetha/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-cyan-300 hover:text-cyan-300 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.1.91 2.02 2.05 2.02a2.02 2.02 0 1 0 0-4.05ZM20.44 12.62c0-3.1-1.65-4.55-3.86-4.55-1.78 0-2.58.98-3.03 1.67V8.5h-3.38V20h3.38v-6.4c0-.34.03-.68.13-.93.27-.68.88-1.39 1.9-1.39 1.35 0 1.89 1.03 1.89 2.54V20H21v-7.38Z" />
    </svg>
  </a>

  {/* <a
    href="https://github.iu.edu/shahshan"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-fuchsia-300 hover:text-fuchsia-300 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.66-.22.66-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.11 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.67.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  </a> */}
</div>
      </div>

      {/* 3D column */}
      <div className="relative h-[360px] md:h-[520px] overflow-hidden md:translate-x-12">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-56 w-56 md:h-72 md:w-72 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <Canvas
          camera={{ position: [0, 0, 4.2] }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: "transparent" }}
        >
          <GlowingOrb setIsHovered={setIsHovered} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={isHovered ? 4 : 1.2}
          />
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
}