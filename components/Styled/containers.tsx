import { CSSProperties } from "react";
import styled from "styled-components";

interface CenterPageContainerProps {
  noPadding?: boolean;
  padding?: CSSProperties["padding"];
  menu?: boolean;
  row?: boolean;
}

interface PaddingContainerProps {
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  noPadding?: boolean;
}

interface PageRowProps {
  sticky?: boolean;
  image?: number;
  height?: number;
  collapseSpeed?: number;
}

interface GridElementProps {
  justify?: CSSProperties["justifyContent"];
  padding?: CSSProperties["padding"];
  width?: CSSProperties["width"];
}

export const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CenterRow = styled(FlexCenterContainer)`
  flex-direction: row;
`;

export const CenterColumn = styled(FlexCenterContainer)`
  flex-direction: column;
`;

export const PaddingContainer = styled.div<PaddingContainerProps>`
  padding: ${(props) => (props.noPadding ? "0px" : "1rem")};
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "initial")};
  align-items: ${(props) => (props.align ? props.align : "initial")};
`;

export const CenterPageContainer = styled(
  FlexCenterContainer
)<CenterPageContainerProps>`
  width: 100%;

  padding: ${(props) =>
    props.noPadding ? "0" : props.padding ? props.padding : "2rem"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
`;

export const PageRow = styled(CenterRow)<PageRowProps>`
  overflow: hidden;
  color: white;

  max-height: ${(props) => (props.image ? `${props.image}px` : "unset")};
  height: ${(props) =>
    props.height !== undefined ? `${props.height}px` : "unset"};

  ${(props) =>
    props.sticky ? `position: sticky; top: 0; 20;` : `position: relative`};

  transition: height
    ${(props) => (props.collapseSpeed ? `${props.collapseSpeed}s` : "")};
`;

export const GridContainer = styled.div<{
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
}>`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || "space-between"};
  flex-wrap: wrap;
  margin: 0 -0.5rem;
  @media screen and (max-width: 600px) {
    flex-direction: ${(props) => props.direction || "column"};
  }
`;

const BaseGridElement = styled.div<GridElementProps>`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : "initial")};
  width: ${(props) => props.width || "50%"};
  /* height: 100%; */
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (min-width: 900px) {
    width: 60vw;
  }

  .wrapper {
    width: 100%;
    margin: 0 0.5rem;
    padding: ${(props) => props.padding || "initial"};
    display: inherit;
  }
`;

export const GridElement = (
  props: GridElementProps & {
    children: JSX.Element | JSX.Element[];
  }
) => {
  return (
    <BaseGridElement {...props}>
      <div className="wrapper">{props.children}</div>
    </BaseGridElement>
  );
};
