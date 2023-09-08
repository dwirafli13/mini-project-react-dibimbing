import React from "react";
import logo from "/logoipsum-295.svg";
import { useNavigate } from "react-router";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ handleChanceSearch, getData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <nav className="navbar">
          <Link to={"/menus"}>
            <img src={logo} />
          </Link>
          <div className="d-flex">
            <input className="form-control me-2" placeholder="Search" onChange={handleChanceSearch} />
          </div>
          <button onClick={handleLogout} className="btn btn-outline-danger">
            Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
