import { Canvas } from "@react-three/fiber";

function App() {

  return (
    <>
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [0, 0, 5] }} >
        <color attach="background" args={["#f0f0f0"]} />
      </Canvas>
    </div>
    </>
  )
}

export default App
