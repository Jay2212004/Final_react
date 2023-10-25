import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';

const Grooming = () => {
  return (
    <div className="service-container">
      <h2>Grooming</h2>
      <p>Pamper your pet with our professional grooming services to keep them looking their best.</p>
      <Link to="/home">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default Grooming;
