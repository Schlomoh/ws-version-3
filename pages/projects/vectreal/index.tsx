import Image from "next/image";
import titleImage from "./vectreal.jpg";
import screenshot4 from "./screenshot4.jpg";
import screenshot2 from "./screenshot2.jpg";

import {
  ArticleImage,
  BaseProjectPage,
  TextWrapper,
} from "../../../components";

export const vectrealContent = {
  title: "Vectreal.",
  subTitle: "A Game-Changer in 3D E-commerce, Built with Love.",
  image: titleImage,
  link: "/projects/vectreal",
  githubSource: "https://github.com/vectreal",
};

const Vectreal = () => {
  return (
    <BaseProjectPage>
      <TextWrapper>
        <h2>VECTREAL Unveiled:</h2>
        <h3>A Game-Changer in 3D E-commerce, Built with Love</h3>
        <p>
          Hey there, friends! I've been working on something pretty awesome
          lately, and I just can't keep it to myself any longer.
        </p>
        <p>
          Let me introduce you to VECTREAL - my passion project aimed at
          transforming the way fashion and e-commerce products are showcased and
          interacted with online. Grab a cup of coffee, sit back, and let me
          give you a behind-the-scenes look at this game-changer in the making.
        </p>
        <ArticleImage height="fit-content">
          <Image src={screenshot4} alt=""></Image>
        </ArticleImage>
        <h2>Overview.</h2>

        <p>
          VECTREAL is my baby, born out of countless hours of coding using
          ReactJS, Redux Toolkit, Auth0 for authentication, and MongoDB for
          handling project and user data. For that extra dash of visual flair,
          I've been using react-three-fiber and react-three-drei for 3D
          visualization, with plans to level up even further by implementing the
          glTF-transform library for 3D object optimization.
        </p>
        <p>
          The big idea behind VECTREAL is to create a user-friendly toolkit with
          state-of-the-art 3D web visualization features, empowering product
          owners to boost user experience, interactions, and product discovery
          across e-commerce platforms. At its core, VECTREAL is a sleek 3D
          management platform that fosters collaboration, offering streamlined
          project workflows for crafting immersive product detail viewers,
          tailor-made for the fashion world.
        </p>

        <ArticleImage height="fit-content">
          <Image src={screenshot2} alt=""></Image>
        </ArticleImage>

        <h4>Here's a taste of what VECTREAL is all about:</h4>
        <ul>
          <li>Collaborative CMS</li>
          <li>Personal cloud hosted 3D assets</li>
          <li>Sleek, universally usable 3D viewer / editor</li>
          <li>Optimized models</li>
          <li>Scene creation from assets</li>
          <li>Hotspot magic for PDP</li>
          <li>Templates for product showcases</li>
          <li>Webpage builder</li>
          <li>Ready-to-use code snippets</li>
          <li>Automations for scalability</li>
        </ul>
        <p>
          Our vision for VECTREAL is to be the go-to choice for businesses
          seeking an efficient, reliable 3D e-commerce solution that also
          dazzles end consumers. By giving creators and enterprises the tools
          they need, I believe we can spark a new era of 3D e-commerce web pages
          together.
        </p>
        <p>
          Though the journey isn't over yet, you can check out the official
          landing page at vectreal.com to stay in the loop on our progress. And
          hey, for any businesses out there keen on collaborating, or potential
          employers who see the value in my skills, let's chat! I'm always
          excited to explore new opportunities and partnerships.
        </p>
        <p>
          Thanks for your support, and keep an eye out for more exciting
          updates!
        </p>
      </TextWrapper>
    </BaseProjectPage>
  );
};

export default Vectreal;
