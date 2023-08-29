
import React from "react";
export const StringWithLineBreaks = ({ text }) => {
    const formattedText = text.replace(/\n/g, '<br />');

    return (
        <div dangerouslySetInnerHTML={{ __html: formattedText }} />
    );
};

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

export function _scrollTo(selector, yOffset = 0) {
    const el = document.getElementById(selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
}
