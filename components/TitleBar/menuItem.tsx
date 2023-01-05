import Link from "next/link";
import styled from "styled-components";

const MenuLink = styled(Link)`
  margin-bottom: 1rem;
`;

const MenuItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <li>
      <MenuLink href={href}>
        <h3>{label}</h3>
      </MenuLink>
    </li>
  );
};

export default MenuItem;
