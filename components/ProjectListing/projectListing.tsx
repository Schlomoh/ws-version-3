import { StaticImageData } from "next/image";
import ProjectItem from "./projectItem";

interface Project {
  link: string;
  title: string;
  subTitle: string;
  image: string | StaticImageData;
}

interface Props {
  projectData: Project[];
  small?: boolean;
}

const ProjectListing = (props: Props) => {
  const { projectData, small } = props;
  const list = projectData.map((project: Project, i: number) => {
    return (
      <ProjectItem
        small={small}
        link={project.link}
        key={i}
        title={project.title}
        subTitle={project.subTitle}
        imgSrc={project.image}
        uploaded="1w"
        priority={i === 0}
        style={{ marginBottom: i + 1 === projectData.length ? 0 : "1rem" }}
      />
    );
  });
  return <div>{list}</div>;
};

export default ProjectListing;
