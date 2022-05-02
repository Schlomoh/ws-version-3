import ProjectItem from "./projectItem";

interface Props {
  content: TProjectContentArr;
  low?: string;
}

const createProjectHomeListing = (props: Props) => {
  const { content, low } = props;
  return content.map((project: IPageTitleContent, i: number) => {
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

const ProjectHomeListing = (props: Props) => {
  return <>{createProjectHomeListing(props)}</>;
};

export default ProjectHomeListing;
