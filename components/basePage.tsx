import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { setPageContent } from "../stateManagement/contentSlice";
import store from "../stateManagement/store";
import {
  CenterPageContainer,
  PageRow,
  TextWrapper,
} from "./globalStyledComponents";
import { collapseSpeed } from "./menuRow";
import useChangePage from "./utils/routingUtils";

const BaseFooter = styled.footer`
  display: inherit;
  flex-direction: row;
  justify-content: center;
`;

const FooterEntry = styled.div`
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const Footer = () => {
  const changePage = useChangePage();
  return (
    <PageRow>
      <CenterPageContainer>
        <BaseFooter>
          <FooterEntry onClick={() => changePage("/")}>Home.</FooterEntry>
          <FooterEntry onClick={() => changePage("/about")}>About.</FooterEntry>
          <FooterEntry onClick={() => changePage("/projects")}>
            Projects.
          </FooterEntry>
          <FooterEntry onClick={() => changePage("/contact")}>
            Contact.
          </FooterEntry>
        </BaseFooter>
      </CenterPageContainer>
    </PageRow>
  );
};

const BasePage = (props: IBasePageProps) => {
  const { render, menuHeaderContent } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) store.dispatch(setPageContent(menuHeaderContent));
  });

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      if (show) {
        container.style.transform = "translateY(0px)";
        container.style.opacity = "1";
      }
      setShow(true);
    }
    return () => {
      if (container) {
        container.style.transform = "translateY(-240px)";
        container.style.opacity = "0";
      }
    };
  }, [show]);

  const style = {
    transform: "translateY(-240px)",
    opacity: "0",
    transition: "transform 0.5s ease-out, opacity 0.5s",
    transitionDelay: collapseSpeed.toString() + "s",
  };
  return (
    <>
      <main>
        <PageRow>
          <CenterPageContainer style={style} ref={containerRef} noPadding>
            <TextWrapper>{render}</TextWrapper>
          </CenterPageContainer>
        </PageRow>
      </main>
      <Footer />
    </>
  );
};

export default BasePage;
