import React, { FC } from "react";
import "./Navbar.scss";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className="Navbar" data-testid="Navbar">
    <div data-testid="NavbarTitle">Where in the world?</div>
    <div data-testid="NavbarDarkMode">Dark Mode</div>
  </div>
);

export default Navbar;
