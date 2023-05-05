import {
  Banner,
  GridContainer,
  GridElement,
  Surface,
  TextWrapper,
  theme,
} from "../Styled";
import Canvas from "./canvas";

const HeroBanner = () => {
  return (
    <Banner>
      <GridContainer direction="column-reverse" style={{ flexWrap: "nowrap" }}>
        <GridElement padding={"0 0 1rem"}>
          <Surface
            variant="outlined"
            color="pink"
            style={{ alignSelf: "end", width: "100%" }}
          >
            <TextWrapper>
              <h2>Hey,</h2>
            </TextWrapper>
            <TextWrapper color={theme.colors.accent.pink}>
              <h1>found me!</h1>
            </TextWrapper>
            <TextWrapper color="lightgrey">
              <p>
                You've stumbled upon my little corner of the internet, where I
                share the projects I've worked on and the lessons I've learned
                along the way.
              </p>
            </TextWrapper>
          </Surface>
        </GridElement>
        <GridElement padding={"0 0 1rem"}>
          <>
            <Surface
              color="blue"
              style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            />
            <Canvas />
          </>
        </GridElement>
      </GridContainer>
    </Banner>
  );
};

export default HeroBanner;
