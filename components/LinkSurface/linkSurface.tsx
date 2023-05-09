import Link from "next/link";
import { DefaultTheme } from "styled-components";

import { IconContext, IconType } from "react-icons";
import { MdOpenInNew } from "react-icons/md";

import { Surface, TextWrapper, theme } from "../Styled";

interface LinkSurfaceProps {
  color: DefaultTheme["colors"]["accent"]["key"];
  infoText: string;
  linkText: string;
  href: string;
  icon: IconType;
}

const LinkSurface = (props: LinkSurfaceProps) => {
  const { color: colorName, href, linkText, infoText, icon: Icon } = props;
  const color = theme.colors.accent[colorName] || theme.colors.accent.blue;

  const githubIconStyles = {
    color,
    size: "2rem",
    style: { marginRight: "1rem" },
  };

  const openIconStyles = {
    color: "white",
    size: "1rem",
    style: {
      marginLeft: ".25rem",
      position: "relative" as "relative",
      bottom: "-2px",
    },
  };

  return (
    <Surface
      color={colorName}
      variant="outlined"
      style={{ marginBottom: 0, padding: "1rem 2rem" }}
    >
      <TextWrapper color={color}>
        <p style={{ display: "flex", alignItems: "center" }}>
          <IconContext.Provider value={githubIconStyles}>
            <Icon />
          </IconContext.Provider>
          {infoText}
          <TextWrapper underline style={{ marginLeft: ".5rem" }}>
            <Link href={href} target="_blank" referrerPolicy="no-referrer">
              {linkText}
              <IconContext.Provider value={openIconStyles}>
                <MdOpenInNew />
              </IconContext.Provider>
            </Link>
          </TextWrapper>
        </p>
      </TextWrapper>
    </Surface>
  );
};

export default LinkSurface;
