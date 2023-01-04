import Link from "next/link";
import { TextWrapper } from "../";

const NoProject = () => {
  return (
    <TextWrapper>
      <h3>There is no project content available yet 😅</h3>
      <p>
        But you can visit the GitHub page of this project to check it out on
        your own. By visiting the page, you'll be able to see all the code that
        was used to create this project.
      </p>
      <p>
        Check back in a little while and there might be something here for you
        by then.
      </p>
      <p>
        Or you can just go back to the{" "}
        <Link href="/projects">projects page</Link> and maybe find somthing else
        there.
      </p>
    </TextWrapper>
  );
};

export default NoProject;
