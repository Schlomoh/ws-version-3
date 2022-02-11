import { useRef, useEffect, LegacyRef } from "react";
import styled from "styled-components";
import measurements from "../../constants/measurements.json";

// mobile breakpoint
const maxWidth = 512;

//style
const StScrollContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  padding-top: ${measurements.headerBar.height};
  background-color: #111;
  @media screen and (max-width: ${maxWidth}px) {
    scroll-snap-type: y proximity;
    overflow-x: hidden;
    overflow-y: scroll;
    flex-direction: column;
    height: none;
  }
`;

/**
 * Inspired by the jvm.com page
 *
 * A container to convert normal scrolling into horizontal scrolling.
 * Wraps the 'scrollElement' as children inside
 */
const ScrollContainer = ({
  children,
}: {
  children: React.ReactChild[] | JSX.Element[] | React.ReactChild;
}) => {
  const scrollRef: LegacyRef<HTMLDivElement> = useRef(null);

  // converting the vertical scrolling event into a horizontal scroll
  useEffect(() => {
    // the actual functionality
    const scrollFnct = (e: any) => {
      e.preventDefault();
      if (scrollRef.current) scrollRef.current.scrollLeft += e.deltaY;
    };

    // only add functionality when its not a 'mobile' device (at least a screen smaller than the max width)
    if (window.innerWidth > maxWidth) {
      addEventListener("wheel", scrollFnct, { passive: false });
      return () => removeEventListener("wheel", scrollFnct);
    } // else nothing .... so normal scrolling :(
  });

  return <StScrollContainer ref={scrollRef}>{children}</StScrollContainer>;
};

export default ScrollContainer;
