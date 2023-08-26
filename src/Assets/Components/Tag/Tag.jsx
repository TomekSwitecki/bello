import React from 'react';
export const Tag = ({ text, color }) => {

    const tagClass = `tag tag--${color}`;

    return (
        <div className={tagClass}>
            <div className='tag--content'>{text}</div>
        </div>
    )
}
export default Tag;