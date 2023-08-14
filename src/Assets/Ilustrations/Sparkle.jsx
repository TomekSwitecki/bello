// Sparkle.js
import React from "react";
import { ReactComponent as _Sparkle } from "../../Resources/sparkle.svg";

function Sparkle(props) {
    return (
        <div className={props.className}>
            <_Sparkle />
        </div>
    );
}

export default Sparkle;