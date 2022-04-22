import BasePage from "../components/basePage";

import { PaddingContainer } from "../components/globalStyledComponents";
import ProjectHomeListing from "../components/projectListing";

import sunset from "../assets/img/sunset.jpg";

import { projectContent } from "./projects";

const titleContent = {
  title: "Home Page.",
  subTitle: "Welcome, Friend!",
  image: sunset,
  link: "/",
} as IPageTitleContent;

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
    <ProjectHomeListing low="true" content={projectContent} />
  </>
);

export const Home = () => {
  return <BasePage menuHeaderContent={titleContent} render={<Content />} />;
};

export default Home;
