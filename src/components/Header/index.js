/** @format */

import React from "react";
import { HeaderFive } from "constants/fonts";
import { Link } from "react-router-dom";
import logo from "assets/logo-small.png";
import { HeaderMain, Logo, RightContainer, HeaderInner } from "./styles";

const Header = () => (
  <HeaderMain>
    <HeaderInner>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo src={logo} alt="Logo" />
      </Link>
      <RightContainer>
        <Link to="/order" style={{ textDecoration: "none" }}>
          <HeaderFive>Orders</HeaderFive>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <HeaderFive>Cart</HeaderFive>
        </Link>
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <HeaderFive>Admin</HeaderFive>
        </Link>
      </RightContainer>
    </HeaderInner>
  </HeaderMain>
);

export default Header;
