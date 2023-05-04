import { CSSProperties } from "react";
import styled from "styled-components";

const ArticleImage = styled.div<{ height?: CSSProperties["height"] }>`
  width: 100%;
  height: ${({ height }) => (height ? height : "300px")};
  max-height: ${({ height }) => (height ? height : "30vh")};
  border-radius: ${(props) => props.theme.misc.borderRadius.outer};
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default ArticleImage;
