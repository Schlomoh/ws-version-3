import {
  BasePage,
  HeroBanner,
  PaddingContainer,
  TextWrapper,
} from "../components";

const Content = () => (
  <>
    <PaddingContainer>
      {/* <p>
        I&apos;m compiling my collected experiences here with the hope to
        provide some of my knowledge to others.
      </p> */}
    </PaddingContainer>
  </>
);

export const Home = () => {
  return (
    <BasePage>
      <HeroBanner />
    </BasePage>
  );
};

export default Home;
