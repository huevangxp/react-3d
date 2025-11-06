import { Canvas } from "@react-three/fiber";
import { OrbitControls , Stars} from "@react-three/drei";

function App() {

  return (
    <>
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas  camera={{ position: [0, 0, 5] , fov: 50 }}   >
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
      </Canvas>
    </div>
    </>
  )
}

export default App
