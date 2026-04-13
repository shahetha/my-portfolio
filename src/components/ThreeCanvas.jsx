import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Environment } from '@react-three/drei'

function SpinningTorus() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <meshStandardMaterial color="#6366f1" metalness={0.4} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function ThreeCanvas() {
  return (
    <div className="h-[360px] md:h-[500px]">
      <Canvas shadows dpr={[1, 1.75]} camera={{ position: [3, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Environment preset="city" />
        <SpinningTorus />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  )
}
