import react from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1 id="logo">Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Link1" activeStyle>
            Link 1
          </NavLink>
          <NavLink to="/Link2" activeStyle>
            Link 2
          </NavLink>
          <NavLink to="/Link3" activeStyle>
            Link 3
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/Link4">Click Here</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
