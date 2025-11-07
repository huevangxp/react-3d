import { Canvas } from '@react-three/fiber'
import {OrbitControls, useGLTF } from '@react-three/drei'
import { useRef } from 'react'

const Car = () => {

    const { scene } = useGLTF("./car.glb");
    const carRef = useRef();

  return (
    <div>
        <Canvas>

            <color attach="background" args={["#000"]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <mesh ref={carRef}>
                <primitive object={scene} />
            </mesh>

        </Canvas>
    </div>
  )
}

export default Car