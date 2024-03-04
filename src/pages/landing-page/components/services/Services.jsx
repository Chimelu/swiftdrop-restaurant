import React from 'react';
import restaurantVector from '../../../../Asset/Restaurant.png';
import driverVector from '../../../../Asset/Driver vector.png';
import careerVector from '../../../../Asset/Group 70.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services-box">
      <h1 className="services-text">Our Services</h1>
      <div className="services">
        <div className="service">
          <img src={restaurantVector} alt="image" />
          <h3>Register your restaurant</h3>
          <p className="text3">
            Elevate your business with SwifDrop! Partner with us to boost sales,
            and unlock new opportunities.
          </p>
          <Link className="link7" to="/signup">
            Register your store
          </Link>
        </div>
        <div className="service">
          <img src={driverVector} alt="image" />
          <h3>Become our rider</h3>
          <p className="text4">
            Indulge in flexibility, seize freedom, and earn competitively as you
            deliver with SwifDrop.
          </p>
          <Link className="earning" to="/signup">
            Start earning
          </Link>
        </div>
        <div className="service">
          <img className="vector" src={careerVector} alt="image" />
          <h3>Careers</h3>
          <p className="text5">
            Want to be part of us and contribute to the amazing work we're doing
          </p>
          <Link className="apply" to="/signup">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
