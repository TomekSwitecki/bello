import React from "react";

export const AvatarColor = {
    Blue: "blue",
    Red: "red",
    Yellow: "yellow",
    Purple: "purple"
};

const IconAvatar = ({ color, icon }) => {

    const avatarClass = `icon-avatar icon-avatar--${color}`;
    return (
        <div className={avatarClass}>
            {icon}
        </div>
    );
};

export default IconAvatar;

