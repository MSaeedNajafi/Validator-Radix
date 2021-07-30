import React from "react";
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
        <Bars />
        <NavMenu>
          <NavLink to="/">Validators</NavLink>
          <NavLink to="/about">Radix staking</NavLink>
          <NavLink to="/">Calculator</NavLink>
          <NavLink to="/">Teams</NavLink>
          <NavLink to="/">StakeSafe</NavLink>
          <NavLink to="/">Docs</NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
