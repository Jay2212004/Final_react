import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
const Boarding = () => {
  return (
    <div className="service-container">
      <h2>Boarding</h2>
      <p>Board your pet with us and ensure they have a comfortable stay.</p>
      <Link to="/home">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default Boarding;
