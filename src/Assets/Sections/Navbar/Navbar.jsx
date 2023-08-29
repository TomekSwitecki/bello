import React, { Fragment, useState } from "react";

import HamburgerMenu from "../../Components/HamburgerMenu/HamburgerMenu";

import { Logo } from "../../Components/Logo/Logo";
import { NavbarOptions } from "./NavbarOptions";




export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Logo />
        <NavbarOptions isHamburgerMenu={false} />
        <HamburgerMenu options={<NavbarOptions isHamburgerMenu={true} />}></HamburgerMenu>
      </div>

    </nav>
  );
}
