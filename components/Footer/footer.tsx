import styled from "styled-components";
import Link from "next/link";

import { FlexCenterContainer, TextWrapper } from "../Styled";
import { CenterPageContainer, PageRow } from "../";

const FooterWrapper = styled(FlexCenterContainer)`
  flex-wrap: wrap;

  a {
    margin: 10px;
  }
`;

const Footer = () => {
  return (
    <>
      <PageRow>
        <CenterPageContainer>
          <TextWrapper underline>
            <FooterWrapper>
              <Link href="/">Home.</Link>
              <Link href="/about">About.</Link>
              <Link href="/projects">Projects.</Link>
              <Link href="/contact">Contact.</Link>
              <Link href="/privacyPolicy">Privacy Policy.</Link>
              <Link href="/cookiePolicy">Cookie Policy.</Link>
            </FooterWrapper>
          </TextWrapper>
          <TextWrapper small center>
            <p>Created with 🧠 and next.js | © 2022 Moritz Becker </p>
          </TextWrapper>
        </CenterPageContainer>
      </PageRow>
    </>
  );
};

export default Footer;
