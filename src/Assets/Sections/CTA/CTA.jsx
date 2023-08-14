
import React from "react";
import { Heading } from "../../Components/Heading/Heading";
import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import useTypingText from '../../CustomHooks/useTypingText';
import Sparkle from "../../Ilustrations/Sparkle";

export function CTA() {
    const { word } = useTypingText(['solutions', 'UI/UX', 'Brands'], 130, 20);
    const headingTitle = (
        <React.Fragment>
            We design <span className="typing-word">{word}</span>
        </React.Fragment>
    );
    const subtitle = <React.Fragment>"We will help you to create product of your dreams. Websites, apps, branding, logo. <br /> We got it all."</React.Fragment>

    return (
        <div className="cta__container">
            <Sparkle className="cta__sparkle" />
            <Heading title={headingTitle} subtitle={subtitle} />
            <div className="cta__buttons">
                <Button
                    type={ButtonType.Filled}
                    color={ButtonColor.Primary}
                    text="Get in touch!"
                />
                <Button
                    type={ButtonType.Outlined}
                    color={ButtonColor.Black}
                    text="Learn more"
                />
            </div>
        </div>
    );
}
