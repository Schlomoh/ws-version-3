// react and next base components
import { useState, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// style and layout
import styled from "styled-components";
import {
  border,
  CenterColumn,
  CenterPageContainer,
  hover,
  PaddingContainer,
  PageRow,
} from "./globalStyledComponents";

//img asset
import background from "../assets/img/background.jpg";

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

const MenuButton = styled(CenterColumn)`
  cursor: pointer;
  width: 100px;
  border-left: ${border};
  border-right: ${border};

  h2 {
    transform: rotate(90deg);
  }
`;

const MenuRow = () => {
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

  const router = useRouter();
  function changePage(href: string) {
    router.push(href);
  }

  // 'blinking effect'
  // first setting height to 0 so closing the menu
  // after timeout reseting height to 'menuHeight'
  useLayoutEffect(() => {
    setHeight(0);
    setTimeout(() => {
      if (contentRef.current) setHeight(menuHeight);
      setShowMenu((show) => !show);
    }, collapseSpeed * 1000);
  }, [changeMenu]);

  const Menu = () => {
    return (
      <MenuWrapper justify="center">
        <div onClick={() => changePage("/")} className="menuItem">
          <p>Home.</p>
        </div>
        <div onClick={() => changePage("about")} className="menuItem">
          <p>About.</p>
        </div>
        <div onClick={() => changePage("projects")} className="menuItem">
          <p>Projects.</p>
        </div>
        <div onClick={() => changePage("contact")} className="menuItem">
          <p>Contact.</p>
        </div>
      </MenuWrapper>
    );
  };

  const TitleContent = () => {
    return (
      <PaddingContainer justify="center">
        <PageTitle>
          <h4>bla</h4>
          <h1>{"bla".toUpperCase()}</h1>
        </PageTitle>
      </PaddingContainer>
    );
  };

  return (
    <>
      <PageRow image={100}>
        <CenterPageContainer noPadding>
          <div className="imageContainer">
            <Image objectFit="cover" src={background} alt="" />
          </div>
        </CenterPageContainer>
      </PageRow>
      <PageRow
        sticky
        height={menuRowHeight}
        collapseSpeed={collapseSpeed}
        ref={containerRef}
      >
        <CenterPageContainer ref={contentRef} noPadding row>
          {showMenu ? <Menu /> : <TitleContent />}
          <MenuButton onClick={toggleMenu}>
            <h2>MENU</h2>
          </MenuButton>
        </CenterPageContainer>
      </PageRow>
    </>
  );
};

export default MenuRow;
