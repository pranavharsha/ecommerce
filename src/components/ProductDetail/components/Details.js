import React from 'react';

import SelectColor from './SelectColor';
import SelectSize from './SelectSize';
import Reviews from '../../../svgs/Reviews';
import BackIcon from '../../../svgs/BackIcon';


const Details = ({ selectedProduct }) => {
  const colors = ['#f7f7f7', '#072348', '#000000', '#b5222e', '#ffcf60', '#4e4e4e', '#129f7d', '#c69f97', selectedProduct.color, '#215297', '#b3926e']
  const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
  const unavailableSizes = [6, 6.5, 7.5, 8.5, 9, 9.5, 11, 12.5];

  return (
    <div className="details-container">
      <div className="details-gender"><BackIcon /><span>MEN</span></div>
      <div className="details-header">
        <div className="left">
          <div className="name">{selectedProduct.name}</div>
          <div className="description">{selectedProduct.description}</div>
        </div>
        <div className="right">
          <div className="price">${selectedProduct.price} USD</div>
          <Reviews />
        </div>
      </div>
      <div className="details-body">
        <div className="section-1">
          <span className="men">MEN</span>
          <span className="women">WOMEN</span>
        </div>
        <SelectColor selectedColor={selectedProduct.color} colors={colors} />
        <SelectSize selectedSize={8} sizes={sizes} unavailableSizes={unavailableSizes} />
      </div>
      <button type="button" className="add-bag">ADD TO BAG</button>
      <div className="world-shipping">Worldwide Shipping  +  Free Returns</div>
    </div>
  )
}

export default Details;
