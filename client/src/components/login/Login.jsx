import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import softmind from "../../assets/sm.png";
import collegeLogo from "../../assets/clz-logo.png";
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(newPassword.length === 0 || newPassword.length < 3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length === 0 || password.length === 0) {
      setError(true);
      setPasswordError(password.length === 0);
    } else {
      try {
        setError(false);
        setPasswordError(false);

        const res = await axios.post("http://localhost:8081/login", {
          username: username,
          password: password,
        });

        if (res.data === "Success") {
          navigate("/admin");
          alert("login successful");
        } else {
          console.log(res);
          alert("Login failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <div className="login-title">
          <h1> Quiz Management System</h1>
        </div>

        <div className="college-logo">
          <img src={collegeLogo} alt="" />
        </div>
        <div className="footer-logo">
          <div className="logo-title">
            <h2>Powered by</h2>
          </div>
          <div className="logo">
            <img src={softmind} height="50px" alt="" />
          </div>
        </div>
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="form">
          <span>Welcome Admin</span>
          <label htmlFor="Username">Username</label> <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {error && username.length === 0 ? (
            <label className="error-msg">Username cannot be empty</label>
          ) : (
            ""
          )}
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
          />
          {error && passwordError ? (
            <label className="error-msg">
              Should not be less that 3 characters
            </label>
          ) : (
            ""
          )}
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
