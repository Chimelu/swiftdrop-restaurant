// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Admin

import OverviewPage from './pages/overview';
import OrdersPage from './pages/orders';
import PendingOrder from './pages/orders/pending-order';
import DelieveryReady from './pages/orders/delivery-ready';
import FoodMenuPage from './pages/foodMenu';
import ViewOrder from './pages/orders/view-order';


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
          <Route exact path="/pending-order" element={<PendingOrder />} />
          <Route exact path="/view-order" element={<ViewOrder />} />
          <Route exact path="/delivery-ready" element={<DelieveryReady />} />
          <Route exact path="/food-menu" element={<FoodMenuPage />} />

          
          
        </Routes>
      </Router>
    </>
  );
}
