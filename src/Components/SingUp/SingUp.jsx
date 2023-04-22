import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SingUp = () => {
  const { singUpWithEmailPassword } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Your password not match!");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    }
    singUpWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));

    form.reset();
  };

  return (
    <div className="login-container">
      <h3 className="from-title">Sing Up</h3>
      <form onSubmit={handleSingUp} className="from-container">
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
            name="confirm"
            placeholder="Password"
            required
          />
        </div>
        <p className="error">{error}</p>
        <input type="submit" className="submit-btn" value="Sing Up" />
        <div className="create-account">
          Already have an account? <Link to="/login">Login</Link>
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
