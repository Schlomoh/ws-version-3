import styled from "styled-components";
import Link from "next/link";
import { TextWrapper } from "../Styled";

const FloatingBar = styled(TextWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 2rem);
  margin: 1rem;
  padding: 1rem;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.surface.elevation[2]};
  box-shadow: 0 5px 1rem rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const Offset = styled.div`
  height: calc(3.5rem + 2rem);
`;

const MenuItem = styled(Link)`
  min-width: 100px;
  margin: 1rem;
  /* padding: 1rem; */
`;

const TitleBar = () => {
  return (
    <>
      <Offset />
      <FloatingBar>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/">Home</MenuItem>
      </FloatingBar>
    </>
  );
};

export default TitleBar;
