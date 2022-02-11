import { ReactElement } from "react";

import HeaderBar from "./HeaderBar";
import CookieBanner from "./CookieBanner";

type prop = {
  children: ReactElement;
};

const Overlay = ({ children }: prop) => {
  return (
    <>
      <HeaderBar />
      <CookieBanner />
      {children}
    </>
  );
};

export default Overlay;
