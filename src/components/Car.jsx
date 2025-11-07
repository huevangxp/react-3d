import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function CarModel() {
  const { scene } = useGLTF("./sun.glb");
  const carRef = useRef();

  const handleCarClick = () => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.2; // Rotate slightly on click
    }
  };

  return (
    <primitive
      ref={carRef}
      object={scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      onClick={handleCarClick}
    />
  );
}

export default function Car() {
  return (
    <div style={{ width: "500vw", height: "50vh", backgroundColor: "#080808" }}>
      <Canvas camera={{ position: [0, 1, 6], fov: 50 }}>
        {/* Background */}
        <color attach="background" args={["#fff"]} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <pointLight position={[-5, 3, -5]} intensity={0.6} color="#66ccff" />

        {/* Car Model */}
        <CarModel />

        {/* Controls */}
        <OrbitControls enablePan={false} enableZoom={true} />

      </Canvas>
    </div>
  );
}
