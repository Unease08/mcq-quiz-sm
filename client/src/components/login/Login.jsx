import React, { useState } from "react";
import sm from "../../assets/sm.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

        if (res.status === 200 && res.data === "Success") {
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
    <div className="login-form-container">
      <div className="login-left">
        <img src={sm} alt="" />
      </div>
      <div className="form-container">
        <div className="greeting">
          <h1>Hello, again</h1>
          <p>We are happy to have you back</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && username.length === 0 ? (
              <label className="error-msg">Username cannot be empty</label>
            ) : (
              ""
            )}
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {error && passwordError ? (
              <label className="error-msg">
                Should not be less that 3 characters
              </label>
            ) : (
              ""
            )}
          </label>
          <p className="forgot">Forgot password?</p>
          <button className="login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
