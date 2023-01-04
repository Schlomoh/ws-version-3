// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      accent: string;
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
      };
    };
  }
}
