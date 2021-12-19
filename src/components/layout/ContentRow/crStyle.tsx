import styled from "styled-components";
import measurements from "../../../constants/measurements.json";
import { centerAlignRow } from "../../../styles/baseStyleComponents";

export const StContentRow: any = styled(centerAlignRow)`
  width: 100vw;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  overflow: hidden;

  @media screen and (max-height: 600px) {
    max-height: 100vh;
    overflow: unset;
  }

  // dynamic style
  background-color: ${(props: any) => props.bgColor};
  color: ${(props: any) => (props.bgColor === "black" ? "white" : "unset")};
  min-height: ${(props: any) =>
    props.height === "full"
      ? `calc(100vh - ${measurements.headerBar.height})`
      : props.height
      ? props.height.toString() + "px"
      : "unset"};
  p,
  a {
    color: ${(props: any) =>
      props.bgColor === "black" ? "lightgrey" : "grey"};
  }
`;

export const AnchorElement = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (min-width: 620px) and (max-width: 960px) {
    text-align: center;
    max-width: 70vw;
    padding: 0 30px;
    img,
    span {
      max-height: 60vh !important;
      min-height: 60vh !important;
    }
  };
  @media screen and (min-width: 960px) and (min-height: 600px) {
    text-align: center;
    max-width: calc(50vw - 60px);
    padding: 0 30px;
    img,
    span {
      max-height: 80vh !important;
      min-height: 80vh !important;
    }
  }
  @media  screen and (max-height: 600px) {
    max-width: calc(50vw - 60px);
    max-height: calc(100vh - 100px);
    padding: 0 30px;
    
    img, span{
      max-height: 100vh !important;
      min-height: 100vh !important;
    };
  }
`;

export const Animation: any = styled.div.attrs((props: any) => {
  const base = { opacity: props.ratio * 2.5 - 1.5 };
  const movement = (unit: string, amount: number) =>
    // using logarithmic function with base 2 (instead of e) for animation timing
    `-${(1.5 - props.ratio * 1.5) * amount}${unit}`;

  switch (props.from) {
    case "bottom":
      return {
        style: { bottom: movement("vh", 25), textAlign: "center", ...base },
      };
    case "left":
      return { style: { left: movement("vw", 50), ...base } };
    case "right":
      return { style: { right: movement("vw", 50), ...base } };
  }
})`
  position: relative;
  // max-width: 100vw;
  text-align: left;
  overflow: hidden;
  @media screen and (min-height: 600px){
    max-height: 90vh;
  }
`;
