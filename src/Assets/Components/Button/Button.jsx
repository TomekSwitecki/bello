import React from "react";


export const ButtonType = {
    Filled: "filled",
    Outlined: "outlined",
    Ghost: "ghost",
};

export const ButtonColor = {
    Primary: "primary",
    Black: "black",
};

function Button(props) {
    const { type, color, text, append, onClick } = props;

    const buttonClass = `button button__${color} button__${type}--${color} ${append ? "button__appended" : ""
        }`;

    return (
        <button className={buttonClass} onClick={onClick}>
            <div className="button__text">{text}</div>
            {/* <div className="button__append">{append}</div> */}
        </button>
    );
}

export default Button;
