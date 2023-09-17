
import React, { Fragment, useState } from "react";
import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import { _scrollTo } from "../../../utils";
import { useTranslation } from 'react-i18next';
import en from "../../../Resources/en.png";
import pl from "../../../Resources/pl.png";
export const NavbarOptions = ({ closeMenu, isHamburgerMenu }) => {
    const { t, i18n } = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };
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
                        text={t('0_navbar_1')}
                        onClick={() => handleScrollToId("brand_section", 220)}
                    />
                    <Button
                        type={ButtonType.Ghost}
                        text={t('0_navbar_2')}
                        onClick={() => handleScrollToId("design_section", 220)}
                    />
                    <Button
                        type={ButtonType.Ghost}
                        text={t('0_navbar_3')}
                        onClick={() => handleScrollToId("development_section", 520)}
                    />
                    <Button
                        type={ButtonType.Filled}
                        color={ButtonColor.Primary}
                        text={t("get_in_touch")}
                        onClick={() => handleScrollToId("contact_section")}
                    />
                </div>


                <div className="navbar__buttons--right">
                    <Button
                        type={ButtonType.Outlined}
                        color={ButtonColor.Black}
                        text={t('learn_more')}
                        onClick={() => handleScrollToId("about_us", 220)}
                    />
                    <Button
                        type={ButtonType.Filled}
                        color={ButtonColor.Primary}
                        text={t("get_in_touch")}
                        onClick={() => handleScrollToId("contact_section")}
                    />
                </div>
                <div className="language-selectors">
                    <button onClick={() => changeLanguage('en')} className={`language-selector ${selectedLanguage === 'en' ? 'language-selector--selected' : ''}`}><img src={en}></img></button>
                    <button onClick={() => changeLanguage('pl')} className={`language-selector ${selectedLanguage === 'pl' ? 'language-selector--selected' : ''}`}><img src={pl}></img></button>
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
                    text={t('0_navbar_1')}
                    onClick={() => handleScrollToId("brand_section", 70)}
                />
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text={t('0_navbar_2')}
                    onClick={() => handleScrollToId("design_section", 70)}
                />
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text={t('0_navbar_3')}
                    onClick={() => handleScrollToId("development_section", 70)}
                />
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Primary}
                    text={t("get_in_touch")}
                    onClick={() => handleScrollToId("contact_section")}
                />
            </Fragment>);
    }

};

export default NavbarOptions;