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

const PaddingContainer = styled.div`
  padding: 30px;
  width: 100%;
  min-height: 260px;
`;

export { CenterColumn, CenterRow, PaddingContainer };
