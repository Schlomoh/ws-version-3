import styled from "styled-components";

const StContentElement = styled.div`
  max-width: 500px;
  height: max-content;
  border-radius: 20px;
  border-top-left-radius: 75px;
  background-color: rgba(255, 255, 255, 0.05);
  margin: 0 30px;
  padding: 50px 30px;
  padding-top: 0;
  @media screen and (min-width: 512px) {
    max-width: 800px;
  }

  h2 {
    margin-top: -80px;
  }

  // for the image element made by nextjs
  span {
    transform: translate(0, -100px);
  }
`;

const ContentElement = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  return <StContentElement>{children}</StContentElement>;
};

export default ContentElement;
