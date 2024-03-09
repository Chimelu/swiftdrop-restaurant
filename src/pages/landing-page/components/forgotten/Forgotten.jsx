import React from 'react';
import image from '../../../../Asset/image.png';
import { useState } from 'react';
const ForgottenPassword = () => {
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  function handleUserLogin(e) {
    e.preventDefault();

    const errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setShowSpinner(true);
      forgottenPassword();
    } else {
      setTimeout(() => {
        setFormErrors({});
      }, 5000);
    }
  }

  const forgottenPassword = async () => {
    try {
      const loginResponse = await fetch(
        'https://swifdropp.onrender.com/api/v1/restaurant/forgotpassword',
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
          }),

          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (Response.ok) {
        const responseData = await loginResponse.json();
        console.log('Check Mail:', responseData);
      }
    } catch (error) {
      console.error('Error Login:', error);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <div className="forgot">
      <img src={image} alt="" />
      <div className="pass">
        <div className="text2">
          <h1>Forgot Password?</h1>
          <p className="text3">
            Enter your email address and we'll send a link to get your account
            back.
          </p>
        </div>
        {formErrors.email && (
          <p className="error-message">{formErrors.email}</p>
        )}
        {formErrors && (
          <p className="error-message">{formErrors.serverError}</p>
        )}

        <form onSubmit={handleUserLogin}>
          <div className="recover1">
            <label htmlFor="Email">Email address</label>
            <input
              //   defaultValue={email}
              //   required
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="recover" type="submit" disabled={showSpinner}>
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
              'Recover Account'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
