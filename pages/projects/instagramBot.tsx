import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/heart.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const instagramBotContent = {
  title: "Instagram Bot.",
  subTitle: "Automating interactions on Instagram using Python.",
  image: image,
  link: "/projects/instagramBot",
} as IPageTitleContent;

const content = instagramBotContent;

const InstagramBot = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer></PaddingContainer>
    </BaseProjectPage>
  );
};

export default InstagramBot;
