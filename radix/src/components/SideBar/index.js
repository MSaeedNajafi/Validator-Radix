import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="page1">Page 1</SideBarLink>
          <SideBarLink to="page1">Page 2</SideBarLink>
          <SideBarLink to="page3">Page 3</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute>Contact Us</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
