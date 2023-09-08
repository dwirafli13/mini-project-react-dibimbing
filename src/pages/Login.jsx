import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "/reshot-icon-burger.svg";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errLogin, setErrLogin] = useState("");
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    };
    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        localStorage.setItem("token", res?.data?.data?.token);
        navigate("/menus");
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setErrLogin(err?.response?.data?.message);
      });
  };

  return (
    <>
      <div className="d-flex align-items-center py-4 bg-body-tertiary page-bg">
        <div className="container content-style">
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1>WELCOME BACK</h1>
          <p>please login first</p>
          {!!errLogin.length && (
            <p className="alert alert-danger">{errLogin}</p>
          )}
          <div className="form-floating">
            <input
              onChange={handleChangeUsername}
              type="text"
              placeholder="test123"
              className="form-control form-border-1"
            />
            <label className="form-label">Username</label>
          </div>
          <div className="form-floating">
            <input
              onChange={handleChangePass}
              type="password"
              placeholder="password"
              className="form-control form-border-2"
            />
            <label className="form-label">Password</label>
          </div>
          <button
            onClick={handleLogin}
            className="btn btn-primary w-100 py-2 mt-3"
          >
            Sign In
          </button>
          <p>
            Don't have an account?{" "}
            <Link to={"/register"}>Sign up for free!</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
