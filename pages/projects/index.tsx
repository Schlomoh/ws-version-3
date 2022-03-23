import BasePage from "../../components/basePage";
import { PaddingContainer } from "../../components/globalStyledComponents";
import ProjectHomeListing from "../../components/projectListing";
import { ocrFormattingContent } from "./ocrReformatting";
import { remeshContent } from "./remeshing";
import { usdzConversionContent } from "./usdzConversion";
import image from '../../assets/img/sunset.jpg'

export const projects = [
  remeshContent,
  ocrFormattingContent,
  usdzConversionContent,
];

const titleContent = {
  subTitle: "You're on the",
  title: "Projects page",
  link:'/projects',
  image: image
} as IProjectContent;

const PageContent = () => {
  return (
    <>
      <PaddingContainer>
        <h2 style={{ marginBottom: "0" }}>Browse my projects.</h2>
      </PaddingContainer>
      <ProjectHomeListing content={projects} />
    </>
  );
};

const Projects = () => {
  return <BasePage menuHeaderContent={titleContent} render={<PageContent />} />;
};
export default Projects;
