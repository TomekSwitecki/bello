// Multitasking.js
import React from "react";
import { ReactComponent as _Multitasking } from "../../Resources/multitasking.svg"; // Import the SVG file dynamically

function Multitasking(props) {
    return (
        <div className={props.className}>
            <_Multitasking />
        </div>
    );
}

export default Multitasking;