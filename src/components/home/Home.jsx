import React from 'react'
import { Features, Header, Opportunity, Possibility, WhatCREAMCOLLAR, Blog, How  } from '../../containers'
import {Brand, CTA } from '../../components'
import './home.css';
const Home = () => {
  return (
    <div>
      <Header />
      <Brand />
      <WhatCREAMCOLLAR />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Opportunity />
      <How />
    </div>
  )
}

export default Home