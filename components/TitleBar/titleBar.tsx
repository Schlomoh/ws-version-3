import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { HiMenuAlt4 } from "react-icons/hi";

import {
  CenterColumn,
  CenterRow,
  PaddingContainer,
  Surface,
  TextWrapper,
} from "../Styled";
import { FadeIn } from "../FadeIn";

interface FloatingBarProps {
  expanded: boolean;
}

const FloatingBar = styled(Surface)<FloatingBarProps>`
  --fullWidth: calc(100% - 2rem);
  --smallSize: 50px;

  position: fixed;
  margin: 1rem;
  padding: 0;
  top: 0;
  right: 0;
  box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.2);
  z-index: 100;
  max-width: 500px;

  width: ${(props) =>
    props.expanded ? "calc((100% - 2rem) / 2)" : "var(--smallSize)"};
  height: ${(props) => (props.expanded ? "500px" : "var(--smallSize)")};

  @media screen and (max-width: 800px) {
    width: ${(props) =>
      props.expanded ? "var(--fullWidth)" : "var(--smallSize)"};
  }

  transition: width 0.3s, height 0.3s;
`;

const Offset = styled.div`
  height: calc(3.5rem + 2rem);
`;

const Backdrop = styled.div<{ show: boolean }>`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 1 : 0)};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;

  transition: visibility 0.3s, opacity 0.3s;
`;

const MenuLink = styled(Link)`
  margin-bottom: 1rem;
`;

const MenuItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <li>
      <MenuLink href={href}>
        <h3>{label}</h3>
      </MenuLink>
    </li>
  );
};

const MenuItems = () => {
  return (
    <PaddingContainer>
      <TextWrapper color="black" underline>
        <ul>
          <MenuItem href="/" label="Home" />
          <MenuItem href="/projects" label="Projects" />
          <MenuItem href="/contact" label="Contact" />
          <MenuItem href="/about" label="About" />
        </ul>
      </TextWrapper>
    </PaddingContainer>
  );
};

const MenuIcon = () => {
  return (
    <PaddingContainer align="center" justify="center" noPadding>
      <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
        <HiMenuAlt4 />
      </IconContext.Provider>
    </PaddingContainer>
  );
};

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
      <Offset />
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
      <Backdrop show={expanded} />
    </>
  );
};

export default TitleBar;
