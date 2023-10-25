import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className='heading' style={{textAlign:'center'}}>
        <h1 style={{fontSize:"3rem"}}>⋆˚🐾Welcome to PawPrint🐾˖°</h1>
        <p style={{fontSize:"2rem"}}>Your Trusted Partner for Pet Care</p>
      </div>
      
      <div>
        <section id="about" style={{textAlign:'center'}}>
          <h2 style={{fontSize:"2rem"}}>About Us</h2>
          <h5 style={{fontSize:"1rem"}}>
            PawPrint is a dedicated pet care service provider that has been serving pet owners and their beloved animals for many years. We are passionate about providing the best possible care for your pets and ensuring their happiness and well-being.
          </h5>
        </section>
        
        <div id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Grooming</li>
            <li>Training</li>
            <li>DayCare</li>
            <li>Walking</li>
            <li>Boarding</li>
            <li>Vetenary Services</li>
          </ul>
        </div>
      </div>
      
      <footer className='afooter' style={{textAlign:'center'}}>
      You can reach out to us at:-<a href="mailto:pawsforyou23@gmail.com"style={{fontFamily:"cursive"}}>pawsforyou23@gmail.com</a>

        <p>&copy; 2023 PawPrint</p>
      </footer>
      </>
  );
};

export default AboutUs;
