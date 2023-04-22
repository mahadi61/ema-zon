import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const { singIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleSingIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <h3 className="from-title">Login</h3>
      <form onSubmit={handleSingIn} className="from-container">
        <div className="from-control">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="from-control">
          <label>Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show password</span>}
            </small>
          </p>
        </div>
        <span className="error">{error}</span>
        <input type="submit" className="submit-btn" value="Login" />
        <div className="create-account">
          New to Ema-john? <Link to="/sing-up">Create New Account</Link>
        </div>
        <hr className="line" />
      </form>
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
    </div>
  );
};

export default Login;
