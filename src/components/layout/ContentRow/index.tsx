//react
import { RefObject } from "react";
//utils
import useElementIntersection from "../../../utils/intersectionObserver";
//style
import { StContentRow, Animation, AnchorElement } from "./crStyle";

type props = {
  children?: never[] | JSX.Element[] | JSX.Element;
  bgColor?: never | string;
  height?: never | string | number;
  transition?: never | boolean;
};

function createThresholdArr(): number[] {
  // array = [0.00, 0.01, ..., 0.99, 1.00]
  return Array.from(Array(100).keys(), (i) => i / 100);
}

const Observed = ({ child, from }: { child: any; from: string }) => {
  const intObsvOptions = {
    root: null,
    rootMargin: "50px 0px 50px 0px",
    threshold: createThresholdArr(),
  };
  const [elRef, isVisible, ratio] = useElementIntersection(intObsvOptions);
  return (
    <AnchorElement ref={elRef as RefObject<HTMLDivElement>}>
      <Animation from={from} ratio={ratio}>
        {child}
      </Animation>
    </AnchorElement>
  );
};
const ContentRow = ({ children, bgColor, height, transition }: props) => {
  let rowContent;
  // check for multiple children elements
  if (Array.isArray(children)) {
    // if multiple are found map them
    rowContent = children?.map((child, i) => {
      let direction = i === 0 ? "left" : i === 1 ? "right" : "bottom";
      return transition ? (
        <Observed from={direction} child={child} key={i} />
      ) : (
        <AnchorElement>{child}</AnchorElement>
      );
    });
    // executes if only a single child element was found
  } else {
    rowContent = transition ? (
      <Observed from="bottom" child={children} />
    ) : (
      <AnchorElement>{children}</AnchorElement>
    );
  }

  return (
    <StContentRow height={height} bgColor={bgColor}>
      {rowContent}
    </StContentRow>
  );
};

export default ContentRow;
