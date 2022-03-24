import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/flower-robot.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const piqupsContent = {
  title: "Piqups.com.",
  subTitle:
    "Face recognition and object classification using tfjs models.",
  image: image,
  link: "/projects/piqups",
} as IPageTitleContent;

const content = piqupsContent;

const Piqups = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer></PaddingContainer>
    </BaseProjectPage>
  );
};

export default Piqups;
