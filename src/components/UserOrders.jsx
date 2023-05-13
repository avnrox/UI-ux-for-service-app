import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const UserOrders = () => {

  const [servicelist, setservicelist] = useState([]);
  const userId = localStorage.getItem("user_id");

  // useEffect(() => {
  //   axios.get('http://localhost:8082?service_area='+servicearea+'&service_category='+servicecategory)
  //     .then(response => {
  //       setservicelist(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const [res, setRes] = useState([]);
  const gettempdata = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8082/order/user_pending_list?user_id='+userId)
    .then((response) => {
      console.log(response.data);
      setRes(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const [completed, setCompleted] = useState([]);
  const getCompletedData = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8082/order/user_completed_list?user_id='+userId)
    .then((response) => {
      console.log(response.data);
      setCompleted(response.data);
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
    <button onClick={gettempdata}>Pending Services</button>
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
<button onClick={getCompletedData}>Completed Orders</button>
{completed.length > 0 &&
  <ul style={{ color: 'white' }}>
    {completed.map(item => (
      <Link 
        to={{
          pathname: '/usercompletedlist',
          state: { item }
        }} 
        key={item.serviceId}
        style={{ color: 'white' }}
      >
        <li>
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

export default UserOrders;