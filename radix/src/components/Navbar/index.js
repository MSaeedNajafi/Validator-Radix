import react, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarCotainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLogoLink,
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [changeNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarCotainer>
            <NavLogoLink to="/" onClick={toggleHome}>
              iamSaeed
            </NavLogoLink>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="id2"
                  exact="true"
                  offset={-80}
                >
                  Link 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="id3"
                  exact="true"
                  offset={-80}
                >
                  Link 3
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="services"
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLink>
              </NavItem>
              <NavBtn>
                <NavBtnLink
                  onClick={() => {
                    console.log("pressed");
                  }}
                  to="/signin"
                >
                  Sign In
                </NavBtnLink>
              </NavBtn>
            </NavMenu>
            {/* <NavBtn>
          <NavBtnLink to="/Link4">Click Here</NavBtnLink>
        </NavBtn> */}
          </NavBarCotainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
