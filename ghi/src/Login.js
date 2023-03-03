import React, { useState } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LogInForm() {
  const { login } = useToken();
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

  function handleClickhome() {
    navigate("/");
  }

  return (
    <div className="Auth-form-container2">
      <form className="Auth-form2" onSubmit={handleSubmit}>
        <h2 className="Auth-form-title2">Log In</h2>
        <div className="Auth-form-content2">
          <div className="Auth-form-field2">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="Auth-form-field2">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="Auth-form-submit2" type="submit">
            Log In
          </button>
          <div className="button2">
            <button onClick={handleClick}>
              Don't have an account? Sign up here
            </button>
          </div>
          <div className="home-button">
            <button onClick={handleClickhome}>
              <img src="https://i.imgur.com/89pNxOm.png" alt="wizard" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
