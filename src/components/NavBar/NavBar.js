import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import logo from "./icons8-repas-64.png";
import "./navBar.css";

const NavBar = ({ setSearch }) => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="home">
          <img src={logo} alt="logo" />
          <h1>Meal Chef</h1>
        </div>
      </Link>
      <Search setSearch={setSearch} />
      <nav className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Home</h2>
        </Link>
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <h2>About Us</h2>
        </Link>
        <Link to="/user" style={{ textDecoration: "none" }}>
          <h2>User</h2>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
