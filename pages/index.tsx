import BasePage from "../components/basePage";

const Top = () => (
  <>
    <h3>Some subtitles</h3>
    <h1>Title blablabla</h1>;
  </>
);

const Bottom = () => (
  <>
    <h2>The main content of the page</h2>
    <h4>The second subtitle</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum,
      sequi porro incidunt provident nesciunt voluptatem sunt corporis repellat
      reiciendis odit, deserunt excepturi suscipit laboriosam ab inventore,
      quidem autem blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum,
      sequi porro incidunt provident nesciunt voluptatem sunt corporis repellat
      reiciendis odit, deserunt excepturi suscipit laboriosam ab inventore,
      quidem autem blanditiis?
    </p>
    <h4>And more content</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum,
      sequi porro incidunt provident nesciunt voluptatem sunt corporis repellat
      reiciendis odit, deserunt excepturi suscipit laboriosam ab inventore,
      quidem autem blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rerum,
      sequi porro incidunt provident nesciunt voluptatem sunt corporis repellat
      reiciendis odit, deserunt excepturi suscipit laboriosam ab inventore,
      quidem autem blanditiis?
    </p>
  </>
);

export const Home = () => {
  return (
    <BasePage title="Title blabl" subtitle="This is a subtitle blabala" Content={Bottom} />
  );
};

export default Home;
