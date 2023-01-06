import styled from "styled-components";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Preload, Scroll, ScrollControls } from "@react-three/drei";

import ScrollElement from "./scrollElement";
import Shadow from "./shadow";
import GroundPlane from "./groundPlane";
import Model from "./model";

const CanvasContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 80vh;
`;

const CanvasOffset = styled.div`
  height: 50vh;
`;

const Canvas = () => {
  return (
    <>
      <CanvasContainer>
        <ThreeCanvas shadows>
          <ScrollControls
            pages={1} // Each page takes 100% of the height of the canvas
            distance={0.1} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
            horizontal={false} // Can also scroll horizontally (default: false)
            infinite={false}
          >
            <Scroll>
              <ScrollElement>
                <Model />
              </ScrollElement>
            </Scroll>
          </ScrollControls>
          <Shadow />
          <GroundPlane />
          <Preload />
        </ThreeCanvas>
      </CanvasContainer>
      <CanvasOffset />
    </>
  );
};

export default Canvas;
