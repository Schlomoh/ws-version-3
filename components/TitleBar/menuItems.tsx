import { PaddingContainer, TextWrapper } from "../Styled";
import MenuItem from "./menuItem";

const MenuItems = () => {
  return (
    <PaddingContainer>
      <TextWrapper color="black" underline>
        <ul>
          <MenuItem href="/" label="Home" />
          <MenuItem href="/projects" label="Projects" />
          <MenuItem href="/contact" label="Contact" />
          <MenuItem href="/about" label="About" />
        </ul>
      </TextWrapper>
    </PaddingContainer>
  );
};

export default MenuItems;
