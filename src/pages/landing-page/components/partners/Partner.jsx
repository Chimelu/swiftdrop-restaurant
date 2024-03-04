import React from 'react';
import pizzaImage from '../../../../Asset/pizzaimage.png';

const Partner = () => {
  return (
    <section>
      <h1 className="partner-text">Our Partners</h1>
      <div className="partner">
        <p className="partner-text2">
          Elevate your restaurant's reach with us and also streamline your
          potential management for swift success.
        </p>
        <img className="pizza" src={pizzaImage} alt="" />
      </div>
    </section>
  );
};

export default Partner;
