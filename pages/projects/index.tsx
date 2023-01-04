import { BasePage, ProjectListing, PaddingContainer } from "../../components";

import { remeshContent } from "./remeshing";
import { usdzConversionContent } from "./usdzConverter";
import { piqupsContent } from "./piqups";
import { instagramBotContent } from "./instagramBot";
import { cookieConsentContent } from "./cookieConsent";
import { ocrFormattingContent } from "./ocrReformatting";

export const projectData = [
  usdzConversionContent,
  cookieConsentContent,
  piqupsContent,
  remeshContent,
  instagramBotContent,
  ocrFormattingContent,
];

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
      <ProjectListing projectData={projectData} />
    </>
  );
};

const Projects = () => {
  return (
    <BasePage>
      <PageContent />
    </BasePage>
  );
};
export default Projects;
