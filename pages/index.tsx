import BasePage from "../components/basePage";

import { PaddingContainer } from "../components/globalStyledComponents";
import ProjectHomeListing from "../components/projectListing";

import background from "../assets/img/background.jpg";

import { projectContent } from "./projects";

const titleContent = {
  title: "Home Page.",
  subTitle: "Welcome, Friend!",
  image: background,
  link: "/",
} as IPageTitleContent;

const Content = () => (
  <>
    <PaddingContainer>
      <h2>Glad you are here!</h2>
      <p>
        If you share my interest in the latest technologies and ever-changing
        topics, I&apos;m sure you&apos;ll find something you like here. And who
        knows, maybe the opportunity will arise to get to know each other and
        share ideas.
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
