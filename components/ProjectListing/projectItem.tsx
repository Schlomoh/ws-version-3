import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import useChangePage from "../utils/routingUtils";
import { hover, Surface, TextWrapper, theme } from "../Styled";
import { CSSProperties } from "react";
import { useElementIntersection } from "../utils";

interface ProjectButtonProps {
  small?: boolean;
  isVisible: boolean;
}

interface ItemProps {
  title: string;
  subTitle: string;
  imgSrc: string | StaticImageData;
  uploaded: string;
  priority?: boolean;
  link: string;
  small?: boolean;
  style: CSSProperties;
}

const ProjectButton = styled(Surface)<ProjectButtonProps>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 500px;
  padding: 1rem;
  box-sizing: border-box;

  word-wrap: break-word;
  word-break: break-word;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  scale: ${(props) => (props.isVisible ? 1 : 0.95)};

  ${hover(`border-width: 10px;`)}

  transition: border 0.3s, opacity .3s, scale .3s;
`;

const ImageWrapper = styled(Surface)`
  height: 50%;
  overflow: hidden;
  position: relative;
  padding: 0 !important;
`;

const TextContainer = styled.div`
  background-color: ${(props) => props.theme.colors.surface.elevation[0]};
  width: 100%;
  padding: 1rem;
  z-index: 1;
`;

const DateWrapper = styled(TextWrapper)`
  position: absolute;
  right: 0;
  margin-right: 2rem;
`;

const ProjectItem = (props: ItemProps) => {
  const { title, subTitle, imgSrc, uploaded, priority, link, small } = props;
  const changePage = useChangePage();

  const { ref, isVisible } = useElementIntersection({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  return (
    <ProjectButton
      ref={ref}
      onClick={() => changePage(link)}
      variant="outlined"
      color="orange"
      isVisible={isVisible}
      {...props}
    >
      <ImageWrapper corner="inner">
        <Image
          priority={priority}
          src={imgSrc}
          alt={title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImageWrapper>
      <TextContainer>
        <DateWrapper color="white">
          <p>{uploaded}</p>
        </DateWrapper>
        <TextWrapper color={theme.colors.accent.orange}>
          <h2>{title.toUpperCase()}</h2>
        </TextWrapper>
        <TextWrapper color="white">
          <h4>{subTitle}</h4>
        </TextWrapper>
      </TextContainer>
    </ProjectButton>
  );
};

export default ProjectItem;
