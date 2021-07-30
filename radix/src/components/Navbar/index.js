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

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarCotainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/Page1" activeStyle>
                Link 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Page2" activeStyle>
                Link 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Page3" activeStyle>
                Link 3
              </NavLink>
            </NavItem>

            <NavBtn>
              <NavBtnLink to="/Link4">Click Here</NavBtnLink>
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
