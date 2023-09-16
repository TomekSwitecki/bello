import React from 'react';

const Inputfield = ({ label, value, onChange, placeholder, isTextArea, name, type }) => {
    if (isTextArea) {
        return (
            <div className="inputfield">
                <label className='inputfield__label'>{label}</label>
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input"
                    name={name}
                />
            </div>
        );
    } else {
        return (
            <div className="inputfield">
                <label className='inputfield__label'>{label}</label>
                <input
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input"
                    name={name}
                    type={type}
                />
            </div>
        );
    }
};

export default Inputfield;
