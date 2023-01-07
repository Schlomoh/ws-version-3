import { BaseProjectPage, NoProject, PaddingContainer } from "../../components";

import image from "../../assets/img/triangle-surface.jpg";

export const remeshContent = {
  title: "Remeshing.",
  subTitle: "Remeshing and UV projection using Pymeshlab.",
  image: image,
  link: "/projects/remeshing",
  githubSource: "https://github.com/Schlomoh/Remesh_testing",
};

const content = remeshContent;

const Remeshing = () => {
  return (
    <BaseProjectPage>
      <NoProject />
    </BaseProjectPage>
  );
};

export default Remeshing;
