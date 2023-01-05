import { useEffect, useState } from "react";
import styled from "styled-components";

interface FadeInProps {
  children: JSX.Element | JSX.Element[];
  onTransitionEnd?: () => void;
  show?: boolean;
}

interface FadeInWrapperProps {
  show: boolean;
  direction?: "left" | "right";
}

const FadeInWrapper = styled.div<FadeInWrapperProps>`
  height: 100%;
  width: 100%;
  position: relative;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  opacity: ${(props) => (props.show ? 1 : 0)};
  right: ${(props) => (props.show ? "0%" : "-100%")};

  transition: opacity 0.3s, right 0.3s;
`;

const FadeIn = ({ children, onTransitionEnd, show }: FadeInProps) => {
  const [visible, setVisible] = useState(false);

  const transitionCallback = () => {
    onTransitionEnd && onTransitionEnd();
  };

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <FadeInWrapper
      show={visible && !!show}
      onTransitionEnd={transitionCallback}
    >
      {children}
    </FadeInWrapper>
  );
};

export default FadeIn;
