import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";

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
        localStorage.setItem(res?.data);
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setErrRegister(err?.response?.data?.message);
      });
  };

  console.log("payload", name, username, password);

  return (
    <>
      <div className="page-bg">
        <div className="container-fluid content-style border">
          <h1>REGISTER</h1>
          <p>please fill in</p>
          {!!errRegister.length && <p className="alert alert-danger">{errRegister}</p>}
          <div className="form-style">
            <label className="form-label">Name</label>
            <input
              onChange={handleName}
              type="text"
              placeholder="Enter your name"
              className="form-control"
            />
          </div>
          <div className="form-style">
            <label className="form-label">Username</label>
            <input
              onChange={handleUsername}
              type="text"
              placeholder="Enter your username"
              className="form-control"
            />
          </div>
          <div className="form-style">
            <label className="form-label">Password</label>
            <input
              onChange={handlePass}
              type="password"
              placeholder="Enter your password"
              className="form-control"
            />
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
          <button onClick={handleRegister} className="btn btn-primary">
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
