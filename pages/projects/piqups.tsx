import BaseProjectPage from "../../components/baseProjectPage";
import NoProject from "../../components/noProject";
import { PaddingContainer } from "../../components/globalStyledComponents";

import image from "../../assets/img/flower-robot.jpg";

export const piqupsContent = {
  title: "Piqups.com.",
  subTitle: "Face recognition and object classification using tfjs models.",
  image: image,
  link: "/projects/piqups",
  githubSource: "https://github.com/Schlomoh/flingy",
} as IPageTitleContent;

const content = piqupsContent;

const Piqups = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <NoProject />
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default Piqups;
