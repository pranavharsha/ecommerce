import React from 'react';

import Plane from '../../../svgs/Plane';
import ShippingBox from '../../../svgs/ShippingBox';


const FeaturesStrip = () => (
  <div className="features-strip-container">
    <div className="payment child"><Plane /><span>Secure Payment</span></div>
    <div className="vertical-divider one" />
    <div className="child"><Plane /><span>Express Shipping</span></div>
    <div className="vertical-divider" />
    <div className="child"><ShippingBox /><span>Free Returns</span></div>
  </div>
);

export default FeaturesStrip;
