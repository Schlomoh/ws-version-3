import BasePage from "../components/basePage";

import { PaddingContainer } from "../components/globalStyledComponents";
import ProjectHomeListing from "../components/projectListing";

import background from "../assets/img/background.jpg";

import { projectContent } from "./projects";

const titleContent = {
  title: "Home Page",
  subTitle: "Welcome, Friend!",
  image: background,
  link: "/",
} as IPageTitleContent;

const Content = () => (
  <>

    <PaddingContainer>
      <h2>Look around</h2>
    </PaddingContainer>
    <ProjectHomeListing low="true" content={projectContent} />
  </>
);

export const Home = () => {
  return <BasePage menuHeaderContent={titleContent} render={<Content />} />;
};

export default Home;
