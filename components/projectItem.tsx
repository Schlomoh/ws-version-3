import Image from "next/image";
import styled from "styled-components";
import { hover } from "./globalStyledComponents";
import useChangePage from "./utils/routingUtils";

const ProjectButton = styled.div<{ low?: string }>`
  cursor: pointer;

  position: relative;
  overflow: hidden;
  height: ${(props) => (props.low && props.low === "true" ? "200px" : "400px")};

  border: solid 1px grey;
  border-left: none;

  margin-bottom: 30px;
  padding: 30px 100px 30px 20px;

  word-wrap: break-word;

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
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));

    h2,
    h4 {
      margin: 0;
    }
    margin: 0;
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

const ProjectItem = (props: IItemProps) => {
  const { title, subTitle, imgSrc, uploaded, priority, link, low } = props;
  const changePage = useChangePage();
  return (
    <ProjectButton low={low} onClick={() => changePage(link)}>
      <p className="itemText">{uploaded}</p>
      <div className="titleWrap itemText">
        <h2 className="">{title.toUpperCase()}</h2>
        {low === "true" ? null : <h4 className="">{subTitle}</h4>}
      </div>
      <ImageWrapper>
        <Image
          priority={priority}
          layout="fill"
          objectFit="cover"
          src={imgSrc}
          alt={title}
        />
      </ImageWrapper>
    </ProjectButton>
  );
};

export default ProjectItem;
