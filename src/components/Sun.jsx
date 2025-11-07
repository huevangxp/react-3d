// Sun.jsx
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";



function Sun() {
  const sunRef = useRef();
  const { scene } = useGLTF("./sun.glb");
  return (
    <mesh ref={sunRef} position={[8, 3, 0]}>
     
    </mesh>
  );
}

export default Sun;
