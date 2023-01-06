import { useState } from "react";
import { Euler } from "three";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ScrollElement = ({ children }: { children: JSX.Element }) => {
  const [progress, setProgress] = useState(0);
  const data = useScroll();

  const calcRot = (alpha: number) => Math.PI * 2 * alpha;

  useFrame(() => {
    setProgress(data.range(0, 1));
  });

  const yRotation = calcRot(progress);
  return (
    <group
      rotation={new Euler(0, yRotation, 0)}
      scale={0.6}
      position={[0, 0.6, 0]}
    >
      {children}
    </group>
  );
};

export default ScrollElement;
