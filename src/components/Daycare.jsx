import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
const Daycare = () => {
  return (
    <div className="service-container">
      <h1 style={{textAlign:"center"}}>DAYCARE AT PAWPRINT</h1>
      <h2>The Pawprint Daycare is located in Mumbai. Call us to book a visit today!</h2>
  <p>8,500 square feet of the latest in animal care innovations and technologies. The Pawprint Daycare will parallel a dog’s natural instincts, ensuring the highest level of health and safety for dogs of all shapes and sizes. A hospital-grade air filtration system, high-tech drainage and flushing systems, two indoor play parks, and 1,000 square feet of outdoor play space, a training classroom, and luxury sleep suites all combine to create the most exclusive, state-of-the-art dog care facility in all of India.</p>
  <br></br>
  <p>Open 12 hours a day, 365 days a year, your dog will be under the watchful, loving, and protective care of our professionally trained staff. We commit to doing everything we can to love and care for your dog as much as you do.</p>
  <Link to="/Booking">
    <button style={{marginBottom:'20px'}} className="btn-primary">Book Boarding</button></Link>
      <Link to="/home">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

export default Daycare;
