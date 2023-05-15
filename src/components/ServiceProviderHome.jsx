import React, { useState , useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";


export const ServiceProviderHome = () => {
    
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
    <div>
      
      <button onClick={gettempdata}>Fetch Services</button>
      {res.length > 0 && (
        <ul style={{ color: 'white' }}>
          {res.map(item => (
            <Link to={`/servicedetailsandchatserviceproviderside`} key={item.serviceId}>
              <li 
                onClick={() => {
                  localStorage.setItem('spchat', JSON.stringify(item));
                }}
                style={{ color: 'white' }}
              >
                <h3>{item.user_id}</h3>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
