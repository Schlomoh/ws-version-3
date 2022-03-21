import styled from "styled-components";
import BasePage from "./basePage";
import { CenterPageContainer, PageRow } from "./globalStyledComponents";

const ProjectPage = styled.div``;

const BaseProjectPage = ({ children }: any) => {
  return (
    <PageRow>
      <CenterPageContainer>{children}</CenterPageContainer>
    </PageRow>
  );
};

export default BaseProjectPage;
