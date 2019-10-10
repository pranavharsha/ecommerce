import React from 'react';

import FeaturesStrip from './components/FeaturesStrip';
import PageLinks from './components/PageLinks';


const Footer = () => (
  <div className="footer-container">
    <FeaturesStrip />
    <div className="footerOuter">
      <PageLinks />
      <div className="divider-2" />
      <div className="copyright">Copyright © 2019 CARIUMA. All Rights Reserved.
      <span className="copyrightSpan">Terms of Use</span> | <span className="copyrightSpan">Privacy Policy</span></div>
    </div>
  </div>
);

export default Footer;
