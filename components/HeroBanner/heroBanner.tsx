import { useState } from "react";
import styled from "styled-components";

import { Euler } from "three";
import { Canvas as ThreeCanvas, useFrame } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Model } from "./model";

import {
  GridContainer,
  GridElement,
  PaddingContainer,
  Surface,
  TextWrapper,
} from "../Styled";

const Banner = styled(PaddingContainer)`
  padding-top: 0;
  min-height: 80vh;
`;

const CanvasContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
`;

const ScrollElement = () => {
  const [progress, setProgress] = useState(0);
  const data = useScroll();

  const calcRot = (alpha: number) => Math.PI * 2 * alpha;

  useFrame(() => {
    setProgress(data.range(0, 1));
  });

  const yRotation = calcRot(progress);
  return <Model rotation={new Euler(0, yRotation, 0)} />;
};

const Canvas = () => {
  return (
    <ThreeCanvas>
      <ScrollControls
        pages={1} // Each page takes 100% of the height of the canvas
        distance={1} // A factor that increases scroll bar travel (default: 1)
        damping={4} // Friction, higher is faster (default: 4)
        horizontal={false} // Can also scroll horizontally (default: false)
        infinite={false}
      >
        <Scroll>
          <ScrollElement />
        </Scroll>
      </ScrollControls>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </ThreeCanvas>
  );
};

const HeroBanner = () => {
  return (
    <Banner>
      <GridContainer>
        <GridElement>
          <Surface color="pink" style={{ alignSelf: "end" }}>
            <TextWrapper color="black">
              <h2>Glad</h2>
              <h1>you're here!</h1>
            </TextWrapper>
            <TextWrapper color="black">
              <p>
                Would you like to learn more about the projects I've worked on?
                Here is my story so far, with links that will take you right
                into some of those past endeavours. Let me know what you think!
              </p>
            </TextWrapper>
          </Surface>
        </GridElement>
        <GridElement></GridElement>
      </GridContainer>
      <CanvasContainer>
        <Canvas />
      </CanvasContainer>
    </Banner>
  );
};

export default HeroBanner;
