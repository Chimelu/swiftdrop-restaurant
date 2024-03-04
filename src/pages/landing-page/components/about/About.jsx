import React from 'react';
import bikeDelivery from '../../../../Asset/Bike delivery.png';

const About = () => {
  return (
    <main className="about-box">
      <h1 className="about-text">About Us</h1>
      <div className="about">
        <img className="bike" src={bikeDelivery} alt="" />
        <div className="overview">
          <p className="overview-text2">Overview</p>
          <p className="overview-text1">
            Experience the fastest way to savor your favorites with our delivery
            app. Swift deliveries, guaranteed!
          </p>
          <div className="stats">
            <div>
              <p className="stat1">5K+</p>
              <p className="stat2">Happy users</p>
            </div>
            <div>
              <p className="stat1">20+</p>
              <p className="stat2">Restaurants</p>
            </div>
            <div>
              <p className="stat1">50+</p>
              <p className="stat2">Food menu</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
