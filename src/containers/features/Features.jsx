import React from 'react'

import manpuzzle from '../../assets/manpuzzle.png'

import './features.css';
const Features = () => {
  return (
    <div className='creamcollar__challenge'>
      <div className='creamcollar__challenge-links'>
        <h1>Challenge</h1>
        <p>The software driven mobility disruptions primarily driven by 4 trends which are autonomous, connected, electric and shared, rely heavily on leading edge software development, posing new challenges to automotive OEM's, Tier 1's, system integrators and suppliers in dealing with complexities due to Massive talent shortage and Increase in the R&D cost, therefore decreasing the rate needed to sustain innovation</p> 
      </div>
      <div className='creamcollar__challenge-image'>
        <img src={manpuzzle} alt='manpuzzle'/>
      </div>
    </div>
  )
}

export default Features