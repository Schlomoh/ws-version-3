import styled from "styled-components";
import measurements from "../../constants/measurements.json";
import { shadow } from "../../styles/baseStyleComponents";

const StBar = styled(shadow)`
  top: 0;
  width: 100vw;
  height: ${measurements.headerBar.height};
  background-color: white;
  position: sticky;
  z-index: 100;
`;

const HeaderBar = () => {
  return <StBar />;
};

export default HeaderBar;
