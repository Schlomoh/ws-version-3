import { useSelector } from "react-redux";
// import styled from "styled-components";
import { MdOpenInNew } from "react-icons/md";
import { IconContext } from "react-icons";

import { BasePage, PaddingContainer, TextWrapper } from "../";
import { RootState } from "../../stateManagement/store";

// const ProjectPage = styled.div``;

interface BaseProjectPageProps {
  children: JSX.Element;
}

const BaseProjectPage = ({ children }: BaseProjectPageProps) => {
  const [githubSource, pageTitle] = useSelector((state: RootState) => [
    state.pageContent.githubSource,
    state.pageContent.title,
  ]);

  return (
    <BasePage>
      <>
        <PaddingContainer style={{ paddingBottom: "0" }}>
          <TextWrapper>
            <p>
              Find this project on Github:{" "}
              <a
                href={githubSource}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                {pageTitle}
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "16px",
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
            </p>
          </TextWrapper>
        </PaddingContainer>
        {children}
      </>
    </BasePage>
  );
};

export default BaseProjectPage;
