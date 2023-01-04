import { BaseProjectPage, NoProject, PaddingContainer } from "../../components";

import image from "../../assets/img/flower-robot.jpg";

export const piqupsContent = {
  title: "Piqups.com.",
  subTitle: "Face recognition and object classification using tfjs models.",
  image: image,
  link: "/projects/piqups",
  githubSource: "https://github.com/Schlomoh/flingy",
};

const content = piqupsContent;

const Piqups = () => {
  return (
    <BaseProjectPage>
      <PaddingContainer>
        <NoProject />
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default Piqups;
