import {
  CenterPageContainer,
  PageRow,
} from "../../components/globalStyledComponents";
import ProjectHomeListing from "../../components/projectListing";
import { ocrFormattingContent } from "./ocrReformatting";
import { remeshContent } from "./remeshing";

export const projects = [remeshContent, ocrFormattingContent];

const Projects = () => {
  return (
    <PageRow>
      <CenterPageContainer noPadding>
        <ProjectHomeListing content={projects} />
      </CenterPageContainer>
    </PageRow>
  );
};

export default Projects;
