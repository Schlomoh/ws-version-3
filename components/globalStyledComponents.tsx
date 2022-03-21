import styled from "styled-components";

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

const hover = (css: string) => {
  return `@media (hover:hover) {
    :hover {
      ${css}
    }
  }`;
};

export { CenterColumn, CenterRow, PaddingContainer, hover };
