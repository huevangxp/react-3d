import { Canvas } from "@react-three/fiber";

function App() {

  return (
    <>
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [0, 0, 5] }} position={[0, 0, 0]} >
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
    </>
  )
}

export default App
