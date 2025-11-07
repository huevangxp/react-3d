// Sun.jsx
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";



function Sun() {
  const sunRef = useRef();
  const { scene } = useGLTF("./sun.glb");
  return (
    <mesh ref={sunRef} position={[30, 30, 30]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Sun;

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import Sun from "./components/Sun";

// function EarthModel() {
//   const { scene } = useGLTF("./earth.glb");
//   const earthRef = useRef();

//   return (
//     <primitive
//       ref={earthRef}
//       object={scene}
//       scale={2}
//       position={[0, 0, 0]}
//       rotation={[0, 0, 0]}
//     />
//   );
// }

// function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
//       <Canvas camera={{ position: [0, 0, 5], fov: 120 }}>
//         {/* Background */}
//         <color attach="background" args={["#000"]} />

//         {/* Soft ambient light */}
//         <ambientLight intensity={0.3} />

//         {/* Directional light (simulating sunlight hitting Earth) */}
//         <directionalLight
//           position={[5, 3, 5]}
//           intensity={2}
//           color={"#ffffff"}
//           castShadow
//         />

//         {/* Secondary fill light */}
//         <pointLight position={[-5, -3, -5]} intensity={0.5} color={"#4488ff"} />

//         {/* Earth model */}
//         <EarthModel />

//         {/* Add the Sun */}
//         <Sun />

//         {/* Background stars */}
//         <Stars radius={100} depth={10} count={5000} factor={1} fade />

//         {/* Orbit controls */}
//         <OrbitControls enablePan={false} enableZoom={true} />
//       </Canvas>
//     </div>
//   );
// }

// export default App;

