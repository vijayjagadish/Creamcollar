import React from 'react'

import link from '../../assets/link.png';

import commaend22 from '../../assets/commaend22.png';



import './possibility.css';
const Possibility = () => {
  return (
    <div className='creamcollar__need'>
      <div className='commastart__need'>
        <image src={link} alt='link'/>
      </div>
      <div className='creamcollar__need-content'>
        <p>Building the collaborative ecosystem to win together </p>
      </div>
      <div className='commaend__need'>
        <image src={commaend22} alt='commaend22'/>
      </div>
    </div>
   

  )
}

export default Possibility