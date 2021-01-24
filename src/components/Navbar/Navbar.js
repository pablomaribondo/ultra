import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import {
  MobileIcon,
  Nav,
  NavButtonLink,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavItemButton,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./Navbar.elements";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  useEffect(() => {
    showButton();
  }, []);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => setButton(window.innerWidth <= 960);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              ULTRA
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>

              <NavItemButton>
                {button ? (
                  <NavButtonLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavButtonLink>
                ) : (
                  <NavButtonLink to="/sign-up">
                    <Button
                      // onClick={closeMobileMenu}
                      fontBig
                      primary
                    >
                      SIGN UP
                    </Button>
                  </NavButtonLink>
                )}
              </NavItemButton>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
