import styled, { DefaultTheme } from "styled-components";

export interface SurfaceProps {
  color?: keyof DefaultTheme["colors"]["accent"] | "Base";
  variant?: "outlined" | "solid";
  elevation?: 0 | 1 | 2;
}

const Surface = styled.div<SurfaceProps>`
  --surface-color: ${(props) => {
    const base = props.theme.colors.surface.elevation;
    const accent = props.theme.colors.accent;
    const elevation = props.elevation || 0;
    const selectedColor = props.color || "Base";

    if (selectedColor === "Base") return base[elevation || 0];
    else return accent[selectedColor];
  }};

  --background-color: ${(props) => {
    if (!props.variant || props.variant === "solid")
      return "var(--surface-color)";
    return "transparent";
  }};

  position: relative;
  overflow: hidden;
  padding: 2rem;
  border-radius: ${(props) => props.theme.misc.borderRadius.outer};
  background-color: var(--background-color);
  border: ${(props) =>
    props.variant === "outlined" ? "solid 5px var(--surface-color)" : "none"};
`;

export default Surface;
