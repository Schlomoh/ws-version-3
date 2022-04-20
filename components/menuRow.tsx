// react and next base components
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import { BiMenu } from "react-icons/bi";

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

import useChangePage from "./utils/routingUtils";
import { RootState } from "../stateManagement/store";
import useElementIntersection, {
  createThresholdArr,
} from "./utils/useIntersectionObserver";
import { IconContext } from "react-icons";

const MenuWrapper = styled(CenterColumn)`
  width: 100%;
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
  word-wrap: break-word;
  word-break: break-word;

  h1 {
    margin: 0;
  }
  p {
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
    margin: initial;
  }

  ${hover(`background-color: rgb(60,60,60)`)}
  :active {
    background-color: rgb(20, 20, 20);
  }
`;

export const collapseSpeed = 0.3;

const MenuRow = () => {
  const menuHeight = 240;
  const smallMenuHeight = 120;

  //states
  const [init, setInit] = useState(true); // initial load of page
  const [changeMenu, setChangeMenu] = useState(false); // the 'trigger'
  const [showMenu, setShowMenu] = useState(false);
  const [menuRowHeight, setHeight] = useState(menuHeight);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: createThresholdArr(),
  };

  const { ref, isVisible, ratio } = useElementIntersection(options);

  // time for half the collapse motion. the setTimeout and css animation

  function toggleMenu() {
    setChangeMenu(!changeMenu);
  }

  const changePage = useChangePage(toggleMenu);

  // 'blinking effect'
  // first setting height to 0 so closing the menu
  // after timeout reseting height to 'menuHeight'
  // wow i hate that i decided to do this
  // WHY IS SHOW MEUN ALWAYS INVERTED AAAAAAAAAH WTF IS GOING ON???????????
  useEffect(() => {
    if (!init) setHeight(0);
    setTimeout(() => {
      if (isVisible || !showMenu || (init && isVisible)) {
        setHeight(menuHeight);
      } else {
        setHeight(smallMenuHeight);
      }
      if (!init) setShowMenu((show) => !show);
      setInit(false);
    }, collapseSpeed * 1000);
  }, [changeMenu]);

  useEffect(() => {
    if (isVisible) setHeight(menuHeight);
    else if (!isVisible && !showMenu) setHeight(smallMenuHeight);
  }, [isVisible, ratio]);

  const Menu = () => {
    return (
      <MenuWrapper>
        <div onClick={() => changePage("/")} className="menuItem">
          <p>Home.</p>
        </div>
        <div onClick={() => changePage("/about")} className="menuItem">
          <p>About.</p>
        </div>
        <div onClick={() => changePage("/projects")} className="menuItem">
          <p>Projects.</p>
        </div>
        <div onClick={() => changePage("/contact")} className="menuItem">
          <p>Contact.</p>
        </div>
      </MenuWrapper>
    );
  };

  const isSmall = menuRowHeight === menuHeight;

  const TitleContent = () => {
    const [title, subTitle] = useSelector((state: RootState) => [
      state.pageContent.title,
      state.pageContent.subTitle,
    ]);

    return (
      <PaddingContainer justify="center">
        <PageTitle>
          {isSmall ? <p>{subTitle}</p> : <></>}
          <h1>{title.toUpperCase()}</h1>
        </PageTitle>
      </PaddingContainer>
    );
  };

  const image = useSelector((state: RootState) => state.pageContent.image);

  return (
    <>
      <PageRow ref={ref} image={200}>
        <CenterPageContainer noPadding>
          <div className="imageContainer">
            <Image priority objectFit="cover" src={image} alt="" />
          </div>
        </CenterPageContainer>
      </PageRow>
      <PageRow sticky height={menuRowHeight} collapseSpeed={collapseSpeed}>
        <CenterPageContainer noPadding row>
          {showMenu ? <Menu /> : <TitleContent />}
          <MenuButton onClick={toggleMenu}>
            {isSmall ? (
              <h2>MENU.</h2>
            ) : (
              <IconContext.Provider
                value={{ color: "white", size: '45px', style: { margin: "auto", stroke: 'white' } }}
              >
                <BiMenu />
              </IconContext.Provider>
            )}
          </MenuButton>
        </CenterPageContainer>
      </PageRow>
    </>
  );
};

export default MenuRow;
