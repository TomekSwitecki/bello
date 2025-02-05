
import React from "react";
import { Heading } from "../../Components/Heading/Heading";
import Multitasking from "../../Ilustrations/Multitasking";
import { CTA } from "../CTA/CTA";

export function Hero() {
    return (
        <React.Fragment>
            <div id="hero__section" className="hero__container">
                <CTA />
                <div className="hero__ilustration">
                    <Multitasking className="hero__multitasking" />
                    <div className="avatar-group--left">
                        <div className="human_avatar human_avatar_1" />
                        <div className="human_avatar human_avatar_2" />
                        <div className="human_avatar human_avatar_3" />
                        <div className="human_avatar human_avatar_4" />
                    </div>

                    <div className="avatar-group--right">
                        <div className="human_avatar human_avatar_5" />
                        <div className="human_avatar human_avatar_6" />
                        <div className="human_avatar human_avatar_7" />
                        <div className="human_avatar human_avatar_8" />
                    </div>

                </div>
            </div>

        </React.Fragment>
    );
}
