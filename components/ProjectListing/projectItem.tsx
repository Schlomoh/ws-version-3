import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import { GridElement, hover, Surface, TextWrapper, theme } from "../Styled";
import { CSSProperties } from "react";
import { useElementIntersection } from "../utils";
import Link from "next/link";

interface ProjectButtonProps {
  small?: boolean;
  isVisible: boolean;
}

interface ItemProps {
  title: string;
  subTitle: string;
  imgSrc: string | StaticImageData;
  priority?: boolean;
  link: string;
  style: CSSProperties;
}

const ProjectButton = styled(Surface)<ProjectButtonProps>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 500px;
  width: 100%;
  padding: 1rem;

  box-sizing: border-box;

  word-wrap: break-word;
  word-break: break-word;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  scale: ${(props) => (props.isVisible ? 1 : 0.95)};

  ${hover(`border-width: 10px;`)}
  .imageWrapper {
    ${hover(`border-radius: 5px;`)}
    transition: border-radius .3s;
  }

  transition: border 0.3s, opacity 0.3s, scale 0.3s;
`;

const ImageWrapper = styled(Surface)`
  height: 60%;
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
  const { title, subTitle, imgSrc, priority, link } = props;

  const { ref, isVisible } = useElementIntersection({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  return (
    <GridElement>
      <Link href={link} scroll={false} style={{ width: "100%" }}>
        <ProjectButton
          ref={ref}
          variant="outlined"
          color="orange"
          isVisible={isVisible}
          {...props}
        >
          <ImageWrapper className="imageWrapper" corner="inner">
            <Image
              priority={priority}
              src={imgSrc}
              alt={title}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </ImageWrapper>
          <TextContainer>
            {/* <DateWrapper color="white">
              <p>{uploaded}</p>
            </DateWrapper> */}
            <TextWrapper color={theme.colors.accent.orange}>
              <h2>{title.toUpperCase()}</h2>
            </TextWrapper>
            <TextWrapper color="white">
              <h4>{subTitle}</h4>
            </TextWrapper>
          </TextContainer>
        </ProjectButton>
      </Link>
    </GridElement>
  );
};

export default ProjectItem;
