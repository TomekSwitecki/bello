
import React, { useState, useEffect, useRef } from 'react';

export function Label({ prepend, text }) {
    return (
        <div className="label">
            <div className="label__prepend">
                {prepend}
            </div>
            <div className="label__text">
                {text}
            </div>
        </div>
    );
}
