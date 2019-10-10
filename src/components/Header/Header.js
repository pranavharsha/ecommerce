import React from 'react';

import BurgerMenu from '../../svgs/BurgerMenu';
import CheckoutIcon from '../../svgs/CheckoutIcon';
import AccountIcon from '../../svgs/AccountIcon';

const Header = () => (
  <div className="header-container">
    <div className='top center-content-flex'><div>FREE US SHIPPING & RETURN</div></div>
    <div className="nav-bar">
      <div className="header-left">
        <BurgerMenu />
        <span style={{ marginRight: '40px' }}>Men</span>
        <span>Women</span>
      </div>
      <div className="logo-wrapper">
        <div className="logo">
          <span className="oval-yellow" />
          <span className="oval-green" />
        </div>
      </div>
      <div className="header-right">
        <span style={{ marginRight: '38px' }}>About</span>
        <div className='icons'>
          <AccountIcon />
          <CheckoutIcon />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
