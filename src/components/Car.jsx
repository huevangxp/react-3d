import { Canvas } from '@react-three/fiber'

const Car = () => {
  return (
    <div>
        <Canvas>

            <color attach="background" args={["#000"]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>

        </Canvas>
    </div>
  )
}

export default Car