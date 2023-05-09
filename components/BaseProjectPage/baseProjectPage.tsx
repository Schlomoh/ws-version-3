import { ReactNode } from "react";

// import styled from "styled-components";
import {
  BasePage,
  GridContainer,
  GridElement,
  PaddingContainer,
  Surface,
} from "../";

import GithubInfo from "./githubInfo";

interface BaseProjectPageProps {
  children: ReactNode;
}

const BaseProjectPage = ({ children }: BaseProjectPageProps) => {
  return (
    <BasePage>
      <PaddingContainer style={{ paddingBottom: "0" }}>
        <GridContainer justify={"center"}>
          <GridElement width="100%" centered>
            <PaddingContainer noPadding>
              <GithubInfo />
              <Surface>{children}</Surface>
            </PaddingContainer>
          </GridElement>
        </GridContainer>
      </PaddingContainer>
    </BasePage>
  );
};

export default BaseProjectPage;
