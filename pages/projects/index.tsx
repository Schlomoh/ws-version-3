import BasePage from "../../components/basePage";
import ProjectHomeListing from "../../components/projectListing";
import { ocrFormattingContent } from "./ocrReformatting";
import { remeshContent } from "./remeshing";

export const projects = [remeshContent, ocrFormattingContent];

const titleContent = {
  subTitle: "You're on the",
  title: 'Projects page'
} as IProjectContent

const PageContent = () => {
  return <ProjectHomeListing content={projects} />;
};

const Projects = () => {
  return (
    <BasePage menuHeaderContent={titleContent} render={<PageContent />} />
  );
};
export default Projects;
