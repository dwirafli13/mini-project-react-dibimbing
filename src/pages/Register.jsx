import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "/reshot-icon-burger.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState();
  const [errRegister, setErrRegister] = useState("");
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleId = (e) => {
    setRoleId(e.target.value);
  };

  const handleRegister = () => {
    const payload = {
      name: name,
      username: username,
      password: password,
      roleId: 2,
    };
    axios
      .post("https://api.mudoapi.tech/register", payload)
      .then((res) => {
        // localStorage.setItem(res?.data);
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setErrRegister(err?.response?.data?.message);
      });
  };

  return (
    <>
      <div className="d-flex align-items-center py-4 bg-body-tertiary page-bg">
        <div className="container content-style">
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1>REGISTER</h1>
          <p>please fill in</p>
          {!!errRegister.length && (
            <p className="alert alert-danger">{errRegister}</p>
          )}
          <div className="form-floating">
            <input
              onChange={handleName}
              type="text"
              placeholder="Enter your name"
              className="form-control mb-2"
            />
            <label className="form-label">Name</label>
          </div>
          <div className="form-floating">
            <input
              onChange={handleUsername}
              type="text"
              placeholder="Enter your username"
              className="form-control mb-2"
            />
            <label className="form-label">Username</label>
          </div>
          <div className="form-floating">
            <input
              onChange={handlePass}
              type="password"
              placeholder="Enter your password"
              className="form-control"
            />
            <label className="form-label">Password</label>
          </div>
          {/* <div className="form-style">
            <label className="form-label">Role Id</label>
            <input
              onChange={handleRoleId}
              type="number"
              placeholder="Enter your role id"
              className="form-control"
            />
          </div> */}
          <button
            onClick={handleRegister}
            className="btn btn-primary w-100 py-2 mt-3"
          >
            Register
          </button>
          <p>
            Already have an account? <Link to={"/"}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
