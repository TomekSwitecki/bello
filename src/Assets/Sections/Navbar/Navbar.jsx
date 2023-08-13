import React, { Fragment, useState } from "react";
import NAV from "../../../Resources/_Navbar.png"
export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <img src={NAV}></img>
            </div>
        </nav>
    );
}
