// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Admin

import OverviewPage from './pages/overview';
import OrdersPage from './pages/orders';
import FoodMenuPage from './pages/foodMenu';


import LandingPage from './pages/landing-page'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}

          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/overview" element={<OverviewPage />} />
          <Route exact path="/orders" element={<OrdersPage />} />
          <Route exact path="/food-menu" element={<FoodMenuPage />} />

          
          
        </Routes>
      </Router>
    </>
  );
}
