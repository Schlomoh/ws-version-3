import React, { useRef } from "react";
import styled from "styled-components";
import useElementIntersection from "../../utils/intersectionObserver";

const StScrollElement: any = styled.div`
  background-color: ${(props: any) => props.background};
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;

  // animate
  opacity: ${(props: any) => (props.vis ? 1 : 0)};
  transform: ${(props: any) =>
    props.vis ? "scale3d( 1, 1,1 )" : "scale3d(0.75, 0.75, 0.75);"};
  transition: opacity ease-in-out 0.6s,
    transform cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s;
`;

const ScrollElement = ({
  children,
  bg,
}: {
  children: React.ReactChild | React.ReactChild[];
  bg: string;
}) => {
  function createThresholdArr(): number[] {
    // array = [0.00, 0.01, ..., 0.99, 1.00]
    return Array.from(Array(100).keys(), (i) => i / 100);
  }

  const options = {
    root: null,
    rootMargin: "-200px",
    threshold: createThresholdArr(),
  };

  const [ref, visible, ratio] = useElementIntersection(options);

  return (
    <StScrollElement vis={visible} ref={ref} background={bg}>
      {children}
    </StScrollElement>
  );
};

export default ScrollElement;
