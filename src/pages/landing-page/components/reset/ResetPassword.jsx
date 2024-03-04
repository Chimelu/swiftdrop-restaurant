import React from 'react';
import image from '../../../../Asset/image.png';

const ResetPassword = () => {
  return (
    <div className="forgot">
      <img src={image} alt="" />
      <div className="pass">
        <div className="text2">
          <h1>Reset Password?</h1>
        </div>
        <form>
          <div className="recover1">
            <label htmlFor="Password">New password</label>
            <input
              //   defaultValue={email}
              //   required
              type="password"
            />
          </div>
          <div className="reset1">
            <label htmlFor="Password">Confirm password</label>
            <input
              //   defaultValue={email}
              //   required
              type="password"
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

export default ResetPassword;
