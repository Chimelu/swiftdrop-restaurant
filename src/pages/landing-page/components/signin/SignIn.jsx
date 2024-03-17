import React from 'react';
import { Link } from 'react-router-dom';
import image4 from '../../../../Asset/Image4.svg';
import BG from '../../../../Asset/BG.png';
import { TbStarFilled } from 'react-icons/tb';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
    console.log('Remember Me clicked:', !rememberMe);
  };

  function handleUserLogin(e) {
    e.preventDefault();

    const errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!password) {
      errors.password = 'Password is required.';
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowSpinner(true);
      login();
    } else {
      setTimeout(() => {
        setFormErrors({});
      }, 5000);
    }
  }

  const login = async () => {
    try {
      const loginResponse = await fetch(
        'https://swifdropp.onrender.com/api/v1/login-Restaurant',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            rememberMe: rememberMe,
          }),

          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (loginResponse.ok) {
        const responseData = await loginResponse.json();
        console.log('Login successful:', responseData);
        sessionStorage.setItem('token', responseData.token);
        const userId = responseData.restaurant._id;

        // Storing the user ID in localStorage
        localStorage.setItem('userId', userId);

        console.log(userId);
        navigate('/overview'); // Use navigate to redirect to the overview page
      } else {
        const errorData = await loginResponse.json();
        console.error('Registration failed:', errorData);

        if (errorData.error) {
          setFormErrors({ serverError: errorData.error });
        }
      }
    } catch (error) {
      console.error('Error Login:', error);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <section className="signin">
      <div className="left-box">
        <img className="img1" src={image4} alt="" />
        <div className="bottom-content">
          <span className="star">
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
            <TbStarFilled />
          </span>
          <p className="word">
            "We love Swiftdrop we've been getting and managing orders
            seamlessly, it's definately a restaurant's dream come true"
          </p>
          <div className="ratings">
            <img src={BG} alt="" />
            <div>
              <p className="name">Fiyin Oladejo</p>
              <p className="founder">Founder, Tasty Natives</p>
            </div>
          </div>
        </div>
      </div>
      <div className="formBox">
        <div className="welcome-text">
          <h1>Welcome back!</h1>
          <p>
            Swiftdrop gives you the blocks and components you need to take to
            your sales to the next level
          </p>
        </div>
        {formErrors.email && (
          <p className="error-message">{formErrors.email}</p>
        )}
        {formErrors.password && (
          <p className="error-message">{formErrors.password}</p>
        )}
        {formErrors && (
          <p className="error-message">{formErrors.serverError}</p>
        )}

        <form className="signin-form" onSubmit={handleUserLogin}>
          <div className="formControl">
            <label htmlFor="Email">Email address</label>
            <input
              //   defaultValue={email}
              //   required
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formControl">
            <label htmlFor="First name">Password</label>
            <input
              //   defaultValue={email}
              //   required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember Me
            </label>

            <Link className="link1" to="/forgottenpassword">
              Forgot password?
            </Link>
          </div>
          <div className="login">
            <button className="loginbtn" type="submit" disabled={showSpinner}>
              {showSpinner ? (
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span>Loading...</span>
                </div>
              ) : (
                'Sign up'
              )}
            </button>
            <div className="options1">
              <p>Don't have an account?</p>
              <Link className="link1" to="/signup">
                Create free account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
