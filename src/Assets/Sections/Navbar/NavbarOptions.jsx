
import React, { Fragment, useState } from "react";
import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import { _scrollTo } from "../../../utils";

export const NavbarOptions = ({ closeMenu, isHamburgerMenu }) => {
    const handleScrollToId = (id) => {
        const element = document.getElementById(id);
        console.log(element);
        if (element) {
            _scrollTo(id, 70);
            {
                closeMenu && closeMenu();
            }
        }
    };
    console.log(isHamburgerMenu);
    if (!isHamburgerMenu) {
        return (
            <Fragment>
                <div className="navbar__buttons--middle">
                    <Button
                        type={ButtonType.Ghost}
                        text="Services & Products"
                        onClick={() => handleScrollToId("uslugi")}
                    />
                    <Button
                        type={ButtonType.Ghost}
                        text="Blog [Coming Soon]"
                        onClick={() => handleScrollToId("o_nas")}
                    />
                    <Button
                        type={ButtonType.Ghost}
                        text="Portfolio"
                        onClick={() => handleScrollToId("testymonia")}
                    />
                    <Button
                        type={ButtonType.Filled}
                        color={ButtonColor.Primary}
                        text="Get in touch with us!"
                    />
                </div>


                <div className="navbar__buttons--right">
                    <Button
                        type={ButtonType.Outlined}
                        color={ButtonColor.Black}
                        text="Learn more"
                    />
                    <Button
                        type={ButtonType.Filled}
                        color={ButtonColor.Primary}
                        text="Get in touch with us!"
                    />
                </div>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <Button
                    type={ButtonType.Ghost}
                    text="Services & Products"
                    onClick={() => handleScrollToId("uslugi")}
                />
                <Button
                    type={ButtonType.Ghost}
                    text="Blog [Coming Soon]"
                    onClick={() => handleScrollToId("o_nas")}
                />
                <Button
                    type={ButtonType.Ghost}
                    text="Portfolio"
                    onClick={() => handleScrollToId("testymonia")}
                />

                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text="Learn more"
                />
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Primary}
                    text="Get in touch with us!"
                />
            </Fragment>);
    }

};

export default NavbarOptions;