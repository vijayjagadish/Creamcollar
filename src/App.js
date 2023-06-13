import React from 'react'

import { Footer, Blog, Possibility, Features, WhatCREAMCOLLAR, Header, Opportunity, How} from './containers';

import { CTA, Brand, Navbar, Home, About, Contact} from './components';

import './App.css';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
