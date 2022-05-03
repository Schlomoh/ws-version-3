import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import store from "../stateManagement/store";
import { setPageContent } from "../stateManagement/contentSlice";
import { collapseSpeed } from "./menuRow";
import {
  CenterPageContainer,
  CenterRow,
  PageRow,
  TextWrapper,
} from "./globalStyledComponents";

const BaseFooter = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  a {
    margin: 10px;
  }
`;

const Footer = () => {
  return (
    <>
      <PageRow>
        <CenterPageContainer>
          <TextWrapper>
            <BaseFooter>
              <Link href="/">Home.</Link>
              <Link href="/about">About.</Link>
              <Link href="/projects">Projects.</Link>
              <Link href="/contact">Contact.</Link>
              <Link href="/privacyPolicy">Privacy Policy.</Link>
              <Link href="/cookiePolicy">Cookie Policy.</Link>
            </BaseFooter>
          </TextWrapper>
          <CenterRow>
            <TextWrapper small center>
              <p>Created with 🧠 and next.js | © 2022 Moritz Becker </p>
            </TextWrapper>
          </CenterRow>
        </CenterPageContainer>
      </PageRow>
    </>
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
