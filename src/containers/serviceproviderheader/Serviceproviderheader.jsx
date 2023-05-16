//import hoomans from '../../assets/humans.png';
import comunity from '../../assets/comunity2.png';
import './serviceproviderheader.css';
import React, { useState , useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";


export  const Serviceproviderheader = () => {
  const provider_id = localStorage.getItem("provider_id");
  const navigate = useNavigate();

  const [res, setRes] = useState([]);
  const gettempdata = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8082/order/request_list?provider_id='+provider_id)
    .then((response) => {
      console.log(response.data);
      setRes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (


  <div className="seva__header section__padding" id="home">
    <div className="seva__header-content">
      <h1 className="gradient__text">Connecting Buissness Since 2023 </h1>
      <p>Helping Local Buisness bloom into greater hights </p>
      <div className='seva__navbar-links_container'>
      <button onClick={gettempdata}>Fetch Services</button>
      {res.length > 0 && (
        <ul >
          {res.map(item => (
            <Link to={`/servicedetailsandchatserviceproviderside`} key={item.serviceId}>
              <li 
                onClick={() => {
                  localStorage.setItem('spchat', JSON.stringify(item));
                }}
                style={{ color: 'white' }}
              >
                <h3>{item.service_category}</h3>
          <p>{item.user_id}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
      </div>
    </div>

    <div className="seva__header-image">
      <img src={comunity} alt='connecting people'/>
    </div>
  </div>
  );
};

export default Serviceproviderheader;
