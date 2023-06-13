import React from 'react'

import ladyclock from '../../assets/ladyclock.png';

import './cta.css';
const CTA = () => {
  return (
    <div className='creamcollar__cta'>
      <div className='creamcollar__cta-image'>
        <h1>Need for the hour</h1>
        <img src={ladyclock} alt='ladyclock' />
      </div>
      <div className='creamcollar__cta-contant'>
        <p>Awakening to the fact that growing talent shortage and the R&D costs do not have a quick fix, There is a need to streamline the process of innovation through Industry and Academia collaboration to develop research and qualified workforce with Industry driven R&D’s happening at the college incubation centers creating industry ready engineers </p>
      </div>
    </div>
  )
}

export default CTA