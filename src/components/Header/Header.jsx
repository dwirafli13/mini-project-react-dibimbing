import React from "react";
import logo from "/reshot-icon-burger.svg";
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
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/menus"} className="navbar-brand fw-bold">
            <img
              src={logo}
              width={"50"}
              height={"50"}
            />
            FoodFever
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
              <li className="nav-item">
                <Link
                  to={"/menus"}
                  className="nav-link fw-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                onChange={handleChanceSearch}
                role="search"
              />
              <button onClick={handleLogout} className="btn btn-danger ms-3">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
