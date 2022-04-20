import BaseProjectPage from "../../components/baseProjectPage";
import image from "../../assets/img/wave-surface.jpg";
import { PaddingContainer } from "../../components/globalStyledComponents";

export const usdzConversionContent = {
  title: "USDZ converter.",
  subTitle: "GLB to USDZ conversion using Docker.",
  image: image,
  link: "/projects/usdzConverter",
} as IPageTitleContent;

const content = usdzConversionContent;

const UsdzConversion = () => {
  return (
    <BaseProjectPage menuHeaderContent={content}>
      <PaddingContainer>
        <h3>Python pipeline for converting glTF files to the USDZ format.</h3>
        <h2>Overview.</h2>
        <p>
          GlTF files have been around for some time and have a variety of
          applications in various fields. However, there is no standard way to
          convert them into the USDZ format, the new file type Apple introduced
          with iOS 12 and ARKit 2.0.
        </p>
        <p>
          I will describe my experience creating a Python pipeline that converts
          glTF files to USDZ format using a Docker container. It aims to outline
          what difficulties I encountered and how I overcame them. Additionally,
          after reading this, you should feel able to understand, maybe improve
          or even develop your own approach in some way.
        </p>
        <p>
          If you are already familiar with both file formats, you can skip the
          following section and jump directly into the pipeline implementation.
        </p>
        <h2>The two file types.</h2>
        <h4>GLTF.</h4>
        <p>
          GLTF was introduced by the Khronos Group as the WebGL Transition
          Format (WebGL TF) and released in 2015. After evolving into the glTF
          2.0 specification in 2017, support for the format grew steadily.
          Colloquially called the JPEG of 3D files, it allows for efficient
          representation of 3D data and quickly became a widely used file
          format.
        </p>
        <p>
          Keep in mind the distinction between the ".gltf" and ".glb" files.
          Former consists of the actual ".gltf" file formatted in JSON, a
          directory containing the associated textures and a ".bin" file that
          describes the geometry. <br />
          While the ".glb" file is the composition of the components mentioned
          above and stands for the binary format of the specification.
        </p>
        <h4>USDZ.</h4>
        <p>
          Apple's USDZ format is a proprietary evolution of the original USD
          (Universal Scene Description) format developed by Disney. It is a
          compressed or zipped version of its ancestor and utilized for all 3D
          content on Apple devices powered by AR Kit.
        </p>
        <h4>The Problem.</h4>
        <p>
          USDZ files are (almost) only compatible with Apple devices and
          software. So the first difficulty as a non-IOS or OSX user already
          consists of opening and testing files. Conversely, glTF files cannot
          natively be opened and displayed on an Apple device without either
          having an app installed specifically for that purpose or using a web
          application with said capability.
        </p>
        <h2>My approach.</h2>
        <p>
          Initially, my approach to converting glTF to USDZ was to use the
          "USD-from_gltf" utility published by Google to get a USD file as an
          intermediate stage. I then wanted to "package" this into a USDZ file
          using the USD Toolkit developed by Pixar Animation Studios containing
          its usdzip tool. However, setting up the USD Toolkit is first
          error-prone and additionally packed with functionalities for which I
          had no use. Therefore this consideration soon turned out to be not
          very pragmatic.
        </p>
        <p>
          Trying out various libraries and online tools, I finally came across a
          Docker image called "plattar/python-xrutils". Since not only Google's
          "usd_from_gltf" but many other useful libraries and toolkits were made
          available here, I ultimately decided to pursue this approach.
        </p>
      </PaddingContainer>
    </BaseProjectPage>
  );
};

export default UsdzConversion;
