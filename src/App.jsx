import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";

function EarthModel() {
  const { scene } = useGLTF("./earth.glb");
  return <primitive object={scene} scale={2} />;
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <EarthModel />
        <Stars />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
