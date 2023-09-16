
import React, { Fragment, useState } from "react";
import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import { _scrollTo } from "../../../utils";

export const NavbarOptions = ({ closeMenu, isHamburgerMenu }) => {
    const handleScrollToId = (id, offset) => {
        const element = document.getElementById(id);
        if (element) {
            _scrollTo(id, offset);
            if (isHamburgerMenu) {
                closeMenu();
            }
        }
    };
    if (!isHamburgerMenu) {
        return (
            <Fragment>
                <div className="navbar__buttons--middle">
                    <Button
                        type={ButtonType.Ghost}
                        text="Branding"
                        onClick={() => handleScrollToId("brand_section", 220)}
                    />
                    <Button
                        type={ButtonType.Ghost}
                        text="UI/UX Design"
                        onClick={() => handleScrollToId("design_section", 220)}
                    />
                    <Button
                        type={ButtonType.Ghost}
                        text="Development"
                        onClick={() => handleScrollToId("development_section", 520)}
                    />
                    <Button
                        type={ButtonType.Filled}
                        color={ButtonColor.Primary}
                        text="Get in touch with us!"
                        onClick={() => handleScrollToId("contact_section")}
                    />
                </div>


                <div className="navbar__buttons--right">
                    <Button
                        type={ButtonType.Outlined}
                        color={ButtonColor.Black}
                        text="Learn more"
                        onClick={() => handleScrollToId("about_us", 220)}
                    />
                    <Button
                        type={ButtonType.Filled}
                        color={ButtonColor.Primary}
                        text="Get in touch with us!"
                        onClick={() => handleScrollToId("contact_section")}
                    />
                </div>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text="Branding"
                    onClick={() => handleScrollToId("brand_section", 70)}
                />
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text="UI/UX Design"
                    onClick={() => handleScrollToId("design_section", 70)}
                />
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text="Development"
                    onClick={() => handleScrollToId("development_section", 70)}
                />
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Primary}
                    text="Get in touch with us!"
                    onClick={() => handleScrollToId("contact_section")}
                />
            </Fragment>);
    }

};

export default NavbarOptions;