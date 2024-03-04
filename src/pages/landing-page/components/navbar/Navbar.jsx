import React from 'react';
import { Link } from 'react-router-dom';
import swiftlogo from '../../../../Asset/swiftlogo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={swiftlogo} alt="logo" />
      <div className="links">
        <div className="link4">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/">
            Services
          </Link>
          <Link className="nav-link" to="/">
            About
          </Link>
          <Link className="nav-link" to="/">
            Features
          </Link>
        </div>
        <div className="buttons">
          <Link className="signup1" to="/signup">
            Sign up
          </Link>
          <Link className="login1" to="/signin">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
