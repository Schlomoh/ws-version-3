import image from "./gpt_phone.jpg";
import { BaseProjectPage } from "../../../components";
import { useEffect } from "react";

export const instagramCarouselGenContent = {
  title: "Insta carousel generator.",
  subTitle: "Exploring OpenAIs API for GPT.",
  image: image,
  link: "/projects/instagramCarouselGenerator",
  githubSource: "https://github.com/Schlomoh/insta_carousel_generator",
};

const InstaCarouselGenerator = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <BaseProjectPage>
      <h3>My little side project:</h3>
      <h2>Building an Instagram carousel generator 🛠️🚀</h2>
      <p>
        I'm a programmer who recently ventured into social media marketing.
        During this transition, I realized the need for a tool to simplify
        content creation, especially for Instagram carousel posts.
      </p>
      <p>
        Let me take you on a journey through the development of my very own
        Instagram Carousel Post Generator and how I tackled various technical
        challenges along the way.
      </p>
      <h2>The technologies that shaped the project 💡</h2>
      <p>
        When I set out to build the Instagram Carousel Post Generator, I wanted
        to use a tech stack that would make development smooth and efficient.
        Here's a list of the technologies that played a significant role in the
        project:
      </p>
      <ul>
        <li>
          <p>
            <strong>Vite.js: </strong>A modern build tool that significantly
            sped up development and bundling.
          </p>
        </li>
        <li>
          <p>
            <strong>Typesctipt: </strong>I used TypeScript to ensure type-safe
            interactions with the OpenAI API and to enhance code
            maintainability.
          </p>
        </li>
        <li>
          <p>
            <strong>p5-react: </strong>This library allowed me to seamlessly
            integrate p5.js with React for rendering image content.
          </p>
        </li>
        <li>
          <p>
            <strong>Framer Motion: </strong>To create delightful UI animations,
            I chose Framer Motion, a popular animation library.
          </p>
        </li>
        <li>
          <p>
            <strong>Vercel: </strong>For deployment, I used Vercel, which
            provided edge functions to securely handle API requests without
            exposing my personal secret API key.
          </p>
        </li>
      </ul>
      <h2>Harnessing the power of the OpenAI API 🧠</h2>
      <p>
        I decided to integrate the OpenAI API into my project because of its
        ability to generate engaging and well-written content. By leveraging the
        capabilities of this powerful language model, I was able to create
        carousel posts that resonated with the target audience and encouraged
        engagement.
      </p>
      <h2>The development process 🛠️</h2>
      <p>
        Building the Instagram Carousel Post Generator was an iterative process.
        I started by designing an interactive user interface that gathered
        information through a series of prompts. This helped tailor the
        generated content to the user's specific needs. I then incorporated
        p5-react to create dynamic carousel previews, making it easy for users
        to visualize the final result and make adjustments as needed.
      </p>
      <h2>Bringing it all together 🎨</h2>
      <p>
        To make the tool even more user-friendly, I added the ability to export
        and modify the generated carousel posts, giving users the freedom to
        further customize their content. Framer Motion enhanced the overall user
        experience with smooth and visually appealing animations.
      </p>
      <h2>Sharing my journey on twitter 🐦</h2>
      <p>
        Throughout this development journey, I documented my progress and shared
        it on Twitter. Check out the thread below to see how the project
        unfolded:
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <blockquote className="twitter-tweet" data-theme="dark">
          <p lang="en" dir="ltr">
            🧵1/ Hey folks! I&#39;m a programmer who recently ventured into
            social media marketing. I needed a solution to simplify content
            creation, so I built an Instagram carousel post generator using
            React. Let&#39;s dive into the technical details.{" "}
            <a href="https://twitter.com/hashtag/programmingJourney?src=hash&amp;ref_src=twsrc%5Etfw">
              #programmingJourney
            </a>{" "}
            <a href="https://twitter.com/hashtag/React?src=hash&amp;ref_src=twsrc%5Etfw">
              #React
            </a>{" "}
            <a href="https://t.co/mXidN0LtfP">pic.twitter.com/mXidN0LtfP</a>
          </p>
          &mdash; Mo (@schl0m0h){" "}
          <a href="https://twitter.com/schl0m0h/status/1648261390564753408?ref_src=twsrc%5Etfw">
            April 18, 2023
          </a>
        </blockquote>{" "}
      </div>
      <h2>Final thoughts 🌟</h2>
      <p>
        Developing the Instagram Carousel Post Generator has been a rewarding
        experience that has not only honed my programming skills but also taught
        me valuable lessons about creating engaging content. It's been a
        fascinating journey, and I'm proud of the final product, which I believe
        will help many content creators streamline their social media marketing
        efforts.
      </p>
      <p>
        I'm grateful to have had the opportunity to explore various cutting-edge
        technologies that have made the development process enjoyable and
        efficient. As I continue to work on and improve the Instagram Carousel
        Post Generator, I look forward to incorporating user feedback and
        discovering new ways to make the tool even better.
      </p>
      <p>
        Thank you for joining me on this journey, and I hope that sharing my
        experience has provided you with insights and inspiration for your own
        projects. If you'd like to try the Instagram Carousel Post Generator for
        yourself, be sure to check it out{" "}
        <a href="https://insta-carousel-generator.vercel.app/">here</a>. I'd
        love to hear your thoughts and suggestions!
      </p>
      <p>Happy coding! 🚀</p>
    </BaseProjectPage>
  );
};

export default InstaCarouselGenerator;
