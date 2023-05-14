import React, { useState , useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from "axios";


export const ServiceProviderHome = () => {
    
  const provider_id = localStorage.getItem("provider_id");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
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

  const handleOnClick = (event) => {
    event.preventDefault();
    navigate('/serviceprovideraddservice');
  };

  const handleAdminVerification = (event) => {
    event.preventDefault();
    navigate('/serviceproviderverification');
  };

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
      {
      isVerified === 1 ? 
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleOnClick}
        >
          Add Service
        </Button>
        :
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleAdminVerification}
      >
        Verification
      </Button>
      }
      
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
