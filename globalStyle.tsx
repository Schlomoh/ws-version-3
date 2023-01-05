import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${(props) => props.theme.colors.surface.elevation[0]};
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}

/* font styles */
a,
img,
button,
p,
h3,
h4 {
  font-family: "Chakra Petch", sans-serif;
}

a,
img,
button,
p {
  font-size: 18px;
  font-weight: 300;
}

h1,
h2 {
  font-family: "Heebo", sans-serif;
  font-weight: 900;
  line-height: 0.9;
}

strong {
  font-weight: 600;
}

/* sizes */
h1 {
  font-size: 3.5rem;
  margin-block-start: 0;
}

h2 {
  font-size: 32px;
  margin-bottom: 10px;
}

h3 {
  font-size: 26px;
  font-weight: 400;
}

h4 {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
}
`;

export default GlobalStyle;
