import styled from "styled-components";
import {
  GridContainer,
  GridElement,
  PaddingContainer,
  Surface,
  TextWrapper,
  theme,
} from "../Styled";
import Canvas from "./canvas";

const Banner = styled(PaddingContainer)`
  padding-top: 0;
  min-height: 80vh;
`;

const HeroBanner = () => {
  return (
    <Banner>
      <GridContainer>
        <GridElement>
          <Surface variant="outlined" color="pink" style={{ alignSelf: "end" }}>
            <TextWrapper>
              <h2>Hey,</h2>
            </TextWrapper>
            <TextWrapper color={theme.colors.accent.pink}>
              <h1>found me!</h1>
            </TextWrapper>
            <TextWrapper color="lightgrey">
              <p>Find out more about the projects I've worked on!</p>
              <p>
                Here is my story so far, with links that will take you right
                into some of those past endeavours. Let me know what you think!
              </p>
            </TextWrapper>
          </Surface>
        </GridElement>
        <GridElement>
          <Surface color="blue" style={{ width: "100%" }} />
          <Canvas />
        </GridElement>
      </GridContainer>
    </Banner>
  );
};

export default HeroBanner;
