import styled from "styled-components";
import { PaddingContainer, Surface, TextWrapper } from "../Styled";

const Banner = styled(PaddingContainer)`
  height: 80vh;
`;

const HeroBanner = () => {
  return (
    <Banner>
      <Surface color="pink">
        <TextWrapper color="black">
          <h2>Glad</h2>
          <h1>you're here!</h1>
        </TextWrapper>
        <TextWrapper color="black">
          <p>
            Would you like to learn more about the projects I've worked on? Here
            is my story so far, with links that will take you right into some of
            those past endeavours. Let me know what you think!
          </p>
        </TextWrapper>
      </Surface>
    </Banner>
  );
};

export default HeroBanner;
