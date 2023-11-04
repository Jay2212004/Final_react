import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
const Boarding = () => {
  return ( <><section className="pet-boarding">
  <div className="container">
    <h2>Pet Boarding</h2>
    <p>
      When you need to go on a trip and can't take your beloved pet with you, trust us to provide top-notch pet boarding services. We offer a safe and comfortable environment for your furry friend, ensuring they feel at home while you're away.
    </p>

    <div className="boarding-features">
      <div className="feature">
        <i className="fas fa-paw"></i>
        <h3>Comfortable Accommodation</h3>
        <p>Your pet will stay in a comfortable and clean environment with cozy bedding.</p>
      </div>

      <div className="feature">
        <i className="fas fa-walking"></i>
        <h3>Daily Walks</h3>
        <p>We provide daily walks and exercise to keep your pet active and happy.</p>
      </div>

      <div className="feature">
        <i className="fas fa-heart"></i>
        <h3>Love & Care</h3>
        <p>Our dedicated staff will provide love and care to your pet just like you do.</p>
      </div>
    </div>
  <Link to="/Booking">
    <button className="btn-primary">Book Boarding</button></Link>
  </div>
</section>
    <div className="service-container">
     
         <Link to="/home">
        <button className="back-button">Back</button>
      </Link>
    </div></>
  );
};

export default Boarding;
