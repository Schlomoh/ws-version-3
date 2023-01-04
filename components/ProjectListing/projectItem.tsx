import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import useChangePage from "../utils/routingUtils";
import { hover } from "../Styled";

interface ProjectButtonProps {
  small?: boolean;
}

interface ItemProps {
  title: string;
  subTitle: string;
  imgSrc: string | StaticImageData;
  uploaded: string;
  priority?: boolean;
  link: string;
  small?: boolean;
}

const ProjectButton = styled.div<ProjectButtonProps>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: ${(props) => (props.small && props.small ? "100px" : "400px")};

  margin-bottom: 30px;
  padding: 30px 100px 30px 20px;

  word-wrap: break-word;
  word-break: break-word;

  .itemText {
    position: absolute;
    z-index: 2;
    margin: 0;
    color: white;
  }

  .titleWrap {
    padding-left: 10px;
    bottom: 30px;
    max-width: 80%;
    filter: drop-shadow(0 5px 10px rgb(0, 0, 0));

    h2,
    h4 {
      margin: 0;
    }
  }

  p {
    top: 30px;
    right: 30px;
    font-weight: 300;
    font-size: 14px;
  }

  ${hover(`background-color: rgb(60,60,60)`)}
  :active {
    background-color: rgb(20, 20, 20);
  }
  transition: background-color 0.3s;
`;

const ImageWrapper = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
`;

const ProjectItem = (props: ItemProps) => {
  const { title, subTitle, imgSrc, uploaded, priority, link, small } = props;
  const changePage = useChangePage();
  return (
    <ProjectButton onClick={() => changePage(link)} {...props}>
      <p className="itemText">{uploaded}</p>
      <div className="titleWrap itemText">
        <h2 className="">{title.toUpperCase()}</h2>
        {small ? null : <h4 className="">{subTitle}</h4>}
      </div>
      <ImageWrapper>
        <Image
          priority={priority}
          src={imgSrc}
          alt={title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImageWrapper>
    </ProjectButton>
  );
};

export default ProjectItem;
