import { SoftShadows } from "@react-three/drei";

const Shadow = () => {
  return (
    <>
      {/* <ambientLight /> */}
      {/* <pointLight position={[-10, 10, 10]} />
      <pointLight position={[10, 10, 10]} /> */}
      <directionalLight
        castShadow
        position={[0, 8, 5]}
        intensity={1.5}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </directionalLight>
      {
        // @ts-ignore
        <SoftShadows
          frustum={3.75}
          size={0.005}
          near={9.5}
          samples={17}
          rings={11}
        />
      }
    </>
  );
};

export default Shadow;
