
import React from "react";
import { Heading } from "../../Components/Heading/Heading";
import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import useTypingText from '../../CustomHooks/useTypingText';
import Sparkle from "../../Ilustrations/Sparkle";
import { Label } from "../../Components/Label/Label";
import { _scrollTo } from "../../../utils";
import { useTranslation } from 'react-i18next';

export function CTA() {
    const { t, i18n } = useTranslation();
    const userLanguage = i18n.language;


    //const { word } = useTypingText(['solutions', 'UI/UX', 'Brands'], 130, 20);
    const { word } = useTypingText(
        userLanguage === "pl"
            ? ['rozwiązania', 'marki', 'UI/UX', 'strony web']
            : ['solutions', 'UI/UX', 'brands', "websites "],
        130,
        20
    );

    const headingTitle = userLanguage === "pl" ? (
        <React.Fragment>
            Projektujemy <span className="typing-word">{word}</span>
        </React.Fragment>
    ) : (
        <React.Fragment>
            We design <span className="typing-word">{word}</span>
        </React.Fragment>
    );

    const subtitle = userLanguage === "pl" ? (
        <React.Fragment>Pomożemy Ci zaprojektować produkt twoich marzeń. Strony internetowe, aplikacje, tożsamość marki. <br /> Mamy to wszystko.</React.Fragment>
    ) : (
        <React.Fragment>We will help you to create product of your dreams. Websites, apps, branding, logo. <br /> We got it all.</React.Fragment>
    );



    return (
        <div className="cta__container">
            <Sparkle className="cta__sparkle" />
            <Heading title={headingTitle} subtitle={subtitle} />
            <div className="cta__buttons">
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Primary}
                    text={t('get_in_touch')}
                    onClick={() => _scrollTo("contact_section")}
                />
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text={t('learn_more')}
                    onClick={() => _scrollTo("about_us", 120)}
                />
            </div>
            <div className="cta__lables_container">
                <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={t('1_label1_text')}></Label>
                <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={t('1_label2_text')}></Label>
                <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={t('1_label3_text')}></Label>
            </div>
        </div>
    );
}
