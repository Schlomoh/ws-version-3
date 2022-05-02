import BaseProjectPage from "../../components/baseProjectPage";
import NoProject from "../../components/noProject";
import { PaddingContainer } from "../../components/globalStyledComponents";

import image from "../../assets/img/heart.jpg";

export const instagramBotContent = {
  title: "Instagram Bot.",
  subTitle: "Automating interactions on Instagram using Python.",
  image: image,
  link: "/projects/instagramBot",
  githubSource: "https://github.com/Schlomoh/Folico",
} as IPageTitleContent;

const content = instagramBotContent;

const InstagramBot = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <NoProject />
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default InstagramBot;
