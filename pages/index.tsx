import Link from "next/link";
import {
  Banner,
  BasePage,
  Button,
  GridContainer,
  GridElement,
  HeroBanner,
  Surface,
  TextWrapper,
} from "../components";

export const Home = () => {
  return (
    <BasePage>
      <>
        <HeroBanner />
        <Banner style={{ minHeight: "max-content" }}>
          <GridContainer direction="column">
            <GridElement padding="0 0 1rem">
              <Surface
                variant="solid"
                color="orange"
                style={{
                  width: "100%",
                  height: "fit-content",
                }}
              >
                <TextWrapper color="white">
                  <h3>
                    My journey has been an exciting mix of diverse technologies,
                    creative challenges, and some unforgettable collaborations.
                  </h3>
                  <p>
                    I've always been eager to push my boundaries, and even
                    though I strive to stay ahead of the curve and explore new
                    tools, there's always room for improvement, and that's what
                    keeps me going.
                  </p>
                  <p>
                    So, grab a cup of coffee and take a closer look at my
                    projects - they may not be perfect, but they're a testament
                    to my passion for all things digital.
                  </p>
                  <p>
                    I'm excited to share them with you, and who knows, we might
                    just learn something new together!
                  </p>
                  <Link href="/projects" scroll={false}>
                    <Button>Ready to explore?</Button>
                  </Link>
                </TextWrapper>
              </Surface>
            </GridElement>
            <GridElement>
              <Surface style={{ alignSelf: "end", width: "100%" }}></Surface>
            </GridElement>
          </GridContainer>
        </Banner>
      </>
    </BasePage>
  );
};

export default Home;
