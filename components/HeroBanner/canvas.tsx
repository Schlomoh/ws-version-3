import styled from "styled-components";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import {
  Environment,
  Preload,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { MoonLoader } from "react-spinners";

import ScrollElement from "./scrollElement";
import Shadow from "./shadow";
import GroundPlane from "./groundPlane";
import Model from "./model";
import { Suspense } from "react";
import { CenterColumn, CenterRow, PaddingContainer } from "../Styled";

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
        <div
          style={{
            zIndex: 2000,
            position: "absolute",
            right: 0,
            top: "1rem",
          }}
        >
          <h3
            style={{
              textOrientation: "upright",
              writingMode: "vertical-lr",
              margin: "0 2rem",
            }}
          >
            Scroll down V
          </h3>
        </div>
        <Suspense
          fallback={
            <PaddingContainer justify="center" align="center">
              <MoonLoader color="white" />
            </PaddingContainer>
          }
        >
          <ThreeCanvas shadows>
            <Environment files="3d/studio.hdr" />
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
            <Preload all />
          </ThreeCanvas>
        </Suspense>
      </CanvasContainer>
      <CanvasOffset />
    </>
  );
};

export default Canvas;
