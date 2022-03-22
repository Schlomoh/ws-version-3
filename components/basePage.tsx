import styled from "styled-components";
import { CenterPageContainer, PageRow } from "./globalStyledComponents";
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

const BasePage = (props: IBasePageProps) => {
  const { render } = props;

  const changePage = useChangePage();

  const Footer = () => {
    return (
      <PageRow>
        <CenterPageContainer>
          <BaseFooter>
            <FooterEntry onClick={() => changePage("/")}>Home.</FooterEntry>
            <FooterEntry onClick={() => changePage("/")}>About.</FooterEntry>
            <FooterEntry onClick={() => changePage("/")}>Projects.</FooterEntry>
            <FooterEntry onClick={() => changePage("/")}>Contact.</FooterEntry>
          </BaseFooter>
        </CenterPageContainer>
      </PageRow>
    );
  };

  return (
    <main>
      <PageRow>
        <CenterPageContainer noPadding>{render}</CenterPageContainer>
      </PageRow>
      <Footer />
    </main>
  );
};

export default BasePage;
