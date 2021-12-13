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

  // dynamic style
  background-color: ${(props: any) => props.bgColor};
  color: ${(props: any) => (props.bgColor === "black" ? "white" : "unset")};
  min-height: ${(props: any) =>
    props.top ? `calc(100vh - ${measurements.headerBar.height})` : "unset"};
`;

export const Animation: any = styled.div.attrs((props: any) => {
  const base = { opacity: props.ratio };
  let style;
  const movement = (unit: string) =>
    //right or left - positive = right
    `-${
      // using logarithmic function with base 2 (instead of e) for animation timing
      (1 - Math.log(props.ratio * 1.2 + 1) / Math.log(2)) * 50
      //height or width
    }${unit}`;
  switch (props.from) {
    case "bottom":
      style = { bottom: movement("vh"), ...base };
      break;
    case "left":
      style = { left: movement("vw"), ...base };
      break;
    case "right":
      style = { right: movement("vw"), ...base };
  }

  return {
    // attrs method for frequently updated values
    style: style,
  };
})`
  position: relative;
  // max-width: 100vw;
  text-align: left;
  @media screen and (min-width: 720px) {
    max-width: calc(50vw - 60px);
    padding: 0 30px;
  }
`;
