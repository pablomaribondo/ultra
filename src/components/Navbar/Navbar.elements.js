import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";
import styled from "styled-components";

import { Container } from "../../globalStyles";

const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export { Nav, NavbarContainer, NavLogo, NavIcon };
