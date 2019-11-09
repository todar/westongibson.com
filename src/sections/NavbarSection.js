import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import ImageLoader from "../components/ImageLoader";

function NavbarSection() {
  return (
    <StyledNavbarSection>
      <ImageLoader
        style={{ height: 64 + "px" }}
        src={logo}
        alt="Weston Gibson Logo"
      />
    </StyledNavbarSection>
  );
}

const StyledNavbarSection = styled.header`
  overflow: hidden;
  position: fixed;
  z-index: 100;
  top: 0;
  height: 64px;
  width: 100%;
  background-color: ${props => props.theme.navbar.background};
  color: ${props => props.theme.navbar.color};
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

export default NavbarSection;
