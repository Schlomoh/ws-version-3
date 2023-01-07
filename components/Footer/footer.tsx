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
              <Link scroll={false} href="/">
                Home.
              </Link>
              <Link scroll={false} href="/about">
                About.
              </Link>
              <Link scroll={false} href="/projects">
                Projects.
              </Link>
              <Link scroll={false} href="/contact">
                Contact.
              </Link>
              <Link scroll={false} href="/privacyPolicy">
                Privacy Policy.
              </Link>
              <Link scroll={false} href="/cookiePolicy">
                Cookie Policy.
              </Link>
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
