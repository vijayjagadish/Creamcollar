import React from 'react';
import car from '../../assets/car.png';
import './header.css';

const Header = () => (
  <div className="creamcollar__header section__padding">
    <div className="creamcollar__header-content">
      <p className="gradient__text">Shaping the era of Software Defined Mobility through Industry Academia collaboration, enabling the young talent and the industry expertise to form a sustainable future</p>
    </div>
    <div className="creamcollar__header-image">
      <img src={car} alt='car' />
    </div>
  </div>
);

export default Header;
