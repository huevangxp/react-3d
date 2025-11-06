import { Canvas } from "@react-three/fiber";
import { OrbitControls , Stars} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

function App() {

  const texture = useLoader(TextureLoader, "./texture.jpg");

  return (
    <>
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas  camera={{ position: [0, 0, 5] , fov: 50 }}   >
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial map={texture} />
        </mesh>

        <Stars />
        <OrbitControls />
      </Canvas>
    </div>
    </>
  )
}

export default App
