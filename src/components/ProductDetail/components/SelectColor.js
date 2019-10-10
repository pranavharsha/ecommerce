import React from 'react'

const SelectColor = ({ selectedColor, colors }) => (
  <div className="select-color">
    <span>SELECT COLOR</span>
    <div className="colors">
      {colors.map((color, idx) => (
        <div key={`${color}-${idx}`} className={`color-${color === selectedColor ? 'selected' : ''}`}>
          <div className="color center-content-absolute" style={{ backgroundColor: color }} />
        </div>
      ))}
    </div>
  </div>
);

export default SelectColor;
