interface IProjectContent {
  title: string;
  subTitle: string;
  image: string | StaticImageData;
  link: string;
}

type TProjectContentArr = IProjectContent[]