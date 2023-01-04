import styled from "styled-components";
import Link from "next/link";

import { TextWrapper } from "../Styled";
import { CenterPageContainer, PageRow } from "../";

const FooterWrapper = styled(TextWrapper)`
  a {
    margin: 10px;
  }
`;

const Footer = () => {
  return (
    <>
      <PageRow>
        <CenterPageContainer>
          <FooterWrapper center>
            <Link href="/">Home.</Link>
            <Link href="/about">About.</Link>
            <Link href="/projects">Projects.</Link>
            <Link href="/contact">Contact.</Link>
            <Link href="/privacyPolicy">Privacy Policy.</Link>
            <Link href="/cookiePolicy">Cookie Policy.</Link>
          </FooterWrapper>
          <TextWrapper small center>
            <p>Created with 🧠 and next.js | © 2022 Moritz Becker </p>
          </TextWrapper>
        </CenterPageContainer>
      </PageRow>
    </>
  );
};

export default Footer;
