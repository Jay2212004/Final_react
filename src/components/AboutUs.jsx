import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <header>
        <h1>Welcome to PawPrint</h1>
        <p>Your Trusted Partner for Pet Care</p>
      </header>
      
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>
            PawPrint is a dedicated pet care service provider that has been serving pet owners and their beloved animals for many years. We are passionate about providing the best possible care for your pets and ensuring their happiness and well-being.
          </p>
        </section>
        
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Grooming</li>
            <li>Training</li>
            <li>DayCare</li>
            <li>Walking</li>
            <li>Boarding</li>
            <li>Vetenary Services</li>
          </ul>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2023 PawPrint</p>
      </footer>
    </div>
  );
};

export default AboutUs;
