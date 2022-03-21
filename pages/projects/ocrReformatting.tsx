import BaseProjectPage from "../../components/baseProjectPage";
import image from '../../assets/img/graffiti.jpg'

export const ocrFormattingContent = {
  title: "OCR Reformatting",
  subTitle: "Using tesseractjs",
  image: image,
  link: '/projects/ocrReformatting'
} as IProjectContent;

const content = ocrFormattingContent;

const OcrReformatting = () => {
  return (
    <BaseProjectPage>
      <h2>{content.title}</h2>
      <h4>{content.subTitle}</h4>
    </BaseProjectPage>
  );
};

export default OcrReformatting;