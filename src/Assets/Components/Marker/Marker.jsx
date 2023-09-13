import React from "react";
import classNames from "classnames";

export const MarkerColor = {
    Yellow: "yellow",
    Blue: "blue",
    Black: "black"
};

export function Marker(props) {

    const markerClasses = classNames(
        "marker",
        {
            [`marker--yellow`]: !props.color,
            [`marker--${props.color}`]: props.color,

        }
    );

    return (

        <span className={markerClasses}>{props.children}</span>

    );
}
