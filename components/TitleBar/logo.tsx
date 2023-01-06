import Link from "next/link";
import styled from "styled-components";

const LogoWrapper = styled(Link)`
  svg {
    height: 34px;
    width: 68px;
    fill: grey;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper href='/'>
      <svg
        version="1.1"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 170.08 85.04"
        overflow="visible"
      >
        <path
          d="M155.08,15v4.3l-12.61,12.61l-10.61,10.61l10.61,10.61l12.62,12.62v4.3H15V19.21l16.91,16.91l10.61,10.61l10.61-10.61
	L74.24,15H155.08 M170.08,0H68.03L42.52,25.51L17,0H0v85.04h170.08V59.53l-17.01-17.01l17.01-17V0L170.08,0z"
        />
      </svg>
    </LogoWrapper>
  );
};

export default Logo;
