import styled from "styled-components";

const border = `solid 1px grey`;

const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CenterRow = styled(FlexCenterContainer)`
  flex-direction: row;
`;

const CenterColumn = styled(FlexCenterContainer)`
  flex-direction: column;
`;

const PaddingContainer = styled.div<{ justify?: string }>`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "")};
`;

const CenterPageContainer = styled(CenterColumn)<ICenterPageContainerProps>`
  width: 100%;
  max-width: 600px;
  border-left: ${border};

  padding: ${(props) =>
    props.noPadding ? "0" : props.padding ? props.padding : "30px"};
  flex-direction: ${(props) => (props.row ? "row" : "column")};

  .imageContainer {
    width: 100vw;
  }
`;

const PageRow = styled(CenterRow)<IPageRowProps>`
  overflow: hidden;
  background-color: rgb(30, 30, 30);
  color: white;

  max-height: ${(props) => (props.image ? `${props.image}px` : "unset")};
  height: ${(props) =>
    props.height !== undefined ? `${props.height}px` : "unset"};
  border-bottom: ${(props) => (props.image ? "none" : border)};

  ${(props) =>
    props.sticky
      ? `position: sticky; top: 0; z-index: 20; border-top: ${border};`
      : `position: relative`};

  transition: height
    ${(props) => (props.collapseSpeed ? `${props.collapseSpeed}s` : "")};
`;

const hover = (css: string) => `
  @media (hover:hover) {
    :hover {
      ${css}
    }
  }`;

export {
  border,
  CenterColumn,
  CenterRow,
  PaddingContainer,
  PageRow,
  CenterPageContainer,
  hover,
};
