import React, { useState , useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './servicenavbar.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Servicenavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const handleAddservice = (event) => {
    event.preventDefault();
    navigate('/serviceprovideraddservice');
  };
  const handleAdminVerification = (event) => {
    event.preventDefault();
    navigate('/serviceproviderverification');
  };

  const provider_id = localStorage.getItem("provider_id");
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    // fetch the is_verified value from your API or localStorage
    // set setIsVerified accordingly
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8082/serviceprovider/get_provider_verified?provider_id='+provider_id);
        setIsVerified(response.data);
        console.log(isVerified);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [provider_id]);

  const handleProviderHome = (event) => {
    event.preventDefault();
    navigate('/ServiceProviderHome');
  };

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
      navigate('/serviceproviderorders');
      
      };

  return (
    <div className="seva__navbar">
      <div className="seva__navbar-links">
        <div className="seva__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="seva__navbar-links_container">
        <button type="button" onClick={handleProviderHome} >Home</button>
          <button type="button" onClick={gotoprofile}>Orders</button>
          {
      isVerified === 1 ? 
        <button
          type="button"
          onClick={handleAddservice}
        >
          Add Service
        </button>
        :
        <button
        type="button"
        onClick={handleAdminVerification}
      >
        Verification Needed
      </button>
      }
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
          <button type="button" onClick={handleProviderHome} >Home</button>
          <button type="button" onClick={gotoprofile}>Orders</button>
          {
      isVerified === 1 ? 
        <button
          type="button"
          onClick={handleAddservice}
        >
          Add Service
        </button>
        :
        <button
        type="button"
        onClick={handleAdminVerification}
      >
        Verification Needed
      </button>
      }
          </div>
          <div className="seva__navbar-menu_container-links-sign">
            <br/>
          <button type="button" onClick={handleOnClick}>Sign Out</button>

          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Servicenavbar;
