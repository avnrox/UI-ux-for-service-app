import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './servicenavbar.css';
import { useNavigate } from 'react-router-dom';

const Servicenavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   username: data.get('username'),
    //   password: data.get('password'),
    // });
    navigate('/');
    localStorage.removeItem('provider_id');
    console.log("provider_id",localStorage.getItem("provider_id"))
    };

    const gotoprofile = (event) => {
      event.preventDefault();
      // const data = new FormData(event.currentTarget);
      // console.log({
      //   username: data.get('username'),
      //   password: data.get('password'),
      // });
      navigate('/serviceproviderorders');
      
      };

  return (
    <div className="seva__navbar">
      <div className="seva__navbar-links">
        <div className="seva__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="seva__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wseva">Services</a></p>
          <button type="button" onClick={gotoprofile}>Orders</button>
          <p><a href='#newpagelink'>Add Service</a></p>
          <p><a href="#blog">News</a></p>
        </div>
      </div>
      <div className="seva__navbar-sign">
       {/* <p>Sign Out</p> */}
       <button type="button" onClick={handleOnClick}>Sign Out</button>
      </div>
      <div className="seva__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="seva__navbar-menu_container scale-up-center">
          <div className="seva__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wseva">Services</a></p>
            <button type="button" onClick={gotoprofile}>Orders</button>
            <p><a href='#newpagelink'>Add Service</a></p>
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

export default Servicenavbar;
