import React from 'react';
import Orders from '../../components/orders/Orders';
import './services.css';
/*check how to add comments from a data base after clicking view more */
const Services = () => (
  <div className="seva__services section__margin" id="wseva">
    <div className="seva__services-heading">
      <h1 className="gradient__text">Satisfying Customers Since 2023</h1>
      <p> &lt;3 </p>
    </div>
    <div className="seva__services-container">
      <Orders title="Arjun V Nair" text="I was one of the lucky few to get early access to this very helpfull app. After moving to UK io could not figure out how to get anyhting done , thats when this app came into my life. thank you devolopers" />
      <Orders title="Siddharth Raut" text="I was in tears when i saw this beutiful User Interface, I couldnt belive we could have such beaty with all these great features. My eyes are happy " />
      <Orders title="Tracy" text="This app saved my life, i couldnt find any services around me to fix my light. Using this app was very simple and straight forward" />
    </div>
  </div>
);

export default Services;
