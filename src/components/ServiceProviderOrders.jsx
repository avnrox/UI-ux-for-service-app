import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const ServiceProviderOrders = () => {

  const [servicelist, setservicelist] = useState([]);
  const providerId = localStorage.getItem("provider_id");

  // useEffect(() => {
  //   axios.get('http://localhost:8082?service_area='+servicearea+'&service_category='+servicecategory)
  //     .then(response => {
  //       setservicelist(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);



  const [completed, setCompleted] = useState([]);
  const getCompletedData = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8082/order/completed_list?provider_id='+providerId)
    .then((response) => {
      console.log(response.data);
      setCompleted(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const [accepted, setAcctepted] = useState([]);
  const getAcceptedData = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8082/order/accepted_list?provider_id='+providerId)
    .then((response) => {
      console.log(response.data);
      setAcctepted(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };



  return (
  //   <ul style={{ color: 'white' }}>
  //   {items.map(item => (
  //     // <Link to={`/item/${item.id}`} key={item.id}>
  //     <Link to={`/servicerequestuserside`}>
  //       <li>
  //         <h3>{item.name}</h3>
  //         <p>{item.description}</p>
  //         <ul>
  //           {item.reviews.map(review => (
  //             <li key={review.id}>
  //               <p>{review.text}</p>
  //               <p>Rating: {review.rating}/5</p>
  //             </li>
  //           ))}
  //         </ul>
  //       </li>
  //     </Link>
  //   ))}
  // </ul>
  <div>
    {/* <button onClick={gettempdata}>Pending Services</button>
              {res.length > 0 &&
  <ul style={{ color: 'white' }}>
    {res.map(item => (
      <Link to={`/servicedetailsandchatuserside`} key={item.serviceId}>
        <li 
          onClick={() => {
            localStorage.setItem('usersearchserviceres', JSON.stringify(item));
          }}
          style={{ color: 'white' }}
        >
          <h3>{item.provider_id}</h3>
          
        </li>
      </Link>
    ))}
  </ul>
} */}
<button onClick={getCompletedData}>Completed Orders</button>
{completed.length > 0 &&
  <ul style={{ color: 'white' }}>
    {completed.map(item => (
      <Link 
      to={{pathname:`/providercompletedlist`,
          state: item
        }}
      
      key={item.serviceId}>
        <li 
          onClick={() => {
            localStorage.setItem('providercompletedlist', JSON.stringify(item));
          }}
          style={{ color: 'white' }}
        >
          <h3>{item.provider_id}</h3>
          {/* <p>{item.description}</p> */}
          {/* <ul>
            {item.reviews.map(review => (
              <li key={review.id}>
                <p>{review.text}</p>
                <p>Rating: {review.rating}/5</p>
              </li>
            ))}
          </ul> */}
        </li>
      </Link>
    ))}
  </ul>
}
<button onClick={getAcceptedData}>Accepted Orders</button>
{accepted.length > 0 &&
  <ul style={{ color: 'white' }}>
    {accepted.map(item => (
      <Link 
      to={{pathname:`/provideracceptedlist`,
          state: item
        }}
      
      key={item.serviceId}>
        <li 
          onClick={() => {
            localStorage.setItem('provideracceptedlist', JSON.stringify(item));
          }}
          style={{ color: 'white' }}
        >
          <h3>{item.provider_id}</h3>
          {/* <p>{item.description}</p> */}
          {/* <ul>
            {item.reviews.map(review => (
              <li key={review.id}>
                <p>{review.text}</p>
                <p>Rating: {review.rating}/5</p>
              </li>
            ))}
          </ul> */}
        </li>
      </Link>
    ))}
  </ul>
}
</div>
  );
};

export default ServiceProviderOrders;