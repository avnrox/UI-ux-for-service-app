import React from 'react';
import './Servicedetails.css';

const Servicedetails = ({ date, Sname , text, text1, score }) => (
  <div className="seva__blog-container_article">
    <div className="seva__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{Sname}</h3>
        <h3>{text}</h3>
        <h3>{text1}</h3>
        <h3>{score}</h3>

      </div>
    </div>
  </div>
);

export default Servicedetails;
