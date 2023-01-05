// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    misc: {
      borderRadius: {
        outer: string;
        inner: string;
      };
    };
    colors: {
      accent: {
        [key: string]: string;
        yellow: string;
        pink: string;
        blue: string;
        orange: string;
      };
      surface: {
        elevation: {
          0: string;
          1: string;
          2: string;
        };
      };
    };
    text: {
      colors: {
        heading: string;
        subHeading: string;
        paragraph: string;
        link: string;
        contrast: {
          heading: string;
          subHeading: string;
          paragraph: string;
          link: string;
        };
      };
    };
  }
}
