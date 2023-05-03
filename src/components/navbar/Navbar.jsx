import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="seva__navbar">
      <div className="seva__navbar-links">
        <div className="seva__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="seva__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#features">Orders</a></p>
          <p><a href="#blog">News</a></p>
        </div>
      </div>
      <div className="seva__navbar-sign">
        <p>Sign Out</p>
        <button type="button">Profile</button>
      </div>
      <div className="seva__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="seva__navbar-menu_container scale-up-center">
          <div className="seva__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#features">Orders</a></p>
            <p><a href="#blog">News</a></p>
          </div>
          <div className="seva__navbar-menu_container-links-sign">
            <p>Sign Out</p>
            <button type="button">Profile</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
