import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import { useRef } from "react";
// import { DirectionalLightHelper } from "three";

function EarthModel() {
  const { scene } = useGLTF("./earth.glb");
  const earthRef = useRef();

  return (
    <primitive
      ref={earthRef}
      object={scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Background */}
        <color attach="background" args={["#000"]} />

        {/* Soft ambient light for gentle illumination */}
        <ambientLight intensity={0.3} />

        {/* Directional light simulating sunlight */}
        <directionalLight
          position={[5, 3, 5]}
          intensity={2}
          color={"#ffffff"}
          castShadow
        />

        {/* Secondary fill light (to brighten dark side slightly) */}
        <pointLight position={[-5, -3, -5]} intensity={0.5} color={"#4488ff"} />

        {/* Earth model */}
        <EarthModel />

        {/* Background stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        {/* Orbit controls to rotate camera */}
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default App;
