import React from 'react';

import pages from '../../../constants/pages';

import Instagram from '../../../svgs/Instagram';
import Facebook from '../../../svgs/Facebook';


const PageLinks = () => {
  const sections = Object.keys(pages).map((section, id) => {
    let links = [];
    pages[section].forEach((page, idx) => {
      links.push(<a key={`links${page.name}-${idx}`} href={page.link} className="page">{page.name}</a>);
    })
    return (
      <div key={`${section}-${id}`} className="section">
        <div className="header">{section}</div>
        <div className="content">
          {links}
        </div>
      </div>
    );
  })


  return (
    <div className="page-links-container">
      {sections}

      <div className="newsletter">
        <div className="header">NEWSLETTER</div>
        <div className="content">
          <input key="newsletter" className="page-mobile" placeholder="Enter email" />
          <button type="button">JOIN US</button>
        </div>
        <div className="social-media"><Instagram /> <Facebook /></div>
      </div>

      <div className="section-mobile">
        <div>
          <div className="header">SHOP</div>
          <div style={{ margin: '5px 0 40px', height: '50px', display: 'flex', flexDirection: 'column' }}>
            <div className="page">CATIBA</div>
            <div className="page" style={{ marginTop: '12px' }}>OCA</div>
          </div>
          <div className="header">Support</div>
          <div style={{ margin: '5px 0 40px', height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="page">FAQ</div>
            <div className="page">Returns</div>
            <div className="page">Live Chat</div>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: '40px' }}>ABOUT</div>
          <div style={{ marginBottom: '47px' }}>BLOG</div>
          <div >POP UP STORES</div>
        </div>
      </div>

    </div >
  )
};

export default PageLinks;
