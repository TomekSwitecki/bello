// const.js
import React from "react";
import { Marker, MarkerColor } from "../../Components/Marker/Marker";
import { StringWithLineBreaks } from "../../../utils";
export const title = (
    <React.Fragment>
        😬 Soo many things to consider...
    </React.Fragment>
);
export const subtitle = {
    en: "Developing digital product is hard.\nThere’s plenty things to take care of, and many things can go wrong...",
    fr: "Le développement de produits numériques est difficile.%lineBreak%Il y a tellement de choses à prendre en compte, et de nombreuses choses peuvent mal tourner..."
};

export const subtitle_ = (
    <StringWithLineBreaks text={subtitle.en} />
);


export const dots = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🟤", "⚫", "⚪", "🟥"]


