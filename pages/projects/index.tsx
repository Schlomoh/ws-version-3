import BasePage from "../../components/basePage";
import ProjectHomeListing from "../../components/projectListing";
import { PaddingContainer } from "../../components/globalStyledComponents";

import image from "../../assets/img/library-2.jpg";

import { remeshContent } from "./remeshing";
import { usdzConversionContent } from "./usdzConverter";
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
        <h2>Browse my projects.</h2>
        <h3>More is constantly in progress...</h3>
        <p>
          GitHub is a great place to check out my code. Most of everything
          related to my programming can be found{" "}
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://github.com/schlomoh"
          >
            there
          </a>
          . If you're ever curious about what I'm working on, or want to see
          some of my past projects, feel free to take a look!
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
