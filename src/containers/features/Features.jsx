import React from 'react';
import Feature from '../../components/orders/Orders';
import './features.css';
/*orders from data base*/
const featuresData = [
  {
    title: 'Baby sitting',/*service name and discription */
    text: 'Ensuring your babys safty',
  },
  {
    title: 'Electrical raepair',
    text: 'If electricity runs in it , we can fix it',
  },
  {
    title: 'Plumbing',
    text: 'Water leaks or fitting lines we strive to satisfy',
  },
  {
    title: 'Beauty',
    text: 'Helping you feel more confident than yesterday',
  },
  {
    title: 'Cleaning',/*service name and discription */
    text: 'Making your floors shine better than your future',
  },
  {
    title: 'Pest Control',/*service name and discription */
    text: 'Safe and eviornmental friendly pest contol servies',
  },
];

const Features = () => (
  <div className="seva__features section__padding" id="features">
    <div className="seva__features-heading">
      <h1 className="gradient__text">All Servies Provided By Us.</h1>
      {/* <p href="#home">Search Order</p> */}
    </div>
    <div className="seva__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
