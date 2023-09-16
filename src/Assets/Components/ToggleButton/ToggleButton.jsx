import React, { useState } from 'react';

// In the ToggleButton component
const ToggleButton = ({ item, handleItemClick, isChecked }) => {
    const handleCheckboxChange = () => {
        handleItemClick(item);
    };

    return (
        <label className={`toggle-button ${isChecked ? 'toggle-button--selected' : ''}`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span className="toggle-button__content">
                {isChecked ? <box-icon name='minus'></box-icon> : <box-icon name='plus'></box-icon>} {item}
            </span>
        </label>
    );
};


export default ToggleButton;



