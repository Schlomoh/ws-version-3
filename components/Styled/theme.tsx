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
        0: "#212529",
        1: "#343a40",
        2: "#495057",
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
