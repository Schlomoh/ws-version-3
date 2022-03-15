import styled from "styled-components";
import {
  CenterColumn,
  CenterRow,
  PaddingContainer,
} from "./globalStyledComponents";

import background from "../assets/img/background.jpg";
import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const border = `solid 1px grey`;

const CenterPageContainer = styled(CenterColumn)<ICenterPageContainerProps>`
  width: 100%;
  max-width: 500px;
  border-left: ${border};
  height: max-content;

  padding: ${(props) =>
    props.noPadding ? "0" : props.padding ? props.padding : "30px"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};

  .imageContainer {
    width: 100vw;
  }

  .menuButton {
    cursor: pointer;
    width: 100px;
    border-left: ${border};
    border-right: ${border};
    display: flex;
    justify-content: center;
    align-items: ${(props) => (props.row ? "center" : "")};

    h2 {
      transform: rotate(90deg);
    }
  }
`;

const PageRow = styled(CenterRow)<IPageRowProps>`
  overflow: hidden;
  background-color: rgb(30, 30, 30);
  color: white;

  max-height: ${(props) => (props.image ? `${props.image}px` : "unset")};
  height: ${(props) =>
    props.height !== undefined ? `${props.height}px` : "unset"};
  border-bottom: ${(props) => (props.image ? "none" : border)};

  ${(props) =>
    props.sticky
      ? `position: sticky; top: 0; z-index: 2; border-top: ${border};`
      : `position: relative`};

  transition: height ${(props) => `${props.collapseSpeed}s`} ease-out;
`;

const PageTitle = styled.span`
  h1 {
    margin: 0;
  }
  h4 {
    margin-bottom: 0;
  }
`;

const MenuRow = (props: IBasePageProps) => {
  const { title, subtitle } = props;

  //states
  const [changeMenu, setchangeMenu] = useState(false); // the 'trigger'
  const [showMenu, setShowMenu] = useState(true); // show menu is true since the first useEffect call inverses it
  const [menuRowHeight, setHeight] = useState(0);

  //refs
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // time for half the collapse motion. the setTimeout and css animation
  const collapseSpeed = 0.3;

  function toggleMenu() {
    setchangeMenu(!changeMenu);
  }

  useLayoutEffect(() => {
    setHeight(0);
    setTimeout(() => {
      if (contentRef.current) setHeight(contentRef.current.clientHeight);
      setShowMenu((show) => !show);
    }, collapseSpeed * 1000);
  }, [changeMenu]);

  const Menu = () => {
    return <PaddingContainer></PaddingContainer>;
  };
  const TitleContent = () => {
    return (
      <PaddingContainer>
        <PageTitle>
          <h4>{subtitle}</h4>
          <h1>{title.toUpperCase()}</h1>
        </PageTitle>
      </PaddingContainer>
    );
  };

  return (
    <PageRow
      sticky
      height={menuRowHeight}
      collapseSpeed={collapseSpeed}
      ref={containerRef}
    >
      <CenterPageContainer ref={contentRef} noPadding row>
        {showMenu ? <Menu /> : <TitleContent />}
        <div onClick={toggleMenu} className="menuButton">
          <h2>MENU</h2>
        </div>
      </CenterPageContainer>
    </PageRow>
  );
};

const BasePage = (props: IBasePageProps) => {
  const { Content } = props;

  return (
    <main>
      <PageRow image={400}>
        <CenterPageContainer noPadding>
          <div className="imageContainer">
            <Image objectFit="cover" src={background} alt="" />
          </div>
        </CenterPageContainer>
      </PageRow>

      <MenuRow {...props} />

      <PageRow>
        <CenterPageContainer>
          <Content />
        </CenterPageContainer>
      </PageRow>

      <PageRow>
        <CenterPageContainer>
          <footer />
        </CenterPageContainer>
      </PageRow>
    </main>
  );
};

export default BasePage;
