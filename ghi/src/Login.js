import React, { useState } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";

function LogInForm() {
  const login = useToken()[1];
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    console.log("login successful +++++++++++++++");
    navigate("/");
  };

  function handleClick() {
    navigate("/signup");
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <h2 className="Auth-form-title">Log In</h2>
        <div className="Auth-form-content">
          <div className="Auth-form-field">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="Auth-form-field">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="Auth-form-submit" type="submit">
            Log In
          </button>
          <div className="button">
            <button onClick={handleClick}>
              Don't have an account? Sign up here
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
