import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/name.png';
import './navbar.css';
import { NavLink } from 'react-router-dom';
const Menu = () =>(
  <>
    <p><NavLink to="/">Home</NavLink></p>
    <p><NavLink to="/about">About</NavLink></p>
    <p><NavLink to="/contact">Contact</NavLink></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='creamcollar__navbar'>
      <div className='creamcollar__navbar-links'>
        <div className='creamcollar__navbar-links_logo'>
        
          <img src={logo} alt='logo' />
        </div>
        <div className='creamcollar__navbar-links_container'>
          <p><NavLink to="/">Home</NavLink></p>
          <p><NavLink to="/about">About Us</NavLink></p>
          <p><NavLink to="/contact">Contact Us</NavLink></p>
        </div>
      </div>
        <div className='creamcollar__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>  
        <div className='creamcollar__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)}/>}
          {toggleMenu &&(
          <div className='creamcollar__navbar-menu_container scale-up-center'>
            <div className='creamcollar__navbar-menu_links'>
              <Menu/>
            </div>
            <div className='creamcollar__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div> 
          </div>
          )}
      </div>
    </div>
  );
};


export default Navbar;
