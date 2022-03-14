import styled from "styled-components";
import {
  CenterColumn,
  CenterRow,
  PaddingContainer,
} from "./globalStyledComponents";

import background from "../assets/img/background.jpg";
import Image from "next/image";

const border = `solid 1px grey`;

const CenterPageContainer = styled(CenterColumn)<ICenterPageContainerProps>`
  width: 100%;
  max-width: 500px;
  border-left: ${border};
  padding: ${(props) =>
    props.noPadding ? "0" : props.padding ? props.padding : "30px"};

  flex-direction: ${(props) => (props.row ? "row" : "column")};

  .imageContainer {
    width: 100vw;
  }

  .menuButton {
    align-items: ${(props) => (props.row ? "center" : "")};
    justify-content: center;
    width: 100px;
    display: flex;
    border-left: ${border};
    border-right: ${border};
    p {
      transform: rotate(90deg);
    }
  }
`;

const PageRow = styled(CenterRow)<IPageRowProps>`
  overflow: hidden;
  background-color: rgb(30, 30, 30);
  color: white;
  max-height: ${(props) => (props.image ? `${props.image}px` : "unset")};
  height: ${(props) => (props.spacer ? `${props.spacer}px` : "unset")};
  border-bottom: ${(props) => (props.image ? "none" : border)};
  ${(props) =>
    props.sticky
      ? `position: sticky; top: 0; z-index: 2; border-top: ${border};`
      : `position: relative`};
`;

const PageTitle = styled.span`
  h1 {
    margin: 0;
  }
  h4 {
    margin-bottom: 0;
  }
`;

const MenuBar = styled(CenterRow)`
  width: 100%;
  border-top: ${border};
  justify-content: space-evenly;
  .menuItem {
    padding: 10px;
    width: 100%;
    text-align: center;
    p {
      margin: 0;
    }
  }
  .menuItem:first-child {
    border-right: ${border};
  }
  .menuItem:last-child {
    border-left: ${border};
  }
`;

const Menu = () => {
  return (
    <MenuBar>
      <div className="menuItem">
        <p>Home</p>
      </div>
      <div className="menuItem">
        <p>Projects</p>
      </div>
      <div className="menuItem">
        <p>About</p>
      </div>
    </MenuBar>
  );
};

const BasePage = (props: IBasePageProps) => {
  const { title, subtitle, Content } = props;
  return (
    <main>
      <PageRow image={400}>
        <CenterPageContainer noPadding>
          <div className="imageContainer">
            <Image objectFit="cover" src={background} alt="" />
          </div>
        </CenterPageContainer>
      </PageRow>

      <PageRow sticky>
        <CenterPageContainer noPadding row>
          <PaddingContainer>
            <PageTitle>
              <h4>{subtitle}</h4>
              <h1>{title.toUpperCase()}</h1>
            </PageTitle>
          </PaddingContainer>
          <div className="menuButton">
            <p>
              <strong>MENU</strong>
            </p>
          </div>
        </CenterPageContainer>
      </PageRow>

      <PageRow>
        <CenterPageContainer>
          <Content />
        </CenterPageContainer>
      </PageRow>

      <PageRow spacer={500}>
        <CenterPageContainer>
          <footer />
        </CenterPageContainer>
      </PageRow>
    </main>
  );
};

export default BasePage;
