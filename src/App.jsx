// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Admin

import OverviewPage from './pages/overview';
import OrdersPage from './pages/orders';
import PendingOrder from './pages/orders/pending-order';
import DelieveryReady from './pages/orders/delivery-ready';
import DispatchOrder from './pages/orders/dispatch-order';
import FoodMenuPage from './pages/foodMenu';
import ViewOrder from './pages/orders/view-order';

// import LandingPage from './pages/landing-page';
import SignUp from './pages/landing-page/components/signup/SignUp';
import SignIn from './pages/landing-page/components/signin/SignIn';
import ForgottenPassword from './pages/landing-page/components/forgotten/Forgotten';
import ResetPassword from './pages/landing-page/components/reset/ResetPassword';
import About from './pages/landing-page/components/about/About';

import LandingPage from './pages/landing-page';
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}

          <Route exat path="/" element={<LandingPage />} />
          <Route exact path="/overview" element={<OverviewPage />} />
          <Route exact path="/orders" element={<OrdersPage />} />
          <Route exact path="/pending-order" element={<PendingOrder />} />
          <Route exact path="/dispatch-order" element={<DispatchOrder />} />
          <Route exact path="/view-order/:order_id" element={<ViewOrder />} />
          <Route exact path="/delivery-ready" element={<DelieveryReady />} />
          <Route exact path="/food-menu" element={<FoodMenuPage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route
            exact
            path="/forgottenpassword"
            element={<ForgottenPassword />}
          />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}
