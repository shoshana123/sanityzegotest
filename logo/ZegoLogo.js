import React from 'react';
import Logo from './Logo.png'

const ZegoLogo = () => (
    <div style={{display: 'flex', alignItems: 'center'}}>
  <img src={Logo} alt="Zego Logo" style={{maxWidth: '20%'}}/> 
  <h4>Zego's Sanity Studio</h4>
  </div>
);

export default ZegoLogo;