import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  misc: {
    borderRadius: {
      outer: "20px",
      inner: "15px",
    },
  },
  colors: {
    accent: {
      yellow: "#e9ff70",
      blue: "#70d6ff",
      pink: "#ff70a6",
      orange: "#ff9770",
    },
    surface: {
      elevation: {
        0: "#0a0a0a",
        1: "#141414",
        2: "#1f1f1f",
      },
    },
  },
  text: {
    colors: {
      heading: "white",
      subHeading: "lightgrey",
      paragraph: "grey",
      link: "white",
      contrast: {
        heading: "black",
        subHeading: "lightgrey",
        paragraph: "grey",
        link: "white",
      },
    },
  },
};

export default theme;
