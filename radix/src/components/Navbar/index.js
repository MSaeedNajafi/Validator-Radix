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
              <NavLink
                onClick={() => {
                  console.log("page1");
                }}
                to="Page1"
              >
                Link 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Page2">Link 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Page3">Link 3</NavLink>
            </NavItem>

            <NavBtn>
              <NavBtnLink
                onClick={() => {
                  console.log("pressed");
                }}
                to="/page2"
              >
                Click Here
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
