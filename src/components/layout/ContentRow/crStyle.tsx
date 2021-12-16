import styled from "styled-components";
import measurements from "../../../constants/measurements.json";

export const StContentRow: any = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  overflow: hidden;

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
  @media screen and (min-width: 620px) {
    max-width: calc(50vw - 60px);
    padding: 0 30px;
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
  max-height: 90vh;
`;
