import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';

const Grooming = () => {
  return (
    <div className="service-container">
      <h2 style={{ textAlign: 'center' }}>GROOMING</h2>
      <h3 style={{ textAlign: 'center' }}>WE TAKE PRIDE IN TREATING YOUR PET AS OUR OWN.</h3>
      <p style={{ textAlign: 'center' }}>Proper grooming does more than simply improve the appearance of your dog. Regular grooming promotes a healthy coat and skin, leading to a healthier, happier pet.</p>
      <br></br>
      <div className="bath" style={{ display: 'inline-block' ,marginRight:'30px' ,padding:'20px'}}>
        <h3>SPA PACKAGES</h3>
        <p>BATH PACKAGES</p>
        <ul>
          <li>Hydrotherapy bath with blueberry-vanilla facial</li>
          <li>Fluff drying and brush-out</li>
          <li>Nail trim</li>
          <li>Ear cleaning</li>
        </ul>
      </div>
      
      <div className="hair" style={{ display: 'inline-block' ,padding:'20px' }}>
        <h3>HAIRCUT PACKAGE</h3>
        <ul>
          <li>Hydrotherapy bath with blueberry-vanilla facial</li>
          <li>Fluff drying and brush-out</li>
          <li>Nail trim</li>
          <li>Ear cleaning</li>
          <li>Breed-specific or customized haircut</li>
        </ul>
      </div>
      <Link  to="/Booking">
    <button style={{marginBottom:'20px'}} className="btn-primary">Book Boarding</button></Link>
      <Link to="/home">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default Grooming;
