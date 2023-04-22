import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav-link">
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/sing-up">Sing Up</Link>
      </div>
    </nav>
  );
};

export default Header;
