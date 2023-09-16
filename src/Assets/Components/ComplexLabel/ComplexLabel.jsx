
import React, { useState, useEffect, useRef } from 'react';

export function ComplexLabel({ prepend, title, description, content }) {
    return (
        <div className="complex_label">
            <div className="complex_label__prepend">
                {prepend}
            </div>
            <div className="complex_label__text">
                <span className='complex_label__title'>{title}</span>
                <span className='complex_label__description'>{description}</span>
                <span className='complex_label__content'>{content}</span>
            </div>
        </div>
    );
}
