import { BasePage, PaddingContainer } from "../components";

const Content = () => (
  <>
    <PaddingContainer>
      <h2>Glad you are here!</h2>
      <p>
        Would you like to learn more about the projects I've worked on? Here is
        my story so far, with links that will take you right into some of those
        past endeavours. Let me know what you think!
      </p>
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
      <Content />
    </BasePage>
  );
};

export default Home;
