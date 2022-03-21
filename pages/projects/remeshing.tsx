import BaseProjectPage from "../../components/baseProjectPage";
import image from '../../assets/img/triangle-surface.jpg'

export const remeshContent = {
  title: "Remeshing",
  subTitle: "remeshing and UV projection using Pymeshlab",
  image: image,
  link: '/projects/remeshing'
} as IProjectContent;

const content = remeshContent;

const Remeshing = () => {
  return (
    <BaseProjectPage>
      <h2>{content.title}</h2>
      <h4>{content.subTitle}</h4>
    </BaseProjectPage>
  );
};

export default Remeshing;
