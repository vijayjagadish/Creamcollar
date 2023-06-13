import React from 'react'

import name from '../../assets/name.png';
import link from '../../assets/link.png';
import './footer.css';
const Footer = () => {
  return (
    <div className='creamcollar__footer'>
      <div className='creamcollat__footer-container'>
        <img src={name} alt='name'/>
        <p>Lorem ipsum dolor sit amet consectetur. Enim penatibus eu non elementum mauris vel tempor a.</p>
        <img src={link} alt='link'/>
      </div>
      <div className='creamcollar__footer-container-address'>
        <h4>CreamCollar</h4>
        <p>xyz, aaa aaa, Bangalore </p>
        <p>info@creamcollar.com</p>
      </div>
      <div className='creamcollar__footer-container-subscribe'>
        <h4>Subscribe</h4>
        <input type='text' value='Email'/>
        <p>Subscribe</p>
      </div>
          <div className='creamcollar__footer-copyright'>
            <p>Copyright © 2023, All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer