import React from 'react';
import BurgerImage from '../../../../Asset/Burger image.png';

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-text">
        <h1>
          Delicious Deliveries, Delivered{' '}
          <span className="special-text">to your Doorstep!</span>{' '}
        </h1>
        <p>
          Our mission is to bring the diverse flavors of your city to your table
          with ease of a click. We partner with renowned local restaurants to
          ensure you experience the best the culinary world has to offer.
        </p>
        <div className="search-div">
          <input
            type="text"
            placeholder="Find your favourite restaurant"
            className="search-input"
          />
          <button className="search">Search</button>
        </div>
      </div>
      <img src={BurgerImage} className="burger" alt="" />
    </main>
  );
};

export default Hero;
