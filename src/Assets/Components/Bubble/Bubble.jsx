import React from "react";

export const Bubble = ({ value, dot, emoji, style, id }) => {
    return (
        <div id={id} className="bubble" style={style}>
            <div>{dot}</div>
            {/* <div>{emoji}</div> */}
            <div>{value}</div>
        </div>
    );
}