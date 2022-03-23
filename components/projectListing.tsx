import { useEffect } from "react";
import ProjectItem from "./projectItem";

const createProjectHomeListing = (props: {
  content: TProjectContentArr;
  low?: string;
}) => {
  const { content, low } = props;
  return content.map((project: IProjectContent, i: number) => {
    return (
      <ProjectItem
        low={low}
        link={project.link}
        key={i}
        title={project.title}
        subTitle={project.subTitle}
        imgSrc={project.image}
        uploaded="1w"
        priority={i === 0}
      />
    );
  });
};

const ProjectHomeListing = (props: {
  content: TProjectContentArr;
  low?: string;
}) => {
  return <>{createProjectHomeListing(props)}</>;
};

export default ProjectHomeListing;
