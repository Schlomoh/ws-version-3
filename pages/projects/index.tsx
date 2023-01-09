import {
  BasePage,
  ProjectListing,
  PaddingContainer,
  Surface,
  TextWrapper,
  GridContainer,
  GridElement,
} from "../../components";

import { remeshContent } from "./remeshing";
import { usdzConversionContent } from "./usdzConverter";
import { piqupsContent } from "./piqups";
import { instagramBotContent } from "./instagramBot";
import { cookieConsentContent } from "./cookieConsent";
import { ocrFormattingContent } from "./ocrReformatting";
import { StaticImageData } from "next/image";
interface Project {
  link: string;
  title: string;
  subTitle: string;
  image: string | StaticImageData;
  githubSource: string;
}
export const projectData: { [key: string]: Project } = {
  usdzConverter: usdzConversionContent,
  cookieConsent: cookieConsentContent,
  instagramBot: instagramBotContent,
  ocrReformatting: ocrFormattingContent,
  piqups: piqupsContent,
  remeshing: remeshContent,
};

const PageContent = () => {
  return (
    <>
      <PaddingContainer align="center" style={{ paddingTop: 0 }}>
        <GridContainer>
          <GridElement>
            <Surface
              color="blue"
              style={{ marginBottom: "1rem", height: "500px", width: "100%" }}
            >
              <TextWrapper mode="contrast">
                <h1>Browse my projects.</h1>
                <h2>More is constantly in progress...</h2>
              </TextWrapper>
              <TextWrapper mode="contrast">
                <p>
                  GitHub is a great place to check out my code. Most of
                  everything related to my programming can be found{" "}
                  <a
                    target="_blank"
                    referrerPolicy="no-referrer"
                    href="https://github.com/schlomoh"
                  >
                    there.
                  </a>
                  <br />
                  If you're ever curious about what I'm working on, or want to
                  see some of my past projects, feel free to take a look!
                </p>
              </TextWrapper>
            </Surface>
          </GridElement>
          <ProjectListing projectData={projectData} />
        </GridContainer>
      </PaddingContainer>
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
