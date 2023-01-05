import { IconContext } from "react-icons";
import { HiMenuAlt4 } from "react-icons/hi";

import { PaddingContainer } from "../Styled";

const MenuIcon = () => {
  return (
    <PaddingContainer align="center" justify="center" noPadding>
      <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
        <HiMenuAlt4 />
      </IconContext.Provider>
    </PaddingContainer>
  );
};

export default MenuIcon;
