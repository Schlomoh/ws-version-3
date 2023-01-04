import { BaseProjectPage, NoProject, PaddingContainer } from "../../components";

import image from "../../assets/img/heart.jpg";

export const instagramBotContent = {
  title: "Instagram Bot.",
  subTitle: "Automating interactions on Instagram using Python.",
  image: image,
  link: "/projects/instagramBot",
  githubSource: "https://github.com/Schlomoh/Folico",
};

const content = instagramBotContent;

const InstagramBot = () => {
  return (
    <BaseProjectPage>
      <PaddingContainer>
        <NoProject />
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default InstagramBot;
