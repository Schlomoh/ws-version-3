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
    props.height === "full"
      ? `calc(100vh - ${measurements.headerBar.height})`
      : props.height
      ? props.height.toString() + "px"
      : "unset"};
`;

export const Animation: any = styled.div.attrs((props: any) => {
  const base = { opacity: props.ratio };
  const movement = (unit: string, amount: number) =>
    `-${
      // using logarithmic function with base 2 (instead of e) for animation timing
      (1 - Math.log(props.ratio * 1.2 + 1) / Math.log(2)) * amount
      //height or width
    }${unit}`;
  switch (props.from) {
    case "bottom":
      return { style: { bottom: movement("vh", 25), ...base } };
    case "left":
      return { style: { left: movement("vw", 50), ...base } };
    case "right":
      return { style: { right: movement("vw", 50), ...base } };
  }
})`
  position: relative;
  // max-width: 100vw;
  text-align: left;
  @media screen and (min-width: 720px) {
    max-width: calc(50vw - 60px);
    padding: 0 30px;
  }
`;
