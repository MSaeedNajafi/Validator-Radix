import react from "react";
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
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  // const [active, setActive] = useState(false);

  return (
    <>
      <Nav>
        <NavBarCotainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="id2">
                Link 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="id3">
                Link 3
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink smooth={true} duration={1000} spy={true} to="services">
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
    </>
  );
};

export default Navbar;
