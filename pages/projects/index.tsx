import BasePage from "../../components/basePage";
import ProjectHomeListing from "../../components/projectListing";
import { ocrFormattingContent } from "./ocrReformatting";
import { remeshContent } from "./remeshing";

export const projects = [remeshContent, ocrFormattingContent];

const PageContent = () => {
  return <ProjectHomeListing content={projects} />;
};

const Projects = () => {
  return <BasePage render={<PageContent />} />;
};
export default Projects;
