import React from "react";
import logo from "/reshot-icon-burger.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to={"/menus"}
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img src={logo} width="30" height="24" />
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2023 Dwi M Nurafli
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://twitter.com/DibimbingId"
                target="_blank"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.instagram.com/dibimbing.id/"
                target="_blank"
              >
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="https://www.facebook.com/dibimbing.id/"
                target="_blank"
              >
                <i class="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
