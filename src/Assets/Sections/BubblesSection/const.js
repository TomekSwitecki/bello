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
    pl: "Tworzenie oprogramowania jest trudne.\nTrzeba wziąć pod uwagę mnóstwo rzeczy, a wiele z nich może sprawić problemy..."
};

export const subtitle_en = (
    <StringWithLineBreaks text={subtitle.en} />
);

export const subtitle_pl = (
    <StringWithLineBreaks text={subtitle.pl} />
);


export const dots = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🟤", "⚫", "⚪", "🟥"]


