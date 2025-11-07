// Sun.jsx
import { useRef } from "react";
import { MeshStandardMaterial } from "three";

function Sun() {
  const sunRef = useRef();

  return (
    <mesh ref={sunRef} position={[8, 3, 0]}>
      {/* Create a glowing sphere for the sun */}
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        emissive={"#ffff66"} // glowing yellow light
        emissiveIntensity={2}
        color={"#ffcc33"}
      />
      {/* Optional light emitted from sun */}
      <pointLight intensity={2.5} distance={50} color={"#ffd700"} />
    </mesh>
  );
}

export default Sun;
