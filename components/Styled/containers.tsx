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
