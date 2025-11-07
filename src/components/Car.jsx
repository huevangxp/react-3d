import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function SunModel() {
  const { scene } = useGLTF("./sun.glb");
  const sunRef = useRef();

  const handleClick = () => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.2;
    }
  };

  return (
    <primitive
      ref={sunRef}
      object={scene}
      scale={2} // reasonable scale
      position={[0, 0, 0]} // center it
      rotation={[0, 0, 0]}
      onClick={handleClick}
    />
  );
}

export default function Sun() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }} // move camera back and use normal fov
      >
        {/* Background */}
        <color attach="background" args={["#000"]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color={"#ffffff"} />

        {/* Sun Model */}
        <SunModel />

        {/* Controls */}
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}
