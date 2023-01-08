import styled from "styled-components";

const ArticleImage = styled.div`
  width: 100%;
  height: 500px;
  border-radius: ${props => props.theme.misc.borderRadius.outer};
  
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export default ArticleImage;
