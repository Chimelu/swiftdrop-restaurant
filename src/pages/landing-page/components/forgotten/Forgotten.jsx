import React from 'react';
import image from '../../../../Asset/image.png';

const ForgottenPassword = () => {
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
        <form>
          <div className="recover1">
            <label htmlFor="Email">Email address</label>
            <input
              //   defaultValue={email}
              //   required
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="recover" type="submit">
            Recover Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
