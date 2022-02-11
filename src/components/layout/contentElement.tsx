import styled from "styled-components";
import useElementIntersection from "../utils/intersectionObserver";

const StContentElement: any = styled.div`
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

  // animate
  opacity: ${(props: any) => (props.vis ? 1 : 0)};
  transform: ${(props: any) =>
    props.vis ? "scale3d( 1, 1,1 )" : "scale3d(0.75, 0.75, 0.75);"};
  transition: opacity ease-in-out 0.6s,
    transform cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s;
`;

const ContentElement = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[];
}) => {
  function createThresholdArr(): number[] {
    // array = [0.00, 0.01, ..., 0.99, 1.00]
    return Array.from(Array(100).keys(), (i) => i / 100);
  }

  const options = {
    root: null,
    rootMargin: "-200px",
    threshold: createThresholdArr(),
  };

  const [ref, visible, ratio] = useElementIntersection(options);

  return (
    <StContentElement vis={visible} ref={ref}>
      {children}
    </StContentElement>
  );
};

export default ContentElement;
