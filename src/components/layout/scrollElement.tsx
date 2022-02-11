import React, { useRef } from "react";
import styled from "styled-components";
import useElementIntersection from "../utils/intersectionObserver";

const StScrollElement: any = styled.div`
  background-color: ${(props: any) => props.background};
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
`;

const ScrollElement = ({
  children,
  bg,
}: {
  children: React.ReactChild | React.ReactChild[];
  bg: string;
}) => {
  
  return (
    <StScrollElement background={bg}>
      {children}
    </StScrollElement>
  );
};

export default ScrollElement;
