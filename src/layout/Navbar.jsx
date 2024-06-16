// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { space, layout, color } from "styled-system";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #d4bdbd;
  color: #887c7c;
  margin-bottom: 20px;

  ${space}
  ${layout}
  ${color}
`;

const NavLink = styled(Link)`
  color: #373232;
  text-decoration: none;
  margin-left: 1rem;
  &:hover {
    color: #f4c0c0;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer bg="primary" p={3}>
      <NavLink to="/">Home</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
