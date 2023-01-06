import styled from "styled-components";
import { useState } from "react";

import { hover, Surface, SurfaceProps } from "../Styled";
import { FadeIn } from "../FadeIn";

import MenuIcon from "./menuIcon";
import MenuItems from "./menuItems";
import Logo from "./logo";

interface FloatingBarProps {
  expanded: boolean;
}

const FloatingBar = styled(Surface)<FloatingBarProps>`
  --fullWidth: calc(100% - 2rem);
  --smallSize: 55.5px;

  cursor: pointer;
  position: fixed !important;
  margin: 1rem;
  padding: 0 !important;
  top: 0;
  right: 0;
  box-shadow: 0 2px 2rem -10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  max-width: 500px;

  width: ${(props) =>
    props.expanded ? "calc((100% - 2rem) / 2)" : "var(--smallSize)"};
  height: ${(props) => (props.expanded ? "500px" : "var(--smallSize)")};

  @media screen and (max-width: 800px) {
    width: ${(props) =>
      props.expanded ? "var(--fullWidth)" : "var(--smallSize)"};
  }

  scale: 0.9;
  ${hover("scale: 1;")}

  transition: width 0.3s, height 0.3s, scale 0.3s;
`;

const Offset = styled.div`
  height: calc(50px + 2rem);
  padding: 1.5rem;
  padding-left: 1rem;
`;

const Backdrop = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  transition: visibility 0.3s, opacity 0.3s;
`;

const TitleBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [transitionEnded, setTransitionEnded] = useState(true);

  const expand = () => setExpanded(true);
  const collapse = () => {
    setExpanded(false);
    expanded && setTransitionEnded(false);
  };
  const toggle = () => (expanded ? collapse() : expand());
  const transitionEndCallback = () => setTransitionEnded(true);

  return (
    <>
      <FloatingBar
        expanded={expanded}
        onClick={toggle}
        color="yellow"
        onMouseLeave={collapse}
      >
        {expanded || (!expanded && !transitionEnded) ? (
          <FadeIn onTransitionEnd={transitionEndCallback} show={expanded}>
            <MenuItems />
          </FadeIn>
        ) : (
          <FadeIn show={!expanded}>
            <MenuIcon />
          </FadeIn>
        )}
      </FloatingBar>
      <Backdrop show={expanded} onClick={collapse} />
      <Offset>
        <Logo />
      </Offset>
    </>
  );
};

export default TitleBar;
