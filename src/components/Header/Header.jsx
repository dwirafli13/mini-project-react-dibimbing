import React from "react";
import logo from "/reshot-icon-burger.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = ({ handleChanceSearch, getData }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/menus"} className="navbar-brand fw-bold mb-2">
            <img src={logo} width={"50"} height={"50"} />
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
          <div
            className="collapse navbar-collapse d-lg-flex"
            id="navbarsExample03"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-lg-1">
              <li className="nav-item">
                <Link
                  to={"/menus"}
                  className="nav-link fw-bold mb-2"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="justify-content-lg-center me-2 mb-2 col-lg-6">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                onChange={handleChanceSearch}
                role="search"
              />
            </div>
            <button className="btn btn-outline-primary rounded-5 me-2 mb-2">
              <i class="bi bi-cart-fill"></i>
            </button>
            <div className="d-lg-flex col-sm-2 justify-content-lg-end">
              <button onClick={handleLogout} className="btn btn-danger mb-2">
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
