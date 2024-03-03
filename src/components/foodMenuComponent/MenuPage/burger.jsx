// MenuPages/BurgerPage.js
import React from 'react';
import FoodMenuData from '../foodMenu';

const BurgerPage = () => {
  // You can customize this component based on your requirements
  const burgerMenu = FoodMenuData.find((food) => food.menu === 'Burger');

  return (
    <div>
      <h2>{burgerMenu.menu}</h2>
      
    </div>
  );
};

export default BurgerPage;
