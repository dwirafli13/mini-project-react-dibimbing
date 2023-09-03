import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
      <div className="page-bg">
        <div className="container-fluid content-style border">
          <h1>WELCOME BACK</h1>
          <p>please login first</p>
          {!!errLogin.length && (
            <p className="alert alert-danger">{errLogin}</p>
          )}
          <div className="form-style">
            <label className="form-label">Username</label>
            <input
              onChange={handleChangeUsername}
              type="text"
              placeholder="Enter your username"
              className="form-control"
            />
          </div>
          <div className="form-style">
            <label className="form-label">Password</label>
            <input
              onChange={handleChangePass}
              type="password"
              placeholder="********"
              className="form-control"
            />
          </div>
          <button onClick={handleLogin} className="btn btn-primary">
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
