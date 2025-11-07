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
    <div style={{ width: "50vw", height: "50vh", backgroundColor: "#080808" }}>
      <Canvas camera={{ position: [1, 1, 1], fov: 600 }}>
        {/* Background */}
        <color attach="background" args={["#000"]} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />

        {/* Car Model */}
        <CarModel />

        {/* Controls */}
        <OrbitControls enablePan={false} enableZoom={true} />

      </Canvas>
    </div>
  );
}
