import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result = () => {}))
      .catch((error = () => {}));
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav-link">
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        {user ? (
          <span>
            <span className="user-info">{user.email}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}

        {/* <Link to="/sing-up">Sing Up</Link> */}
      </div>
    </nav>
  );
};

export default Header;
