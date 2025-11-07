// Sun.jsx
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";



function Sun() {
  const sunRef = useRef();
  const { scene } = useGLTF("./sun.glb");
  return (
    <mesh ref={sunRef} position={[300, 30, 30]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Sun;
