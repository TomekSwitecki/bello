
import React from "react";
import { Heading } from "../../Components/Heading/Heading";
import Multitasking from "../../Ilustrations/Multitasking";
import { CTA } from "../CTA/CTA";
export function Hero() {
    return (
        <div className="hero__container">
            <CTA />
            <Multitasking className="hero__multitasking" />
        </div>
    );
}
