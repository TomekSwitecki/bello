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

    const colorClass = color ? `button--${color}` : '';
    const appendedClass = append ? 'button__appended' : '';

    const buttonClass = `button button--${type} ${colorClass} ${appendedClass}`;


    return (
        <button className={buttonClass} onClick={onClick}>
            <div className="button__text">{text}</div>
            {/* <div className="button__append">{append}</div> */}
        </button>
    );
}

export default Button;
