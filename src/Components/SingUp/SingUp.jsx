import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="login-container">
      <h3 className="from-title">Sing Up</h3>
      <form className="from-container">
        <div className="from-control">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="from-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="from-control">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <input type="submit" className="submit-btn" value="Sing Up" />
        <div className="create-account">
          New to Ema-john? <Link to="/sing-up">Create New Account</Link>
        </div>
        <hr className="line" />
        <div className="google-logo-container">
          <button className="google-login-btn">
            <img
              className="google-img"
              alt="Google login"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svog.png"
            />
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
