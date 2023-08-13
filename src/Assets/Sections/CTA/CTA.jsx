
import React from "react";
import { Heading } from "../../Components/Heading/Heading";
import Multitasking from "../../Ilustrations/Multitasking";
import Button, { Type } from "../../Components/Button/Button";
export function CTA() {
    return (
        <div className="cta__container">
            <Heading />
            <Button
                type={Type.Primary}
                text="Get in touch!"
            />
            <Button
                type={Type.Outline}
                text="Get in touch!"
            />
        </div>
    );
}
