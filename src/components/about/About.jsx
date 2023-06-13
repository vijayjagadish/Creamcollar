import React from 'react'

import './about.css';

const About = () => {
  return (
    <div className='creamcollar__about'>
      <div className='creamcollar__about-container'>
        <h1>Why we started CreamCollar</h1> 
        <p>
          With Software defined vehicle set to have a profound impact on Automotive Industry, we decided to take this as a challenge to help young graduates and experienced automotive industry professionals to re-imagine their careers with cloud, data, security and digital business solutions through creating the collaborative ecosystem between Industry and Academia.
        </p>
      </div>
        <div className='creamcollar__about-container-links'>
          <div className='creamcollar__about-container-links-heading'>
            <h2>Expertise</h2>
            <h2>Vision</h2>
            <h2>Mission</h2>
          </div>
          <div className='creamcollar__about-container-links-para'>
            <p>
            Career and Competencies research for enabling the SDV specific capabilities in every aspiring industry player in the automotive industry within three key innovation themes (i.e) Autonomous, Electric and Connected Vehicle technologies
            </p>
          </div>
        </div>
    </div>
  )
}

export default About