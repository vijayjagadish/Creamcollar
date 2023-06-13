import React from 'react'

import commastart from '../../assets/commastart.png';
import commaend from '../../assets/commaend.png';

import './brand.css';
const Brand = () => {
  return (
    <div className='creamcollar__brand'>
      <div className='commastart'>
      <img src={commastart} alt='commastart'/>
      </div>
      <div className='creamcollar__brand-automobile'>
        <p>Automotive industry is undergoing the disruption of a century in this decade</p>  
      </div>
      <div className='commaend'>
      <img src={commaend} alt='commaend'/>
      </div>
        
    </div>
  )
}

export default Brand