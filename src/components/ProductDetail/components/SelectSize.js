import React from 'react'

const SelectSize = ({ selectedSize, sizes, unavailableSizes }) => (
  <div className="select-size">
    <div className="header">
      <span>SELECT SIZE</span>
      <span>Size & Fit Guide</span>
    </div>
    <div className="sizes">
      {sizes.map((size, idx) => (
        <div key={`${size}-${idx}`} className="size"
          style={{
            border: size === selectedSize ? 'solid 4px #7dc242' : 'solid 1px #cbcbcb',
            backgroundColor: unavailableSizes.indexOf(size) === -1 ? '#ffffff' : '#e9e9e9'
          }}>
          {size}
        </div>
      ))}
    </div>
    <div className="filler" />
  </div>
);

export default SelectSize;
