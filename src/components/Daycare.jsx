import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
const Daycare = () => {
  return (
    <div className="service-container">
      <h2>Daycare</h2>
      <p>Leave your pet with us for a fun and safe day of play and socialization.</p>
      <Link to="/home">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default Daycare;
