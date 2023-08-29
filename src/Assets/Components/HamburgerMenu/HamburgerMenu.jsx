import React, { Fragment, useState, useEffect } from "react";
import Button, { ButtonType, ButtonColor } from "../Button/Button";


const HamburgerMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 650) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <React.Fragment>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger__icon">
          <box-icon name='menu'></box-icon>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`hamburger__dropdown ${isMenuOpen ? "hamburger__dropdown--active" : ""
            }`}
        >
          {props.options}
          {/* {NavbarOptions({ closeMenu })} */}
        </div>
      )}
    </React.Fragment>
  );
};

export default HamburgerMenu;
