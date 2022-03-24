import BasePage from "../../components/basePage";
import { PaddingContainer } from "../../components/globalStyledComponents";
import ProjectHomeListing from "../../components/projectListing";
import image from "../../assets/img/sunset.jpg";
import { projectContent } from "./content";

const titleContent = {
  subTitle: "You're on the",
  title: "Projects page.",
  link: "/projects",
  image: image,
} as IPageTitleContent;

const PageContent = () => {
  return (
    <>
      <PaddingContainer>
        <h2 style={{ marginBottom: "0" }}>Browse my projects.</h2>
      </PaddingContainer>
      <ProjectHomeListing content={projectContent} />
    </>
  );
};

const Projects = () => {
  return <BasePage menuHeaderContent={titleContent} render={<PageContent />} />;
};
export default Projects;
