import React, { useState } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function SignUpForm() {
  const { signup } = useToken();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(username, password, email);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage(String(error));
    }
  };

  const handleClick = () => {
    navigate("/login");
  };

  const handleClickhome2 = () => {
    navigate("/");
  };

  return (
    <div className="Auth-form-container">
      <h1 className="Quizard-text">
        Do you have what it takes to become the most powerful Quizard?
      </h1>
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Sign up for an account</h2>
          <div className="Auth-form-field">
            <label htmlFor="username">Create Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="Auth-form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="Auth-form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit" className="Auth-form-submit">
            Sign Up!
          </button>
          <div className="button">
            <button onClick={handleClick}>
              Already have an account? Login here
            </button>
            <div className="home-button2">
              <button onClick={handleClickhome2}>
                <img src="https://i.imgur.com/NcspCcg.png" alt="wizard" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
