import BasePage from "../../components/basePage";
import { PaddingContainer } from "../../components/globalStyledComponents";
import ProjectHomeListing from "../../components/projectListing";
import image from "../../assets/img/sunset.jpg";

import { remeshContent } from "./remeshing";
import { usdzConversionContent } from "./usdzConversion";
import { piqupsContent } from "./piqups";
import { instagramBotContent } from "./instagramBot";
import { ocrFormattingContent } from "./ocrReformatting";

export const projectContent = [
  remeshContent,
  usdzConversionContent,
  piqupsContent,
  instagramBotContent,
  ocrFormattingContent,
];

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
        <h3 style={{ marginTop: "0" }}>More is constantly in progress.</h3>
        <p>
          Feel free to look at my Github profile, where you can find most of the
          code related to these projects.
        </p>
      </PaddingContainer>
      <ProjectHomeListing content={projectContent} />
    </>
  );
};

const Projects = () => {
  return <BasePage menuHeaderContent={titleContent} render={<PageContent />} />;
};
export default Projects;
