
import React, { useState, useEffect, useRef } from 'react';

export function Heading({ title, subtitle }) {
  return (
    <div className="heading">
      <div className="heading__title">
        {title}
      </div>
      <div className="heading__subtitle">
        {subtitle}
      </div>
    </div>
  );
}
