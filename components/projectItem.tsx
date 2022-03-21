import Image from "next/image";
import styled from "styled-components";

const ProjectButton = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;

  border: solid 1px grey;
  border-left: none;

  margin-bottom: 30px;

  padding: 30px 100px 30px 20px;

  .text {
    position: absolute;
    z-index: 2;
    margin: 0;
    max-width: 80vw;
  }

  h2 {
    padding-left: 10px;
    bottom: 30px;
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));
  }

  p {
    top: 30px;
    right: 30px;
    font-weight: 300;
    font-size: 14px;
  }
`;

const ImageWrapper = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
`;

const ProjectItem = ({ name, imgSrc, uploaded, priority }: IItemProps) => {
  return (
    <ProjectButton>
      <p className="text">{uploaded}</p>
      <h2 className="text">{name.toUpperCase()}</h2>
      <ImageWrapper>
        <Image
          priority={priority}
          layout="fill"
          objectFit="cover"
          src={imgSrc}
          alt={name}
        />
      </ImageWrapper>
    </ProjectButton>
  );
};

export default ProjectItem;
