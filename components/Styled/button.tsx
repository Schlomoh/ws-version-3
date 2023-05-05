import styled from "styled-components";
import Surface from "./surface";
import hover from "./hover";

const Button = styled(Surface)`
  /* ich liebe slava */
  --smallSize: 55.5px;
  height: var(--smallSize);
  width: fit-content;
  padding: 1.1rem !important;
  cursor: pointer;
  margin: -0.5rem;

  scale: 0.9;
  ${hover("scale: 1")}
  transition: width 0.3s, height 0.3s, scale 0.3s, margin 0.3s;
`;

export default Button;
