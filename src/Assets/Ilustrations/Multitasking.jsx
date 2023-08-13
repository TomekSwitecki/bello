// Multitasking.js
import React from "react";
import { ReactComponent as _Multitasking } from "../../Resources/multitasking.svg"; // Import the SVG file dynamically

function Multitasking(props) {
    return (
        <div className="ilustration_wrapper">
            <_Multitasking className={props.className} />
        </div>
    );
}

export default Multitasking;