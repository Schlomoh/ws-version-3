//react
import { LegacyRef, useEffect } from "react";
//utils
import useElementIntersection from "../../../utils/intersectionObserver";
//style
import { StContentRow, Animation } from "./crStyle";
//data
import measurements from "../../../constants/measurements.json";

type props = {
  children?: never[] | JSX.Element[] | JSX.Element;
  bgColor?: never | string;
  top?: never | boolean;
};

function createRootMargin() {
  // convert rem to pixels
  const remH = measurements.headerBar.height;
  const h = parseInt(remH.slice(remH.length - 4, remH.length - 1)) * 16;
  return `${h}px 0px 0px 0px`;
}

function createThresholdArr() {
  // array = [0.00, 0.01, ..., 0.99, 1.00]
  return Array.from(Array(100).keys(), (i) => i / 100);
}

function addAnimation(children: JSX.Element | JSX.Element[], ratio: any) {
  return Array.isArray(children) ? (
    children?.map((child, i) => {
      let direction = i === 0 ? "left" : i === 1 ? "right" : "bottom";
      return (
        <Animation from={direction} key={i} ratio={ratio}>
          {child}
        </Animation>
      );
    })
  ) : (
    <Animation from="bottom" ratio={ratio}>
      {children}
    </Animation>
  );
}

const ContentRow = ({ children, bgColor, top }: props) => {
  const intObsvOptions = {
    root: null,
    rootMargin: createRootMargin(),
    threshold: createThresholdArr(),
  };

  const [elRef, isVisible, ratio] = useElementIntersection(intObsvOptions);

  return (
    <div ref={elRef as LegacyRef<HTMLDivElement>}>
      <StContentRow top={top} bgColor={bgColor}>
        {children ? addAnimation(children, ratio) : null}
      </StContentRow>
    </div>
  );
};

export default ContentRow;
