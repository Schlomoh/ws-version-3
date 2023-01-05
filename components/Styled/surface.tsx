import styled, { DefaultTheme } from "styled-components";
import { CenterColumn, PaddingContainer } from "./containers";

interface SurfaceProps {
  color?: keyof DefaultTheme["colors"]["accent"] | "Base";
  elevation?: 0 | 1 | 2;
}

const Surface = styled.div<SurfaceProps>`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => {
    const base = props.theme.colors.surface.elevation;
    const accent = props.theme.colors.accent;
    const elevation = props.elevation || 0;
    const selectedColor = props.color || "Base";

    if (selectedColor === "Base") return base[elevation || 0];
    else return accent[selectedColor];
  }};
`;

export default Surface;
