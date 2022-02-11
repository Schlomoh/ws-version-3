import styled from "styled-components";

export const StNarratorElement = styled.div`
  position: fixed;
  z-index: 2;

  background-color: transparent;

  width: 100vw;
  height: calc(100vh - 4rem);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .box {
    background-color: black;

    width: 100%;
    height: 100%;

    max-width: 20vw;
    max-height: 20vh;
    min-width: 20vh;
    min-height: 20vw;
  }
`;
