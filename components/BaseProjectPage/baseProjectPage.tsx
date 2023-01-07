import { useSelector } from "react-redux";
// import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";

import {
  BasePage,
  GridContainer,
  GridElement,
  PaddingContainer,
  Surface,
  TextWrapper,
  theme,
} from "../";
import { RootState } from "../../stateManagement/store";

// const ProjectPage = styled.div``;

interface BaseProjectPageProps {
  children: JSX.Element;
}

const GithubInfo = () => {
  let [githubSource, pageTitle] = useSelector((state: RootState) => [
    state.pageContent.githubSource,
    state.pageContent.title,
  ]);

  githubSource = "https://examle.com";
  pageTitle = "Whatever";

  const blue = theme.colors.accent.blue;

  return (
    <TextWrapper color={blue}>
      <p style={{ display: "flex", alignItems: "center" }}>
        <IconContext.Provider
          value={{
            color: blue,
            size: "2rem",
            style: { marginRight: "1rem" },
          }}
        >
          <AiFillGithub />
        </IconContext.Provider>
        Find this project on Github:{" "}
        <TextWrapper underline style={{ marginLeft: "1rem" }}>
          <a href={githubSource} target="_blank" referrerPolicy="no-referrer">
            {pageTitle}
            <IconContext.Provider
              value={{
                color: "white",
                size: "1rem",
                style: {
                  marginLeft: "5px",
                  position: "relative",
                  bottom: "-2px",
                },
              }}
            >
              <MdOpenInNew />
            </IconContext.Provider>
          </a>
        </TextWrapper>
      </p>
    </TextWrapper>
  );
};

const BaseProjectPage = ({ children }: BaseProjectPageProps) => {
  return (
    <BasePage>
      <>
        <PaddingContainer style={{ paddingBottom: "0" }}>
          <GridContainer justify={"center"}>
            <GridElement width='100%' mainElement>
              <PaddingContainer noPadding>
                <Surface
                  variant="outlined"
                  color="blue"
                  style={{ marginBottom: 0, padding: "1rem 2rem" }}
                >
                  <GithubInfo />
                </Surface>
                <Surface>{children}</Surface>
              </PaddingContainer>
            </GridElement>
          </GridContainer>
        </PaddingContainer>
      </>
    </BasePage>
  );
};

export default BaseProjectPage;
