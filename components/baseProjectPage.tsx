import { useSelector } from "react-redux";
// import styled from "styled-components";

import { MdOpenInNew } from "react-icons/md";
import { IconContext } from "react-icons";

import BasePage from "./basePage";
import { RootState } from "../stateManagement/store";
import { PaddingContainer, TextWrapper } from "./globalStyledComponents";

// const ProjectPage = styled.div``;

const BaseProjectPage = ({
  children,
  menuHeaderContent,
}: IBaseProjectPageProps) => {
  const [githubSource, pageTitle] = useSelector((state: RootState) => [
    state.pageContent.githubSource,
    state.pageContent.title,
  ]);

  const BaseContent = () => (
    <>
      <PaddingContainer style={{ paddingBottom: "0" }}>
        <TextWrapper>
          <p>
            Find this project on Github:{" "}
            <a href={githubSource} target="_blank" referrerPolicy="no-referrer">
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
  );

  return (
    <BasePage menuHeaderContent={menuHeaderContent} render={<BaseContent />} />
  );
};

export default BaseProjectPage;
