import React from 'react';

export const Tag = ({ text, color, glow }) => {
    const tagClass = `tag tag--${color}${glow ? ' tag--glow' : ''}`;

    return (
        <div className={tagClass}>
            <div className='tag--content'>{text}</div>
        </div>
    );
};

export default Tag;
