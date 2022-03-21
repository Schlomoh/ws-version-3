import styled from "styled-components";
import {
  CenterColumn,
  CenterRow,
  hover,
  PaddingContainer,
} from "./globalStyledComponents";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const border = `solid 1px grey`;

const CenterPageContainer = styled(CenterColumn)<ICenterPageContainerProps>`
  width: 100%;
  max-width: 600px;
  border-left: ${border};

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
      ? `position: sticky; top: 0; z-index: 20; border-top: ${border};`
      : `position: relative`};

  transition: height
    ${(props) => (props.collapseSpeed ? `${props.collapseSpeed}s` : "")};
`;

const MenuWrapper = styled(PaddingContainer)`
  padding: 0;
  .menuItem {
    height: 60px;
    cursor: pointer;
    padding: 0 20px;
    border-top: ${border};
    transition: background-color 0.25s;
    ${hover(`background-color: rgb(60,60,60)`)}
    :active {
      background-color: rgb(20, 20, 20);
    }
  }
  .menuItem:first-child {
    border-top: none;
  }
`;

const PageTitle = styled.span`
  h1 {
    margin: 0;
  }
  h4 {
    margin: 10px 0;
  }
`;

const MenuRow = (props: IBasePageProps) => {
  const { title, subtitle } = props;

  const menuHeight = 240;

  //states
  const [changeMenu, setchangeMenu] = useState(false); // the 'trigger'
  const [showMenu, setShowMenu] = useState(true); // show menu is true since the first useEffect call inverses it
  const [menuRowHeight, setHeight] = useState(menuHeight);

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
      if (contentRef.current) setHeight(menuHeight);
      setShowMenu((show) => !show);
    }, collapseSpeed * 1000);
  }, [changeMenu]);

  const Menu = () => {
    const router = useRouter()
    return (
      <MenuWrapper justify="center">
        <div onClick={()=> {router.push('/')}} className="menuItem">
          <p>Home.</p>
        </div>
        <div onClick={()=> {router.push('about')}} className="menuItem">
          <p>About.</p>
        </div>
        <div className="menuItem">
          <p>Projects.</p>
        </div>
        <div className="menuItem">
          <p>Contact.</p>
        </div>
      </MenuWrapper>
    );
  };

  const TitleContent = () => {
    return (
      <PaddingContainer justify="center">
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
  const { Content, image } = props;

  return (
    <main>
      <PageRow image={100}>
        <CenterPageContainer noPadding>
          <div className="imageContainer">
            <Image objectFit="cover" src={image} alt="" />
          </div>
        </CenterPageContainer>
      </PageRow>

      <MenuRow {...props} />

      <PageRow>
        <CenterPageContainer noPadding>
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
