import { StPicture } from "./picStyle";
import Image from "next/image";

const Picture = ({
  src,
  alt = "",
}: {
  src: StaticImageData;
  alt?: undefined | string;
}): JSX.Element => {
  return (
    <Image priority layout="responsive" src={src} alt={alt} objectFit="cover" />
  );
};

export default Picture;
