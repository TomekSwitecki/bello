import React from "react";

export const Type = {
    Primary: "primary",
    Ghost: "ghost",
};

export function Button(props) {
    const buttonClass = `button button__${props.type} ${props.append ? "button__appended" : ""
        }`;

    return (
        <button className={buttonClass} onClick={props.onClick}>
            <div className="button__text">{props.text}</div>
            {/* <div className="button__append">{props.append}</div> */}
        </button>
    );
}

export default Button;
