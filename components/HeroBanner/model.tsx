import React from "react";
import { Mesh, MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ["fsf_07_-_Default_0"]: Mesh;
    ["Object006_08_-_Default_0"]: Mesh;
  };
  materials: {
    ["07_-_Default"]: MeshStandardMaterial;
    ["08_-_Default"]: MeshStandardMaterial;
  };
};

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/3d/tv.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null} castShadow>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["fsf_07_-_Default_0"].geometry}
        material={materials["07_-_Default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Object006_08_-_Default_0"].geometry}
        material={materials["08_-_Default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/3d/tv.glb");

export default Model;
